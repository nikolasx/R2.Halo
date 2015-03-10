/// <reference path="../Libs/OpenLayers.js" />
/// <reference path="../Libs/zdclient.js" />
/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../global/global.js" />

//预警结果分析
//var globalData = {};
//globalData.layerName = {};
var lbqResultAnalysis = {
    content:'<div class="warBox">'+
                      '<div class="wraHead">落报区查询</div>' +
                      //'<div class="wrafunTitle"><div class="wrafunTitleTip" style="margin-left:3px;">预警信息</div></div>' +
                      '<div id="warnmessage" class="wraInfo" >' +
                          '<div><div class="wraInfoTip">预警时间：</div><div class="wraInfoRes"></div></div>' +
                          '<div><div class="wraInfoTip">网格大小：</div><div class="wraInfoRes"></div></div>' +
                          '<div><div class="wraInfoTip">预报雨量：</div><div class="wraInfoRes"></div></div>' +
                      '</div>'+
                      '<div class="wrafunTitle"><div class="wrafunTitleCount" style="float:left;"></div><div class="wrafunTitleTip" style="width:120px;float:left;">预警图</div>' +
                      '</div>' +
                       '<div id="warn_drawbox" class="wraResultBox" style="height:40px;">' +
                       
                        '<div id="war_showlayer_title"  class="wraCanvasBox_Title"  style="height:30px;"><div class="wraCanvasBox_Title_span" style="margin-top:5px;">显示预警图:</div></div>' +
                       '<div id="war_showlayer_style"  class="wraCanvasBox4" style="height:30px;">' +
                            '<input id="cb_forshow" type="radio" name="cb_showlayer" class="checkBoxSpace_warn" value="显示" checked="checked"/><label class="labelSpace_warn" style="line-height:22px;">显示</label>' +
                            '<input id="cb_fordisshow" type="radio" name="cb_showlayer" class="checkBoxSpace_warn" value="不显示"/><label class="labelSpace_warn" style="line-height:22px;">不显示</label>' +
                      '</div>' +
                      '</div>' +
                       
                      '<div class="wrafunTitle wrafunTitle2"><div class="wrafunTitleCount wrafunTitleCount3"></div><div class="wrafunTitleTip">落报区查询模块</div></div>' +
                      '<div class="wraResultBox" style="height:50px;">' +
                            //'<input type="radio" name="wraRadio" style="margin-top:5px;" value="2" checked>制作预报词' +
                            //'<input type="radio" name="wraRadio" style="margin-top:5px;" value="1">行政区分析' +
                            '<div id="btn_disasters" class="wraButton">灾害点查询</div>' +
                            '<div id="btn_queryperson" class="wraButton">联系人查询</div>' +
                      '</div>' +
                    '<div class="wraResultBox" style="height:50px;border:none;background-color:#ffffff;">' +
                            '<div id="btn_reture" class="wraButton">返回</div>' +
                      '</div>' +
                      
                 '</div>',
    ///<parama name="layer">当前地图显示的预警图层</parama>
    init: function (layers) {
        this.cssInit();

        this.queryLayerInfo(layers);
        this.clickEvent();
    },
    //初始加载页面样式
    cssInit: function () {
        //页面弹出及内容添加
        $("#ui_left").hide();
        $("#ui_left1").show();
        $("#ui_left1").html(this.content);
        //按钮样式初始化
        $(".wraThreeXiu").css("opacity", 1);
        $(".wraThreeXiu").eq(7).css("opacity", "0.5");
        $(".wraThreeXiu").eq(8).css("opacity", "0.5");

        ////csw
        //$("#war_select_style .checkBoxSpace").eq(1).attr("checked", 'true');
        //$("#war_select_style .checkBoxSpace").eq(0).attr("checked", 'false');
        $("#war_editor_style .checkBoxSpace_warn").eq(1).attr("checked", 'checked');
        $("#war_editor_style .checkBoxSpace_warn").eq(0).attr("checked", '');

        $(".warninfo_date").focus(function () {
            $(this).calendar({ format: 'yyyy/MM/dd HH:mm:ss', zIndex: 10001 });
            $(this).css("border-color", "#e4a112");
        });


    },

    //查询该图层的信息
    queryLayerInfo: function (layer) {
        var that = this;
        $.post(baseUrl + "HistoryWarning/QueryHistoryByLayer", { warningLayer: layer.join("&") }, function (cbdata) {
            that.data = cbdata;
            $(".wraInfoRes").eq(0).html(cbdata.warningTime);
            $(".wraInfoRes").eq(1).html(cbdata.grideRole + "m X " + cbdata.grideRole + "m");
            $(".wraInfoRes").eq(2).html(cbdata.forecastTime + "小时");
            //CreateImgJpg(cbdata.warningTime, cbdata.operateTime);
            //ScanJpg(cbdata.warningTime, cbdata.operateTime);
            //window.qpd_yubaoDate = cbdata.warningTime;
            //window.qpd_yubaoDate1 = cbdata.operateTime;
        });
    },
    
    clickEvent: function () {
        var that = this;
        $("#btn_reture").click(function () {
            $("#ui_left").show();
            $("#ui_left1").hide();
        });
        $("#btn_disasters").click(function () {
            var qlayer = R2.mapVector.gdbps[0];

            $.post(baseUrl + "FactorQuery/GetByYJXian", { gdb: qlayer }, function (cbdata) {
                top.waitPage.hide();
                cbdata;
                that.getQuGrade(cbdata);
                //for(var i=0;i<cbdata.)
                //data[i].AttValue[3]
            });
        });
        $("#btn_queryperson").click(function () {

        });
        
    },
    getQuGrade:function (data) {
        data;
        data = ResetAttr(data);
        grade = R2.warningGrade;
        var resultArr = [];
        for (var i = 0; i < data.TotalCount; i++) {
            for (var j = 0; j < resultArr.length; j++) {
                if (resultArr[j].AttValue[3] == data.SFEleArray[i].AttValue[3]) {
                    break;
                }
            }
            if (j == resultArr.length) {
                if (parseInt(data.SFEleArray[i].AttValue[1]) >= parseInt(grade[1])) {
                    resultArr.push(data.SFEleArray[i]);
                }
            } else {
                if (parseInt(data.SFEleArray[i].AttValue[1]) > parseInt(resultArr[j].AttValue[1])) {
                    resultArr.splice(j, 1, data.SFEleArray[i]);
                }
            }
        }
        this.addQu(resultArr);
    },
    //起始值 终止值 确定位置
    ResetAttr: function (data) {
        data;
        if (data.AttStruct.FldNumber > 7) {
            var count = (data.AttStruct.FldNumber - 7) / 3;
            var Index = data.AttStruct.FldNumber - 2;
            for (var i = 0; i < data.TotalCount; i++) {
                data.SFEleArray[i].AttValue[2] = data.SFEleArray[i].AttValue[Index-1];
                data.SFEleArray[i].AttValue[3] = data.SFEleArray[i].AttValue[Index];
            }
            return data;
        }
        else {
            return data;
        }
    },
    addQu: function (data) {
        var quyu = [];
        for (var i = 0; i < data.length; i++) {
            quyu.push(data[i].AttValue[3]);
        };
    },
    getAreaCode: function (str) {
        switch (str) {
            case "市辖区":
                return "370101";
                break;
            case "高新区":
                return "370188";
                break;
            case "历下区":
                return "370102";
                break;
            case "市中区":
                return "370103";
                break;
            case "槐荫区":
                return "370104";
                break;
            case "天桥区":
                return "370105";
                break;
            case "历城区":
                return "370112";
                break;
            case "长清区":
                return "370113";
                break;
            case "平阴县":
                return "370124";
                break;
            case "济阳县":
                return "370125";
                break;
            case "商河县":
                return "370126";
                break;
            case "章丘市":
                return "370181";
                break;
            default:
                return "";
                break;
        }
    },


  
   
};
