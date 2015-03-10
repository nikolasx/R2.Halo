/*
*描述：系统全局成员变量定义
*create by zzq 2013-10-11 9:42:01
*/

//此处在window对象中定义命名空间
window.R2 = {};
R2.OpenNewPages = {}; //打开新页面

//加载脚本时立即执行本方法
(function initNameSpace() {
    R2 = R2 || {};
    R2.Control = OpenLayers.Class(R2, {});
    R2.Business = {};
    R2.gisIp = '192.168.83.234';
    var Wip = window.location.hostname
    if (Wip == "60.208.75.172") {
        R2.gisIp='60.208.75.172'
    }
    R2.gisPort = '6163';
    R2.mapBaseLayerLevel = 4;  //底图瓦片级别
    //用于页面间传递数据
    R2.DataTransport = null;
    //预警等级分级
    //R2.warningGrade = [35, 50, 80, 100];//初始设定
    R2.warningGrade = [37, 55, 80, 100];//初始设定
    getWarningGradeValue();//向后台发送请求，根据配置文档更新值
    //预警图层和预警图层与行政区叠加图层
    R2.warningResultLayer = null;
    R2.warningAnalysisLayer = null;
    //预警结果叠加图层
    R2.mapVector = null;
    //Copy预警图层
    R2.copyLayer = null;

    R2.WarnLayerID = null;
    R2.CreateLayerR = null;   //复制图层
    R2.copyLayerD = null;
    //预警底图
    R2.WarnOriLayer = null;
    //预报词
    R2.ybcContent = null;
})();


//头部不滑的滑屏机制
var contentPanel = {};
contentPanel.data = null;
contentPanel.showByIFrame = function (url) {
    $(".ui_Iframe").attr("src", "");
    $("#ui_content").stop().animate({ left: "-100%" }, 500);
    $("#contentPanel").stop().animate({ left: '0' }, 500, function () {
        $(".ui_Iframe").attr("src", url);
    });

};
contentPanel.closeByIFrame = function () {
    $(".ui_Iframe").attr("src", "");
    $("#ui_content").stop().animate({ left: "0" }, 500);
    $("#contentPanel").stop().animate({ left: '100%' }, 500, function () {
    });
}

//向后台发送请求获取预警等级值
function getWarningGradeValue() {
    $.post(baseUrl + "FactorQuery/GetWarningGrideValue", null, function (cbdata) {
        R2.warningGrade = cbdata;
    });
}
//全屏滑屏机制
var fullPanel = {};
fullPanel.data = null;
fullPanel.showByIFrame = function (url) {
    $(".full_Iframe").attr("src", "");
    $("#ui_whole").stop().animate({ left: "-100%" }, 500);
    $("#fullPanel").stop().animate({ left: '0' }, 500, function () {
        $(".full_Iframe").attr("src", url);
    });

};
fullPanel.closeByIFrame = function () {
    $(".full_Iframe").attr("src", "");
    $("#ui_whole").stop().animate({ left: "0" }, 500);
    $("#fullPanel").stop().animate({ left: '100%' }, 500, function () {
    });
}

//全屏滑屏机制2
var fullPanel2 = {};
fullPanel2.data = null;
fullPanel2.showByIFrame = function (url) {
    $(".full_Iframe2").attr("src", "");
    $("#fullPanel").stop().animate({ left: "-100%" }, 500);
    $("#fullPanel2").stop().animate({ left: '0' }, 500, function () {
        $(".full_Iframe2").attr("src", url);
    });

};
fullPanel2.closeByIFrame = function () {
    $(".full_Iframe2").attr("src", "");
    $("#fullPanel").stop().animate({ left: "0" }, 500);
    $("#fullPanel2").stop().animate({ left: '100%' }, 500, function () {
    });
}
fullPanel2.closeByIFrameGoHome = function () {
    $(".full_Iframe").attr("src", "");
    $(".full_Iframe2").attr("src", "");
    $("#ui_whole").stop().animate({ left: "0" }, 500);
    $("#fullPanel").stop().css("left", "100%");
    $("#fullPanel2").stop().animate({ left: '100%' }, 500, function () {
    });
}

/********************************************* 全屏等待框 *********************************************/
var waitPage = {};
//显示全屏等待框
//tip内容为可选，如果需要提示进度，如"预警分析(4/6)：已完成实况雨量查询，正在计算预警Y值..."
waitPage.show = function (tip) {
    if (!tip)
        tip = "";
    var contentStr = "";
    if (arguments.length > 0)
        contentStr = content;
    var content = '<div class="ui_wait"><div class="ui_waitMask"></div>' +
                    '<div class="ui_waitContent">' +
                        '<div class="ui_waitImg"></div>' +
                        '<div class="ui_waitTxt">' +
                            '<div>正在加载，请稍后......</div>' +
                            '<div class="ui_waitTip">' + tip + '</div>' +
                        '</div>' +
                    '</div></div>';
    $("body").append(content);
};
//走到某个进度
//如"预警分析(5/6)：已完成预警Y值计算，正在创建预警分析结果点图层..."
waitPage.progressTip = function (tip) {
    $(".ui_waitTip").html(tip);
}
//移除等待框
waitPage.hide = function () {
    $(".ui_wait").hide(null, null, null, function () {
        $(".ui_wait").remove();
    });
}
/********************************************* 全屏等待框结束 *********************************************/