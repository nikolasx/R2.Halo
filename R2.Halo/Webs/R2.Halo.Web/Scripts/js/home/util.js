

//一些公用的插件javascript

//打开子功能
R2.Controller.ChildPanel = OpenLayers.Class({

    waitControl: null,

    //构造函数
    initialize: function () {
        this.waitControl = new R2.Controller.Wait({
            containerId: "childIframeDiv"
        });
        this.event();
    },

    showByIframe: function (url) {

        $("#content").hide();
        $("#childIframeDiv").show();
        this.waitControl && this.waitControl.addWaitPage();
        $("#childIframe").attr("src", url);
    },

    closeIframe: function () {

        $("#content").show();
        $("#childIframeDiv").hide();
        $("#childIframe").attr("src", "");

    },

    event: function () {
        var that = this;

        $("#childIframe").load(function () {
            that.waitControl && that.waitControl.closeWaitPage();
        });

    },

    ClassName: "R2.Controller.ChildPanel"
});

//屏蔽等待插件
R2.Controller.Wait = OpenLayers.Class({

    //需要屏蔽的Id,必传参数
    containerId: "id",
    //屏蔽页面说明
    //showTip: "",

    //构造函数
    initialize: function (option) {
        option = option || {};
        OpenLayers.Util.extend(this, option);
    },

    //添加屏蔽
    addWaitPage: function () {

        var str = '<div id="r2TransformWaitPageDiv">' +
                '<div id="r2TransformWaitImg"></div>' +
            '</div>';
        $("#" + this.containerId).append(str);
        $("#r2TransformWaitPageDiv").css({
            "position": "absolute",
            "left": "0",
            "top": "0",
            "right": "0",
            "bottom": "0",
            "z-index": "11100"
            //"background":"url("+window.baseUrl+"Content/images/img/greyBack.png) repeat"
        });
        $("#r2TransformWaitImg").css({
            "position": "absolute",
            "width": "124px",
            "height": "124px",
            "top": "45%",
            "left": "50%",
            "margin-top": "-62px",
            "margin-left": "-62px",
            "background": "url(" + window.baseUrl + "Content/images/img/wait.gif) no-repeat"
        });

    },

    //关闭屏蔽
    closeWaitPage: function () {
        $("#r2TransformWaitPageDiv").remove();
    },

    ClassName: "R2.Controller.Wait"
});