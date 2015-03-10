/**   
 * @fileOverview 地标显示接口  
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7 
 */

/**
 * 
 * @param id
 * @param longitude
 *            经度
 * @param latitude
 *            纬度
 * @param altitude
 *            高度
 * @param showLocationLine
 *            是否显示地标与地表的连线
 * @param iconUrl
 *            图片URL 若图片路径存在中文，则使用encodeURI 进行编码
 * @param iconOffsetX
 *            地标图片相对于地标位置x方向的位移（以地标图片的宽度为单位，1为向右偏移一个地标图片）
 * @param isShowLabel
 *            是否显示label
 * @param label
 *            label
 * @param labelColor
 *            地标字体颜色
 * @param labelOffsetY
 *            label相对地标图片的Y方向偏移比（以地标图片的宽度为单位）
 * @param labelBgColor
 *            地标名称的背景颜色（可以设为空字符串）
 * @param labelBgOpacity
 *            地标名称的背景透明度（会同样作用于边框线）
 * @param labelOutLineColor
 *            地标名称的背景边框颜色（会同样作用于边框线）
 * @param backFun
 *            地标点击时的回调函数
 * @param description
 *            地标的描述信息
 * @param layerName
 *            地标所在的图层名
 */
function addSimpleImgMark(id, longitude, latitude, altitude, showLocationLine,
		iconUrl, iconOffsetX, isShowLabel, label, labelColor, labelOffsetY,
		labelBgColor, labelOutLineColor, backFun, description, layerName) {
	if (hasEarthObj()) {
		earthObj.getMarkOption().addImgMark(id, 1.0 * longitude,
				1.0 * latitude, 1.0 * altitude, showLocationLine, 0, 0,
				iconUrl, 1.0, 1.0 * iconOffsetX, 0, isShowLabel, label, "楷体-BOLD-15",
				"#ffffff", 1.0, 1.0 * labelOffsetY, "#16548e", 0.8,
				"#ffffff", 1.0, 1 * 0, 3, 1, 1, backFun, description,
				layerName, false);
	}
}

/**
 * 点击地名的回调函数
 * @param {Object} placeNameInfo  地名信息（json字符串）
 */
function callbackPlaceNameInfo(placeNameInfo) {
	placeNameInfo = eval(placeNameInfo);
}

/**
 * 
 * @param id
 * @param longitude
 *            经度
 * @param latitude
 *            纬度
 * @param altitude
 *            高度
 * @param showLocationLine
 *            是否显示地标与地表的连线
 * @param minVisibleDist
 *            最小显示高度
 * @param maxVisibleDist
 *            最大显示高度
 * @param iconUrl
 *            图片URL 若图片路径存在中文，则使用encodeURI 进行编码
 * @param iconScale
 *            图片缩放比例
 * @param iconOffsetX
 *            地标图片相对于地标位置x方向的位移（以地标图片的宽度为单位，1为向右偏移一个地标图片）
 * @param iconOffsetY
 *            地标图片相对于地标位置y方向的位移（以地标图片的宽度为单位，1为向上偏移一个地标图片）
 * @param isShowLabel
 *            是否显示label
 * @param label
 *            label
 * @param labelFont
 *            地标的字体
 * @param labelColor
 *            地标字体颜色
 * @param labelOffsetX
 *            label相对地标图片的x方向偏移比（以地标图片的宽度为单位，1为向右偏移一个地标图片）
 * @param labelOffsetY
 *            label相对地标图片的Y方向偏移比
 * @param labelBgColor
 *            地标的背景颜色（可以设为空）
 * @param labelBgOpacity
 *            地标的背景透明度（会同样作用于边框线）
 * @param labelOutLineColor
 *            地标的背景边框颜色（会同样作用于边框线）
 * @param labelOutlineWidth
 *            地标的背景边框宽度
 * @param labelMarginTop
 *            地名离地名边框的顶部距离(像素)
 * @param labelMarginBottom
 *            地名离地名边框的底部距离
 * @param labelMarginLeft
 *            地名离地名边框的左边距离
 * @param labelMarginRight
 *            地名离地名边框的右边距离
 * @param backFun
 *            地标点击时的回调函数
 * @param description
 *            地标的描述信息
 * @param layerName
 *            地标所在的图层名
 */
function addImgMark(id, longitude, latitude, altitude, showLocationLine,
		minVisibleDist, maxVisibleDist, iconUrl, iconScale, iconOffsetX,
		iconOffsetY, isShowLabel, label, labelFont, labelColor, labelOffsetX,
		labelOffsetY, labelBgColor, labelBgOpacity, labelOutLineColor,
		labelOutlineWidth, labelMarginTop, labelMarginBottom, labelMarginLeft,
		labelMarginRight, backFun, description, layerName,isDrawNow) {
	if (hasEarthObj()) {
		isDrawNow = isDrawNow == undefined ? false : isDrawNow;
		
		earthObj.getMarkOption().addImgMark(id, 1.0 * longitude, 1.0 * latitude, 1.0 * altitude,  showLocationLine, 1.0 * minVisibleDist,
				1.0 * maxVisibleDist, iconUrl, 1.0 * iconScale, 1.0 * iconOffsetX, 1.0 * iconOffsetY,  isShowLabel, label, labelFont, labelColor,
				 1.0 * labelOffsetX, 1.0 * labelOffsetY, labelBgColor, 1.0 * labelBgOpacity,
				labelOutLineColor, 1.0 * labelOutlineWidth, 1 * labelMarginTop, 1 * labelMarginBottom, 1 * labelMarginLeft,
				1 * labelMarginRight, backFun, description, layerName,   isDrawNow);
		
//		earthObj.getMarkOption().addImgMark(id, 1.0 * longitude,
//				1.0 * latitude, 1.0 * altitude, showLocationLine,
//				1.0 * minVisibleDist, 1.0 * maxVisibleDist, iconUrl,
//				1.0 * iconScale, 1.0 * iconOffsetX, 1.0 * iconOffsetY,
//				isShowLabel, label, labelFont, labelColor, 1.0 * labelOffsetX,
//				1.0 * labelOffsetY, labelBgColor, 1.0 * labelBgOpacity,
//				labelOutLineColor, 1.0 * labelOutlineWidth, 1 * labelMarginTop,
//				1 * labelMarginBottom, 1 * labelMarginLeft,
//				1 * labelMarginRight, backFun, description, layerName,isDrawNow);
	}
}

/**
 * 添加指定形状的地标
 * 
 * @param id
 * @param longitude
 *            经度
 * @param latitude
 *            纬度
 * @param altitude
 *            高度
 * @param showLocationLine
 *            是否显示地标与地表的连线
 * @param shapeType
 *            地标形状（支持形状有：circle, square,down_triangle,up_triangle）
 * @param shapeRadius
 *            地标的尺寸（单位像素，为圆时表半径,其它表示一条边的一半）
 * @param shpaeColor
 *            地标形状颜色
 * @param shapeOutLineWidth
 *            地标形状边框宽度
 * @param shpaeOutlineColor
 *            地标形状边框颜色
 * @param isShowLabel
 *            是否显示label
 * @param label
 *            label
 * @param labelColor
 *            地标字体颜色
 * @param labelBgColor
 *            地标的背景颜色（可以设为空）
 * @param labelOutLineColor
 *            地标的背景边框颜色（会同样作用于边框线）
 * @param backFun
 *            地标点击时的回调函数
 * @param description
 *            地标的描述信息
 * @param layerName
 *            地标所在的图层名
 */
function addSimpleShapeMark(id, longitude, latitude, altitude,
		showLocationLine, shapeType, shapeRadius, shpaeColor,
		shpaeOutlineColor, isShowLabel, label, labelColor, labelBgColor,
		labelOutLineColor, backFun, description, layerName, isDrawNow) {
	if (hasEarthObj()) {
		isDrawNow = isDrawNow == undefined ? true : isDrawNow;
		earthObj.getMarkOption().addShapeMark(id, 1.0 * longitude,
				1.0 * latitude, 1.0 * altitude, showLocationLine, 0, 0,
				shapeType, 1.0 * shapeRadius, shpaeColor, 1.0,
				shpaeOutlineColor, isShowLabel, label, "", labelColor, 1.0, 0,
				labelBgColor, 0.8, labelOutLineColor, 1.0, 0, 3, 1, 1, backFun,
				description, layerName, isDrawNow)
	}
}

/**
 * 添加指定形状的地标
 * 
 * @param id
 * @param longitude
 *            经度
 * @param latitude
 *            纬度
 * @param altitude
 *            高度
 * @param showLocationLine
 *            是否显示地标与地表的连线
 * @param minVisibleDist
 *            最小显示高度
 * @param maxVisibleDist
 *            最大显示高度
 * @param shapeType
 *            地标形状（支持形状有：circle, square,down_triangle,up_triangle）
 * @param shapeRadius
 *            地标的尺寸（单位像素，为圆时表半径,其它表示一条边的一半）
 * @param shpaeColor
 *            地标形状颜色
 * @param shapeOutLineWidth
 *            地标形状边框宽度
 * @param shpaeOutlineColor
 *            地标形状边框颜色
 * @param isShowLabel
 *            是否显示label
 * @param label
 *            label
 * @param labelFont
 *            地标的字体
 * @param labelColor
 *            地标字体颜色
 * @param labelOffsetX
 *            label相对地标图片的x方向偏移比（以地标图片的宽度为单位，1为向右偏移一个地标图片）
 * @param labelOffsetY
 *            label相对地标图片的Y方向偏移比
 * @param labelBgColor
 *            地标的背景颜色（可以设为空）
 * @param labelBgOpacity
 *            地标的背景透明度（会同样作用于边框线）
 * @param labelOutLineColor
 *            地标的背景边框颜色（会同样作用于边框线）
 * @param labelOutlineWidth
 *            地标的背景边框宽度
 * @param labelMarginTop
 *            地名离地名边框的顶部距离(像素)
 * @param labelMarginBottom
 *            地名离地名边框的底部距离
 * @param labelMarginLeft
 *            地名离地名边框的左边距离
 * @param labelMarginRight
 *            地名离地名边框的右边距离
 * @param backFun
 *            地标点击时的回调函数
 * @param description
 *            地标的描述信息
 * @param layerName
 *            地标所在的图层名
 */
function addShapeMark(id, longitude, latitude, altitude, showLocationLine,
		minVisibleDist, maxVisibleDist, shapeType, shapeRadius, shpaeColor,
		shapeOutLineWidth, shpaeOutlineColor, isShowLabel, label, labelFont,
		labelColor, labelOffsetX, labelOffsetY, labelBgColor, labelBgOpacity,
		labelOutLineColor, labelOutlineWidth, labelMarginTop,
		labelMarginBottom, labelMarginLeft, labelMarginRight, backFun,
		description, layerName, isDrawNow) {
	if (hasEarthObj()) {
		isDrawNow = isDrawNow == undefined ? true : isDrawNow;
		earthObj.getMarkOption().addShapeMark(id, 1.0 * longitude,
				1.0 * latitude, 1.0 * altitude, showLocationLine,
				1.0 * minVisibleDist, 1.0 * maxVisibleDist, shapeType,
				1.0 * shapeRadius, shpaeColor, 1.0 * shapeOutLineWidth,
				shpaeOutlineColor, isShowLabel, label, labelFont, labelColor,
				1.0 * labelOffsetX, 1.0 * labelOffsetY, labelBgColor,
				1.0 * labelBgOpacity, labelOutLineColor,
				1.0 * labelOutlineWidth, 1 * labelMarginTop,
				1 * labelMarginBottom, 1 * labelMarginLeft,
				1 * labelMarginRight, backFun, description, layerName,
				isDrawNow);
	}
}

/**
 * 对指定的地标图层设置是否使用聚合功能
 * 
 * @version 1.7
 * 
 * @param layerName
 *            地标所在的图层名
 * @param clusterMarkImg
 *            聚合地标图片地址   （绝对路径或相对路径，或者http地址）
 * @param iconScale
 *            图片缩放比例(1:表示原来大小；小于1：缩小；大于1：放大)
 * @param iconOffsetX
 *            地标图片相对于地标位置x方向的位移（以地标图片的宽度为单位，1为向右偏移一个地标图片）
 * @param iconOffsetY
 *            地标图片相对于地标位置y方向的位移（以地标图片的宽度为单位，1为向上偏移一个地标图片）
 * @param clusterMax
 *            聚合最大显示数目
 * @param lineColor
 * 			     分散线的颜色
 * @param labelFont
 * 		   	     标注的字体
 * @param lableColor
 * 			     标注字体的颜色
 * @param lableBgColor
 * 			     标注的背景颜色
 * @param lableBgOpacity
 * 			     标注的背景透明度
 * @param lableOutLineColor
 * 			     标注外框线的颜色
 * @param lableOutlineWidth
 * 			     标注外框线的宽度
 * @param labelOffsetX
 *            lable相对地标图片的x方向偏移比（以地标图片的宽度为单位，1为向右偏移一个地标图片）——————原始位置：地标图片的左下角为起点
 * @param lableOffsetY
 *            lable相对地标图片的Y方向偏移比（以地标图片的宽度为单位，1为向上偏移一个地标图片）
 * @return
 */
function startClusterMark(layerName, clusterMarkImg, iconScale, iconOffsetX, iconOffsetY, clusterMax, lineColor, labelFont, lableColor,
			lableBgColor, lableBgOpacity, lableOutLineColor, lableOutlineWidth, labelOffsetX, labelOffsetY){
	if (hasEarthObj()) {
		earthObj.getMarkOption().startClusterMark(layerName, clusterMarkImg, iconScale*1, iconOffsetX*1, iconOffsetY*1, clusterMax*1, lineColor, labelFont, lableColor,
			 lableBgColor, lableBgOpacity*1, lableOutLineColor, lableOutlineWidth*1, labelOffsetX*1, labelOffsetY*1);
	}
}

/**
 * 对指定的地标图层设置取消聚合功能
 * @version 1.7
 * @param layerName
 *            地标所在的图层名 
 */
function cancelClusterMark(layerName){ 
	if (hasEarthObj()) {
		earthObj.getMarkOption().cancelClusterMark(layerName);
	}
}

/**
 * 批量改变地标属性
 * @param ids  地标集合，格式为：id1,id2,id3
 * @param layerName 图层名称
 * @param attributes
 *            属性结构 ，格式为：key:value,key:value
 * @param isEffect
 *            是否立即生效
 */
function changeMarkAttribute(ids, layerName, attributes, isEffect) {
	if (hasEarthObj()) {
		earthObj.getMarkOption().changeMarkAttribute(ids, layerName,
				attributes, isEffect);
	}
}

/**
 * 通过id,layerName控制Mark的显隐状态，当id为空时，控制整个layer的Mark的显隐状态
 * 
 * @param id
 *            地标id
 * @param layerName
 *            地标所在图层名
 * @param visible
 *            是否显示
 */
function setCustomPlaceMarkVisible(id, layerName, visible) {
	if (hasEarthObj()) {
		earthObj.getMarkOption().setCustomPlaceMarkVisible(id, layerName, visible);
	}
}


/////////////////////////////////旧接口////////////////////////////////

/**
 * 添加自定义地标
 * @version 1.6
 * 
 * @param name
 *            地标名称
 * @param description
 *            地标描述信息，当鼠标点击地表图标时，会在地球上显示一个气泡，用来展示地标的详细信息
 *            (html格式字符串，也可以为html连接)
 * @param descImagePath
 *            地标弹出框中的图片
 * @param iconUrl
 *            图标图片名称，如果不是网络图片，则必须为工程WebRoot目录下的完整图片路径(路径存在中文，在使用encodeURI编码)
 * @param latitude
 *            地标纬度
 * @param longitude
 *            地标经度
 * @param altitude
 *            地标高度，设置为0时，地标会根据改点高程值设置高度，贴近地表
 * @param minVisibleDist
 *            地标最低显示高度
 * @param maxVisibleDist
 *            地标最高显示高度
 * @param fontCode
 *            地标名字体编码，格式为"字体-字行-字体大小"，例："宋体-BOLD-14"
 * @param colorObj
 *            标注字体颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param iconSize
 *            地标图标大小，格式为"宽度,高度"，范围2-64
 * @param isShowText
 *            地标名称是否可见,如为false则鼠标放上去才可见
 * @param layerName
 *            图层名
 */
function addCustomPlaceMark(name, description, descImagePath, iconUrl,
		latitude, longitude, altitude, minVisibleDist, maxVisibleDist,
		fontCode, colorObj, iconSize, isShowText, layerName) {
	if (hasEarthObj()) {
		return earthObj.getMarkOption().addCustomPlaceMark(name, description,
				descImagePath, iconUrl, latitude * 1, longitude * 1,
				altitude * 1, minVisibleDist * 1, maxVisibleDist * 1, fontCode,
				colorObj, iconSize, isShowText, layerName);
	}
}

/**
 * 添加自定义地标
 * @version 1.6
 * @param name
 *            地标名称
 * @param description
 *            地标描述信息，当鼠标点击地表图标时，会在地球上显示一个气泡，用来展示地标的详细信息
 *            (html格式字符串，也可以为html连接)
 * @param descImagePath
 *            地标弹出框中的图片
 * @param iconUrl
 *            图标图片名称，如果不是网络图片，则必须为工程WebRoot目录下的完整图片路径
 * @param latitude
 *            地标纬度
 * @param longitude
 *            地标经度
 * @param altitude
 *            地标高度，设置为0时，地标会根据改点高程值设置高度，贴近地表
 * @param minVisibleDist
 *            地标最低显示高度
 * @param maxVisibleDist
 *            地标最高显示高度
 * @param fontCode
 *            地标名字体编码，格式为"字体-字行-字体大小"，例："宋体-BOLD-14"
 * @param colorObj
 *            标注字体颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param iconSize
 *            地标图标大小，格式为"宽度,高度"，范围2-64
 * @param isShowText
 *            地标名称是否可见,如为false则鼠标放上去才可见
 * @param layerName
 *            图层名
 * @param isShowAnnotation
 *            是否显示弹出框
 * @param markID
 *            标注ID
 * @return
 */
function addCustomPlaceMark2(name, description, descImagePath, iconUrl, latitude, longitude, altitude, minVisibleDist, maxVisibleDist, fontCode, colorObj, iconSize, isShowText, layerName, isShowAnnotation, markID) {
	if (hasEarthObj()) {
		return earthObj.getMarkOption().addCustomPlaceMark(name, description, descImagePath, iconUrl, latitude * 1, longitude * 1, altitude * 1, minVisibleDist * 1, maxVisibleDist * 1, fontCode, colorObj, iconSize, isShowText, layerName, isShowAnnotation, markID);
	}
}
/**
 * 添加自定义地标
 * @version 1.6
 * @param name
 *            地标名称
 * @param description
 *            地标描述信息，当鼠标点击地表图标时，会在地球上显示一个气泡，用来展示地标的详细信息
 *            (html格式字符串，也可以为html连接)
 * @param descImagePath
 *            地标弹出框中的图片
 * @param iconUrl
 *            图标图片名称，如果不是网络图片，则必须为工程WebRoot目录下的完整图片路径
 * @param latitude
 *            地标纬度
 * @param longitude
 *            地标经度
 * @param altitude
 *            地标高度，设置为0时，地标会根据改点高程值设置高度，贴近地表
 * @param minVisibleDist
 *            地标最低显示高度
 * @param maxVisibleDist
 *            地标最高显示高度
 * @param fontCode
 *            地标名字体编码，格式为"字体-字行-字体大小"，例："宋体-BOLD-14"
 * @param colorObj
 *            标注字体颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param iconSize
 *            地标图标大小，格式为"宽度,高度"，范围2-64
 * @param isShowText
 *            地标名称是否可见,如为false则鼠标放上去才可见
 * @param layerName
 *            图层名
 * @param isShowAnnotationName
 *            是否在弹出框中显示图标名称
 * @param annotationFont
 *            弹出框字体样式，格式为"字体-字行-字体大小"，例："宋体-BOLD-14"
 * @param annotationBgColor
 *            弹出框背景颜色，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param annotationBdColor
 *            弹出框边框颜色，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param annotationOpacity
 *            弹出框背景透明度，取值0——1之间
 * @param annotationWidth
 *            弹出框宽度（此参数以内容为准，当内容过长时，此参数设置的小些，如2，否则可相应设置的大些）
 * @param annotationHeight
 *            弹出框高度（此参数以内容为准，当内容行数过多时，此参数设置的小些，如2，否则可相应设置的大些）
 * @param descImageOpacity
 *            弹出框里图片的透明度，取值0——1之间（descImagePath有效时此参数才有效）
 * @param descImageScale
 *            弹出框里图片的显示比例（descImagePath有效时此参数才有效）
 * @param descImageLeft
 *            弹出框里图片的左上角X位置（descImagePath有效时此参数才有效）
 * @param descImageTop
 *            弹出框里图片的左上角Y位置（descImagePath有效时此参数才有效）
 * @return
 */
function addCustomPlaceMarkFull(name, description, descImagePath, iconUrl, latitude, longitude, altitude, minVisibleDist, maxVisibleDist, fontCode, colorObj, iconSize, isShowText, layerName, isShowAnnotationName, annotationFont, annotationBgColor, annotationBdColor, annotationOpacity, annotationWidth, annotationHeight, descImageOpacity, descImageScale, descImageLeft, descImageTop) {
	if (hasEarthObj()) {
		return earthObj.getMarkOption().addCustomPlaceMark(name, description, descImagePath, iconUrl, latitude * 1, longitude * 1, altitude * 1, minVisibleDist * 1, maxVisibleDist * 1, fontCode, colorObj, iconSize, isShowText, layerName, isShowAnnotationName, annotationFont, annotationBgColor, annotationBdColor, annotationOpacity * 1, annotationWidth * 1, annotationHeight * 1, descImageOpacity * 1, descImageScale * 1, descImageLeft * 1, descImageTop * 1);
	}
}



/**
 * 删除某个图层所有自定义地标
 * @version 1.6
 * @param layerName
 *            图层名
 */
function removeAllCustomPlaceMark(layerName) {
	if (hasEarthObj()) {
		earthObj.getMarkOption().removeAllCustomPlaceMark(layerName);
	}
}
/**
 * 根据名称删除地标
 * @version 1.6
 * @param name
 *            地标名称
 * @param layerName
 *            地标所在图层名
 */
function removeCustomPlaceMarkByName(name, layerName) {
	if (hasEarthObj()) {
		earthObj.getMarkOption().removeCustomPlaceMarkByName(name, layerName);
	}
}
/**
 * 根据id删除地标
 *  @version 1.6
 * @param id
 *            标注ID
 * @param layerName
 *            标注所在图层名
 */
function removeCustomPlaceMarkByID(id, layerName) {
	if (hasEarthObj()) {
		earthObj.getMarkOption().removeCustomPlaceMarkByID(id, layerName);
	}
}
