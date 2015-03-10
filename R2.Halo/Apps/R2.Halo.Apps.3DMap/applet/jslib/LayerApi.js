/**   
 * @fileOverview 图层操作接口   
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7
 */

/**
 * 添加自定义图层（新增最全的自定义图层接口）
 * @version 1.7
 * @param service
 *            数据请求站点地址 如http://127.0.0.1:8087/VEServer/
 * @param dataType
 *            数据读取类型，长方形裁剪(0)，正方形裁剪(1)，失量地图文档(2)，图层(3)，旧的256HDF(4)，天地图512(10)
 *            ，天地图256 (11)
 * @param aliasName
 *            数据说明，用于客户端读取显示
 * @param layerName
 *            数据文件名，也是图层名，用于控制图层显示与否
 * @param version
 *            数据版本号
 * @param dataStartLevel
 *            数据裁剪开始级别
 * @param visibleStartLevel
 *            数据在地球上开始显示级别
 * @param visibleEndLevel
 *            数据在地球上显示终止级别
 * @param bigPicSize
 *            数据裁剪优化级别（一般对应1024，中等对应2048，高级对应4096）(256瓦片可以不用填)
 * @param isVisible
 *            该图层是否可见
 * @param drawType
 *            图层数据渲染格式，dds或gif两种设置 （dds效率较高）
 * @param opacity
 *            图层数据透明度，0—1之间
 * @param tileSize
 *            图片尺寸
 * @param delta
 *            瓦片划分跨度
 * @param strSector
 *            数据显示范围，对于瓦片数据，设置裁剪时计算出的裁剪范围
 * @param requestPage
 *            数据读取页面，可以直接带参数，如XX.jsp?a=…
 */
function addCustomLayerFull(service, dataType, aliasName, layerName, version, dataStartLevel, visibleStartLevel, visibleEndLevel, bigPicSize,
		isVisible, drawType, opacity, tileSize, delta, strSector, requestPage) {
	if (hasEarthObj()) {
		earthObj.getLayerOption().addCustomLayer(service, 1 * dataType, aliasName, layerName, 1 * version, 1 * dataStartLevel, 1 * visibleStartLevel,
				1 * visibleEndLevel, 1 * bigPicSize, isVisible, drawType, 1.0 * opacity, 1 * tileSize, 1.0 * delta, strSector, requestPage);
	}
}

//////////////////////////////旧接口///////////////////////////////

/**
 * 自定义图层添加（适用于瓦片数据）
 * 
 * @param service
 *            数据请求站点地址
 * @param dataType
 *            数据读取类型，0为读取长方形裁剪瓦片数据，1为读取正方形瓦片数据
 * @param aliasName
 *            数据说明，用于客户端读取显示
 * @param layerName
 *            数据文件名，也是图层名，用于控制图层显示与否，如果该图层已有则删除原图层
 * @param version
 *            数据版本号，从1开始的正整数，生成LayerName +
 *            Version的文件缓存名，设置后，会删除所有小于该版本号的的数据缓存重新下载，当数据发生变化时，可以考虑改变该参数设置。
 * @param dataStartLevel
 *            数据裁剪开始级别
 * @param visibleStartLevel
 *            数据在地球上开始显示级别
 * @param visibleEndLevel
 *            数据在地球上显示终止级别
 * @param bigPicSize
 *            数据裁剪优化级别（一般对应1024，中等对应2048，高级对应4096）
 * @param isVisible
 *            地球初始化时该图层是否可见
 * @param drawType
 *            图层数据渲染格式，dds或gif两种设置
 * @param opacity
 *            图层数据透明度，0-1之间
 * @param strSector
 *            数据显示范围，对于瓦片数据，设置裁剪时计算出的裁剪范围
 * @param requestPage
 *            数据读取页面，可以直接带参数，如XX.jsp?a=…
 */
function addHDFCustomLayer(service, dataType, aliasName, layerName, version, dataStartLevel, visibleStartLevel, visibleEndLevel, bigPicSize,
		isVisible, drawType, opacity, strSector, requestPage) {
	if (hasEarthObj()) {
		earthObj.getLayerOption().addCustomLayer(service, dataType * 1, aliasName, layerName, version * 1, dataStartLevel * 1, visibleStartLevel * 1,
				visibleEndLevel * 1, bigPicSize * 1, isVisible, drawType, opacity * 1, strSector, requestPage);
	}
}
/**
 * 自定义图层添加（适用于非瓦片数据）
 * 
 * @param service
 *            数据请求站点地址
 * @param dataType
 *            数据读取类型，2为直接读取map文档，3为直接读取msi影像，4为直接读取mpj工程数据，5为直接读取图层数据
 * @param aliasName
 *            数据说明，用于客户端读取显示
 * @param layerName
 *            数据文件名，也是图层名，用于控制图层显示与否，如果该图层已有则删除原图层
 * @param version
 *            数据版本号，从1开始的正整数，生成LayerName +
 *            Version的文件缓存名，设置后，会删除所有小于该版本号的的数据缓存重新下载，当数据发生变化时，可以考虑改变该参数设置。
 * @param visibleStartLevel
 *            数据在地球上开始显示级别
 * @param visibleEndLevel
 *            数据在地球上显示终止级别
 * @param isVisible
 *            地球初始化时该图层是否可见
 * @param drawType
 *            图层数据渲染格式，dds或gif两种设置
 * @param opacity
 *            图层数据透明度，0-1之间
 * @param strSector
 *            数据显示范围，直接读取的数据的实际范围
 * @param requestPage
 *            数据读取页面，可以直接带参数，如XX.jsp?a=…
 */
function addCustomLayer(service, dataType, aliasName, layerName, version, visibleStartLevel, visibleEndLevel, isVisible, drawType, opacity,
		strSector, requestPage) {
	if (hasEarthObj()) {
		earthObj.getLayerOption().addCustomLayer(service, dataType * 1, aliasName, layerName, version * 1, visibleStartLevel * 1,
				visibleEndLevel * 1, isVisible, drawType, opacity * 1, strSector, requestPage);
	}
}

/**
 * 根据图层名删除图层
 * 
 * @param layerName
 *            图层名
 * @return true或false
 */
function removeLayerByName(layerName) {
	if (hasEarthObj()) {
		return earthObj.getLayerOption().removeLayerByName(layerName);
	}
}
/**
 * 设置图层透明度
 * 
 * @param layerName
 *            图层名
 * @param opacity
 *            图层透明度
 */
function setLayerOpacityByName(layerName, opacity) {
	if (hasEarthObj()) {
		earthObj.getLayerOption().setLayerOpacityByName(layerName, opacity * 1);
	}
}
/**
 * 根据指定图层名设置图层是否可见
 * 
 * @param layerName
 *            图层全名
 * @param isActive
 *            可见标识，true表示可见，false表示不可见
 */
function setLayerAction(layerName, isActive) {
	if (hasEarthObj()) {
		earthObj.getLayerOption().setLayerAction(layerName, isActive);
	}
}
/**
 * 通过自定义图层名称删除自定义图层数据缓存（清除内存中缓存）
 * 
 * @param layerName
 *            图层名
 * @return 成功返回true 否则为false
 */
function updateCustomLayerCacheByName(layerName) {
	if (hasEarthObj()) {
		return earthObj.getLayerOption().updateCustomLayerCacheByName(layerName);
	}
}

/**
 * 删除指定图层缓存(删除客户端缓存)
 * @param layerName
 * @return 成功返回true 否则为false
 */
function deleteCustomLayerCacheByName(layerName){
	if (hasEarthObj()) {
		return earthObj.getLayerOption().deleteCustomLayerCacheByName(layerName);
	}
}
