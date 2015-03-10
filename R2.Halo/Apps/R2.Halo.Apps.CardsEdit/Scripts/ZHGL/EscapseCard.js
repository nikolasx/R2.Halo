$(function () {
    operate();
});
function operate() {
    $("#saveEscapseCard").click(function () {
        var HedgeCard = {};
        //HedgeCard.ID = $("#").val();
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
        HedgeCard.本卡发放单位联系电话 = $("#cardfromfuzeren").val();
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
        HedgeCard.联系电话 = $("#zhuhuphotonumber").val();
        HedgeCard.日期年 = $("#cardfromtimeyear").val();
        HedgeCard.日期月 = $("#cardfromtimemonth").val();
        HedgeCard.日期日 = $("#cardfromtimeday").val();
        //HedgeCard.编号 =$("#").val();

        if ($("#hzname").val() == null || $("#hzname").val() == "") {
            alert("户主姓名不能为空！");
            return false;
        }

        var regExp = /^[1-9]+[0-9]*$/;
        if(!regExp.test($("#homeCount").val())){
            alert("家庭人数格式错误！！");
            return false;
        }
        
          //$.post(baseUrl + "QueryHedgeCard/AddHedgeCard", { "hedgeCard": JSON.stringify(HedgeCard) }, function (data) {
          //    if (data == "sucess") {
          //        alert("数据录入成功！");
          //    } else {
          //        alert("数据录入失败，请检查统一编号是否输入正确或者存在！");
          //    }
          //});
    });
    $("#clearEscapseCard").click(function () {
        $("div").find("input").val("");
    });
}
