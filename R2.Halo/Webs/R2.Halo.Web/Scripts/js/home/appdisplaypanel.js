

//app展示主页面


R2.Business.AppDisplayPage = OpenLayers.Class({

    //当前DIV容器id，默认初始化
    // id for the div as the container of this page
    containerId: "AppDisplayPage",
    //是否新刷,刷新会重新查询数据，刷新页面
    //refresh the page,and the data load again
    refresh: true,

    isVip: false, //是否是会员

    //每一行显示的App数量
    //the count of apps as each row to show 
    countForEveryRow: 6,

    //组名数组
    data: [],


    /***
    *   构造函数
    *   onlyShow  bool  true：仅仅加载当前div内容；false：重新加载数据，内容初始化
    *   option 类内部参数赋值
    */
    initialize: function (option) {

        $("#" + this.containerId).show().siblings().hide();

        option = option || {};
        OpenLayers.Util.extend(this, option);
        if (!this.refresh) {
            return;
        }
        this.getData();
        this.openIframe = new R2.Controller.ChildPanel();
    },

    getData: function () {

        var that = this;
        var cookie = getUserInfoByCookie();
        if (cookie == null) {
            //ordinary visitor
            var url = window.baseUrl + "Home/GetPublicApp";

            $.post(url, {}, function (cbdata) {
                var array = JSON.parse(cbdata);

                that.data = array;
                that.showAllApp();
            });
        } else {
            //vip or admin
            var url = window.baseUrl + "User/GetFancyAppAndAppCategory";

            $.post(url, {}, function (cbdata) {
                var array = JSON.parse(cbdata);

                that.data = array;
                that.showAllApp();
            });
        }
    },

    //添加每个组
    showAllApp: function () {
        $("#" + this.containerId).empty();
        for (var i = 0; i < this.data.length; i++) {
            this.showOneGroupApp(this.data[i], i);
        }

        this.event();
    },


    //展示每组的APP图标
    showOneGroupApp: function (group, index) {
        var that = this;
        var rows = Math.ceil(group.AppModelList.length / this.countForEveryRow);
        var htmlStr = '<div class="appGroupBox">' +
                           '<div class="appGroupName">' + group.AppCategoryName + '</div>' +
                           '<div class="appGroupContent"></div>' +
                       '</div>';
        $("#" + this.containerId).append(htmlStr);
        //动态设置内容框的高
        $(".appGroupContent").eq(index).css({ "height": rows * 190 + "px" });
        for (var i = 0; i < group.AppModelList.length; i++) {
            var explain1 = group.AppModelList[i].Desc && (group.AppModelList[i].Desc.split(',')[0] || "") || "";
            var explain2 = group.AppModelList[i].Desc && (group.AppModelList[i].Desc.split(',')[1] || "") || "";
            var everyAppStr = '<div class="appBox">' +
                               '<div class="appMain">' +
                                   '<img name="' + group.AppModelList[i].RouteUrl + '" src="' + (window.baseUrl + "Content/images/appIcons/" + window.getAppImg(group.AppModelList[i].Id)) + '"/>' +
                                   '<div class="appExplain">' +
                                     '<div class="appExplain1">' + explain1 + '</div>' +
                                     '<div class="appExplain2">' + explain2 + '</div>' +
                                   '</div>' +
                               '</div>' +
                            '</div>';
            $(".appGroupContent").eq(index).append(everyAppStr);

        }


    },

    event: function () {

        $(".appMain>img").click(function () {

            var element = $(this);

            var url = window.baseUrl + element.context.name;

            R2.navPanel && R2.navPanel.showByIframe(url);

        });
    },


    CLASSNAME: "R2.Business.AppDisplayPage"
});