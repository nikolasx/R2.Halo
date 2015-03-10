
/**   
 * @fileOverview 沈阳军区项目接口   
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.6 
 */
/**
 * 对指定区域和高度变化范围模拟水面上升效果
 * 
 * @param points
 *            指定范围边界坐标
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
function showWaterFlood(points, startWaterLevel, endWaterLevel, period, times, VisibleDist, colorCode, opicity) {
	if (hasEarthObj()) {
		earthObj.getSyApiOption().showWaterFlood(points, startWaterLevel * 1, endWaterLevel * 1, period * 1, times * 1, VisibleDist * 1, colorCode, opicity * 1);
	}
}
/**
 * 删除所有绘制的水面区域
 */
function removeWaterArea() {
	if (hasEarthObj()) {
		earthObj.getSyApiOption().removeWaterArea();
	}
}
/**
 * 通视分析接口
 */
function drawRadarLine() {
	if (hasEarthObj()) {
		earthObj.getSyApiOption().drawRadarLine();
	}
}
/**
 * 根据指定的设置进行雷达扫描模拟
 * 
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
		earthObj.getSyApiOption().radarScan(lat * 1, lon * 1, modelHeight * 1, radius * 1, angle * 1, period * 1, times * 1, sampleInterval * 1, colorCode);
	}
}
/**
 * 雷达扫描暂停
 */
function pauseRadarScan() {
	if (hasEarthObj()) {
		earthObj.getSyApiOption().pauseRadarScan();
	}
}
/**
 * 从雷达扫描暂停过程中恢复过来
 */
function resumeRadarScan() {
	if (hasEarthObj()) {
		earthObj.getSyApiOption().resumeRadarScan();
	}
}
/**
 * 清除雷达扫描效果
 */
function clearRadarScan() {
	if (hasEarthObj()) {
		earthObj.getSyApiOption().clearRadarScan();
	}
}

