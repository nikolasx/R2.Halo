
/**   
 * @fileOverview 特殊分析接口
 * @author zqq  
 * @version 1.7 
 */

/**
 * 离散点等值线分析
 * @version 1.7
 * 
 * @param id
 * 			分析结果对象的id
 * @param dataStr
 * 			离散点字符串      格式：Lat1,Lon1,Value1|Lat2,Lon2,Value2|Lat3,Lon3,Value3|...
 * @param colorStr
 * 			颜色对应表         格式：（最小值1,最大值1;颜色1|最小值2,最大值2;颜色2|最小值3,最大值3;颜色3|...）
 * @param rangeStr       	
 * 			分析的范围     		格式：Lat1,Lon1|Lat2,Lon2|Lat3,Lon3|...（为null或为空时，范围根据离散点确定，否则以此为界）。
 * @param row
 * 			网格行数
 * @param col
 * 			网格列数
 * @param p
 * 			反距离加权系数
 * @param radius
 * 			搜索半径
 * @param opacity
 * 			透明度
 * @param isAddLegend
 * 			是否添加图例
 * @param legendX
 * 			图例的屏幕坐标X(相对于左上角)
 * @param legendY
 * 			图例的屏幕坐标Y(相对于左上角)
 * @param legendWidth
 * 			图例宽度
 * @param legendHeight
 * 			图例高度
 * @param legendTitle
 * 			图例标题
 * @param callBackFun
 * 			回调函数
 */

function contourAnalysis(id, dataStr, colorStr, rangeStr, row, col, p, radius, opacity, isAddLegend, legendX, legendY, legendWidth, legendHeight, legendTitle, callBackFun) {
	if (hasEarthObj()) {
		earthObj.getSpatialAnalyseOption().contourAnalysis(id, dataStr, colorStr, rangeStr, row*1, col*1, 
			p*1, radius*1, opacity*1, isAddLegend, legendX*1, legendY*1, legendWidth*1, legendHeight*1, legendTitle, callBackFun);
	}
}

/**
 * 根据id删除相应的分析结果（id为空时删除所有分析结果）
 * @version 1.7
 * 
 * @param id  
 * 		（ 当id为空或者null时，删除所有分析结果）
 */
function clearAnalyseSurface(id) {
	if (hasEarthObj()) {
		earthObj.getSpatialAnalyseOption().clearAnalyseSurface(id);
	}
}




