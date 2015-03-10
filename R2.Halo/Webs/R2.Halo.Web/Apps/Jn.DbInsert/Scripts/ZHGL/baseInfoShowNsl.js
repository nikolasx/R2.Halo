//----------------泥石流信息展示----------------//

$(function () {
    $(".BIT_left_cell:eq(0)").trigger("click");
    tableSwitchReg();
    appendNslValue();
})

function tableSwitchReg() {
    $(".BIT_left_cell:eq(0)").css({ "background-color": "#ffffff", "border-right": "1px solid transparent" });
    $(".BIT_left_cell").click(function () {
        var index = $(".BIT_left_cell").index($(this));
        $(".BIT_left_cell:eq(" + index + ")").css({ "background-color": "#ffffff", "border-right": "1px solid transparent" })
            .siblings(".BIT_left_cell").css({ "background-color": "#F4F8FB", "border-right": "1px solid #CAD8E4" });
        $(".BIT_right_table:eq(" + index + ")").css("display", "block").siblings(".BIT_right_table").css("display", "none");
    });
}

function appendNslValue() {
    var nslTybh = $("#nslTybh").text();
    $("input").attr("disabled", "disabled");
    $.post(baseUrl + "QueryMudFlow/GetMudFlowById", { "id": nslTybh }, function (data) {
        if (data == "fail") {
            return false;
        }
        var obj = eval("(" + data + ")");

        $("#unifiedNumberLSL").text(nslTybh);
        $("#nameNslInput").text(obj.名称);
        $("#rNubNslInput").text(obj.室内编号);
        $("#jingduLSL").text(obj.经度.split('-')[0] + "°" + obj.经度.split('-')[1] +"′"+ obj.经度.split('-')[2] + "″");
        $("#weiduLSL").text(obj.纬度.split('-')[0] + "°" + obj.纬度.split('-')[1] + "′" + obj.纬度.split('-')[2] + "″");
        $("#locationNslInput").text(obj.地理位置);
        $("#combNslInput").text(obj.最大标高);
        $("#toeNslInput").text(obj.最小标高);
        $("#xCoordinateNslInput").text(obj.X坐标);
        $("#yCoordinateNslInput").text(obj.Y坐标);
        $("#riverNameNslInput").text(obj.水系名称);
        $("#mainRiverNameNslInput").text(obj.主河名称);
        //$("#comMainRiverLocationNsl").find("input:checked").val(obj.相对主河位置);
        if (obj.相对主河位置 != null) {
            $("#comMainRiverLocationNsl input[type=radio]").each(function () {
                if (obj.相对主河位置 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#ditchDistanceNslInput").text(obj.沟口至主河道距);
        $("#flowDirectionNslInput").text(obj.流动方向);

        $("#gkjsdxANsl").text(obj.沟口巨石A);
        $("#gkjsdxBNsl").text(obj.沟口巨石B);
        $("#gkjsdxCNsl").text(obj.沟口巨石C);

        $("#yearMaxSRainfallNsl").text(obj.年最大降雨);
        $("#yearAverageSRainfallNsl").text(obj.年平均降雨);
        $("#dayMaxSRainfallNsl").text(obj.日最大降雨);
        $("#dayAverageSRainfallNsl").text(obj.日平均降雨);
        $("#hourMaxSRainfallNsl").text(obj.时最大降雨);
        $("#hourAverageSRainfallNsl").text(obj.时平均降雨);
        $("#tenminutesMaxSRainfallNsl").text(obj.十分钟最大降雨);
        $("#tenminutesAverageSRainfallNsl").text(obj.十分钟平均降雨);
        $("#sectorIntegrityNsl").text(obj.沟口扇形地完整性);
        $("#sectorLuffPunchNsl").text(obj.沟口扇形地变幅);
        //$("#sectorDevelopTrendNsl").find("input:checked").val(obj.沟口扇形地发展趋势);
        if (obj.沟口扇形地发展趋势 != null) {
            $("#sectorDevelopTrendNsl input[type=radio]").each(function () {
                if (obj.沟口扇形地发展趋势 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#sectorLengthNsl").text(obj.沟口扇形地扇长);
        $("#sectorWidthNsl").text(obj.沟口扇形地扇宽);
        $("#sectorDiffusionAngleNsl").text(obj.沟口扇形地扩散角);
        //$("#compressRiverNsl").find("input:checked").val(obj.沟口扇形地挤压大河);
        if (obj.沟口扇形地挤压大河 != null) {
            $("#compressRiverNsl input[type=radio]").each(function () {
                if (obj.沟口扇形地挤压大河 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //"";地震烈度
        if (obj.地震烈度 != null) {
            $("#eqIntensityNslInput input[type=radio]").each(function () {
                if (obj.地震烈度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //"";滑坡活动程度
        if (obj.滑坡活动程度 != null) {
            $("#landslidActivityNsl input[type=radio]").each(function () {
                if (obj.滑坡活动程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //"";滑坡规模
        if (obj.滑坡规模 != null) {
            $("#landslidScaleNsl input[type=radio]").each(function () {
                if (obj.滑坡规模 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#artificialAbandonedBodyActivityNsl").find("input:checked").val(obj.人工弃体活动程度);
        if (obj.人工弃体活动程度 != null) {
            $("#artificialAbandonedBodyActivityNsl input[type=radio]").each(function () {
                if (obj.人工弃体活动程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#artificialAbandonedBodyScaleNsl").find("input:checked").val(obj.人工弃体规模);
        if (obj.人工弃体规模 != null) {
            $("#artificialAbandonedBodyScaleNsl input[type=radio]").each(function () {
                if (obj.人工弃体规模 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#naturalStackActivityNsl").find("input:checked").val(obj.自然堆积活动程度);
        if (obj.自然堆积活动程度 != null) {
            $("#naturalStackActivityNsl input[type=radio]").each(function () {
                if (obj.自然堆积活动程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#naturalStackScaleNsl").find("input:checked").val(obj.自然堆积规模);
        if (obj.自然堆积规模 != null) {
            $("#naturalStackScaleNsl input[type=radio]").each(function () {
                if (obj.自然堆积规模 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#forestNsl").text(obj.森林);
        $("#shrubNsl").text(obj.灌丛);
        $("#grasslandsNsl").text(obj.草地);
        $("#gentleSlopeCultivatedLandNsl").text(obj.缓坡耕地);
        $("#wastelandNsl").text(obj.荒地);
        $("#slopeCultivatedLandNsl").text(obj.陡坡耕地);
        $("#buildLandNsl").text(obj.建筑用地);
        $("#otherLandNsl").text(obj.其它用地);
        //$("#preventMeasureNsl input[type=radio]:checked").val(obj.防治措施现状);
        $("#preventMeasureNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.防治措施现状) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.防治措施现状) {
                $(this).attr("checked", true);
            }
        });
        //$("#monitorMeasureNsl input[type=radio]:checked").val(obj.监测措施);
        $("#monitorMeasureNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.监测措施) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.监测措施) {
                $(this).attr("checked", true);
            }
        });
        $("#threatenNubhNsl").text(obj.威胁人口);
        $("#threatenFortunehNsl").text(obj.威胁财产);
        //$("#damageClassNsl input[type=radio]:checked").val(obj.险情等级);
        if (obj.险情等级 != null) {
            $("#damageClassNsl input[type=radio]").each(function () {
                if (obj.险情等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#oneOccurTimeNsl").text(obj.灾害史发生时间1);
        $("#oneDieNubNsl").text(obj.灾害史死亡人口1);
        $("#oneAnimalsLossNsl").text(obj.灾害史损失牲畜1);
        $("#oneDoorDamageNsl").text(obj.灾害史全毁房屋1);
        $("#oneDoorDamageHalfNsl").text(obj.灾害史半毁房屋1);
        $("#oneFarmDamageAllNsl").text(obj.灾害史全毁农田1);
        $("#oneFarmDamageHalfNsl").text(obj.灾害史半毁农田1);
        $("#oneRoadNsl").text(obj.灾害史毁坏道路1);
        $("#oneBridgeNsl").text(obj.灾害史毁坏桥梁1);
        $("#oneEconomyLossNsl").text(obj.灾害史直接损失1);
        $("#oneDangerClassNsl").text(obj.灾害史灾情等级1);
        $("#twoOccurTimeNsl").text(obj.灾害史发生时间2);
        $("#twoDieNubNsl").text(obj.灾害史死亡人口2);
        $("#twoAnimalsLossNsl").text(obj.灾害史损失牲畜2);
        $("#twoDoorDamageAllNsl").text(obj.灾害史全毁房屋2);
        $("#twoDoorDamageHalfNsl").text(obj.灾害史半毁房屋2);
        $("#twoFarmDamageAllNsl").text(obj.灾害史全毁农田2);
        $("#twoFarmDamageHalfNsl").text(obj.灾害史半毁农田2);
        $("#twoRoadNsl").text(obj.灾害史毁坏道路2);
        $("#twoBridgeNsl").text(obj.灾害史毁坏桥梁2);
        $("#twoEconomyLossNsl").text(obj.灾害史直接损失2);
        $("#twoDangerClassNsl").text(obj.灾害史灾情等级2);
        $("#threeOccurTimeNsl").text(obj.灾害史发生时间3);
        $("#threeDieNubNsl").text(obj.灾害史死亡人口3);
        $("#threeAnimalsLossNsl").text(obj.灾害史损失牲畜3);
        $("#threeDoorDamageAllNsl").text(obj.灾害史全毁房屋3);
        $("#threeDoorDamageHalfNsl").text(obj.灾害史半毁房屋3);
        $("#threeFarmDamageAllNsl").text(obj.灾害史全毁农田3);
        $("#threeFarmDamageHalfNsl").text(obj.灾害史半毁农田3);
        $("#threeRoadNsl").text(obj.灾害史毁坏道路3);
        $("#threeBridgeNsl").text(obj.灾害史毁坏桥梁3);
        $("#threeEconomyLossNsl").text(obj.灾害史直接损失3);
        $("#threeDangerClassNsl").text(obj.灾害史灾情等级3);
        $("#fourOccurTimeNsl").text(obj.灾害史发生时间4);
        $("#fourDieNubNsl").text(obj.灾害史死亡人口4);
        $("#fourAnimalsLossNsl").text(obj.灾害史损失牲畜4);
        $("#fourDoorDamageAllNsl").text(obj.灾害史全毁房屋4);
        $("#fourDoorDamageHalfNsl").text(obj.灾害史半毁房屋4);
        $("#fourFarmDamageNsl").text(obj.灾害史全毁农田4);
        $("#fourFarmDamageHalfNsl").text(obj.灾害史半毁农田4);
        $("#fourRoadNsl").text(obj.灾害史毁坏道路4);
        $("#fourBridgeNsl").text(obj.灾害史毁坏桥梁4);
        $("#fourEconomyLossNsl").text(obj.灾害史直接损失4);
        $("#fourDangerClassNsl").text(obj.灾害史灾情等级4);
        $("#fiveOccurTimeNsl").text(obj.灾害史发生时间5);
        $("#fiveDieNubNsl").text(obj.灾害史死亡人口5);
        $("#fiveAnimalsLossNsl").text(obj.灾害史损失牲畜5);
        $("#fiveDoorDamageAllNsl").text(obj.灾害史全毁房屋5);
        $("#fiveDoorDamageHalfNsl").text(obj.灾害史半毁房屋5);
        $("#fiveFarmDamageAllNsl").text(obj.灾害史全毁农田5);
        $("#fiveFarmDamageHalfNsl").text(obj.灾害史半毁农田5);
        $("#fiveRoadNsl").text(obj.灾害史毁坏道路5);
        $("#fiveBridgeNsl").text(obj.灾害史毁坏桥梁5);
        $("#fiveEconomyLossNsl").text(obj.灾害史直接损失5);
        $("#fiveDangerClassNsl").text(obj.灾害史灾情等级5);
        $("#outVolumeNsl").text(obj.泥石流冲出方量);
        //$("#scaleLevelNsl input[type=radio]:checked").val(obj.泥石流规模等级);
        if (obj.泥石流规模等级 != null) {
            $("#scaleLevelNsl input[type=radio]").each(function () {
                if (obj.泥石流规模等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#mudNsl").text(obj.泥石流泥位);
        //$("#badGeoPhNsl input[type=radio]:checked").val(obj.不良地质现象);
        if (obj.不良地质现象 != null) {
            $("#badGeoPhNsl input[type=radio]").each(function () {
                if (obj.不良地质现象 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#supplyLengthNsl").text(obj.补给段长度比);
        //$("#ditchSectorNsl input[type=radio]:checked").val(obj.沟口扇形地);
        if (obj.沟口扇形地 != null) {
            $("#ditchSectorNsl input[type=radio]").each(function () {
                if (obj.沟口扇形地 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#mainDitchLonSlopeNsl").text(obj.主沟纵坡);
        //$("#newStructureInfluenceNslInput option:selected").val(obj.新构造影响);
        if (obj.新构造影响 != null) {
            $("#newStructureInfluenceNsl").text(obj.新构造影响);
        }
        $("#vegetationCoverNsl").text(obj.植被覆盖率);
        $("#luffPunchNsl").text(obj.冲淤变幅);
        $("#lithologyFactorNsl").text(obj.岩性因素);
        $("#looseMaterialReservesNsl").text(obj.松散物储量);
        $("#mountainsideGradientNsl").text(obj.山坡坡度);
        $("#ditchTransverseNsl").text(obj.沟槽横断面);
        $("#looseMaterialAverageNsl").text(obj.松散物平均厚);
        $("#watershedAreaNsl").text(obj.流域面积);
        $("#relativeHeightDiffNsl").text(obj.相对高差);
        //$("#blockDegreeNsl input[type=radio]:checked").val(obj.堵塞程度);
        if (obj.堵塞程度 != null) {
            $("#blockDegreeNsl input[type=radio]").each(function () {
                if (obj.堵塞程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#oneScore").text(obj.评分1);
        $("#twoScore").text(obj.评分2);
        $("#threeScore").text(obj.评分3);
        $("#fourScore").text(obj.评分4);
        $("#fiveScore").text(obj.评分5);
        $("#sixScore").text(obj.评分6);
        $("#sevenScore").text(obj.评分7);
        $("#eightScore").text(obj.评分8);
        $("#nineScore").text(obj.评分9);
        $("#tenScore").text(obj.评分10);
        $("#elevenScore").text(obj.评分11);
        $("#twelveScore").text(obj.评分12);
        $("#thirteenScore").text(obj.评分13);
        $("#fourteenScore").text(obj.评分14);
        $("#fivteenScore").text(obj.评分15);
        $("#totalScore").text(obj.总分);
        //$("#occurProbalityNsl").find("input:checked").val(obj.易发程度);
        if (obj.易发程度 != null) {
            $("#occurProbalityNsl input[type=radio]").each(function () {
                if (obj.易发程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#typeNsl").find("input:checked").val(obj.泥石流类型);
        if (obj.泥石流类型 != null) {
            $("#typeNsl input[type=radio]").each(function () {
                if (obj.泥石流类型 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#developStageNsl").find("input:checked").val(obj.发展阶段);
        if (obj.发展阶段 != null) {
            $("#developStageNsl input[type=radio]").each(function () {
                if (obj.发展阶段 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#fzjyNSL").text(obj.防治建议);
        //$("#dangerPointNsl").find("input:checked").val(obj.隐患点);
        $("#dangerPointNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.隐患点) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.隐患点) {
                $(this).attr("checked", true);
            }
        });
        //$("#pdPlanNsl").find("input:checked").val(obj.防灾预案);
        $("#pdPlanNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.防灾预案) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.防灾预案) {
                $(this).attr("checked", true);
            }
        });
        //$("#mediaNsl").find("input:checked").val(obj.多媒体);
        $("#mediaNsl input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.多媒体) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.多媒体) {
                $(this).attr("checked", true);
            }
        });
        $("#gmPersonNsl").text(obj.群测人员);
        $("#vHeadNsl").text(obj.村长);
        $("#phoneNsl").text(obj.电话);
        $("#investiPersonNsl").text(obj.调查负责人);
        $("#fillerNsl").text(obj.填表人);
        $("#auditNsl").text(obj.审核人);
        $("#investiUnitNsl").text(obj.调查单位);
        $("#dateNsl").text(obj.填表日期);

        $("#qingkuangNsl").text(obj.泥石流情况);
        $("#countyNsl").text(obj.县名);

        $("input").each(function () {
            if ($(this).attr("checked") == "checked") {

            } else {
                $(this).next().css("color", "#999");
            }
        })
        //        mudflowOption.街道 = "";
        //        mudflowOption.示意图 = null;
        //        mudflowOption.平面示意图路径 = null;
        //        mudflowOption.剖面示意图路径 = null;
        //        mudflowOption.灾情等级 = "";
        //        mudflowOption.水动力类型 = "";
        //        mudflowOption.泥砂补给途径 = "";
        //        mudflowOption.补给区位置 = "";
        //        mudflowOption.监测措施类型 = "";
        //        mudflowOption.威胁危害对象 = "";
        //        mudflowOption.防治措施类型 = "";
        //        mudflowOption.监测建议 = "";
        //        mudflowOption.野外编号 = "";

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
        UpDataPicFun("planLsl",  planImg);
        UpDataPicFun("profileLsl",  profileImg);
        UpDataPicFun("nsl_BaseImg", baseImg);
        UpBaseVideoFun("nsl_Videos", "视频", obj.统一编号, false, videoArrs);

    });
}