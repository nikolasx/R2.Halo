$(function () {
    initialization();
    update();
});

function initialization() {
    $.post(baseUrl + "QueryCollapse/GetCollapseById", { "id": $("#collapseId").val() }, function (data) {
        if (data == "fail") {
            return false;
        }
        var obj = eval("(" + data + ")");
        $("#bt_regionCode").html(obj.统一编号.substring(4, 8));
        $("#btunifiedNumber").val(obj.统一编号.substring(8,obj.统一编号.lenght));
        $("#bengTaName").val(obj.名称);
        $("#btoutdoorNO").val(obj.野外编号);
        $("#btindoorNO").val(obj.室内编号);
        //$("#btxptype").find("input:checked").next("span").html();//斜坡类型
        if (obj.斜坡类型 != null) {
            var hpId = ["zryz", "rgyz", "zrtz", "rgtz"];
            var hpStr = ["自然岩质", "人工岩质", "自然土质", "人工土质"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.斜坡类型);
        }
        //$("#btbttype").find("input:checked").next("span").html();//崩塌类型
        if (obj.崩塌类型 != null) {
            var hpId = ["tds", "hys", "pzs", "lls", "cds"];
            var hpStr = ["倾倒式", "滑移式", "膨胀式", "拉裂式", "错断式"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.崩塌类型);
        }

        $("#btlocation").val(obj.地理位置);
        $("#btxzuob").val(obj.X坐标);
        $("#btyzuob").val(obj.Y坐标);
        $("#btbiaogd").val(obj.坡顶标高);
        $("#btbiaogj").val(obj.坡脚标高);
        //经度
        $("#btjdd").val(obj.经度.split('-')[0]);
        $("#btjdf").val(obj.经度.split('-')[1]);
        $("#btjdm").val(obj.经度.split('-')[2]);
        //纬度
        $("#btwdd").val(obj.纬度.split('-')[0]);
        $("#btwdf").val(obj.纬度.split('-')[1]);
        $("#btwdm").val(obj.纬度.split('-')[2]);
        

        //checkBoxConInfo("#btjcjy");//监测建议
        if (obj.监测建议 != null) {
            var hpId = ["dqmsjc", "azjyjcss", "dmwyjc"];
            var hpStr = ["定期目视检查", "安装简易监测设施", "地面位移监测"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.监测建议);
        }
        //checkBoxConInfo("#btfzjy");//防治建议
        if (obj.防治建议 != null) {
            var hpId = ["qcqf", "zyjc", "bqbr", "gczl"];
            var hpStr = ["群测群防", "专业监测", "搬迁避让", "工程治理"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.防治建议);
        }

        if (obj.灾情等级 != null) {
            $("#btzhgmdj input[type=radio]").each(function () {
                if (obj.灾情等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#gmPersonBtInput").val(obj.群测人员);
        $("#vHeadBtInput").val(obj.村长);
        $("#phoneBtInput").val(obj.电话);
        $("#btinvestiPersonBtInput").val(obj.调查负责人);
        $("#btfillerBtInput").val(obj.填表人);
        $("#btauditBtInput").val(obj.审核人);
        $("#btauditCaseBtInput").val(obj.审核情况);
        $("#btinvestiUnitBtInput").val(obj.调查单位);
        $("#btdateBtInput").val(obj.填表日期);
        //checkBoxConInfo("#landuserbt");//土地利用
        if (obj.土地使用 != null) {
            $("#landuserbt input[type=checkbox]").each(function () {
                if (obj.土地使用.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#btoccurTimeBt").val(obj.发生时间);

        $("#btcollapseSitInput").val(obj.崩塌情况);
        $("#btprovinceBtInput").html(obj.省名);
        $("#btstreetBt").val(obj.街道);



        //县名称
        var number = obj.县名;
        switch (number) {
            case "市辖区":
                $("#BT_countyBt").children("option").eq(0).attr("selected", "selected");
                break;
            case "高新区":
                $("#BT_countyBt").children("option").eq(1).attr("selected", "selected");
                break;
            case "历下区":
                $("#BT_countyBt").children("option").eq(2).attr("selected", "selected");
                break;
            case "市中区":
                $("#BT_countyBt").children("option").eq(3).attr("selected", "selected");
                break;
            case "槐荫区":
                $("#BT_countyBt").children("option").eq(4).attr("selected", "selected");
                break;
            case "天桥区":
                $("#BT_countyBt").children("option").eq(5).attr("selected", "selected");
                break;
            case "历城区":
                $("#BT_countyBt").children("option").eq(6).attr("selected", "selected");
                break;
            case "长清区":
                $("#BT_countyBt").children("option").eq(7).attr("selected", "selected");
                break;
            case "平阴县":
                $("#BT_countyBt").children("option").eq(8).attr("selected", "selected");
                break;
            case "济阳县":
                $("#BT_countyBt").children("option").eq(9).attr("selected", "selected");
                break;
            case "商河县":
                $("#BT_countyBt").children("option").eq(10).attr("selected", "selected");
                break;
            case "章丘市":
                $("#BT_countyBt").children("option").eq(11).attr("selected", "selected");
                break;
        }

        //第二张表
        $("#btlayerTimeBtInput").val(obj.地层时代);
        $("#layerLithologyBtInput").val(obj.地层岩性);
        $("#geoStructureBtInput").val(obj.构造部位);
        $("#eqIntensityBtInput").val(obj.地震烈度);
        $("#shapedcqxBtInput").val(obj.地层倾向);
        $("#shapedcqjBtInput").val(obj.地层倾角);
        //$("#earthFaceBt input[type=radio]:checked").val(obj.微地貌);
        if (obj.微地貌 != null) {
            $("#earthFaceBt input[type=radio]").each(function () {
                if (obj.微地貌 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#groundwaterBt input[type=radio]:checked").val(obj.地下水类型);
        if (obj.地下水类型 != null) {
            $("#groundwaterBt input[type=radio]").each(function () {
                if (obj.地下水类型 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#yearAvgBtInput").val(obj.年均降雨量);
        $("#dayMaxBtInput").val(obj.日最大降雨);
        $("#hourMaxBtInput").val(obj.时最大降雨);
        $("#floodBtInput").val(obj.洪水位);   //展示中写成了丰水位
        $("#lowWaterBtInput").val(obj.枯水位);
        //checkBoxConInfo("#riverBedBt");//相对河流位置
        if (obj.相对河流位置 != null) {
            $("#riverBedBt input[type=checkbox]").each(function () {
                if (obj.相对河流位置.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //第三张表
        $("#poHeightBtInput").val(obj.坡高);
        $("#poLengthBtInput").val(obj.坡长);
        $("#poWidthBtInput").val(obj.坡宽);
        $("#scaleBtInput").val(obj.规模);
        //$("#scaleLevelBt input[type=radio]:checked").val(obj.规模等级);
        if (obj.规模等级 != null) {
            $("#scaleLevelBt input[type=radio]").each(function () {
                if ($(this).val() == obj.规模等级)
                    $(this).attr("checked", true);
            });
        }
        $("#poDuBtInput").val(obj.坡度);
        $("#poOrientationBtInput").val(obj.坡向);
        $("#rockStruTypeInput").val(obj.岩体结构类型);
        $("#rockBodyDepthInput").val(obj.岩体厚度);
        $("#rockFractureNubInput").val(obj.岩体裂隙组数);
        $("#rockLumpInput").val(obj.岩体块度);
        //$("#slopeStruTypeInput1 option:selected").val() + '$' + $("#slopeStruTypeInput2 option:selected").val(obj.斜坡结构类型);
        if (obj.斜坡结构类型 != null) {
            var xpjg = obj.斜坡结构类型.split('$');
            $("#slopeStruTypeInput1").val(xpjg[0]);
            $("#slopeStruTypeInput2").val(xpjg[1]);
        }
        $("#oneControlTypeBtInput").val(obj.控制结构面类型1);
        $("#oneInclinationBtInput").val(obj.控制结构面倾向1);
        $("#oneIncidenceBtInput").val(obj.控制结构面倾角1);
        $("#oneControlLengthBtInput").val(obj.控制结构面长度1);
        $("#oneControlDistanceBtInput").val(obj.控制结构面间距1);
        $("#twoControlTypeBtInput").val(obj.控制结构面类型2);
        $("#twoInclinationBtInput").val(obj.控制结构面倾向2);
        $("#twoIncidenceBtInput").val(obj.控制结构面倾角2);
        $("#twoControlLengthBtInput").val(obj.控制结构面长度2);
        $("#twoControlDistanceBtInput").val(obj.控制结构面间距2);
        $("#threeControlTypeBtInput").val(obj.控制结构面类型3);
        $("#threeInclinationBtInput").val(obj.控制结构面倾向3);
        $("#threeIncidenceBtInput").val(obj.控制结构面倾角3);
        $("#threeControlLengthBtInput").val(obj.控制结构面长度3);
        $("#threeControlDistanceBtInput").val(obj.控制结构面间距3);

        $("#weatherBeltDepthBtInput").val(obj.全风化带深度);
        $("#unloadCrackDepthBtInput").val(obj.卸荷裂缝深度);
        $("#soilNameBtInput").val(obj.土体名称)
        //$("#densityBt input[type=radio]:checked").val(obj.土体密实度);
        if (obj.土体密实度 != null) {
            $("#densityBt input[type=radio]").each(function () {
                if (obj.土体密实度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#chouDuBtInput").val(obj.土体稠度);
        $("#basicRockNatureBtInput").val(obj.下伏基岩岩性);
        $("#basicRockEraBtInput").val(obj.下伏基岩时代);
        $("#basicRockInclinationBtInput").val(obj.下伏基岩倾向);
        $("#basicRockIncidenceBtInput").val(obj.下伏基岩倾角);
        $("#basicRockDepthBtInput").val(obj.下伏基岩埋深);
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
            $("#highSlopePossibleCauseBt input[type=checkbox]").each(function () {
                if (obj.危岩体可能失稳因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#highSlopeNowSteadyBt input[type=radio]:checked").val(obj.危岩体目前稳定程度);
        if (obj.危岩体目前稳定程度 != null) {
            $("#highSlopeNowSteadyBt input[type=radio]").each(function () {
                if (obj.危岩体目前稳定程度 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#highSlopeChangeTrendBt input[type=radio]:checked").val(obj.危岩体今后变化趋势);
        if (obj.危岩体今后变化趋势 != null) {
            $("#highSlopeChangeTrendBt input[type=radio]").each(function () {
                if (obj.危岩体今后变化趋势 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#gwDepthBtInput").val(obj.地下水埋深);
        //$("#gwHeadBt input[type=radio]:checked").val(obj.地下水露头);
        if (obj.地下水露头 != null) {
            $("#gwHeadBt input[type=radio]").each(function () {
                if (obj.地下水露头 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //checkBoxConInfo("#gwSupplyClassBt");//地下水补给类型
        if (obj.地下水补给类型 != null) {
            $("#gwSupplyClassBt input[type=checkbox]").each(function () {
                if (obj.地下水补给类型.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#accumulationBodyLengthInput").val(obj.堆积体长度);
        $("#accumulationBodyWidthInput").val(obj.堆积体宽度);
        $("#accumulationBodyThicknessInput").val(obj.堆积体厚度);
        $("#accumulationBodyVolumeInput").val(obj.堆积体体积);
        $("#accumulationBodyPoduInput").val(obj.堆积体坡度);
        $("#accumulationBodyPoxInput").val(obj.堆积体坡向);
        //checkBoxConInfo("#slopeShapeBt");//堆积体坡面形态
        if (obj.堆积体坡面形态 != null) {
            $("#slopeShapeBt input[type=checkbox]").each(function () {
                if (obj.堆积体坡面形态.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#accumulationBodySteady input[type=radio]:checked").val(obj.堆积体稳定性);
        if (obj.堆积体稳定性 != null) {
            $("#accumulationBodySteady input[type=radio]").each(function () {
                if (obj.堆积体稳定性 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //checkBoxConInfo("#accumulationBodyPossibleCause");//堆积体可能失稳因素
        if (obj.堆积体可能失稳因素 != null) {
            $("#accumulationBodyPossibleCause input[type=checkbox]").each(function () {
                if (obj.堆积体可能失稳因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }

        //$("#accumulationBodyNSteady input[type=radio]:checked").val(obj.堆积体目前稳定状态);
        if (obj.堆积体目前稳定状态 != null) {
            $("#accumulationBodyNSteady input[type=radio]").each(function () {
                if (obj.堆积体目前稳定状态 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#accumulationBodyCTrend input[type=radio]:checked").val(obj.堆积体今后变化趋势);
        if (obj.堆积体今后变化趋势 != null) {
            $("#accumulationBodyCTrend input[type=radio]").each(function () {
                if (obj.堆积体今后变化趋势 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        //$("#dangerPointBt input[type=radio]:checked").val(obj.隐患点);
        $("#dangerPointBt input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.隐患点) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.隐患点) {
                $(this).attr("checked", true);
            }
        });
        //$("#pdPlanBt input[type=radio]:checked").val(obj.防灾预案);
        $("#pdPlanBt input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.防灾预案) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.防灾预案) {
                $(this).attr("checked", true);
            }
        });
        //$("#mediaBt input[type=radio]:checked").val(obj.多媒体);
        $("#mediaBt input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.多媒体) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.多媒体) {
                $(this).attr("checked", true);
            }
        });
        $("#dieNubBtInput").val(obj.死亡人口);
        $("#damageDoorBtInput").val(obj.毁坏房屋);
        $("#damageRoadBtInput").val(obj.毁路);
        $("#damageChannelBtInput").val(obj.毁渠);
        $("#otherDamagerBtInput").val(obj.其它危害);
        $("#directLossBtInput").val(obj.直接损失);
        //$("#damageClassBt input[type=radio]:checked").val(obj.灾情等级);
        if (obj.灾情等级 != null) {
            $("#damageClassBt input[type=radio]").each(function () {
                if (obj.灾情等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#threatenNubBtInput").val(obj.威胁人口);
        $("#threatenFortuneBtInput").val(obj.威胁财产);
        //$("#dangerClassBt input[type=radio]:checked").val(obj.险情等级);
        if (obj.险情等级 != null) {
            $("#dangerClassBt input[type=radio]").each(function () {
                if (obj.险情等级 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        $("#btdisterV").val(obj.灾害体积);
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
        UpDataPicFun("planBt", "平面图", obj.统一编号, planImg);
        UpDataPicFun("profileBt", "剖面图", obj.统一编号, profileImg);
        UpDataPicFun("bt_BaseImg", "基础图", obj.统一编号, baseImg);
        UpBaseVideoFun("bt_Videos", "基础图", obj.统一编号, true, videoArrs);

    });
}

function update() {
    $("#BIT_right_img_UpdateCollapse").click(function () {
        var bengtadata = {};
        bengtadata.统一编号 = $("#btFirstcode").html() + $("#bt_regionCode").html() + $("#btunifiedNumber").val();
        bengtadata.名称 = $("#bengTaName").val();
        bengtadata.野外编号 = $("#btoutdoorNO").val();
        bengtadata.室内编号 = $("#btindoorNO").val();
        bengtadata.斜坡类型 = $("#btxptype").find("input:checked").next("span").html();
        bengtadata.崩塌类型 = $("#btbttype").find("input:checked").next("span").html();
        bengtadata.地理位置 = $("#btlocation").val();
        bengtadata.X坐标 = $("#btxzuob").val();
        bengtadata.Y坐标 = $("#btyzuob").val();
        bengtadata.坡顶标高 = $("#btbiaogd").val();
        bengtadata.坡脚标高 = $("#btbiaogj").val();
        //经度
        var btjdDu = $("#btjdd").val();
        var btjdFen = $("#btjdf").val();
        var btjdMiao = $("#btjdm").val();
        if (btjdDu.length != 3 && btjdFen.length != 2 && btjdMiao != "") {
            alert("请输入经度");
            this.IsTongguo = false;
            return;
        }
        bengtadata.经度 = $("#btjdd").val() + "-" + $("#btjdf").val() + "-" + $("#btjdm").val();
        //纬度
        var btwdDu = $("#btwdd").val();
        var btwdFen = $("#btwdf").val();
        var btwdMiao = $("#btwdm").val();
        if (btwdDu.length != 2 && btwdFen.length != 2 && btwdMiao != "") {
            alert("请输入正确纬度");
            this.IsTongguo = false;
            return;
        }
        bengtadata.纬度 = $("#btwdd").val() + "-" + $("#btwdf").val() + "-" + $("#btwdm").val();
   

        bengtadata.监测建议 = checkBoxConInfo("#btjcjy");;
        bengtadata.防治建议 = checkBoxConInfo("#btfzjy");
        bengtadata.群测人员 = $("#gmPersonBtInput").val();
        bengtadata.村长 = $("#vHeadBtInput").val();
        bengtadata.电话 = $("#phoneBtInput").val();
        bengtadata.调查负责人 = $("#btinvestiPersonBtInput").val();
        bengtadata.填表人 = $("#btfillerBtInput").val();
        bengtadata.审核人 = $("#btauditBtInput").val();
        bengtadata.审核情况 = $("#btauditCaseBtInput").val();
        bengtadata.调查单位 = $("#btinvestiUnitBtInput").val();
        bengtadata.填表日期 = $("#btdateBtInput").val();
        bengtadata.土地利用 = checkBoxConInfo("#landuserbt");
        bengtadata.发生时间 = $("#btoccurTimeBt").val();
    
        bengtadata.崩塌情况 = $("#btcollapseSitInput").val();
        bengtadata.省名 = $("#btprovinceBtInput").html();
        bengtadata.县名 = $("#BT_countyBt").find("option:selected").text();
        bengtadata.街道 = $("#btstreetBt").val();

        //第二张表
        bengtadata.地层时代 = $("#btlayerTimeBtInput").val();
        bengtadata.地层岩性 = $("#layerLithologyBtInput").val();
        bengtadata.构造部位 = $("#geoStructureBtInput").val();
        bengtadata.地震烈度 = $("#eqIntensityBtInput option:selected").val();
        bengtadata.地层倾向 = $("#shapedcqxBtInput").val();
        bengtadata.地层倾角 = $("#shapedcqjBtInput").val();
        bengtadata.微地貌 = $("#earthFaceBt input[type=radio]:checked").val();
        bengtadata.地下水类型 = $("#groundwaterBt input[type=radio]:checked").val();
        bengtadata.年均降雨量 = $("#yearAvgBtInput").val();
        bengtadata.日最大降雨 = $("#dayMaxBtInput").val();
        bengtadata.时最大降雨 = $("#hourMaxBtInput").val();
        bengtadata.洪水位 = $("#floodBtInput").val();   //展示中写成了丰水位
        bengtadata.枯水位 = $("#lowWaterBtInput").val();
        bengtadata.相对河流位置 = checkBoxConInfo("#riverBedBt");

        //第三张表
        bengtadata.坡高 = $("#poHeightBtInput").val();
        bengtadata.坡长 = $("#poLengthBtInput").val();
        bengtadata.坡宽 = $("#poWidthBtInput").val();
        bengtadata.规模= $("#scaleBtInput").val();
        bengtadata.规模等级= $("#scaleLevelBt input[type=radio]:checked").val();
        bengtadata.坡度= $("#poDuBtInput").val();
        bengtadata.坡向= $("#poOrientationBtInput").val();
        bengtadata.岩体结构类型= $("#rockStruTypeInput option:selected").val();
        bengtadata.岩体厚度= $("#rockBodyDepthInput").val();
        bengtadata.岩体裂隙组数= $("#rockFractureNubInput").val();
        bengtadata.岩体块度= $("#rockLumpInput").val();
        bengtadata.斜坡结构类型= $("#slopeStruTypeInput1 option:selected").val() + '$' + $("#slopeStruTypeInput2 option:selected").val();
        bengtadata.控制结构面类型1= $("#oneControlTypeBtInput option:selected").val();
        bengtadata.控制结构面倾向1= $("#oneInclinationBtInput").val();
        bengtadata.控制结构面倾角1= $("#oneIncidenceBtInput").val();
        bengtadata.控制结构面长度1= $("#oneControlLengthBtInput").val();
        bengtadata.控制结构面间距1= $("#oneControlDistanceBtInput").val();
        bengtadata.控制结构面类型2= $("#twoControlTypeBtInput option:selected").val();
        bengtadata.控制结构面倾向2= $("#twoInclinationBtInput").val();
        bengtadata.控制结构面倾角2= $("#twoIncidenceBtInput").val();
        bengtadata.控制结构面长度2= $("#twoControlLengthBtInput").val();
        bengtadata.控制结构面间距2= $("#twoControlDistanceBtInput").val();
        bengtadata.控制结构面类型3= $("#threeControlTypeBtInput option:selected").val();
        bengtadata.控制结构面倾向3= $("#threeInclinationBtInput").val();
        bengtadata.控制结构面倾角3= $("#threeIncidenceBtInput").val();
        bengtadata.控制结构面长度3= $("#threeControlLengthBtInput").val();
        bengtadata.控制结构面间距3= $("#threeControlDistanceBtInput").val();
        
        bengtadata.全风化带深度= $("#weatherBeltDepthBtInput").val();
        bengtadata.卸荷裂缝深度= $("#unloadCrackDepthBtInput").val();
        bengtadata.土体名称= $("#soilNameBtInput").val()
        bengtadata.土体密实度= $("#densityBt input[type=radio]:checked").val();
        bengtadata.土体稠度= $("#chouDuBtInput").val();
        bengtadata.下伏基岩岩性= $("#basicRockNatureBtInput").val();
        bengtadata.下伏基岩时代= $("#basicRockEraBtInput").val();
        bengtadata.下伏基岩倾向= $("#basicRockInclinationBtInput").val();
        bengtadata.下伏基岩倾角= $("#basicRockIncidenceBtInput").val();
        bengtadata.下伏基岩埋深 = $("#basicRockDepthBtInput").val();
        bengtadata.变形迹象名称1= $("#oneVariantDaNameBt input[type=checkbox]:checked").val();
        bengtadata.变形迹象部位1= $("#oneVariantLocationBt").text();
        bengtadata.变形迹象特征1= $("#oneVariantFeatureBt").text();

        bengtadata.变形迹象初现时间1= $("#oneVariantTimeBt").text();
        bengtadata.变形迹象名称2= $("#twoVariantDaNameBt input[type=checkbox]:checked").val();
        bengtadata.变形迹象部位2= $("#twoVariantLocationBt").text();
        bengtadata.变形迹象特征2= $("#twoVariantFeatureBt").text();
        bengtadata.变形迹象初现时间2= $("#twoVariantTimeBt").text();
        bengtadata.变形迹象名称3= $("#threeVariantDaNameBt input[type=checkbox]:checked").val();
        bengtadata.变形迹象部位3= $("#threeVariantLocationBt").text();
        bengtadata.变形迹象特征3= $("#threeVariantFeatureBt").text();
        bengtadata.变形迹象初现时间3= $("#threeVariantTimeBt").text();
        bengtadata.变形迹象名称4= $("#fourVariantDaNameBt input[type=checkbox]:checked").val();
        bengtadata.变形迹象部位4= $("#fourVariantLocationBt").text();
        bengtadata.变形迹象特征4= $("#fourVariantFeatureBt").text();
        bengtadata.变形迹象初现时间4= $("#fourVariantTimeBt").text();
        bengtadata.变形迹象名称5= $("#fiveVariantDaNameBt input[type=checkbox]:checked").val();
        bengtadata.变形迹象部位5= $("#fiveVariantLocationBt").text();
        bengtadata.变形迹象特征5= $("#fiveVariantFeatureBt").text();
        bengtadata.变形迹象初现时间5= $("#fiveVariantTimeBt").text();
        bengtadata.变形迹象名称6= $("#sixVariantDaNameBt input[type=checkbox]:checked").val();
        bengtadata.变形迹象部位6= $("#sixVariantLocationBt").text();
        bengtadata.变形迹象特征6= $("#sixVariantFeatureBt").text();
        bengtadata.变形迹象初现时间6= $("#sixVariantTimeBt").text();
        bengtadata.变形迹象名称7= $("#sevenVariantDaNameBt input[type=checkbox]:checked").val();
        bengtadata.变形迹象部位7= $("#sevenVariantLocationBt").text();
        bengtadata.变形迹象特征7= $("#sevenVariantFeatureBt").text();
        bengtadata.变形迹象初现时间7= $("#sevenVariantTimeBt").text();
        bengtadata.变形迹象名称8= $("#eightVariantDaNameBt input[type=checkbox]:checked").val();
        bengtadata.变形迹象部位8= $("#eightVariantLocationBt").text();
        bengtadata.变形迹象特征8= $("#eightVariantFeatureBt").text();
        bengtadata.变形迹象初现时间8 = $("#eightVariantTimeBt").text();

        bengtadata.危岩体可能失稳因素 = checkBoxConInfo("#highSlopePossibleCauseBt");
        bengtadata.危岩体目前稳定程度= $("#highSlopeNowSteadyBt input[type=radio]:checked").val();
        bengtadata.危岩体今后变化趋势= $("#highSlopeChangeTrendBt input[type=radio]:checked").val();

        bengtadata.地下水埋深= $("#gwDepthBtInput").val();
        bengtadata.地下水露头= $("#gwHeadBt input[type=radio]:checked").val();
        bengtadata.地下水补给类型 = checkBoxConInfo("#gwSupplyClassBt");
        bengtadata.堆积体长度= $("#accumulationBodyLengthInput").val();
        bengtadata.堆积体宽度= $("#accumulationBodyWidthInput").val();
        bengtadata.堆积体厚度= $("#accumulationBodyThicknessInput").val();
        bengtadata.堆积体体积= $("#accumulationBodyVolumeInput").val();
        bengtadata.堆积体坡度= $("#accumulationBodyPoduInput").val();
        bengtadata.堆积体坡向= $("#accumulationBodyPoxInput").val();
        bengtadata.堆积体坡面形态 = checkBoxConInfo("#slopeShapeBt");
        bengtadata.堆积体稳定性= $("#accumulationBodySteady input[type=radio]:checked").val();
        bengtadata.堆积体可能失稳因素 = checkBoxConInfo("#accumulationBodyPossibleCause");
        bengtadata.堆积体目前稳定状态= $("#accumulationBodyNSteady input[type=radio]:checked").val();
        bengtadata.堆积体今后变化趋势= $("#accumulationBodyCTrend input[type=radio]:checked").val();

        bengtadata.隐患点 = $("#dangerPointBt input[type=radio]:checked").val();   
        bengtadata.防灾预案= $("#pdPlanBt input[type=radio]:checked").val();
        bengtadata.多媒体= $("#mediaBt input[type=radio]:checked").val();
        bengtadata.死亡人口= $("#dieNubBtInput").val();
        bengtadata.毁坏房屋= $("#damageDoorBtInput").val();
        bengtadata.毁路= $("#damageRoadBtInput").val();
        bengtadata.毁渠= $("#damageChannelBtInput").val();
        bengtadata.其它危害= $("#otherDamagerBtInput").val();
        bengtadata.直接损失= $("#directLossBtInput").val();
        bengtadata.灾情等级= $("#damageClassBt input[type=radio]:checked").val();
        bengtadata.威胁人口= $("#threatenNubBtInput").val();
        bengtadata.威胁财产= $("#threatenFortuneBtInput").val();
        bengtadata.险情等级 = $("#dangerClassBt input[type=radio]:checked").val();

    
        bengtadata.灾害体积 = $("#btdisterV").val();
        bengtadata.平面示意图路径 = null;
        bengtadata.剖面示意图路径 = null;
        bengtadata.平面示意图 = null;
        bengtadata.剖面示意图 = null;
    
     
            var comprehensiveOption = {};

            comprehensiveOption.统一编号 = $("#btFirstcode").html() + $("#bt_regionCode").html() + $("#btunifiedNumber").val();
            comprehensiveOption.名称 = $("#bengTaName").val(); 
            comprehensiveOption.地理位置 = $("#btlocation").val();
            comprehensiveOption.纬度 = $("#btwdd").val() + "-" + $("#btwdf").val() + "-" + $("#btwdm").val();
            comprehensiveOption.经度 = $("#btjdd").val() + "-" + $("#btjdf").val() + "-" + $("#btjdm").val();
            comprehensiveOption.死亡人数 = $("#dieNubBtInput").val();
            comprehensiveOption.威胁人口 = $("#threatenNubBtInput").val();
            comprehensiveOption.直接经济损失 = $("#directLossBtInput").val();
            comprehensiveOption.威胁财产 = $("#threatenFortuneBtInput").val();
            comprehensiveOption.目前稳定状态 = $("#accumulationBodyNSteady").find("input:checked").val();
            comprehensiveOption.灾害规模等级 = $("#btxptype").find("input:checked").val();
            comprehensiveOption.灾情等级 = $("#damageClassBt").find("input:checked").val();
            comprehensiveOption.险情等级 = $("#dangerClassBt").find("input:checked").val();
            comprehensiveOption.X坐标 = $("#btxzuob").val();
            comprehensiveOption.Y坐标 = $("#btyzuob").val();
            comprehensiveOption.灾害体积 = $("#btdisterV").val();
            comprehensiveOption.灾害类型 = "02";
            comprehensiveOption.国际代码 = "370181";
            comprehensiveOption.真实状态 = "0";

            var disaIimg = disaImage_1();

            $.post(baseUrl + "QueryCollapse/UpdateCollapse", { "compreStr": JSON.stringify(comprehensiveOption), "objStr": JSON.stringify(bengtadata), "planImgs": JSON.stringify(disaIimg) }, function (data) {
            if (data == "sucess") {
                alert("数据修改成功！");
                $(".Imgscan").find(".Imageexist").html("1");

            }
        });
    });

    //返回事件CSW
    $("#BIT_right_img_Return").click(function () {
        top.fullPanel2.closeByIFrame();
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
    var Num = $("#planBt  .Imgscan").length;
    for (var i = 0; i < Num; i++) {  //平面图
        var jjl = $("#planBt  .Imgscan").eq(i).find(".Imageexist").html();
        if ($("#planBt  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg = {};
            var imgpath = $("#planBt  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg.Name = imgArr[imgArr.length - 1];
            disaimg.DisaId = $("#btFirstcode").html() + $("#bt_regionCode").html() + $("#btunifiedNumber").val();
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
    var Num2 = $("#profileBt  .Imgscan").length;
    for (var i = 0; i < Num2; i++) {    //剖面图
        if ($("#profileBt  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg2 = {};
            var imgpath = $("#profileBt  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg2.Name = imgArr[imgArr.length - 1];
            disaimg2.DisaId = $("#btFirstcode").html() + $("#bt_regionCode").html() + $("#btunifiedNumber").val();
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
    var Num3 = $("#bt_BaseImg  .Imgscan").length;
    for (var i = 0; i < Num3; i++) {    //剖面图
        if ($("#bt_BaseImg  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg3 = {};
            var imgpath = $("#bt_BaseImg  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg3.Name = imgArr[imgArr.length - 1];
            disaimg3.DisaId = $("#btFirstcode").html() + $("#bt_regionCode").html() + $("#btunifiedNumber").val();
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

    var Num4 = $("#bt_Videos  .Imgscan").length;
    for (var i = 0; i < Num4; i++) {    //剖面图
        if ($("#bt_Videos  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg4 = {};
            var imgpath = $("#bt_Videos  .Imgscan").eq(i).find("video_src").eq(0).html();
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg4.Name = imgArr[imgArr.length - 1];
            disaimg4.DisaId = $("#btFirstcode").html() + $("#bt_regionCode").html() + $("#btunifiedNumber").val();
            disaimg4.DisaIdNum = 4;
            disaimg4.FileType = "Image";
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