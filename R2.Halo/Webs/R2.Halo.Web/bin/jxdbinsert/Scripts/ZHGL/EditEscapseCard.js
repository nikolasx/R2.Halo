$(function () {
    var editHedgeCard = new R2.Business.EditHedgeCard();
    var Id = $("#editHedgeCardId").val();
    editHedgeCard.setHedgeCardData(Id);
    $("#editEscapseCard").click(function () {
        editHedgeCard.getHedgeCardData(Id);
    });
});

R2.Business.EditHedgeCard = OpenLayers.Class({
    flag: true,
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
    },
    getHedgeCardData: function (Id) {
        var HedgeCard = {};
        HedgeCard.ID = Id;
        HedgeCard.统一编号 = $("#tongyibianhao").val();
        HedgeCard.名称 = $("#disName").val();
        HedgeCard.野外编号 = $("#yeweinumbewr").val();
        HedgeCard.规模 = $("#guimo").val();
        HedgeCard.位置关系 = $("#disTozhuhuguanxi").val();
        HedgeCard.诱发因素 = $("#youfayinsu").val();
        HedgeCard.本住户注意事项 = $("#zhuyishixiang").val();
        HedgeCard.监测人 = $("#jianceren").val();
        HedgeCard.监测人联系电话 = $("#jiancephonenumber").val();
        HedgeCard.预警信号 = $("#yujingxinhao").val();
        HedgeCard.预警信号发布人 = $("#yujingxinhaofaburen").val();
        HedgeCard.预警信号发布人联系电话 = $("#yujingxinhaofaburenphotonumber").val();
        HedgeCard.撤离路线 = $("#chelixianlu").val();
        HedgeCard.安置单位地点 = $("#anzhidanweiadress").val();
        HedgeCard.安置单位负责人 = $("#anzhidianfuzeren").val();
        HedgeCard.安置单位联系电话 = $("#anzhidianfuzerenphotonumber").val();
        HedgeCard.救护单位 = $("#jiuhudanwei").val();
        HedgeCard.救护单位负责人 = $("#jiuhudanweifuzeren").val();
        HedgeCard.救护单位联系电话 = $("#jiuhudanweifuzerenphotonumber").val();
        HedgeCard.本卡发放单位 = $("#cardfrom").val();
        HedgeCard.本卡发放单位负责人 = $("#cardfromfuzeren").val();
        HedgeCard.本卡发放单位联系电话 = $("#cardfromfuzerenphotonumber").val();
        HedgeCard.户主姓名 = $("#hzname").val();
        HedgeCard.家庭人数 = $("#homeCount").val();
        HedgeCard.房屋类型 = $("#hometype").val();
        HedgeCard.家庭住址 = $("#homeaddress").val();
        HedgeCard.姓名1 = $("#prename1").val();
        HedgeCard.性别1 = $("#presex1").val();
        HedgeCard.年龄1 = $("#preage1").val();
        HedgeCard.姓名2 = $("#prename2").val();
        HedgeCard.性别2 = $("#presex2").val();
        HedgeCard.年龄2 = $("#preage2").val();
        HedgeCard.姓名3 = $("#prename3").val();
        HedgeCard.性别3 = $("#presex3").val();
        HedgeCard.年龄3 = $("#preage3").val();
        HedgeCard.姓名4 = $("#prename4").val();
        HedgeCard.性别4 = $("#presex4").val();
        HedgeCard.年龄4 = $("#preage4").val();
        HedgeCard.姓名5 = $("#prename5").val();
        HedgeCard.性别5 = $("#presex5").val();
        HedgeCard.年龄5 = $("#preage5").val();
        HedgeCard.姓名6 = $("#prename6").val();
        HedgeCard.性别6 = $("#presex6").val();
        HedgeCard.年龄6 = $("#preage6").val();
        HedgeCard.姓名7 = $("#prename7").val();
        HedgeCard.性别7 = $("#presex7").val();
        HedgeCard.年龄7 = $("#preage7").val();
        HedgeCard.姓名8 = $("#prename8").val();
        HedgeCard.性别8 = $("#presex8").val();
        HedgeCard.年龄8 = $("#preage8").val();
        HedgeCard.户主签名 = $("#zhuhutianming").val();
        HedgeCard.联系电话 = $("#zhuhuphotonumber ").val();
        HedgeCard.日期年 = $("#cardfromtimeyear").val();
        HedgeCard.日期月 = $("#cardfromtimemonth").val();
        HedgeCard.日期日 = $("#cardfromtimeday").val();
        //HedgeCard.编号 =$("#").val();
        //return HedgeCard;

        $.post(baseUrl + "QueryHedgeCard/UpdateHedgeCard", { "hedgeCard": JSON.stringify(HedgeCard) }, function (data) {
            if (data == "sucess") {
                alert("数据修改成功！");
            } else {
                alert("数据修改失败！");
            }
        });
    },
    setHedgeCardData: function (Id) {
        $.post(baseUrl + "QueryHedgeCard/GetHedgeCardById", { "id": Id }, function (data) {
            if (data == "fail") {
                return false;
            }

            var HedgeCard = eval("(" + data + ")");
            if (HedgeCard != null) {
                //$("#").val(//HedgeCard.ID);
                $("#tongyibianhao").val(HedgeCard.统一编号);
                $("#disName").val(HedgeCard.名称);
                $("#yeweinumbewr").val(HedgeCard.野外编号);
                $("#guimo").val(HedgeCard.规模);
                $("#disTozhuhuguanxi").val(HedgeCard.位置关系);
                $("#youfayinsu").val(HedgeCard.诱发因素);
                $("#zhuyishixiang").val(HedgeCard.本住户注意事项);
                $("#jianceren").val(HedgeCard.监测人);
                $("#jiancephonenumber").val(HedgeCard.监测人联系电话);
                $("#yujingxinhao").val(HedgeCard.预警信号);
                $("#yujingxinhaofaburen").val(HedgeCard.预警信号发布人);
                $("#yujingxinhaofaburenphotonumber").val(HedgeCard.预警信号发布人联系电话);
                $("#chelixianlu").val(HedgeCard.撤离路线);
                $("#anzhidanweiadress").val(HedgeCard.安置单位地点);
                $("#anzhidianfuzeren").val(HedgeCard.安置单位负责人);
                $("#anzhidianfuzerenphotonumber").val(HedgeCard.安置单位联系电话);
                $("#jiuhudanwei").val(HedgeCard.救护单位);
                $("#jiuhudanweifuzeren").val(HedgeCard.救护单位负责人);
                $("#jiuhudanweifuzerenphotonumber").val(HedgeCard.救护单位联系电话);
                $("#cardfrom").val(HedgeCard.本卡发放单位);
                $("#cardfromfuzeren").val(HedgeCard.本卡发放单位负责人);
                $("#cardfromfuzerenphotonumber").val(HedgeCard.本卡发放单位联系电话);
                $("#hzname").val(HedgeCard.户主姓名);
                $("#homeCount").val(HedgeCard.家庭人数);
                $("#hometype").val(HedgeCard.房屋类型);
                $("#homeaddress").val(HedgeCard.家庭住址);
                $("#prename1").val(HedgeCard.姓名1);
                $("#presex1").val(HedgeCard.性别1);
                $("#preage1").val(HedgeCard.年龄1);
                $("#prename2").val(HedgeCard.姓名2);
                $("#presex2").val(HedgeCard.性别2);
                $("#preage2").val(HedgeCard.年龄2);
                $("#prename3").val(HedgeCard.姓名3);
                $("#presex3").val(HedgeCard.性别3);
                $("#preage3").val(HedgeCard.年龄3);
                $("#prename4").val(HedgeCard.姓名4);
                $("#presex4").val(HedgeCard.性别4);
                $("#preage4").val(HedgeCard.年龄4);
                $("#prename5").val(HedgeCard.姓名5);
                $("#presex5").val(HedgeCard.性别5);
                $("#preage5").val(HedgeCard.年龄5);
                $("#prename6").val(HedgeCard.姓名6);
                $("#presex6").val(HedgeCard.性别6);
                $("#preage6").val(HedgeCard.年龄6);
                $("#prename7").val(HedgeCard.姓名7);
                $("#presex7").val(HedgeCard.性别7);
                $("#preage7").val(HedgeCard.年龄7);
                $("#prename8").val(HedgeCard.姓名8);
                $("#presex8").val(HedgeCard.性别8);
                $("#preage8").val(HedgeCard.年龄8);
                $("#zhuhutianming").val(HedgeCard.户主签名);
                $("#zhuhuphotonumber").val(HedgeCard.联系电话);
                $("#cardfromtimeyear").val(HedgeCard.日期年);
                $("#cardfromtimemonth").val(HedgeCard.日期月);
                $("#cardfromtimeday").val(HedgeCard.日期日);
                //HedgeCard.编号 =$("#").val();

            }
        });
    }
})