//建立公共的全局对象
//此处为最先加载的js,包含系统全局方法和初始化的变量。

(function Main() {

    //添加全局变量
    window.R2 = {};
    R2.Business = {};
    R2.Controller = {};

})();



//获取用户cookie信息
function getUserInfoByCookie() {
    var cok = document.cookie.match(new RegExp("(^| )" + "userinfo" + "=([^;]*)(;|$)"));
    if (cok != null) {
        var cokInfoArr = window.decodeURI(cok[2]).split('|');
        return {
            userId: cokInfoArr[0],
            userName: cokInfoArr[1],
            account: cokInfoArr[2],
            role: cokInfoArr[3]
        }
    }
    return null;
}

//APP名称与图片对应方法
//TODO 这种图片处理方式是临时对应的，以后要保存到数据库中
function getAppImg(appName) {

    switch (appName) {
        case 1:
            return "appIcon1.png";
        case 2:
            return "appIcon2.png";
        case 3:
            return "appIcon3.png";
        case 4:
            return "appIcon4.png";
        case 5:
            return "appIcon5.png";
        case 6:
            return "appIcon6.png";
        case 7:
            return "appIcon7.png";
        case 8:
            return "appIcon8.png";
        case 9:
            return "appIcon9.png";
        case 10:
            return "appIcon10.png";

        default:
            return "";
    }
}