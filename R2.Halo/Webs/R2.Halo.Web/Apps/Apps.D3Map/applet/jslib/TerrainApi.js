
/**   
 * @fileOverview 剖面分析接口 
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.6 
 */
/**
 * 调用此函数后开始在数字地球表面点击后移动就开始绘制剖面地形图，再次点击鼠标左键结束本次绘制
 */
function drawTerrainProfileByMouse() {
	if (hasEarthObj()) {
		earthObj.getTerrainOption().drawTerrainProfile();
	}
}
/**
 * 根据指定的参数绘制地形剖面地形图
 * 
 * @param followType
 *            为"cursor"时为跟随光标，为"view"或其他值时为跟随视点
 * @param graphSize
 *            绘制图大小，分为Small, Medium, Large三种
 * @param profileLength
 *            绘制范围，0-2，超出范围自动设置为1
 */
function drawTerrainProfile(followType, graphSize, profileLength) {
	if (hasEarthObj()) {
		earthObj.getTerrainOption().drawTerrainProfile(followType, graphSize, profileLength * 1);
	}
}
/**
 * 根据指定的参数绘制自定义范围地形剖面地形图
 * 
 * @param graphSize
 *            绘制图大小，分为Small, Medium, Large三种
 * @param startlat
 *            自定义范围起始纬度
 * @param startlon
 *            自定义范围起始经度
 * @param endlat
 *            自定义范围结束纬度
 * @param endlon
 *            自定义范围结束经度
 */
function drawTerrainProfileByPoint(graphSize, startlat, startlon, endlat, endlon) {
	if (hasEarthObj()) {
		earthObj.getTerrainOption().drawTerrainProfile(graphSize, startlat * 1, startlon * 1, endlat * 1, endlon * 1);
	}
}
/**
 * 根据指定的参数绘制自定义范围地形剖面地形图
 * 
 * @param followType
 *            为"1"时为跟随光标，为"1"或其他值时为跟随视点//说明有问题
 * @param graphSize
 *            绘制图大小，分为Small, Medium, Large三种
 * @param profileLength
 *            绘制范围，0-2，超出范围自动设置为1
 * @param startlat
 *            自定义范围起始纬度
 * @param startlon
 *            自定义范围起始经度
 * @param endlat
 *            自定义范围结束纬度
 * @param endlon
 *            自定义范围结束经度
 */
function drawTerrainProfileFull(followType, graphSize, profileLength, startlat, startlon, endlat, endlon) {
	if (hasEarthObj()) {
		earthObj.getTerrainOption().drawTerrainProfile(followType * 1, graphSize, profileLength * 1, startlat * 1, startlon * 1, endlat * 1, endlon * 1);
	}
}
/**
 * 关闭地形剖面地形图绘制
 */
function shutdownTerrainProfile() {
	if (hasEarthObj()) {
		earthObj.getTerrainOption().shutdownTerrainProfile();
	}
}


