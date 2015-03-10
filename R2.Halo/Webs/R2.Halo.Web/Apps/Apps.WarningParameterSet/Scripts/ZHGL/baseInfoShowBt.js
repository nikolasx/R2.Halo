//----------------崩塌信息展示----------------//

$(function () {
    $(".BIT_left_cell:eq(0)").trigger("click");
    tableSwitchReg();
    appendBtValue();
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

function appendBtValue() {
    $("div").css("text-align","center");
    var btTybh = $("#btTybh").text();
    $("input").attr("disabled", "disabled");
    $.post(baseUrl + "QueryCollapse/GetCollapseById", { "id": btTybh }, function(data) {
        var obj = eval("(" + data + ")");
        $("#bengTaName").text(obj.名称);
        $("#btunifiedNumber").text(btTybh);
        $("#btoutdoorNO").text(obj.野外编号);
        $("#btindoorNO").text(obj.室内编号);
        //$("#btxptype").find("input:checked").next("span").html();//斜坡类型
        if (obj.斜坡类型 != null) {
            var hpId = ["btxptype1", "btxptype2", "btxptype3", "btxptype4"];
            var hpStr = ["自然岩质", "人工岩质", "自然土质", "人工土质"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.斜坡类型);
        }
        //$("#btbttype").find("input:checked").next("span").html();//崩塌类型
        if (obj.崩塌类型 != null) {
            var hpId = ["btbttype1", "btbttype2", "btbttype3", "btbttype4", "btbttype5"];
            var hpStr = ["倾倒式", "滑移式", "膨胀式", "拉裂式", "错断式"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.崩塌类型);
        }

        $("#btlocation").text(obj.地理位置);
        $("#btxzuob").text(obj.X坐标);
        $("#btyzuob").text(obj.Y坐标);
        $("#btbiaogd").text(obj.坡顶标高);
        $("#btbiaogj").text(obj.坡脚标高);
        //经度
        $("#btjd").text(obj.经度.split('-')[0] + "°" + obj.经度.split('-')[1] + "′" + obj.经度.split('-')[2] + "″");
        //纬度
        $("#btwd").text(obj.纬度.split('-')[0] + "°" + obj.纬度.split('-')[1] + "′" + obj.纬度.split('-')[2] + "″");

        //checkBoxConInfo("#btjcjy");//监测建议
        if (obj.监测建议 != null) {
            var hpId = ["btjcjy1", "btjcjy2", "btjcjy3"];
            var hpStr = ["定期目视检查", "安装简易监测设施", "地面位移监测"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.监测建议);
        }
        //checkBoxConInfo("#btfzjy");//防治建议
        if (obj.防治建议 != null) {
            var hpId = ["btfzjy1", "btfzjy2", "btfzjy3", "btfzjy4"];
            var hpStr = ["群测群防", "专业监测", "搬迁避让", "工程治理"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.防治建议);
        }

        if (obj.灾情等级 != null) {
            $("#btzhgmdj input[type=radio]").each(function() {
                if (obj.灾情等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#gmPersonBtInput").text(obj.群测人员);
        $("#vHeadBtInput").text(obj.村长);
        $("#phoneBtInput").text(obj.电话);
        $("#btinvestiPersonBtInput").text(obj.调查负责人);
        $("#btfillerBtInput").text(obj.填表人);
        $("#btauditBtInput").text(obj.审核人);
        $("#btauditCaseBtInput").text(obj.审核情况);
        $("#btinvestiUnitBtInput").text(obj.调查单位);
        $("#btdateBtInput").text(obj.填表日期);
        //checkBoxConInfo("#landuserbt");//土地利用
        if (obj.土地使用 != null) {
            $("#landuserbt input[type=checkbox]").each(function() {
                if (obj.土地使用.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#btoccurTimeBt").text(obj.发生时间);

        $("#btcollapseSitInput").text(obj.崩塌情况);
        $("#btprovinceBtInput").html(obj.省名);
        $("#BT_countyBt").text(obj.县名);
        $("#btstreetBt").text(obj.街道);

        //第二张表
        $("#btlayerTimeBt").text(obj.地层时代);
        $("#layerLithologyBt").text(obj.地层岩性);
        $("#geoStructureBt").text(obj.构造部位);
        $("#eqIntensityBt").text(obj.地震烈度);
        $("#shapedcqxBt").text(obj.地层倾向);
        $("#shapedcqjBt").text(obj.地层倾角);
        //$("#earthFaceBt input[type=radio]:checked").val(obj.微地貌);
        if (obj.微地貌 != null) {
            $("#earthFaceBt input[type=radio]").each(function() {
                if (obj.微地貌 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#groundwaterBt input[type=radio]:checked").val(obj.地下水类型);
        if (obj.地下水类型 != null) {
            $("#groundwaterBt input[type=radio]").each(function() {
                if (obj.地下水类型 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#yearAvgBt").text(obj.年均降雨量);
        $("#dayMaxBt").text(obj.日最大降雨);
        $("#hourMaxBt").text(obj.时最大降雨);
        $("#floodBt").text(obj.洪水位); //展示中写成了丰水位
        $("#lowWaterBt").text(obj.枯水位);
        //checkBoxConInfo("#riverBedBt");//相对河流位置
        if (obj.相对河流位置 != null) {
            $("#riverBedBt input[type=checkbox]").each(function() {
                if (obj.相对河流位置.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //第三张表
        $("#poHeightBt").text(obj.坡高);
        $("#poLengthBt").text(obj.坡长);
        $("#poWidthBt").text(obj.坡宽);
        $("#scaleBt").text(obj.规模);
        //$("#scaleLevelBt input[type=radio]:checked").val(obj.规模等级);
        if (obj.规模等级 != null) {
            $("#scaleLevelBt input[type=radio]").each(function() {
                if ($(this).val() == obj.规模等级)
                    $(this).attr("checked", true);
            });
        }
        $("#poDuBt").text(obj.坡度);
        $("#poOrientationBt").text(obj.坡向);
        $("#rockStruType").text(obj.岩体结构类型);
        $("#rockBodyDepth").text(obj.岩体厚度);
        $("#rockFractureNub").text(obj.岩体裂隙组数);
        $("#rockLump").text(obj.岩体块度);
        //$("#slopeStruTypeInput1 option:selected").val() + '$' + $("#slopeStruTypeInput2 option:selected").val(obj.斜坡结构类型);
        if (obj.斜坡结构类型 != null) {
            var xpjg = obj.斜坡结构类型.split('$');
            $("#slopeStruTypeInput1").text(xpjg[0]);
            $("#slopeStruTypeInput2").text(xpjg[1]);
        }
        $("#oneControlTypeBt").text(obj.控制结构面类型1);
        $("#oneInclinationBt").text(obj.控制结构面倾向1);
        $("#oneIncidenceBt").text(obj.控制结构面倾角1);
        $("#oneControlLengthBt").text(obj.控制结构面长度1);
        $("#oneControlDistanceBt").text(obj.控制结构面间距1);
        $("#twoControlTypeBt").text(obj.控制结构面类型2);
        $("#twoInclinationBt").text(obj.控制结构面倾向2);
        $("#twoIncidenceBt").text(obj.控制结构面倾角2);
        $("#twoControlLengthBt").text(obj.控制结构面长度2);
        $("#twoControlDistanceBt").text(obj.控制结构面间距2);
        $("#threeControlTypeBt").text(obj.控制结构面类型3);
        $("#threeInclinationBt").text(obj.控制结构面倾向3);
        $("#threeIncidenceBt").text(obj.控制结构面倾角3);
        $("#threeControlLengthBt").text(obj.控制结构面长度3);
        $("#threeControlDistanceBt").text(obj.控制结构面间距3);

        $("#weatherBeltDepthBt").text(obj.全风化带深度);
        $("#unloadCrackDepthBt").text(obj.卸荷裂缝深度);
        $("#soilNameBt").text(obj.土体名称)
        //$("#densityBt input[type=radio]:checked").val(obj.土体密实度);
        if (obj.土体密实度 != null) {
            $("#densityBt input[type=radio]").each(function() {
                if (obj.土体密实度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#chouDuBt").text(obj.土体稠度);
        $("#basicRockNatureBt").text(obj.下伏基岩岩性);
        $("#basicRockEraBt").text(obj.下伏基岩时代);
        $("#basicRockInclinationBt").text(obj.下伏基岩倾向);
        $("#basicRockIncidenceBt").text(obj.下伏基岩倾角);
        $("#basicRockDepthBt").text(obj.下伏基岩埋深);
        //$("#oneVariantDaNameBt input[type=checkbox]:checked").val(obj.变形迹象名称1);
        if (obj.变形迹象名称1 != null) {
            $("#oneVariantDaNameBt input[type=checkbox]").attr("checked", true);
        }
        $("#oneVariantLocationBt").text(obj.变形迹象部位1);
        $("#oneVariantFeatureBt").text(obj.变形迹象特征1);

        $("#oneVariantTimeBt").text(obj.变形迹象初现时间1);
        //$("#twoVariantDaNameBt input[type=checkbox]:checked").val(obj.变形迹象名称2);
        if (obj.变形迹象名称2 != null) {
            $("#twoVariantDaNameBt input[type=checkbox]").attr("checked", true);
        }
        $("#twoVariantLocationBt").text(obj.变形迹象部位2);
        $("#twoVariantFeatureBt").text(obj.变形迹象特征2);
        $("#twoVariantTimeBt").text(obj.变形迹象初现时间2);
        //$("#threeVariantDaNameBt input[type=checkbox]:checked").val(obj.变形迹象名称3);
        if (obj.变形迹象名称3 != null) {
            $("#threeVariantDaNameBt input[type=checkbox]").attr("checked", true);
        }
        $("#threeVariantLocationBt").text(obj.变形迹象部位3);
        $("#threeVariantFeatureBt").text(obj.变形迹象特征3);
        $("#threeVariantTimeBt").text(obj.变形迹象初现时间3);
        //$("#fourVariantDaNameBt input[type=checkbox]:checked").val(obj.变形迹象名称4);
        if (obj.变形迹象名称4 != null) {
            $("#fourVariantDaNameBt input[type=checkbox]").attr("checked", true);
        }
        $("#fourVariantLocationBt").text(obj.变形迹象部位4);
        $("#fourVariantFeatureBt").text(obj.变形迹象特征4);
        $("#fourVariantTimeBt").text(obj.变形迹象初现时间4);
        //$("#fiveVariantDaNameBt input[type=checkbox]:checked").val(obj.变形迹象名称5);
        if (obj.变形迹象名称5 != null) {
            $("#fiveVariantDaNameBt input[type=checkbox]").attr("checked", true);
        }
        $("#fiveVariantLocationBt").text(obj.变形迹象部位5);
        $("#fiveVariantFeatureBt").text(obj.变形迹象特征5);
        $("#fiveVariantTimeBt").text(obj.变形迹象初现时间5);
        //$("#sixVariantDaNameBt input[type=checkbox]:checked").val(obj.变形迹象名称6);
        if (obj.变形迹象名称6 != null) {
            $("#sixVariantDaNameBt input[type=checkbox]").attr("checked", true);
        }
        $("#sixVariantLocationBt").text(obj.变形迹象部位6);
        $("#sixVariantFeatureBt").text(obj.变形迹象特征6);
        $("#sixVariantTimeBt").text(obj.变形迹象初现时间6);
        //$("#sevenVariantDaNameBt input[type=checkbox]:checked").val(obj.变形迹象名称7);
        if (obj.变形迹象名称7 != null) {
            $("#sevenVariantDaNameBt input[type=checkbox]").attr("checked", true);
        }
        $("#sevenVariantLocationBt").text(obj.变形迹象部位7);
        $("#sevenVariantFeatureBt").text(obj.变形迹象特征7);
        $("#sevenVariantTimeBt").text(obj.变形迹象初现时间7);
        //$("#eightVariantDaNameBt input[type=checkbox]:checked").val(obj.变形迹象名称8);
        if (obj.变形迹象名称8 != null) {
            $("#eightVariantDaNameBt input[type=checkbox]").attr("checked", true);
        }
        $("#eightVariantLocationBt").text(obj.变形迹象部位8);
        $("#eightVariantFeatureBt").text(obj.变形迹象特征8);
        $("#eightVariantTimeBt").text(obj.变形迹象初现时间8);

        //checkBoxConInfo("#highSlopePossibleCauseBt");//危岩体可能失稳因素
        if (obj.危岩体可能失稳因素 != null) {
            $("#highSlopePossibleCauseBt input[type=checkbox]").each(function() {
                if (obj.危岩体可能失稳因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#highSlopeNowSteadyBt input[type=radio]:checked").val(obj.危岩体目前稳定程度);
        if (obj.危岩体目前稳定程度 != null) {
            $("#highSlopeNowSteadyBt input[type=radio]").each(function() {
                if (obj.危岩体目前稳定程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#highSlopeChangeTrendBt input[type=radio]:checked").val(obj.危岩体今后变化趋势);
        if (obj.危岩体今后变化趋势 != null) {
            $("#highSlopeChangeTrendBt input[type=radio]").each(function() {
                if (obj.危岩体今后变化趋势 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#gwDepthBt").text(obj.地下水埋深);
        //$("#gwHeadBt input[type=radio]:checked").val(obj.地下水露头);
        if (obj.地下水露头 != null) {
            $("#gwHeadBt input[type=radio]").each(function() {
                if (obj.地下水露头 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //checkBoxConInfo("#gwSupplyClassBt");//地下水补给类型
        if (obj.地下水补给类型 != null) {
            $("#gwSupplyClassBt input[type=checkbox]").each(function() {
                if (obj.地下水补给类型.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#accumulationBodyLength").text(obj.堆积体长度);
        $("#accumulationBodyWidth").text(obj.堆积体宽度);
        $("#accumulationBodyThickness").text(obj.堆积体厚度);
        $("#accumulationBodyVolume").text(obj.堆积体体积);
        $("#accumulationBodyPodu").text(obj.堆积体坡度);
        $("#accumulationBodyPox").text(obj.堆积体坡向);
        //checkBoxConInfo("#slopeShapeBt");//堆积体坡面形态
        if (obj.堆积体坡面形态 != null) {
            $("#slopeShapeBt input[type=checkbox]").each(function() {
                if (obj.堆积体坡面形态.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#accumulationBodySteady input[type=radio]:checked").val(obj.堆积体稳定性);
        if (obj.堆积体稳定性 != null) {
            $("#accumulationBodySteady input[type=radio]").each(function() {
                if (obj.堆积体稳定性 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //checkBoxConInfo("#accumulationBodyPossibleCause");//堆积体可能失稳因素
        if (obj.堆积体可能失稳因素 != null) {
            $("#accumulationBodyPossibleCause input[type=checkbox]").each(function() {
                if (obj.堆积体可能失稳因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }

        //$("#accumulationBodyNSteady input[type=radio]:checked").val(obj.堆积体目前稳定状态);
        if (obj.堆积体目前稳定状态 != null) {
            $("#accumulationBodyNSteady input[type=radio]").each(function() {
                if (obj.堆积体目前稳定状态 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#accumulationBodyCTrend input[type=radio]:checked").val(obj.堆积体今后变化趋势);
        if (obj.堆积体今后变化趋势 != null) {
            $("#accumulationBodyCTrend input[type=radio]").each(function() {
                if (obj.堆积体今后变化趋势 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#dangerPointBt input[type=radio]:checked").val(obj.隐患点);
        $("#dangerPointBt input[type=radio]").each(function() {
            if ($(this).val() == "true" && obj.隐患点) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.隐患点) {
                $(this).attr("checked", true);
            }
        });
        //$("#pdPlanBt input[type=radio]:checked").val(obj.防灾预案);
        $("#pdPlanBt input[type=radio]").each(function() {
            if ($(this).val() == "true" && obj.防灾预案) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.防灾预案) {
                $(this).attr("checked", true);
            }
        });
        //$("#mediaBt input[type=radio]:checked").val(obj.多媒体);
        $("#mediaBt input[type=radio]").each(function() {
            if ($(this).val() == "true" && obj.多媒体) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.多媒体) {
                $(this).attr("checked", true);
            }
        });
        $("#dieNubBt").text(obj.死亡人口);
        $("#damageDoorBt").text(obj.毁坏房屋);
        $("#damageRoadBt").text(obj.毁路);
        $("#damageChannelBt").text(obj.毁渠);
        $("#otherDamagerBt").text(obj.其它危害);
        $("#directLossBt").text(obj.直接损失);
        //$("#damageClassBt input[type=radio]:checked").val(obj.灾情等级);
        if (obj.灾情等级 != null) {
            $("#damageClassBt input[type=radio]").each(function() {
                if (obj.灾情等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#threatenNubBt").val(obj.威胁人口);
        $("#threatenFortuneBt").val(obj.威胁财产);
        //$("#dangerClassBt input[type=radio]:checked").val(obj.险情等级);
        if (obj.险情等级 != null) {
            $("#dangerClassBt input[type=radio]").each(function() {
                if (obj.险情等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        $("#btdisterV").text(obj.灾害体积);

        $("input").each(function() {
            if ($(this).attr("checked") == "checked") {

            } else {
                $(this).next().css("color", "#999");
            }
        })
        //平面示意图路径 = null;
        //剖面示意图路径 = null;
        //平面示意图 = null;
        //剖面示意图 = null;

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
                } else if (img.DisaIdNum == "2") {
                    profileImg.push(img);
                } else if (img.DisaIdNum == "3") {
                    baseImg.push(img);
                } else if (img.DisaIdNum == "4") {
                    videoArrs.push(img);
                }
            }
        }
        UpDataPicFun("planBt", planImg);
        UpDataPicFun("profileBt", profileImg);
        UpDataPicFun("bt_BaseImg", baseImg);
        UpBaseVideoFun("bt_Videos", "视频", obj.统一编号, false, videoArrs);

    });
}