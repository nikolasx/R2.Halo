
function indexResetUser() {
    var cookieInfo = getCookie("JinanDisasterUserInfo");
    var userName = "";
    if (cookieInfo.split('$').length == 5) {
        userName = cookieInfo.split('$')[0];
    }
    delCookie("DalianDizhengSystemUserInfo");
    location.href = baseUrl + 'Home/LogOut?userName=' + userName;
}
function indexModifyPwd() {
    var cookieInfo = getCookie("JinanDisasterUserInfo");
    var userName = "";
    if (cookieInfo.split('$').length == 5) {
        userName = cookieInfo.split('$')[0];
    }
    var win = window.open(baseUrl + 'Home/ModifyPwd?userName=' + userName, '_blank');
    if (win == null) {
        alert('浏览器阻止弹出新窗口');
    }
};
function indexShowuser() {
    var role = getSysUserRole();
    if (role == "0" || role == "1") {
        var win = window.open(baseUrl + 'Home/UserManage', '_blank');
        if (win == null) {
            alert('浏览器阻止弹出新窗口');
        }
    }
    else {
        alert('您不是管理员，没有权限');

    }
}