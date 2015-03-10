/// <reference path="../ZHGL/BaseInfoEditorFun.js" />
$(function () {
    initialization();
    update();
});

function initialization() {
    $.post(baseUrl + "QueryLandSlide/GetLandSlideById", { "id": $("#landSlideId").val() }, function (data) {
        if (data == "fail") {
            return false;
        }
        var obj = eval("(" + data + ")");

        $("#disaName").val(obj.名称);
        $("#unifiedNumberUP").val(obj.统一编号.substring(8, obj.统一编号.length));
        $("#UN_regionCode").html(obj.统一编号.substring(4, 8));
        $("#outdoorNO").val(obj.野外编号);
        $("#indoorNO").val(obj.室内编号);
        $("#disaVolumn").val(obj.灾害体积);
        $("#disaPlace").val(obj.地理位置);
        $("#coordinateX").val(obj.X坐标);
        $("#coordinateY").val(obj.Y坐标);
        $("#crest").val(obj.冠);
        $("#toe").val(obj.趾);
        $("#jingduHPDu").val(obj.经度.split('-')[0])
        $("#jingduHPFen").val(obj.经度.split('-')[1])
        $("#jingduHPMiao").val(obj.经度.split('-')[2]);
        $("#weiduHPDu").val(obj.纬度.split('-')[0]);
        $("#weiduHPFen").val(obj.纬度.split('-')[1]);
        $("#weiduHPMiao").val(obj.纬度.split('-')[2]);
        $("#slideCondition").val(obj.滑坡情况);
        $("#slideAge").val(obj.滑坡年代);
        $("#slideTime").val(obj.滑坡时间);

        //县名称
        var number = obj.统一编号.substring(0, 6);
        var xian = "市辖区";
        switch (number) {
            case "370101":
                xian = "市辖区";
                $("#BIT_regionname").children("option").eq(0).attr("selected", "selected");
                break;
            case "370188":
                xian = "高新区";
                $("#BIT_regionname").children("option").eq(1).attr("selected", "selected");
                break;
            case "370102":
                xian = "历下区";
                $("#BIT_regionname").children("option").eq(2).attr("selected", "selected");
                break;
            case "370103":
                xian = "市中区";
                $("#BIT_regionname").children("option").eq(3).attr("selected", "selected");
                break;
            case "370104":
                xian = "槐荫区";
                $("#BIT_regionname").children("option").eq(4).attr("selected", "selected");
                break;
            case "370105":
                xian = "天桥区";
                $("#BIT_regionname").children("option").eq(5).attr("selected", "selected");
                break;
            case "370112":
                xian = "历城区";
                $("#BIT_regionname").children("option").eq(6).attr("selected", "selected");
                break;
            case "370113":
                xian = "长清区";
                $("#BIT_regionname").children("option").eq(7).attr("selected", "selected");
                break;
            case "370124":
                xian = "平阴县";
                $("#BIT_regionname").children("option").eq(8).attr("selected", "selected");
                break;
            case "370125":
                xian = "济阳县";
                $("#BIT_regionname").children("option").eq(9).attr("selected", "selected");
                break;
            case "370126":
                xian = "商河县";
                $("#BIT_regionname").children("option").eq(10).attr("selected", "selected");
                break;
            case "370181":
                xian = "章丘市";
                $("#BIT_regionname").children("option").eq(11).attr("selected", "selected");
                break;
        }

        

        //$("#BIT_regionname").attr("value",xian);
        if (obj.滑坡类型 != null) {
            var hplxId = ["tyshpUP", "qyshpUP"];
            var hplxStr = ["推移式滑坡", "牵引式滑坡"];
            judgeCheckboxAndRadio(hplxStr, hplxId, obj.滑坡类型);
        }
        //滑体性质
        if (obj.滑体性质 != null) {
            var hpxzId = ["yzhpUP", "tzhpUP", "sskhpUP"];
            var hpxzStr = ["古滑坡", "老滑坡", "现代滑坡"];
            judgeCheckboxAndRadio(hpxzStr, hpxzId, obj.滑体性质);
        }
        $("#landUsageCondition").val(obj.土地使用);
        $("#QCStaff").val(obj.群测人员);
        $("#villageLeader").val(obj.村长);
        $("#phoneNumber").val(obj.电话);
        if (obj.多媒体 != null) {
            var dmtId = ["havemediahpUP", "nomediahpUP"];
            judgeRadio(dmtId, obj.多媒体);
        }

        if (obj.防灾预案 != null) {
            var fzyaId = ["havepdplanhpUP", "nopdplanhpUP"];
            judgeRadio(fzyaId, obj.防灾预案);
        }
        $("#surveyUnite").val(obj.调查单位);
        $("#surveyLeader").val(obj.调查负责人);
        $("#tableFillDate").val(obj.填表日期);
        $("#tableFillPerson").val(obj.填表人);
        $("#verifyPerson").val(obj.审核人);
        $("#layerTimeHpInput").val(obj.地层时代);
        $("#layerLithologyHpInput").val(obj.地层岩性);
        $("#qxHpInput").val(obj.地层倾向);
        $("#qjHpInput").val(obj.地层倾角);
        $("#geoStructureHpInput").val(obj.构造部位);
        $("#eqIntensityHpInput").val(obj.地震烈度);
        //微地貌geoFeatureHpUP
        if (obj.微地貌 != null) {
            var hpId = ["chkStorehpUP", "chkPohpUP", "chkSpohpUP", "chkLevelhpUP", ];
            var hpStr = ["陡崖", "陡坡", "缓坡", "平台"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.微地貌);
        }
        //地下水类型groundwaterTypeHpUP
        if (obj.地下水类型 != null) {
            var hpId = ["chkRonghpUP", "chkYanhpUP", "chkWaterhpUP", "chkChenghpUP", "chkUpWaterhpUP", "chkDownhpUP"];
            var hpStr = ["岩溶水", "孔隙水", "裂隙水", "承压水", "上层滞水", "潜水"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.地下水类型);
        }
        $("#yearAvgHpInput").val(obj.年均降雨量);
        $("#dayMaxHpInput").val(obj.日最大降雨量);
        $("#hourMaxHpInput").val(obj.时最大降雨量);
        $("#floodHpInput").val(obj.洪水位);
        $("#lowWaterHpInput").val(obj.枯水位);
        //相对河流位置riverBedHpUP
        if (obj.相对河流位置 != null) {
            var hpId = ["chkLefthpUP", "chkRighthpUP", "chkAohpUP", "chkTuhpUP"];
            var hpStr = ["左", "右", "凹", "凸"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.相对河流位置);
        }
        $("#poHightHpInput").val(obj.原始坡高);
        $("#poPassHpInput").val(obj.原始坡度);
        if (obj.原始坡形 != null) {
            $("#poShapeHpUP input[type=radio]").each(function () {
                if ($(this).val() == obj.原始坡形)
                    $(this).attr("checked", true);
            });
        }
        $("#poStrucTypeHpInputOne").val(obj.斜坡结构类型);
        $("#oneControlTypeHpInput").val(obj.控滑结构面类型1);
        $("#oneqxHpInput").val(obj.控滑结构面倾向1);
        $("#oneqjHpInput").val(obj.控滑结构面倾角1);
        $("#twoControlTypeHpInput").val(obj.控滑结构面类型2);
        $("#twoqxHpInput").val(obj.控滑结构面倾向2);
        $("#twoqjHpInput").val(obj.控滑结构面倾角2);
        $("#threeControlTypeHpInput").val(obj.控滑结构面类型3);
        $("#threeqxHpInput").val(obj.控滑结构面倾向3);
        $("#threeqjHpInput").val(obj.控滑结构面倾角3);
        $("#ttLengthHpInput").val(obj.滑坡长度);
        $("#ttWidthHpInput").val(obj.滑坡宽度);
        $("#thicknessHpInput").val(obj.滑坡厚度);
        $("#ttAreaHpInput").val(obj.滑坡面积);
        $("#ttSizeHpInput").val(obj.滑坡体积);
        $("#poDuHpInput").val(obj.滑坡坡度);
        $("#poDirectionHpInput").val(obj.滑坡坡向);
        if (obj.规模等级 != null) {
            $("#scaleLevelHpUP input[type=radio]").each(function () {
                if ($(this).val() == obj.规模等级)
                    $(this).attr("checked", true);
            });
        }
        if (obj.滑坡平面形态 != null) {
            $("#planeTHpUP input[type=radio]").each(function () {
                if ($(this).val() == obj.滑坡平面形态)
                    $(this).attr("checked", true);
            });
        }
        if (obj.滑坡剖面形态 != null) {
            $("#pokkHpUP input[type=radio]").each(function () {
                if ($(this).val() == obj.滑坡剖面形态)
                    $(this).attr("checked", true);
            });
        }
        $("#StoreXInput").val(obj.滑体岩性);
        if (obj.滑体结构 != null) {
            $("#StructorUP input[type=radio]").each(function () {
                if (obj.滑体结构.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#lStoreInput").val(obj.滑体碎石含量);
        $("#kuaiDuHpInput").val(obj.滑体块度);
        $("#yXHpInput").val(obj.滑床岩性);
        $("#tTimeHpInput").val(obj.滑床时代);
        $("#hctzzqxHpInput").val(obj.滑床倾向);
        $("#hctzzqjHpInput").val(obj.滑床倾角);
        $("#zwShapeHpInput option:selected").val(obj.滑面形态);
        $("#mBuriedDepthHpInput").val(obj.滑面埋深);
        $("#mTendencyHpInput").val(obj.滑面倾向);
        $("#mDipAngleHpInput").val(obj.滑面倾角);
        $("#mDepthHpInput").val(obj.滑带厚度);
        $("#slipZoneNameHpInput").val(obj.滑带土名称);
        $("#slipZoneShapeHpInput").val(obj.滑带土性状);
        if (obj.变形迹象名称1 != null) {
            $("#oneVariantDaNamehpUP input[type=checkbox]").attr("checked", true);
        }
        $("#oneVariantLocationHp").text(obj.变形迹象部位1);
        $("#oneVariantFeatureHp").text(obj.变形迹象特征1);
        $("#oneVariantTimeHp").text(obj.变形迹象初现时间1);
        if (obj.变形迹象名称2 != null) {
            $("#twoVariantDaNamehpUP input[type=checkbox]").attr("checked", true);
        }
        $("#twoVariantLocationHp").text(obj.变形迹象部位2);
        $("#twoVariantFeatureHp").text(obj.变形迹象特征2);
        $("#twoVariantTimeHp").text(obj.变形迹象初现时间2);
        if (obj.变形迹象名称3 != null) {
            $("#threeVariantDaNamehpUP input[type=checkbox]").attr("checked", true);
        }
        $("#threeVariantLocationHp").text(obj.变形迹象部位3);
        $("#threeVariantFeatureHp").text(obj.变形迹象特征3);
        $("#threeVariantTimeHp").text(obj.变形迹象初现时间3);
        if (obj.变形迹象名称4 != null) {
            $("#fourVariantDaNamehpUP input[type=checkbox]").attr("checked", true);
        }
        $("#fourVariantLocationHp").text(obj.变形迹象部位4);
        $("#fourVariantFeatureHp").text(obj.变形迹象特征4);
        $("#fourVariantTimeHp").text(obj.变形迹象初现时间4);
        if (obj.变形迹象名称5 != null) {
            $("#fiveVariantDaNamehpUP input[type=checkbox]").attr("checked", true);
        }
        $("#fiveVariantLocationHp").text(obj.变形迹象部位5);
        $("#fiveVariantFeatureHp").text(obj.变形迹象特征5);
        $("#fiveVariantTimeHp").text(obj.变形迹象初现时间5);
        if (obj.变形迹象名称6 != null) {
            $("#sixVariantDaNamehpUP input[type=checkbox]").attr("checked", true);
        }
        $("#sixVariantLocationHp").text(obj.变形迹象部位6);
        $("#sixVariantFeatureHp").text(obj.变形迹象特征6);
        $("#sixVariantTimeHp").text(obj.变形迹象初现时间6);
        if (obj.变形迹象名称7 != null) {
            $("#sevenVariantDaNamehpUP input[type=checkbox]").attr("checked", true);
        }
        $("#sevenVariantLocationHp").text(obj.变形迹象部位7);
        $("#sevenVariantFeatureHp").text(obj.变形迹象特征7);
        $("#sevenVariantTimeHp").text(obj.变形迹象初现时间7);
        if (obj.变形迹象名称8 != null) {
            $("#eightVariantDaNamehpUP input[type=checkbox]").attr("checked", true);
        }
        $("#eightVariantLocationHp").text(obj.变形迹象部位8);
        $("#eightVariantFeatureHp").text(obj.变形迹象特征8);
        $("#eightVariantTimeHp").text(obj.变形迹象初现时间8);
        $("#gwBuriedDepthHpInput").val(obj.地下水埋深);
        if (obj.地下水露头 != null) {
            var hpxzId = ["chkupQhpUP", "chkDownQhpUP", "chkyshpUP"];
            var hpxzStr = ["上升泉", "下降泉", "溢水点"];
            judgeCheckboxAndRadio(hpxzStr, hpxzId, obj.地下水露头);
        }
        //地下水补给类型gwSupplyClassHpUP
        if (obj.地下水补给类型 != null) {
            var hpId = ["chkRainhpUP", "chkDWaterhpUP", "chkPeoplehpUP", "chkSnowhpUP"];
            var hpStr = ["降雨", "地表水", "人工", "融雪"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.地下水补给类型);
        }
        //主导因素
        if (obj.主导因素 != null) {
            $("#leadingCauseHpUP input[type=checkbox]").each(function () {
                if (obj.主导因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //地质因素geologyHpUP
        if (obj.地质因素 != null) {
            var hpId = ["jljdfyHPUP", "jgmzxypmpxHPUP", "jgmqjxypjHPUP", "rrjzHPUP", "tscxfgscHPUP", "ttyjyjcHPUP", "ssfhcyjyjcHPUP", "qrfhcjmHPUP"];
            var hpStr = ["地震", "结构面走向与坡面平行", "结构面倾角小于坡角", "软弱基座", "透水层下伏隔水层", "土体/基岩接触", "破碎风化岩/基岩接触", "强/若风化层界面"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.地质因素);
        }
        //地貌因素
        if (obj.地貌因素 != null) {
            $("#landformsHpUP input[type=checkbox]").each(function () {
                if (obj.地貌因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //物理因素
        if (obj.物理因素 != null) {
            $("#physicsHpUP input[type=checkbox]").each(function () {
                if (obj.物理因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //人为因素
        if (obj.人为因素 != null) {
            $("#artificialHpUP input[type=checkbox]").each(function () {
                if (obj.人为因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //复活诱发因素
        if (obj.复活诱发因素 != null) {
            $("#causeHpUP input[type=checkbox]").each(function () {
                if (obj.复活诱发因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.目前稳定状态 != null) {
            var hpxzId = ["nswdxhHPUP", "mqwdhpUP", "nswdxjcHPUP"];
            var hpxzStr = ["稳定性好", "稳定性差", "稳定性较差"];
            judgeCheckboxAndRadio(hpxzStr, hpxzId, obj.目前稳定状态);
        }
        if (obj.今后变化趋势 != null) {
            var hpxzId = ["ctwdxhHPUP", "ctwdxcHPUP", "ctwdxjcHPUP"];
            var hpxzStr = ["稳定性好", "稳定性差", "稳定性较差"];
            judgeCheckboxAndRadio(hpxzStr, hpxzId, obj.今后变化趋势);
        }
        $("#damageDoorHpInput").val(obj.毁坏房屋);
        $("#dieNubHpInput").val(obj.死亡人口);
        if (obj.灾情等级 != null) {
            $("#damageClassHpUP input[type=radio]").each(function () {
                if ($(this).val() == obj.灾情等级)
                    $(this).attr("checked", true);
            });
        }
        if (obj.险情等级 != null) {
            var hpId = ["xqdjxxHPUP", "xqdjzxHPUP", "xqdjdxHPUP", "xqdjtdxHPUP"];
            var hpStr = ["小型", "中型", "大型", "特大型"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.险情等级);
        }
        $("#threatenZhuhuHpInput").val(obj.威胁住户);
        $("#threatenNubHpInput").val(obj.威胁人口);
        $("#directLossHpInput").val(obj.直接损失);
        $("#threatenFortuneHpInput").val(obj.威胁财产);
        //监测建议
        if (obj.监测建议 != null) {
            $("#monitorAdviceHpUP input[type=checkbox]").each(function () {
                if (obj.监测建议.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //防治建议
        if (obj.防治建议 != null) {
            $("#preventAdviceHpUP input[type=checkbox]").each(function () {
                if (obj.防治建议.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#dangerPointHpUP input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.隐患点) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.隐患点) {
                $(this).attr("checked", true);
            }
        });
        //平面示意图 = "";
        //剖面示意图 = "";

        var planImg = [];
        var profileImg = [];
        var baseImg = [];
        var videoArr = [];
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
                    videoArr.push(img);
                }
            }
        }
        UpDataPicFun("planHp", "平面图", obj.统一编号, planImg);
        UpDataPicFun("profileHp", "剖面图", obj.统一编号, profileImg);
        UpDataPicFun("hp_BaseImg", "基础图", obj.统一编号, baseImg);
        UpBaseVideoFun("hp_BaseVideo", "视频", obj.统一编号, true, videoArr);

    });
}

function update() {
    $("#BIT_right_img_UpdateLandSlide").click(function () {
        var comprehensiveOption = {};
        comprehensiveOption.统一编号 = "3701" + $("#UN_regionCode").html() + $("#unifiedNumberUP").val();
        comprehensiveOption.地理位置 = $("#disaPlace").val();
        comprehensiveOption.名称 = $("#disaName").val();
        comprehensiveOption.经度 = $("#jingduHPDu").val() + "-" + $("#jingduHPFen").val() + "-" + $("#jingduHPMiao").val();
        comprehensiveOption.纬度 = $("#weiduHPDu").val() + "-" + $("#weiduHPFen").val() + "-" + $("#weiduHPMiao").val();
        comprehensiveOption.死亡人数 = $("#dieNubHpInput").val();
        comprehensiveOption.威胁人口 = $("#threatenNubHpInput").val();
        comprehensiveOption.直接经济损失 = $("#directLossHpInput").val();
        comprehensiveOption.威胁财产 = $("#threatenFortuneHpInput").val();
        comprehensiveOption.目前稳定状态 = $("#nowSteadyHpUP").find("input:checked").val();
        comprehensiveOption.灾害规模等级 = $("#scaleLevelHpUP").find("input:checked").val();
        comprehensiveOption.灾情等级 = $("#damageClassHpUP").find("input:checked").val();
        comprehensiveOption.险情等级 = $("#dangerClassHpUP").find("input:checked").val();
        comprehensiveOption.X坐标 = $("#coordinateX").val();
        comprehensiveOption.Y坐标 = $("#coordinateY").val();
        comprehensiveOption.灾害体积 = $("#disaVolumn").val();
        comprehensiveOption.灾害类型 = "01";
        comprehensiveOption.国际代码 = "370181";
        comprehensiveOption.真实状态 = "0";

        var option = {};
        option.名称 = $("#disaName").val();
        option.统一编号 = "3701" + $("#UN_regionCode").html() + $("#unifiedNumberUP").val();
        option.野外编号 = $("#outdoorNO").val();
        option.室内编号 = $("#indoorNO").val();
        option.灾害体积 = $("#disaVolumn").val();
        option.地理位置 = $("#disaPlace").val();
        option.X坐标 = $("#coordinateX").val();
        option.Y坐标 = $("#coordinateY").val();
        option.冠 = $("#crest").val();
        option.趾 = $("#toe").val();
        option.经度 = $("#jingduHPDu").val() + "-" + $("#jingduHPFen").val() + "-" + $("#jingduHPMiao").val();
        option.纬度 = $("#weiduHPDu").val() + "-" + $("#weiduHPFen").val() + "-" + $("#weiduHPMiao").val();
        option.滑坡情况 = $("#slideCondition").val();
        option.滑坡年代 = $("#slideAge").val();
        option.滑坡时间 = $("#slideTime").val();
        option.滑坡类型 = $("#slideType").find("input:checked").val();
        option.滑体性质 = $("#slideXZ").find("input:checked").val();
        option.土地使用 = $("#landUsageCondition").val();
        option.群测人员 = $("#QCStaff").val();
        option.村长 = $("#villageLeader").val();
        option.电话 = $("#phoneNumber").val();
        option.多媒体 = $("#multi_media").find("input:checked").val();
        option.防灾预案 = $("#preDisaPlan").find("input:checked").val();
        option.调查单位 = $("#surveyUnite").val();
        option.调查负责人 = $("#surveyLeader").val();
        option.填表日期 = $("#tableFillDate").val();
        option.填表人 = $("#tableFillPerson").val();
        option.审核人 = $("#verifyPerson").val();
        option.地层时代 = $("#layerTimeHpInput").val();
        option.地层岩性 = $("#layerLithologyHpInput").val();
        option.地层倾向 = $("#qxHpInput").val();
        option.地层倾角 = $("#qjHpInput").val();
        option.构造部位 = $("#geoStructureHpInput").val();
        option.地震烈度 = $("#eqIntensityHpInput option:selected").val();
        option.微地貌 = checkBoxConInfo("#geoFeatureHp");
        option.地下水类型 = checkBoxConInfo("#groundwaterTypeHp");
        option.年均降雨量 = $("#yearAvgHpInput").val();
        option.日最大降雨量 = $("#dayMaxHpInput").val();
        option.时最大降雨量 = $("#hourMaxHpInput").val();
        option.洪水位 = $("#floodHpInput").val();
        option.枯水位 = $("#lowWaterHpInput").val();
        option.相对河流位置 = checkBoxConInfo("#riverBedHp");
        option.原始坡高 = $("#poHightHpInput").val();
        option.原始坡度 = $("#poPassHpInput").val();
        option.原始坡形 = $("#poShapeHpUP").find("input:checked").val();
        option.斜坡结构类型 = $("#poStrucTypeHpInputOne").val();
        option.控滑结构面类型1 = $("#oneControlTypeHpInput option:selected").val();
        option.控滑结构面倾向1 = $("#oneqxHpInput").val();
        option.控滑结构面倾角1 = $("#oneqjHpInput").val();
        option.控滑结构面类型2 = $("#twoControlTypeHpInput option:selected").val();
        option.控滑结构面倾向2 = $("#twoqxHpInput").val();
        option.控滑结构面倾角2 = $("#twoqjHpInput").val();
        option.控滑结构面类型3 = $("#threeControlTypeHpInput option:selected").val();
        option.控滑结构面倾向3 = $("#threeqxHpInput").val();
        option.控滑结构面倾角3 = $("#threeqjHpInput").val();
        option.滑坡长度 = $("#ttLengthHpInput").val();
        option.滑坡宽度 = $("#ttWidthHpInput").val();
        option.滑坡厚度 = $("#thicknessHpInput").val();
        option.滑坡面积 = $("#ttAreaHpInput").val();
        option.滑坡体积 = $("#ttSizeHpInput").val();
        option.滑坡坡度 = $("#poDuHpInput").val();
        option.滑坡坡向 = $("#poDirectionHpInput").val();
        option.规模等级 = $("#scaleLevelHpUP").find("input:checked").val();
        option.滑坡平面形态 = $("#planeTHpUP").find("input:checked").val();
        option.滑坡剖面形态 = $("#pokkHpUP").find("input:checked").val();
        option.滑体岩性 = $("#StoreXInput").val();
        option.滑体结构 = $("#StructorUP").find("input:checked").val();
        option.滑体碎石含量 = $("#lStoreInput").val();
        option.滑体块度 = $("#kuaiDuHpInput option:selected").val();
        option.滑床岩性 = $("#yXHpInput").val();
        option.滑床时代 = $("#tTimeHpInput").val();
        option.滑床倾向 = $("#hctzzqxHpInput").val();
        option.滑床倾角 = $("#hctzzqjHpInput").val();
        option.滑面形态 = $("#zwShapeHpInput option:selected").val();
        option.滑面埋深 = $("#mBuriedDepthHpInput").val();
        option.滑面倾向 = $("#mTendencyHpInput").val();
        option.滑面倾角 = $("#mDipAngleHpInput").val();
        option.滑带厚度 = $("#mDepthHpInput").val();
        option.滑带土名称 = $("#slipZoneNameHpInput option:selected").val();
        option.滑带土性状 = $("#slipZoneShapeHpInput").val();
        option.变形迹象名称1 = $("#oneVariantDaNamehpUP").find("input").val();
        option.变形迹象部位1 = $("#oneVariantLocationHp").text();
        option.变形迹象特征1 = $("#oneVariantFeatureHp").text();
        option.变形迹象初现时间1 = $("#oneVariantTimeHp").text();
        option.变形迹象名称2 = $("#twoVariantDaNamehpUP").find("input").val();
        option.变形迹象部位2 = $("#twoVariantLocationHp").text();
        option.变形迹象特征2 = $("#twoVariantFeatureHp").text();
        option.变形迹象初现时间2 = $("#twoVariantTimeHp").text();
        option.变形迹象名称3 = $("#threeVariantDaNamehpUP").find("input").val();
        option.变形迹象部位3 = $("#threeVariantLocationHp").text();
        option.变形迹象特征3 = $("#threeVariantFeatureHp").text();
        option.变形迹象初现时间3 = $("#threeVariantTimeHp").text();
        option.变形迹象名称4 = $("#fourVariantDaNamehpUP").find("input").val();
        option.变形迹象部位4 = $("#fourVariantLocationHp").text();
        option.变形迹象特征4 = $("#fourVariantFeatureHp").text();
        option.变形迹象初现时间4 = $("#fourVariantTimeHp").text();
        option.变形迹象名称5 = $("#fiveVariantDaNamehpUP").find("input").val();
        option.变形迹象部位5 = $("#fiveVariantLocationHp").text();
        option.变形迹象特征5 = $("#fiveVariantFeatureHp").text();
        option.变形迹象初现时间5 = $("#fiveVariantTimeHp").text();
        option.变形迹象名称6 = $("#sixVariantDaNamehpUP").find("input").val();
        option.变形迹象部位6 = $("#sixVariantLocationHp").text();
        option.变形迹象特征6 = $("#sixVariantFeatureHp").text();
        option.变形迹象初现时间6 = $("#sixVariantTimeHp").text();
        option.变形迹象名称7 = $("#sevenVariantDaNamehpUP").find("input").val();
        option.变形迹象部位7 = $("#sevenVariantLocationHp").text();
        option.变形迹象特征7 = $("#sevenVariantFeatureHp").text();
        option.变形迹象初现时间7 = $("#sevenVariantTimeHp").text();
        option.变形迹象名称8 = $("#eightVariantDaNamehpUP").find("input").val();
        option.变形迹象部位8 = $("#eightVariantLocationHp").text();
        option.变形迹象特征8 = $("#eightVariantFeatureHp").text();
        option.变形迹象初现时间8 = $("#eightVariantTimeHp").text();
        option.地下水埋深 = $("#gwBuriedDepthHpInput").val();
        option.地下水露头 = $("#gwHeadHp").find("input:checked").val();
        option.地下水补给类型 = checkBoxConInfo("#gwSupplyClassHp");
        option.主导因素 = checkBoxConInfo("#leadingCauseHpUP");
        option.地质因素 = checkBoxConInfo("#geologyHp");
        option.地貌因素 = checkBoxConInfo("#landformsHpUP");
        option.物理因素 = checkBoxConInfo("#physicsHpUP");
        option.人为因素 = checkBoxConInfo("#artificialHpUP");
        option.复活诱发因素 = checkBoxConInfo("#causeHpUP");
        option.目前稳定状态 = $("#nowSteadyHpUP").find("input:checked").val();
        option.今后变化趋势 = $("#changeTrendHpUP").find("input:checked").val();
        option.毁坏房屋 = $("#damageDoorHpInput").val();
        option.死亡人口 = $("#dieNubHpInput").val();
        option.灾情等级 = $("#damageClassHpUP").find("input:checked").val();
        option.险情等级 = $("#dangerClassHpUP").find("input:checked").val();
        option.威胁住户 = $("#threatenZhuhuHpInput").val();
        option.威胁人口 = $("#threatenNubHpInput").val();
        option.直接损失 = $("#directLossHpInput").val();
        option.威胁财产 = $("#threatenFortuneHpInput").val();
        option.监测建议 = checkBoxConInfo("#monitorAdviceHpUP");
        option.防治建议 = checkBoxConInfo("#preventAdviceHpUP");
        option.隐患点 = $("#dangerPointHpUP").find("input:checked").val();
        option.平面示意图 = "";
        option.剖面示意图 = "";

        var disaIimg = disaImage_1();
        $.post(baseUrl + "QueryLandSlide/UpdateLandSlide", { "compreStr": JSON.stringify(comprehensiveOption), "objStr": JSON.stringify(option), "planImgs": JSON.stringify(disaIimg) }, function (data) {
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

function checkBoxConInfo(id){
    var conStr = "";
    conStr = $(id + " input[type=checkbox]:checked").map(function () {
        return $(this).val();
    }).get().join(",");
    return conStr;
}

//图片
function disaImage_1() {  //可优化
    var list = [];
    var Num = $("#planHp  .Imgscan").length;
    for (var i = 0; i < Num; i++) {  //平面图
        var jjl = $("#planHp  .Imgscan").eq(i).find(".Imageexist").html();
        if ($("#planHp  .Imgscan").eq(i).find(".Imageexist").html()!="1")
        {
            var disaimg = {};
            var imgpath = $("#planHp  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg.Name = imgArr[imgArr.length - 1];
            disaimg.DisaId = "3701" + $("#UN_regionCode").html() + $("#unifiedNumberUP").val();
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
    var Num2 = $("#profileHp  .Imgscan").length;
    for (var i = 0; i < Num2; i++) {    //剖面图
        if ($("#profileHp  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg2 = {};
            var imgpath = $("#profileHp  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg2.Name = imgArr[imgArr.length - 1];
            disaimg2.DisaId = "3701" + $("#UN_regionCode").html() + $("#unifiedNumberUP").val();
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

    var Num3 = $("#hp_BaseImg  .Imgscan").length;
    for (var i = 0; i < Num3; i++) {    //基础图
        if ($("#hp_BaseImg  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg3 = {};
            var imgpath = $("#hp_BaseImg  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg3.Name = imgArr[imgArr.length - 1];
            disaimg3.DisaId = "3701" + $("#UN_regionCode").html() + $("#unifiedNumberUP").val();
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

    var Num4 = $("#hp_BaseVideo  .Imgscan").length;
    for (var i = 0; i < Num4; i++) {    //基础图
        if ($("#hp_BaseVideo  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg4 = {};
            var imgpath = $("#hp_BaseVideo  .Imgscan").eq(i).find(".video_src").eq(0).html();
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg4.Name = imgArr[imgArr.length - 1];
            disaimg4.DisaId = "3701" + $("#UN_regionCode").html() + $("#unifiedNumberUP").val();
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