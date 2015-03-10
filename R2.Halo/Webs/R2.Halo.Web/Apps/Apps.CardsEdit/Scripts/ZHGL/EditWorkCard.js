$(function () {
    var editWorkCard = new R2.Business.EditWorkCard();
    //必须从界面中得到一个参数Id，然后把Id传递给下面两个函数
    var Id = $("editWorkCardId").val();
    editWorkCard.setWorkCardData();
    $("#editWorkCard").click(function () {
        editWorkCard.getWorkCardData();
    });

    $("#returnToHome").click(function () {

        window.parent.fullPanel2.closeByIFrame();
    });
});

R2.Business.EditWorkCard = OpenLayers.Class({
    flag: true,
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
    },
    getWorkCardData: function () {
        var workCardData = {};
        workCardData.ID = $("#editWorkCardId").val();
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

        //$.post(baseUrl + "QueryWorkCard/UpdateWorkCard", { "workCard": JSON.stringify(workCardData) }, function (data) {
        //    if (data == "sucess") {
        //        alert("数据修改成功！");
        //    } else {
        //        alert("数据修改失败！");
        //    }
        //});
        alert("修改成功");
    },
    setWorkCardData: function () {
        var workId = $("#editWorkCardId").val();
        //$.post(baseUrl + "QueryWorkCard/GetWorkCardById", { "id": workId }, function (data) {
        //    if (data == "fail") {
        //        return false;
        //    }
        (function (cbdata, id) {
            //var workCardData = eval("(" + data + ")");

            var data = cbdata.filter(function (item) {
                return item.ID == id;
            });

            if (data.length > 0) {
                var workCardData = data[0];
            } else {
                return;
            }

            $(".gz_nameInput").val(workCardData.名称);
            $(".gz_outNumInput").val(workCardData.野外编号);
            $(".gz_idNumInput").val(workCardData.统一编号);
            $(".gz_locationInput").val(workCardData.灾害位置);
            $(".gz_typeInput").val(workCardData.类型及规模);
            $(".gz_causeInput").val(workCardData.诱发因素);
            $(".gz_threatenInput").val(workCardData.威胁对象);
            $(".gz_monitorManInput").val(workCardData.监测负责人);
            $(".gz_monitorManTelInput").val(workCardData.监测负责人联系电话);
            $(".gz_monitorSignInput").val(workCardData.监测的主要迹象);
            $(".gz_monitorMethodInput").val(workCardData.监测的主要手段和方法);
            $(".gz_forecastInput").val(workCardData.临灾预报的判据);
            $(".gz_ydbzddInput").val(workCardData.预定避灾地点);
            $(".gz_ydsslxInput").val(workCardData.预定疏散路线);
            $(".gz_ydbjxhInput").val(workCardData.预定报警信号);
            $(".gz_ssmlfbrInput").val(workCardData.疏散命令发布人);
            $(".gz_ssmlfbrNumInput").val(workCardData.疏散值班电话);
            $(".gz_qpxdwInput").val(workCardData.抢排险单位);
            $(".gz_qpxdwDutyInput").val(workCardData.抢排险负责人);
            $(".gz_qpxdwNumInput").val(workCardData.抢排险值班电话);
            $(".gz_zabwdwInput").val(workCardData.治安保卫单位);
            $(".gz_zabwdwDutyInput").val(workCardData.治安保卫负责人);
            $(".gz_zabwdwNumInput").val(workCardData.治安保卫值班电话);
            $(".gz_yljhdwInput").val(workCardData.医疗救护单位);
            $(".gz_yljhdwDutyInput").val(workCardData.医疗救护负责人);
            $(".gz_yljhdwNumInput").val(workCardData.医疗救护值班电话);
            $(".gz_issueUnitInput").val(workCardData.本卡发放单位);
            $(".gz_issueNumInput").val(workCardData.本卡发放单位联系电话);
            $(".gz_issueDateInputYear").val(workCardData.发放日期年);
            $(".gz_issueDateInputMonth").val(workCardData.发放日期月);
            $(".gz_issueDateInputDay").val(workCardData.发放日期日);
            $(".gz_holdInput").val(workCardData.持卡单位或个人);
            $(".gz_holdNumInput").val(workCardData.持卡单位或个人联系电话);
            $(".gz_holdDateInputYear").val(workCardData.持卡日期年);
            $(".gz_holdDateInputMonth").val(workCardData.持卡日期月);
            $(".gz_holdDateInputDay").val(workCardData.持卡日期日);


        })(preventCards, workId);
    }
})