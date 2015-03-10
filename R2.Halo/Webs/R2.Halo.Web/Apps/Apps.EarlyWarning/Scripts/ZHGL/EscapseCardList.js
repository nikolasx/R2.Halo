$(function () {
    alert("");
})

R2.Business.escapseList = OpenLayers.Class({
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
    },
    //添加列表标题
    addTitle: function () {
        $("#header").remove();
        var tit = '<div id="header">' +
                        '<div class="header_class" style="width: 60px;">序号</div>' +
                        '<div class="header_class" style="width: 130px;">统一编号</div>' +
                        '<div class="header_class" style="width: 250px;">名称</div>' +
                        '<div class="header_class" style="width: 254px;">户主</div>' +
                        '<div class="header_class" style="width: 125px;">防灾工作卡数量</div>' +
                        '<div class="header_class" style="width: 123px;border-right: 1px solid #CAD8E4;">防灾避险卡数量</div>' +
                        //'<div class="header_class" style="border-right: 1px solid #CAD8E4; width: 143px;">操作</div>' +
                    '</div>';
        $("#Gridview").prepend(tit);
    },
    //初始入口
    getData: function () {
        var tempObj = this;
        $.post(baseUrl + "QueryWorkCard/GetAllData", { "pageSize": 10, "pageIndex": 1 }, function (data) {
            tempObj.addHtml(data);
        })
    },
    addHtml: function (data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
           
            html += '<div class="dataline">' +
                //'<div class="dataline_class" style=" width:70px;">' + (i + (pageIndex - 1) * pageSize + 1) + '</div>' +
                '<div class="dataline_class" style=" width:60px;">' + 1 + '</div>' +
                '<div class="dataline_class" style=" width:130px;">' + data[i].统一编号 + '</div>' +
                '<div class="dataline_class" style=" width:250px;"> ' + data[i].名称 + '</div>' +
                '<div class="dataline_class" style=" width:254px;">' + data[i].户主 + '</div>' +
                '<div class="dataline_class" style=" width:125px;">' + data[i].监测负责人 + '</div>' +
                '<div class="dataline_class" style=" width:123px;border-right:1px solid #CAD8E4">' + data[i].监测负责人 + '</div>' +
                //'<div class="dataline_class" style="border-right:1px solid #CAD8E4;width:143px;">' +
                //    '<div class="btndelete">删除</div>' +
                //    '<div class="btneditor"><a href="#" style="text-decoration:none;">编辑</a></div>' +
                //'</div>' +
            '</div>';
            $("#infodata").html(html);
        }
    }

});