//----------------------灾害点查询-------------------------//
//给String 拓展startWith方法
String.prototype.startWith = function (text) {
    return this.indexOf(text) == 0;
}

var disasterQuery = {
    html: '<div class="queryMain">' +
                '<p class="queryTitle">灾害查询</p>' +
                '<div class="queryArea queryArea1">' +
                    '<p class="query_titlep"><span class="query_icon"></span><span class="warn_name">功能查询</span></p>' +
                    '<div class="qyRegion qyRegion1">' +
                        '<div class="qyrow">' +
                            '<label class="selabel">所在市：</label>' +
                            '<div class="qySelect" id="qyCity"></div>' +
                        '</div>' +
                        '<div class="qyrow">' +
                            '<label class="selabel">所在县（区）：</label>' +
                            '<div class="qySelect" id="qyCounty"></div>' +
                        '</div>' +
                        '<div class="qyrow qyrow3">' +
                            '<label class="selabel">灾害类型：</label>' +
                            '<div class="qySelect" id="qyType">' +
                                '<input type="checkbox" class="qyTypeBox qyTypeBoxAll" value="全选" id="qychkAll">' +
                                '<label class="chklabel" for="qychkAll">全选</label>' +
                                //'<input type="checkbox" class="qyTypeBox" value="滑坡" id="qychk1">' +
                                //'<label class="chklabel" for="qychk1">滑坡</label>' +
                                '<input type="checkbox" class="qyTypeBox" value="地裂缝" id="qychk2">' +
                                '<label class="chklabel" for="qychk2">地裂缝</label>' +
                                '<input type="checkbox" class="qyTypeBox" value="地面塌陷" id="qychk3">' +
                                '<label class="chklabel" for="qychk3">地面塌陷</label>' +
                                '<input type="checkbox" class="qyTypeBox" value="滑坡" id="qychk1">' +
                                '<label class="chklabel" for="qychk1">滑坡</label>' +
                                '<input type="checkbox" class="qyTypeBox" value="泥石流" id="qychk6">' +
                                '<label class="chklabel" for="qychk6">泥石流</label>' +
                                '<input type="checkbox" class="qyTypeBox" value="崩塌" id="qychk5">' +
                                '<label class="chklabel" for="qychk5">崩塌</label>' +
                                //'<input type="checkbox" class="qyTypeBox" value="地面沉降" id="qychk7">' +
                                //'<label class="chklabel" for="qychk7">地面沉降</label>' +
                            '</div>' +
                        '</div>' +
                        '<div class="qyrow">' +
                            '<label class="selabel">险情大小：</label>' +
                            '<div class="qySelect" id="qyDangerous"></div>' +
                        '</div>' +
                        '<div class="qyrow">' +
                            '<div class="qybtn qybtn1" style="background:none;font-size:13px; border:none;width:auto; line-height:32px;">查 询</div>' +
                        '</div>' +
                    '</div>' +
                    '<p class="query_titlep" style="margin-top:15px;"><span class="query_icon query_icon2"></span><span class="warn_name">其他方式查询</span></p>' +
                    '<div class="qyRegion qyRegion2">' +
                        '<div class="qyOther qyFont"><div>关键字查询</div></div>' +
                        '<div class="qyOther qySpace"><div>空间查询</div></div>' +
                    '</div>' +
                '</div>' +
                '<div class="queryArea queryArea2">' +
                    '<p class="query_titlep"><span class="query_icon"></span><span class="warn_name">关键字查询</span></p>' +
                    '<div class="qyRegion qyRegion3">' +
                        '<label class="qyFontLabel">检 索：</label><input type="text" class="qyFontInput"/ value="灾点编号、市、县、灾害类型等关键字">' +
                        '<div class="qyrow">' +
                            '<div class="qybtn qybtn2">查 询</div>' +
                        '</div>' +
                    '</div>' +
                    '<p class="query_titlep" style="margin-top:20px;"><span class="query_icon query_icon2"></span><span class="warn_name">其他方式查询</span></p>' +
                    '<div class="qyRegion qyRegion2">' +
                        '<div class="qyOther qyRange"><div>功能查询</div></div>' +
                        '<div class="qyOther qySpace"><div>空间查询</div></div>' +
                    '</div>' +
                '</div>' +
                '<div class="queryArea queryArea3">' +
                    '<p class="query_titlep"><span class="query_icon"></span><span class="warn_name">空间查询</span></p>' +
                    '<div class="qyRegion qyRegion4">' +
                        '<div class="qyOther2 qySquare" id="rectSearchBtn"><div>拉框查询</div></div>' +
                        '<div class="qyOther2 qyCircle" id="circleSearchBtn"><div>画圆查询</div></div>' +
                    '</div>' +
                    '<p class="query_titlep" style="margin-top:20px;"><span class="query_icon query_icon2"></span><span class="warn_name">其他方式查询</span></p>' +
                    '<div class="qyRegion qyRegion2">' +
                        '<div class="qyOther qyRange"><div>功能查询</div></div>' +
                        '<div class="qyOther qyFont"><div>关键字查询</div></div>' +
                    '</div>' +
                '</div>' +
            '</div>',
    init: function () {
        this.addSelect();
        this.checkedEvt();
        $(".qyFont").click(function () {
            $(".queryArea1,.queryArea3").animate({ "left": "-380px" });
            $(".queryArea2").animate({ "left": "0" });
        });
        $(".qySpace").click(function () {
            $(".queryArea1,.queryArea2").animate({ "left": "-380px" });
            $(".queryArea3").animate({ "left": "0" });
        });
        $(".qyRange").click(function () {
            $(".queryArea2,.queryArea3").animate({ "left": "-380px" });
            $(".queryArea1").animate({ "left": "0" });
        });
        $(".qyFontInput").focus(function () {
            if (this.value == "灾点编号、市、县、灾害类型等关键字") {
                this.value = "";
            }
        })
        $(".qyFontInput").blur(function () {
            if (this.value == "") {
                this.value = "灾点编号、市、县、灾害类型等关键字";
            }
        })
    },
    //应用select插件
    addSelect: function () {
        this.citySel = new R2.Control.Ulselect("qyCity", "selcity", {
            optionText: ["济南市"],
            optionValue: false,
            parentWidth: "235px",
            parentHeight: "24px",
            border: "1px solid #ccc",
            zindex: 300,
            spanbg: "url(" + baseUrl + "Content/images/selectbg.png)"
        })
        this.countySel = new R2.Control.Ulselect("qyCounty", "selcounty", {
            optionText: ["全部", "市辖区", "高新区", "历下区", "市中区", "槐荫区", "天桥区", "历城区", "长清区", "平阴县", "济阳县", "商河县", "章丘市"],
            optionValue: ["", "370101", "370188", "370102", "370103", "370104", "370105", "370112", "370113", "370124", "370125", "370126", "370181"],
            parentWidth: "235px",
            parentHeight: "24px",
            border: "1px solid #ccc",
            zindex: 200,
            spanbg: "url(" + baseUrl + "Content/images/selectbg.png)"
        })
        this.dangerSel = new R2.Control.Ulselect("qyDangerous", "seldanger", {
            optionText: ["全部", "特大型", "大型", "中型", "小型"],
            parentWidth: "235px",
            parentHeight: "24px",
            border: "1px solid #ccc",
            zindex: 100,
            spanbg: "url(" + baseUrl + "Content/images/selectbg.png)"
        })
    },
    //checked事件
    checkedEvt: function () {
        $(".qyTypeBox").attr("checked", "checked");
        $(".qyTypeBoxAll").click(function () {
            $(".qyTypeBox:gt(0)").attr("checked", this.checked);
        })
        $(".qyTypeBox:gt(0)").click(function () {
            var conStr = "";
            conStr = $(".qyTypeBox:gt(0):checked").map(function () {
                return $(this).val();
            }).get().join(",");
            //if (conStr == "滑坡,地裂缝,地面塌陷,崩塌,泥石流,地面沉降") { ZHAOs 2014年4月8日19:56:21
            if (conStr == "地裂缝,地面塌陷,滑坡,泥石流,崩塌") {
                $(".qyTypeBoxAll").attr("checked", "checked");
            } else {
                $(".qyTypeBoxAll").removeAttr("checked");
            }
        })
    }
};



$(function () {
    window.disaQuery = null;
    disaQuery = new R2.Business.DisaQuery();
    disaClickEvtReg();
});

var pageIndex_sqr = 1;
function disaClickEvtReg() {
    $(".qybtn1").die();
    $(".qybtn1").live("click", function () {
        stuate_Markers = false;
        var regionCode = disasterQuery.countySel.returnAllValues();
        var disaGrade = disasterQuery.dangerSel.returnAllValues();
        if (disaGrade == "全部") {
            disaGrade = "特大型,大型,中型,小型";
        }
        var disaTypeStr = "";
        disaTypeStr = $(".qyTypeBox:gt(0):checked").map(function () {
            return $(this).val();
        }).get().join(",");
        disaQuery.regionCode = regionCode;
        disaQuery.disaTypeStr = disaTypeStr;
        disaQuery.disaGrade = disaGrade;
        disaQuery.totalPage = 1;
        pageIndex_sqr = 1;


        disaQuery.numOnePage = 10;
        disaQuery.pageIndex = 1;

        var resultData = [];

        //js 假数据
        (function (data, regionCode, disaType, grade) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].统一编号.startWith(regionCode)
                    && disaType.split(',').some(function (item) {
                   return getNumByDisaType(item) == data[i].灾害类型;
                }) && grade.split(',').some(function (item) {
                    return item == data[i].险情等级;
                })) {
                    resultData.push(data[i]);
                }
            }
            disaQuery.searchType = 0;
            disaQuery.totalItems = resultData;
            disaQuery.totalPage = Math.ceil(disaQuery.totalItems.length / disaQuery.numOnePage);
            pageIndex_sqr = disaQuery.totalPage > pageIndex_sqr ? disaQuery.totalPage : pageIndex_sqr;
            pageInfoCss();

        })(disasterFakedData, regionCode, disaTypeStr, disaGrade);



        //js假数据

        (function (page, pageSize) {

            var tdata = [];
            for (var i = (page - 1) * pageSize; i < page * pageSize && i < resultData.length; i++) {
                tdata.push(resultData[i]);
            }

            layQueryResult(tdata);
            window.appletFrame.addDisasterMarkerByType(tdata);
            pageIndex_sqr = disaQuery.totalPage > pageIndex_sqr ? disaQuery.totalPage : pageIndex_sqr;
            pageInfoCss();


        })(disaQuery.pageIndex, disaQuery.numOnePage);


        //$.post(baseUrl + "DisasterQuery/GetDisabyMultipleCondition", { "regionCode": regionCode, "disaType": disaTypeStr, "grade": disaGrade, "pageIndex": disaQuery.pageIndex, "pageVolume": disaQuery.numOnePage }, function (data) {
        //    if (data.length == 0) {
        //        alert("没有符合条件的内容！");
        //        return false;
        //    }
        //    layQueryResult(data);
        //    pageIndex_sqr = disaQuery.totalPage > pageIndex_sqr ? disaQuery.totalPage : pageIndex_sqr;
        //    pageInfoCss();

        //    //addAllMarkers(disaQuery.pageIndex, disaQuery.numOnePage);
        //});


    });
    ///////////////////以上是区域查询，这里开始关键字查询
    $(".qybtn2").die();
    $(".qybtn2").live("click", function () {
        stuate_Markers = false;
        var keyword = $(".qyFontInput").val();
        if (keyword == "" || keyword == "灾点编号、市、县、灾害类型等关键字") {
            disaQuery.pageIndex = 1;
            //$.post(baseUrl + "DisasterQuery/GetDisaCountbyMultipleCondition", { "regionCode": "", "disaType": "滑坡,地裂缝,地面塌陷,崩塌,泥石流,地面沉降", "grade": "特大型,大型,中型,小型" }, function (data) { ZHAOs 2014年4月8日19:57:43
            //$.post(baseUrl + "DisasterQuery/GetDisaCountbyMultipleCondition", { "regionCode": "", "disaType": "地裂缝,地面塌陷,滑坡,泥石流,崩塌", "grade": "特大型,大型,中型,小型" }, function (data) {
            //disaQuery.searchType = 1;
            //disaQuery.totalItems = data;
            //disaQuery.totalPage = Math.ceil(disaQuery.totalItems / disaQuery.numOnePage);
            //pageInfoCss();
            //});
            (function (data, key) {
                var resultData = [];
                data.forEach(function (item) {
                    if (item.地理位置.indexOf(key)) {
                        resultData.push(item);
                    }
                });

                disaQuery.searchType = 1;
                disaQuery.totalItems = resultData;
                disaQuery.totalPage = Math.ceil(disaQuery.totalItems / disaQuery.numOnePage);
                layQueryResult(resultData);
                pageInfoCss();

            })(disasterFakedData, keyword);
            //$.post(baseUrl + "DisasterQuery/getDisabyMultipleCondition", { "regionCode": "", "disaType": "地裂缝,地面塌陷,滑坡,崩塌,泥石流,地面沉降", "grade": "特大型,大型,中型,小型", "pageIndex": disaQuery.pageIndex, "pageVolume": disaQuery.numOnePage }, function (data) { ZHAOs 2014年4月8日19:57:43
            //$.post(baseUrl + "DisasterQuery/getDisabyMultipleCondition", { "regionCode": "", "disaType": "地裂缝,地面塌陷,滑坡,泥石流,崩塌", "grade": "特大型,大型,中型,小型", "pageIndex": disaQuery.pageIndex, "pageVolume": disaQuery.numOnePage }, function (data) {
            //    if (data.length == 0) {
            //        alert("没有符合条件的内容！");
            //        return false;
            //    }
            //    layQueryResult(data);
            //    pageInfoCss();
            //});
        } else {
            disaQuery.keyword = keyword;
            disaQuery.pageIndex = 1;
            $.post(baseUrl + "DisasterQuery/GetDisaCountbyKeyword", { "keyWord": keyword }, function (data) {
                disaQuery.searchType = 1;
                disaQuery.totalItems = data;
                disaQuery.totalPage = Math.ceil(disaQuery.totalItems / disaQuery.numOnePage);
                pageInfoCss();
            });
            $.post(baseUrl + "DisasterQuery/GetDisabyKeyword", { "keyWord": keyword, "pageIndex": disaQuery.pageIndex, "pageVolumn": disaQuery.numOnePage }, function (data) {
                if (data.length == 0) {
                    alert("没有符合条件的内容！");
                    return false;
                }
                layQueryResult(data);
                pageInfoCss();
            });
        }

    });
    //window.drawControls;
    ////addLayerAndDraw();
    /////以下是空间查询，分别是画圆、拉框
    //$("#circleSearchBtn").die("click");
    //$("#circleSearchBtn").live("click", function () {
    //    toggleControl(this);
    //});
    //$("#rectSearchBtn").die();
    //$("#rectSearchBtn").live("click", function () {
    //    toggleControl(this);
    //});
    //$("#terminalDraw").die();
    //$("#terminalDraw").live("click", function () {
    //    toggleControl(this);
    //});
}

function getNumByDisaType(str) {
    switch (str) {
        case "斜坡":
            return "00";
        case "滑坡":
            return "01";
        case "崩塌":
            return "02";
        case "泥石流":
            return "03";
        case "地面塌陷":
            return "04";
        case "地面沉降":
            return "05";
        case "地裂缝":
            return "06";

    }
}
function toggleControl(element) {
    stuate_Markers = false;
    for (key in drawControls) {
        var control = drawControls[key];
        if ($(element).attr('id') == key) {
            cleanFormer(control);
            control.featureAdded = function (evt) {
                //control.deactivate();
                //evt.layer.removeFeatures();
                if (evt.layer.features[1]) {
                    evt.layer.removeFeatures(evt.layer.features[0]);
                }
                var bounds = evt.layer.features[0].geometry.bounds;
                getCurrentBounds(bounds, $(element).attr('id'));

            }
        } else {
            control.deactivate();
            var feature = fullMap.getLayersByName("Polygon Layer")[0].features;
            for (var i = 0; i < feature.length; i++) {
                fullMap.getLayersByName("Polygon Layer")[0].removeFeatures(feature[i]);
            }
        }
    }
}
//x经度  y纬度
function getCurrentBounds(bounds, key) {

    var tdata = disasterFakedData.slice(0,10);

    disaQuery.searchType = 2;
    disaQuery.totalItems = tdata;
    disaQuery.totalPage = Math.ceil(disaQuery.totalItems.length / disaQuery.numOnePage);

    layQueryResult(tdata);
    pageInfoCss();

    //switch (key) {
    //    case "circleSearchBtn":
    //        var x0 = (bounds.right + bounds.left) / 2;
    //        var y0 = (bounds.top + bounds.bottom) / 2;
    //        var radius = (bounds.top + bounds.right - bounds.bottom - bounds.left) / 4;
    //        var infoStr = x0 + "," + y0 + "," + radius;
    //        disaQuery.infoStr = infoStr;
    //        disaQuery.pageIndex = 1;
    //        $.post(baseUrl + "DisasterQuery/GetDisaCountbyCircle", { "infoStr": infoStr }, function (data) {
    //            disaQuery.searchType = 2;
    //            disaQuery.totalItems = data;
    //            disaQuery.totalPage = Math.ceil(disaQuery.totalItems / disaQuery.numOnePage);
    //            pageInfoCss();
    //        });
    //        $.post(baseUrl + "DisasterQuery/GetDisabyCircle", { "infoStr": infoStr, "pageIndex": disaQuery.pageIndex, "pageVolumn": disaQuery.numOnePage }, function (data) {
    //            if (data.length == 0) {
    //                alert("没有符合条件的内容！");
    //                return false;
    //            }
    //            layQueryResult(data);
    //            pageInfoCss();
    //        });
    //        break;
    //    case "rectSearchBtn":
    //        var infoStr = bounds.right + "," + bounds.left + "," + bounds.top + "," + bounds.bottom;
    //        disaQuery.infoStr = infoStr;
    //        disaQuery.pageIndex = 1;
    //        $.post(baseUrl + "DisasterQuery/GetDisaCountbyRect", { "infoStr": infoStr }, function (data) {
    //            disaQuery.searchType = 3;
    //            disaQuery.totalItems = data;
    //            disaQuery.totalPage = Math.ceil(disaQuery.totalItems / disaQuery.numOnePage);
    //            pageInfoCss();
    //        });
    //        $.post(baseUrl + "DisasterQuery/GetDisabyRect", { "infoStr": infoStr, "pageIndex": disaQuery.pageIndex, "pageVolumn": disaQuery.numOnePage }, function (data) {
    //            if (data.length == 0) {
    //                alert("没有符合条件的内容！");
    //                return false;
    //            }
    //            layQueryResult(data);
    //            pageInfoCss();
    //        });
    //        break;
    //    case "terminalDraw":
    //        ;
    //        break;
    //}
}

function addLayerAndDraw() {
    window.polygonLayer = new OpenLayers.Layer.Vector("Polygon Layer");
    fullMap.addLayers([polygonLayer]);
    fullMap.addControl(new OpenLayers.Control.MousePosition());
    drawControls = {
        circleSearchBtn: new OpenLayers.Control.DrawFeature(polygonLayer,
            OpenLayers.Handler.RegularPolygon, {
                handlerOptions: {
                    sides: 100,
                    irregular: false
                },
                id: "circle"
            }),

        rectSearchBtn: new OpenLayers.Control.DrawFeature(polygonLayer,
            OpenLayers.Handler.RegularPolygon, {
                handlerOptions: {
                    sides: 4,
                    irregular: true
                },
                id: "rect"
            }
        ),
    };
    for (var key in drawControls) {
        fullMap.addControl(drawControls[key]);
    }
}

//以下三个简单的方法只是为了获取一系列坐标的最大最小值
function getXxYx(array) {
    var xArr = new Array();
    var yArr = new Array();
    for (var j = 0; j < array.length; j++) {
        xArr.push(array[j].x);
        yArr.push(array[j].y);
    }
    return [getMaxValue(xArr), getMinValue(xArr), getMaxValue(yArr), getMinValue(yArr)];
}
function getMaxValue(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}
function getMinValue(arr1) {
    var result1 = 200;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] < result1) {
            result1 = arr1[i];
        }
    }
    return result1;
}


R2.Business.DisaQuery = OpenLayers.Class({
    pageIndex: 0,
    totalItems: 0,
    totalPage: 1,
    numOnePage: 10,
    infoStr: "",
    searchType: null,//0代表功能查询，1代表关键字查询
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.appendReg();
        this.pgBtnClickreg();
    },
    init: function () {

    },
    appendReg: function () {
        var tempObj = this;
        //this.CreateContent();
        //CreateContent(this);
    },
    pageInfoCtl: function () {
        var tempObj = this;
        var totalItems = disaQuery.totalItems;
        var totalPage = tempObj.totalPage;
        var pageIndex = tempObj.pageIndex;
        var $current = $(".currentPage_sqir");
        $current.text(pageIndex.toString() + "/" + totalPage.toString());
        //////控制页码信息
        if (pageIndex == 1) {
            $(".firstPage_sqir").addClass("pageHidden_sqir");
            $(".prevPage_sqir").addClass("pageHidden_sqir");
            $(".nextPage_sqir").removeClass("pageHidden_sqir");
            $(".lastPage_sqir").removeClass("pageHidden_sqir");
        }
        if (pageIndex == totalPage) {
            $(".firstPage_sqir").removeClass("pageHidden_sqir");
            $(".prevPage_sqir").removeClass("pageHidden_sqir");
            $(".nextPage_sqir").addClass("pageHidden_sqir");
            $(".lastPage_sqir").addClass("pageHidden_sqir");
        }
        if (pageIndex == totalPage && pageIndex == 1) {
            $(".firstPage_sqir").addClass("pageHidden_sqir");
            $(".prevPage_sqir").addClass("pageHidden_sqir");
            $(".nextPage_sqir").addClass("pageHidden_sqir");
            $(".lastPage_sqir").addClass("pageHidden_sqir");
        }
        if (pageIndex < totalPage && pageIndex > 1) {
            $(".firstPage_sqir").removeClass("pageHidden_sqir");
            $(".prevPage_sqir").removeClass("pageHidden_sqir");
            $(".nextPage_sqir").removeClass("pageHidden_sqir");
            $(".lastPage_sqir").removeClass("pageHidden_sqir");
        }

    },
    pgBtnClickreg: function () {
        var tempObj = this;
        $(".firstPage_sqir").live("click", function () {

            if (parseInt(tempObj.pageIndex) == 1) {
                return false;
            } else {
                tempObj.pageIndex = 1;
                tempObj.executeSearch();
            }
            //addAllMarkers(tempObj.pageIndex, tempObj.numOnePage);
        });
        $(".prevPage_sqir").live("click", function () {

            if (parseInt(tempObj.pageIndex) <= 1) {
                return false;
            } else {
                tempObj.pageIndex--;
                tempObj.executeSearch();
            }
            //addAllMarkers(tempObj.pageIndex, tempObj.numOnePage);
        });
        $(".nextPage_sqir").live("click", function () {

            if (parseInt(tempObj.pageIndex) >= parseInt(tempObj.totalPage)) {
                return false;
            } else {
                tempObj.pageIndex++;
                tempObj.executeSearch();
            }
            //addAllMarkers(tempObj.pageIndex, tempObj.numOnePage);
        });
        $(".lastPage_sqir").live("click", function () {

            if (parseInt(tempObj.pageIndex) >= parseInt(tempObj.totalPage)) {
                return false;
            } else {
                tempObj.pageIndex = tempObj.totalPage;
                tempObj.executeSearch();
            }
            //addAllMarkers(tempObj.pageIndex, tempObj.numOnePage);
        });
    },
    executeSearch: function () {
        var tempObj = this;
        if (tempObj.searchType == 0) {//功能查询            
            //$.post(baseUrl + "DisasterQuery/getDisabyMultipleCondition", { "regionCode": disaQuery.regionCode, "disaType": disaQuery.disaTypeStr, "grade": disaQuery.disaGrade, "pageIndex": disaQuery.pageIndex, "pageVolume": disaQuery.numOnePage }, function (data) {
            //    if (data.length == 0) {
            //        alert("没有符合条件的内容！");
            //        return false;
            //    }
            //    layQueryResult(data);
            //    pageInfoCss();
            //});
            disaQuery.resultData = [];
            (function (data, regionCode, disaType, grade, pageIndex, pageSize) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].统一编号.startWith(regionCode)
                        && disaType.split(',').some(function (item) {
                       return getNumByDisaType(item) == data[i].灾害类型;
                    }) && grade.split(',').some(function (item) {
                        return item == data[i].险情等级;
                    })) {
                        var temp = data[i];
                        disaQuery.resultData.push(data[i]);
                    }
                }

                var tData = [];
                for (var i = (pageIndex - 1) * pageSize; i < pageIndex * pageSize && i < disaQuery.resultData.length; i++) {
                    tData.push(disaQuery.resultData[i]);
                }
                layQueryResult(tData);
                pageInfoCss();


            })(disasterFakedData, disaQuery.regionCode, disaQuery.disaTypeStr, disaQuery.disaGrade, disaQuery.pageIndex, disaQuery.numOnePage);
        }
        else
            if (tempObj.searchType == 1) {
                //$.post(baseUrl + "DisasterQuery/getDisabyKeyword", { "keyWord": disaQuery.keyword, "pageIndex": disaQuery.pageIndex, "pageVolumn": disaQuery.numOnePage }, function (data) {
                //if (data.length == 0) {
                //    alert("没有符合条件的内容！");
                //    return false;
                //}
                //layQueryResult(data);
                //pageInfoCss();
                //});
            }
            else if (tempObj.searchType == 2) {
                //$.post(baseUrl + "DisasterQuery/GetDisabyCircle", { "infoStr": disaQuery.infoStr, "pageIndex": disaQuery.pageIndex, "pageVolumn": disaQuery.numOnePage }, function (data) {
                //    if (data.length == 0) {
                //        alert("没有符合条件的内容！");
                //        return false;
                //    }
                //    layQueryResult(data);
                //    pageInfoCss();
                //});
            }
            else if (tempObj.searchType == 3) {
                //$.post(baseUrl + "DisasterQuery/GetDisabyRect", { "infoStr": disaQuery.infoStr, "pageIndex": disaQuery.pageIndex, "pageVolumn": disaQuery.numOnePage }, function (data) {
                //    if (data.length == 0) {
                //        alert("没有符合条件的内容！");
                //        return false;
                //    }
                //    layQueryResult(data);
                //    pageInfoCss();
                //});
            }
    },
    CLASS_NAME: ""
});
function pageInfoCss() {
    //alert("5" + disaQuery.totalPage);
    var totalPage = disaQuery.totalPage;
    var pageIndex = disaQuery.pageIndex;
    var $current = $(".currentPage_sqir");
    $current.text(pageIndex.toString() + "/" + disaQuery.totalPage.toString());
    //////控制页码信息
    if (pageIndex == 1) {
        $(".firstPage_sqir").addClass("pageHidden_sqir");
        $(".prevPage_sqir").addClass("pageHidden_sqir");
        $(".nextPage_sqir").removeClass("pageHidden_sqir");
        $(".lastPage_sqir").removeClass("pageHidden_sqir");
    }
    if (pageIndex == totalPage) {
        $(".firstPage_sqir").removeClass("pageHidden_sqir");
        $(".prevPage_sqir").removeClass("pageHidden_sqir");
        $(".nextPage_sqir").addClass("pageHidden_sqir");
        $(".lastPage_sqir").addClass("pageHidden_sqir");
    }
    if (pageIndex == totalPage && pageIndex == 1) {
        $(".firstPage_sqir").addClass("pageHidden_sqir");
        $(".prevPage_sqir").addClass("pageHidden_sqir");
        $(".nextPage_sqir").addClass("pageHidden_sqir");
        $(".lastPage_sqir").addClass("pageHidden_sqir");
    }
    if (pageIndex < totalPage && pageIndex > 1) {
        $(".firstPage_sqir").removeClass("pageHidden_sqir");
        $(".prevPage_sqir").removeClass("pageHidden_sqir");
        $(".nextPage_sqir").removeClass("pageHidden_sqir");
        $(".lastPage_sqir").removeClass("pageHidden_sqir");
    }
};
