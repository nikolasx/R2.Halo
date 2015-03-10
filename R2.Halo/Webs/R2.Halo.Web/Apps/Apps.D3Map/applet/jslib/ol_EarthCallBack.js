/**
* 标注点击弹出气泡默认配置
*/
var defaultBubbleFrameId = 'bubbleFrame';
var defaultBubbleWidth = 350; // 气泡宽
var defaultBubbleHeight = 195; // 气泡高
var defaultBubbleBgColor = "#EBEBEB"; // 气泡背景色
var defaultBubbleBgOpacity = 1;
var defaultBubbleBdWidth = 0;
var defaultBubbleBdColor = "#ced9e7";
var defaultBubbleBdOpacity = 1;
var defaultBubbleOffsetX = 50;
var defaultBubbleOffsetY = 60;
var defaultBubbleRootWidth = 40;
var defaultBubbleLayerName = 'ol_layer_bubble';
var winHeight = document.documentElement.offsetHeight;
var winWidth = document.documentElement.offsetWidth;


//点击灾害点marker后的回调函数
function addDisasterMarkerCallBack(data) {
    var res = eval("(" + data + ")");
    var x = res.lat;
    var y = res.lon;
    callAnnotationApi(x, y, "disasterAnnotation", "bubbleMove", disasterBubbleWidth, disasterBubbleHeight);
    //方法位于earthmain.js
    addDisasterBubble("disasterAnnotation", res.id, res.layerName, res.lat, res.lon);
}
function addMonitoringSiteMarkerCallBack(data) {
    var res = eval("(" + data + ")");
    var x = res.lat;
    var y = res.lon;
    callAnnotationApi(x, y, "disasterAnnotation2", "bubbleMonitorSiteMove", mSiteBubbleWidth, mSiteBubbleHeight);
    addMonitoringSiteBubble(data);
}
//点击应急调查等查询信息后的回调函数
function addQueryInfoMarkerCallBack(data) {
    var res = eval("(" + data + ")");
    callAnnotationApi(res.lat, res.lon, "disasterAnnotation", "bubbleMove", disasterBubbleWidth, disasterBubbleHeight);
    addQueryInfoBubble(data);
}

//点击矿山复绿的mark点后的回调函数
function addMineRecoveryMarkerCallBack(data) {
    var res = eval("(" + data + ")");
    callAnnotationApi(res.lat, res.lon, "disasterAnnotation", "bubbleMove", disasterBubbleWidth, disasterBubbleHeight);
    addMineRecoveryBubble(data);
}

//调用地球方法
function callAnnotationApi(x, y, annotationId, bubblemoveCallBack, bubbleWidth, bubbleHeight) {
    addFrameAnnotation(annotationId, bubblemoveCallBack, x, y, bubbleWidth, bubbleHeight, defaultBubbleBgColor, defaultBubbleBgOpacity, defaultBubbleBdWidth, defaultBubbleBdColor,
        defaultBubbleBdOpacity, defaultBubbleOffsetX, defaultBubbleOffsetY, defaultBubbleRootWidth, defaultBubbleLayerName);
}

function getPositionByClickCallBack(data) {
    cbGetPositionByClick(data);
}