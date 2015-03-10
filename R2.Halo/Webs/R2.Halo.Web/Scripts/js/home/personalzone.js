/// <reference path="../../libs/jquery-1.10.2.js" />
/// <reference path="../../libs/OpenLayers.Class.js" />


//个人中心的javascript


R2.Business.PersonalZone = OpenLayers.Class({
    containerId: "PersonalZonePage",
    userInfo: null,

    FancyApps: [],
    AvailableApps: [],

    //构造函数
    initialize: function () {
        $("#" + this.containerId).show().siblings().hide();

        this.userInfo = window.getUserInfoByCookie();
        this.createPanel();
        this.event();
        this.getData();
    },

    getData: function () {
        var that = this;
        $.post(window.baseUrl + "User/GetAccessAppList", {}, function (cbdata) {
            var data = JSON.parse(cbdata);
            if (data && data instanceof Array) {
                that.AvailableApps = data;
                //请求常用APP
                $.post(window.baseUrl + "User/GetFancyAppList", {}, function (cbdata) {

                    var data = JSON.parse(cbdata);
                    if (data && data instanceof Array) {
                        that.FancyApps = data;
                        that.addApps();
                    }
                });
            }
        });
    },
    //创建面板
    createPanel: function () {
        var htmlStr = '<div class="zoneHead">' + (this.userInfo && this.userInfo.userName) + '</div>' +
                      '<div class="zoneTipItem">常用APP</div>' +
                      '<div class="zoneCommonAppBox"></div>' +
                      '<div class="zoneTipItem">可供添加APP</div>' +
                      '<div class="zoneAvailableAppBox"></div>' +
                      //底部按钮
                      '<div class="zoneBottomBox">' +
                        '<div class="zoneBtnBox">' +
                          '<div id="zoneSubmitBtn" class="zoneBtnStyle">确定</div>' +
                          '<div id="zoneCancelBtn" class="zoneBtnStyle">取消</div>' +
                        '</div>' +
                      '</div>';
        $("#" + this.containerId).html(htmlStr);

    },

    addApps: function () {
        var that = this;
        //添加常用APP图标 add the icons of common applications
        var fancyCount = this.FancyApps.length;
        //dynamic set the height of box
        if (fancyCount == 0) {
            $(".zoneCommonAppBox").css("height", "150px");
        } else {
            $(".zoneCommonAppBox").css("height", (Math.ceil(fancyCount / 9) * 110 + 40) + "px");
        }
        $(".zoneCommonAppBox").empty();
        for (var i = 0; i < fancyCount; i++) {
            var str = '<img class="zoneCommonIcon" title="' + this.FancyApps[i].AppName + '"/>';
            $(".zoneCommonAppBox").append(str);
            $(".zoneCommonIcon").eq(i).attr("src", window.baseUrl + "Content/images/appIcons/" + window.getAppImg(that.FancyApps[i].AppId));
            if ((i % 9) == 0) {
                $(".zoneCommonIcon").eq(i).css("margin-left", "0");
            }
        }
        //添加可用的APP图标
        var availableCount = this.AvailableApps.length;
        if (availableCount == 0) {
            $(".zoneAvailableAppBox").css("height", "150px");
        } else {
            $(".zoneAvailableAppBox").css("height", (Math.ceil(availableCount / 9) * 110 + 40) + "px");
        }
        $(".zoneAvailableAppBox").empty();
        for (i = 0; i < availableCount; i++) {
            str = '<img class="zoneAvailableIcon" title="' + this.AvailableApps[i].AppName + '"/>';
            $(".zoneAvailableAppBox").append(str);
            $(".zoneAvailableIcon").eq(i).attr("src", window.baseUrl + "Content/images/appIcons/" + window.getAppImg(this.AvailableApps[i].AppId));
            if ((i % 9) == 0) {
                $(".zoneAvailableIcon").eq(i).css("margin-left", "0");
            }
        }


        //添加APP事件
        $(".zoneAvailableIcon").click(function () {
            var index = $(".zoneAvailableIcon").index(this);
            var app = that.AvailableApps[index];
            that.AvailableApps.splice(index, 1);
            that.FancyApps.push(app);
            that.addApps();
        });
        //删除APP事件
        $(".zoneCommonIcon").click(function () {
            var index = $(".zoneCommonIcon").index(this);
            var app = that.FancyApps[index];
            that.FancyApps.splice(index, 1);
            that.AvailableApps.push(app);
            that.addApps();
        });

    },



    //事件
    event: function () {
        var that = this;

        //底部按钮事件
        //commit button event
        $("#zoneSubmitBtn").click(function () {
            var appStr = '';
            for (var i = 0; i < that.FancyApps.length; i++) {
                if (i < (that.FancyApps.length - 1)) {
                    appStr += that.FancyApps[i].AppId + ",";
                } else {
                    appStr += that.FancyApps[i].AppId;
                }
            }
            $.post(window.baseUrl + "User/AddAndEditFancyApps", { fancyTag: appStr }, function (cbdata) {

                if (cbdata == "success") {
                    $("#zoneCancelBtn").trigger("click");
                } else {
                    alert(cbdata);
                }
            });

        });
        // cancel button event
        $("#zoneCancelBtn").click(function () {
            $("#content>div").hide();
            var currentPage = new R2.Business.AppDisplayPage();
        });

    },

    clear: function () {
        $("#" + this.containerId).empty();
    },

    CLASSNAME: "R2.Business.PersonalZone"
});