$(function () {
    initialization();
    update();

});

function initialization() {
    //$.post(baseUrl + "QueryMudFlow/GetMudFlowById", { "id": $("#mudFlowId").val() }, function (data) {
    //    if (data == "fail") {
    //        return false;
    //    }
    (function (tdata, id) {
        var data = tdata.filter(function (item) {
            return item.统一编号 == id;
        });
       
        if (data.length > 0) {
            var obj = data[0];
        } else {
            return;
        }

        $("#unifiedNumberLSL").val(obj.统一编号.substring(8, obj.统一编号.lenght));
        $("#UN_regionLSLCode").html(obj.统一编号.substring(4, 8));
        $("#nameNslInput").val(obj.名称);
        $("#rNubNslInput").val(obj.室内编号);
        $("#jingduLSLDu").val(obj.经度.split('-')[0]);
        $("#jingduLSLFen").val(obj.经度.split('-')[1]);
        $("#jingduLSLMiao").val(obj.经度.split('-')[2]);
        $("#weiduLSLDu").val(obj.纬度.split('-')[0]);
        $("#weiduLSLFen").val(obj.纬度.split('-')[1]);
        $("#weiduLSLMiao").val(obj.纬度.split('-')[2]);
        $("#locationNslInput").val(obj.地理位置);
        $("#combNslInput").val(obj.最大标高);
        $("#toeNslInput").val(obj.最小标高);
        $("#xCoordinateNslInput").val(obj.X坐标);
        $("#yCoordinateNslInput").val(obj.Y坐标);
        $("#riverNameNslInput").val(obj.水系名称);
        $("#mainRiverNameNslInput").val(obj.主河名称);
        //$("#comMainRiverLocationNsl").find("input:checked").val(obj.相对主河位置);
        if (obj.相对主河位置 != null) {
            $("#comMainRiverLocationNsl input[type=radio]").each(function () {
                if (obj.相对主河位置 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#ditchDistanceNslInput").val(obj.沟口至主河道距);
        $("#flowDirectionNslInput").val(obj.流动方向);

        $("#gkjsdxANslInput").val(obj.沟口巨石A);
        $("#gkjsdxBNslInput").val(obj.沟口巨石B);
        $("#gkjsdxCNslInput").val(obj.沟口巨石C);

        $("#yearMaxSRainfallNslInput").val(obj.年最大降雨);
        $("#yearAverageSRainfallNslInput").val(obj.年平均降雨);
        $("#dayMaxSRainfallNslInput").val(obj.日最大降雨);
        $("#dayAverageSRainfallNslInput").val(obj.日平均降雨);
        $("#hourMaxSRainfallNslInput").val(obj.时最大降雨);
        $("#hourAverageSRainfallNslInput").val(obj.时平均降雨);
        $("#tenminutesMaxSRainfallNslInput").val(obj.十分钟最大降雨);
        $("#tenminutesAverageSRainfallNslInput").val(obj.十分钟平均降雨);
        $("#sectorIntegrityNslInput").val(obj.沟口扇形地完整性);
        $("#sectorLuffPunchNslInput").val(obj.沟口扇形地变幅);
        //$("#sectorDevelopTrendNsl").find("input:checked").val(obj.沟口扇形地发展趋势);
        if (obj.沟口扇形地发展趋势 != null) {
            $("#sectorDevelopTrendNsl input[type=radio]").each(function () {
                if (obj.沟口扇形地发展趋势 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#sectorLengthNslInput").val(obj.沟口扇形地扇长);
        $("#sectorWidthNslInput").val(obj.沟口扇形地扇宽);
        $("#sectorDiffusionAngleNslInput").val(obj.沟口扇形地扩散角);
        //$("#compressRiverNsl").find("input:checked").val(obj.沟口扇形地挤压大河);
        if (obj.沟口扇形地挤压大河 != null) {
            $("#compressRiverNsl input[type=radio]").each(function () {
                if (obj.沟口扇形地挤压大河 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //"";地质构造
        if (obj.地质构造 != null) {
            $("#geoStructureNsl input[type=checkbox]").each(function () {
                if (obj.地质构造.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.滑坡活动程度 != null) {
            $("#landslidActivityNsl input[type=radio]").each(function () {
                if (obj.滑坡活动程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.滑坡规模 != null) {
            $("#landslidScaleNsl input[type=radio]").each(function () {
                if (obj.滑坡规模 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.人工弃体活动程度 != null) {
            $("#artificialAbandonedBodyActivityNsl input[type=radio]").each(function () {
                if (obj.人工弃体活动程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.人工弃体规模 != null) {
            $("#artificialAbandonedBodyScaleNsl input[type=radio]").each(function () {
                if (obj.人工弃体规模 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.自然堆积活动程度 != null) {
            $("#naturalStackActivityNsl input[type=radio]").each(function () {
                if (obj.自然堆积活动程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.自然堆积规模 != null) {
            $("#naturalStackScaleNsl input[type=radio]").each(function () {
                if (obj.自然堆积规模 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#forestNslInput").val(obj.森林);
        $("#shrubNslInput").val(obj.灌丛);
        $("#grasslandsNslInput").val(obj.草地);
        $("#gentleSlopeCultivatedLandNslInput").val(obj.缓坡耕地);
        $("#wastelandNslInput").val(obj.荒地);
        $("#slopeCultivatedLandNslInput").val(obj.陡坡耕地);
        $("#buildLandNslInput").val(obj.建筑用地);
        $("#otherLandNslInput").val(obj.其它用地);
        $("#preventMeasureNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.防治措施现状) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.防治措施现状) {
                $(this).attr("checked", true);
            }
        });
        $("#monitorMeasureNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.监测措施) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.监测措施) {
                $(this).attr("checked", true);
            }
        });
        $("#threatenNubhNslInput").val(obj.威胁人口);
        $("#threatenFortunehNslInput").val(obj.威胁财产);
        if (obj.险情等级 != null) {
            $("#damageClassNsl input[type=radio]").each(function () {
                if (obj.险情等级.indexOf($(this).val()) >= 0)
                    $(this).attr("checked", true);
            });
        }
        $("#oneOccurTimeNslInput").val(obj.灾害史发生时间1);
        $("#oneDieNubNslInput").val(obj.灾害史死亡人口1);
        $("#oneAnimalsLossNslInput").val(obj.灾害史损失牲畜1);
        $("#oneDoorDamageNslInput").val(obj.灾害史全毁房屋1);
        $("#oneDoorDamageHalfNslInput").val(obj.灾害史半毁房屋1);
        $("#oneFarmDamageAllNslInput").val(obj.灾害史全毁农田1);
        $("#oneFarmDamageHalfNslInput").val(obj.灾害史半毁农田1);
        $("#oneRoadNslInput").val(obj.灾害史毁坏道路1);
        $("#oneBridgeNslInput").val(obj.灾害史毁坏桥梁1);
        $("#oneEconomyLossNslInput").val(obj.灾害史直接损失1);
        $("#oneDangerClassNslInput").val(obj.灾害史灾情等级1);
        $("#twoOccurTimeNslInput").val(obj.灾害史发生时间2);
        $("#twoDieNubNslInput").val(obj.灾害史死亡人口2);
        $("#twoAnimalsLossNslInput").val(obj.灾害史损失牲畜2);
        $("#twoDoorDamageAllNslInput").val(obj.灾害史全毁房屋2);
        $("#twoDoorDamageHalfNslInput").val(obj.灾害史半毁房屋2);
        $("#twoFarmDamageAllNslInput").val(obj.灾害史全毁农田2);
        $("#twoFarmDamageHalfNslInput").val(obj.灾害史半毁农田2);
        $("#twoRoadNslInput").val(obj.灾害史毁坏道路2);
        $("#twoBridgeNslInput").val(obj.灾害史毁坏桥梁2);
        $("#twoEconomyLossNslInput").val(obj.灾害史直接损失2);
        $("#twoDangerClassNslInput").val(obj.灾害史灾情等级2);
        $("#threeOccurTimeNslInput").val(obj.灾害史发生时间3);
        $("#threeDieNubNslInput").val(obj.灾害史死亡人口3);
        $("#threeAnimalsLossNslInput").val(obj.灾害史损失牲畜3);
        $("#threeDoorDamageAllNslInput").val(obj.灾害史全毁房屋3);
        $("#threeDoorDamageHalfNslInput").val(obj.灾害史半毁房屋3);
        $("#threeFarmDamageAllNslInput").val(obj.灾害史全毁农田3);
        $("#threeFarmDamageHalfNslInput").val(obj.灾害史半毁农田3);
        $("#threeRoadNslInput").val(obj.灾害史毁坏道路3);
        $("#threeBridgeNslInput").val(obj.灾害史毁坏桥梁3);
        $("#threeEconomyLossNslInput").val(obj.灾害史直接损失3);
        $("#threeDangerClassNslInput").val(obj.灾害史灾情等级3);
        $("#fourOccurTimeNslInput").val(obj.灾害史发生时间4);
        $("#fourDieNubNslInput").val(obj.灾害史死亡人口4);
        $("#fourAnimalsLossNslInput").val(obj.灾害史损失牲畜4);
        $("#fourDoorDamageAllNslInput").val(obj.灾害史全毁房屋4);
        $("#fourDoorDamageHalfNslInput").val(obj.灾害史半毁房屋4);
        $("#fourFarmDamageNslInput").val(obj.灾害史全毁农田4);
        $("#fourFarmDamageHalfNslInput").val(obj.灾害史半毁农田4);
        $("#fourRoadNslInput").val(obj.灾害史毁坏道路4);
        $("#fourBridgeNslInput").val(obj.灾害史毁坏桥梁4);
        $("#fourEconomyLossNslInput").val(obj.灾害史直接损失4);
        $("#fourDangerClassNslInput").val(obj.灾害史灾情等级4);
        $("#fiveOccurTimeNslInput").val(obj.灾害史发生时间5);
        $("#fiveDieNubNslInput").val(obj.灾害史死亡人口5);
        $("#fiveAnimalsLossNslInput").val(obj.灾害史损失牲畜5);
        $("#fiveDoorDamageAllNslInput").val(obj.灾害史全毁房屋5);
        $("#fiveDoorDamageHalfNslInput").val(obj.灾害史半毁房屋5);
        $("#fiveFarmDamageAllNslInput").val(obj.灾害史全毁农田5);
        $("#fiveFarmDamageHalfNslInput").val(obj.灾害史半毁农田5);
        $("#fiveRoadNslInput").val(obj.灾害史毁坏道路5);
        $("#fiveBridgeNslInput").val(obj.灾害史毁坏桥梁5);
        $("#fiveEconomyLossNslInput").val(obj.灾害史直接损失5);
        $("#fiveDangerClassNslInput").val(obj.灾害史灾情等级5);
        $("#outVolumeNslInput").val(obj.泥石流冲出方量);
        if (obj.泥石流规模等级 != null) {
            $("#scaleLevelNsl input[type=radio]").each(function () {
                if (obj.泥石流规模等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#mudNslInput").val(obj.泥石流泥位);
        if (obj.不良地质现象 != null) {
            $("#badGeoPhNsl input[type=radio]").each(function () {
                if (obj.不良地质现象 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#supplyLengthNslInput").val(obj.补给段长度比);
        if (obj.沟口扇形地 != null) {
            $("#ditchSectorNsl input[type=radio]").each(function () {
                if (obj.沟口扇形地 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#mainDitchLonSlopeNslInput").val(obj.主沟纵坡);
        if (obj.新构造影响 != null) {
            $("#newStructureInfluenceNslInput").val(obj.新构造影响);
        }
        $("#vegetationCoverNslInput").val(obj.植被覆盖率);
        $("#luffPunchNslInput").val(obj.冲淤变幅);
        $("#lithologyFactorNslInput").val(obj.岩性因素);
        $("#looseMaterialReservesNslInput").val(obj.松散物储量);
        $("#mountainsideGradientNslInput").val(obj.山坡坡度);
        $("#ditchTransverseNslInput").val(obj.沟槽横断面);
        $("#looseMaterialAverageNslInput").val(obj.松散物平均厚);
        $("#watershedAreaNslInput").val(obj.流域面积);
        $("#relativeHeightDiffNslInput").val(obj.相对高差);
        if (obj.堵塞程度 != null) {
            $("#blockDegreeNsl input[type=radio]").each(function () {
                if (obj.堵塞程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#oneScoreInput").val(obj.评分1);
        $("#twoScoreInput").val(obj.评分2);
        $("#threeScoreInput").val(obj.评分3);
        $("#fourScoreInput").val(obj.评分4);
        $("#fiveScoreInput").val(obj.评分5);
        $("#sixScoreInput").val(obj.评分6);
        $("#sevenScoreInput").val(obj.评分7);
        $("#eightScoreInput").val(obj.评分8);
        $("#nineScoreInput").val(obj.评分9);
        $("#tenScoreInput").val(obj.评分10);
        $("#elevenScoreInput").val(obj.评分11);
        $("#twelveScoreInput").val(obj.评分12);
        $("#thirteenScoreInput").val(obj.评分13);
        $("#fourteenScoreInput").val(obj.评分14);
        $("#fivteenScoreInput").val(obj.评分15);
        $("#totalScoreInput").val(obj.总分);
        if (obj.易发程度 != null) {
            $("#occurProbalityNsl input[type=radio]").each(function () {
                if (obj.易发程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.泥石流类型 != null) {
            $("#typeNsl input[type=radio]").each(function () {
                if (obj.泥石流类型 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.发展阶段 != null) {
            $("#developStageNsl input[type=radio]").each(function () {
                if (obj.发展阶段 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#fzjyNSL").val(obj.防治建议);
        $("#dangerPointNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.隐患点) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.隐患点) {
                $(this).attr("checked", true);
            }
        });
        $("#pdPlanNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.防灾预案) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.防灾预案) {
                $(this).attr("checked", true);
            }
        });
        $("#mediaNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.多媒体) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.多媒体) {
                $(this).attr("checked", true);
            }
        });
        $("#gmPersonNslInput").val(obj.群测人员);
        $("#vHeadNslInput").val(obj.村长);
        $("#phoneNslInput").val(obj.电话);
        $("#investiPersonNslInput").val(obj.调查负责人);
        $("#fillerNslInput").val(obj.填表人);
        $("#auditNslInput").val(obj.审核人);
        $("#investiUnitNslInput").val(obj.调查单位);
        $("#dateNslInput").val(obj.填表日期);

        $("#qingkuangNslInput").val(obj.泥石流情况);
        $("#provinceNslInput").html(obj.省名);
        $("#countyNsl").find("option").text(obj.县名);
        //        mudflowOption.街道 = "";
        //        mudflowOption.示意图 = null;
        //        mudflowOption.平面示意图路径 = null;
        //        mudflowOption.剖面示意图路径 = null;
        //        mudflowOption.灾情等级 = "";
        //        mudflowOption.水动力类型 = "";
        if (obj.水动力类型 != null) {
            $("#waterHydroTypeNsl input[type=checkbox]").each(function () {
                if (obj.水动力类型.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //        mudflowOption.泥砂补给途径 = "";
        if (obj.泥砂补给途径 != null) {
            $("#supplyWayNsl input[type=checkbox]").each(function () {
                if (obj.泥砂补给途径.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //        mudflowOption.补给区位置 = "";
        if (obj.补给区位置 != null) {
            $("#supplyLocationNsl input[type=checkbox]").each(function () {
                if (obj.补给区位置.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //        mudflowOption.监测措施类型 = "";
        if (obj.监测措施类型 != null) {
            $("#monitorMeasureTypeNsl input[type=checkbox]").each(function () {
                if (obj.监测措施类型.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //        mudflowOption.威胁危害对象 = "";
        if (obj.威胁危害对象 != null) {
            $("#threatenTypeNsl input[type=checkbox]").each(function () {
                if (obj.威胁危害对象.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //        mudflowOption.防治措施类型 = "";
        if (obj.防治措施类型 != null) {
            $("#preventMeasureTypeNsl input[type=checkbox]").each(function () {
                if (obj.防治措施类型.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //        mudflowOption.监测建议 = "";
        if (obj.防治建议 != null) {
            $("#preventAdviceNsl input[type=checkbox]").each(function () {
                if (obj.防治建议.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //        mudflowOption.野外编号 = "";

        if (obj.泥石流规模等级 != null) {
            $("#scaleLevelNsl input[type=radio]").each(function () {
                if (obj.泥石流规模等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        if (obj.地震烈度 != null) {
            $("#eqIntensityNslInput input[type=radio]").each(function () {
                if (obj.地震烈度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        //县名称
        var number = obj.统一编号.substring(0, 6);
        var xian = "市辖区";
        switch (number) {
            case "370101":
                xian = "市辖区";
                $("#countyNsl").children("option").eq(0).attr("selected", "selected");
                break;
            case "370188":
                xian = "高新区";
                $("#countyNsl").children("option").eq(1).attr("selected", "selected");
                break;
            case "370102":
                xian = "历下区";
                $("#countyNsl").children("option").eq(2).attr("selected", "selected");
                break;
            case "370103":
                xian = "市中区";
                $("#countyNsl").children("option").eq(3).attr("selected", "selected");
                break;
            case "370104":
                xian = "槐荫区";
                $("#countyNsl").children("option").eq(4).attr("selected", "selected");
                break;
            case "370105":
                xian = "天桥区";
                $("#countyNsl").children("option").eq(5).attr("selected", "selected");
                break;
            case "370112":
                xian = "历城区";
                $("#countyNsl").children("option").eq(6).attr("selected", "selected");
                break;
            case "370113":
                xian = "长清区";
                $("#countyNsl").children("option").eq(7).attr("selected", "selected");
                break;
            case "370124":
                xian = "平阴县";
                $("#countyNsl").children("option").eq(8).attr("selected", "selected");
                break;
            case "370125":
                xian = "济阳县";
                $("#countyNsl").children("option").eq(9).attr("selected", "selected");
                break;
            case "370126":
                xian = "商河县";
                $("#countyNsl").children("option").eq(10).attr("selected", "selected");
                break;
            case "370181":
                xian = "章丘市";
                $("#countyNsl").children("option").eq(11).attr("selected", "selected");
                break;
        }

        var planImg = [];
        var profileImg = [];
        var baseImg = [];
        var videoArrs = [];
        var ImgsIds = obj.IDs;
        var IdsArr = null;
        var PathsArr = null;
        var TypesArr = null;
        if (ImgsIds != null && ImgsIds != "") {
            IdsArr = ImgsIds.split('&');
            PathsArr = obj.DiskPaths.split('&');
            TypesArr = obj.DisaIdNums.split('&');
            for (var j = 0; j < IdsArr.length; j++) {
                var img = {};
                img.ID = IdsArr[j];
                img.DisaId = obj.统一编号;
                img.DisaIdNum = TypesArr[j];
                img.DiskPath = PathsArr[j];
                if (img.DisaIdNum == "1") {
                    planImg.push(img);
                }
                else if (img.DisaIdNum == "2") {
                    profileImg.push(img);
                }
                else if (img.DisaIdNum == "3") {
                    baseImg.push(img);
                }
                else if (img.DisaIdNum == "4") {
                    videoArrs.push(img);
                }
            }
        }
        UpDataPicFun("planLsl", "平面图", obj.统一编号, planImg);
        UpDataPicFun("profileLsl", "剖面图", obj.统一编号, profileImg);
        UpDataPicFun("nsl_BaseImg", "基础图", obj.统一编号, baseImg);
        UpBaseVideoFun("nsl_Videos", "视频", obj.统一编号, true, videoArrs);

    })(isasterFakedData, $$("#mudFlowId").val());
}

function update() {

    $("#BIT_right_img_UpdateMudFlow").click(function () {
        alert("保存成功");
        return false;
        var mudflowOption = {};
        mudflowOption.统一编号 = "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val();
        mudflowOption.名称 = $("#nameNslInput").val();
        mudflowOption.野外编号 = "";
        mudflowOption.室内编号 = $("#rNubNslInput").val();
        mudflowOption.经度 = $("#jingduLSLDu").val() + "-" + $("#jingduLSLFen").val() + "-" + $("#jingduLSLMiao").val();
        mudflowOption.纬度 = $("#weiduLSLDu").val() + "-" + $("#weiduLSLFen").val() + "-" + $("#weiduLSLMiao").val();
        mudflowOption.地理位置 = $("#locationNslInput").val();
        mudflowOption.最大标高 = $("#combNslInput").val();
        mudflowOption.最小标高 = $("#toeNslInput").val();
        mudflowOption.X坐标 = $("#xCoordinateNslInput").val();
        mudflowOption.Y坐标 = $("#yCoordinateNslInput").val();
        mudflowOption.水系名称 = $("#riverNameNslInput").val();
        mudflowOption.主河名称 = $("#mainRiverNameNslInput").val();
        mudflowOption.相对主河位置 = $("#comMainRiverLocationNsl").find("input:checked").val();
        mudflowOption.沟口至主河道距 = $("#ditchDistanceNslInput").val();
        mudflowOption.流动方向 = $("#flowDirectionNslInput").val();
        mudflowOption.水动力类型 = checkBoxConInfo("#waterHydroTypeNsl");
        mudflowOption.沟口巨石A = $("#gkjsdxANslInput").val();
        mudflowOption.沟口巨石B = $("#gkjsdxBNslInput").val();
        mudflowOption.沟口巨石C = $("#gkjsdxCNslInput").val();
        mudflowOption.泥砂补给途径 = checkBoxConInfo("#supplyWayNsl");
        mudflowOption.补给区位置 = checkBoxConInfo("#supplyLocationNsl");
        mudflowOption.年最大降雨 = $("#yearMaxSRainfallNslInput").val();
        mudflowOption.年平均降雨 = $("#yearAverageSRainfallNslInput").val();
        mudflowOption.日最大降雨 = $("#dayMaxSRainfallNslInput").val();
        mudflowOption.日平均降雨 = $("#dayAverageSRainfallNslInput").val();
        mudflowOption.时最大降雨 = $("#hourMaxSRainfallNslInput").val();
        mudflowOption.时平均降雨 = $("#hourAverageSRainfallNslInput").val();
        mudflowOption.十分钟最大降雨 = $("#tenminutesMaxSRainfallNslInput").val();
        mudflowOption.十分钟平均降雨 = $("#tenminutesAverageSRainfallNslInput").val();
        mudflowOption.沟口扇形地完整性 = $("#sectorIntegrityNslInput").val();
        mudflowOption.沟口扇形地变幅 = $("#sectorLuffPunchNslInput").val();
        mudflowOption.沟口扇形地发展趋势 = $("#sectorDevelopTrendNsl").find("input:checked").val();
        mudflowOption.沟口扇形地扇长 = $("#sectorLengthNslInput").val();
        mudflowOption.沟口扇形地扇宽 = $("#sectorWidthNslInput").val();
        mudflowOption.沟口扇形地扩散角 = $("#sectorDiffusionAngleNslInput").val();
        mudflowOption.沟口扇形地挤压大河 = $("#compressRiverNsl").find("input:checked").val();
        mudflowOption.地质构造 = checkBoxConInfo("#geoStructureNsl");
        mudflowOption.地震烈度 = $("#eqIntensityNslInput").find("input:checked").val();
        mudflowOption.滑坡活动程度 = $("#landslidActivityNsl").find("input:checked").val();
        mudflowOption.滑坡规模 = $("#landslidScaleNsl").find("input:checked").val();
        mudflowOption.人工弃体活动程度 = $("#artificialAbandonedBodyActivityNsl").find("input:checked").val();
        mudflowOption.人工弃体规模 = $("#artificialAbandonedBodyScaleNsl").find("input:checked").val();
        mudflowOption.自然堆积活动程度 = $("#naturalStackActivityNsl").find("input:checked").val();
        mudflowOption.自然堆积规模 = $("#naturalStackScaleNsl").find("input:checked").val();
        mudflowOption.森林 = $("#forestNslInput").val();
        mudflowOption.灌丛 = $("#shrubNslInput").val();
        mudflowOption.草地 = $("#grasslandsNslInput").val();
        mudflowOption.缓坡耕地 = $("#gentleSlopeCultivatedLandNslInput").val();
        mudflowOption.荒地 = $("#wastelandNslInput").val();
        mudflowOption.陡坡耕地 = $("#slopeCultivatedLandNslInput").val();
        mudflowOption.建筑用地 = $("#buildLandNslInput").val();
        mudflowOption.其它用地 = $("#otherLandNslInput").val();
        mudflowOption.防治措施现状 = $("#preventMeasureNsl input[type=radio]:checked").val();
        mudflowOption.防治措施类型 = checkBoxConInfo("#preventMeasureTypeNsl");
        mudflowOption.监测措施 = $("#monitorMeasureNsl input[type=radio]:checked").val();
        mudflowOption.监测措施类型 = checkBoxConInfo("#monitorMeasureTypeNsl");
        mudflowOption.威胁危害对象 = checkBoxConInfo("#threatenTypeNsl");
        mudflowOption.威胁人口 = $("#threatenNubhNslInput").val();
        mudflowOption.威胁财产 = $("#threatenFortunehNslInput").val();
        mudflowOption.险情等级 = $("#damageClassNsl input[type=radio]:checked").val();
        mudflowOption.灾情等级 = "";
        mudflowOption.灾害史发生时间1 = $("#oneOccurTimeNslInput").val();
        mudflowOption.灾害史死亡人口1 = $("#oneDieNubNslInput").val();
        mudflowOption.灾害史损失牲畜1 = $("#oneAnimalsLossNslInput").val();
        mudflowOption.灾害史全毁房屋1 = $("#oneDoorDamageNslInput").val();
        mudflowOption.灾害史半毁房屋1 = $("#oneDoorDamageHalfNslInput").val();
        mudflowOption.灾害史全毁农田1 = $("#oneFarmDamageAllNslInput").val();
        mudflowOption.灾害史半毁农田1 = $("#oneFarmDamageHalfNslInput").val();
        mudflowOption.灾害史毁坏道路1 = $("#oneRoadNslInput").val();
        mudflowOption.灾害史毁坏桥梁1 = $("#oneBridgeNslInput").val();
        mudflowOption.灾害史直接损失1 = $("#oneEconomyLossNslInput").val();
        mudflowOption.灾害史灾情等级1 = $("#oneDangerClassNslInput option:selected").val();
        mudflowOption.灾害史发生时间2 = $("#twoOccurTimeNslInput").val();
        mudflowOption.灾害史死亡人口2 = $("#twoDieNubNslInput").val();
        mudflowOption.灾害史损失牲畜2 = $("#twoAnimalsLossNslInput").val();
        mudflowOption.灾害史全毁房屋2 = $("#twoDoorDamageAllNslInput").val();
        mudflowOption.灾害史半毁房屋2 = $("#twoDoorDamageHalfNslInput").val();
        mudflowOption.灾害史全毁农田2 = $("#twoFarmDamageAllNslInput").val();
        mudflowOption.灾害史半毁农田2 = $("#twoFarmDamageHalfNslInput").val();
        mudflowOption.灾害史毁坏道路2 = $("#twoRoadNslInput").val();
        mudflowOption.灾害史毁坏桥梁2 = $("#twoBridgeNslInput").val();
        mudflowOption.灾害史直接损失2 = $("#twoEconomyLossNslInput").val();
        mudflowOption.灾害史灾情等级2 = $("#twoDangerClassNslInput option:selected").val();
        mudflowOption.灾害史发生时间3 = $("#threeOccurTimeNslInput").val();
        mudflowOption.灾害史死亡人口3 = $("#threeDieNubNslInput").val();
        mudflowOption.灾害史损失牲畜3 = $("#threeAnimalsLossNslInput").val();
        mudflowOption.灾害史全毁房屋3 = $("#threeDoorDamageAllNslInput").val();
        mudflowOption.灾害史半毁房屋3 = $("#threeDoorDamageHalfNslInput").val();
        mudflowOption.灾害史全毁农田3 = $("#threeFarmDamageAllNslInput").val();
        mudflowOption.灾害史半毁农田3 = $("#threeFarmDamageHalfNslInput").val();
        mudflowOption.灾害史毁坏道路3 = $("#threeRoadNslInput").val();
        mudflowOption.灾害史毁坏桥梁3 = $("#threeBridgeNslInput").val();
        mudflowOption.灾害史直接损失3 = $("#threeEconomyLossNslInput").val();
        mudflowOption.灾害史灾情等级3 = $("#threeDangerClassNslInput option:selected").val();
        mudflowOption.灾害史发生时间4 = $("#fourOccurTimeNslInput").val();
        mudflowOption.灾害史死亡人口4 = $("#fourDieNubNslInput").val();
        mudflowOption.灾害史损失牲畜4 = $("#fourAnimalsLossNslInput").val();
        mudflowOption.灾害史全毁房屋4 = $("#fourDoorDamageAllNslInput").val();
        mudflowOption.灾害史半毁房屋4 = $("#fourDoorDamageHalfNslInput").val();
        mudflowOption.灾害史全毁农田4 = $("#fourFarmDamageNslInput").val();
        mudflowOption.灾害史半毁农田4 = $("#fourFarmDamageHalfNslInput").val();
        mudflowOption.灾害史毁坏道路4 = $("#fourRoadNslInput").val();
        mudflowOption.灾害史毁坏桥梁4 = $("#fourBridgeNslInput").val();
        mudflowOption.灾害史直接损失4 = $("#fourEconomyLossNslInput").val();
        mudflowOption.灾害史灾情等级4 = $("#fourDangerClassNslInput option:selected").val();
        mudflowOption.灾害史发生时间5 = $("#fiveOccurTimeNslInput").val();
        mudflowOption.灾害史死亡人口5 = $("#fiveDieNubNslInput").val();
        mudflowOption.灾害史损失牲畜5 = $("#fiveAnimalsLossNslInput").val();
        mudflowOption.灾害史全毁房屋5 = $("#fiveDoorDamageAllNslInput").val();
        mudflowOption.灾害史半毁房屋5 = $("#fiveDoorDamageHalfNslInput").val();
        mudflowOption.灾害史全毁农田5 = $("#fiveFarmDamageAllNslInput").val();
        mudflowOption.灾害史半毁农田5 = $("#fiveFarmDamageHalfNslInput").val();
        mudflowOption.灾害史毁坏道路5 = $("#fiveRoadNslInput").val();
        mudflowOption.灾害史毁坏桥梁5 = $("#fiveBridgeNslInput").val();
        mudflowOption.灾害史直接损失5 = $("#fiveEconomyLossNslInput").val();
        mudflowOption.灾害史灾情等级5 = $("#fiveDangerClassNslInput option:selected").val();
        mudflowOption.泥石流冲出方量 = $("#outVolumeNslInput").val();
        mudflowOption.泥石流规模等级 = $("#scaleLevelNsl input[type=radio]:checked").val();
        mudflowOption.泥石流泥位 = $("#mudNslInput").val();
        mudflowOption.不良地质现象 = $("#badGeoPhNsl input[type=radio]:checked").val();
        mudflowOption.补给段长度比 = $("#supplyLengthNslInput").val();
        mudflowOption.沟口扇形地 = $("#ditchSectorNsl input[type=radio]:checked").val();
        mudflowOption.主沟纵坡 = $("#mainDitchLonSlopeNslInput").val();
        mudflowOption.新构造影响 = $("#newStructureInfluenceNslInput option:selected").val();
        mudflowOption.植被覆盖率 = $("#vegetationCoverNslInput").val();
        mudflowOption.冲淤变幅 = $("#luffPunchNslInput").val();
        mudflowOption.岩性因素 = $("#lithologyFactorNslInput option:selected").val();
        mudflowOption.松散物储量 = $("#looseMaterialReservesNslInput").val();
        mudflowOption.山坡坡度 = $("#mountainsideGradientNslInput").val();
        mudflowOption.沟槽横断面 = $("#ditchTransverseNslInput option:selected").val();
        mudflowOption.松散物平均厚 = $("#looseMaterialAverageNslInput").val();
        mudflowOption.流域面积 = $("#watershedAreaNslInput").val();
        mudflowOption.相对高差 = $("#relativeHeightDiffNslInput").val();
        mudflowOption.堵塞程度 = $("#blockDegreeNsl input[type=radio]:checked").val();
        mudflowOption.评分1 = $("#oneScoreInput").val();
        mudflowOption.评分2 = $("#twoScoreInput").val();
        mudflowOption.评分3 = $("#threeScoreInput").val();
        mudflowOption.评分4 = $("#fourScoreInput").val();
        mudflowOption.评分5 = $("#fiveScoreInput").val();
        mudflowOption.评分6 = $("#sixScoreInput").val();
        mudflowOption.评分7 = $("#sevenScoreInput").val();
        mudflowOption.评分8 = $("#eightScoreInput").val();
        mudflowOption.评分9 = $("#nineScoreInput").val();
        mudflowOption.评分10 = $("#tenScoreInput").val();
        mudflowOption.评分11 = $("#elevenScoreInput").val();
        mudflowOption.评分12 = $("#twelveScoreInput").val();
        mudflowOption.评分13 = $("#thirteenScoreInput").val();
        mudflowOption.评分14 = $("#fourteenScoreInput").val();
        mudflowOption.评分15 = $("#fivteenScoreInput").val();
        mudflowOption.总分 = $("#totalScoreInput").val();
        mudflowOption.易发程度 = $("#occurProbalityNsl").find("input:checked").val();
        mudflowOption.泥石流类型 = $("#typeNsl").find("input:checked").val();
        mudflowOption.发展阶段 = $("#developStageNsl").find("input:checked").val();
        mudflowOption.监测建议 = $("#monitorAdviceNsl").find("input:checked").val();
        mudflowOption.防治建议 = $("#fzjyNSL").val();
        mudflowOption.隐患点 = $("#dangerPointNsl").find("input:checked").val();
        mudflowOption.防灾预案 = $("#pdPlanNsl").find("input:checked").val();
        mudflowOption.多媒体 = $("#mediaNsl").find("input:checked").val();
        mudflowOption.群测人员 = $("#gmPersonNslInput").val();
        mudflowOption.村长 = $("#vHeadNslInput").val();
        mudflowOption.电话 = $("#phoneNslInput").val();
        mudflowOption.调查负责人 = $("#investiPersonNslInput").val();
        mudflowOption.填表人 = $("#fillerNslInput").val();
        mudflowOption.审核人 = $("#auditNslInput").val();
        mudflowOption.调查单位 = $("#investiUnitNslInput").val();
        mudflowOption.填表日期 = $("#dateNslInput").val();
        mudflowOption.示意图 = null;
        mudflowOption.平面示意图路径 = null;
        mudflowOption.剖面示意图路径 = null;
        mudflowOption.泥石流情况 = $("#qingkuangNslInput").val();
        mudflowOption.省名 = $("#provinceNslInput").html();
        mudflowOption.县名 = $("#countyNsl").find("option:selected").text();
        mudflowOption.街道 = "";


        var comprehensiveOption = {};
        comprehensiveOption.统一编号 = "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val();
        comprehensiveOption.地理位置 = $("#locationNslInput").val();
        comprehensiveOption.名称 = $("#nameNslInput").val();
        comprehensiveOption.经度 = $("#jingduLSLDu").val() + "-" + $("#jingduLSLFen").val() + "-" + $("#jingduLSLMiao").val();
        comprehensiveOption.纬度 = $("#weiduLSLDu").val() + "-" + $("#weiduLSLFen").val() + "-" + $("#weiduLSLMiao").val();
        comprehensiveOption.死亡人数 = "";
        comprehensiveOption.威胁人口 = $("#threatenNubhNslInput").val();
        comprehensiveOption.直接经济损失 = "";
        comprehensiveOption.威胁财产 = $("#threatenFortunehNslInput").val();;
        comprehensiveOption.目前稳定状态 = "";
        comprehensiveOption.灾害规模等级 = "";
        comprehensiveOption.灾情等级 = "";
        comprehensiveOption.险情等级 = $("#damageClassNsl input[type=radio]:checked").val();
        comprehensiveOption.X坐标 = $("#xCoordinateNslInput").val();
        comprehensiveOption.Y坐标 = $("#yCoordinateNslInput").val();
        comprehensiveOption.灾害体积 = "";
        comprehensiveOption.灾害类型 = "03";
        comprehensiveOption.国际代码 = $("#countyNsl").val();
        comprehensiveOption.真实状态 = "0";

        var disaIimg = disaImage_1();

        $.post(baseUrl + "QueryMudFlow/UpdateMudFlow", { "compreStr": JSON.stringify(comprehensiveOption), "objStr": JSON.stringify(mudflowOption), "planImgs": JSON.stringify(disaIimg) }, function (data) {
            if (data == "sucess") {
                alert("数据修改成功！");
                $(".Imgscan").find(".Imageexist").html("1");
            }
        });
    });

    //返回事件CSW
    $("#BIT_right_img_Return").click(function () {
        window.location.href = baseUrl1 + "Apps/JnDbDeleteAndEdit/index";
    })
    //返回主页事件CSW
    $("#BIT_right_img_GoHome").click(function () {
        top.fullPanel2.closeByIFrameGoHome();
    })
}

function checkBoxConInfo(id) {
    var conStr = "";
    conStr = $(id + " input[type=checkbox]:checked").map(function () {
        return $(this).val();
    }).get().join(",");
    return conStr;
}


//图片
function disaImage_1() {
    var list = [];
    var Num = $("#planLsl  .Imgscan").length;
    for (var i = 0; i < Num; i++) {  //平面图
        var jjl = $("#planLsl  .Imgscan").eq(i).find(".Imageexist").html();
        if ($("#planLsl  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg = {};
            var imgpath = $("#planLsl  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg.Name = imgArr[imgArr.length - 1];
            disaimg.DisaId = "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val();
            disaimg.DisaIdNum = 1;
            disaimg.FileType = "Image";
            disaimg.Format = houzui[houzui.length - 1];
            disaimg.DiskPath = imgpath.replace(baseUrl, "/");
            disaimg.UploadTime = d.toLocaleTimeString()
            disaimg.OriFileName = "";
            disaimg.Region = disaimg.DisaId.substring(0, 6);
            disaimg.Description = "平面图";

            list.push(disaimg);
        }
    }
    var Num2 = $("#profileLsl  .Imgscan").length;
    for (var i = 0; i < Num2; i++) {    //剖面图
        if ($("#profileLsl  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg2 = {};
            var imgpath = $("#profileLsl  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg2.Name = imgArr[imgArr.length - 1];
            disaimg2.DisaId = "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val();
            disaimg2.DisaIdNum = 2;
            disaimg2.FileType = "Image";
            disaimg2.Format = houzui[houzui.length - 1];
            disaimg2.DiskPath = imgpath.replace(baseUrl, "/");
            disaimg2.UploadTime = d.toLocaleTimeString()
            disaimg2.OriFileName = "";
            disaimg2.Region = disaimg2.DisaId.substring(0, 6);
            disaimg2.Description = "剖面图";

            list.push(disaimg2);
        }
    }

    var Num3 = $("#nsl_BaseImg  .Imgscan").length;
    for (var i = 0; i < Num3; i++) {    //基础图
        if ($("#nsl_BaseImg  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg3 = {};
            var imgpath = $("#nsl_BaseImg  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg3.Name = imgArr[imgArr.length - 1];
            disaimg3.DisaId = "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val();
            disaimg3.DisaIdNum = 3;
            disaimg3.FileType = "Image";
            disaimg3.Format = houzui[houzui.length - 1];
            disaimg3.DiskPath = imgpath.replace(baseUrl, "/");
            disaimg3.UploadTime = d.toLocaleTimeString()
            disaimg3.OriFileName = "";
            disaimg3.Region = disaimg3.DisaId.substring(0, 6);
            disaimg3.Description = "基础图";

            list.push(disaimg3);
        }
    }


    var Num4 = $("#nsl_Videos  .Imgscan").length;
    for (var i = 0; i < Num4; i++) {    //基础图
        if ($("#nsl_Videos  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg4 = {};
            var imgpath = $("#nsl_Videos  .Imgscan").eq(i).find(".video_src").eq(0).html()
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg4.Name = imgArr[imgArr.length - 1];
            disaimg4.DisaId = "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val();
            disaimg4.DisaIdNum = 4;
            disaimg4.FileType = "Video";
            disaimg4.Format = houzui[houzui.length - 1];
            disaimg4.DiskPath = imgpath.replace(baseUrl, "/");
            disaimg4.UploadTime = d.toLocaleTimeString()
            disaimg4.OriFileName = "";
            disaimg4.Region = disaimg4.DisaId.substring(0, 6);
            disaimg4.Description = "视频";

            list.push(disaimg4);
        }
    }


    return list;
}