/*
*预警分析结果图层编辑脚本
*editor:cxm
*2014年3月7日 11:46:12
*/

//画笔图层（容纳拉框之矩形）
var editDrawLayer;
var layerWp;
var layerWl;
var editFlashLayer;
var flashTimeID;
var featureAll = null;

function layerEdit() {
    //var featureAll = null;
    var queryTimeID = null;
    var oldFidIndex = 0;
    var showStyle = OpenLayers.Feature.Vector.style["select"];
    var hideStyle = OpenLayers.Feature.Vector.style["delete"];
    var layerGDBP = layerWp;

    editDrawLayer = new OpenLayers.Layer.Vector("editDrawLayer");
    fullMap.addLayer(editDrawLayer);

    //修改区
    //$(".wratcXG").unbind("click");
    $(".wratcXG").click(function () {
        $(".wratcTitleCls").eq(3).html("修改");
        if (flashTimeID) {
            clearTimeout(flashTimeID);
            editFlashLayer.drawFeature(editFlashLayer.features[oldFidIndex], hideStyle);
        }

        featureAll = [];
        
        layerGDBP = layerWp;

        //当前底图上是否存在画笔图层
        if (editDrawLayer) {
            editDrawLayer.removeAllFeatures();
        } else {
            editDrawLayer = new OpenLayers.Layer.Vector("editDrawLayer");
            fullMap.addLayer(editDrawLayer);
        }

        //初始化画笔工具：矩形
        editDrawControl = new OpenLayers.Control.DrawFeature(editDrawLayer, OpenLayers.Handler.RegularPolygon);
        var polyOption = { sides: 4, snapAngle: 90, irregular: true };
        editDrawControl.handler.setOptions(polyOption);
        fullMap.addControl(editDrawControl);

        //激活画笔
        editDrawControl.activate();

        //拉框完成后回调
        editDrawControl.featureAdded = onAreaStopDraw;
        return false;
    });


    ////删除线
    //$(".wratcSC").click(function () {
    //    if (flashTimeID) {
    //        clearTimeout(flashTimeID);
    //        editFlashLayer.drawFeature(editFlashLayer.features[oldFidIndex], hideStyle);
    //    }
    //    //$("#ifd_edit .warn_listContent>ul").html("");
    //    $(".wratcTitleCls").eq(3).html("删除");
    //    //$("#ifd_globalTip").text("请拉框选择要删除的线要素...");
    //    //$(".if_btnEditCancel").prop("disabled", false);
    //    featureAll = [];
    //    layerGDBP = layerWl;
    //    if (editDrawLayer) {
    //        editDrawLayer.removeAllFeatures();
    //    } else {
    //        editDrawLayer = new OpenLayers.Layer.Vector("editDrawLayer");
    //        fullMap.addLayer(editDrawLayer);
    //    }

    //    editDrawControl = new OpenLayers.Control.DrawFeature(editDrawLayer, OpenLayers.Handler.RegularPolygon);
    //    var polyOption = { sides: 4, snapAngle: 90, irregular: true };
    //    editDrawControl.handler.setOptions(polyOption);

    //    fullMap.addControl(editDrawControl);
    //    editDrawControl.activate();
    //    editDrawControl.featureAdded = onAreaStopDraw;
    //});
    //取消当前的状态
    $(".wratcQX").click(function () {
        oldFidIndex = 0;
        featureAll = null;
        editDrawControl.deactivate();
        //$("#uid_fullToolbar ul").find('.pan').click();
        if (flashTimeID) {
            clearTimeout(flashTimeID);
            editFlashLayer.drawFeature(editFlashLayer.features[oldFidIndex], hideStyle);
        }
        $(".wratcInfo").empty();//清空列表
        //屏蔽提交和取消按钮
        $(".wratcQX").css("color", "#ababab");
        $(".wratcTJ").css("color", "#ababab");
        fidChangedList = [];
    });

    //绘制结束后回调函数
    function onAreaStopDraw(feature) {
        oldFidIndex = 0;
        var request = new Zondy.Service.HttpRequest();

        //所画矩形四个顶点坐标
        var pointStr = "";
        for (var i = 0; i < feature.geometry.components[0].components.length; i++) {
            pointStr = pointStr + "," + feature.geometry.components[0].components[i].x + "," + feature.geometry.components[0].components[i].y;
        }
        pointStr = pointStr.substring(1, pointStr.length);

        //调用REST服务进行空间查询，layerGDBP指预警结果图层
        var url = "http://"+R2.gisIp+":" + R2.gisPort + "/igs/rest/mrfs/layer/query?gdbp=" + layerGDBP +
        "&geometryType=polygon&structs={IncludeGeometry:true,IncludeWebGraphic:true,IncludeAttribute:true}&geometry=" + pointStr + "&f=json&pageCount=1000";
        request.ajax(url, null, function (data) {
            //返回所有符合拉框条件的要素
            featureAll = data; 
            if (data.TotalCount == 0) {
                alert("查询结果为空");
                return;
            }
            //将符合结果的要素进行闪烁
            editFlashLayer = newFeaturesLayer(data);
            freshEditList(data); //刷新数据
        }, 'get');

        feature.destroy(); //查询结束后销毁所绘制矩形
        editDrawControl.deactivate(); //反激活画笔

    }

    //新建闪烁图层
    function newFeaturesLayer(feature) {
        var total = feature.TotalCount;
        var style = OpenLayers.Util.extend({ fill: true, stroke: true }, hideStyle);

        if (editFlashLayer) {
            editFlashLayer.removeAllFeatures();
            fullMap.removeLayer(editFlashLayer);
            editFlashLayer = {};
        }
        editFlashLayer = new OpenLayers.Layer.Vector("editFlashLayer");
        var sfeat = [];
        for (var i = 0; i < total; i++) {
            var geoType = feature.SFEleArray[i].ftype;
            var fgeom = feature.SFEleArray[i].fGeom;
            var feat;
            switch (geoType) {
                case 1: //点类型
                    feat = new OpenLayers.Feature.Vector(
                         new OpenLayers.Geometry.Collection([
                             new OpenLayers.Geometry.Point(fgeom.PntGeom[0].Dot.x, fgeom.PntGeom[0].Dot.y)]), null, style);
                    sfeat.push(feat);
                    break;
                case 2: //线类型
                    var DotsArr = [];
                    for (var n = 0; n < fgeom.LinGeom[0].Line.Arcs[0].Dots.length; n++) {
                        DotsArr.push(new OpenLayers.Geometry.Point(fgeom.LinGeom[0].Line.Arcs[0].Dots[n].x, fgeom.LinGeom[0].Line.Arcs[0].Dots[n].y))
                    }
                    feat = new OpenLayers.Feature.Vector(
                             new OpenLayers.Geometry.Collection([
                                   new OpenLayers.Geometry.LineString(DotsArr)]), null, style);
                    sfeat.push(feat);
                    break;
                case 3: //面类型
                    var RingsArr = [];
                    for (var n = 0; n < fgeom.RegGeom[0].Rings.length; n++) {
                        var DotsArr = [];
                        for (var j = 0; j < fgeom.RegGeom[0].Rings[n].Arcs[0].Dots.length; j++) {
                            DotsArr.push(new OpenLayers.Geometry.Point(fgeom.RegGeom[0].Rings[n].Arcs[0].Dots[j].x, fgeom.RegGeom[0].Rings[n].Arcs[0].Dots[j].y))
                        }
                        RingsArr.push(new OpenLayers.Geometry.LinearRing(DotsArr));
                    }
                    feat = new OpenLayers.Feature.Vector(
                              new OpenLayers.Geometry.Polygon(RingsArr), null, style); //有图层空洞的现象存在
                    sfeat.push(feat);
                    break;
            };
        }
        editFlashLayer.addFeatures(sfeat);
        fullMap.addLayer(editFlashLayer);

        return editFlashLayer;
    }
    //图形绘制完成后对图层要素的操作
    function freshEditList(feature) {
       
        fidChangedList = [];
        gradeList = [100, 120, 140, 160];
        colorList = [];
        var total = feature.TotalCount;
        if (total == 0) { return; }
        var geoType = feature.SFEleArray[0].ftype;
        if (geoType == 3) {
            for (var k = 0; k < feature.AttStruct.FldNumber; k++) {
                if (feature.AttStruct.FldName[k] == "终止值") {
                    gwpIndex = k;
                    break;
                }
            }
            //给列表赋值
            $(".wratcInfo").empty();
            for (var i = 0; i < total; i++) {
                var startVal = feature.SFEleArray[i].AttValue[gwpIndex];
                var row = '<div class="wraRow">' +
                                        '<div class="wraCol1">'+(i+1)+'</div>' +
                                        '<div class="wraCol2">'+feature.SFEleArray[i].FID+'</div>' +
                                        '<div class="wraCol3"><select>' +
                                              '<option value="' + gradeList[0] + '">无</option>' +
                                              '<option value="' + gradeList[1] + '">黄色</option>' +
                                              '<option value="' + gradeList[2] + '">橙色</option>' +
                                              '<option value="' + gradeList[3] + '">红色</option>' +
                                        '</select></div>'+
                                        '<div class="wraCol4"><div class="wraGou"></div></div>' +
                                '</div>';
                $(".wratcInfo").append(row);
                $(".wraRow").eq(i).find("select").val(startVal);
            }
        } else if (geoType == 2) {
            for (var k = 0; k < feature.AttStruct.FldNumber; k++) {
                if (feature.AttStruct.FldName[k] == "UserID") {
                    gwlIndex = k;
                    break;
                }
            }
            //给列表赋值
            $(".wratcInfo").empty();
            for (var i = 0; i < total; i++) {
                var startVal = feature.SFEleArray[i].AttValue[gwlIndex];
                var row = '<div class="wraRow">' +
                                        '<div class="wraCol1">'+(i+1)+'</div>' +
                                        '<div class="wraCol2">'+feature.SFEleArray[i].FID+'</div>' +
                                        '<div class="wraCol3"><select>' +
                                              '<option value="' + gradeList[0] + '">无</option>' +
                                              '<option value="' + gradeList[1] + '">黄色</option>' +
                                              '<option value="' + gradeList[2] + '">橙色</option>' +
                                              '<option value="' + gradeList[3] + '">红色</option>' +
                                        '</select></div>'+
                                        '<div class="wraCol4"><div class="wraGou"></div></div>' +
                                '</div>';
                $(".wratcInfo").append(row);
                $(".wraRow").eq(i).find("select").val(startVal);
            }
        }
        $(".wraRow:odd").addClass("oRow");
        $(".wraRow").hover(function () {
            $(this).addClass("wraRow_hover");
        }, function () {
            $(this).removeClass("wraRow_hover");
        });
        //激活提交按钮
        $(".wratcQX").css("color", "#3c6c95");
        $(".wratcTJ").css("color", "#3c6c95");
        //闪烁所选图层
        $(".wraRow").click(function () {
            var index = $(".wraRow").index(this);
            $(".wraRow").removeClass("wraRow_click");
            $(this).addClass("wraRow_click");
            if (flashTimeID) {
                clearTimeout(flashTimeID);
                editFlashLayer.drawFeature(editFlashLayer.features[oldFidIndex], hideStyle);
            }
            flashFeature(index, 30);
            oldFidIndex = index;
        });
        //修改所选区的预警等级
        $(".wraCol4").toggle(function () {
            $(this).find(".wraGou").addClass("wraGouSelect");
            var fidIndex = $(".wraCol4").index(this);
            var startVal = $(this).parents(".wraRow").find("select").val();
            fidChangedList.push({ index: fidIndex, val: startVal });
        }, function () {
            $(this).find(".wraGou").removeClass("wraGouSelect");
            var fidIndex = $(".wraCol4").index(this);
            for (var i = 0; i < fidChangedList.length; i++) {
                if (fidChangedList[i].index == fidIndex) {
                    fidChangedList.splice(i, 1);
                    break;
                }
            }
        });
    }
    //提交修改
    $(".wratcTJ").unbind("click");
    $(".wratcTJ").click(function () {
        if (flashTimeID) {
            clearTimeout(flashTimeID);
            editFlashLayer.drawFeature(editFlashLayer.features[oldFidIndex], hideStyle);
        }
        //if (!fidChangedList || fidChangedList.length == 0) {
        //    alert("没有要提交的编辑数据！");
        //    return;
        //}
        //        $("#ifd_edit .warn_listContent>ul").html("");
        //        $(".if_btnEditCancel").prop("disabled", false);
        //        $(".if_btnEditOk").prop("disabled", false);
        //var ulid = "#ifd_edit .warn_listContent>ul";
        var colorList = [7,4,168,6];
        if ($(".wratcTitleCls").eq(3).html() == "修改") {
            //修改区的等级
            if (fidChangedList.length == 0) {
                alert("请勾选需要修改的区");
                return;
            }
            for (var i = 0; i < fidChangedList.length; i++) {
                var fidIndex = fidChangedList[i].index;
                var startVal = fidChangedList[i].val;
                var colorVal = 0;                //获得填充区的颜色
                for (var j = 0; j < gradeList.length; j++) {
                    if (startVal == gradeList[j]) {
                        colorVal = colorList[j];
                        break;
                    }
                }
                featureAll.SFEleArray[fidIndex].GraphicInfo.RegInfo.FillColor = colorVal;
                featureAll.SFEleArray[fidIndex].AttValue[gwpIndex] = startVal;
            }
            //提交修改
            var alterService = new Zondy.Service.EditLayerFeature(layerGDBP, { ip:R2.gisIp, port: R2.gisPort });
            alterService.update(featureAll, function (rlt) {
                //$(".if_btnEditOk").prop("disabled", true);
                //$(".if_btnEditCancel").prop("disabled", true);
                //$("#ifd_globalTip").text("");
                //$("#ifd_edit .warn_listContent>ul").html("");

                if (rlt == "true" || rlt) {
                    alert("修改要素属性成功");
                    showWarningLayer(layerWp);
                    //图层编辑后，预警结果分析需要重新计算
                    //listVar.d = [];
                    //listSta.data = null;
                    //listCity.data = null;
                    //listCity.overLayer = null;
                    //listSta.overLayer = null;
                    //storeLastNewResult = {};
                } else {
                    alert("修改要素属性失败");
                }
            });
        } else {
            //删除线
            //var list = $(ulid + ">li");
            //for (var i = 0; i < fidChangedList.length; i++) {
            //    var fidIndex = fidChangedList[i].index;
            //    var fid = featureAll.SFEleArray[fidIndex].FID;
            //    var deleteService = new Zondy.Service.EditLayerFeature(layerGDBP, { ip: "192.168.83.87", port: "6163" });
            //    deleteService.deletes(fid, function (rlt) {
            //        //$(".if_btnEditOk").prop("disabled", true);
            //        //$(".if_btnEditCancel").prop("disabled", true);
            //        //$("#ifd_globalTip").text("");
            //        //$("#ifd_edit .warn_listContent>ul").html("");
            //        if (rlt == "true" || rlt) {
            //            if (featureAll.TotalCount > 0) {
            //                //showWarnLayer(globalData.LayerName, Zondy.Project.WarnBaseLayers);
            //                addYJLayer();
            //                alert("删除要素属性成功");
            //            }
            //        } else {
            //            alert("删除要素属性成功");
            //        }
            //    });
            //}
        }
    });

    //闪烁图元
    function flashFeature(index, flashTimes) {
        if (flashTimes > 0) {
            if (flashTimes % 2 == 0) {//模2取余数来间隔显示要素，实现闪烁
                editFlashLayer.drawFeature(editFlashLayer.features[index], showStyle);
            } else {
                editFlashLayer.drawFeature(editFlashLayer.features[index], hideStyle);
            }
            flashTimes--;
            flashTimeID = setTimeout(function () { flashFeature(index, flashTimes); }, 600);
        } else {
            editFlashLayer.drawFeature(editFlashLayer.features[index], hideStyle);
            clearTimeout(flashTimeID);
        }
    }
    //修改后重新加载图层
    function showWarningLayer(layerWp) {
        var gdbps = [];

        gdbps.push(layerWp);
        if (fullMap.getLayersByName("warningLayer").length>0) {
            fullMap.removeLayer(R2.mapVector);
        }

        R2.mapVector = new Zondy.Map.Layer("warningLayer", gdbps,
            {
                ip: R2.gisIp,
                port: R2.gisPort,
                transitionEffect: "resize",
                singleTile: true,
                isBaseLayer: false,
                ration: 1,
                turnOnGuid: true
            });
        R2.mapVector.setOpacity(1);
        fullMap.addLayer(R2.mapVector);
        fullMap.setLayerIndex(R2.mapVector, 1);
        
    };
}
