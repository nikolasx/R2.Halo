﻿/// <reference path="../Libs/jquery-1.7.1.min.js" />

function addPrecautionPlan() {

    if ($("#fzya_Tid").val() == "") return false;

    var jdd = $("#fzya_Jdd").val();
    var jdf = $("#fzya_Jdf").val();
    var jdm = $("#fzya_Jdm").val();
    var jingdu = jdd + '-' + jdf + '-' + jdm;

    //判断经纬度是否输入正确
    var regExp3 = new R2.Business.IsLegal({ "value": jingdu });
    if (regExp3.isLon() == false) {
        alert("经度的格式不正确，请重新输入");
        return false;
    }

    var wdd = $("#fzya_Wdd").val();
    var wdf = $("#fzya_Wdf").val();
    var wdm = $("#fzya_Wdm").val();
    var weidu = wdd + '-' + wdf + '-' + wdm;
    //判断经纬度是否输入正确
    var regExp4 = new R2.Business.IsLegal({ "value": weidu });
    if (regExp4.isLat() == false) {
        alert("纬度的格式不正确，请重新输入");
        return false;
    }

    //综合表
    var com = {};
    com.统一编号 = $("#fzya_Tid").val();
    com.地理位置 = $("#fzya_FsDd").val();
    com.名称 = $("#fzya_Name").val();
    com.经度 = jingdu;
    com.纬度 = weidu;
    if ($("#fzya_swrs").val() != "") {
        var regExp1 = new R2.Business.IsLegal({ "value": $("#fzya_swrs").val() });
        if (regExp1.isInt() == false) {
            alert("死亡人数的格式不正确，请重新输入");
            return false;
        }
    }
    if ($("#fzya_Wxrk").val() != "") {
        var regExp2 = new R2.Business.IsLegal({ "value": $("#fzya_Wxrk").val() });
        if (regExp2.isInt() == false) {
            alert("威胁人口的格式不正确，请重新输入");
            return false;
        }
    }
    if ($("#fzya_Xzb").val() != "") {
        var regExp5 = new R2.Business.IsLegal({ "value": $("#fzya_Xzb").val() });
        if (regExp5.isFloat() == false) {
            alert("X坐标的格式不正确，请重新输入");
            return false;
        }
    }

    if ($("#fzya_Yzb").val() != "") {
        var regExp6 = new R2.Business.IsLegal({ "value": $("#fzya_Yzb").val() });
        if (regExp6.isFloat() == false) {
            alert("Y坐标的格式不正确，请重新输入");
            return false;
        }
    }

    com.死亡人数 = $("#fzya_swrs").val();
    com.威胁人口 = $("#fzya_Wxrk").val();
    com.威胁财产 = $("#fzya_Wxcc").val();
    com.险情等级 = $("#fzya_Xqdj").find("input:checked").next(".labelSpace").html();
    com.灾害规模等级 = $("#fzya_Gmdj").find("input:checked").next("span").html();

    com.灾害类型 = $("#fzya_zhlx").val();
    com.国际代码 = $("#fzya_xsq").val();
    com.真实状态 = 0;
    com.X坐标 = $("#fzya_Xzb").val();
    com.Y坐标 = $("#fzya_Yzb").val();
    
    //防灾预案
    var obj = {};

    //obj.名称=$("#fzya_Name").val();
    obj.统一编号=$("#fzya_Tid").val();
    obj.野外编号=$("#fzya_Ywbh").val();
    //obj.地理位置=$("#fzya_FsDd").val();
    //obj.X坐标=$("#fzya_Xzb").val();
    //obj.Y坐标 = $("#fzya_Yzb").val();


           //obj.隐患点类型=$("#fzya_Yhdlx").val();
           //obj.规模等级=$("#fzya_Gmdj").val();
           //obj.威胁人口=$("#fzya_Wxrk").val();
           //obj.威胁财产=$("#fzya_Wxcc").val();
           //obj.险情等级=$("#fzya_Xqdj").val();
           obj.曾经发生灾害时间=$("#fzya_Fssj").val();

           obj.地质环境条件=$("#fzya_Dzhjtj").val();
           obj.变形特征及历史活动情况=$("#fzya_Hdls").val();
           obj.稳定性分析=$("#fzya_Wdxfx").val();
           obj.引发因素=$("#fzya_Yfys").val();
           obj.潜在危害=$("#fzya_Qzwh").val();

           obj.临灾状态预测=$("#fzya_Yczt").val();
           obj.监测方法=$("#fzya_Ycff").val();
           obj.监测周期= $("#fzya_Jczq").val();
           obj.监测责任人=$("#fzya_Zrr").val();
           obj.监测责任人电话=$("#fzya_Zrrdh").val();
           obj.群测群防人员=$("#fzya_Qcqfry").val();
           obj.群测群防人员电话=$("#fzya_Qcqfrydh").val();
           obj.报警方法=$("#fzya_Bjff").val();
           obj.报警信号=$("#fzya_Bjxh").val();
           obj.报警人=$("#fzya_Bjr").val();
           obj.报警人电话=$("#fzya_Bjrdh").val();
           obj.预定避灾地点=$("#fzya_Gdbzdd").val();
           obj.人员撤离路线 = $("#fzya_rycllx").val();     
           obj.防治建议 = $("#fzya_Fzjy").val();
           var pathimg = $("#PrecautionPlan  .Imgscan").eq(0).find("img").attr("src");
            if (pathimg) {
                obj.图片名称 = pathimg.replace(baseUrl, "/");
            }
    //obj.示意图
    //obj.图片名称
           $.post(baseUrl + "PreCautionPlans/Add", { 'com': JSON.stringify(com), 'preplans': JSON.stringify(obj) }, function (data) {
        alert(data);
    });

};

function setTIDValue(parameters) {

    var tidf = $("#fzya_xsq").val() + $("#fzya_zhlx").val();
    var tid = $("#fzya_Tid").val().substring(8, $("#fzya_Tid").val().trim().length);
    $("#PrecautionPlan  .tongyibianhao1").text(tidf);
    $("#PrecautionPlan  .tongyibianhao2").text(tid);
}