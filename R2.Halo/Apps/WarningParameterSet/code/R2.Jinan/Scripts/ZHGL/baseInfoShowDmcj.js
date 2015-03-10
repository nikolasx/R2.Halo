

$(function () {
    $("#BIT_right").css("float", "right");
    tableSwitchReg();
    initialization();
});


function tableSwitchReg() {
    $(".BIT_left_cell:eq(0)").css({ "background-color": "#ffffff", "border-right": "1px solid transparent" });
    $(".BIT_left_cell").click(function () {
        var index = $(".BIT_left_cell").index($(this));
        $(".BIT_left_cell:eq(" + index + ")").css({ "background-color": "#ffffff", "border-right": "1px solid transparent" })
            .siblings(".BIT_left_cell").css({ "background-color": "#F4F8FB", "border-right": "1px solid #CAD8E4" });
        $(".BIT_right_table:eq(" + index + ")").css("display", "block").siblings(".BIT_right_table").css("display", "none");
    });
}
function initialization() {

    $("#BIT_right input[type=text]").remove();
    $("#BIT_right div").css("text-align","center");
    $.post(baseUrl + "QueryGroundSettle/GetGroundSettleById", { "id": $("#groundSettleId").val() }, function (data) {
        if (data == "fail") {
            return false;
        }
        var obj = eval("(" + data + ")");

        /*
        *展示原信息
        */
        //基本信息
        $("#nameDmcj").text(obj.名称);
        $("#uNubFastenDmCJInput").text(obj.统一编号.substring(0, 8));
        $("#uNubAgileDmcjInput").val(obj.统一编号.substring(8, obj.统一编号.length));
        $("#fNubDmcj").text(obj.野外编号);
        $("#rNubDmcj").text(obj.室内编号);
        //$("#provinceDmcj").text(obj.省名);
        $("#streetDmcj").text(obj.街道);

        //经度
        if (obj.经度 != null) {
            $("#lonDUDmcj").text(obj.经度.split('-')[0]);
            $("#lonFenDmcj").text(obj.经度.split('-')[1]);
            $("#lonMiaoDmcj").text(obj.经度.split('-')[2]);
        }
        //纬度
        if (obj.纬度 != null) {
            $("#latDUDmcj").text(obj.纬度.split('-')[0]);
            $("#latFenDmcj").text(obj.纬度.split('-')[1]);
            $("#latMiaoDmcj").text(obj.纬度.split('-')[2]);
        }
        $("#locationDmcj").text(obj.地理位置);
        $("#xCoordinateDmcj").text(obj.X坐标);
        $("#yCoordinateDmcj").text(obj.Y坐标);
        $("#administrativeRegionDmcj").text(obj.沉降中心位置);
        $("#administrativeRegionLonDmcj").text(obj.沉降中心经度);
        $("#administrativeRegionLatDmcj").text(obj.沉降中心纬度);
        $("#happendTimeDmcj").text(obj.发生时间);
        $("#dmcjType").text(obj.沉降类型);
        $("#investigatePrincipalDmcj").text(obj.调查负责人);
        $("#examineAndVerifyPersonDmcj").text(obj.审核人);
        $("#fillFormPersonDmcj").text(obj.填表人);
        $("#fillFormDateDmcj").text(obj.填表日期);
        $("#investigateUnitDmcj").text(obj.调查单位);
        //沉降规模
        $("#cjqAreaDmcj").text(obj.沉降区面积);
        $("#yearAverageCjVolumeDmcj").text(obj.年平均沉降量);
        $("#accumulateCjVolumeDmcj").text(obj.历年累计沉降量);
        $("#averageCjSpeedDmcj").text(obj.平均沉降速率);
        $("#dsxfgchdDmcj").text(obj.厚度);
        $("#dsxfgcyxDmcj").text(obj.岩性);
        $("#dsxfgcjgDmcj").text(obj.结构);
        $("#dsxfgcKjbhglDmcj").text(obj.空间变化规律);
        $("#dsxfgcSwdztzDmcj").text(obj.水文地质特征);
        $("#dsxfgcZycjccDmcj").text(obj.主要沉降层位);
        $("#landformReliefDmcj").text(obj.地形地貌);
        $("#geologyStructureAndActivityDmcj").text(obj.地质构造及活动情况);
        //沉降区地下水概况
        $("#yearMineVolumeDmcj").text(obj.年开采量);
        $("#yearSupplyVolumeDmcj").text(obj.年补给量);
        $("#groundwaterMSDmcj").text(obj.地下水埋深);
        $("#yearWaterLevelChangeRangeDmcj").text(obj.年水位变化幅度);
        $("#othergkDmcj").text(obj.其它);
        $("#causePatternDmcj").text(obj.诱发沉降原因);
        $("#changePatternDmcj").text(obj.变化规律);
        $("#actualityDmcj").text(obj.沉降现状);
        $("#growTrendDmcj").text(obj.发展趋势);
        $("#mainharmDmcj").text(obj.主要危害);
        $("#economyLossDmcj").text(obj.经济损失);
        $("#administerMeasuresDmcj").text(obj.治理措施);
        $("#administerResultDmcj").text(obj.治理效果);



        //县名称
        var number = obj.统一编号.substring(0, 6);
        var xian = "市辖区";
        switch (number) {
            case "370101":
                xian = "市辖区";
                $("#BT_regionname").children("option").eq(0).attr("selected", "selected");
                break;
            case "370188":
                xian = "高新区";
                $("#BT_regionname").children("option").eq(1).attr("selected", "selected");
                break;
            case "370102":
                xian = "历下区";
                $("#BT_regionname").children("option").eq(2).attr("selected", "selected");
                break;
            case "370103":
                xian = "市中区";
                $("#BT_regionname").children("option").eq(3).attr("selected", "selected");
                break;
            case "370104":
                xian = "槐荫区";
                $("#BT_regionname").children("option").eq(4).attr("selected", "selected");
                break;
            case "370105":
                xian = "天桥区";
                $("#BT_regionname").children("option").eq(5).attr("selected", "selected");
                break;
            case "370112":
                xian = "历城区";
                $("#BT_regionname").children("option").eq(6).attr("selected", "selected");
                break;
            case "370113":
                xian = "长清区";
                $("#BT_regionname").children("option").eq(7).attr("selected", "selected");
                break;
            case "370124":
                xian = "平阴县";
                $("#BT_regionname").children("option").eq(8).attr("selected", "selected");
                break;
            case "370125":
                xian = "济阳县";
                $("#BT_regionname").children("option").eq(9).attr("selected", "selected");
                break;
            case "370126":
                xian = "商河县";
                $("#BT_regionname").children("option").eq(10).attr("selected", "selected");
                break;
            case "370181":
                xian = "章丘市";
                $("#BT_regionname").children("option").eq(11).attr("selected", "selected");
                break;
        }
    });
}