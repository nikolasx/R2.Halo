//----------------滑坡信息展示----------------//

$(function () {
    $(".BIT_left_cell:eq(0)").trigger("click");
    tableSwitchReg();
    appendHpValue();
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

function appendHpValue() {
    var hpTybh = $("#hpTybh").text();
    $("input").attr("disabled", "disabled");
    $.post(baseUrl + "QueryLandSlide/GetLandSlideById", { "id": hpTybh }, function (data) {
        var obj = eval("(" + data + ")");
        var regioncode = hpTybh.substr(0, 6);
        switch (regioncode) {
            case "370101":
                $("#BIT_regionname").text("市辖区");
                break;
            case "370188":
                $("#BIT_regionname").text("高新区");
                break;
            case "370102":
                $("#BIT_regionname").text("历下区");
                break;
            case "370103":
                $("#BIT_regionname").text("市中区");
                break;
            case "370104":
                $("#BIT_regionname").text("槐荫区");
                break;
            case "370105":
                $("#BIT_regionname").text("天桥区");
                break;
            case "370112":
                $("#BIT_regionname").text("历城区");
                break;
            case "370113":
                $("#BIT_regionname").text("长清区");
                break;
            case "370124":
                $("#BIT_regionname").text("平阴县");
                break;
            case "370125":
                $("#BIT_regionname").text("济阳县");
                break;
            case "370126":
                $("#BIT_regionname").text("商河县");
                break;
            case "370181":
                $("#BIT_regionname").text("章丘市");
                break;
            default:
                break;
        }
        $("#disaName").text(obj.名称);
        $("#unifiedNumber").text(hpTybh);
        $("#outdoorNO").text(obj.野外编号);
        $("#indoorNO").text(obj.室内编号);
        $("#BIT_regionname").text(obj.县名);
        $("#disaVolumn").text(obj.灾害体积);
        $("#disaPlace").text(obj.地理位置);
        $("#coordinateX").text(obj.X坐标);
        $("#coordinateY").text(obj.Y坐标);
        $("#crest").text(obj.冠);
        $("#toe").text(obj.趾);
        $("#jingduHP").text(obj.经度.split('-')[0] + "°" + obj.经度.split('-')[1] + "′" + obj.经度.split('-')[2] + "″");
        $("#weiduHP").text(obj.纬度.split('-')[0] + "°" + obj.纬度.split('-')[1] + "′" + obj.纬度.split('-')[2] + "″");
        $("#slideCondition").text(obj.滑坡情况);
        $("#slideAge").text(obj.滑坡年代);
        $("#slideTime").text(obj.滑坡时间);

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
        $("#landUsageCondition").text(obj.土地使用);
        $("#QCStaff").text(obj.群测人员);
        $("#villageLeader").text(obj.村长);
        $("#phoneNumber").text(obj.电话);
        if (obj.多媒体 != null) {
            var dmtId = ["havemediahpUP", "nomediahpUP"];
            judgeRadio(dmtId, obj.多媒体);
        }

        if (obj.防灾预案 != null) {
            var fzyaId = ["havepdplanhpUP", "nopdplanhpUP"];
            judgeRadio(fzyaId, obj.防灾预案);
        }
        $("#surveyUnite").text(obj.调查单位);
        $("#surveyLeader").text(obj.调查负责人);
        $("#tableFillDate").text(obj.填表日期);
        $("#tableFillPerson").text(obj.填表人);
        $("#verifyPerson").text(obj.审核人);
        $("#layerTimeHp").text(obj.地层时代);
        $("#layerLithologyHp").text(obj.地层岩性);
        $("#qxHp").text(obj.地层倾向);
        $("#qjHp").text(obj.地层倾角);
        $("#geoStructureHp").text(obj.构造部位);
        $("#eqIntensityHp").text(obj.地震烈度);
        //微地貌geoFeatureHpUP
        if (obj.微地貌 != null) {
            var hpId = ["chkStorehp", "chkPohp", "chkSpohp", "chkLevelhp", ];
            var hpStr = ["陡崖", "陡坡", "缓坡", "平台"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.微地貌);
        }
        //地下水类型groundwaterTypeHpUP
        if (obj.地下水类型 != null) {
            var hpId = ["chkRonghp", "chkYanhp", "chkWaterhp", "chkChenghp", "chkUpWaterhp", "chkDownhp"];
            var hpStr = ["岩溶水", "孔隙水", "裂隙水", "承压水", "上层滞水", "潜水"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.地下水类型);
        }
        $("#yearAvgHp").text(obj.年均降雨量);
        $("#dayMaxHp").text(obj.日最大降雨量);
        $("#hourMaxHp").text(obj.时最大降雨量);
        $("#floodHp").text(obj.洪水位);
        $("#lowWaterHp").text(obj.枯水位);
        //相对河流位置riverBedHpUP
        if (obj.相对河流位置 != null) {
            var hpId = ["chkLefthp", "chkRighthp", "chkAohp", "chkTuhp"];
            var hpStr = ["左", "右", "凹", "凸"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.相对河流位置);
        }
        $("#poHightHp").text(obj.原始坡高);
        $("#poPassHp").text(obj.原始坡度);
        if (obj.原始坡形 != null) {
            $("#poShapeHp input[type=radio]").each(function () {
                if ($(this).val() == obj.原始坡形)
                    $(this).attr("checked", true);
            });
        }
        $("#poStrucTypeHp").text(obj.斜坡结构类型);
        $("#oneControlTypeHp").text(obj.控滑结构面类型1);
        $("#oneqxHp").text(obj.控滑结构面倾向1);
        $("#oneqjHp").text(obj.控滑结构面倾角1);
        $("#twoControlTypeHp").text(obj.控滑结构面类型2);
        $("#twoqxHp").text(obj.控滑结构面倾向2);
        $("#twoqjHp").text(obj.控滑结构面倾角2);
        $("#threeControlTypeHp").text(obj.控滑结构面类型3);
        $("#threeqxHp").text(obj.控滑结构面倾向3);
        $("#threeqjHp").text(obj.控滑结构面倾角3);
        $("#ttLengthHp").text(obj.滑坡长度);
        $("#ttWidthHp").text(obj.滑坡宽度);
        $("#thicknessHp").text(obj.滑坡厚度);
        $("#ttAreaHp").text(obj.滑坡面积);
        $("#ttSizeHp").text(obj.滑坡体积);
        $("#poDuHp").text(obj.滑坡坡度);
        $("#poDirectionHp").text(obj.滑坡坡向);
        if (obj.规模等级 != null) {
            $("#scaleLevelHp input[type=radio]").each(function () {
                if ($(this).val() == obj.规模等级)
                    $(this).attr("checked", true);
            });
        }
        if (obj.滑坡平面形态 != null) {
            $("#planeTHp input[type=radio]").each(function () {
                if ($(this).val() == obj.滑坡平面形态)
                    $(this).attr("checked", true);
            });
        }
        if (obj.滑坡剖面形态 != null) {
            $("#pokkHp input[type=radio]").each(function () {
                if ($(this).val() == obj.滑坡剖面形态)
                    $(this).attr("checked", true);
            });
        }
        $("#StoreX").text(obj.滑体岩性);
        if (obj.滑体结构 != null) {
            $("#Structor input[type=radio]").each(function () {
                if (obj.滑体结构.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#lStore").text(obj.滑体碎石含量);
        $("#kuaiDuHp").text(obj.滑体块度);
        $("#yXHp").text(obj.滑床岩性);
        $("#tTimeHp").text(obj.滑床时代);
        $("#hctzzqxHp").text(obj.滑床倾向);
        $("#hctzzqjHp").text(obj.滑床倾角);
        $("#zwShapeHp option:selected").text(obj.滑面形态);
        $("#mBuriedDepthHp").text(obj.滑面埋深);
        $("#mTendencyHp").text(obj.滑面倾向);
        $("#mDipAngleHp").text(obj.滑面倾角);
        $("#mDepthHp").text(obj.滑带厚度);
        $("#slipZoneNameHp").text(obj.滑带土名称);
        $("#slipZoneShapeHp").text(obj.滑带土性状);
        if (obj.变形迹象名称1 != null) {
            $("#oneVariantDaNamehp input[type=checkbox]").attr("checked", true);
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
        $("#gwBuriedDepthHp").text(obj.地下水埋深);
        if (obj.地下水露头 != null) {
            var hpxzId = ["chkupQhp", "chkDownQhp", "chkyshp"];
            var hpxzStr = ["上升泉", "下降泉", "溢水点"];
            judgeCheckboxAndRadio(hpxzStr, hpxzId, obj.地下水露头);
        }
        //地下水补给类型gwSupplyClassHpUP
        if (obj.地下水补给类型 != null) {
            var hpId = ["chkRainhp", "chkDWaterhp", "chkPeoplehp", "chkSnowhp"];
            var hpStr = ["降雨", "地表水", "人工", "融雪"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.地下水补给类型);
        }
        //主导因素
        if (obj.主导因素 != null) {
            $("#leadingCauseHp input[type=checkbox]").each(function () {
                if (obj.主导因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //地质因素geologyHpUP
        if (obj.地质因素 != null) {
            var hpId = ["jljdfyHP", "jgmzxypmpxHP", "jgmqjxypjHP", "rrjzHP", "tscxfgscHP", "ttyjyjcHP", "ssfhcyjyjcHP", "qrfhcjmHP"];
            var hpStr = ["地震", "结构面走向与坡面平行", "结构面倾角小于坡角", "软弱基座", "透水层下伏隔水层", "土体/基岩接触", "破碎风化岩/基岩接触", "强/若风化层界面"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.地质因素);
        }
        //地貌因素
        if (obj.地貌因素 != null) {
            $("#landformsHp input[type=checkbox]").each(function () {
                if (obj.地貌因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //物理因素
        if (obj.物理因素 != null) {
            $("#physicsHp input[type=checkbox]").each(function () {
                if (obj.物理因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //人为因素
        if (obj.人为因素 != null) {
            $("#artificialHp input[type=checkbox]").each(function () {
                if (obj.人为因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //复活诱发因素
        if (obj.复活诱发因素 != null) {
            $("#causeHp input[type=checkbox]").each(function () {
                if (obj.复活诱发因素.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        if (obj.目前稳定状态 != null) {
            var hpxzId = ["nswdxhHP", "mqwdhp", "nswdxjcHP"];
            var hpxzStr = ["稳定性好", "稳定性差", "稳定性较差"];
            judgeCheckboxAndRadio(hpxzStr, hpxzId, obj.目前稳定状态);
        }
        if (obj.今后变化趋势 != null) {
            var hpxzId = ["ctwdxhHP", "ctwdxcHP", "ctwdxjcHP"];
            var hpxzStr = ["稳定性好", "稳定性差", "稳定性较差"];
            judgeCheckboxAndRadio(hpxzStr, hpxzId, obj.今后变化趋势);
        }
        $("#damageDoorHp").css("text-align", "center").text(obj.毁坏房屋);
        $("#dieNubHp").css("text-align", "center").text(obj.死亡人口);
        if (obj.灾情等级 != null) {
            $("#damageClassHp input[type=radio]").each(function () {
                if ($(this).val() == obj.灾情等级)
                    $(this).attr("checked", true);
            });
        }
        if (obj.险情等级 != null) {
            var hpId = ["xqdjxxHP", "xqdjzxHP", "xqdjdxHP", "xqdjtdxHP"];
            var hpStr = ["小型", "中型", "大型", "特大型"];
            judgeCheckboxAndRadio(hpStr, hpId, obj.险情等级);
        }
        $("#threatenZhuhuHp").css("text-align", "center").text(obj.威胁住户);
        $("#threatenNubHp").css("text-align", "center").text(obj.威胁人口);
        $("#directLossHp").css("text-align", "center").text(obj.直接损失);
        $("#threatenFortuneHp").css("text-align", "center").text(obj.威胁财产);
        //监测建议
        if (obj.监测建议 != null) {
            $("#monitorAdviceHp input[type=checkbox]").each(function () {
                if (obj.监测建议.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        //防治建议
        if (obj.防治建议 != null) {
            $("#preventAdviceHp input[type=checkbox]").each(function () {
                if (obj.防治建议.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#dangerPointHp input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.隐患点) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.隐患点) {
                $(this).attr("checked", true);
            }
        });
        //平面示意图 = "";
        //剖面示意图 = "";
        $("input").each(function () {
            if ($(this).attr("checked") == "checked") {

            } else {
                $(this).next("label").css("color", "#999");
            }
        })

        //图片
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
        UpDataPicFun("planHp", planImg);
        UpDataPicFun("profileHp", profileImg);
        UpDataPicFun("hp_BaseImg", baseImg);
        UpBaseVideoFun("hp_BaseVideo", "视频",obj.统一编号, false, videoArr);

    });
}