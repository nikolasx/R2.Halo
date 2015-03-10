//防灾明白卡和避险明白卡的通用类型
//放弃使用
R2.Business.Card = OpenLayers.Class({
    baseUrl: "",
    workUrl: "",//防灾明白卡的路径，当点击后滑动面板到详细信息时使用
    hedgeUrl: "",//防灾避险卡
    type: "",//  preventionCard防灾明白卡  hedgeCard避险明白卡
    cardNum:0,
    uniformNum:"",//得到每个灾点的统一编号，存放在这里
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.setUniformNum();
        this.execute();
    },
    //根据传入的信息，设置统一编号
    setUniformNum: function () {
        var id = this.baseUrl.split('=')[1];
        this.uniformNum = id;
    },
    execute: function () {
        var tempObj = this;
        switch (tempObj.type) {
            case "preventionCard":
                tempObj.exeFZ();
                break;
            case "hedgeCard":
                tempObj.exeBX();
                break;
            default:
                break;
        }
    },
    //防灾明白卡
    exeFZ: function () {
        var tempObj = this;
        $.post(baseUrl + "QueryWorkCard/GetCountByTid", {Tid:tempObj.uniformNum}, function (data) {
            if (data == 0) {
                alert("查询出错或者此灾点无明白卡");
                return false;
            }
            else 
                if (data == 1) {
                    top.fullPanel.showByIFrame(tempObj.baseUrl);
                }
                else {
                    tempObj.cardNum = data;
                    tempObj.appendRight();
                }
        });
    },
    //避险明白卡
    exeBX: function () {
        var tempObj = this;
        $.post(baseUrl + "QueryHedgeCard/GetHedgesCountByTid", { Tid: tempObj.uniformNum }, function (data) {
            if (data == 0) {
                alert("查询出错或者此灾点无明白卡");
                return false;
            }
            else
                if (data == 1) {
                    top.fullPanel.showByIFrame(tempObj.baseUrl);
                }
                else {
                    tempObj.cardNum = data;
                    tempObj.appendRight();
                }
        });
    },
    //往右边动态插入相应的明白卡格子
    appendRight: function () {
        var tempObj = this;
        if ($(".cardRight").length > 0) {
            $(".cardRight").remove();
        }
        var contentDiv = '<div class="cardRight">' +                              
                            '</div>';
        $("#ui_right").append(contentDiv);
        var height = $(window).height() - 45;        
        $(".cardRight").css({ "height": height + "px" });
        //下面根据明白卡条数，插入相应个数的格子
        var str = '<div class="obviousCard">' +
                    '<div class="oc_head"></div>' +
                    '<div class="oc_body"></div>' +
                    '<div class="oc_cardID" style="display:none;"></div>'+
                   '</div>';
        var s = "";
        for (var i = 0; i < tempObj.cardNum; i++) {
            s += str;
        }
        //s = s + '<div class="cardBottom"></div>';
        $(".cardRight").html(s);  //插入相应多的格子
        //填充内容
        if (tempObj.type == "preventionCard") {
            tempObj.getPreventionCards();
        }
        if (tempObj.type == "hedgeCard") {
            tempObj.getHedgeCards();
        }
    },
    //根据统一编号填充对应灾点避险明白卡内容
    getHedgeCards: function () {
        var tempObj = this;
        $.post(baseUrl + "QueryHedgeCard/GetHedgesByTid", { Tid:tempObj.uniformNum,pageSize:1000,pageIndex:1}, function (data) {
            for (var i = 0; i < data.length; i++) {
                $(".obviousCard:eq(" + i + ")").find(".oc_head").text(data[i].监测人);
                $(".obviousCard:eq(" + i + ")").find(".oc_body").text(data[i].监测人联系电话);
                $(".obviousCard:eq(" + i + ")").find(".oc_cardID").text(data[i].ID);
            }
            $(".obviousCard").click(function () {
                var cardId = $(this).find(".oc_cardID").text();
                tempObj.cardClickReg(cardId);
            });
        });
    },
    //根据统一编号填充对应灾点防灾明白卡内容
    getPreventionCards: function () {
        var tempObj = this;
        $.post(baseUrl + "QueryWorkCard/GetPreventByTid", { Tid: tempObj.uniformNum, pageSize: 1000, pageIndex: 1 }, function (data) {
            for (var i = 0; i < data.length; i++) {
                $(".obviousCard:eq(" + i + ")").find(".oc_head").text(data[i].监测负责人);
                $(".obviousCard:eq(" + i + ")").find(".oc_body").text(data[i].监测负责人联系电话);
                $(".obviousCard:eq(" + i + ")").find(".oc_cardID").text(data[i].ID);
            }
            $(".obviousCard").click(function () {
                //var cardId = $(this).find(".oc_cardID").text();
                var cardId = $(this).find(".oc_cardID").html();
                tempObj.cardClickReg(cardId);
            });
        });
    },
    cardClickReg: function (cardId) {        
        var tempObj = this;
        if (tempObj.type == "preventionCard") {
            if (tempObj.workUrl != null) {
                top.fullPanel.showByIFrame(tempObj.workUrl);
            } else {
                alert("跳转路径为空");
                return false;
            }
        }
        if (tempObj.type == "hedgeCard") {
            if (tempObj.hedgeUrl != null) {
                top.fullPanel.showByIFrame(tempObj.hedgeUrl);
            } else {
                alert("跳转路径为空");
                return false;
            }
        }
    },
    CLASS_NAME: "Card"
});
