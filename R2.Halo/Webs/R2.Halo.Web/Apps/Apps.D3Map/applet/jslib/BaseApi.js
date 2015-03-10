
/**   
 * @fileOverview 地球基本操作接口     导航接口去除
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7
 */
/**
 * @version 1.7
 * 设置地球高程倍数
 * @param {Object} verticalExaggeration 倍数
 */
function setVerticalExaggeration(verticalExaggeration){
	if (hasEarthObj()) {
		return earthObj.getBaseOption().setVerticalExaggeration(verticalExaggeration);
	}
}

/**
 * 
 * 地球重绘
 * @version 1.7
 * @return
 */
function reDrawEarth(){
	if (hasEarthObj()) {
		earthObj.getCommonOption().getEW().redraw();
	}
}



/**
 * 通过鼠标点击获取点击点的位置信息
 * 
 * @param functionName
 *            执行后的返回函数
 * @param isContinue
 *            是否为连续点击模式
 */
function getPositionByClick(functionName, isContinue) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().getPositionByClick(functionName, isContinue);
	}
}
/**
 * 取消鼠标点击获取点击点的位置信息
 */
function cancelGetPositionByClick() {
	if (hasEarthObj()) {
		earthObj.getBaseOption().cancelGetPositionByClick();
	}
}
/**
 * 当前视域以当前高度、指北方向和零倾斜角移动到指定经纬度
 * 
 * @param latitude
 *            纬度，范围区间[-90,90]
 * @param longitude
 *            经度，范围区间[-180,180]
 */
function flyToLocationByLatLon(latitude, longitude) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().flyToLocation(latitude * 1, longitude * 1);
	}
}
	
/**
 * 根据指定的矩形范围进行定位
 * 
 * @param latMin
 *            纬度，范围区间[-90,90]
 * @param lonMin
 *            经度，范围区间[-180,180]
 * @param latMax
 *            纬度，范围区间[-90,90]
 * @param lonMax
 *            经度，范围区间[-180,180]
 */
function flyToLocationByRect(latMin, lonMin, latMax, lonMax) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().flyToLocation(latMin * 1, lonMin * 1, latMax * 1, lonMax * 1);
	}
}
/**
 * 当前视域以指定高度、朝向、倾斜角移动到指定经纬度
 * 
 * @param latitude
 *            纬度，范围区间[-90,90]
 * @param longitude
 *            经度，范围区间[-180,180]
 * @param altitude
 *            视点高度，范围区间[0,20000000]
 * @param heading
 *            视点朝向，范围区间[-180,180]
 * @param pitch
 *            视点倾斜角，范围区间[0,90]
 */
function flyToLocation(latitude, longitude, altitude, heading, pitch) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().flyToLocation(latitude * 1, longitude * 1, altitude * 1, heading * 1, pitch * 1);
	}
}

/**
 * 设定当前视点的倾斜角与朝向
 * 
 * @param heading
 *            要设定的朝向值，范围区间[-180,180]
 * @param pitch
 *            要设定的倾斜角值，范围区间[0,90]
 */
function setHeadingAndPitch(heading, pitch) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().setHeadingAndPitch(heading * 1, pitch * 1);
	}
}
/**
 * 设定当前视点的海拔高度
 * 
 * @param altitude
 *            要设定的视点的海拔高度，范围区间[0,20000000]
 */
function setViewAltitude(altitude) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().setViewAltitude(altitude * 1);
	}
}
/**
 * 控制当前视点的缩放
 * 
 * @param flag
 *            缩放标识，true为放大，false为缩小
 * @param speed
 *            指放大缩小的速度快慢程度，推荐设定区间[-3,3]
 */
function ctrlZoom(flag, speed) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().ctrlZoom(flag, speed * 1);
	}
}
/**
 * 控制当前视点的倾斜角的增加与减少
 * 
 * @param flag
 *            倾斜角增减标识，true增大倾斜角，false减小倾斜角
 * @param speed
 *            倾斜的速度快慢程度
 */
function ctrlPitch(flag, speed) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().ctrlPitch(flag, speed * 1);
	}
}
/**
 * 设定地球按指定方向与速度旋转
 * 
 * @param flag
 *            旋转方向，true顺时针旋转，false逆时针旋转
 * @param speed
 *            旋转速度快慢程度
 */
function ctrlHeading(flag, speed) {
	if (hasEarthObj()) {
		earthObj.getBaseOption().ctrlHeading(flag, speed * 1);
	}
}
/**
 * 重置当前视点的倾斜角
 */
function resetPitch() {
	if (hasEarthObj()) {
		earthObj.getBaseOption().resetPitch();
	}
}
/**
 * 重置视点方向朝向
 */
function resetHeading() {
	if (hasEarthObj()) {
		earthObj.getBaseOption().resetHeading();
	}
}
/**
 * 重置当前视点的倾斜角、方向朝向
 */
function resetEarth() {
	if (hasEarthObj()) {
		earthObj.getBaseOption().resetEarth();
	}
}
/**
 * 重置当前视点为初始视点
 */
function resetView() {
	if (hasEarthObj()) {
		earthObj.getBaseOption().resetView();
	}
}
/**
 * 
 * 获取Applet窗口宽度和高度，以像素为单位
 * 
 * @return Applet窗口宽度和高度字符串，格式为："宽度,高度"
 */
function getRectangle() {
	if (hasEarthObj()) {
		return earthObj.getBaseOption().getRectangle();
	}
}
/**
 * 根据屏幕坐标计算经纬度坐标
 * 
 * @param x
 *            屏幕坐标x值
 * @param y
 *            屏幕坐标y值
 * @return 对应所给屏幕坐标的经纬度坐标，格式为："纬度,经度"
 */
function computePositionFromScreenPoint(x, y) {
	if (hasEarthObj()) {
		return earthObj.getBaseOption().computePositionFromScreenPoint(x * 1, y * 1);
	}
}
/**
 * 获取数字地球基本信息获取函数
 * 
 * @return 数字地球基本信息，包括名称、版本号
 */
function getInfo() {
	if (hasEarthObj()) {
		return earthObj.getBaseOption().getInfo();
	}
}
/**
 * 获取当前视点信息，包括经度、纬度、海拔高度
 * 
 * @return 视点信息字符串，格式为："纬度,经度,高度,视域倾斜角,地球旋转角度"
 */
function getViewPoint() {
	if (hasEarthObj()) {
		return earthObj.getBaseOption().getViewPoint();
	}
}

