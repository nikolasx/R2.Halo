
/**   
 * @fileOverview 统计图绘制接口   
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.6 
 */
/**
 * 根据参数添加圆柱体
 * 
 * @param latitude
 *            中心位置纬度
 * @param longitude
 *            中心位置纬度
 * @param radius
 *            柱子的半径(米)
 * @param height
 *            柱子的高(米)
 * @param colorCode
 *            柱子颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @return 添加结果
 */
function addCylinder(latitude, longitude, radius, height, colorCode) {
	if (hasEarthObj()) {
		return earthObj.getChartOption().addCylinder(latitude * 1, longitude * 1, radius * 1, height * 1, colorCode);
	}
}
/**
 * 根据参数添加饼图
 * 
 * @param latitude
 *            中心位置纬度
 * @param longitude
 *            中心位置纬度
 * @param radius
 *            柱子的半径(米)
 * @param height
 *            柱子的高(米)
 * @param statisticData
 *            统计数据(百分比,colorCode|百分比colorCode|.....)
 * @return 添加结果
 */
function addPieChart(latitude, longitude, radius, height, statisticData) {
	if (hasEarthObj()) {
		return earthObj.getChartOption().addPieChart(latitude * 1, longitude * 1, radius * 1, height * 1, statisticData);
	}
}
/**
 * 根据参数添加柱子
 * 
 * @param latitude
 *            中心位置纬度
 * @param longitude
 *            中心位置纬度
 * @param radius
 *            柱子的边长一半(米)
 * @param height
 *            柱子的高(米)
 * @param colorCode
 *            柱子颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @return 添加结果
 */
function addCuboid(latitude, longitude, radius, height, colorCode) {
	if (hasEarthObj()) {
		return earthObj.getChartOption().addCuboid(latitude * 1, longitude * 1, radius * 1, height * 1, colorCode);
	}
}
/**
 * 清除柱状图图层
 * 
 * @param flag
 *            flag为1时清除图层上所有的柱状体，否则不仅删除除柱状体而且删除相关图层
 */
function cleanCuboidChartLayer(flag) {
	if (hasEarthObj()) {
		earthObj.getChartOption().cleanCuboidChartLayer(flag * 1);
	}
}
/**
 * 清除圆柱体图层
 * 
 * @param flag
 *            flag为1时清除图层上所有的柱状体，否则不仅删除除柱状体而且删除相关图层
 */
function cleanCylinderChartLayer(flag) {
	if (hasEarthObj()) {
		earthObj.getChartOption().cleanCylinderChartLayer(flag * 1);
	}
}
/**
 * 清除饼图图层
 * 
 * @param flag
 *            flag为1时清除图层上所有的柱状体，否则不仅删除除柱状体而且删除相关图层
 */
function cleanPieLaChartLayer(flag) {
	if (hasEarthObj()) {
		earthObj.getChartOption().cleanPieLaChartLayer(flag * 1);
	}
}

