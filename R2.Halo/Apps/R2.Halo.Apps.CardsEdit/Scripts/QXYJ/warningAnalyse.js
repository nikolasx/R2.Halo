/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../global/isTheValueLegal.js" />
/// <reference path="../Libs/OpenLayers.js" />
var warningAnalyse = {
    html: '<div class="warnMain">' +
            '<p class="warnTitle">预警分析</p>' +
            '<div class="warnArea warnArea1">' +
                '<p class="warn_titlep"><span class="warn_icon"></span><span class="warn_name">预警分析</span></p>' +
                //'<div class="warnbtn warnbtn1" style="margin-top:-15px;margin-right:10px;text-indent:15px;">设置</div>' +
                '<div class="warnRegion" style="margin-bottom:25px;margin-top:25px;height:130px;">' +
                   //网格大小
                   '<div style="height:30px;width:100%;line-height:40px;text-indent:5px;margin-top:10px;">' +
                        '<label style="margin-right:10px;float:left;height:40px;text-indent:15px;">网格大小：</label><input name="yujingfengxi" type="radio"  value="250" style="float:left;margin-top:15px;"/>' +
                        '<label style="margin-right:10px;font-size:10px;float:left;height:40px;margin-top:2px;">250m x 250m</label><input type="radio" name="yujingfengxi" value="1000" checked style="float:left;margin-top:15px;margin-left:20px;"/>' +
                        '<label style="margin-right:10px;font-size:10px;float:left;height:40px;margin-top:2px;">1000m x 1000m</label>' +
                   '</div>' +
                   //预报雨量
                   '<div style="height:40px;width:100%;line-height:30px;text-indent:5px;">' +
                        '<label style="margin-right:10px;float:left;height:30px;text-indent:15px;">预报雨量：</label><input name="yubaoyuliang" type="radio"  value="24" checked  style="float:left;margin-top:10px;"/>' +
                        '<label style="margin-right:10px;font-size:11px;float:left;height:40px;margin-top:2px;">未来24小时雨量</label><input type="radio" name="yubaoyuliang" value="48" style="float:left;margin-top:10px;margin-left:20px;"/>' +
                        '<label style="margin-right:10px;font-size:11px;float:left;height:40px;margin-top:2px;">未来48小时雨量</label>' +
                   '</div>' +
                   '<div style="height:30px;width:100%;line-height:30px;text-indent:15px;bottom:5px;">' +
                        '<label style="margin-right:15px;color:#4B619B;font-size:11px;">注：选择网格大小会影响预警分析的时间，请耐心等待！</label>' +
                   '</div>' +
                '</div>' +
                '<div class="warnRegion" style="height:110px;">' +
                    '<label class="warn_date_label">分析时间：</label><input type="text" class="warn_date" value="2014-02-26 10:00:00"/>' +
                    '<div><div class="warnbtn huisuo">回&nbsp;&nbsp;溯</div><div class="warnbtn warnbtn2">预&nbsp;&nbsp;警</div></div>' +
                '</div>' +
            '</div>',
    init: function () {
        var tempObj = this;
        //text框获得焦点与失去焦点
        $("input[type=text]").focus(function () {
            $(this).css("border-color", "#046fab");
        });
        $("input[type=text]").blur(function () {
            $(this).css("border-color", "#bfbfbf");
        });

        //日期text框获得焦点
        $(".warn_date").focus(function () {
            $(this).calendar({ format: 'yyyy-MM-dd HH:mm:ss', zIndex: 10001 });
            $(this).css("border-color", "#e4a112");
        });
        //日期text框初始化日期
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        if (month < 10) month = '0' + month;
        var date = time.getDate();
        if (date < 10) date = '0' + date;
        var hours = time.getHours();
        if (hours < 10) hours = '0' + hours;
        //$(".warn_date").attr("value", "2013" + "-" + "07" + "-" + "12" + " " + "10" + ":00" + ":00");
        $(".warn_date").attr("value", year + "-" + month + "-" + date + " " + hours + ":00" + ":00");

        //预警分析按钮点击事件
        $(".warnbtn2").click(function () {
            tempObj.warnAnalyse();
        });
        //回溯分析按钮点击事件
        $(".huisuo").click(function () {
            tempObj.reCallAnalyse();
        });
    },
    //预警分析功能
    warnAnalyse: function () {
        WarnAnalyseType = 1;
        var dateTime = $(".warn_date").val();
        var warningTime = dateTime.split(" ")[0].split("-")[0] + dateTime.split(" ")[0].split("-")[1] + dateTime.split(" ")[0].split("-")[2] + dateTime.split(" ")[1].split(":")[0] + dateTime.split(" ")[1].split(":")[1] + dateTime.split(" ")[1].split(":")[2];
        var gridClecked = $("[name=yujingfengxi]:checked").val();
        var yjRainChecked = $("[name=yubaoyuliang]:checked").val();
        initEarlyWarning(warningTime, gridClecked, yjRainChecked);
    },
    reCallAnalyse: function () {
        WarnAnalyseType = 2;
        var dateTime = $(".warn_date").val();
        var warningTime = dateTime.split(" ")[0].split("-")[0] + dateTime.split(" ")[0].split("-")[1] + dateTime.split(" ")[0].split("-")[2] + dateTime.split(" ")[1].split(":")[0] + dateTime.split(" ")[1].split(":")[1] + dateTime.split(" ")[1].split(":")[2];
        var date1 = new Date(dateTime.split(' ')[0]);

        var date2 = new Date();
        var datePeriod = date2 - date1;
        var days = parseInt(datePeriod / (1000 * 3600 * 24));//得到前后两个日期间隔的天数
        if (days < 0) {
            $(".rm_rangeInput").css("border", "1px solid #FF671C");
            alert('开始日期不能大于结束日期');
            return;
        }
        if (days > 365) {
            alert('日期跨度不能大于一年');
            return;
        }
        else {
            var gridClecked = $("[name=yujingfengxi]:checked").val();
            var yjRainChecked = $("[name=yubaoyuliang]:checked").val();
            initEarlyWarning(warningTime, gridClecked, yjRainChecked);
        }



    //var warningTime = dateTime.split(" ")[0].split("-")[0] + dateTime.split(" ")[0].split("-")[1] + dateTime.split(" ")[0].split("-")[2] + dateTime.split(" ")[1].split(":")[0] + dateTime.split(" ")[1].split(":")[1] + dateTime.split(" ")[1].split(":")[2];
    ////var dtwarn = new Date(warningTime);
    //var dtwarn = new Date(warningTime.substr(0, 4), warningTime.substr(4, 2), warningTime.substr(6, 2), warningTime.substr(8, 2), warningTime.substr(10, 2), warningTime.substr(12,2),"000");
    //var dtnow = new Date();
    //var iDays = parseInt(Math.abs(dtnow - dtwarn) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数

    //if (iDays >= 2 && dtnow > dtwarn) {
    //    var gridClecked = $("[name=yujingfengxi]:checked").val();
    //    var yjRainChecked = $("[name=yubaoyuliang]:checked").val();
    //    initEarlyWarning(warningTime, gridClecked, yjRainChecked);
    //}
    //else {
    //    alert("选择时间不正常！");
    //}
}
};