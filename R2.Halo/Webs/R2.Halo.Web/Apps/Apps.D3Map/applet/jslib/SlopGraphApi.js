
/**   
 * @fileOverview 坡度图绘制接口  
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7 
 */
/**
 * @version 1.7
 * 绘制地形坡度图接口
 *      1. 0 度 RGB(255,255,255)
		2. 1 度 RGB(255, 255, 164)
		3. 2-4度 RGB(255, 255, 0)
		4. 5-7度RGB(0, 255, 64)
		5. 8-14度RGB(128, 128, 255)
		6. 15-24度RGB(255, 128, 128)
		7. 25-39度RGB(255, 0, 0)
		8. 40度RGB(128, 0, 255)
 */
function drawSlopeGraph() {
	if (hasEarthObj()) {
		earthObj.getSlopGraphOption().drawSlopeGraph();
	}
}
/**
 * 根据指定图例进行地形坡度图绘制
 * @version 1.7 
 * @param legend
 *            图例字符串，格式为"起始坡度(正整数), 结束坡度(正整数), 颜色编码(RRGGBB)|..."
 */
function drawSlopeGraphByLegend(legend) {
	if (hasEarthObj()) {
		earthObj.getSlopGraphOption().drawSlopeGraph(legend);
	}
}
/**
 * @version 1.7 
 * 保存上一次绘制的地形坡度图
 */
function saveLastSlopeGraph() {
	if (hasEarthObj()) {
		earthObj.getSlopGraphOption().saveLastSlopeGraph();
	}
}
/**
 * @version 1.7 
 * 结束（清除）地表临时图形绘制
 */
function endDrawSlopeGraph() {
	if (hasEarthObj()) {
		earthObj.getSlopGraphOption().endDrawSlopeGraph();
	}
}

/**
 * 获取某点最大坡度信息（以该点为圆心，以radius为半径，找到最低点，在计算坡度）
 * 
 * @version 1.7
 * @author zqq
 * 
 * @param lat
 * 		该点的纬度
 * @param lon
 * 		该点的经度
 * @param radius 
 * 		实际距离半径(米)   建议取值：[0.1-2]
 * @param accuracy  
 * 		精度（取点个数）		建议取值[32-128]
 *   
 */
function getMaxSlopeInformation(lat, lon, radius, accuracy) {
	if (hasEarthObj()){
		return earthObj.getSlopGraphOption().getMaxSlopeInformation(lat*1, lon*1, radius*1, accuracy*1);
	}
}

/**
 * 获取某点指定方向坡度信息
 * 
 * @version 1.7
 * @author zqq
 * 
 * @param lat1
 * 		选择点的纬度
 * @param lon1
 * 		选择点的经度
 * @param lat2
 * 		方位确定点的纬度
 * @param lon2
 * 		方位确定点的经度
 * @param distanceMin 
 * 		最小坡距(米)   建议取值：[0.1-2]
 * @param distanceMax
 * 		最大坡距(米)   建议取值：[10-30]
 */

function getSlopeInformation(lat1, lon1, lat2, lon2, distanceMin, distanceMax) {
	if (hasEarthObj()){
		return earthObj.getSlopGraphOption().getSlopeInformation(lat1*1, lon1*1, lat2*1, lon2*1, distanceMin*1, distanceMax*1);
	}
}


/**
 * 启用坡度分析
 * 
 * @version 1.7
 * @author zqq
 * 
 * @param sloptype
 * 			坡度分析的类型      0为某点的最大坡度分析       1为某点在指定方向的坡度分析
 * @param pointShape
 *          地标形状（支持形状有：circle, square,down_triangle,up_triangle）
 * @param pointSize
 *          地标大小
 * @param pointColor
 *          地标颜色
 * @param pathColor
 *          方位线颜色
 * @param pointAltitude
 *          地标高度
 * @param distanceMin 
 * 			最小坡距(米)   建议取值：[0.1-2]
 * @param distanceMax
 * 			最大坡距(米)   建议取值：[10-30]
 * @param isContinue
 *          是否连续分析
 * @param isClear
 *          是否立即清除
 */
function startupSlopAnalyse(sloptype, pointShape, pointSize, pointColor, pathColor, altitude, distanceMin, distanceMax, isContinue, isClear) {
	if (hasEarthObj()){
		earthObj.getSlopGraphOption().startupSlopAnalyse(sloptype*1, pointShape, pointSize*1, pointColor, pathColor, altitude*1, distanceMin*1, distanceMax*1, isContinue, isClear);
	}
}

/**
 * 关闭坡度分析功能
 * 
 * @version 1.7
 * @author zqq
 */

function shutdownSlopAnalyse() {
	if (hasEarthObj()){
		earthObj.getSlopGraphOption().shutdownSlopAnalyse();
	}
}

