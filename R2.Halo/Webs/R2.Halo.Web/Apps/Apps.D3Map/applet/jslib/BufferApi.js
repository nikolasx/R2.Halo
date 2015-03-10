
/**   
 * @fileOverview Buffer分析接口   
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.6 
 */
/**
 * 根据调用绘线接口所绘制的中心线进行线缓冲分析
 * 
 * @param radius
 *            缓冲半径单位米
 * @param times
 *            动画次数
 * @param colorCode
 *            缓冲效果颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */
function analyseLineBuffer(radius, times, colorCode) {
	if (hasEarthObj()) {
		earthObj.getBufferOption().analyseLineBuffer(radius * 1, times * 1, colorCode);
	}
}
/**
 * 线缓冲分析
 * 
 * @param points
 *            线坐标集合,格式为"latitude,longitude|latitude,longitude|..."
 * @param radius
 *            缓冲半径单位米
 * @param times
 *            缓冲次数
 * @param colorCode
 *            缓冲效果颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */
function analyseLineBufferByPoints(points, radius, times, colorCode) {
	if (hasEarthObj()) {
		earthObj.getBufferOption().analyseLineBuffer(points, radius * 1, times * 1, colorCode);
	}
}
/**
 * 清除线缓冲效果
 */
function cleanBuffeLine() {
	if (hasEarthObj()) {
		earthObj.getBufferOption().cleanBuffeLine();
	}
}
/**
 * 根据指定的中心点和参数进行点缓冲分析
 * 
 * @param lat
 *            中心点纬度
 * @param lon
 *            中心点经度
 * @param radius
 *            缓冲半径
 * @param times
 *            动画次数
 * @param colorCode
 *            缓冲效果颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */
function analysePointBuffer(lat, lon, radius, times, colorCode) {
	if (hasEarthObj()) {
		earthObj.getBufferOption().analysePointBuffer(lat * 1, lon * 1, radius * 1, times * 1, colorCode);
	}
}
/**
 * 清除点缓冲分析效果
 */
function cleanBuffePoint() {
	if (hasEarthObj()) {
		earthObj.getBufferOption().cleanBuffePoint();
	}
}

