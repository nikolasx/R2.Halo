/// <reference path="../../libs/jquery-1.10.2.js" />
/// <reference path="../../libs/OpenLayers.Class.js" />
/// <reference path="../../libs/jquery-ui.js" />


//角色添加和管理的js


R2.Business.RoleManagePage = OpenLayers.Class({

    //容器的Id
    containerId: "RoleManagePage",
    //是否刷新页面
    refresh: true,
    //是否是角色修改页面,默认为添加角色页面
    managePage: false,
    roleId: "",
    roleTitle: "",

    //用户和APP是否处于可编辑状态
    isAddAppEdit: true,
    isAddUserEdit: true,


    //数据
    AvailableApps: [],
    AllApps: [],

    AvailableUsers: [],
    AllUsers: [],

    //构造函数
    initialize: function (option) {

        $("#" + this.containerId).show().siblings().hide();
        option = option || {};
        OpenLayers.Util.extend(this, option);
        if (!this.refresh) {
            return;
        }

        this.init();
        if (this.managePage) {
            this.isAddAppEdit = false;
            this.isAddUserEdit = false;
        }

        this.createPanel();

        this.getData();
        this.event();
    },

    init: function () {
        ///初始化类中的一些数据，
        ///OpenLayers中的{}，[],取消原型对象中的特性
        this.AvailableApps = [];
        this.AvailableUsers = [];
        this.AllApps = [];
        this.AllUsers = [];
    },

    //获取数据

    getData: function () {
        var that = this;

        if (!this.managePage) {
            //添加新角色时
            //获取所有的APP
            $.post(window.baseUrl + "APP/List", {}, function (cbdata) {
                var data = JSON.parse(cbdata);
                if (data.Data && data.Data instanceof Array) {
                    that.AllApps = data.Data;
                    that.addApps();
                }
            });

            //获取未分角色的用户
            $.post(window.baseUrl + "Role/GetNoAddedUserList", {}, function (cbdata) {
                var data = JSON.parse(cbdata);
                if (data && data instanceof Array) {
                    that.AllUsers = data;
                    that.addUsers();
                }
            });
        } else {
            //编辑角色
            //获取该角色的可用APP
            $.post(window.baseUrl + "Role/Detail", { id: that.roleId }, function (cbdata) {
                var data = JSON.parse(cbdata);
                that.AvailableApps = data.AddedApp;
                that.AllApps = data.NoAddedApp;
                that.AvailableUsers = data.AddedUser;
                that.AllUsers = data.NoAddedUser;
                that.addApps();
                that.addUsers();
            });

        }


    },


    //界面展示
    createPanel: function () {

        var htmlStr = '<div class="roleManageHead">' +
                         '<div class="roleManageItem">角色</div><div class="roleManageItem">添加角色</div>' +
                      '</div>' +
                      '<div class="roleManageName"><input id="roleManageTitle" value="' + this.roleTitle + '"/></div>' +
                      //添加APP
                      '<div class="roleManageTip">添加APP</div>' +
                      '<div class="roleManageItemTip">APP<div class="roleManageOpenTipStyle" id="roleManageOpenApp">关闭</div></div>' +
                      '<div class="roleManageAvailableAppBox"></div>' +
                      '<div class="roleManageItemTip">可供添加APP</div>' +
                      '<div class="roleManageAllAppBox"></div>' +
                      //添加用户
                      '<div class="roleManageTip">添加用户</div>' +
                      '<div class="roleManageItemTip">用户<div class="roleManageOpenTipStyle" id="roleManageOpenUser">关闭</div></div>' +
                      '<div class="roleManageAvailableUserBox"></div>' +
                      '<div class="roleManageItemTip">可供添加用户</div>' +
                      '<div class="roleManageAllUserBox"></div>' +
                      //底部按钮
                      '<div class="roleManageBottomBox">' +
                        '<div class="roleManageBtnBox">' +
                          '<div id="roleManageSubmitBtn" class="roleManageBtnStyle">确定</div>' +
                          '<div id="roleManageCancelBtn" class="roleManageBtnStyle">取消</div>' +
                        '</div>' +
                      '</div>';
        $("#" + this.containerId).html(htmlStr);


        if (this.managePage) {
            $(".roleManageItem").eq(1).css("color", "#c5c5c5");
        } else {
            $(".roleManageItem").eq(0).css("color", "#c5c5c5");
        }

        //是否处于非编辑状态
        if (!this.isAddAppEdit) {
            $("#roleManageOpenApp").text("编辑");
            $(".roleManageTip").eq(0).hide();
            $(".roleManageItemTip").eq(1).hide();
            $(".roleManageAllAppBox").hide();
        }
        if (!this.isAddUserEdit) {
            $("#roleManageOpenUser").text("编辑");
            $(".roleManageTip").eq(1).hide();
            $(".roleManageItemTip").eq(3).hide();
            $(".roleManageAllUserBox").hide();
        }
    },

    //添加App图标
    addApps: function () {
        var that = this;
        //向所有App框中添加图标
        var allAppCount = this.AllApps.length;
        if (allAppCount == 0) {
            $(".roleManageAllAppBox").css("height", "150px");
            that.isAddAppEdit && $(".roleManageAllAppBox").text("没有可供添加APP");
        } else {
            $(".roleManageAllAppBox").empty();
            $(".roleManageAllAppBox").css("height", (Math.ceil(allAppCount / 9) * 110 + 40) + "px");
            for (var i = 0; i < allAppCount; i++) {
                var str = '<img class="roleManageAllAppIcon" title="' + this.AllApps[i].AppName + '"/>';
                $(".roleManageAllAppBox").append(str);
                $(".roleManageAllAppIcon").eq(i).attr("src", window.baseUrl + "Content/images/appIcons/" + window.getAppImg(this.AllApps[i].AppId));
                if ((i % 9) == 0) {
                    $(".roleManageAllAppIcon").eq(i).css("margin-left", "0");
                }
            }
        }
        //向app框中添加图标
        var availableAppCount = this.AvailableApps.length;
        if (availableAppCount == 0) {
            that.isAddUserEdit && $(".roleManageAvailableAppBox").text("将下面APP添加到此区域");
            $(".roleManageAvailableAppBox").css("height", "150px");
        } else {
            $(".roleManageAvailableAppBox").empty();
            $(".roleManageAvailableAppBox").css("height", (Math.ceil(availableAppCount / 9) * 110 + 40) + "px");
            for (i = 0; i < availableAppCount; i++) {
                str = '<img class="roleManageAvailableAppIcon" title="' + this.AvailableApps[i].AppName + '"/>';
                $(".roleManageAvailableAppBox").append(str);
                $(".roleManageAvailableAppIcon").eq(i).attr("src", window.baseUrl + "Content/images/appIcons/" + window.getAppImg(this.AvailableApps[i].AppId));
                if ((i % 9) == 0) {
                    $(".roleManageAvailableAppIcon").eq(i).css("margin-left", "0");
                }
            }
        }

        //添加APP事件
        $(".roleManageAllAppIcon").click(function () {
            var index = $(".roleManageAllAppIcon").index(this);
            var app = that.AllApps[index];
            that.AllApps.splice(index, 1);
            that.AvailableApps.push(app);
            that.addApps();
        });
        //删除APP事件
        $(".roleManageAvailableAppIcon").click(function () {
            if (!that.isAddAppEdit) return; //非编辑状态
            var index = $(".roleManageAvailableAppIcon").index(this);
            var app = that.AvailableApps[index];

            that.AvailableApps.splice(index, 1);
            that.AllApps.push(app);
            that.addApps();
        });
    },


    //添加用户图标
    addUsers: function () {
        var that = this;
        var userCircleColors = ["#97d6f4", "#b9e5bc", "#ece6a2", "#f2d2a1"];
        //添加所有的用户图标
        var allUserCount = this.AllUsers.length;
        if (allUserCount == 0) {
            $(".roleManageAllUserBox").css("height", "150px");
            $(".roleManageAllUserBox").text("没有可供添加用户");
        } else {
            $(".roleManageAllUserBox").empty();
            $(".roleManageAllUserBox").css("height", (Math.ceil(allUserCount / 9) * 110 + 40) + "px");
            for (var i = 0; i < allUserCount; i++) {
                var str = '<div class="roleManageAllUserDiv">' + this.AllUsers[i].Name + '</div>';
                $(".roleManageAllUserBox").append(str);
                $(".roleManageAllUserDiv").eq(i).css("border", "1px solid \t" + userCircleColors[i % 4]);
                if (i % 9 == 0) {
                    $(".roleManageAllUserDiv").eq(i).css("margin-left", "0");
                }
            }
        }
        //添加分配给该角色的用户图标
        var availableCount = this.AvailableUsers.length;
        if (availableCount == 0) {
            $(".roleManageAvailableUserBox").css("height", "150px");
            that.isAddUserEdit && $(".roleManageAvailableUserBox").text("将下面用户添加到此区域");
        } else {
            $(".roleManageAvailableUserBox").empty();
            $(".roleManageAvailableUserBox").css("height", (Math.ceil(availableCount / 9) * 110 + 40) + "px");
            for (i = 0; i < availableCount; i++) {
                str = '<div class="roleManageAvailableDiv">' + this.AvailableUsers[i].Name + '</div>';
                $(".roleManageAvailableUserBox").append(str);
                $(".roleManageAvailableDiv").eq(i).css("border", "1px solid \t" + userCircleColors[i % 4]);
                if (i % 9 == 0) {
                    $(".roleManageAvailableDiv").eq(i).css("margin-left", "0");
                }
            }
        }

        //添加用户事件
        $(".roleManageAllUserDiv").click(function () {
            var index = $(".roleManageAllUserDiv").index(this);
            var user = that.AllUsers[index];
            that.AllUsers.splice(index, 1);
            that.AvailableUsers.push(user);
            that.addUsers();
        });
        //删除用户事件
        $(".roleManageAvailableDiv").click(function () {
            if (!that.isAddUserEdit) return; //非编辑状态
            var index = $(".roleManageAvailableDiv").index(this);
            var user = that.AvailableUsers[index];
            that.AvailableUsers.splice(index, 1);
            that.AllUsers.push(user);
            that.addUsers();
        });
    },

    //事件
    event: function () {
        var that = this;
        //底部确定和取消按钮事件
        $("#roleManageSubmitBtn").click(function () {
            var appStr = "", userStr = "";
            for (var i = 0; i < that.AvailableApps.length; i++) {
                if (i != that.AvailableApps.length - 1) {
                    appStr += that.AvailableApps[i].AppId + ",";
                } else {
                    appStr += that.AvailableApps[i].AppId;
                }
            }
            for (i = 0; i < that.AvailableUsers.length; i++) {
                if (i != that.AvailableUsers.length - 1) {
                    userStr += that.AvailableUsers[i].Id + ",";
                } else {
                    userStr += that.AvailableUsers[i].Id;
                }
            }
            if (!that.managePage) {
                //新增角色提交
                var data = {
                    Title: $("#roleManageTitle").val(),
                    RoleAppTag: appStr,
                    UserTag: userStr
                };
                $.post(window.baseUrl + "Role/Create", data, function (cbdata) {
                    if (cbdata == "success") {
                        var currentPage = new R2.Business.AdminPowerPage();
                    } else {
                        alert("添加失败！");
                    }
                });
            } else {
                //编辑角色提交
                var data = {
                    Id: that.roleId,
                    Title: $("#roleManageTitle").val(),
                    RoleAppTag: appStr,
                    UserTag: userStr

                };
                $.post(window.baseUrl + "Role/Edit", data, function (cbdata) {

                    if (cbdata == "success") {
                        var currentPage = new R2.Business.AdminPowerPage();
                    } else {
                        alert("提交失败");
                    }
                });
            }

        });

        $("#roleManageCancelBtn").click(function () {
            $("#content>div").hide();
            var currentPage = new R2.Business.AdminPowerPage({ refresh: false });
        });

        //展开关闭事件
        $("#roleManageOpenApp").click(function () {
            if ($(".roleManageAllAppBox").is(":visible")) {
                that.isAddAppEdit = false;
                $(this).text("编辑");
                that.AvailableApps.length == 0 && $(".roleManageAvailableAppBox").text("");
                $(".roleManageTip").eq(0).hide();
                $(".roleManageItemTip").eq(1).hide();
                $(".roleManageAllAppBox").hide();
            } else {
                that.isAddAppEdit = true;
                $(this).text("关闭");
                that.AvailableApps.length == 0 && $(".roleManageAvailableAppBox").text("将下面APP添加到此区域");
                $(".roleManageTip").eq(0).show();
                $(".roleManageItemTip").eq(1).show();
                $(".roleManageAllAppBox").show();
            }
        });
        $("#roleManageOpenUser").click(function () {
            if ($(".roleManageAllUserBox").is(":visible")) {
                that.isAddUserEdit = false;
                $(this).text("编辑");
                that.AvailableUsers.length == 0 && $(".roleManageAvailableUserBox").text("");
                $(".roleManageTip").eq(1).hide();
                $(".roleManageItemTip").eq(3).hide();
                $(".roleManageAllUserBox").hide();
            } else {
                that.isAddUserEdit = true;
                $(this).text("关闭");
                that.AvailableUsers.length == 0 && $(".roleManageAvailableUserBox").text("将下面用户添加到此区域");
                $(".roleManageTip").eq(1).show();
                $(".roleManageItemTip").eq(3).show();
                $(".roleManageAllUserBox").show();
            }
        });

    },

    clear: function () {
        $("#" + this.containerId).empty();
    },

    CLASSNAME: "R2.Business.RoleManagePage"
});