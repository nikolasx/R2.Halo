/**
 * 标注点击弹出气泡默认配置
 */
var defaultBubbleFrameId = 'bubbleFrame';
var defaultBubbleNormalId = 'bubbleNormal';
var defaultBubbleWidth = 349; // 气泡宽
var defaultBubbleHeight = 195;// 气泡高

var defaultBubbleFrameBgColor = "#ced9e7"; // 气泡背景色
var defaultBubbleFrameBdColor = "#ced9e7";
var defaultBubbleNormalBgColor = "#ced9e7"; // 气泡背景色
var defaultBubbleNormalBdColor = "#ced9e7";

var defaultBubbleBgOpacity = 0.6;
var defaultBubbleBdWidth = 1;
var defaultBubbleBdOpacity = 1;

var defaultBubbleFrameOffsetX = 0;
var defaultBubbleFrameOffsetY = 40;
var defaultBubbleNormalOffsetX = 45;
var defaultBubbleNormalOffsetY = 40;

var defaultBubbleFrameRootWidth = 40;
var defaultBubbleNormalRootWidth = 30;

var defaultBubbleFrameLayerName = 'ol_layer_bubble_frame';
var defaultBubbleNormalLayerName = 'ol_layer_bubble_normal';

//模型菜单
var defalutModelMenuRootWidth=0;
var defaultModelMenuWidth = 110; 
var defaultModelMenuHeight = 100;
/**
 * 地球标注点击 弹出frame 回调函数
 * 
 * @param res
 * @return
 */
function labelClickFrameCallBack(res) {
	/**
	 * 录制预案相关功能
	 */
	var functionRecordArr = {};
	functionRecordArr.funName = labelClickFrameCallBack;
	functionRecordArr.params = new Array();
	functionRecordArr.params.push(res);
	top.storeOperFunction(functionRecordArr);
	

	var data = top.JSON.deserialize(res);
	var id = data.id.split('|')[0];
	if (id == null || id == '') {
		return;
	}
	var longitude = data.lon;
	var latitude = data.lat;
	/**
	 * 删除之前添加的气泡(解决连续两次点击同一标注气泡覆盖面板的情况)
	 */
	deleteAnnotation('', 'ol_layer_bubble_frame');
	/**
	 * 添加气泡
	 */
	addFrameAnnotation(defaultBubbleFrameId, "bubbleMove", latitude, longitude,
			defaultBubbleWidth, defaultBubbleHeight, defaultBubbleFrameBgColor,
			1, 0, defaultBubbleFrameBdColor, defaultBubbleBdOpacity,
			defaultBubbleFrameOffsetX, defaultBubbleFrameOffsetY,
			defaultBubbleFrameRootWidth, defaultBubbleFrameLayerName);
	/**
	 * 添加frame
	 */
	top.addFrameBubble(res);
}

/**
 * 地球标注点击 弹出普通气泡 回调函数
 * 
 * @param res
 * @return
 */
function labelClickNormalCallBack(res) {
	/**
	 * 录制预案相关功能
	 */
	var functionRecordArr = {};
	functionRecordArr.funName = labelClickNormalCallBack;
	functionRecordArr.params = new Array();
	functionRecordArr.params.push(res);
	top.storeOperFunction(functionRecordArr);
	
	var description = res.substring(res.lastIndexOf(',"description"'), res
			.lastIndexOf('}'));
	res = res.substring(0, res.lastIndexOf(',"description"')) + '}';
	description = description.substring(description.indexOf(':"') + 2,
			description.length - 1);
	var data = top.JSON.deserialize(res);
	var longitude = data.lon;
	var latitude = data.lat;
	if (description == null || description == '' || description == 'null') {
	} else {
		/**
		 * 添加气泡
		 */
		addSimpleInnerAnnotation(defaultBubbleNormalId, description, latitude,
				longitude, defaultBubbleBgOpacity, defaultBubbleNormalBgColor,
				defaultBubbleBdWidth, defaultBubbleNormalBdColor,
				defaultBubbleNormalOffsetX, defaultBubbleNormalOffsetY,
				defaultBubbleNormalRootWidth, defaultBubbleNormalLayerName);
	}
	/**
	 * 台风路径点击标注处理,展示预报路径,绘制台风影响区域
	 */
	if (data.layerName.indexOf('台风路径') > -1) {
		var time = description.substring(description.indexOf('过去时间：') + 5,
				description.indexOf('过去时间：') + 24);
		if ((time == '2013-10-01 02:00:00' && data.layerName.indexOf('201321'))) {
			top.queryTfPredPath(data.layerName.substring(data.layerName
					.indexOf('台风路径') + 4), time, data.lat + ',' + data.lon)
		}
		top.drawTfEffectArea(data.layerName.substring(data.layerName
				.indexOf('台风路径') + 4), description);
	}
}

/**
 * 地球移动事件气泡响应事件返回top处理(ol_main.js -> bubbleMove();)
 * 
 * @param data
 * @return
 */
function bubbleMove(data) {
	top.bubbleMove(data);
}

/**
 * 通过鼠标点击获取坐标点,并进行点击查询
 * 
 * @param data
 * @return
 */
function pickPoint(data) {
	top.pointLayerQuery(data);
}

/**
 * 
 * @param {}
 *            data
 */
function _callbackForRectangle(data) {
	data = top.JSON.deserialize(data);
	top.rectLayerQuery(data);
}

/**
 * 
 * @param {}
 *            data
 */
function _callbackForCircle(data) {
	data = top.JSON.deserialize(data);
	top.circleLayerQuery(data);
}

/**
 * 
 * @param {}
 *            data
 */
function _callbackForPloygon(data) {
	data = top.JSON.deserialize(data);
	top.polygonLayerQuery(data);
}

/**
 * 地图手动绘制mark的callback方法,用于连续绘制,返回点击地球的坐标点信息
 * 
 * @param res
 * @return
 */
function drawMarkCallBack(res) {
	top.startDrawMark('', res);
}

/**
 * 地图手动绘制shape的callback方法,用于连续绘制回调,返回图形的id
 * 
 * @param res
 * @return
 */
function drawShapeCallBack(res) {
	var data = top.JSON.deserialize(res);
	top.pushZhddStack(data.id);
}

/**
 * 水库预案 淹没范围点击回调函数
 * 
 * @param res
 * @return
 */
function showYmfwDetailGrid(res) {
	top.showYmfwDetailGrid(res);
}

/**
 * 标注点击弹气泡测试
 * 
 * @return
 */
function labelClickTest(res) {
	var data = top.JSON.deserialize(res);
	var id = data.id.split('|')[0];
	if (id == null || id == '') {
		return;
	}
	var longitude = data.lon;
	var latitude = data.lat;

	addInnerAnnotation('bubbletest' + Math.random(),
			'<font>这是一段测试文字<br>121234:41341<br>asdfasdf:sasdf</font>',
			'Dialog-BOLD-14', '', 280, 200, false, 5, 15, 15, 15, 15,
			latitude * 1.0, longitude * 1.0, 0, 'blue', 0.7,
			'img/pages/gq/suolvetu.png', '', 15, 15, 1, 1, 30, 'red', 1, 30,
			40, 20, '', 14, 14, 0.1, 'bubbletest');
}


/**
 * 路径分析添加起始点回调
 * 
 * @param res
 * @return
 */
function addLjfxStartMark(res){
	top.addLjfxStartMark(res);
}

/**
 * 路径分析添加终点回调
 * 
 * @param res
 * @return
 */
function addLjfxEndMark(res){
	top.addLjfxEndMark(res);
}

/////////////////////////////////////////模型拾取回调///////////////////////////
function modelPickedCallback(res) {
	//方案一、和地球关联，位置跟模型一起;
	//方案二、做在地球外面，和地球无关;
	var data = top.JSON.deserialize(res);
	var mouseX=data.mouseX+defaultModelMenuWidth/2;
	var mouseY=data.mouseY+defaultModelMenuHeight;
	var lonlat=computePositionFromScreenPoint(mouseX,mouseY);
	var latitude = parseFloat(lonlat.split(",")[0]);
	var longitude = parseFloat(lonlat.split(",")[1]);
	deleteAnnotation('','layer_menu_frame');	
	addFrameAnnotation(defaultBubbleFrameId, "bubbleMenuMove", latitude, longitude, defaultModelMenuWidth, defaultModelMenuHeight, defaultBubbleFrameBgColor, 1, 0, defaultBubbleFrameBdColor,
			defaultBubbleBdOpacity, 0, 0, 0, 'layer_menu_frame');
	 top.addCustomMenu(res);
	getPositionByClick("clearContextMenu",false);

}


/**
 * 地球移动回调函数
 * @param data
 * @return
 */
function bubbleMenuMove(data){
	top.bubbleMenuMove(data);
}


/**
 * 历史轨迹回调函数
 */
function callBackForHistoryTrace(data){
	top.callcallBack_HistoryTrace(data);
}


/**
 * 清除模型菜单,点击回调函数
 * @return
 */
function clearContextMenu(){
	top.clearContextMenu();
}


/**
 * 离散点分析完成回调
 * 
 * @param res
 * @return
 */
function analyseOverCallBack(res){
	top.map.removeLegendLayerById("LoadingLayer", "loading");
}
