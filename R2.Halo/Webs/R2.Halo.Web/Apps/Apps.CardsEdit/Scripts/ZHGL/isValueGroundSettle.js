/// <reference path="../Libs/OpenLayers.js" />
/// <reference path="../Libs/jquery-1.7.1.min.js" />



R2.Business.GroundSettleData = OpenLayers.Class({
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
    },

    getComhensiveObject: function () {
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
        return Comhensive;
    },
    getGroundSettle: function () {
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
        return GroundSettle;
    },
    saveGroundSettle: function (Comhensive, GroundSettle) {
        var arrValue_Flaot = [GroundSettle.沉降区面积, GroundSettle.年平均沉降量, GroundSettle.历年累计沉降量, GroundSettle.平均沉降速率, GroundSettle.年开采量, GroundSettle.年补给量, GroundSettle.地下水埋深, GroundSettle.年水位变化幅度, GroundSettle.经济损失, GroundSettle.灾害体积,GroundSettle.沉降中心经度,GroundSettle.沉降中心纬度];
        var arrName_Flaot = ["沉降区面积", "年平均沉降量", "历年累计沉降量", "平均沉降速率", "年开采量", "年补给量", "地下水埋深", "年水位变化幅度", "经济损失", "灾害体积", "沉降中心经度", "沉降中心纬度"];
        var regExp = new R2.Business.IsLegal({ "valueArr": arrValue_Flaot, "titleArr": arrName_Flaot });
        if (regExp.isAllFloatForArr() == false) {
            return false;
        }


        var arrValue_Int = [GroundSettle.X坐标, GroundSettle.Y坐标];
        var arrName_Int = ["X坐标", "Y坐标"];
        var regExp = new R2.Business.IsLegal({ "valueArr": arrValue_Int, "titleArr": arrName_Int });
        if (regExp.isIntForArr() == false) {
            return false;
        }

        var regExp = new R2.Business.IsLegal({ "value": $("#uNubAgileDmcjInput").val(), "n": 4 });
        if (regExp.has_n_Number() == false) {
            alert("统一编号的格式不正确！");
            return false;
        }

        var regExp = new R2.Business.IsLegal({ "value": GroundSettle.经度 });
        if (regExp.isLon() == false) {
            alert("经度的格式不正确!");
            return false;
        }
        var regExp = new R2.Business.IsLegal({ "value": GroundSettle.纬度 });
        if (regExp.isLat() == false) {
            alert("纬度的格式不正确!");
            return false;
        }
        $.post(baseUrl + "GroundSettleImport/GroundSettleImport", { "userInfo": "0", "compreStr": JSON.stringify(Comhensive), "objStr": JSON.stringify(GroundSettle) }, function (data) {
            if (data == "success") {
                alert("数据插入成功！");
            } else if (data == 2) {
                alert("此统一编号已经存在！");
            } else {
                alert("数据插入失败，可能导致的原因如下为:    " + data);
            }
        });
    }

});