/**
 * 该脚本接口包含有关于屏幕图层贴图的相关接口，可用于图例等功能
 */

    /**
	 * 添加图例层
	 * 
	 * @param id
	 * @param layerName
	 *            图层名称
	 * @param legendFilePath
	 *            图 例路径
	 * @param opacity
	 *            透明度
	 * @param screenOffsetX
	 *            位置X坐标 （原点为左下角）
	 * @param screenOffsetY
	 *            位置Y坐标 （原点为左下角）
	 * @param scale
	 *            图标显示大小
	 * @param imgOffsetX
	 *            图片偏移量x 单位为图片的倍数
	 * @param imgOffsetY
	 *            图片偏移量y 单位为图片的倍数
	 * @param isShowCloseIcon
	 *            是否显示关闭按钮
	 * @param closeIconPath 关闭图片的按钮
	 * @param closeIconOffsetX   关闭图片横轴方向偏移量，单位：像素
	 * @param closeIconOffsetY   关闭图片数轴方向偏移量 ，单位：像素
	 * @param index 贴图的索引 （0-1000）
	 */
	function addLegend(id, layerName,
			legendFilePath, opacity, screenOffsetX,	screenOffsetY, scale,imgOffsetX, imgOffsetY, 
			isShowCloseIcon, closeIconPath, closeIconOffsetX, closeIconOffsetY, index){
		if (hasEarthObj()) {
			earthObj.getLegendLayerOption().addLegend(id, layerName,
			legendFilePath, opacity, screenOffsetX,	screenOffsetY, scale,imgOffsetX, imgOffsetY, 
			isShowCloseIcon, closeIconPath, closeIconOffsetX, closeIconOffsetY, index);
		}
	}
	
	/**
	 * 根据图层名字及ID删除图标
	 * 
	 * @param iconLayerName
	 */
	function removeLegendLayerById(layerName,id){
		if (hasEarthObj()) {
			earthObj.getLegendLayerOption().removeLegendLayerById(layerName,  id);
		}
	}
	
	
	/**
	 * 根据图层名删除图例
	 */
	function removerAllLegendLayer(layerName) {
		if (hasEarthObj()) {
			earthObj.getLegendLayerOption().removerAllLegendLayer(layerName);
		}
	}
