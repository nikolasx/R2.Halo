
/**   
 * @fileOverview 三维立体图形接口 
 * @author zqq  
 * @version 1.7 
 */

/**
 * 添加光照区域
 * 
 * @param id  
 * 		 对象id
 * @param posStr  
 * 		光源位置         格式：Lat,Lon,Height(距离地面的高度)
 * @param radius 
 * 		光照半径
 * @param angle1  
 * 		光源朝向与海平面的夹角
 * @param angle2  
 * 		光源朝向与北方的夹角
 * @param angle3  
 * 		光源光照范围的上下夹角
 * @param angle4  
 * 		光源光照范围的左右夹角
 * @param color  
 * 		光照颜色
 * @param outLineColor  
 * 		外边框的颜色
 * @param outLineWidth  
 * 		外边框线的宽度
 * @param lineStippleFactor  
 * 		外边框线的虚线因子
 * @param opacity  
 * 		透明度
 * @param layerName  
 * 		图层名
 */
function addLightPolygon(id, posStr, radius, angle1, angle2, angle3, angle4, color, outLineColor, outLineWidth, lineStippleFactor, opacity, layerName) {
	if (hasEarthObj()) {
		earthObj.getSpaceShapeOption().addLightPolygon(id, posStr, radius*1, angle1*1, angle2*1, angle3*1, angle4*1, color, 
			outLineColor, outLineWidth*1, lineStippleFactor*1, opacity*1, layerName);
	}
}


/**
 * 根据id 和图层名称删除相应的光照区域
 * @version 1.7
 * @param id  （当id为空或者NULL，删除layerName上所有的图形）
 * @param layerName  图层名
 */
function deleteLightPolygon(id, layerName) {
	if (hasEarthObj()) {
		earthObj.getSpaceShapeOption().deleteLightPolygon(id, layerName);
	}
}




