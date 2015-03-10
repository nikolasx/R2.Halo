/**   
 * @fileOverview 导航接口   
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 */

/**
 * 新 开始导航
 * @version 1.7
 * @param pathID 导航路径ID
 * @param pathLayer 导航路径图层
 * @param pos 坐标信息lat,lon,altitude|lat,lon,altitude|lat,lon,altitude|...
 * @param iconURL 导航飞机图片地址
 * @param initzoom 初始化视点高度
 * @param initPitch 初始化视点倾斜角度
 * @param speed 速度 (单位KM/H)
 * @param lineType 导航线类型(dashedLine-虚线，solidLine-实线）
 * @param lineWidth 线宽
 * @param isDrawLine
 * @param callback 导航完成之后执行的回到函数
 */
function startNavigate(pathID, pathLayer, pos, iconURL , initzoom, initPitch, speed, lineType, lineColor, lineWidth, isDrawLine, callback){
	if (hasEarthObj()) {
		earthObj.getNavigateOption().startNavigate(pathID, pathLayer, pos, iconURL , initzoom * 1.0, initPitch * 1.0, speed * 1.0, lineType, lineColor, lineWidth * 1.0, isDrawLine, callback);
	}
}


/**
 * @version 1.7
 * 
 * 停止导航
 * @param layerName 图层名称
 */
function stopFlyNavigation(layerName) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().stopNavigate(layerName);
	}
}
/**
 * 暂停导航
 */
function pauseNavigate(){
	if (hasEarthObj()) {
		earthObj.getNavigateOption().pauseNavigate();
	}
}

/**
  * 恢复导航
  */
function  resumeNavigate(){
	if (hasEarthObj()) {
		earthObj.getNavigateOption().resumeNavigate();
	}
}
/**
 * 删除地表导航线
 * @param {Object} pathID
 * @param {Object} layerName
 */
function removePath(pathID, layerName){
	if (hasEarthObj()) {
		earthObj.getNavigateOption().removePath(pathID, layerName);
	}
}

/**
 * startModelNavigate   基于飞机模型的导航        (新接口)
 * @param pathID     导航ID，作为该条导航的唯一标示
 * @param pathLayerName  导航线所在的图层（若绘制导航线则需要此参数）
 * @param pos            导航线路点集（形如：latitude,longitude,elevation|latitude,longitude,elevation|.....）
 * @param modelURL       模型文件所在的路径
 * @param initzoom       导航时的初始视点高度
 * @param initPitch      导航时的初始倾斜角
 * @param Planepitch     飞机倾斜角
 * @param timeLength          导航动画时间
 * @param lineType       导航线类型（实线或虚线）
 * @param lineColor      导航线的颜色
 * @param lineWidth      导航线的宽度
 * @param isDrawLine     是否绘制导航先
 * @param modelInitScale   导航飞机模型的缩放
 * @param smoothScale    给定在一条路径的开始或结尾处需要进行平滑过渡的路径所占的该段路径总长度的比例
 * @param backFun    回调函数
 */
function startPlaneNavigate(pathID, pathLayerName, pos, modelURL, initzoom, initPitch, planepitch, timeLength, lineType, lineColor, lineWidth, isDrawLine, modelInitScale, smoothScale, planeCompassNorthSpan, callback) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().startModelNavigate(pathID, pathLayerName, pos, modelURL , initzoom * 1.0, initPitch * 1.0, planepitch, timeLength * 1.0, lineType, lineColor, lineWidth * 1.0, isDrawLine, modelInitScale * 1.0, smoothScale * 1.0, planeCompassNorthSpan * 1.0, callback);
	}
}

/**
 * pausePlaneNavigate  暂停导航
 * @param id 
 * @return
 */
function pausePlaneNavigate(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().pausePlaneNavigate(id);
	}
}

/**
 * resumePlaneNavigate  恢复导航
 * @param id
 * @return
 */
function resumePlaneNavigate(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().resumePlaneNavigate(id);
	}
}

/**
 * stopPlaneNavigate  停止导航
 * @param id
 * @return
 */
function stopPlaneNavigate(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().stopPlaneNavigate(id);
	}
}

/**
 * restartPlaneNavigate  重新开始飞机模型导航
 * @param id
 * @return
 */
function restartPlaneNavigate(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().restartPlaneNavigate(id);
	}
}

/**
 * clearPlaneNavigate  清除飞机模型导航
 * @param id
 * @return
 */
function clearPlaneNavigate(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().clearPlaneNavigate(id);
	}
}

////////////////////////////////////////////////////历史轨迹接口，暂时放在该文件下///////////////////////////////////////////////
/**
 * startHistoryTrack   基于模型的汽车轨迹        (新接口)
 * @param pathID     历史轨迹ID，作为该轨迹的唯一标示
 * @param pathLayerName  轨迹线所在的图层（若绘制导航线则需要此参数）
 * @param pos            轨迹线路点集（形如：latitude,longitude|latitude,longitude|.....）
 * @param modelURL       模型文件所在的路径
 * @param initzoom       演示时的初始视点高度
 * @param initPitch      演示时的初始倾斜角
 * @param viewType       视点类型，整型值(1 代表 第一视角， 3 代表 第三视角)
 * @param timeLength          导航动画时间
 * @param lineType       轨迹线类型（实线或虚线）
 * @param lineColor      轨迹线的颜色
 * @param lineWidth      轨迹线的宽度
 * @param isDrawLine     是否绘制轨迹线
 * @param modelInitScale   轨迹展示模型的缩放
 * @param smoothScale    给定在一条路径的开始或结尾处需要进行平滑过渡的路径所占的该段路径总长度的比例
 * @param planeCompassNorthSpan 
 * @param backFun    回调函数
 */
function startHistoryTrack(pathID, pathLayerName, pos, modelURL, initzoom, initPitch, viewType, timeLength, lineType, lineColor, lineWidth, isDrawLine, modelInitScale, smoothScale, planeCompassNorthSpan, callback) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().playCarMoveAnmator(pathID, pathLayerName, pos, modelURL , initzoom * 1.0, initPitch * 1.0, viewType * 1, timeLength * 1.0, lineType, lineColor, lineWidth * 1.0, isDrawLine, modelInitScale * 1.0, smoothScale * 1.0, planeCompassNorthSpan * 1.0, callback);
	}
}

/**
 * pauseHistoryTrack  历史轨迹演示
 * @param id 
 * @return
 */
function pauseHistoryTrack(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().pauseCarAnimator(id);
	}
}

/**
 * resumeHistoryTrack  恢复历史轨迹
 * @param id
 * @return
 */
function resumeHistoryTrack(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().resumeCarAnimator(id);
	}
}

/**
 * stopHistoryTrack  停止历史轨迹
 * @param id
 * @return
 */
function stopHistoryTrack(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().stopCarAnimator(id);
	}
}

/**
 * restartHistoryTrack  重新开始历史轨迹演示
 * @param id
 * @return
 */
function restartHistoryTrack(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().restartCarAnimator(id);
	}
}

/**
 * clearHistoryTrack  清除历史轨迹演示
 * @param id
 * @return
 */
function clearHistoryTrack(id) {
	if (hasEarthObj()) {
		earthObj.getNavigateOption().clearCarAnimator(id);
	}
}