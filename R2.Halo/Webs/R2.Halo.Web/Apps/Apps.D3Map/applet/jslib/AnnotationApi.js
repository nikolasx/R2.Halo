/**
 * 添加简单 汽泡
 * 
 * @version 1.7
 * 
 * @param id
 *            汽泡ID
 * @param text
 *            汽泡内容
 * @param latitude
 *            纬度
 * @param longitude
 *            经度
 * @param opacity
 *            透明度
 * @param bgColor
 *            背景颜色
 * @param bdWidth
 *            边框宽度
 * @param bdColor
 *            边框颜色
 * @param rootOffsetX
 *            汽泡离汽泡中心点的位置（0居中，正值偏右，单位像素）
 * @param rootOffsetY
 *            尖离汽泡点的y方向的位置(正向向上，小于0时看不不到脚尖,可以理解为汽泡脚尖的高度)
 * @param rootWidth
 *            汽泡脚尖的宽度
 * @param layerName
 *            图层名
 */
function addSimpleInnerAnnotation(id, text, latitude, longitude, opacity,
		bgColor, bdWidth, bdColor, rootOffsetX, rootOffsetY, rootWidth,
		layerName) {
	if (hasEarthObj()) {
		earthObj.getAnnotationOption().addInnerAnnotation(id, text,
				"Dialog-BOLD-14", "", 100, 0, true, 5, 5, 5, 5, 20,
				1.0 * latitude, 1.0 * longitude, 0, bgColor, 1.0 * opacity, "",
				"", 0, 0, 1, bdWidth, 0, bdColor, 1.0 * opacity,
				1 * rootOffsetX, 1 * rootOffsetY, 1 * rootWidth, "", 4, 4, 1,
				layerName);
	}
}

/**
 * 
 * @version 1.7
 * 
 * @param id
 *            唯一标志
 * @param text
 *            内容
 * @param textFont
 * @param textColor
 * @param width
 *            汽泡高宽
 * @param height
 *            汽泡高
 * @param fixTextWidthSize
 *            是否自适应文字的宽
 * @param cornerRadius
 *            汽泡边角半径
 * @param paddingTop
 *            汽泡内容离边框的位置
 * @param paddingLeft
 * @param paddingBottom
 * @param paddingRight
 * @param latitude
 * @param longitude
 * @param altitude
 * @param bgColor
 *            背景颜色
 * @param bgOpacity
 *            背景透明度
 * @param bgImgUrl
 *            背景图片
 * @param bgImgRepeat
 *            图片重复方式(x,y,xy,none）
 * @param bdWidth
 *            边框宽度
 * @param borderStipplePattern
 *            边框样式
 * @param bdColor
 *            边框颜色
 * @param bdOpacity
 *            边框透明度
 * @param rootOffsetX
 *            脚尖离汽泡点的x方向的位置（正向向右，为0时 汽泡脚尖位于正中间）
 * @param rootOffsetY
 *            尖离汽泡点的y方向的位置(正向向上，小于0时看不不到脚尖,rootHeight)
 * @param rootWidth
 *            脚尖宽度
 * @param closeImg
 *            关闭按钮图片
 * @param closePaddingRight
 *            关闭按钮离汽泡右侧的距离
 * @param closePaddingTop
 *            关闭按钮离汽泡顶端的距离
 * @param closeImgOpacity
 *            关闭按钮的透明度
 * @param layerName
 *            图层名字
 */
function addInnerAnnotation(id, text, textFont, textColor, width, height,
		fixTextWidthSize, cornerRadius, paddingTop, paddingLeft, paddingBottom,
		paddingRight, latitude, longitude, altitude, bgColor, bgOpacity,
		bgImgUrl, bgImgRepeat, bgImgTop, bgImgLeft, bgImgScale, bdWidth,
		borderStipplePattern, bdColor, bdOpacity, rootOffsetX, rootOffsetY,
		rootWidth, closeImg, closePaddingRight, closePaddingTop,
		closeImgOpacity, layerName) {

	if (hasEarthObj()) {
		earthObj.getAnnotationOption().addInnerAnnotation(id, text, textFont,
				textColor, 1 * width, height, fixTextWidthSize,
				1 * cornerRadius, 1 * paddingTop, 1 * paddingLeft,
				1 * paddingBottom, 1 * paddingRight, 1.0 * latitude,
				1.0 * longitude, 1.0 * altitude, bgColor, 1.0 * bgOpacity,
				bgImgUrl, bgImgRepeat, 1 * bgImgTop, 1 * bgImgLeft,
				1.0 * bgImgScale, 1.0 * bdWidth, 1 * borderStipplePattern,
				bdColor, 1.0 * bdOpacity, 1 * rootOffsetX, 1 * rootOffsetY,
				1 * rootWidth, closeImg, 1 * closePaddingRight,
				1 * closePaddingTop, 1.0 * closeImgOpacity, layerName)
	}
}
/**
 * 
 * 在地球的指定位置弹出汽泡
 * 
 * @version 1.7
 * 
 * @param id
 *            id
 * @param callBack
 *            脚本回调函数
 * @param latitude
 *            纬度
 * @param longitude
 *            经度
 * @param bgColor
 *            汽泡背景颜色 (影响脚尖)
 * @param bgOpacity
 *            汽泡背景透明度
 * @param bdWidth
 *            边框宽度
 * @param bdColor
 *            汽泡边框颜色
 * @param bdOpacity
 *            汽泡边框透明度
 * @param rootOffsetX
 *            汽泡框相对于脚尖的横向偏移（像素，正数向右）
 * @param rootOffsetY
 *            汽泡框 相对于脚尖的竖向偏移(像素，正值为向上)
 * @param rootWidth
 *            汽泡脚尖的宽度
 * 
 * @param layerName
 *            图层名
 */
function addFrameAnnotation(id, callBack, latitude, longitude, width, height,
		bgColor, bgOpacity, bdWidth, bdColor, bdOpacity, rootOffsetX,
		rootOffsetY, rootWidth, layerName) {

	if (hasEarthObj()) {
		earthObj.getAnnotationOption().addFrameAnnotation(id, callBack,
				1.0 * latitude, 1.0 * longitude, 1 * width, 1 * height,
				bgColor, 1.0 * bgOpacity, 1.0 * bdWidth, bdColor,
				1.0 * bdOpacity, 1 * rootOffsetX, 1 * rootOffsetY,
				1 * rootWidth, layerName)

	}
}

/**
 * 根据ID 图层名称设置汽泡的显示状态
 * 
 * @version 1.7
 * 
 * @param id
 *            id
 * @param layerName
 *            图层名称
 * @param visible
 *            是否显示
 */
function setAnnotationVisible(id, layerName, visible) {
	if (hasEarthObj()) {
		earthObj.getAnnotationOption().setAnnotationVisible(id, layerName,
				visible);
	}
}

/**
 * 根据汽泡id删除指定汽泡
 * 
 * @version 1.7
 * 
 * @param id
 *            当id为空时，删除该图层的所有汽泡
 * @param layerName
 */
function deleteAnnotation(id, layerName) {
	if (hasEarthObj()) {
		earthObj.getAnnotationOption().deleteAnnotation(id, layerName)
	}
}

/////////////////////////////////旧接口////////////////////////////////

/**
 * 
 * 在地球的指定位置弹出汽泡(兼容旧版)
 * 
 * @version 1.6
 * 
 * @param name
 *            名称
 * @param description
 *            详细信息
 * @param latitude
 *            纬度
 * @param longitude
 *            经度
 * @param opacity
 *            汽泡透明度
 * @param bgColor
 *            汽泡背景颜色
 * @param bdColor
 *            汽泡边框颜色
 * @param rootHeight
 *            汽泡脚尖的高度
 * @param rootWidth
 *            汽泡脚尖的宽度
 * @param scale
 *            汽泡的放大比率
 */
function addCustomAnnotation(name, description, latitude, longitude, opacity,
		bgColor, bdColor, rootHeight, rootWidth, scale) {
	if (hasEarthObj()) {
		earthObj.getAnnotationOption().addCustomAnnotation(name, description,
				latitude, longitude, opacity, bgColor, bdColor, rootHeight,
				rootWidth, scale);
	}
}

/**
 * 添加3D文本信息
 * 
 * @param id  
 * 		3D文字id 
 * @param position  
 * 		3D文字的地理位置         格式：Lat,Lon,Ele
 * @param text  
 * 		3D文字信息内容
 * @param textFont  
 * 		3D文字字体        	      格式：DIALOG-PLAIN-24
 * @param textColor  
 * 		3D文字颜色
 * @param textEffectType  
 * 		3D文字文本效果（阴影和边框）     Shadow|Outline
 * @param widthInMeters  
 * 		3D文字文本长度
 * @param allLength  
 * 		3D文字总长度
 * @param lineColor  
 * 		线的颜色
 * @param lineWidth  
 * 		线的宽度
 * @param lineStippleFactor  
 * 		线形(0为实线，大于0为虚线，数值越大，虚线间隔越大)
 * @param rotateX  
 * 		绕x轴的旋转角度
 * @param rotateY  
 * 		绕y轴的旋转角度
 * @param rotateZ  
 * 		绕z轴的旋转角度
 * @param layerName  
 * 		图层名
 */

function add3DText(id, position, text, textFont, textColor, textEffectType, widthInMeters, allLength, lineColor, 
                   lineWidth, lineStippleFactor, rotateX, rotateY, rotateZ, layerName) {
	if (hasEarthObj()) {
		earthObj.getAnnotationOption().add3DText(id, position, text, textFont, textColor, textEffectType, widthInMeters*1, allLength*1, lineColor, 
                   lineWidth*1, lineStippleFactor*1, rotateX, rotateY*1, rotateZ*1, layerName);
	}
}
	
/**
 * 根据ID删除模型信息
 * 
 * @param id
 * 		3D文字id   （ 当id为空或者null时，删除layerName上所有的3D文字）
 * @param layerName
 * 		图层名
 * @return
 */

function remove3DText(id, layerName) {
	if (hasEarthObj()) {
		earthObj.getAnnotationOption().remove3DText(id, layerName);
	}
}

/**
 * 改变指定3D文字的地理位置以及方位信息
 * 
 * @param id
 * 		3D文字id 
 * @param layerName
 * 		图层名
 * @param position
 * 		3D文字地理位置   格式：Lat,Lon,Ele
 * @param rotateX
 * 		绕x轴的旋转角度
 * @param rotateY
 * 		绕y轴的旋转角度
 * @param rotateY
 * 		绕z轴的旋转角度
 * @return
 */

function change3DText(id, layerName, position, rotateX, rotateY, rotateZ) {
	if (hasEarthObj()) {
		earthObj.getAnnotationOption().change3DText(id, layerName, position, rotateX*1, rotateY*1, rotateZ*1);
	}
}
