/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/OpenLayers.js" />
//控制返回按钮的状态
var stuate_Markers = false;
function layQueryResult(data) {
    //$(".ui_leftPanel2").hide();
    //$(".ui_leftPanel").hide();
    //$(".ui_leftPanel1").show();
    if (data != null) {
        var bdInfoList = new R2.Business.QueryResultWithPageCtl({ data: data });
        //bdInfoList.initialize();
        //showQResult.init(data);

    }
    //$(".show_all").die();
    //$(".show_all").live("click", function () {
    //    MarkEventClosePop();

    //    if ($(".show_all").hasClass("added")) {
    //        if (marklayer_all != null || marklayer_all != undefined) {
    //            removeMarkerLayer(marklayer_all);
    //            //marklayer_all.display(false);
    //            stuate_Markers = false;
    //        }
    //        $(".show_all").removeClass("added")
    //        marklayer.display(true);
    //    } else {
    //        showAllMarkers();
    //        $(".show_all").addClass("added");
    //        marklayer.display(false);
    //        stuate_Markers = true;
    //    }
    //});
};
var marklayer;
var pupupArray = [];
var markersArray = [];
var OldImage = "";
var globalIndex = -1;
R2.Business.QueryResultWithPageCtl = OpenLayers.Class({
    data: null,
    image: "",
    html: '<div id="sqrheader" class="ui_menuTitle" style="z-index:31000;">' +
            '<div id="pageMana" class="listPage">' +
                  '<div class="firstPage_sqir">首 页</div>' +
                '<div class="prevPage_sqir">上一页</div>' +
                '<div class="currentPage_sqir"></div>' +
                '<div class="nextPage_sqir">下一页</div>' +
                '<div class="lastPage_sqir">最后一页</div>' +
                '<div class="show_all"></div>' +
             '</div>' +
        '<div class="bd_return"></div>' +

             '</div>' +
'<div style="width:370px;overflow:hidden; position:absolute; top:52px; bottom:0;">' +
        '<div id="showQresult">' +

             '<div id="sqrContent" >' +
             '</div>' +
        '</div>' +
'</div>',
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        //if (marklayer != null) {
        //    marklayer.clearMarkers();
        //    fullMap.removeLayer(marklayer);
        //}
        //for (var i = pupupArray.length; i > 0; i--) {
        //    fullMap.removePopup(pupupArray[i - 1]);
        //    pupupArray.splice(i, 1);
        //}
        $("#showQresult").parent().remove();
        $("#ui_left > div").hide();
        $("#sqrheader").remove();
        $("#ui_left").append(this.html);
        if (stuate_Markers) {
            $(".show_all").addClass("added");
        }
        this.changLonLat();

        var length_data = this.data.length;
        for (var i = 0; i < length_data; i++) {
            if (this.data[i].DiskPath == null) {
                this.data[i].image = baseUrl + "Content/baseInfoImg/山东省/济南市/平阴县/图片/灾害图/" + (parseInt(Math.random() * 10)).toString() + ".jpg";
            }
            else {
                var imgpath = this.data[i].DiskPath;
                var srcPath = baseUrl + imgpath.substring(1, imgpath.length);
                this.data[i].image = srcPath;
            }
            this.data[i].灾害规模等级 = (this.data[i].灾害规模等级 == "" || this.data[i].灾害规模等级 == null) ? "暂无信息" : this.data[i].灾害规模等级;
            this.data[i].灾情等级 = (this.data[i].灾情等级 == "" || this.data[i].灾情等级 == null) ? "暂无信息" : this.data[i].灾情等级;
            this.data[i].险情等级 = (this.data[i].险情等级 == "" || this.data[i].险情等级 == null) ? "暂无信息" : this.data[i].险情等级;
        }
        globalIndex = -1;
        var sqrPagehtml = "";
        var Features = [];
        for (var i = 0; i < length_data ; i++) {
            sqrPagehtml += this.createList(i);
            Features.push(this.data[i]);
        }
        $("#sqrContent").empty();
        $("#sqrContent").append(sqrPagehtml);
        this.ReturnToInit_sqr();
        //createPops(Features);

        //MessBoxEvent();
        //$(".sqr_MessBox").click(function () {
        //    var i = $(".sqr_MessBox").index(this);
        //    var lon = Features[i].经度;
        //    var lat = Features[i].纬度;
        //    Features[i].IndexNum = $(this).index();
        //    fullMap.setCenter(new OpenLayers.LonLat(lon, lat), 6);
        //    CreatePopup_InBox(Features[i]);

        //})

    },
    ReturnToInit_sqr: function () {
        $(".bd_return").click(function () {
            $("#showQresult").parent().remove();
            $("#ui_left > div").show();
            $("#sqrheader").remove();
            $(".cardRight").remove(); //删除右边
            //if (marklayer != null || marklayer_all != undefined) {
            //    fullMap.removeLayer(marklayer);
            //}
            //if (marklayer_all != null || marklayer_all != undefined) {
            //    //fullMap.removeLayer(marklayer_all);
            //    marklayer_all.clearMarkers();
            //}
            //var feature = fullMap.getLayersByName("Polygon Layer")[0].features;
            //for (var i = 0; i < feature.length; i++) {
            //    fullMap.getLayersByName("Polygon Layer")[0].removeFeatures(feature[i]);
            //}

            //for (var i = pupupArray.length; i > 0; i--) {
            //    fullMap.removePopup(pupupArray[i - 1])
            //}
            //marklayer = null;
            //drawControls["circleSearchBtn"].deactivate();
            //drawControls["rectSearchBtn"].deactivate();
        });
    },
    createList: function (pageIndex) {
        var sqrPagehtml = "";

        var ss = this.data[pageIndex].地理位置;
        var name = this.data[pageIndex].名称;
        var location_sqr = (ss.length > 35) ? ss.substring(0, 35) + ".." : ss;
        var name_sqr = (name.length > 13) ? name.substring(0, 12) + ".." : name;

        var temp = '<div class="sqr_MessBox">' +
                            '<div class="sqr_MessBoxTop">' +
                                   '<div class="sqr_MessBoxleft">' +
                                        '<div class="sqr_MessBoxInfo" style=" height:28px;">' +
                                            '<div class="sqr_MessBoxInfoImg " ><img height="20"  border=0  width="20" src="' + baseUrl + 'Content/images/marks/' + this.data[pageIndex].灾害类型 + '.png" /></div>' + '<div class="sqr_MessBoxInfoText2" title="' + this.data[pageIndex].名称 + '" >' + name_sqr + '</div>' +
                                        '</div>' +
                                        '<div class="sqr_MessBoxInfo">' +
                                            '<div class="sqr_MessBoxInfoName">编号：</div>' + '<div class="sqr_MessBoxInfoText tybh">' + this.data[pageIndex].统一编号 + '</div>' +
                                        '</div>' +
                                        '<div class="sqr_MessBoxInfo">' +
                                            '<div class="sqr_MessBoxInfoName">灾情：</div>' + '<div class="sqr_MessBoxInfoText">' + this.data[pageIndex].灾害规模等级 + '</div>' +
                                        '</div>' +
                                        '<div class="sqr_MessBoxInfo">' +
                                            '<div class="sqr_MessBoxInfoName">险情：</div>' + '<div class="sqr_MessBoxInfoText">' + this.data[pageIndex].险情等级 + '</div>' +
                                        '</div>' +
                                   '</div>' +
                                '<div class="sqr_MessBoxright">' +
                                     '<img height="86" class="sqr_MessBoxrightImg" width="130" src="' + this.data[pageIndex].image + '" />' +
                                '</div>' +
                            '</div>' +
                                '<div class="sqr_MessBoxBottom">' +
                                      '<div class="sqr_MessBoxInfoName">地点：</div>' + '<div class="sqr_MessBoxInfoText" style="width:285px;" title="' + this.data[pageIndex].地理位置 + '">' + location_sqr + '</div>' +
                                '</div>' +
                        '</div>';
        return temp;
    },
    //经纬度格式化
    changLonLat: function () {
        for (var i = 0; i < this.data.length; i++) {
            var jingdu = this.data[i].经度;
            var weidu = this.data[i].纬度;
            if (jingdu.indexOf('-') >= 0) {
                var jds = jingdu.split('-');
                var wds = weidu.split('-');
                var mylon = 0;
                var mylat = 0;
                mylon = parseInt(jds[0]) + parseInt(jds[1]) / 60 + parseFloat(jds[2]) / 3600;
                mylat = parseInt(wds[0]) + parseInt(wds[1]) / 60 + parseFloat(wds[2]) / 3600;

                this.data[i].经度 = mylon.toFixed(3);
                this.data[i].纬度 = mylat.toFixed(3);
            }
        }
    }
});

//function createPops(fInfo) {
//    marklayer = new OpenLayers.Layer.Markers("marklayer");
//    fullMap.addLayer(marklayer);
//    var Flength = fInfo.length;

//    var icon;
//    var markerr;
//    for (var i = 0; i < Flength; i++) {


//        fInfo[i].IndexNum = i;
//        icon = new OpenLayers.Icon(baseUrl + "Content/images/marks/" + fInfo[i].灾害类型 + ".png", new OpenLayers.Size(20, 20), null, null);
//        markerr = new OpenLayers.Marker(new OpenLayers.LonLat(fInfo[i].经度, fInfo[i].纬度), icon);
//        markerr.id = i + "";
//        markerr.data = fInfo[i];
//        markerr.events.register("mousedown", markerr, function (evt) {
//            mousedown(evt);
//            //OpenLayers.Event.stop(evt);
//        });
//        marklayer.addMarker(markerr);
//    }
//};

function mousedown(evt) {
    id = "id" + evt.object.data.统一编号;
    var longitude = evt.object.lonlat.lon;          //mark点的经度
    var latitude = evt.object.lonlat.lat;           //mark点的纬度
    var editorUrl = "";  //信息编辑URl
    var BaseUrl = "";    //基础信息URL
    var FzyaUrl = "";    //防灾预案URl
    var ZqsbUrl = ""     //灾情速报URL
    var QcqfUrl = "";    //群测群防URl
    var DisaType = "01";
    DisaType = evt.object.data.灾害类型;
    switch (DisaType) {
        //滑坡
        case "01":
            editorUrl = baseUrl + "InfoEdit/EditLandSlide?landSlideId=" + evt.object.data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Hpresult?tybh=" + evt.object.data.统一编号;
            break;
            //崩塌
        case "02":
            editorUrl = baseUrl + "InfoEdit/EditCollapse?collapseId=" + evt.object.data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Btresult?tybh=" + evt.object.data.统一编号;
            break;
            //泥石流
        case "03":
            editorUrl = baseUrl + "InfoEdit/EditMudFlow?mudFlowId=" + evt.object.data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Nslresult?tybh=" + evt.object.data.统一编号;
            break;
            //地面塌陷
        case "04":
            editorUrl = baseUrl + "InfoEdit/EditGroundSubside?groundSubsideId=" + evt.object.data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Dmtxresult?tybh=" + evt.object.data.统一编号;
            break;
            //地面沉降
        case "05":
            editorUrl = baseUrl + "InfoEdit/EditGroundSettle?groundSettleId=" + evt.object.data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Dmcjresult?tybh=" + evt.object.data.统一编号;
            break;
            //地裂缝
        case "06":
            editorUrl = baseUrl + "InfoEdit/EditLandCrack?landCrackId=" + evt.object.data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Dlfresult?tybh=" + evt.object.data.统一编号;
            break;
        default:
            break;
    }
    //var showurl = fullPanel.showByIFrame(url);
    var ppp = new Rrteam.Control.RrPopup(id, longitude, latitude, true, MarkEventClosePop, {
        titleTemp: evt.object.data.名称,
        firstTemp: "编号:" + evt.object.data.统一编号,
        secondTemp: "灾害类型:" + getDisaTypes(evt.object.data.灾害类型),
        thirdTemp: "灾害规模等级:" + evt.object.data.灾害规模等级,
        fourthTemp: "险情等级:" + evt.object.data.险情等级,
        footTemp: "地理位置:" + evt.object.data.地理位置,
        imgUrl: evt.object.data.image,
        hrefTemp: ["基础信息", "防&nbsp;灾&nbsp;卡", "避&nbsp;险&nbsp;卡"],//, "防灾预案", "灾情速报", "群测群防", "防&nbsp;灾&nbsp;卡", "避&nbsp;险&nbsp;卡"
        hrefUrl: ["****", "**", "***"]//, "", "", "","",""
    });

    for (var i = pupupArray.length; i > 0; i--) {
        fullMap.removePopup(pupupArray[i - 1]);
        pupupArray.splice(i, 1);
    }
    pupupArray.push(ppp);
    fullMap.addPopup(ppp);
    $(".rrPopupADiv").children("a").css("color", "#666");
    $("#rrPopupA0").css("color", "#325E7E");
    $(".rrPopupADiv").children("a").css("cursor", "pointer");

    //避险明白卡URL 
    $.post(baseUrl + "QueryHedgeCard/HasHedge", { "Tid": evt.object.data.统一编号 }, function (datas1) {
        if (datas1 != "fail") {
            $("#rrPopupA2").css("color", "#325E7E");
            $("#rrPopupA2").removeAttr("disabled");
        }
        else {
            hedgeUrl = "";
            $("#rrPopupA2").attr("disabled", "disabled")
            $("#rrPopupA2").css("color", "#666");
            return false;
        }
    });

    //防灾
    $.post(baseUrl + "DisasterCard/HasWorkCard", { "Tid": evt.object.data.统一编号 }, function (datas) {
        if (datas != "fail") {
            workUrl = baseUrl + "DisasterCard/EditWorkCard?editWorkCardId=" + datas;
            $("#rrPopupA1").css("color", "#325E7E");
            $("#rrPopupA1").removeAttr("disabled");
        }
        else {
            workUrl = "";
            $("#rrPopupA1").attr("disabled", "disabled")
            $("#rrPopupA1").css("color", "#666");
        }
    });


    $("#rrPopupA0").click(function () {
        //fullPanel.showByIFrame(BaseUrl);
    })
    //防灾卡
    $("#rrPopupA1").click(function () {
        //if (workUrl != "") {
        //    top.fullPanel.showByIFrame(workUrl);
        //}
        //showPreventionCard(BaseUrl);        
        //var fzcard = new R2.Business.Card({
        //    baseUrl: BaseUrl,
        //    type: "preventionCard"
        //});
        //fangzaika();
    })
    //避险URL
    $("#rrPopupA2").click(function () {
        //if (hedgeUrl != "") {
        //    top.fullPanel.showByIFrame(hedgeUrl);
        //}
        //var bxcard = new R2.Business.Card({
        //    baseUrl: BaseUrl,
        //    type: "hedgeCard"
        //});
        //bixianka();
    })

    //信息编辑URl
    $("#rrPopupEditorA").click(function () {
        //top.fullPanel.showByIFrame(editorUrl);
        return false;
    })

    if (globalIndex != -1) {
        $(".sqr_MessBox").eq(globalIndex).find(".sqr_MessBoxInfoImg").find("img").attr("src", OldImage);
    }
    var 统一编号 = evt.object.data.统一编号;
    $(".sqr_MessBox").removeClass("sqr_MessBoxhover");
    for (var i = 0; i < 10; i++) {
        if ($(".tybh").eq(i).html() != null) {
            if ($(".tybh").eq(i).html().toString().trim() == 统一编号.toString().trim()) {
                globalIndex = i;
                $("#showQresult").animate({ "scrollTop": i * 120 });
                $(".sqr_MessBox").removeClass("sqr_MessBoxhover");
                $(".sqr_MessBox").eq(i).addClass("sqr_MessBoxhover").siblings().removeClass("sqr_MessBoxhover");
                if (OldImage == "") {
                    OldImage = $(".sqr_MessBox").eq(i).find(".sqr_MessBoxInfoImg").find("img").attr("src");
                }
                if (OldImage != undefined) {
                    var NewImage = OldImage.replace(".png", "-1.png");
                    $(".sqr_MessBox").eq(i).find(".sqr_MessBoxInfoImg").find("img").attr("src", NewImage);
                }
            }
        }
    }
}

function MarkEventClosePop() {
    $(".sqr_MessBox").eq(globalIndex).removeClass("sqr_MessBoxhover");
    $(".sqr_MessBox").eq(globalIndex).find(".sqr_MessBoxInfoImg").find("img").attr("src", OldImage);
    for (var i = pupupArray.length; i > 0; i--) {
        fullMap.removePopup(pupupArray[i - 1]);
        pupupArray.splice(i, 1);
    }
}
var hedgeUrl = "";    //防灾卡URl
var workUrl = "";
function CreatePopup_InBox(data) {
    id = "id" + data.统一编号;
    var longitude = data.经度;          //mark点的经度
    var latitude = data.纬度;           //mark点的纬度
    var disaType = getDisaTypes(data.灾害类型.toString());

    var editorUrl = "";  //信息编辑URl
    var BaseUrl = "";    //基础信息URL
    var FzyaUrl = "";    //防灾预案URl
    var ZqsbUrl = ""     //灾情速报URL
    var QcqfUrl = "";    //群测群防URl
    var hedgeUrl = "";    //防灾卡URl
    var preventionUrl = "";    //避险卡URl
    var DisType = "01";
    DisType = data.灾害类型;
    switch (DisType) {
        //滑坡
        case "01":
            editorUrl = baseUrl + "InfoEdit/EditLandSlide?landSlideId=" + data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Hpresult?tybh=" + data.统一编号;
            break;
            //崩塌
        case "02":
            editorUrl = baseUrl + "InfoEdit/EditCollapse?collapseId=" + data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Btresult?tybh=" + data.统一编号;
            break;
            //泥石流
        case "03":
            editorUrl = baseUrl + "InfoEdit/EditMudFlow?mudFlowId=" + data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Nslresult?tybh=" + data.统一编号;
            break;
            //地面塌陷
        case "04":
            editorUrl = baseUrl + "InfoEdit/EditGroundSubside?groundSubsideId=" + data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Dmtxresult?tybh=" + data.统一编号;
            break;
            //地面沉降
        case "05":
            editorUrl = baseUrl + "InfoEdit/EditGroundSettle?groundSettleId=" + data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Dmcjresult?tybh=" + data.统一编号;
            break;
            //地裂缝
        case "06":
            editorUrl = baseUrl + "InfoEdit/EditLandCrack?landCrackId=" + data.统一编号;
            BaseUrl = baseUrl + "InfoShow/Dlfresult?tybh=" + data.统一编号;
            break;
        default:
            break;
    }

    var ppp = new Rrteam.Control.RrPopup(id, longitude, latitude, true, MarkEventClosePop, {
        titleTemp: data.名称,
        firstTemp: "编号:" + data.统一编号,
        secondTemp: "灾害类型:" + disaType,
        thirdTemp: "灾害规模:" + data.灾害规模等级,
        fourthTemp: "险情等级:" + data.险情等级,
        footTemp: "地理位置:" + data.地理位置,
        imgUrl: data.image,
        hrefTemp: ["基础信息", "防&nbsp;灾&nbsp;卡", "避&nbsp;险&nbsp;卡"],//, "防灾预案", "灾情速报", "群测群防", ZHAOs 2014年3月26日14:23:54
        hrefUrl: ["**", "**", "**"]//, "", "", "","",""
    })
    for (var i = pupupArray.length; i > 0; i--) {
        fullMap.removePopup(pupupArray[i - 1]);
        pupupArray.splice(i, 1);
    }
    pupupArray.push(ppp);
    fullMap.addPopup(ppp);
    $(".rrPopupADiv").children("a").css("color", "#666");
    $("#rrPopupA0").css("color", "#325E7E");
    $(".rrPopupADiv").children("a").css("cursor", "pointer");

    //基础信息URL
    $("#rrPopupA0").click(function () {
        //fullPanel.showByIFrame(BaseUrl);
    })
    //防灾明白卡
    $("#rrPopupA1").click(function () {
        //if (workUrl != "") {
        //    top.fullPanel.showByIFrame(workUrl);
        //}
        var fzcard = new R2.Business.Card({
            baseUrl: BaseUrl,
            type: "preventionCard"
        });
        //fangzaika();
    })
    //避险明白卡URL
    $("#rrPopupA2").click(function () {
        var bxcard = new R2.Business.Card({
            baseUrl: BaseUrl,
            type: "hedgeCard"
        });
    });

    //避险明白卡URL 
    $.post(baseUrl + "QueryHedgeCard/HasHedge", { "Tid": data.统一编号 }, function (datas1) {
        if (datas1 != "fail") {
            $("#rrPopupA2").css("color", "#325E7E");
            $("#rrPopupA2").removeAttr("disabled");

        }
        else {
            $("#rrPopupA2").attr("disabled", "disabled")
            $("#rrPopupA2").css("color", "#666");
        }
    });

    //防灾
    $.post(baseUrl + "DisasterCard/HasWorkCard", { "Tid": data.统一编号 }, function (datas) {
        if (datas != "fail") {
            $("#rrPopupA1").css("color", "#325E7E");
            $("#rrPopupA1").removeAttr("disabled");
        }
        else {
            $("#rrPopupA1").attr("disabled", "disabled")
            $("#rrPopupA1").css("color", "#666");
        }
    });


    //信息编辑URl
    $("#rrPopupEditorA").click(function () {
        //top.fullPanel.showByIFrame(editorUrl);
        return false;
    })

    if (globalIndex != -1) {
        $(".sqr_MessBox").eq(globalIndex).find(".sqr_MessBoxInfoImg").find("img").attr("src", OldImage);
    }
    var indexNum = data.IndexNum;
    globalIndex = indexNum;
    $(".sqr_MessBox").eq(indexNum).addClass("sqr_MessBoxhover").siblings().removeClass("sqr_MessBoxhover");

    OldImage = $(".sqr_MessBox").eq(indexNum).find(".sqr_MessBoxInfoImg").find("img").attr("src");
};

function MessBoxEvent() {
    $(".sqr_MessBox").hover(function () {
        //小图标
        if ($(this).index() != globalIndex) {
            jls = $(this).find(".sqr_MessBoxInfoImg").find("img").attr("src");
            //if (!jls.contains("-1.png")) {
            //    var ljs = "";
            //    ljs = jls.replace(".png", "-1.png");
            //    $(this).find(".sqr_MessBoxInfoImg").find("img").attr("src", ljs);
            //}
        }
    },
        function () {
            if ($(this).index() != globalIndex) {
                //if (!jls.contains("-1.png")) {
                //    $(this).find(".sqr_MessBoxInfoImg").find("img").attr("src", jls);
                //}
            }
        });

}
function getDisaTypes(s) {
    var val = "";
    switch (s) {
        case "00":
            val = "斜坡";
            break;
        case "01":
            val = "滑坡";
            break;
        case "02":
            val = "崩塌";
            break;
        case "03":
            val = "泥石流";
            break;
        case "04":
            val = "地面塌陷";
            break;
        case "05":
            val = "地面沉降";
            break;
        case "06":
            val = "地裂缝";
            break;
        default:
            val = "";
            break;
    }
    return val;
}
//下面这个图层用于在查询结果显示所有mark和隐藏所有mark所用，Guoyi 2014年3月28日13:45:00
var marklayer_all = new OpenLayers.Layer.Markers("marklayer_all");


function showAllMarkers() {
    fullMap.addLayer(marklayer_all);
    marklayer_all.clearMarkers();
    var icon;
    var marker;
    $.post(baseUrl + "DisasterQuery/GetAllDisaData", function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].IndexNum = i;
            if (data[i].DiskPath == null) {
                data[i].image = baseUrl + "Content/baseInfoImg/山东省/济南市/平阴县/图片/灾害图/" + (parseInt(Math.random() * 10)).toString() + ".jpg";
            }
            else {
                var imgpath = data[i].DiskPath;
                var srcPath = baseUrl + imgpath.substring(1, imgpath.length);

                data[i].image = srcPath;
            }

            icon = new OpenLayers.Icon(baseUrl + "Content/images/marks/" + data[i].灾害类型 + ".png", new OpenLayers.Size(20, 20), null, null);
            marker = new OpenLayers.Marker(new OpenLayers.LonLat(setLonLat(data[i].经度), setLonLat(data[i].纬度)), icon);
            marker.id = i + "";
            marker.data = data[i];
            marklayer_all.addMarker(marker);

            marker.events.register("mousedown", marker, function (evt) {
                mousedown(evt);
                //OpenLayers.Event.stop(evt);
            });
        }
    })
}

function removeMarkerLayer(layer_name) {
    if (marklayer_all != null || marklayer_all != undefined) {
        fullMap.removeLayer(layer_name);
    }
}


function setLonLat(lon) {
    var jingdu = lon;
    var jds = jingdu.split('-');
    var mylon = 0;
    mylon = parseInt(jds[0]) + parseInt(jds[1]) / 60 + parseFloat(jds[2]) / 3600;
    return mylon;
}

