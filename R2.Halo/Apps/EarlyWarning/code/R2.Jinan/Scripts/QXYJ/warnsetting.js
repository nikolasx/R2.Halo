/// <reference path="../global/isTheValueLegal.js" />
/// <reference path="../Libs/OpenLayers.js" />
var warningAnalysesetting = {
    html: '<div class="warnMainquery">' +
            '<div class="warnTitleBox" style="width:380px; height:23px;border:1px solid #c0c0c0;" ><p class="warnTitle1" style="width:250px;text-align:left;padding-left:5px;float:left;">预警分析参数设置</p><span class="warnToreturn"></span></div>' +
            //////  <----warnArea warnArea1结束---->
            '<div class="warnArea warnAreasetting" style="width:382px;" >' +
                '<div class="warn_setp"><div class="warn_setptitle">权重值设置</div><div class="warn_setptitle">降雨阀值设置</div><div class="warn_setptitle">预报雨量设置</div></div>' +
                '<div class="warnSetup warnSetup0">' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">地层岩性：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">地形坡度：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">地质构造：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">灾害分布密度：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">人类工程活动：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">地震烈度：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">15天累计降雨量：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">当日雨量：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">未来24/48小时最大小时雨强：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                    '<p class="warnSetupRow">' +
                        '<label class="warnRow_label">未来24/48小时降雨量：</label><input type="text" class="warnRow_input" value=""/>' +
                    '</p>' +
                '</div>' +
                //////  <----warnSetup warnSetup0结束---->                
                '<div class="warnSetup warnSetup1">' +
                    '<div class="warnSetform">' +
                        '<div class="warnSetformtitle">' +
                            '<div style="width:95px;">名称</div>' +
                            '<div style="width:55px;">Ⅰ级</div>' +
                            '<div style="width:70px;">Ⅱ级</div>' +
                            '<div style="width:70px;">Ⅲ级</div>' +
                            '<div style="width:55px;">Ⅳ级</div>' +
                        '</div>' +
                        '<div class="warnSetformrow">' +
                            '<div style="width:95px; line-height:25px;"></div>' +
                            '<div></div>' +
                            '<div></div>' +
                            '<div></div>' +
                            '<div></div>' +
                        '</div>' +
                        '<div class="warnSetformrow">' +
                            '<div style="width:95px;"></div>' +
                            '<div></div>' +
                            '<div></div>' +
                            '<div></div>' +
                            '<div></div>' +
                        '</div>' +
                        '<div class="warnSetformrow">' +
                            '<div style="width:95px; line-height:25px;"></div>' +
                            '<div></div>' +
                            '<div></div>' +
                            '<div></div>' +
                            '<div></div>' +
                        '</div>' +
                        '<div class="warnSetformrow">' +
                            '<div style="width:95px; line-height:25px;"></div>' +
                            '<div></div>' +
                            '<div></div>' +
                            '<div></div>' +
                            '<div></div>' +
                        '</div>' +
                    '</div>' +
                    //////  <----warnSetform结束---->
                '</div>' +
                //////  <----warnSetup warnSetup1结束---->                
                //warnSetup2
                 '<div class="warnSetup warnSetup2" style="overflow:hidden">' +
                    '<div class=wa_rainSetting>' +
                     '<div class="hWarning_TitleP" style="margin-top: 15px;"><div class="hw_steps_coin"></div><div class="hWarn_Name">请选择预警时间</div></div>' +
                       '<div class="wa_radioDiv" style="margin-top:10px;">' +
                        '<div class="wa_radioDivLeft"></div>' +
                        '<div class="wa_radioDivRight">' +
                        '<div class="wa_radioLabel"><input type="radio" name="wa_radio" id="wa_radio_24" checked="checked"/><label for="wa_radio_24" id="wa_label_24">未来24h预报雨量设置</label></div>' +
                        '<div class="wa_radioLabel"><input type="radio" name="wa_radio" id="wa_radio_48"/><label for="wa_radio_48" id="wa_label_48">未来48h预报雨量设置</label></div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="hWarning_TitleP" style="margin-top: 15px;"><div class="hw_steps_coin" style="background-position-x:-20px;"></div><div class="hWarn_Name">请选择日期</div></div>' +
                    '<div class="wa_calendar">' +
                        '<div class="wa_calenderLeft"></div>' +
                        '<input type="text" class="wa_calendarInput"/>' +
                    '</div>' +
                    '<div class="hWarning_TitleP" style="margin-top: 15px;"><div class="hw_steps_coin" style="background-position-x:-40px;"></div><div class="hWarn_Name">选取站点</div></div>' +
                    '<div class=wa_head>' +
                       //'<div class="wa_title0"></div>' +
                        '<div id="wa_circle" class="wa_queryBtn" title="画圆查询"></div>' +
                        '<div id="wa_rectangle" class="wa_queryBtn" title="拉框查询"></div>' +
                        '<div id="wa_polygon" class="wa_queryBtn" title="多边形查询"></div>' +
                    '</div>' +
                    '<div id="wa_toggleMarkBar"><div id="wa_toggleMark"  >隐藏站点</div><div id="warn_query_marker">查&nbsp;询</div></div>' +
                    '</div>' +
                    '</div>' +
                    //////  <----warnSetform结束---->
                '<div class="warnSetbtn warnSetbtn0"><div class="warnbtn warnbtn4" id="wa_modifyAffirm">修 改</div><div class="warnbtn" id="wa_toggleMark" style="display:none;">隐藏站点</div></div>' +
            '</div>' +
            //////  <----warnArea warnArea2结束---->
        '</div>',
    tabsIndex: 0,//选项卡的序号，区分修改按钮的点击行为
    infoStr: "",//每次修改后都要再次查询，这个字符串用于保存当前的查询条件
    infoStrLast: "",//上一次拉框或者画圆的查询范围，用于在切换Mark图标的功能中使用，其他情况不用
    showMarks: false,
    resultTableStr: "",//空间查询得到的表格数据
    hour: 24,//采用24还是48小时作为查询单位，标志位
    maxRain: 0,
    sumRain: 0,
    resultDataLenth: 0,//这是查出来的雨量站点数目
    //下面几个属性是为了保存雨量等的几个信息，以便加载在相应的text框中  ZHAOs 2014年5月2日09:29:12
    low1: 0,
    high1: 0,
    value1: 0,
    low2: 0,
    high2: 0,
    value2: 0,
    low3: 0,
    high3: 0,
    value3: 0,
    low4: 0,
    high4: 0,
    value4: 0,

    init: function () {
        var tempObj = this;
        //text框获得焦点与失去焦点
        $("input[type=text]").focus(function () {
            $(this).css("border-color", "#046fab");
        });
        $("input[type=text]").blur(function () {
            $(this).css("border-color", "#bfbfbf");
        });

        $(".warnMainquery").remove();
        $("#ui_left > div").hide();
        $("#ui_left").append(tempObj.html);

        //日期text框获得焦点
        tempObj.showMarks = false;
        tempObj.setRainValue();

        //修改按钮点击事件注册
        this.modifyAffirm();
        //input框事件注册
        this.inputEvtReg();
        this.calendarReg();//雨量设置的选择日期事件ZHAOs 
        this.utilClicks();//几个无关紧要的点击注册事件
        this.ReturnToMenu();   //返回主菜单
        this.DoclickQuery_ForAll(); //全部查询   

        //
        $(".warn_setptitle:eq(0)").trigger("click");
    },
    ReturnToMenu: function () {
        tempObj = this;
        $(".warnToreturn").click(function () {
            if (tempObj.showMarks == false) {

            }
            else {
                var feature = fullMap.getLayersByName("Boxlayer")[0].features;
                for (var i = 0; i < feature.length; i++) {
                    fullMap.getLayersByName("Boxlayer")[0].removeFeatures(feature[i]);
                }
                var arr = [];
                var lll = fullMap.getLayersByName('markers')[0];
                arr = fullMap.getLayersByName('markers')[0].markers;
                fullMap.getLayersByName('markers')[0].clearMarkers(arr);
                fullMap.removeLayer(fullMap.getLayersByName("markers")[0]);
                tempObj.showMarks == false;
            }
            fullMap.getControl("drc_polygon").deactivate();
            fullMap.getControl("drc_circle").deactivate();
            fullMap.getControl("drc_rect").deactivate();
            $(".warnMainquery").remove();
            $("#ui_left > div").show();
        });
    },
    utilClicks: function () {
        var tempObj = this;
        $(".rainSetBtn").die("click");
        $(".rainSetBtn").live("click", function () {
            var val1 = $("#wa_24Max").val();
            var val2 = $("#wa_24Total").val();
            var isLegal1 = new R2.Business.IsLegal({ "value": val1 });
            var isLegal2 = new R2.Business.IsLegal({ "value": val2 });
            if (isLegal1.isFloat() == false || isLegal2.isFloat() == false) {
                alert("填入的雨量值信息不合法，请重新填写！");
                return false;
            }
            $("#wa_modifyAffirm").trigger("click");
        });

        $(".rainBackBtn").die("click");
        $(".rainBackBtn").live("click", function () {
            tempObj.rainQueryResultBack();
        });

        $(".wa_input").focus(function () {
            if ($(this).val() == "" || $(this).val() == 0) {
                $(this).val("");
            }
        });


        $(".rainStationShow").die("click");
        $(".rainStationShow").live("click", function () {
            $("#wa_toggleMark").trigger("click");
            if (tempObj.showMarks == true) {
                $(".rainStationShow").text("隐藏站点");
            } else
                if (tempObj.showMarks == false) {
                    $(".rainStationShow").text("显示站点");
                }
        });
        //以下是判断24或者48随时保证是正确的ZHAOs 2014年4月4日11:54:29
        $("#wa_radio_24").die("click");
        $("#wa_radio_24").live("click", function () {
            if ($(this).attr("checked") == "checked") {
                tempObj.hour = 24;
            }
            else {
                tempObj.hour = 48;
            }
        });
        $("#wa_radio_48").die("click");
        $("#wa_radio_48").live("click", function () {
            if ($(this).attr("checked") == "checked") {
                tempObj.hour = 48;
            }
            else {
                tempObj.hour = 24;
            }
        });
        $("#wa_label_24").die("click");
        $("#wa_label_24").live("click", function () {
            $("#wa_radio_24").trigger("click");
        });

        $("#wa_label_48").die("click");
        $("#wa_label_48").live("click", function () {
            $("#wa_radio_48").trigger("click");
        });
    },

    calendarReg: function () {
        $(".wa_calendarInput").focus(function () {
            $(this).calendar({ format: 'yyyy-MM-dd', zIndex: 10001 });
            $(this).css("border-color", "#e4a112");
        }).blur(function () {
            ;
        });
    },
    inputEvtReg: function () {
        $(".wa_input").focus(function () {
            if (this.value == "0") {
                this.value = "";
            }
        }).blur(function () {
            if (this.value == "") {
                this.value = 0;
            }
            var isFloat = new R2.Business.IsLegal({ value: this.value });
            if (isFloat.isFloat() == false) {
                $(this).css("color", "red");
                alert("雨量信息填写错误！");
            }
        });
    },
    //参数设置功能
    setRainValue: function () {
        var tempObj = this;
        //选项卡事件
        $(".warn_setptitle:eq(0)").addClass("warn_setptitleon");        
        $(".warnSetup0").css("z-index", "2001");
        $(".warnSetbtn1").hide();
        $(".warn_setptitle").click(function () {
            $(".warn_setptitle,.warn_setptitleon").die("click");

            $(this).addClass("warn_setptitleon").siblings().removeClass("warn_setptitleon");
            var index = $(this).index();
            tempObj.tabsIndex = index;//ZHAOs 2014年3月25日20:01:05            
            if (index != 2) {
                $("#wa_toggleMark").css("display", "none");
                $(".warnSetbtn0").css({ "display": "block", "z-index": "20000" });
                //ZHAOs 2014年4月27日22:43:24  给前两个选项卡注册事件，加载内容
                switch (index) {
                    case 0:
                        $.post(baseUrl + "RainParamSetting/LoadQZZ", null, function (data) {
                            if (data.length == 0) {
                                alert("查询错误！");
                                return false;
                            }
                            for (var i = 0; i < 10; i++) {
                                $(".warnRow_input:eq(" + i + ")").val(data[i].Value);
                            }
                        });
                        break;
                    case 1:
                        $.post(baseUrl + "RainParamSetting/LoadJYYZ", null, function (data) {
                            for (var i = 0; i < 4; i++) {
                                $(".warnSetformrow:eq(" + i + ")").find("div:eq(0)").html(data[i].Name);
                                tempObj.low1 = data[i].RFTSList[0].LowInterval;
                                tempObj.high1 = data[i].RFTSList[0].HighInterval;
                                tempObj.val1 = data[i].RFTSList[0].Value;
                                tempObj.low2 = data[i].RFTSList[1].LowInterval;
                                tempObj.high2 = data[i].RFTSList[1].HighInterval;
                                tempObj.val2 = data[i].RFTSList[1].Value;
                                tempObj.low3 = data[i].RFTSList[2].LowInterval;
                                tempObj.high3 = data[i].RFTSList[2].HighInterval;
                                tempObj.val3 = data[i].RFTSList[2].Value;
                                tempObj.low4 = data[i].RFTSList[3].LowInterval;
                                tempObj.high4 = data[i].RFTSList[3].HighInterval;
                                tempObj.val4 = data[i].RFTSList[3].Value;
                                var cell1 = ">" + tempObj.low1 + "<span class='warnSetSpan'>" + tempObj.val1 + "</span>";
                                var cell2 = tempObj.low2 + "~" + tempObj.high2 + "<span class='warnSetSpan'>" + tempObj.val2 + "</span>";
                                var cell3 = tempObj.low3 + "~" + tempObj.high3 + "<span class='warnSetSpan'>" + tempObj.val3 + "</span>";
                                var cell4 = "<" + tempObj.high4 + "<span class='warnSetSpan'>" + tempObj.val4 + "</span>";
                                var arr = [];
                                arr.push(cell1);
                                arr.push(cell2);
                                arr.push(cell3);
                                arr.push(cell4);
                                for (var t = 0; t < 4; t++) {
                                     $(".warnSetformrow:eq(" + i + ")").find("div:eq(" + (t + 1) + ")").html(arr[t]);
                                }
                            }
                            $(".warnSetformrow:eq(0)").trigger("click");
                        });
                        break;
                    default:
                        break;
                }
            }
            else {
                $(".warnSetbtn0").css({ "display": "none", "z-index": "0" });
                $("#wa_toggleMark").css("display", "block");
                //tempObj.showMarks = true;
                //if (tempObj.showMarks == true) {
                //    $("#wa_toggleMark").text("隐藏站点");
                //}
                //else {
                //    $("#wa_toggleMark").text("显示站点");
                //}
                tempObj.resizeRainSetting();//点击第三个选项卡后根据分辨率调整第三个面板的布局
            }
            $(".warnSetup" + index).css("z-index", "2001").siblings(".warnSetup").css("z-index", "2000");
            $(".warnSetbtn" + index).show().siblings(".warnSetbtn").hide();
        });
        //"权重值设置" 判断屏幕分辨率 如果屏幕高度大于768 则调高行距等
        var screenheight = window.screen.height;
        if (screenheight > 768) {
            $(".warnSetup").css("bottom", "50px");
            $(".warnSetbtn").css("bottom", "10px");
            $(".warnSetupRow").css("margin", "6px 0");
        }

        //设置“降雨量阀值设置”中表格的宽度
        for (var i = 0; i < $(".warnSetformrow").length; i++) {
            $(".warnSetformrow").eq(i).children("div").eq(1).css("width", "55px");
            $(".warnSetformrow").eq(i).children("div").eq(2).css("width", "70px");
            $(".warnSetformrow").eq(i).children("div").eq(3).css("width", "70px");
            $(".warnSetformrow").eq(i).children("div").eq(4).css("width", "55px");
        }

        //"降雨量阀值设置" 表格点击与hover事件
        $(".warnSetformrow").hover(function () {
            $(this).css("background", "#D6E0EA");
        }, function () {
            if ($(this).hasClass("warnSetformrowOn")) {
            } else {
                $(this).css("background", "none");
            }
        });
        $(".warnSetformrow").click(function () {
            $(this).css("background", "#D6E0EA").addClass("warnSetformrowOn").siblings(".warnSetformrow").css("background", "none").removeClass("warnSetformrowOn");
            var index = $(".warnSetformrow").index(this);
            $(".warnAmend").remove();
            tempObj.amendRainValue(index);
        })
        $(".warnSetformrow").eq(0).trigger("click");

        $(".warn_setptitle:eq(2)").click(function () {
            //反激活在空间查询灾害点功能中的contro
            if (fullMap.getControlsBy("id", "rect").length > 0) {
                if (fullMap.getControlsBy("id", "rect")[0].active) {
                    fullMap.getControlsBy("id", "rect")[0].deactivate();
                }
            }
            if (fullMap.getControlsBy("id", "circle").length > 0) {
                if (fullMap.getControlsBy("id", "circle")[0].active) {
                    fullMap.getControlsBy("id", "circle")[0].deactivate();
                }
            }

            //获取所有站点
            if (fullMap.getLayersByName('markers').length == 0) {
                markers = new OpenLayers.Layer.Markers("markers");
                fullMap.addLayer(markers);
            }
            $.post(baseUrl + "RainfallStation/GetAllRainfallStation", null, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var x = parseFloat((data[i]).Lon);
                    var y = parseFloat((data[i]).Lat);
                    var size = new OpenLayers.Size(21, 25);
                    var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
                    var icon = new OpenLayers.Icon(baseUrl + 'Content/images/marker-blue.png', size, offset);
                    var marker = new OpenLayers.Marker(new OpenLayers.LonLat(x, y), icon.clone());
                    markers.addMarker(marker);
                }
                tempObj.showMarks = true;
                if (tempObj.showMarks == true) {
                    $("#wa_toggleMark").text("隐藏站点");
                }
                else {
                    $("#wa_toggleMark").text("显示站点");
                }
            });

        });
        this.rainFallStationSettings();//气象站点设置里的各个点击事件
    },
    resizeRainSetting: function () {
        var height = window.screen.height;
        if (height <= 768) {
            $(".wa_radioDiv").css("margin-top", "0px");//把这个div的margin-top变小，则界面显示可以接受
        }
        else if (height > 768) {
            $(".wa_radioDiv").css("margin-top", "10px");//
            $(".wa_calendar").css("margin-bottom", "30px");
        }
        var height = $(".warnSetup2").height();

        if ($(".wa_calendarInput").val() == "") {
            //把日期框中的日期设为当前日期,避免
            var today = new Date();
            var tod = today.toLocaleDateString();//2014年4月12日
            var year = tod.split('年')[0];
            var month = (tod.split('年')[1]).split('月')[0];
            if (parseInt(month) < 10) {
                month = "0" + month;
            }
            var day = (tod.split('月')[1]).split('日')[0];
            if (parseInt(day) < 10) {
                day = "0" + day;
            }
            var formatTodayDate = year + "-" + month + "-" + day;
            $(".wa_calendarInput").val(formatTodayDate);
        }

    },
    rainFallStationSettings: function () {
        var tempObj = this;
        $("#wa_toggleMark").click(function () {
            if (tempObj.showMarks == false) {
                $(".warn_setptitle:eq(2)").trigger("click");
                $("#wa_toggleMark").text("隐藏站点");
                tempObj.showMarks = true;
            }
            else {
                var arr = [];
                arr = fullMap.getLayersByName('markers')[0].markers;
                fullMap.getLayersByName('markers')[0].clearMarkers(arr);
                $("#wa_toggleMark").text("显示站点");
                tempObj.showMarks = false;
            }
        });

        $(".wa_queryBtn").click(function () {
            var check1 = $("#wa_radio_24").attr("checked");
            var check2 = $("#wa_radio_48").attr("checked");
            if (check1 != "checked" && check2 != "checked") {
                alert("请选择预警时间！");
                return false;
            } else {
                if (check1 == "checked") {
                    tempObj.hour = 24;
                }
                if (check2 == "checked") {
                    tempObj.hour = 48;
                }
            }

            var regExp = /^\d{1,4}-(0|1)[0-9]-[0-3][0-9]$/;
            var boolean = regExp.test($(".wa_calendarInput").val());
            if ($(".wa_calendarInput").val() == "" || $(".wa_calendarInput").val() == undefined) {
                $(".wa_calendarInput").css("border", "1px solid #FF5400");
                alert("请选择日期！");
                return false;
            } else
                if (boolean == false) {
                    $(".wa_calendarInput").css("border", "1px solid #FF5400");
                    alert("日期不合法，请重新输入或选取！");
                    return false;
                }
                else {
                    $(".wa_calendarInput").css("border", "1px solid #BFBFBF")
                }

            var index = $(".wa_queryBtn").index(this);
            switch (index) {
                case 0:
                    fullMap.getControl("drc_circle").activate();
                    fullMap.getControl("drc_rect").deactivate();
                    fullMap.getControl("drc_polygon").deactivate();
                    cleanFormer(fullMap.getControl("drc_circle"));
                    fullMap.getControl("drc_circle").featureAdded = function (evt) {
                        if (evt.layer.features[1]) {
                            evt.layer.removeFeatures(evt.layer.features[0]);
                        }
                        var features = [];
                        features = fullMap.getLayersByName("Boxlayer")[0].features;
                        //fullMap.getLayersByName("Boxlayer")[0].removeFeatures(features);
                        var left = evt.geometry.bounds.left;
                        var right = evt.geometry.bounds.right;
                        var bottom = evt.geometry.bounds.bottom;
                        var top = evt.geometry.bounds.top;
                        var radius = (right + top - left - bottom) / 4;
                        var x = (left + right) / 2;
                        var y = (top + bottom) / 2;
                        var rangeInfoStr = x + "," + y + "," + radius;
                        var date = ($(".wa_calendarInput").val()).replace(/-/g, '.');//2014.04.05
                        var hour = tempObj.hour;//24 "" 48      
                        rangeInfoStr = "circle&" + date + "&" + hour + "&" + rangeInfoStr;
                        tempObj.infoStr = rangeInfoStr;
                        //tempObj.clearMarkers();
                        //tempObj.showRedMark();
                        tempObj.DoclickQuery(rangeInfoStr, 0);
                        fullMap.getControl("drc_circle").deactivate();
                    }
                    break;
                case 1:
                    fullMap.getControl("drc_rect").activate();
                    fullMap.getControl("drc_circle").deactivate();
                    fullMap.getControl("drc_polygon").deactivate();
                    cleanFormer(fullMap.getControl("drc_rect"));
                    fullMap.getControl("drc_rect").featureAdded = function (evt) {
                        if (evt.layer.features[1]) {
                            evt.layer.removeFeatures(evt.layer.features[0]);
                        }
                        var features = [];
                        features = fullMap.getLayersByName("Boxlayer")[0].features;
                        //fullMap.getLayersByName("Boxlayer")[0].removeFeatures(features);
                        var left = evt.geometry.bounds.left;
                        var right = evt.geometry.bounds.right;
                        var bottom = evt.geometry.bounds.bottom;
                        var top = evt.geometry.bounds.top;
                        var rangeInfoStr = right + "," + left + "," + top + "," + bottom;
                        var date = ($(".wa_calendarInput").val()).replace(/-/g, '.');//2014.04.05
                        var hour = tempObj.hour;//24 "" 48      
                        rangeInfoStr = "rect&" + date + "&" + hour + "&" + rangeInfoStr;
                        tempObj.infoStr = rangeInfoStr;
                        //tempObj.clearMarkers();
                        //tempObj.showRedMark();
                        tempObj.DoclickQuery(rangeInfoStr, 1);
                        fullMap.getControl("drc_rect").deactivate();
                    }
                    break;
                case 2:
                    fullMap.getControl("drc_polygon").activate();
                    fullMap.getControl("drc_circle").deactivate();
                    fullMap.getControl("drc_rect").deactivate();
                    cleanFormer(fullMap.getControl("drc_polygon"));
                    fullMap.getControl("drc_polygon").featureAdded = function (evt) {
                        if (evt.layer.features[1]) {
                            evt.layer.removeFeatures(evt.layer.features[0]);
                        }
                        var features = [];
                        features = fullMap.getLayersByName("Boxlayer")[0].features;
                        //fullMap.getLayersByName("Boxlayer")[0].removeFeatures(features);
                        var length = evt.geometry.components[0].components.length;
                        var rangeInfoStr = "";
                        for (var i = 0; i < length; i++) {
                            rangeInfoStr += evt.geometry.components[0].components[i].x + "," + evt.geometry.components[0].components[i].y + ",";
                        }
                        //下面开始拼后台查询需要的字符串
                        var date = ($(".wa_calendarInput").val()).replace(/-/g, '.');//2014.04.05
                        var hour = tempObj.hour;//24 "" 48                                          
                        rangeInfoStr = "polygon&" + date + "&" + hour + "&" + rangeInfoStr; //polygon&2014.02.02&24&37.000000,115.021212.........
                        tempObj.infoStr = rangeInfoStr;
                        //tempObj.clearMarkers();
                        //tempObj.showRedMark();
                        tempObj.DoclickQuery(rangeInfoStr, 2);
                        fullMap.getControl("drc_polygon").deactivate();
                    }
                    break;
                default:
                    break;
            }
        });

        $("#wa_cancel").click(function () {
            alert(3);
        });
    },
    DoclickQuery: function (rangeInfoStr, index) {
        var tempObj = this;
        $("#warn_query_marker").die("click");
        $("#warn_query_marker").live("click", function () {
            switch (index) {
                case 0:
                    $.post(baseUrl + "RainfallStation/GetRainByCircle", { "infoStr": rangeInfoStr, "pageSize": 1000, "pageIndex": 1 }, function (data) {
                        tempObj.showRedMark();
                        tempObj.resultDataLenth = data.length;
                        tempObj.layQueryResult(data);
                    });
                    break;
                case 1:
                    $.post(baseUrl + "RainfallStation/GetRainByRect", { "infoStr": rangeInfoStr, "pageSize": 1000, "pageIndex": 1 }, function (data) {
                        tempObj.showRedMark();
                        tempObj.resultDataLenth = data.length;
                        tempObj.layQueryResult(data);
                    });
                    break;
                case 2:
                    $.post(baseUrl + "RainfallStation/GetRainByPolygon", { "infoStr": rangeInfoStr, "pageSize": 1000, "pageIndex": 1 }, function (data) {
                        tempObj.showRedMark();
                        tempObj.resultDataLenth = data.length;
                        tempObj.layQueryResult(data);
                    });
                    break;
                default:
                    break;
            }
            fullMap.getControl("drc_polygon").deactivate();
            fullMap.getControl("drc_circle").deactivate();
            fullMap.getControl("drc_rect").deactivate();

        })
    },
    DoclickQuery_ForAll: function () {

    },
    clearMarkers: function () {
        var tempObj = this;
        var markerLayer = fullMap.getLayersByName("markers")[0].clearMarkers();
    },
    allBlueMark: function () {
        $(".warn_setptitle:eq(2)").trigger("click");
    },
    //把框选范围的mark由蓝色换成红色
    showRedMark: function () {
        var tempObj = this;
        var type = tempObj.infoStr.split('&')[0];
        if (fullMap.getLayersByName('markers').length == 0) {
            markers = new OpenLayers.Layer.Markers("markers");
            fullMap.addLayer(markers);
        }
        tempObj.allBlueMark();//把所有站点图标都显示为蓝色
        if (type == "circle") {
            $.post(baseUrl + "RainfallStation/GetRainByCircle", { "infoStr": tempObj.infoStr, "pageSize": 1000, "pageIndex": 1 }, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var x = data[i].Lon;
                    var y = data[i].Lat;
                    var size = new OpenLayers.Size(21, 25);
                    var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
                    var icon = new OpenLayers.Icon(baseUrl + 'Content/images/marker-red.png', size, offset);
                    var marker = new OpenLayers.Marker(new OpenLayers.LonLat(x, y), icon.clone());
                    markers.addMarker(marker);
                }
                tempObj.showMarks = true;
            });
        }
        else if (type == "rect") {
            $.post(baseUrl + "RainfallStation/GetRainByRect", { "infoStr": tempObj.infoStr, "pageSize": 1000, "pageIndex": 1 }, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var x = data[i].Lon;
                    var y = data[i].Lat;
                    var size = new OpenLayers.Size(21, 25);
                    var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
                    var icon = new OpenLayers.Icon(baseUrl + 'Content/images/marker-red.png', size, offset);
                    var marker = new OpenLayers.Marker(new OpenLayers.LonLat(x, y), icon.clone());
                    markers.addMarker(marker);
                }
                tempObj.showMarks = true;
            });
        }
        else if (type == "polygon") {
            $.post(baseUrl + "RainfallStation/GetRainByPolygon", { "infoStr": tempObj.infoStr, "pageSize": 1000, "pageIndex": 1 }, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var x = data[i].Lon;
                    var y = data[i].Lat;
                    var size = new OpenLayers.Size(21, 25);
                    var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
                    var icon = new OpenLayers.Icon(baseUrl + 'Content/images/marker-red.png', size, offset);
                    var marker = new OpenLayers.Marker(new OpenLayers.LonLat(x, y), icon.clone());
                    markers.addMarker(marker);
                }
                tempObj.showMarks = true;
            });
        }
    },
    //每次修改后再次查询，以显示修改后的内容
    searchAgain: function () {
        var tempObj = this;
        for (var i = 0; i < tempObj.resultDataLenth; i++) {
            $(".wa_YBMaxHRain:eq(" + i + ")").text(tempObj.maxRain);
            $(".wa_YBSumRain:eq(" + i + ")").text(tempObj.sumRain);
        }
    },
    //修改按钮的点击事件注册
    modifyAffirm: function () {
        var tempObj = this;
        $("#wa_modifyAffirm").click(function () {
            switch (tempObj.tabsIndex) {
                case 0:
                    var arr = [];
                    for (var i = 0; i < 10; i++) {
                        var tobj = {
                            ID: "",
                            Name: "",
                            Value: ""
                        };
                        tobj.ID = i + 1;
                        tobj.Name = $(".warnRow_label:eq(" + i + ")").text();
                        tobj.Value = $(".warnRow_input:eq(" + i + ")").val();
                        arr.push(tobj);
                    }
                    var infoToSave = JSON.stringify(arr);
                    //这里把信息传入，保存雨量设置
                    $.post(baseUrl + "RainParamSetting/SaveQZZ", { "infoToSave": infoToSave }, function (data) {
                        alert("参数保存成功！");
                    });
                    break;
                case 1:
                      //这里读取修改后的因子取值，保存到数据库中
                    var index = $(".warnSetformrowOn").index(".warnSetformrow");
                    var name = $(".warnSetformrow:eq(" + index + ")").find("div:eq(0)").text();
                    var low1 = $(".warnAmendT1").val();
                    var val1 = $(".rainYZQZ:eq(0)").val();
                    var low2 = $(".warnAmendT2").val();
                    var high2 = $(".warnAmendT3").val();
                    var val2 = $(".rainYZQZ:eq(1)").val();
                    var low3 = $(".warnAmendT4").val();
                    var high3 = $(".warnAmendT5").val();
                    var val3 = $(".rainYZQZ:eq(2)").val();
                    var high4 = $(".warnAmendT6").val();
                    var val4 = $(".rainYZQZ:eq(3)").val();
                    var obj = {
                        ID: (index + 1),
                        Name: name,

                        low1:low1, 
                        val1:val1, 
                        low2:low2, 
                        high2:high2,
                        val2:val2, 
                        low3:low3, 
                        high3:high3,
                        val3:val3, 
                        high4:high4,
                        val4:val4, 
                    };
                    var info = JSON.stringify(obj);
                    $.post(baseUrl + "RainParamSetting/SavaJYYZ", { "info": info }, function (data) {
                        if (data = "success") {
                            alert("雨量参数保存成功！");
                        }

                    });

                                      
                    break;
                case 2://把查到的内容发送请求到后台，实时显示修改后内容                      
                    if (tempObj.resultDataLenth == 0) {
                        alert("未选择站点！");
                        return false;
                    }
                    var objArr = [];
                    var date = ($(".wa_calendarInput").val()).replace(/-/g, '.');//2014.04.05
                    var maxRain = $("#wa_24Max").val();
                    var sumRain = $("#wa_24Total").val();
                    tempObj.maxRain = maxRain;
                    tempObj.sumRain = sumRain;
                    for (var i = 0; i < tempObj.resultDataLenth ; i++) {
                        var obj = {};
                        obj.StationId = $($(".wa_stationId")[i]).text();
                        obj.YBMaxHRain = parseFloat(maxRain);
                        obj.YBSumRain = parseFloat(sumRain);
                        obj.YBDate = date;
                        obj.Id = parseInt($($(".wa_id_displayNone")[i]).text());
                        objArr.push(obj)
                    }
                    var modifyInfoStr = JSON.stringify(objArr);
                    $.post(baseUrl + "RainfallStation/UpdateYbRain", { strIds: modifyInfoStr, hour: tempObj.hour }, function (data) {
                        if (data = "success") {
                            alert("气象站信息修改成功！");
                            tempObj.searchAgain();
                            return false;
                        }
                        else {
                            alert("后台出错！");
                            return false;
                        }
                    });
                    break;
                default:
                    break;
            }
        });
    },
    rainQueryResultBack: function () {
        var tempObj = this;

        var feature = fullMap.getLayersByName("Boxlayer")[0].features;
        for (var i = 0; i < feature.length; i++) {
            fullMap.getLayersByName("Boxlayer")[0].removeFeatures(feature[i]);
        }

        var arr = [];
        arr = fullMap.getLayersByName('markers')[0].markers;
        var size = new OpenLayers.Size(21, 25);
        var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
        for (var i = 0; i < arr.length; i++) {
            var markss = arr[i];
            markss.icon.url = baseUrl + 'Content/images/marker-blue.png';
            markss.draw();
        }
        $(".warnMainquery").show();
        $("#warn_show_query_result").remove();
        $("#warn_query_marker").die("click");

    },
    //查询结果展示
    layQueryResult: function (data) {
        var tempObj = this;
        if (data.length == 0 || data == null) {
            alert("没有满足条件的站点！");
            return false;
        }
        var dataLen = tempObj.resultDataLenth;
        if ($(".wa_table").length > 0) {
            $(".rainResult").remove();
        }
        var str = "";
        for (var i = 0; i < tempObj.resultDataLenth; i++) {
            str += "<div class='wa_table_tr'><div class='wa_id_displayNone' style='display:none;'>" + data[i].Id + "</div><div class='wa_stationId' style='width:90px;'>" + data[i].StationId + "</div><div class='wa_table_tr_td' style='width:130px;'>" + data[i].StationName + "</div><div class='wa_YBMaxHRain' style='width:75px;'>" + (data[i].YBMaxHRain).toString().substring(0, 6) + "</div><div class='wa_YBSumRain' style='width:75px; '>" + (data[i].YBSumRain).toString().substring(0, 5) + "</div></div>";
        }
        var strtable = '<table class="wa_table_1" style="height:46px; width:374px;"><tr>' +
                    '<td class="wa_blackTd" style="width:90px;border-top:1px solid #D3D3D3;">&nbsp;站点ID&nbsp;</td>' +
                    '<td class="wa_blackTd" style="width:130px;border-top:1px solid #D3D3D3;">&nbsp;站点名称&nbsp;</td>' +
                    '<td class="wa_blackTd" style="width:75px;border-top:1px solid #D3D3D3;">未来' + tempObj.hour + '小时最大小时雨强</td>' +
                    '<td class="wa_blackTd" style="width:75px;border-top:1px solid #D3D3D3;">未来' + tempObj.hour + '小时降雨量</td>' +
                '</tr></table>';
        str = "<div class='wa_showResultDivTitle'>" + strtable + "</div>" + "<div class='wa_showResultDiv'><div class='wa_table' style='height: 370px;'>" + str + "</div></div>";
        var titleStr1 = '<div class="hWarning_TitleP" style="margin-top: 5px;"><div class="hw_steps_coin"></div><div class="hWarn_Name">查询结果</div></div>';
        str = titleStr1 + str;
        var sel2str = '<div id="wa_circle2" class="wa_queryBtn" title="画圆查询"></div>' +
                        '<div id="wa_rectangle2" class="wa_queryBtn" title="拉框查询"></div>' +
                        '<div id="wa_polygon2" class="wa_queryBtn" title="多边形查询"></div>';
        var titleStr2 = '<div class="hWarning_TitleP" style="margin-top: 5px;"><div class="hw_steps_coin" style="background-position-x:-20px;"></div><div class="hWarn_Name">设置降雨量</div></div>';

        var rainSetDiv = '<div class=wa_inputArea>' +
                            '<div class="wa_inputAreaRight">' +
                            '<div class="wa_labelinput"><label>未来' + tempObj.hour + '小时最大小时雨强&nbsp;:&nbsp;</label><input id="wa_24Max" value="0" class="wa_input"/></div>' +
                            '<div class="wa_labelinput"><label>未&nbsp;来&nbsp;&nbsp;' + tempObj.hour + '&nbsp;&nbsp;小&nbsp;时&nbsp;降&nbsp;雨&nbsp;量&nbsp;:&nbsp;</label><input id="wa_24Total" value="0" class="wa_input"/></div>' +
                            '</div>' +
                        '</div>';
        str = str + titleStr2 + rainSetDiv;
        var backstr = "<div class='rainResultBack'><div class='rainBackBtn' title='返回上一级'>返回上一级</div><div class='rainSetBtn' title='确认修改'>确认修改</div><div class='rainStationShow' title='显示/隐藏站点'>隐藏站点</div>";
        str += backstr;
        str = '<div id="warn_show_query_result">' + str + '</div>';
        $(".warnMainquery").hide();
        $("#warn_show_query_result").remove();
        $("#ui_left").append(str);
    },
    //"降雨量阀值设置" 修改
    amendRainValue: function (num) {
        var tempObj = this;
        var str = '<div class="warnAmend">' +
                '<p class="warnAmendp">前15天累计降雨量</p>' +
                '<div class="warnAmendRow">' +
                    '<label class="warnAmendL1">Ⅰ级预警：</label><label class="warnAmendicon">></label><input class="warnAmendT warnAmendT1" type="text" value=""/><label class="YZQZLable">因子取值</label><input class="rainYZQZ" type="text" value=""/>' +
                '</div>' +
                '<div class="warnAmendRow">' +
                    '<label class="warnAmendL1">Ⅱ级预警：</label><input class="warnAmendT warnAmendT2" type="text" value=""/><label class="warnAmendicon">~</label><input class="warnAmendT warnAmendT3" type="text" value=""/><label class="YZQZLable">因子取值</label><input class="rainYZQZ" type="text" value=""/>' +
                '</div>' +
                '<div class="warnAmendRow">' +
                    '<label class="warnAmendL1">Ⅲ级预警：</label><input class="warnAmendT warnAmendT4" type="text" value=""/><label class="warnAmendicon">~</label><input class="warnAmendT warnAmendT5" type="text" value=""/><label class="YZQZLable">因子取值</label><input class="rainYZQZ" type="text" value=""/>' +
                '</div>' +
                '<div class="warnAmendRow">' +
                    '<label class="warnAmendL1">Ⅳ级预警：</label><label class="warnAmendicon"><</label><input class="warnAmendT warnAmendT6" type="text" value=""/><label class="YZQZLable">因子取值</label><input class="rainYZQZ" type="text" value=""/>' +
                '</div>' +
            '</div>';
        $(".warnSetup1").append(str);

        $(".warnAmendp").text($(".warnSetformrow").eq(num).children().eq(0).text());
        //获取选中的表格中的值 并赋值给下方的修改区域
        var val = [];
        val[0] = $(".warnSetformrow").eq(num).children("div").eq(1).clone().children("span").remove().end().text().split(">")[1];
        val[1] = $(".warnSetformrow").eq(num).children("div").eq(2).clone().children("span").remove().end().text().split("~")[0];
        val[2] = $(".warnSetformrow").eq(num).children("div").eq(2).clone().children("span").remove().end().text().split("~")[1];
        val[3] = $(".warnSetformrow").eq(num).children("div").eq(3).clone().children("span").remove().end().text().split("~")[0];
        val[4] = $(".warnSetformrow").eq(num).children("div").eq(3).clone().children("span").remove().end().text().split("~")[1];
        val[5] = $(".warnSetformrow").eq(num).children("div").eq(4).clone().children("span").remove().end().text().split("<")[1];
        for (var i = 0; i < val.length; i++) {
            $(".warnAmendT").eq(i).attr("value", parseInt(val[i]));
        }
        for (var t = 1; t < 5; t++) {
            var value = $(".warnSetformrow").eq(num).children("div").eq(t).find("span").text();
            $(".rainYZQZ:eq(" + (t-1) + ")").val(parseFloat(value));
        }
    }

};

