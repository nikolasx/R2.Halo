/// <reference path="../../libs/jquery-1.10.2.js" />
/// <reference path="../../libs/OpenLayers.Class.js" />



//主页的js


$(function () {


    //入口

    //用于功能页面跳转的插件
    R2.navPanel = new R2.Controller.ChildPanel();

    //加载初始APP页面

    var currentPage = new R2.Business.AppDisplayPage();

    //加载菜单
    var currentMenu = new R2.Business.UserMenuPanel();

    
});



//用户菜单

R2.Business.UserMenuPanel = OpenLayers.Class({

    items: ["账户设置", "管理员权限", "用户中心"],

    isOrdinaryVisitor: false, //普通游客 ordinary visitor

    userInfo: null,

    //构造函数
    initialize: function () {

        this.init();

        this.createPanel();
        this.event();
    },

    init: function () {
        var cookie = getUserInfoByCookie();
        if (cookie == null) {
            this.isOrdinaryVisitor = true;
        } else {
            if (cookie.role == "1") {
                //admin 
                this.items = ["账户设置", "管理员权限", "<a href='" + (window.baseUrl + "Login/Logout") + "'>退出</a>"];
            } else {
                // ordinary vip
                this.items = ["账户设置", "个人中心", "<a href='" + (window.baseUrl + "Login/Logout") + "'>退出</a>"];
            }
            this.userInfo = cookie;
        }
    },

    //创建菜单项面板

    createPanel: function () {

        var htmlStr;
        if (this.isOrdinaryVisitor) {
            //普通游客进来
            htmlStr = '<div id="userName">游客，请登录</div>';
            $("#userInfo").html(htmlStr);
            $("#userName").css("font-size", "12px");
        } else {
            htmlStr = '<div id="userName">' + this.userInfo.userName + '</div>' +
                      '<div id="menuTipIcon"></div>' +
                      '<div id="userMenuPanel">' +
                         '<div id="munuHead"></div>' +
                         '<div id="menuContent">' +
                         '</div>' +
                      '<div id="menuBottom"></div>' +
                      '</div>';
            $("#userInfo").html(htmlStr);
            var str = '';
            for (var i = 0; i < this.items.length; i++) {
                str += '<div class="menuItem">' + this.items[i] + '</div>';
            }
            $("#menuContent").html(str);
        }

    },

    //事件
    event: function () {
        var that = this;
        //头部用户信息事件
        $("#userInfo").click(function () {
            if (that.isOrdinaryVisitor) {
                window.location.href = window.baseUrl + "Login/Login";
            } else {
                if ($("#userMenuPanel").is(":visible")) {
                    $("#userMenuPanel").hide();
                } else {
                    $("#userMenuPanel").show();
                }
            }
        });
        $("#userMenuPanel").mouseleave(function () {
            $(this).hide();
        });

        //菜单项点击事件
        $(".menuItem").click(function () {
            var index = $(".menuItem").index(this);

            R2.navPanel.closeIframe();

            if (index == 0) {
                var currentPage = new R2.Business.UserSetting();
            }
            if (index == 1 && $(this).text() == "管理员权限") {
                var currentPage = new R2.Business.AdminPowerPage();
            }
            if (index == 1 && $(this).text() == "个人中心") {
                var currentPage = new R2.Business.PersonalZone();
            }
        });

        //主页跳转
        $("#navHome").click(function () {

            R2.navPanel && R2.navPanel.closeIframe();

            var currentPage = new R2.Business.AppDisplayPage();
        });

        //退出
        $("#navOut").click(function () {

            window.location.href = window.baseUrl + "Login/Login";
            //$(".menuItem>a").trigger("click");
        });
    },

    CLASSNAME: "R2.Business.UserMenuPanel"
});






