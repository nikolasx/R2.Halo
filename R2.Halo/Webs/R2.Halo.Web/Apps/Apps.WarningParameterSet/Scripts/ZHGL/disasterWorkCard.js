//////------------------------防灾工作明白卡------------------------///////
$(function () {
    $("#DC_WorkCardSave").click(function () {
        var workCard=new R2.Business.DisasterWorkCardData();
    })
    $("#DC_WorkCardClear").click(function () {
        $(".DC_card_work").find("input").val("");
    })
})
R2.Business.DisasterWorkCardData = OpenLayers.Class({
    booll: true,
    initialize: function () {
        var dWorkCardData = this.dWorkCardData();
        if (this.booll == true) {
            $.post(baseUrl + "QueryWorkCard/AddPreventionCard", { "prevent": JSON.stringify(dWorkCardData) }, function (data) {
                if (data == "success") {
                    alert("数据插入成功！");
                } else {
                    alert("数据插入失败，可能导致的原因如下为:    " + data);
                }
            });
        }
    },
    dWorkCardData: function () {
        var workCardData = {};
        workCardData.名称 = $(".gz_nameInput").val();
        workCardData.野外编号 = $(".gz_outNumInput").val();
        workCardData.统一编号 = $(".gz_idNumInput").val();
        workCardData.灾害位置 = $(".gz_locationInput").val();
        workCardData.类型及规模 = $(".gz_typeInput").val();
        workCardData.诱发因素 = $(".gz_causeInput").val();
        workCardData.威胁对象 = $(".gz_threatenInput").val();
        workCardData.监测负责人 = $(".gz_monitorManInput").val();
        workCardData.监测负责人联系电话 = $(".gz_monitorManTelInput").val();
        workCardData.监测的主要迹象 = $(".gz_monitorSignInput").val();
        workCardData.监测的主要手段和方法 = $(".gz_monitorMethodInput").val();
        workCardData.临灾预报的判据 = $(".gz_forecastInput").val();
        workCardData.预定避灾地点 = $(".gz_ydbzddInput").val();
        workCardData.预定疏散路线 = $(".gz_ydsslxInput").val();
        workCardData.预定报警信号 = $(".gz_ydbjxhInput").val();
        workCardData.疏散命令发布人 = $(".gz_ssmlfbrInput").val();
        workCardData.疏散值班电话 = $(".gz_ssmlfbrNumInput").val();
        workCardData.抢排险单位 = $(".gz_qpxdwInput").val();
        workCardData.抢排险负责人 = $(".gz_qpxdwDutyInput").val();
        workCardData.抢排险值班电话 = $(".gz_qpxdwNumInput").val();
        workCardData.治安保卫单位 = $(".gz_zabwdwInput").val();
        workCardData.治安保卫负责人 = $(".gz_zabwdwDutyInput").val();
        workCardData.治安保卫值班电话 = $(".gz_zabwdwNumInput").val();
        workCardData.医疗救护单位 = $(".gz_yljhdwInput").val();
        workCardData.医疗救护负责人 = $(".gz_yljhdwDutyInput").val();
        workCardData.医疗救护值班电话 = $(".gz_yljhdwNumInput").val();
        workCardData.本卡发放单位 = $(".gz_issueUnitInput").val();
        workCardData.本卡发放单位联系电话 = $(".gz_issueNumInput").val();
        workCardData.发放日期年 = $(".gz_issueDateInputYear").val();
        workCardData.发放日期月 = $(".gz_issueDateInputMonth").val();
        workCardData.发放日期日 = $(".gz_issueDateInputDay").val();
        workCardData.持卡单位或个人 = $(".gz_holdInput").val();
        workCardData.持卡单位或个人联系电话 = $(".gz_holdNumInput").val();
        workCardData.持卡日期年 = $(".gz_holdDateInputYear").val();
        workCardData.持卡日期月 = $(".gz_holdDateInputMonth").val();
        workCardData.持卡日期日 = $(".gz_holdDateInputDay").val();
        var obj = this;
        if ($(".gz_nameInput").val() == null || $(".gz_nameInput").val() == "") {
            alert("名称不能为空！");
            obj.booll= false;
            return false;
        }
        return workCardData;
    }
})