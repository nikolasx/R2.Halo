/**   
 * @fileOverview 矢量图形绘制接口(包括数字地球测量、图形查询等)
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7
 */

/**
 * 开启地表距离测量
 * 
 * @param lineColorObj
 *            线颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param textColorObj
 *            文字颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */
function scaleDistance(lineColorObj, textColorObj) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().scaleDistance(lineColorObj,
				textColorObj);
	}
}
/**
 * 开启地表多边形面积测量
 * 
 * @param interiorColorObj
 *            多边形内部颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param borderColorObj
 *            多边形边界颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param textColorObj
 *            文字颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */
function scaleArea(interiorColorObj, borderColorObj, textColorObj) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().scaleArea(interiorColorObj,
				borderColorObj, textColorObj);
	}
}


/**
	 * 开启多边形体积测量，高度为高程值
	 * 
	 * @param interiorColorObj
	 *            多边形内部颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
	 * @param borderColorObj
	 *            多边形边界颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
	 * @param textColorObj
	 *            文字颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
	 */
function scaleVolume(interiorColorObj,borderColorObj,textColorObj){
	if (hasEarthObj()) {
        earthObj.getSurfaceShapeOption().scaleVolume(interiorColorObj, borderColorObj, textColorObj, 0);			
	}
}

/**
	 * 开启多边形体积测量，高度为高程值
	 * 
	 * @param interiorColorObj
	 *            多边形内部颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
	 * @param borderColorObj
	 *            多边形边界颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
	 * @param textColorObj
	 *            文字颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
	 */
function scaleVolumeByHeight(interiorColorObj,borderColorObj,textColorObj,height){
	if (hasEarthObj()) {
       earthObj.getSurfaceShapeOption().scaleVolume(interiorColorObj, borderColorObj, textColorObj, height*1);			
	}
}

/**
 * 结束测量（包括测距、测面积）
 */
function endScale() {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().endScale();
	}
}

/**
 * 结束时图形绘制
 */
function endDrawShape() {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().endDrawShape();
	}
}

/**
 * 根据指定参数绘制基本地表图形
 * @version 1.7
 * @param id
 *            图形id
 * @param shapeType
 *            要绘制的图形名，包括：line, rectangle, circle, polygon
 * @param drawInnner
 *            是否绘制图形内部
 * @param innerColor
 *            图形填充颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param innerOpacity
 *            图形填充透明度，范围0-1
 * @param drawBorder
 *            是否绘制边界
 * @param borderColor
 *            图形边界颜色(线颜色)RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param borderWidth
 *            边界宽度
 * @param borderOpacity
 *            边界透明度，范围0-1
 * @param borderStippleFactor
 *            边框线形(0为实线，大于0为虚线，数值越大，虚线间隔越大)
 * @param showInfo
 *            是在绘制时显示图形信息
 * @param showInfoColor
 *            显示图形信息时的文本颜色
 * @param editEnable
 *            是否可以在绘制完后对图形进行编辑
 * @param controlColor
 *            控制点颜色（可编辑时才有效）
 * @param isClear
 *            绘制完后是否清除
 * @param isContinue
 *            是否连续绘制 （连续绘制时 如果isClear为false，则ID不起作用，删除时只能根据图层删除所有）
 * @param layerName
 *            图层名称
 * @param backFunName
 *            绘制完后的回调函数
 * @param sendInfoFormat
 *            回调函数中信息返回格式（暂支持"json" 如果不为json则返回以前的旧格式）
 *  2014年6月21日10:49:16
 */
function drawSurfaceShape(id, shapeType, drawInnner, innerColor, innerOpacity,
		drawBorder, borderColor, borderWidth, borderOpacity,
		borderStippleFactor, showInfo, showInfoColor, editEnable, controlColor,
		isClear, isContinue, layerName, backFunName, sendInfoFormat) {
	if (hasEarthObj()) {
	    earthObj.getSurfaceShapeOption().drawSurfaceShapeFull(id, shapeType,
	        drawInnner, innerColor, 1.0 * innerOpacity, drawBorder,
	        borderColor, 1.0 * borderWidth, 1.0 * borderOpacity,
	        1 * borderStippleFactor, showInfo, showInfoColor, editEnable,
	        controlColor, isClear, isContinue, layerName, backFunName,
	        sendInfoFormat);
	}
}

/**
 * 通过id和layerName控制图形的显隐状态
 * 
 * @param id
 * @param layerName
 * @param visible
 * @return
 */
function setSurfaceShapeVisible(id, layerName, visible){
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().setSurfaceShapeVisible(id, layerName, visible);
	}
}

/**
 * 添加线
 * @version 1.7
 * @param id
 *            线的ID
 * @param points
 *            　　曲线坐标信息格式：latitude,longitude|latitude,longitude|...
 * @param borderColor  
 *            　　线的颜色  RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param borderWidth
 *            　　线的宽度
 * @param borderOpacity
 *            线的透明度
 * @param borderStippleFactor
 *            虚线因子（为0时是实线，必须是整数，数值越大，虚线间隔越大）
 * @param minVisibleDist
 *            最小可见高度
 * @param maxVisibleDist
 *            最大可见高度
 * @param layerName
 *            图层名
 * @param backFunName
 *            鼠标点击回调函数
 */
function addLine(id, points, borderColor, borderWidth, borderOpacity,
		borderStippleFactor, minVisibleDist, maxVisibleDist, layerName,
		backFunName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().addLine(id, points, borderColor,
				1.0 * borderWidth, 1.0 * borderOpacity,
				1 * borderStippleFactor, 1.0 * minVisibleDist,
				1.0 * maxVisibleDist, layerName, backFunName);
	}
}

/**
 * 添加多边形
 * @version 1.7
 * @param id
 *            多边形ID
 * @param points
 *            加多边形边界坐标信息格式：latitude,longitude|latitude,longitude|...
 * @param innerColor
 *            多边形内部颜色 RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param innerOpacity
 *            多边形内部透明度
 * @param drawBorder
 *            是否绘制边框线条
 * @param borderColor
 *            边框线条颜色
 * @param borderWidth
 *            边框线条粗细
 * @param borderOpacity
 *            边框线条透明度
 * @param borderStippleFactor
 *            边框线条虚线因子（为0时是实线，必须是整数，数值越大，虚线间隔越大）
 * @param minVisibleDist
 *            最小可见高度
 * @param maxVisibleDist
 *            最大可见高度
 * @param layerName
 *            图层名
 * @param backFunName
 *            鼠标点击回调函数
 */
function addPolygon(id, points, innerColor, innerOpacity, drawBorder,
		borderColor, borderWidth, borderOpacity, borderStippleFactor,
		minVisibleDist, maxVisibleDist, layerName, backFunName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().addPolygon(id, points, innerColor,
				1.0 * innerOpacity, drawBorder, borderColor, 1.0 * borderWidth,
				1.0 * borderOpacity, 1 * borderStippleFactor,
				1.0 * minVisibleDist, 1.0 * maxVisibleDist, layerName,
				backFunName);
	}
}

/**
 * 添加矩形
 * @version 1.7
 * @param id
 *            矩形ID
 * @param latitude
 *            矩形左下角纬度
 * @param longitude
 *            矩形左下角经度
 * @param width
 *            矩形的宽度（米）
 * @param height
 *            矩形的高度（米）
 * @param heading
 *            矩形的朝向
 * @param innerColor
 *            内部颜色 RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param innerOpacity
 *            内部透明度
 * @param drawBorder
 *            是否绘制边框线条
 * @param borderColor
 *            边框线条颜色
 * @param borderWidth
 *            边框线条粗细
 * @param borderOpacity
 *            边框线条透明度
 * @param borderStippleFactor
 *            边框线条虚线因子（为0时是实线，必须是整数，数值越大，虚线间隔越大）
 * @param minVisibleDist
 *            最小可见高度
 * @param maxVisibleDist
 *            最大可见高度
 * @param layerName
 *            图层名
 * @param backFunName
 *            鼠标点击回调函数
 */
function addRect(id, latitude, longitude, width, height, heading, innerColor,
		innerOpacity, drawBorder, borderColor, borderWidth, borderOpacity,
		borderStippleFactor, minVisibleDist, maxVisibleDist, layerName,
		backFunName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().addRect(id, 1.0 * latitude,
				1.0 * longitude, 1.0 * width, 1.0 * height, 1.0 * heading,
				innerColor, 1.0 * innerOpacity, drawBorder, borderColor,
				1.0 * borderWidth, 1.0 * borderOpacity,
				1 * borderStippleFactor, 1.0 * minVisibleDist,
				1.0 * maxVisibleDist, layerName, backFunName);
	}
}

/**
 * 添加圆
 * @version 1.7
 * @param id
 *            圆的ID
 * @param latitude
 *            圆中心纬度
 * @param longitude
 *            圆中心经度
 * @param radius
 *            圆半径（米）
 * @param innerColor
 *            内部颜色　RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param innerOpacity
 *            内部透明度
 * @param drawBorder
 *            是否绘制边框线条
 * @param borderColor
 *            边框线条颜色
 * @param borderWidth
 *            边框线条颜宽度
 * @param borderOpacity
 *            边框线条透明度
 * @param borderStippleFactor
 *            边框线条虚线因子（为0时是实线，必须是整数，数值越大，虚线间隔越大）　
 * @param minVisibleDist
 *            最小可见高度
 * @param maxVisibleDist
 *            最大可见高度
 * @param layerName
 *            图层名
 * @param backFunName
 *            鼠标点击回调函数
 */
function addCircle(id, latitude, longitude, radius, innerColor, innerOpacity,
		drawBorder, borderColor, borderWidth, borderOpacity,
		borderStippleFactor, minVisibleDist, maxVisibleDist, layerName,
		backFunName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().addCircle(id, 1.0 * latitude,
				1.0 * longitude, 1.0 * radius, innerColor, 1.0 * innerOpacity,
				drawBorder, borderColor, 1.0 * borderWidth,
				1.0 * borderOpacity, 1 * borderStippleFactor,
				1.0 * minVisibleDist, 1.0 * maxVisibleDist, layerName,
				backFunName)
	}
}

/**
 * 添加带方向路线
 * @version 1.7
 * @param id
 *            路线的ID
 * @param points
 *            路线坐标信息格式：latitude,longitude|latitude,longitude|...
 * @param pathColor
 *            路线颜色
 * @param pathWidth
 *            路线宽度
 * @param opacity
 *            路线透明度
 * @param arrowAngle
 *            箭头夹角
 * @param arrowSize
 *            箭头大小
 * @param isMidLinehasArrow
 *            是否拐角带箭头　
 * @param minVisibleDist
 *            最小可见高度
 * @param maxVisibleDist
 *            最大可见高度
 * @param layerName
 *            图层名
 * @param backFunName
 *            鼠标点击回调函数
 */
function addDirectedPath(id, points, pathColor, pathWidth, opacity, arrowAngle, arrowSize, isMidLinehasArrow, 
			minVisibleDist, maxVisibleDist, layerName, backFunName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().addDirectedPath(id, points, pathColor, pathWidth*1, opacity*1, arrowAngle*1, arrowSize*1, isMidLinehasArrow, 
			minVisibleDist*1, maxVisibleDist*1, layerName, backFunName);
	}
}

/**
 * 绘制路线  _ zqq
 * @version 1.7
 * 
 * @param id
 *            路线id
 * @param pathColor
 *            路线颜色
 * @param pathWidth
 *            线宽
 * @param opacity
 *            透明度
 * @param arrowSize
 *            箭头大小（默认20像素）
 * @param arrowAngle
 *            箭头夹角（默认45）
 * @param isMidHasArrow
 *            折点是否需要箭头
 * @param borderStippleFactor
 *            边框线形(0为实线，大于0为虚线，数值越大，虚线间隔越大)
 * @param isEdit
 *            是否可编辑
 * @param controlColor
 *            控制点颜色（可编辑时才有效）
 * @param isClear
 *            绘制完后是否清除
 * @param isContinue
 * 			     是否连续绘制 （连续绘制时 如果isClear为false，则ID不起作用，删除时只能根据图层删除所有）
 * @param layerName
 * 			     图层名
 * @param backFunName
 *            回调脚本函数
 * @param sendInfoFormat
 *            回调函数中信息返回格式（暂支持"json" 如果不为json则返回以前的旧格式）
 */

function drawDirectedPathShape(id, pathColor, pathWidth, opacity, arrowSize, arrowAngle, isMidHasArrow, borderStippleFactor,
			isEdit, controlColor, isClear, isContinue, layerName, backFunName, sendInfoFormat) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().drawDirectedPathShape(id, pathColor, pathWidth*1, opacity*1, arrowSize*1, arrowAngle*1, isMidHasArrow, borderStippleFactor*1,
			isEdit, controlColor, isClear, isContinue, layerName, backFunName, sendInfoFormat);
	}
}

/**
	 * 绘制曲线  _ zqq
	 * 
	 * @param id
	 *            曲线id
	 * @param lineColor
	 *            曲线颜色
	 * @param lineWidth
	 *            曲线宽
	 * @param opacity
	 *            曲线透明度
	 * @param isHasArrow
	 * 			     是否带箭头
	 * @param arrowSize
	 *            箭头大小（默认20像素）
	 * @param arrowAngle
	 *            箭头夹角（默认45）
	 * @param borderStippleFactor
	 *            边框线形(0为实线，大于0为虚线，数值越大，虚线间隔越大)
	 * @param isClear
	 *            绘制完后是否清除
	 * @param isContinue
	 * 			     是否连续绘制 （连续绘制时 如果isClear为false，则ID不起作用，删除时只能根据图层删除所有）
	 * @param layerName
	 * 			     图层名
	 * @param backFunName
	 *            回调脚本函数
	 * @param sendInfoFormat
	 *            回调函数中信息返回格式（暂支持"json" 如果不为json则返回以前的旧格式）
	 */
function drawCurveLineShape(id, lineColor, lineWidth, opacity, isHasArrow, arrowSize, arrowAngle, borderStippleFactor,
			isClear, isContinue, layerName, backFunName, sendInfoFormat) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().drawCurveLineShape(id, lineColor, lineWidth*1, opacity*1, isHasArrow, arrowSize*1, arrowAngle*1, borderStippleFactor*1,
			isClear, isContinue, layerName, backFunName, sendInfoFormat);
	}
}
/**
 * 绘制单燕尾 军标 _ zqq
 * 
 * @param id
 *            燕尾 军标 id
 * @param innerColorObj
 *            图形填充颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param borderColorObj
 *            图形边界颜色(线颜色)RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param isDrawBorder
 *            是否绘制边界
 * @param lineWidth
 *            线宽，该参数仅在绘制线时有作用
 * @param opacity
 *            透明度，范围0-1,仅对图形内部有效
 *            
 *            
 *                             标准燕尾      直箭头
 *                             
 * @param headHeightFactor   
 *            箭头头部高度因子 	0.15  		  0.1
 * @param headWidthFactor
 *            箭头头部宽度因子 	0.4   		  1.3
 * @param neckHeightFactor
 *            箭头腰部高度因子 	0.75  		  1.0
 * @param neckWidthFactor
 *            箭头腰部宽度因子	0.1   		  0.7
 * @param tailWidthFactor
 *            箭头尾部宽度因子 	0.1   		  0.07
 * @param swallowTailFactor
 *            燕尾因子 			0.5   		  0
 * @param hasSwallowTail
 *            是否带燕尾
 * @param isClear
 *            绘制完后是否清除
 * @param isContinue
 * 			     是否连续绘制 （连续绘制时 如果isClear为false，则ID不起作用，删除时只能根据图层删除所有）
 * @param layerName
 * 			     图层名
 * @param backFunName
 *            回调脚本函数
 * @param sendInfoFormat
 *            回调函数中信息返回格式（暂支持"json" 如果不为json则返回以前的旧格式）
 */
function drawSimpleSwallow(id, innerColorObj, borderColorObj, isDrawBorder, lineWidth, opacity, headHeightFactor, headWidthFactor,
			neckHeightFactor, neckWidthFactor, tailWidthFactor, swallowTailFactor, hasSwallowTail,
			isClear, isContinue, layerName, backFunName, sendInfoFormat) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().drawSimpleSwallow(id, innerColorObj, borderColorObj, isDrawBorder, lineWidth*1, opacity*1, headHeightFactor*1, headWidthFactor*1,
			neckHeightFactor*1, neckWidthFactor*1, tailWidthFactor*1, swallowTailFactor*1, hasSwallowTail,
			isClear, isContinue, layerName, backFunName, sendInfoFormat);
	}
}

/**
 * 绘制双燕尾 军标 _ zqq
 * 
 * @param id
 *            燕尾 军标 id
 * @param innerColorObj
 *            图形填充颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param borderColorObj
 *            图形边界颜色(线颜色)RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param isDrawBorder
 *            是否绘制边界
 * @param lineWidth
 *            线宽，该参数仅在绘制线时有作用
 * @param opacity
 *            透明度，范围0-1,仅对图形内部有效
 * @param headHeightFactor
 *            箭头头部高度因子 0.15
 * @param headWidthFactor
 *            箭头头部宽度因子 0.8
 * @param neckHeightFactor
 *            箭头腰部高度因子 0.7
 * @param neckWidthFactor
 *            箭头腰部宽度因子 0.4
 * @param isClear
 *            绘制完后是否清除
 * @param isContinue
 * 			     是否连续绘制 （连续绘制时 如果isClear为false，则ID不起作用，删除时只能根据图层删除所有）
 * @param layerName
 * 			     图层名
 * @param backFunName
 *            回调脚本函数
 * @param sendInfoFormat
 *            回调函数中信息返回格式（暂支持"json" 如果不为json则返回以前的旧格式）
 */
function drawDoubleSwallow(id, innerColorObj, borderColorObj, isDrawBorder, lineWidth, opacity, headHeightFactor, headWidthFactor,
			neckHeightFactor, neckWidthFactor, isClear, isContinue, layerName, backFunName, sendInfoFormat) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().drawDoubleSwallow(id, innerColorObj, borderColorObj, isDrawBorder, lineWidth*1, opacity*1, headHeightFactor*1, headWidthFactor*1,
			neckHeightFactor*1, neckWidthFactor*1, isClear, isContinue, layerName, backFunName, sendInfoFormat);
	}
}
	

/**
 * 根据id 和图层名称删除相应的图形（）
 * @version 1.7
 * @param id  （当id为空或者NULL，删除layerName上所有的图形）
 * @param layerName  图层名
 */
function deleteSurfaceShape(id, layerName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().deleteSurfaceShape(id, layerName);
	}
}


/////////////////////////////////旧接口///////////////////////////////////

/**
 * 根据指定参数绘制基本地表图形
 * @version 1.6
 * @param shape
 *            要绘制的图形名，包括：line, rectangle, circle, polygon
 * @param innerColorObj
 *            图形填充颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param borderColorObj
 *            图形边界颜色(线颜色)RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param isDrawBorder
 *            是否绘制边界
 * @param lineWidth
 *            线宽，该参数仅在绘制线时有作用
 * @param opacity
 *            透明度，范围0-1,仅对图形内部有效
 * @param isTemp
 *            是否为临时图形(临时图形在结束绘制后将不在地表上存在)
 * @param isSendInfo
 *            绘制完成后是否向指定的URL发送图形信息。发送格式如下：
 *            <li>line: <br>
 *            "url?_method=SurfaceShape&shape=Polyline&positions=latitude,longitude|latitude,longitude|..."</li>
 *            <li>rectangle: <br>
 *            "url?_method=SurfaceShape&shape=Rectangle&info=latitudeMin,latitudeMax,longitudeMin,longitudeMax"</li>
 *            <li>circle: <br>
 *            "url?_method=SurfaceShape&shape=Circle&center=latitude,longitude&radius=radius"</li>
 *            <li>polygon: <br>
 *            "url?_method=SurfaceShape&shape=Polygon&positions=latitude,longitude|latitude,longitude|..."</li>
 * @param functionName
 *            绘制完后回调函数，接收返回参数
 */
function drawSurfaceShapeOld(shape, innerColorObj, borderColorObj, isDrawBorder, lineWidth, opacity, isTemp, isSendInfo, functionName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().drawSurfaceShape(shape, innerColorObj, borderColorObj, isDrawBorder, lineWidth * 1, opacity * 1, isTemp, isSendInfo, functionName, false, isTemp);
	}
}
/**
 * 根据指定参数绘制基本地表图形
 * @version 1.6
 * @param shape
 *            要绘制的图形名，包括：line, rectangle, circle, polygon
 * @param innerColorObj
 *            图形填充颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param borderColorObj
 *            图形边界颜色(线颜色)RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param isDrawBorder
 *            是否绘制边界
 * @param lineWidth
 *            线宽，该参数仅在绘制线时有作用
 * @param opacity
 *            透明度，范围0-1,仅对图形内部有效
 * @param isTemp
 *            是否为临时图形(临时图形在结束绘制后将不在地表上存在)
 * @param isSendInfo
 *            绘制完成后是否向指定的URL发送图形信息。发送格式如下：
 *            <li>line: <br>
 *            "url?_method=SurfaceShape&shape=Polyline&positions=latitude,longitude|latitude,longitude|..."</li>
 *            <li>rectangle: <br>
 *            "url?_method=SurfaceShape&shape=Rectangle&info=latitudeMin,latitudeMax,longitudeMin,longitudeMax"</li>
 *            <li>circle: <br>
 *            "url?_method=SurfaceShape&shape=Circle&center=latitude,longitude&radius=radius"</li>
 *            <li>polygon: <br>
 *            "url?_method=SurfaceShape&shape=Polygon&positions=latitude,longitude|latitude,longitude|..."</li>
 * @param functionName
 *            绘制完后回调函数，接收返回参数
 * @param isContinuous
 *            是否是连续绘制模式
 * @param isClear
 *            绘制完后是否清除
 */
function drawSurfaceShapeContinuous(shape, innerColorObj, borderColorObj, isDrawBorder, lineWidth, opacity, isTemp, isSendInfo, functionName, isContinuous, isClear) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().drawSurfaceShape(shape, innerColorObj, borderColorObj, isDrawBorder, lineWidth * 1, opacity * 1, isTemp, isSendInfo, functionName, isContinuous, isClear);
	}
}

/**
 * 根据信息添加地表矢量图形
 * @version 1.6
 * @param shapeName
 *            矢量图形名
 * @param shapeType
 *            矢量图形类型，包括：<code>line, rectangle, circle, polygon</code>
 * @param points
 *            图形信息<br>
 *            <li>曲线信息格式：<br>
 *            <code>latitude,longitude|latitude,longitude|...</code>
 *            <li>矩形信息格式：<br>
 *            <code>center Latitude,center longitude|width|height|heading</code>
 *            <li>圆形信息格式：<br>
 *            <code>center Position Latitude,center Position longitude|radius</code>
 *            <li>多边形信息格式：<br>
 *            <code>latitude,longitude|latitude,longitude|...</code>
 * @param interiorColorObj
 *            矢量图形内部颜色(曲线此参数无效)
 * @param borderColorObj
 *            矢量图形边界颜色(曲线颜色)
 * @param opacity
 *            矢量图形内部透明度
 * @param isDrawBorder
 *            是否绘制矢量图形边界
 * @param lineWidth
 *            曲线宽度
 * @param minVisibleDist
 *            矢量图形最小可见距离
 * @param maxVisibleDist
 *            矢量图形最大可见距离
 * @param isTemp
 *            是否为临时图形(endDrawShape()函数是否对其有影响)
 * 
 * @return 所添加图形的XML信息
 */
function addSurfaceShape(shapeName, shapeType, points, interiorColorObj, borderColorObj, opacity, isDrawBorder, lineWidth, minVisibleDist, maxVisibleDist, isTemp) {
	if (hasEarthObj()) {
		return earthObj.getSurfaceShapeOption().addSurfaceShape(shapeName, shapeType, points, interiorColorObj, borderColorObj, opacity * 1, isDrawBorder, lineWidth * 1, minVisibleDist * 1, maxVisibleDist * 1, isTemp);
	}
}
/**
 * 根据信息添加地表矢量图形
 * @version 1.6
 * @param shapeName
 *            矢量图形名
 * @param shapeType
 *            矢量图形类型，包括：<code>line, rectangle, circle, polygon</code>
 * @param points
 *            图形信息<br>
 *            <li>曲线信息格式：<br>
 *            <code>latitude,longitude|latitude,longitude|...</code>
 *            <li>矩形信息格式：<br>
 *            <code>center Latitude,center longitude|width|height|heading</code>
 *            <li>圆形信息格式：<br>
 *            <code>center Position Latitude,center Position longitude|radius</code>
 *            <li>多边形信息格式：<br>
 *            <code>latitude,longitude|latitude,longitude|...</code>
 * @param interiorColorObj
 *            矢量图形内部颜色(曲线此参数无效)
 * @param borderColorObj
 *            矢量图形边界颜色(曲线颜色)
 * @param opacity
 *            矢量图形内部透明度
 * @param isDrawBorder
 *            是否绘制矢量图形边界
 * @param lineWidth
 *            曲线宽度
 * @param minVisibleDist
 *            矢量图形最小可见距离
 * @param maxVisibleDist
 *            矢量图形最大可见距离
 * @param isTemp
 *            是否为临时图形(endDrawShape()函数是否对其有影响)
 * @param url
 *            图形信息发送页面
 * @param frame
 *            图形信息发送页面所在Frame名
 * 
 * @return 所添加图形的XML信息
 */
function addSurfaceShapeFull(shapeName, shapeType, points, interiorColorObj, borderColorObj, opacity, isDrawBorder, lineWidth, minVisibleDist, maxVisibleDist, isTemp, url, frame) {
	if (hasEarthObj()) {
		return earthObj.getSurfaceShapeOption().addSurfaceShape(shapeName, shapeType, points, interiorColorObj, borderColorObj, opacity * 1, isDrawBorder, lineWidth * 1, minVisibleDist * 1, maxVisibleDist * 1, isTemp, url, frame);
	}
}

/**
 * 通过图形的类型与其XML信息字符串进行删除
 * @version 1.6
 * @param type
 *            图形类型(line, rectangle, circle, polygon)
 * @param xmlInfo
 *            图形信息字符串
 */
function removeSurfaceShape(type, xmlInfo) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().removeSurfaceShape(type, xmlInfo);
	}
}
/**
 * 删除矢量图形渲染图层中指定类型的图形
 * @version 1.6
 * @param type
 *            图形类型,种类有"line","rectangle","circle","polygon"
 */
function removeAllSurfaceShapeOf(type) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().removeAllSurfaceShapeOf(type);
	}
}
/**
 * 移除地表上所有非临时矢量图形
 */
function  removeAllSurfaceShape(){
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().removeAllSurfaceShape();
	}
}


