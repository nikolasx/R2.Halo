/// <reference path="../Libs/jquery-1.7.1.min.js" />
$(function () {
    
})


function LoginShow() {
    this.userName = "";
    this.role = "";
    this.realName = "";

    this.init = function () {
        var cookieInfo = getCookie("JinanDisasterUserInfo");
        if (cookieInfo.split('$').length == 5) {
            this.userName = cookieInfo.split('$')[0];
            this.role = cookieInfo.split('$')[3];
            this.realName = cookieInfo.split('$')[4];
            Dl_userName = cookieInfo.split('$')[0];
            Dl_userPassword = cookieInfo.split('$')[2];
        }
        var userName = this.userName;
        this.contentHtml = '<div class="userclass">' + this.userName + ' | ' + this.realName + '</div><div id="userMana"><div class="usersxl"></div><div class="userBox">' +
                            '<div class="ResetUser"></div><div class="ModifyPwd"></div><div class="ManaUser"></div>' +
                             '</div></div>';
        //return '<div class="userclass">' + this.userName + ' | ' + this.realName + '</div><div class="usersxl"></div>';

        $(".top_right  .top_admin").html(this.contentHtml);

        //管理框 显示隐藏
        $("#userMana .usersxl").toggle(
            function () {
                $(this).css('background-image', 'url(' + baseUrl + 'Content/images/Login/08.png)');
                //$("#userMana .userBox").css("display", "block");
                $("#userMana .userBox").slideDown(500, function () { });
            },
            function () {
                $(this).css('background-image', 'url(' + baseUrl + 'Content/images/Login/07.png)');
                //$("#userMana .userBox").css("display", "none");
                $("#userMana .userBox").slideUp(500, function () { });
            })

   
        //注销用户
    $("#userMana .ResetUser").click(function () {
        delCookie("DalianDizhengSystemUserInfo");
        //location.href = baseUrl + 'Home/LogOut?userName=' + userName;
    });
   //修改密码
    $("#userMana .ModifyPwd").click(function () {
        var win = window.open(baseUrl + 'Home/ModifyPwd?userName=' + userName, '_blank');
        if (win == null) {
            alert('浏览器阻止弹出新窗口');
        }
    });
        //用户管理
    $("#userMana .ManaUser").click(function () {
        var role = getSysUserRole();
        if (role == "0" || role == "1" ) {
            var win = window.open(baseUrl + 'Home/UserManage', '_blank');
            if (win == null) {
                alert('浏览器阻止弹出新窗口');
            }
        }
        else {
            alert('您不是管理员，没有权限');
        }
    })

    };
};

