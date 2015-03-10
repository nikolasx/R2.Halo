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
 * 结束测量（包括测距、测面积）
 */
function endScale() {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().endScale();
	}
}

/**
 * 
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
 * @param layerName
 *            图层名称
 * @param backFunName
 *            绘制完后的回调函数
 */
function drawSurfaceShape(id, shapeType, drawInnner, innerColor, innerOpacity,
		drawBorder, borderColor, borderWidth, borderOpacity,
		borderStippleFactor, showInfo, showInfoColor, editEnable, controlColor,
		isClear, layerName, backFunName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().drawSurfaceShape(id, shapeType,
				drawInnner, innerColor, innerOpacity * 1.0, drawBorder,
				borderColor, borderWidth * 1, borderOpacity,
				borderStippleFactor * 1, showInfo, showInfoColor, editEnable,
				controlColor, isClear, layerName, backFunName);
	}
}

/**
 * 添加线
 * 
 * @param id
 *            线的ID
 * @param points
 *            　　曲线坐标信息格式：latitude,longitude|latitude,longitude|...
 * @param borderColor
 *            　　线的颜色
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
				1 * borderWidth, 1.0 * borderOpacity, 1 * borderStippleFactor,
				1.0 * minVisibleDist, 1.0 * maxVisibleDist, layerName,
				backFunName);
	}
}

/**
 * 添加多边形
 * 
 * @param id
 *            多边形ID
 * @param points
 *            加多边形边界坐标信息格式：latitude,longitude|latitude,longitude|...
 * @param innerColor
 *            多边形内部颜色
 * @param innerOpacity
 *            多边形内部透明度
 * @param drawBorder
 *            是否绘制边框线条
 * @param borderColor
 *            边框线条颜色
 * @param borderWidth
 *            边框线条粗经
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
				1.0 * innerOpacity, drawBorder, borderColor, 1 * borderWidth,
				1.0 * borderOpacity, 1 * borderStippleFactor,
				1.0 * minVisibleDist, 1.0 * maxVisibleDist, layerName,
				backFunName);
	}
}

/**
 * 根据id 和图层名称删除相应的图形（）
 * 
 * @param id   id为空时删除该图层的所有图形
 * @param layerName  图层名
 */
function deleteSurfaceShape(id, layerName) {
	if (hasEarthObj()) {
		earthObj.getSurfaceShapeOption().deleteSurfaceShape(id, layerName);
	}
}

////////////////////////////////////////////////////以下接口为测试接口，不建议使用////////////////////////////////////////////////////////////////////////////

/**
 * 绘制双线箭头军标（）
 * 
 * @version 1.7
 * 
 * @param shape
 *           要绘制的 矢量军标类型，包括：swallowArrow
 * @param innerColorObj
 *           图形填充颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param borderColorObj
 *           图形边界颜色(线颜色)RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 * @param isDrawBorder
 *           是否绘制边界
 * @param lineWidth
 *           线宽，该参数仅在绘制线时有作用
 * @param opacity
 *           透明度，范围0-1,仅对图形内部有效
 * @param headHeightFactor  （默认值：0.15  ，建议保留默认值）
 *           箭头头部高度因子 
 * @param headWidthFactor   （默认值：0.4   ，建议保留默认值）
 *           箭头头部宽度因子
 * @param neckHeightFactor  （默认值：0.75  ，建议保留默认值）
 *           箭头腰部高度因子
 * @param neckWidthFactor   （默认值：0.1   ，建议保留默认值）
 * 	         箭头腰部宽度因子
 * @param tailWidthFactor   （默认值：0.1   ，建议保留默认值）
 * 	         箭头尾部宽度因子
 * @param swallowTailFactor （默认值：0.5   ，建议保留默认值）
 *           燕尾因子
 * @param hasSwallowTail
 *           是否带燕尾
 * @param isTemp
 * 		  是否为临时图形
 * @param functionName
 *           绘制图形信息回调给javascript
 */
function drawDoubleArrowShape(shape, innerColorObj, borderColorObj,
		isDrawBorder, lineWidth, opacity, headHeightFactor, headWidthFactor,
		neckHeightFactor, neckWidthFactor, tailWidthFactor, swallowTailFactor,
		hasSwallowTail, isTemp, functionName) {
	if (hasEarthObj()) {
		earthObj.getVectorGraphOption().drawDoubleArrowShape(shape,
				innerColorObj, borderColorObj, isDrawBorder, lineWidth,
				opacity, headHeightFactor, headWidthFactor, neckHeightFactor,
				neckWidthFactor, tailWidthFactor, swallowTailFactor,
				hasSwallowTail, isTemp, functionName);
	}
}

/**
 * 绘制单线箭头
 * 
 * @version 1.7
 * 
 * @param shape (strait ,curve)
 *        箭头类型
 * @param arrowInnerColorObj
 *        箭头填充色
 * @param arrowBorderColorObj
 *        线边框色
 * @param isDrawBorder
 *        是否绘制边框
 * @param lineWidth
 *        线宽
 * @param opacity
 *        透明度
 * @param arrowLength
 *        箭头长度（0-1）,两点之间线距离的百分比
 * @param angle
 *        箭头夹角（默认30°）
 * @param isMidHasArrow
 *        折点是否需要箭头
 * @param isContinue
 *        是否连续绘制
 * @param isTemp
 * 		  是否为临时图形
 * @param functionName
 *        回调脚本函数
 */
function drawSingleLineShape(shape, arrowInnerColorObj, arrowBorderColorObj,
		isDrawBorder, lineWidth, opacity, arrowLength, angle, isMidHasArrow,
		isContinue, isTemp, functionName) {
	if (hasEarthObj()) {
		earthObj.getVectorGraphOption().drawSingleLineShape(shape,
				arrowInnerColorObj, arrowBorderColorObj, isDrawBorder,
				lineWidth, opacity, arrowLength, angle, isMidHasArrow,
				isContinue, isTemp, functionName);
	}
}

/**
 *        绘制旗帜
 * @param shape  
 *        旗帜类型  'TriangleFlag' 'CurveFlag'  'RectFlag'
 * @param arrowInnerColorObj
 *        旗帜填充色
 * @param arrowBorderColorObj
 *        旗帜边框色
 * @param shapeLayerName
 *        图形所在图层名称
 * @param isDrawBorder
 *        是否绘制边框
 * @param opacity
 *        透明度
 * @param isTemp
 * 		  是否为临时图形
 * @param functionName
 *        回调脚本函数
 */
function drawFlag(shape, arrowInnerColorObj, arrowBorderColorObj, isDrawBorder,
		opacity, isTemp, functionName) {
	if (hasEarthObj()) {
		earthObj.getVectorGraphOption().drawFlag(shape, arrowInnerColorObj,
				arrowBorderColorObj, isDrawBorder, opacity, isTemp,
				functionName);
	}
}

/**
 * 根据信息添加地表矢量图形
 * 
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
function addSurfaceShapeFull(shapeName, shapeType, points, interiorColorObj,
		borderColorObj, opacity, isDrawBorder, lineWidth, minVisibleDist,
		maxVisibleDist, isTemp, url, frame) {
	if (hasEarthObj()) {
		return earthObj.getVectorGraphOption().addSurfaceShape(shapeName,
				shapeType, points, interiorColorObj, borderColorObj,
				opacity * 1, isDrawBorder, lineWidth * 1, minVisibleDist * 1,
				maxVisibleDist * 1, isTemp, url, frame);
	}
}
/**
 * 结束地表临时图形绘制，设置为临时图形的也将清除
 */
function endDrawShape() {
	if (hasEarthObj()) {
		earthObj.getVectorGraphOption().endDrawShape();
	}
}
/**
 * 通过图形的类型与其XML信息字符串进行删除
 * 
 * @param type
 *            图形类型(line, rectangle, circle, polygon)
 * @param xmlInfo
 *            图形信息字符串
 */
function removeSurfaceShape(type, xmlInfo) {
	if (hasEarthObj()) {
		earthObj.getVectorGraphOption().removeSurfaceShape(type, xmlInfo);
	}
}
/**
 * 删除矢量图形渲染图层中指定类型的图形
 * 
 * @param type
 *            图形类型,种类有"line","rectangle","circle","polygon","arrowline","swallowarrow","singleLine","flag"
 */
function removeAllSurfaceShapeOf(type) {
	if (hasEarthObj()) {
		earthObj.getVectorGraphOption().removeAllSurfaceShapeOf(type);
	}
}
/**
 * 移除地表上所有非临时矢量图形
 */
function removeAllSurfaceShape() {
	if (hasEarthObj()) {
		earthObj.getVectorGraphOption().removeAllSurfaceShape();
	}
}

