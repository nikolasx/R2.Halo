/// <reference path="../global/isTheValueLegal.js" />
/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/OpenLayers.js" />


var rainManage =
{
    html: '<div class="rainManageDiv">' +
        '<p class="warnTitle">雨量管理</p>' +
        '<div class="rm_part_title">' +
               '<div class="rm_step_coin" id="rm_step1"></div>' +
               '<div class="rm_stepcoin_right">请先输入关键字</div>' +
           '</div>' +
       '<div class="rm_part" id="rm_part1">' +
           '<label>关键字：</label>'+
           '<input type="text" id="rm_keyword" value="站点名称、地址、行政区（县）、站点编号"/>' +
       '</div>' +
       '<div class="rm_part_title">' +
               '<div class="rm_step_coin" id="rm_step2"></div>' +
               '<div class="rm_stepcoin_right">再选择日期</div>' +
           '</div>' +
       '<div class="rm_part" id="rm_part2">' +
           '<div id="rm_dateRangeDiv">' +
                '<label>日&nbsp;&nbsp;&nbsp;期：</label>' +
               '<input class="rm_rangeInput" id="rm_dateStart"/>' +
               '<label>——</label>' +
               //'<div class="rm_dateLine">——</div>' +
               '<input class="rm_rangeInput" id="rm_dateEnd"/>' +
           '</div>' +
       '</div>' +
       '<div class="rm_part_title">' +
               '<div class="rm_step_coin" id="rm_step3"></div>' +
               '<div class="rm_stepcoin_right">最后设置累积雨量条件</div>' +
           '</div>' +
       '<div class="rm_part" id="rm_part3">' +
           '<div id="rm_totalRainSetDiv">' +
               '<div id="rm_totalRainSetDivBar">' +
                    '<label>条&nbsp;&nbsp;&nbsp;&nbsp;件：</label>' +
                   '<input class="rm_totalRainSetInput" id="rm_totalRainSetMin" value="0"/>' +
                   '<select id="rm_totalRainSetSelectLeft" class="rm_totalRainSetSelect">' +
                       '<option>≤</option>' +
                       '<option>＜</option>' +
                   '</select>' +
                   '<div id="rm_totalRainSetYLDiv">雨量</div>' +
                   '<select id="rm_totalRainSetSelectRight" class="rm_totalRainSetSelect">' +
                       '<option>≤</option>' +
                       '<option>＜</option>' +
                   '</select>' +
                   '<input class="rm_totalRainSetInput" id="rm_totalRainSetMax" value="10000"/>' +
               '</div>' +
           '</div>' +
       '</div>' +
       '<div class="rm_part" id="rm_part4">' +
           '<div id="rm_OK_Bar">' +
               '<div id="rm_OK_btn">查&nbsp;&nbsp;&nbsp;&nbsp;询</div>' +
           '</div>' +
       '</div>' +
   '</div>',
    resultHtml:
                  '<p class="warnTitle">查询结果</p>' +
                   '<div id="rm_resultDiv">' +
                       '<div id="rm_resultDivHead">' +
                           '<div id="rm_resultDivCoin"></div>' +
                           '<div id="rm_displayTypeDiv">列表展示</div>' +

                       '</div>' +
                       '<div id="rm_tableDiv" class="rm_tableChartDiv">' +
                           '<table id="rm_table">' +
                               '<tr>' +
                                   '<td>序号</td><td>雨量站点编号</td><td>雨量站点名称</td><td>雨量累计值</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                               '<tr>' +
                                   '<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>' +
                               '</tr>' +
                           '</table>' +
                           '<div id="rm_pageCtlDiv">' +
                               '<div id="rm_page5BtnDiv">' +
                                   '<div class="rm_pageBtn" id="rm_firstPage">第一页</div>' +
                                   '<div class="rm_pageBtn" id="rm_prevPage">上一页</div>' +
                                   '<div id="rm_pageInfoDiv" >0/0</div>' +
                                   '<div class="rm_pageBtn" id="rm_nextPage">下一页</div>' +
                                   '<div class="rm_pageBtn" id="rm_lastPage">最后一页</div>' +
                               '</div>' +
                           '</div>' +
                       '</div>' +
                       '<div id="rm_highchartDiv" class="rm_tableChartDiv" style="display:none;">' +
                       '</div>' +
                        '<div id="rm_resultBackDiv">' +
                            '<div id="rm_backBtn">返&nbsp;&nbsp;&nbsp;回</div>' +
                        '</div>' +
                   '</div>',

    init: function (option) {
        //$("#rm_dateStart").attr("value", "2013" + "-" + "07" + "-" + "12" + " " + "10" + ":00");
        //$("#rm_dateEnd").attr("value", "2013" + "-" + "07" + "-" + "20" + " " + "10" + ":00");
        this.initDateTime();
        this.utilClickReg();
        this.backBtnClickReg();
        this.resize();
        this.clearOthersMapInfo();

    },
    initDateTime: function() {
        //日期text框初始化日期
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        if (month < 10) month = '0' + month;
        var date = time.getDate();
        if (date < 10) date = '0' + date;
        var hours = time.getHours();
        if (hours < 10) hours = '0' + hours;
        //$(".warn_date").attr("value", "2013" + "-" + "07" + "-" + "12" + " " + "10" + ":00");
        $("#rm_dateStart").attr("value", year + "-" + month + "-" + date + " " + hours + ":00");
        $("#rm_dateEnd").attr("value", year + "-" + month + "-" + date + " " + hours + ":00");
    },
    //根据分辨率调整元素高度
    resize: function () {
        //var height = window.screen.height;
        ////alert(height);

        //if (height > 768) {
        //    $(".rainManageDiv,.rainManageDivClone").css("height", "100%");
        //    $(".rm_part:lt(3)").css("height", "50px");
        //    $(".rm_part:eq(3)").css("margin-top", "35px");
        //}


    },
    utilClickReg: function () {
        var tempObj = this;
        $(".rm_rangeInput").focus(function () {
            $(this).calendar({ format: 'yyyy-MM-dd HH:mm', zIndex: 10001 });
            $(this).css("border-color", "#e4a112");
        });
        $("#rm_keyword").focus(function () {
            $(this).css("color","black");
            if ($(this).val() == "站点名称、地址、行政区（县）、站点编号") {
                $(this).val("");
            }
        }).blur(function () {
            if ($(this).val() == "") {
                $(this).val("站点名称、地址、行政区（县）、站点编号");
                $(this).css("color", "#808080");
            }
        });




        $("#rm_OK_btn").click(function () {
            //点击开始查询按钮前执行填入的值的合法性判断
            var minVal = $("#rm_totalRainSetMin").val();
            var maxVal = $("#rm_totalRainSetMax").val();
            var chk1 = new R2.Business.IsLegal({ "value": minVal });
            var chk2 = new R2.Business.IsLegal({ "value": maxVal });
            var val1 = chk1.isFloat();
            var val2 = chk2.isFloat();
            if (val1 == false || val2 == false) {
                $(".rm_totalRainSetInput").css("border", "1px solid #FF671C");
                alert("雨量范围填写不合法，请重新填写！");
                return false;
            }
            else {
                $(".rm_totalRainSetInput").css("border", "1px solid #BFBFBF");
            }
            //以下判断填入日期合法性的判断
            var dateStr1 = $("#rm_dateStart").val();
            var dateStr2 = $("#rm_dateEnd").val();
            if (dateStr1 == "" || dateStr2 == "") {
                $(".rm_rangeInput").css("border", "1px solid #FF671C");
                alert("请选择日期！");
                return false;
            }
            else {
                $(".rm_rangeInput").css("border", "1px solid #BFBFBF");
            }
            var date1 = new Date(dateStr1.split(' ')[0]);
           
            var date2 = new Date(dateStr2.split(' ')[0]);
            var datePeriod = date2 - date1;
            var days = parseInt(datePeriod / (1000 * 3600 * 24));//得到前后两个日期间隔的天数
            if (days < 0 ) {
                $(".rm_rangeInput").css("border", "1px solid #FF671C");
                alert('开始日期不能大于结束日期');
                return;
            }
            if (days > 365) {
                alert('日期跨度不能大于一年');
                return;
            }
            else {
                $(".rm_rangeInput").css("border", "1px solid #BFBFBF");
            }
            

            tempObj.executeSearch();
        });
        



        //填入雨量值的input框注册
        $("#rm_totalRainSetMin").focus(function () {
            if ($(this).val() == "0") {
                $(this).val("");
            }
        }).blur(function () {
            if ($(this).val() == "") {
                $(this).val(0);
            }
        });

        $("#rm_totalRainSetMin").focus(function () {
            if ($(this).val() == "1000") {
                $(this).val("");
            }
        }).blur(function () {
            if ($(this).val() == "") {
                $(this).val(1000);
            }
        });
    },

    /*
    *将其他模块查询到的marker点之类的信息清除掉
    * created by jjm 2014.04.16
    */
    clearOthersMapInfo: function () {
        var otherMarkerLayers = fullMap.getLayersByName('Boxlayer')[0];
        var tempFeatureArr = otherMarkerLayers.markers;
        otherMarkerLayers.removeFeatures(tempFeatureArr);
        if (fullMap.getLayersByName('markers').length > 0) {
            var tempMarkersArr = fullMap.getLayersByName('markers')[0].markers;
            fullMap.getLayersByName('markers')[0].clearMarkers(tempMarkersArr);
        }
    },

    executeSearch: function () {
        var tempObj = this;

        var keyword = $("#rm_keyword").val() == '站点名称、地址、行政区（县）、站点编号' ? '' : $("#rm_keyword").val();
        var dateStart = this.detailDateFormat($("#rm_dateStart").val());
        var dateEnd = this.detailDateFormat($("#rm_dateEnd").val());      //日期转换


        var rainMin = parseFloat($("#rm_totalRainSetMin").val()) * 10;
        var rainMax = parseFloat($("#rm_totalRainSetMax").val())*10;
        var char1 = $("#rm_totalRainSetSelectLeft").val();
        char1 = char1 == '≤' ? '>=' : '>';  //将 ≤＜≥＞ 改成 <=,<,>=,>格式 ,方便数据库中比较
        var char2 = $("#rm_totalRainSetSelectRight").val();
        char2 = char2 == '≤' ? '<=' : '<';
        var postData = {
            keyword: keyword,
            dateStart: dateStart,
            dateEnd: dateEnd,
            rainMin: rainMin,
            rainMax: rainMax,
            char1:char1,
            char2: char2
        };
        //postData = JSON.stringify(postData);
        //var rdata = [
        //    { StationId: 'D6001', StationName: '济南大学武汉校区', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6002', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6003', StationName: '济南大学中地校区', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6004', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6005', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6006', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6007', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6008', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6001', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6002', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6003', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6004', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6005', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6006', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6007', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6008', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6001', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6002', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6003', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6004', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6005', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6006', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6007', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6008', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6001', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6002', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6003', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6004', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6005', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6006', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6007', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 },
        //    { StationId: 'D6008', StationName: '济南大学', Region: '济南', SumRainFall: 123124, Lon: 123131, Lat: 2122134 }
        //];

        $.post(baseUrl + "RainManage/RainManageQuery", postData, function (data) {
            //查询结果展示列表
            var resultContent = new R2.Business.rainManageQueryResult({
                parentId: 'ui_left',
                resultData: data,
                backQueryCallBack: tempObj.backQueryList,
                //dataAddCallBack:tempObj.addRainQueryMarksInMap,
                itemClickCallBack: tempObj.showRainQueryPopupInMap,
            });
           
            //添加mark到地图上
            tempObj.addRainQueryMarkersInMap(data);
        });

            //$("#ui_left > div").hide();


        //$(".rainManageDiv").animate({ "left": "-380px" }, 300, function (data) {
        //    $(".rainManageDiv").css("display", "none");
        //    if ($(".rainManageDivClone").length == 0) {
        //        $(".rainManageDiv").clone().removeClass("rainManageDiv").addClass("rainManageDivClone").appendTo(".ui_Content");
        //    }
        //    $(".rainManageDivClone").empty().css("display", "block");
        //    $(".rainManageDivClone").animate({ "left": "0px", "display": "block" }, 300, function () {
        //        $(".rainManageDivClone").append(tempObj.resultHtml);

        //    });
        //});



    },

    /*
    * add by jjm 2014.04.14
    * 处理日期的格式，将2014-04-14 :10:35 改成 20140414103500 的格式 ,方便数据库中比较
    *Parameters:
    * date {string} 日期 2014-04-14 :10:35
    *return:
    *newDate {string} 转换后的日期 20140414103500
    */
    detailDateFormat: function (date) {
        var newDate = date.replace(/\-/g, ''); //去掉 - 
        newDate = newDate.replace(/\s*/g, '');  //去掉空格
        newDate = newDate.replace(/\:/g, '')+"00";
        return newDate;
    },

    /*
    *添加markers到地图上
    * Pamaters:
    * data {jsonObj} 后台 查询得到 的站点信息 ，包括站点的 id,name，lon ,lat等。
    */
    addRainQueryMarkersInMap: function (data) {
        var markersLayer = new OpenLayers.Layer.Markers("rainQueryMarkers");
        fullMap.addLayer(markersLayer);
        var size = new OpenLayers.Size(20, 25);
        var offset = new OpenLayers.Pixel(-(size.w / 2), size.h);
        var icon = new OpenLayers.Icon(baseUrl + 'Content/images/rainManage-green.png', size, null);
        for (var i = 0; i < data.length; i++)
        {
            var lon = data[i].Lon;
            var lat = data[i].Lat;
            var marker = new OpenLayers.Marker(new OpenLayers.LonLat(lon, lat), icon.clone());
            markersLayer.addMarker(marker);
        }
    },

    showRainQueryPopupInMap: function (index) {
        var id = $('#ui_left_listBody li').eq(index).find('.ui_left_listItemInfoId').text();
        var postionArr = $('#ui_left_listBody li').eq(index).find('.ui_left_listItemInfoPosition').text().split('_');
        var lon=parseFloat(postionArr[0]);
        var lat=parseFloat(postionArr[1]);

        rainManage.backQueryList(['higtRainQueryMarkers']);
        //if (oldHMarkersLayer.length > 0) {
        //    fullMap.removeFeatures
        //}
        var hMarkersLayer = new OpenLayers.Layer.Markers("higtRainQueryMarkers");
        fullMap.addLayer(hMarkersLayer);
        var size = new OpenLayers.Size(20, 25);
        var offset = new OpenLayers.Pixel(-(size.w / 2), size.h);
        var icon = new OpenLayers.Icon(baseUrl + 'Content/images/rainManage-red.png', size, null);
        var marker = new OpenLayers.Marker(new OpenLayers.LonLat(lon, lat), icon.clone());
        hMarkersLayer.addMarker(marker);

        
        fullMap.setCenter(new OpenLayers.LonLat(lon,lat), 3);
        $.post(baseUrl + "RainManage/RainManageQueryById", id, function (data) {

        });
    },

    //返回上一级 将markers全部清除掉
    backQueryList: function (layerName) {
        if (layerName == null || layerName.length==0) {
            layerName = ['rainQueryMarkers', 'higtRainQueryMarkers'];
        }
        length=layerName.length;
        for (var i = 0; i < length; i++) {
            var markerLayers = fullMap.getLayersByName(layerName[i]);
            if (markerLayers.length > 0) {
                fullMap.removeLayer(markerLayers[0]);
            }
        }
        
    },

    backBtnClickReg: function () {
        $("#rm_backBtn").live("click", function () {
            $(".rainManageDivClone").animate({ "left": "-380px" }, 300, function () {
                $(".rainManageDivClone").css("display", "none");
                $(".rainManageDiv").css("display", "block");
                $(".rainManageDiv").animate({ "left": "0px", "z-index": "30000" }, 300, function () {


                });
            });
        });
    },


    CLASS_NAME: "RainManage"
};