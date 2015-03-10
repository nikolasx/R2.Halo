/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/OpenLayers.js" />

/*---------------------------气象管理雨量查询结果对象-------------------------
* created by jjm 2014.04.11
* 使用列表展示查询得到的气象信息
* 每条记录格式是：
* stationID:D6001,StaionName:蟠龙山,Region:济南,累计值:1823,
*/
R2.Business.rainManageQueryResult = OpenLayers.Class({

    parentId:'123',

    resultData: null,

    limitLength:5,

    //返回上一级
    backQueryCallBack: $.noop,

    //记录点击 事件
    itemClickCallBack: $.noop,

    //数据加载时的回调 方便地图添加marks
    dataAddCallBack:$.noop,

    /*
    *初始化，
    */
    initialize: function (options) {
        OpenLayers.Util.extend(this, options);
        $('#' + this.parentId + '_qrBody').remove();
        $('#' + this.parentId + '> div').hide();
        var content = this.getContentHtmlByData(this.resultData);
        $('#' + this.parentId).append(content);
        this.eventsInit();
    },

    /*
    * 事件注册，基本都是回调方法
    */
    eventsInit: function () {
        var temp = this;

        //返回事件
        $('#' + this.parentId + '_backQuery').unbind('click').click(function () {
            $('#' + temp.parentId + '_qrBody').remove();
            $('#' + temp.parentId + '> div').show();
            temp.backQueryCallBack.call(temp.backQueryCallBack);
        });

        //列表点击事件
        $('#' + this.parentId + '_listBody li').unbind('click').click(function () {
            $(this).removeClass('ui_left_listBodyUnselect').addClass('ui_left_listBodySelected')
                .siblings().removeClass('ui_left_listBodySelected').addClass('ui_left_listBodyUnselect');
            temp.itemClickCallBack.call(temp.itemClickCallBack,$(this).index());
        });

    },

    getContentHtmlByData: function (resultData){
        var content = '<div id="' + this.parentId + '_qrBody">' +
                                    '<div id="' + this.parentId + '_qrStateInfo">' +
                                        '<div class="' + this.parentId + '_qrStateInfoLitem">查询结果</div>' +
                                        '<div class="' + this.parentId + '_qrStateInfoRitem" id="'+this.parentId+'_backQuery" title="返回"></div>' +
                                    '</div>' +
                                    '<div id="' + this.parentId + '_listHead">' +
                                        '<div class="' + this.parentId + '_listHeadItem ' + this.parentId + '_listHeadItemId">站点编号</div>' +
                                        '<div class="' + this.parentId + '_listHeadItem ' + this.parentId + '_listHeadItemName">站点名称</div>' +
                                        '<div class="' + this.parentId + '_listHeadItem ' + this.parentId + '_listHeadItemRegion">行政区</div>' +
                                        '<div class="' + this.parentId + '_listHeadItem ' + this.parentId + '_listHeadItemSum">累计值</div>' +
                                    '</div>' +
                                    '<div id="' + this.parentId + '_listBody">' +
                                        '<ul>';
        for (var i = 0; i < resultData.length; i++)
        {
            var tempStr = '<li class="'+this.parentId+'_listBodyUnselect">' +
                                        '<div class="' + this.parentId + '_listItemInfo ' + this.parentId + '_listItemInfoNum">' + parseInt(i+1)+ '</div>' +
                                        '<div class="' + this.parentId + '_listItemInfo ' + this.parentId + '_listItemInfoId">' + resultData[i].StationId+'</div>'+
                                        '<div class="' + this.parentId + '_listItemInfo ' + this.parentId + '_listItemInfoName" title="' + resultData[i].StationName + '">' + this.dealWithWordLength(resultData[i].StationName) + '</div>' +
                                        '<div class="' + this.parentId + '_listItemInfo ' + this.parentId + '_listItemInfoRegion">' + resultData[i].Region + '</div>' +
                                        '<div class="' + this.parentId + '_listItemInfo ' + this.parentId + '_listItemInfoSum">' + resultData[i].SumRainFall + '</div>' +
                                        '<div class="' + this.parentId + '_listItemInfo ' + this.parentId + '_listItemInfoPosition" style="display:none;">' + resultData[i].Lon+'_' + resultData[i].Lat+ '</div>' +
                                    '</li>';
            content += tempStr
        }
        content += '</ul></div></div>';
        return content;
    },

    /*
    *防止文字过长，影响效果，对字符串进行截取
    *
    */
    dealWithWordLength:function(word){
        if (word.length > this.limitLength) {
            return word.substring(0, this.limitLength) + '...';
        }
        return word;
    },

    CLASS_NAME: 'R2.rainManageQueryResult'

});
   

