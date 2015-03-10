/**
 * @fileOverview 文字标注操作接口   
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.7
 */
/**
 * 在球上某位置添加文字标注
 * @param text
 *            文字标注内容
 * @param latitude
 *            标注位置纬度
 * @param longitude
 *            标注位置经度
 * @param altitude
 *            标注离地面高度
 * @param font
 *            标注字体编码，格式为"字体-字形-字体大小"，例："宋体-BOLD-14"
 * @param colorObj
 *            标注字体颜色RGB编码，格式为"RRGGBB"(16进制编码)，也可以输入基本颜色，如"yellow"
 */
function addLabel(text, latitude, longitude, altitude, fontCode, colorObj) {
	if (hasEarthObj()) {
		earthObj.getLabelOption().addLabel(text, latitude * 1, longitude * 1, altitude * 1, fontCode, colorObj);
	}
}
/**
 * 根据标注内容移除文字标注
 * @param text
 *            标注内容
 */
function removeLabel(text) {
	if (hasEarthObj()) {
		earthObj.getLabelOption().removeLabel(text);
	}
}
/**
 * 移除全部文字标注
 */
function removeAllLabel() {
	if (hasEarthObj()) {
		earthObj.getLabelOption().removeAllLabel();
	}
}

