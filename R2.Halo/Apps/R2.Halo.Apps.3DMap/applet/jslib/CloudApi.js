/**   
 * @fileOverview 地球云图操作接口   
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7 
 */
/**
 * 切换云层图片
 *  
 * @param oldImgUrl
 *            旧的云层图片的完整路径
 * @param newImgUrl
 *            要展现的新的云层图片的完整路径
 * @param layerName 
 *    		  图层名
 * @version 1.6,1.7 
 */
function changeCloudTextureByTextureUrlName(oldImgUrl, newImgUrl, layerName) {
	if (hasEarthObj()) {
		layerName = layerName == undefined ? "" : layerName;
		earthObj.getCloudOption().changeCloudTextureByTextureUrlName(oldImgUrl, newImgUrl, layerName);
	}
}

/**
 * 添加新的云层, 多次添加相同路径的云层只有第一次有效 
 * @param minLat  云层范围的最小纬度值
 * @param minLon  云层范围的最小经度值
 * @param maxLat  云层范围的最大纬度值
 * @param maxLon  云层范围的最大经度值
 * @param elevation  云层离地表的高度 如果为负数则取默认高度
 * @param imgUrl  云层图片的完整路径 如果为null或为空则用默认图片
 * @param id   云层id
 * @param layerName  云层图层名
 * @version 1.6,1.7 
 * @return
 */
function addCloudLayer(minLat, minLon, maxLat, maxLon, elevation, imgUrl, id, layerName) {
	if (hasEarthObj()) {
		earthObj.getCloudOption().addCloudLayer(id, layerName, minLat * 1, minLon * 1, maxLat * 1, maxLon * 1, elevation * 1, imgUrl);
	}
}

/**
 * 设置云层是否可见
 * 
 * @param isActive
 *            	为true时表示可见，为false时表示不可见
 * @param layerName  
 * 				云层图层名
 * @version 1.6,1.7 
 */
function setCloudLayerAction(isActive, layerName) {
	if (hasEarthObj()) {
		earthObj.getCloudOption().setCloudLayerAction(layerName, isActive);
	}
}

/**
 * @version 1.7
 * 根据云图编号图层名称移除图层
 * @param {Object} id 云图编号
 * @param {Object} layerName  图层名称
 */
function removeCloudLayer(id, layerName) {
	if (hasEarthObj()) {
		earthObj.getCloudOption().removeCloudFromLayer(id, layerName);
	}
}
