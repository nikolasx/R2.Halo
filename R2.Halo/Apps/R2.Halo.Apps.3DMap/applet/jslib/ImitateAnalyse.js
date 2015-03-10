
/**   
 * @fileOverview 各类模拟分析接口 
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7 
 */

/**
 * 对指定区域和高度变化范围模拟水面上升效果
 * @version 1.7
 * @param id
 *            洪水ID 
 * @param points
 *            指定范围边界坐标         latitude,longitude|latitude,longitude|...
 * @param startWaterLevel
 *            最低水位
 * @param endWaterLevel
 *            最高水位
 * @param period
 *            模拟的所用时间
 * @param interval
 *            动画的时间间隔
 * @param opacity
 *            区域透明度
 * @param colorCode
 *            绘制区域的颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */


function imitateWaterFlood(id, points, startWaterLevel, endWaterLevel, period, interval, opicity, colorCode) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().imitateWaterFlood(id, points, startWaterLevel*1, endWaterLevel*1, period*1, interval*1, opicity*1, colorCode);
	}
}


/**
 * 根据ID删除水面区域
 * @version 1.7
 * @param id
 * 		洪水ID
 * @return
 */
function removeWaterFlood(id) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().removeWaterFlood(id);
	}
}



	/////////////////////////////////雷达扫描模拟/////////////////////////////
	
/**
 * 创建雷达
 * @version 1.7
 * @param id
 * 		雷达ID
 * @param lat
 * 		雷达所在的纬度
 * @param lon
 * 		雷达所在的经度
 * @param elevation
 * 		雷达发射点距离地面的高度
 * @param sadarIcon
 * 		雷达的图片地址
 * @param radius
 * 		雷达扫描半径
 * @param angle
 * 		雷达扫描角即雷达射线与水平面的夹角（－90，90）,射线水平时0，水平向上为正，向下为负
 * @param period
 * 		雷达扫描所需时间
 * @param interval
 *      雷达扫描动画的时间间隔
 * @param sampleInterval
 * 		雷达射线取样点间隔数，单位米
 * @param colorCode
 * 		雷达射线颜色
 * @return
 */

function imitateRadar(id, lat, lon, elevation, sadarIcon, radius, angle, period, interval, sampleInterval, colorCode) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().imitateRadar(id, lat*1, lon*1, elevation*1, sadarIcon, radius*1, angle*1,
			 period*1, interval*1, sampleInterval*1,  colorCode);
	}
}

/**
 * 雷达扫描暂停
 * @version 1.7
 * @param ID
 * 		雷达ID
 */
function pauseRadar(id) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().pauseRadar(id);
	}
}


/**
 * 从雷达扫描暂停过程中恢复过来
 * @version 1.7
 * 
 * @param ID
 * 		雷达ID
 */
function resumeRadar(id) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().resumeRadar(id);
	}
}


/**
 * 清除雷达扫描效果
 * @version 1.7
 * 
 * @param ID
 * 		雷达ID
 */
function clearRadar(id) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().clearRadar(id);
	}
}

/**
 * 水面波纹模拟
 * @version 1.7
 * @param id
 * 		水面波纹ID
 * @param positions
 * 		水面波纹的边界点   latitude,longitude|latitude,longitude|...
 * @param imageAddresses
 * 		水面波纹图片地址   imagepath1,imagepath2,...
 * @param opacity
 * 		水面波纹透明度
 * @param interval
 * 		水面波纹的波动频率（毫秒）—— 时间间隔
 * @return
 */

function imitateWaterRipple(id, positions, imageAddresses, opacity, interval) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().imitateWaterRipple(id, positions, imageAddresses, opacity*1, interval*1);
	}
}

/**
 * 清除指定水面波纹效果
 * @version 1.7
 * @param ID
 * 		水面波纹ID
 */

function clearWaterRipple(id) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().clearWaterRipple(id);
	}
}


/////////////////////////////////以下为旧接口////////////////////////////////

/**
 * 根据区域坐标点和高度绘制水面
 * @version 1.6 
 * 
 * @param points
 *            区域边界点      latitude,longitude|latitude,longitude|...
 * @param elevation
 *            高程
 * @param colorCode
 *            绘制区域的颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param opacity
 *            区域透明度
 */
function createWaterArea(points, elevation, colorCode, opacity) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().createWaterArea("WaterFooldArea", points, elevation*1, colorCode, opacity*1);
	}
}

/**
 * 对指定区域和高度变化范围模拟水面上升效果
 * @version 1.6
 * @param points
 *            指定范围边界坐标      latitude,longitude|latitude,longitude|...
 * @param startWaterLevel
 *            最低水位
 * @param endWaterLevel
 *            最高水位
 * @param period
 *            时间
 * @param times
 *            动画次数
 * @param VisibleDist
 *            视点可见高度(视点低于这个值区域可见)
 * @param colorCode
 *            绘制区域的颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param opicity
 *            区域透明度
 */

function showWaterFlood(points, startWaterLevel, endWaterLevel, period, times, VisibleDist, colorCode, opacity) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().imitateWaterFlood("WaterFooldArea", points, startWaterLevel*1, endWaterLevel*1, period*1, (period*1)/(times*1), opacity*1, colorCode);
	}
}

/**
 * 删除所有绘制的水面区域
 * 
 * @version 1.6
 * 
 */

function removeAllWaterArea() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().removeAllWaterArea();
	}
}

/**
 * 
 * 根据指定的设置进行雷达扫描模拟
 * @version 1.6
 * @param lat
 *            雷达发射点位置纬度
 * @param lon
 *            雷达发射点位置经度
 * @param modelHeight
 *            雷达发射塔的高度
 * @param radius
 *            雷达扫描半径（单位为米)
 * @param angle
 *            雷达扫射角即雷达射线与水平方向的夹角（-90，90）,射线水平时0，水平向上为正，向下为负
 * @param period
 *            整个模拟时长时间
 * @param times
 *            整个动画次数
 * @param sampleInterval
 *            设置扫描时取点间隔（单位米）
 * @param colorCode
 *            雷达扫描的颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */

function radarScan(lat, lon, modelHeight, radius, angle, period, times, sampleInterval, colorCode) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().imitateRadar("RadarScan", lat*1, lon*1, modelHeight*1, "image/sadar.png", radius*1, angle*1, period*1, (period*1)/(times*1), 
				sampleInterval*1, colorCode);
	}
}

/**
 * 雷达扫描暂停
 * @version 1.6
 */

function pauseRadarScan() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().pauseRadar("RadarScan");
	}
}

/**
 * 从雷达扫描暂停过程中恢复过来
 * @version 1.6
 */

function resumeRadarScan() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().resumeRadar("RadarScan");
	}
}


/**
 * 清除雷达扫描效果
 * @version 1.6
 */

function clearRadarScan() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().clearRadar("RadarScan");
	}
}

	

/**
 * 演示洪峰模拟
 * @version 1.6
 * @param points
 *            河流中心线坐标格式为"latitude,longitude|latitude,longitude|..."
 * @param radius
 *            河流宽度半径(米)
 * @param level
 *            河流水位
 * @param sampleNum
 *            河流每边取样点数
 * @param times
 *            动画次数
 * @param colorCode
 *            雷洪峰推演时的颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */

function showFloodPeak(points, radius, level, sampleNum, times, colorCode) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().showFloodPeak(points, radius*1, level*1,
			sampleNum*1, times*1, colorCode);
	}
}

/**
 * 清除洪峰
 * @version 1.6
 */
function clearFloodPeak() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().clearFloodPeak();
	}
}

/**
 * 根据滑坡范围 以及方向模拟滑坡动画
 * 
 * @param id
 * 		滑坡ID
 * @param points
 * 		滑坡的演示范围边界点   latitude,longitude|latitude,longitude|...
 * @param sLat
 * 		滑坡演示的起点（纬度） 保证在演示范围之内
 * @param sLat
 * 		滑坡演示的起点（经度） 保证在演示范围之内
 * @param sLon
 * 		滑坡演示的终点（纬度） 保证在演示范围之内
 * @param eLat
 * 		滑坡演示的终点（经度） 保证在演示范围之内
 * @param height
 * 		滑坡对象的厚度
 * @param interval
 * 		滑坡的变化频率（毫秒）—— 时间间隔
 * @return
 */

function imitateLandSlide(points, sLat, sLon, eLat, eLon, height) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().imitateLandSlide("LandSlide", points, sLat*1, sLon*1,
			eLat*1, eLon*1, height*1, 300);
	}
}

/**
 * 清除滑坡
 * @version 1.6
 */
function clearLandSlide() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().clearLandSlide("LandSlide");
	}
}

/**
 * 模拟溃坝分析
 * @version 1.6
 * 
 * @param dike
 *            河流的堤防坐标串 点序列，格式为  <code>"latitude,longitude|latitude,longitude|..."</code>
 * @param startLat
 *            溃口起点的纬度
 * @param startLon
 *            溃口起点的经度
 * @param directLat
 *            表示溃口方向一个位置的纬度
 * @param directLon
 *            表示溃口方向一个位置的经度
 * @param denisty
 *            漫延取样密度（米）
 * @param level
 *            水位
 * @param totleLenght
 *            模拟长度（米）由流速乘以查看时间获得
 * @param highColor
 *            深水颜色
 * @param lowColor
 *            浅水颜色
 * @param depth
 *            深水深度
 * @param dynamicTimes
 *            总动画次数
 * @param frequency
 *            动画的时间间隔
 * @param opacity
 *            水流的颜色透明度
 * @param isSendInfo
 *            模拟完成后是否发送信息
 * @param url
 *            接受信息页面的Url
 * @param target
 *            信息放置的iframe名称
 * @param imageURl
 *            无效参数
 */

function showDamBreak(dike, startLat, startLon,
			 directLat, directLon, denisty, level, totleLenght, highColor, lowColor, depth, dynamicTimes, frequency, opacity, isSendInfo,  url,  target, imageURl) {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().showDamBreak(dike, startLat*1, startLon*1,
			directLat*1, directLon*1, denisty*1, level*1, totleLenght*1, highColor, lowColor, depth*1, dynamicTimes*1, frequency*1, opacity*1, isSendInfo, url, target, imageURl);
	}
}
/**
 * 清除溃坝
 * @version 1.6
 * @param
 */

function cleanDamBurst() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().cleanDamBurst();
	}
}

/**
 * 启用通视分析接口
 * @version 1.6
 */
function drawRadarLine() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().drawRadarLine();
	}
}

/**
 * 关闭通视分析接口
 * @version 1.6
 */
function clearRadarLine() {
	if (hasEarthObj()) {
		earthObj.getImitateAnalyseOption().clearRadarLine();
	}
}




