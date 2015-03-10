/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/OpenLayers.js" />

$(function () {
    initialization();
    update();
});

function initialization() {
    //$.post(baseUrl + "QueryGroundSettle/GetGroundSettleById", { "id": $("#groundSettleId").val() }, function (data) {
    //    if (data == "fail") {
    //        return false;
    //    }
    (function (tdata, id) {


        var data = tdata.filter(function (item) {
            return item.统一编号 == id;
        });

        //var obj = eval("(" + data + ")");

        if (data.length > 0) {
            var obj = data[0];
        } else {
            return false;
        }

        /*
        *展示原信息
        */
        //基本信息
        $("#nameDmcjInput").val(obj.名称);
        $("#uNubFastenDmCJInput").text(obj.统一编号.substring(0, 8));
        $("#uNubAgileDmcjInput").val(obj.统一编号.substring(8, obj.统一编号.length));
        $("#fNubDmcjInput").val(obj.野外编号);
        $("#rNubDmcjInput").val(obj.室内编号);
        $("#provinceDmcjInput").val(obj.省名);
        $("#streetDmcjInput").val(obj.街道);

        //经度
        if (obj.经度 != null) {
            $("#lonDUDmcjInput").val(obj.经度.split('-')[0]);
            $("#lonFenDmcjInput").val(obj.经度.split('-')[1]);
            $("#lonMiaoDmcjInput").val(obj.经度.split('-')[2]);
        }
        //纬度
        if (obj.纬度 != null) {
            $("#latDUDmcjInput").val(obj.纬度.split('-')[0]);
            $("#latFenDmcjInput").val(obj.纬度.split('-')[1]);
            $("#latMiaoDmcjInput").val(obj.纬度.split('-')[2]);
        }
        $("#locationDmcjInput").val(obj.地理位置);
        $("#xCoordinateDmcjInput").val(obj.X坐标);
        $("#yCoordinateDmcjInput").val(obj.Y坐标);
        $("#administrativeRegionDmcjInput").val(obj.沉降中心位置);
        $("#administrativeRegionLonDmcjInput").val(obj.沉降中心经度);
        $("#administrativeRegionLatDmcjInput").val(obj.沉降中心纬度);
        $("#happendTimeDmcjInput").val(obj.发生时间);
        $("#dmcjTypeInput").val(obj.沉降类型);
        $("#investigatePrincipalDmcjInput").val(obj.调查负责人);
        $("#examineAndVerifyPersonDmcjInput").val(obj.审核人);
        $("#fillFormPersonDmcjInput").val(obj.填表人);
        $("#fillFormDateDmcjInput").val(obj.填表日期);
        $("#investigateUnitDmcjInput").val(obj.调查单位);
        //沉降规模
        $("#cjqAreaDmcjInput").val(obj.沉降区面积);
        $("#yearAverageCjVolumeDmcjInput").val(obj.年平均沉降量);
        $("#accumulateCjVolumeDmcjInput").val(obj.历年累计沉降量);
        $("#averageCjSpeedDmcjInput").val(obj.平均沉降速率);
        $("#dsxfgchdDmcjInput").val(obj.厚度);
        $("#dsxfgcyxDmcjInput").val(obj.岩性);
        $("#dsxfgcjgDmcjInput").val(obj.结构);
        $("#dsxfgcKjbhglDmcjInput").val(obj.空间变化规律);
        $("#dsxfgcSwdztzDmcjInput").val(obj.水文地质特征);
        $("#dsxfgcZycjccDmcjInput").val(obj.主要沉降层位);
        $("#landformReliefDmcjInput").val(obj.地形地貌);
        $("#geologyStructureAndActivityDmcjInput").val(obj.地质构造及活动情况);
        //沉降区地下水概况
        $("#yearMineVolumeDmcjInput").val(obj.年开采量);
        $("#yearSupplyVolumeDmcjInput").val(obj.年补给量);
        $("#groundwaterMSDmcjInput").val(obj.地下水埋深);
        $("#yearWaterLevelChangeRangeDmcjInput").val(obj.年水位变化幅度);
        $("#othergkDmcjInputUP").val(obj.其它);
        $("#causePatternDmcjInput").val(obj.诱发沉降原因);
        $("#changePatternDmcjInput").val(obj.变化规律);
        $("#actualityDmcjInput").val(obj.沉降现状);
        $("#growTrendDmcjInput").val(obj.发展趋势);
        $("#mainharmDmcjInput").val(obj.主要危害);
        $("#economyLossDmcjInput").val(obj.经济损失);
        $("#administerMeasuresDmcjInput").val(obj.治理措施);
        $("#administerResultDmcjInput").val(obj.治理效果);



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
    })(disasterFakedData, $("#groundSettleId").val());
}

function update() {
    $("#BIT_right_img_UpdateGroundSettle").click(function () {
        alert("保存成功");
        return false;
        var Comhensive = {
                统一编号: $("#uNubFastenDmCJInput").text() + $("#uNubAgileDmcjInput").val(),
                名称: $("#nameDmcjInput").val(),
                地理位置: $("#locationDmcjInput").val(),
                经度: $("#lonDUDmcjInput").val() + "-" + $("#lonFenDmcjInput").val() + "-" + $("#lonMiaoDmcjInput").val(),
                纬度: $("#latDUDmcjInput").val() + "-" + $("#latFenDmcjInput").val() + "-" + $("#latMiaoDmcjInput").val(),
                死亡人数: "",
                威胁人口: "",
                直接经济损失: $("#economyLossDmcjInput").val(),
                威胁财产: "",
                目前稳定状态: "",
                灾害规模等级: "",
                灾情等级: "",
                险情等级: "",
                X坐标: $("#xCoordinateDmcjInput").val(),
                Y坐标: $("#yCoordinateDmcjInput").val(),
                灾害体积: "",
                灾害类型: "05",
                省名: $("#provinceDmcjInput").val(),
                县名: $("#countyDmcj").find("option:selected").text(),
                街道: $("#streetDmcjInput").val(),
                国际代码: $("#BT_regionname").val(),
                真实状态: 0
            };
       
            var GroundSettle = {
                统一编号: $("#uNubFastenDmCJInput").text() + $("#uNubAgileDmcjInput").val(),
                名称: $("#nameDmcjInput").val(),
                发生时间: $("#happendTimeDmcjInput").val(),
                野外编号: $("#fNubDmcjInput").val(),
                室内编号: $("#rNubDmcjInput").val(),
                X坐标: $("#xCoordinateDmcjInput").val(),
                Y坐标: $("#yCoordinateDmcjInput").val(),
                经度: $("#lonDUDmcjInput").val() + "-" + $("#lonFenDmcjInput").val() + "-" + $("#lonMiaoDmcjInput").val(),
                纬度: $("#latDUDmcjInput").val() + "-" + $("#latFenDmcjInput").val() + "-" + $("#latMiaoDmcjInput").val(),
                沉降类型: $("#dmcjTypeInput").val(),
                地理位置: $("#locationDmcjInput").val(),
                沉降中心位置: $("#administrativeRegionDmcjInput").val(),
                沉降中心经度: $("#administrativeRegionLonDmcjInput").val(),
                沉降中心纬度: $("#administrativeRegionLatDmcjInput").val(),
                沉降区面积: $("#cjqAreaDmcjInput").val(),
                年平均沉降量: $("#yearAverageCjVolumeDmcjInput").val(),
                历年累计沉降量: $("#accumulateCjVolumeDmcjInput").val(),
                平均沉降速率: $("#averageCjSpeedDmcjInput").val(),
                地形地貌: $("#landformReliefDmcjInput").val(),
                地质构造及活动情况: $("#geologyStructureAndActivityDmcjInput").val(),
                岩性: $("#dsxfgcyxDmcjInput").val(),
                厚度: $("#dsxfgchdDmcjInput").val(),
                结构: $("#dsxfgcjgDmcjInput").val(),
                空间变化规律: $("#dsxfgcKjbhglDmcjInput").val(),
                水文地质特征: $("#dsxfgcSwdztzDmcjInput").val(),
                主要沉降层位: $("#dsxfgcZycjccDmcjInput").val(),
                年开采量: $("#yearMineVolumeDmcjInput").val(),
                年补给量: $("#yearSupplyVolumeDmcjInput").val(),
                地下水埋深: $("#groundwaterMSDmcjInput").val(),
                年水位变化幅度: $("#yearWaterLevelChangeRangeDmcjInput").val(),
                其它: $("#othergkDmcjInput").val(),
                诱发沉降原因: $("#causePatternDmcjInput").val(),
                变化规律: $("#changePatternDmcjInput").val(),
                沉降现状: $("#actualityDmcjInput").val(),
                发展趋势: $("#growTrendDmcjInput").val(),
                主要危害: $("#mainharmDmcjInput").val(),
                经济损失: $("#economyLossDmcjInput").val(),
                治理措施: $("#administerMeasuresDmcjInput").val(),
                治理效果: $("#administerResultDmcjInput").val(),
                调查负责人: $("#investigatePrincipalDmcjInput").val(),
                填表人: $("#fillFormPersonDmcjInput").val(),
                审核人: $("#examineAndVerifyPersonDmcjInput").val(),
                调查单位: $("#investigateUnitDmcjInput").val(),
                填表日期: $("#fillFormDateDmcjInput").val(),
                平面示意图路径: null,
                剖面示意图路径: null,
                省名: $("#provinceDmcjInput").val(),
                县名: $("#countyDmcj").find("option:selected").text(),
                街道: $("#streetDmcjInput").val()
            }
            $.post(baseUrl + "QueryGroundSettle/UpdateGroundSettle", { "compreStr": JSON.stringify(Comhensive), "objStr": JSON.stringify(GroundSettle) }, function (data) {
                if (data == "sucess") {
                    alert("数据修改成功！");
                }
            });
    });
    $("#BIT_right_img_Return").click(function () {
        window.location.href = baseUrl1 + "Apps/JnDbDeleteAndEdit/index";
    })
    $("#BIT_right_img_GoHome").click(function () {
        top.fullPanel2.closeByIFrameGoHome();
    })
}