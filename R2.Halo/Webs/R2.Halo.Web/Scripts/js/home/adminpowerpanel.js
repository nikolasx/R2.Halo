/// <reference path="../../libs/jquery-1.10.2.min.js" />
/// <reference path="../../libs/OpenLayers.Class.js" />

//管理员进入权限管理主页面


R2.Business.AdminPowerPage = OpenLayers.Class({

    //容器Id
    containerId: "AdminPowerPage",
    //是否刷新页面
    refresh: true,

    roles: null,
    users: null,

    //构造函数
    initialize: function (option) {

        $("#" + this.containerId).show().siblings().hide();
        option = option || {};
        OpenLayers.Util.extend(this, option);
        if (!this.refresh) {
            return;
        }
        this.createPagePanel();
        this.getData();
        //this.event(); //事件处理函数
    },



    //获取数据
    getData: function () {
        var that = this;
        //查询角色
        $.post(window.baseUrl + "Role/List", {}, function (cbdata) {

            var data = JSON.parse(cbdata);
            if (data.Data && data.Data instanceof Array) {
                //去除default角色
                that.roles = data.Data.filter(function (item) {
                    return item.Title != "default";
                });
                //that.roles = data.Data;
                that.addRoles();
            }
        });

        //查询用户
        $.post(window.baseUrl + "User/List", {}, function (cbdata) {

            var data = JSON.parse(cbdata);
            if (data.Data && data.Data instanceof Array) {

                that.users = data.Data;
                that.addUsers();
            }
        });

    },
    //创建页面布局
    createPagePanel: function () {
        var that = this;
        var htmlStr = '<div class="adminHomeTip">角色</div>' +
                      '<div id="adminRoleContent">' +
                            //添加角色按钮
                            '<div id="adminRoleAdd"><div id="adminRoleAddIcon"></div></div>' +
                      '</div>' +
                      '<div class="adminHomeTip">用户</div>' +
                      '<div id="adminUserContent">' +
                            //添加用户按钮
                            '<div id="adminUserAdd"><div id="adminUserAddIcon"></div></div>' +
                      '</div>';
        $("#" + this.containerId).html(htmlStr);

    },

    //添加角色图标

    addRoles: function () {
        var that = this;
        //添加角色图标
        var roleBorderColors = ["#92d4f3", "#b3e3b6", "#ebe59d", "#f0d09e"];
        var roleBackColors = ["#f7fcfd", "#fbfffb", "#fefefa", "#fefcf9"];
        $("#adminRoleContent").html('<div id="adminRoleAdd"><div id="adminRoleAddIcon"></div></div>');
        for (var i = 0; i < this.roles.length; i++) {
            var str = '<div class="adminRoleDiv">' + this.roles[i].Title + '</div>';
            $("#adminRoleContent").append(str);

            //角色动态样式调整
            $(".adminRoleDiv").eq(i).css({
                "border": "1px solid \t" + roleBorderColors[i % 4],
                "background-color": roleBackColors[i % 4]
            });
            if ((i + 1) % 5 == 0) {
                $(".adminRoleDiv").eq(i).css("margin-left", "0");
            }
        }
        var roleRows = Math.ceil((this.roles.length + 1) / 5);
        $("#adminRoleContent").css("height", roleRows * 205 + "px");


        //添加角色
        $("#adminRoleAdd").click(function () {
            var currentPage = new R2.Business.RoleManagePage();
        });
        //管理角色
        $(".adminRoleDiv").click(function () {
            var index = $(".adminRoleDiv").index(this);
            var currentPage = new R2.Business.RoleManagePage({
                managePage: true,
                roleId: that.roles[index].Id,
                roleTitle: that.roles[index].Title
            });
        });

    },


    //添加用户图标

    addUsers: function () {

        var that = this;
        //添加用户图标
        var userCircleColors = ["#97d6f4", "#b9e5bc", "#ece6a2", "#f2d2a1"];
        $("#adminUserContent").html('<div id="adminUserAdd"><div id="adminUserAddIcon"></div></div>');
        for (var j = 0; j < this.users.length; j++) {
            str = '<div class="adminUserDiv">' +
                     '<div class="adminUserIcon">' + this.users[j].Name + '<div>' +
                     '<div class="adminUserInfo">' + this.users[j].RoleName + '</div>' +
                '</div>';
            $("#adminUserContent").append(str);
            //用户动态样式调整
            $(".adminUserIcon").eq(j).css("border", "1px solid \t" + userCircleColors[j % 4]);
            if (j > 0 && j % 8 == 0) {
                $(".adminUserDiv").eq(j).css("margin-left", "0");
            }
        }

        //添加新用户
        $("#adminUserAdd").click(function () {
            //添加模态
            var str = '<div class="addRoleBack">' +
                         '<div class="addRoleBox">' +
                            '<div class="addRoleHead"><div class="addRoleHeadTip">新建用户</div><div class="addRoleClose" title="关闭"></div></div>' +
                            '<div class="addRoleInputBox"><div class="addRoleTip">用户名：</div><div class="addRoleInputDiv"><input id="addRoleName"/></div></div>' +
                            '<div class="addRoleInputBox"><div class="addRoleTip">账号：</div><div class="addRoleInputDiv"><input id="addRoleAccount"/></div></div>' +
                            '<div class="addRoleInputBox"><div class="addRoleTip">密码：</div><div class="addRoleInputDiv"><input id="addRolePwd" value="888888"/></div><div class="addRoleModifyPwd">修改</div></div>' +
                            '<div class="addRoleInputBox addRoleInputBoxHidden"><div class="addRoleTip">确认密码：</div><div class="addRoleInputDiv"><input id="addRoleConfirmPwd" value="888888"/></div></div>' +
                            //
                            '<div class="addRoleFirstLoginTip"><input type="checkbox" checked/><div class="addRoleFirstLoginTipLabel">首次登陆请修改初始密码</div></div>' +
                            '<div class="addRoleSubmit">确 定</div>' +

                         '</div>' +
                      '</div>';
            $("body").append(str);

            //注册点击事件
            //关闭
            $(".addRoleClose").click(function () {
                $(".addRoleBack").remove();
            });

            //修改密码
            var count = 0;
            $(".addRoleModifyPwd").click(function () {
                if ((count++) % 2 == 0) {
                    $(".addRoleInputBoxHidden").show();
                    $(this).text("使用默认");
                    $("#addRolePwd,#addRoleConfirmPwd").val("");
                } else {
                    $(".addRoleInputBoxHidden").hide();
                    $(this).text("修改");
                    $("#addRolePwd,#addRoleConfirmPwd").val("888888");
                }
            });
            //确认
            $(".addRoleSubmit").click(function () {

                if ($("#addRoleName").val().trim() == "" || $("#addRoleAccount").val().trim() == "") {
                    alert("用户名或账号不能为空");
                    return;
                }

                if ($("#addRolePwd").val() != $("#addRoleConfirmPwd").val()) {
                    alert("密码与确认密码不一致");
                    return;
                }
                var data = {
                    Name: $("#addRoleName").val(),
                    Account: $("#addRoleAccount").val(),
                    Password: $("#addRolePwd").val()
                };

                $.post(window.baseUrl + "User/Create", data, function (cbdata) {

                    if (cbdata == "success") {
                        that.getData();
                    } else {
                        alert(cbdata);
                    }
                });

                $(".addRoleClose").trigger("click");
            });
        });

    },
    //事件处理方法
    event: function () {


    },

    CLASSNAME: "R2.Business.AdminPowerPage"
});
