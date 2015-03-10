/**   
 * @fileOverview 模型操作接口   
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7 
 */

/**
 * addSimpleModel   在当前视点添加模型
 * @param  name  模型名称
 * @param  path  模型文件的路径(暂时只支持3ds文件)
 * @param  layerName  模型图层的名称
 * @param  callbackFunc  回调函数
 */
function addModelInView(name, path, layerName, callbackFunc) {
	if (hasEarthObj()) {
		earthObj.getMaxOption().addMax(name, path, layerName, callbackFunc);
	}
}

/**
 * addModel   在指定位置添加模型
 * @param name  模型名称
 * @param path  模型文件的路径(暂时只支持3ds文件)
 * @param lon   模型显示的经度位置
 * @param lat   模型显示的纬度位置
 * @param layerName  模型所在的图层名称
 * @param callback   模型加载后的回调函数
 * @return
 */
function addModel(name, path, lon, lat, layerName, callback) {
	if (hasEarthObj()) {
		earthObj.getMaxOption().addMax(name, path, layerName, parseFloat(lat), parseFloat(lon), callback);
	}
}

/**
 * setModelVisible  设置模型是否可见
 * @param modelName  模型名称
 * @param layerName  模型所在的图层
 * @param flag  可见性标示：true 可见， false 不可见
 * @param callback  设置可见性后的回调函数
 * @return
 */
function setModelVisible(modelName, layerName, flag, callback) {
	if (hasEarthObj()) {
		earthObj.getMaxOption().setModelVisible(modelName, layerName, flag, callback);
	}
}

/**
 * removeModelFromLayer  从模型图层中移除指定的模型
 * @param modelName   要删除的模型名称
 * @param layerName   模型所在的图层名
 * @param callbackFunc  执行删除后的回调
 * @return
 */
function removeModelFromLayer(modelName, layerName, callbackFunc) {
	if (hasEarthObj()) {
		earthObj.getMaxOption().removeModelFromLayer(modelName, layerName, callbackFunc);
	}
}

/**
 * setMaxPostion  根据模型名称调整模型的位置
 * @param name    模型名称
 * @param lat     模型纬度
 * @param lon     模型经度
 * @param ele     模型高度
 * @param heading 模型朝向
 * @param x       模型在x轴上的缩放比例
 * @param y       模型在y轴上的缩放比例
 * @param z       模型在z轴上的缩放比例
 * @param layerName 模型所在的图层名称
 * @return
 */
function setMaxPostion(name, lat, lon, ele, heading, x, y, z, layerName) {
	if (hasEarthObj()) {
		earthObj.getMaxOption().setMaxPostion(name, parseFloat(lat), parseFloat(lon), parseFloat(ele), parseFloat(heading), parseFloat(x), parseFloat(y), parseFloat(z), layerName);
	}
}

/**
 * 添加模型可视化信息
 * @version 1.7
 * 
 * @param id  
 * 		模型信息id
 * @param posStr1  
 * 		第一个点的信息         格式：Lat,Lon,Ele
 * @param posStr2  
 * 		第二个点的信息         格式：Lat,Lon,Ele
 * @param type  
 * 		类型（纵向：0      横向：1）
 * @param text  
 * 		信息内容
 * @param direction  
 * 		当类型为纵向时，信息内容面对的方向 (0-360)
 * @param lineColor  
 * 		线的颜色
 * @param lineWidth  
 * 		线的宽度
 * @param labelColor  
 * 		信息颜色
 * @param isHasLabelBackGround  
 * 		是否需要信息背景板
  * @param labelBackGroundColor  
 * 		信息背景板的颜色
 */
function addMaxInfo(id, posStr1, posStr2, type, text, direction, lineColor, lineWidth, 
			labelColor, isHasLabelBackGround, labelBackGroundColor) {
	if (hasEarthObj()) {
		earthObj.getMaxOption().addMaxInfo(id, posStr1, posStr2, type*1, text, direction*1, lineColor, lineWidth*1, 
			labelColor, isHasLabelBackGround, labelBackGroundColor);
	}
}

/**
 * 根据ID删除模型信息
 * @version 1.7
 * 
 * @param id
 * 		模型信息ID
 * @return
 */
function removeMaxInfo(id) {
	if (hasEarthObj()) {
		earthObj.getMaxOption().removeMaxInfo(id);
	}
}