
/**   
 * @fileOverview 地球初始化
 * @author <a href="http://www.mapgis.com.cn">ZondyCyber</a>   
 * @version 1.6 
 */
/**
 * 地球初始化标识
 */
var startFlag = false;
/**
 * 地球接口调用对象
 */
var earthObj = null;
/**
 * 地球初始化后回调函数
 */
function appletStart() {
	startFlag = true;
}
/**
 * 判断是否有地球接口调用对象
 * 
 * @return true或false
 */
function hasEarthObj() {
    if (startFlag) {
        //ZHAOs 2014年7月29日18:57:13
        var isearthobjexist = document.getElementById("isEarthObjExist");
        isearthobjexist.innerText = "true";

		if (earthObj != null && earthObj != "") {
			return true;
		}
		var appletObj = document.getElementById("vejApplet");
		if (appletObj != null) {
			earthObj = appletObj.getSubApplet();
			if (earthObj != null) {
				return true;
			}
		}
	}
	return false;
}

