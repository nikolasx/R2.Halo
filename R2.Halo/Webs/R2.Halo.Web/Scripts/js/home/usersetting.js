/// <reference path="../../libs/jquery-1.10.2.js" />
/// <reference path="../../libs/OpenLayers.Class.js" />



//账号设置的javascript

R2.Business.UserSetting = OpenLayers.Class({

    containerId: "UserSettingPage",

    userInfo: {},

    //构造函数
    initialize: function (option) {

        $("#" + this.containerId).show().siblings().hide();
        option = option || {};
        OpenLayers.Util.extend(this, option);

        this.userInfo = window.getUserInfoByCookie();
        this.createPanel();
        this.event();
    },

    //建搭界面
    createPanel: function () {

        var htmlStr = '<div class="userSetHead">用户信息</div>' +
                      '<div class="userSetUserInfoBox">' +
                        '<div class="userSetInfoRow"><div class="userSetInfoTip">用户名：</div><div class="userSetInfo">' + this.userInfo.userName + '</div></div>' +
                        '<div class="userSetInfoRow"><div class="userSetInfoTip">账号：</div><div class="userSetInfo">' + this.userInfo.account + '</div></div>' +
                        '<div class="userSetInfoRow"><div class="userSetInfoTip">密码：</div><div class="userSetInfo">******</div><div id="userSetModifyBtn">修改</div></div>' +
                      '</div>' +
                      '<div class="userSetModifyBox">' +
                         '<div class="userSetModifyRow">' +
                            '<div class="userSetModifyTip">当前密码：</div>' +
                            '<div class="userSetModifyInputDiv"><input id="currentPwd" type="password"/></div>' +
                         '</div>' +
                         '<div class="userSetModifyRow">' +
                            '<div class="userSetModifyTip">密码：</div>' +
                            '<div class="userSetModifyInputDiv"><input id="newPwd" type="password"/></div>' +
                         '</div>' +
                         '<div class="userSetModifyRow">' +
                            '<div class="userSetModifyTip">确认密码：</div>' +
                            '<div class="userSetModifyInputDiv"><input id="confirmPwd" type="password"/></div>' +
                         '</div>' +
                         '<div class="userSetModifyRow">' +
                             '<div id="userSetSubmitBtn" class="userSetBtnStyle">确定</div>' +
                             '<div id="userSetCancelBtn" class="userSetBtnStyle">取消</div>' +
                         '</div>' +
                      '</div>' +
                      '<div class="userSetReturnBtn">返回</div>';
        $("#" + this.containerId).html(htmlStr);
    },

    //事件
    event: function () {
        var that = this;

        $("#userSetModifyBtn").click(function () {
            if (!$(".userSetModifyBox").is(":visible")) {
                $(this).html("收起");
                $(".userSetModifyBox").show();
            } else {
                $(this).html("修改");
                $(".userSetModifyBox").hide();
            }
        });
        //提交

        $("#userSetSubmitBtn").click(function () {

            var currentPwd = $("#currentPwd").val();
            var newPwd = $("#newPwd").val();
            var confirmPwd = $("#confirmPwd").val();

            if (newPwd != confirmPwd) {
                alert("密码与确认密码不一致");
            } else {

                $.post(window.baseUrl + "User/Detail", { id: that.userInfo.userId }, function (cbdata) {

                    var data = JSON.parse(cbdata);
                    if (data.Password == currentPwd) {
                        //密码正确，允许提交
                        var postData = {
                            Id: that.userInfo.userId,
                            Name: that.userInfo.userName,
                            Password: newPwd,
                            Account: that.userInfo.account,
                            RoleId: that.userInfo.role
                        };
                        $.post(window.baseUrl + "User/Edit", postData, function (cbdata) {

                            if (cbdata == "success") {
                                window.location.href = window.baseUrl + "Login/Login";
                            } else {
                                alert("修改失败");
                            }
                        });
                    } else {
                        alert("当前密码输入错误");
                    }
                });
            }
        });

        $("#userSetCancelBtn").click(function () {
            $("#currentPwd").val("");
            $("#newPwd").val("");
            $("#confirmPwd").val("");
        });

        //返回
        $(".userSetReturnBtn").click(function() {
            
            var currentPage = new R2.Business.AppDisplayPage();
        });

    },

    CLASSNAME: "R2.Business.UserSetting"
});