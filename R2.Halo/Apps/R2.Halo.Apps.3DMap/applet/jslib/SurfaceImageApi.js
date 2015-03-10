/**   
 * @fileOverview 地表贴图接口 
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7
 */

/** 
 * @version 1.7
 * 根据图层和图片ID删除
 * @param layerName
 * @param id (optional)
 */
function removeSurfaceImageByLayerAndId(id, layerName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceImageOption().removeSurfaceImage(id, layerName);
	}
}

/**
 * 在地表添加指定参数的贴图
 * @version 1.6, 1.7
 * @param imgID  
 *            地表图片编号
 * @param imgLayer 
 *            地表贴图图层名称
 * @param imagePath
 *            要贴到地表的图片的绝对路径，可以为URL(以http开头的绝对URL路径)，也可以为本地图片绝对路径
 * @param imageName
 *            该贴图的名称
 * @param imageOpacity
 *            该贴图的透明度，范围0-1的浮点数
 * @param positions
 *            图片四个角在地表的经纬度坐标字符串，格式为"lat,lon|lat,lon|...",左下角为起点，逆时针方向
 * @param minVisibleDist
 *            图片最大可见视点距离
 * @param maxVisibleDist
 *            图片最小可见视点距离
 * @param locPitch
 *            对图片进行定位时的视点倾角
 * @param locHeading
 *            对图片进行定位时的视点朝向
 * @param locAlt
 *            对图片进行定位时的视点高度
 * @return 添加成功后，返回图片信息xml字符串，包括图片名称、路径、透明度等信息，格式如下：
 */
function addSurfaceImage(imagePath, imageName, imageOpacity, positions, minVisibleDist, maxVisibleDist, locPitch, locHeading, locAlt, id, layerName) {
	if (hasEarthObj()) {
		return earthObj.getSurfaceImageOption().addSurfaceImage(id, layerName, imagePath, imageName, imageOpacity * 1, positions, minVisibleDist * 1,
				maxVisibleDist * 1, locPitch * 1, locHeading * 1, locAlt * 1);
	}

}

/**
 * @version 1.6
 * 				通过给定的贴图xml信息字符串删除已存在的地表贴图  (旧接口，不建议使用，只对图层为空时有效)
 * 
 * @param xmlInfo
 *           	要删除的地表贴图信息
 */
function removeSurfaceImage(xmlInfo) {
	if (hasEarthObj()) {
		earthObj.getSurfaceImageOption().removeSurfaceImage(xmlInfo);
	}
}
/**
 * @version 1.6
 * 				移除所有已存在的地表贴图  (旧接口，不建议使用，只删除默认图层即layerName为空的图层)
 */
function removeAllSurfaceImage() {
	if (hasEarthObj()) {
		earthObj.getSurfaceImageOption().removeAllSurfaceImage();
	}
}

