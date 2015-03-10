$(function () {
    initialization();
    $("#BIT_right_img_UpdateCollapse").click(function () {
        new R2.Business.LandCrackDataUpdate;
    })
    //返回事件CSW
    $("#BIT_right_img_Return").click(function () {
        top.fullPanel2.closeByIFrame();
    })
    //返回主页事件CSW
    $("#BIT_right_img_GoHome").click(function () {
        top.fullPanel2.closeByIFrameGoHome();
    })
});

function initialization() {
    /*展示原来信息*/
    $.post(baseUrl + "QueryLandCrack/GetLandCrackById", { "id": $("#landCrackId").val() }, function (data) {
        if (data == "fail") {
            return false;
        }
        var obj = eval("(" + data + ")");

        $("#uNubFastenDlfInput").text(obj.统一编号.substring(0, 8));
        $("#uNubAgileDlfInput").val(obj.统一编号.substring(8, obj.统一编号.length));
        var num = obj.统一编号.substring(0, 6);
        for (var i = 0; i < $("#countyDlfInput").children("option").length ; i++) {
            if (num == $("#countyDlfInput").children("option").eq(i).val()) {
                $("#countyDlfInput").children("option").eq(i).attr("selected", "selected");
            }
        }
        $("#nameDlfInput").val(obj.名称);
        $("#fNubDlfInput").val(obj.野外编号);
        $("#rNubDlfInput").val(obj.室内编号);
        $("#xCoordinateDlfInput").val(obj.X坐标);
        $("#yCoordinateDlfInput").val(obj.Y坐标);
        $("#biaogaoDlfInput").val(obj.标高);
        $("#locationDlfInput").val(obj.地理位置);
        if (obj.经度 != null) {
            $("#lonDUDlfInput").val(obj.经度.split("-")[0]);
            $("#lonFenDlfInput").val(obj.经度.split("-")[1]);
            $("#lonMiaoDlfInput").val(obj.经度.split("-")[2]);
        }
        //纬度
        if (obj.纬度 != null) {
            $("#latDUDlfInput").val(obj.纬度.split("-")[0]);
            $("#latFenDlfInput").val(obj.纬度.split("-")[1]);
            $("#latMiaoDlfInput").val(obj.纬度.split("-")[2]);
        }
        $("#dfbslffhOneInput").val(obj.单缝缝号1);
        //    单缝形态1: $("#dfbslfxOne input[type=radio]:checked").val(),
        if (obj.单缝形态1 != null) {
            $("#dfbslfxOne input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝形态1)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslfysfxOneInput").val(obj.单缝延伸方向1);
        $("#dfbslfqxOneInput").val(obj.单缝倾向1);
        $("#dfbslfqjOneInput").val(obj.单缝倾角1);
        $("#dfbslfcdOneInput").val(obj.单缝长度1);
        $("#dfbslfkdOneInput").val(obj.单缝宽度1);
        $("#dfbslfsdOneInput").val(obj.单缝深度1);
        //    单缝规模等级1: $("#dfScaleClassOne input[type=radio]:checked").val(),
        if (obj.单缝规模等级1 != null) {
            $("#dfScaleClassOne input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝规模等级1)
                    $(this).attr("checked", true);
            });
        }
        //    单缝性质1: $("#dfCharacterOne input[type=radio]:checked").val(),
        if (obj.单缝性质1 != null) {
            $("#dfCharacterOne input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝性质1)
                    $(this).attr("checked", true);
            });
        }
        $("#dfDriftDirectionOneInput").val(obj.单缝位移方向1);
        $("#dfDriftDistanceOneInput").val(obj.单缝位移距离1);
        $("#dfFillMatterOneInput").val(obj.单缝填充物1);
        $("#dfOccurTimeOneInput").val(obj.单缝出现时间1);
        //        单缝活动性1: $("#dfActivityOne input[type=radio]:checked").val(),
        if (obj.单缝活动性1 != null) {
            $("#dfActivityOne input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝活动性1)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslffhTwoInput").val(obj.单缝缝号2);
        //        单缝形态2: $("#dfbslfxtTwo input[type=radio]:checked").val(),
        if (obj.单缝形态2 != null) {
            $("#dfbslfxtTwo input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝形态2)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslfysfxTwoInput").val(obj.单缝延伸方向2);
        $("#dfbslfqxTwoInput").val(obj.单缝倾向2);
        $("#dfbslfqjTwoInput").val(obj.单缝倾角2);
        $("#dfbslfcdTwoInput").val(obj.单缝长度2);
        $("#dfbslfkdTwoInput").val(obj.单缝宽度2);
        $("#dfbslfsdTwoInput").val(obj.单缝深度2);
        //        单缝规模等级2: $("#dfScaleClassTwo input[type=radio]:checked").val();
        if (obj.单缝规模等级2 != null) {
            $("#dfScaleClassTwo input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝规模等级2)
                    $(this).attr("checked", true);
            });
        }
        //        单缝性质2: $("#dfCharacterTwo input[type=radio]:checked").val();
        if (obj.单缝性质2 != null) {
            $("#dfCharacterTwo input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝性质2)
                    $(this).attr("checked", true);
            });
        }
        $("#dfDriftDirectionTwoInput").val(obj.单缝位移方向2);
        $("#dfDriftDistanceTwoInput").val(obj.单缝位移距离2);
        $("#dfFillMatterTwoInput").val(obj.单缝填充物2);
        $("#dfOccurTimeTwoInput").val(obj.单缝出现时间2);
        //        单缝活动性2: $("#dfActivityTwo input[type=radio]:checked").val();
        if (obj.单缝活动性2 != null) {
            $("#dfActivityTwo input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝活动性2)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslffhThreeInput").val(obj.单缝缝号3);
        //        单缝形态3: $("#dfbslfxtThree input[type=radio]:checked").val();
        if (obj.单缝形态3 != null) {
            $("#dfbslfxtThree input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝形态3)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslfysfxThreeInput").val(obj.单缝延伸方向3);
        $("#dfbslfqxThreeInput").val(obj.单缝倾向3);
        $("#dfbslfqjThreeInput").val(obj.单缝倾角3);
        $("#dfbslfcdThreeInput").val(obj.单缝长度3);
        $("#dfbslfkdThreeInput").val(obj.单缝宽度3);
        $("#dfbslfsdThreeInput").val(obj.单缝深度3);
        //        单缝规模等级3: $("#dfScaleClassThree input[type=radio]:checked").val();
        if (obj.单缝规模等级3 != null) {
            $("#dfScaleClassThree input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝规模等级3)
                    $(this).attr("checked", true);
            });
        }
        //        单缝性质3: $("#dfCharacterThree input[type=radio]:checked").val();
        if (obj.单缝性质3 != null) {
            $("#dfCharacterThree input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝性质3)
                    $(this).attr("checked", true);
            });
        }
        $("#dfDriftDirectionThreeInput").val(obj.单缝位移方向3);
        $("#dfDriftDistanceThreeInput").val(obj.单缝位移距离3);
        $("#dfFillMatterThreeInput").val(obj.单缝填充物3);
        $("#dfOccurTimeThreeInput").val(obj.单缝出现时间3);
        //        单缝活动性3: $("#dfActivityThree input[type=radio]:checked").val();
        if (obj.单缝活动性3 != null) {
            $("#dfActivityThree input[type=radio]").each(function () {
                if ($(this).val() == obj.单缝活动性3)
                    $(this).attr("checked", true);
            });
        }
        $("#fengshuDlfInput").val(obj.群缝缝数);
        $("#qffbmjDlfInput").val(obj.群缝分布面积);
        $("#qffyjjDlfInput").val(obj.群缝发育间距);
        //        群缝排列形式: "",
        if (obj.群缝排列形式 != null) {
            var qfplxsId = ["pingxingDlf", "xielieDlf", "huanweiDlf", "zaluanwuzhangDlf"];
            var qfplxsStr = ["平行", "斜列", "环围", "杂乱无章"];
            judgeCheckboxAndRadio(qfplxsStr, qfplxsId, obj.群缝排列形式);
        }
        //        if (obj.群缝排列形式 != null) {
        //            $("#qfplxsDlfUP input[type=checkbox]").each(function () {
        //                if (obj.群缝排列形式.contains($(this).val())) {
        //                    $(this).attr("checked", true);
        //                }
        //            });
        //        }
        $("#qfzdcdDlfInput").val(obj.裂缝长度max);
        $("#qfzxcdDlfInput").val(obj.裂缝长度min);
        $("#qfzdkdDlfInput").val(obj.裂缝宽度max);
        $("#qfzxkdDlfInput").val(obj.裂缝宽度min);
        $("#qfzdsdDlfInput").val(obj.裂缝深度max);
        $("#qfzxsdDlfInput").val(obj.裂缝深度min);
        $("#qfsfsjDlfInput").val(obj.始发时间);
        $("#qfsfkssjDlfInput").val(obj.盛发开始时间);
        $("#qfsfjssjDlfInput").val(obj.盛发截止时间);
        $("#qftzsjDlfInput").val(obj.停止时间);
        //        目前发展情况: $("#stillDevelopDlf input[type=radio]:checked").val();
        if (obj.目前发展情况 != null) {
            $("#stillDevelopDlf input[type=radio]").each(function () {
                if ($(this).val() == obj.目前发展情况)
                    $(this).attr("checked", true);
            });
        }
        //        规模等级: $("#scaleClassDlf input[type=radio]:checked").val();
        if (obj.规模等级 != null) {
            $("#scaleClassDlf input[type=radio]").each(function () {
                if ($(this).val() == obj.规模等级)
                    $(this).attr("checked", true);
            });
        }
        //        成因类型: "",
        if (obj.成因类型 != null) {
            var cylxId = ["dxkwyqDlf", "cpdxsyqDlf", "dzhgzhdyqDlf", "zstyqDlf"];
            var cylxStr = ["地下开挖引起", "抽排地下水引起", "地震和构造活动引起", "胀缩土引起"];
            judgeCheckboxAndRadio(cylxStr, cylxId, obj.成因类型);
        }
        //        if (obj.成因类型 != null) {
        //            $("#causeTypeDlfUP input[type=checkbox]").each(function () {
        //                if (obj.成因类型.contains($(this).val())) {
        //                    $(this).attr("checked", true);
        //                }
        //            });
        //        }
        //        裂缝区地貌特征: "",
        if (obj.裂缝区地貌特征 != null) {
            var qfqdmtzId = ["lfdmtzSd", "lfdmtzSp", "lfdmtzSj", "lfdmtzPy"];
            var qfqdmtzStr = ["山顶", "山坡", "山脚", "平原"];
            judgeCheckboxAndRadio(qfqdmtzStr, qfqdmtzId, obj.裂缝区地貌特征);
        }
        //        if (obj.裂缝区地貌特征 != null) {
        //            $("#lfqdmtzDlfUP input[type=checkbox]").each(function () {
        //                if (obj.裂缝区地貌特征.contains($(this).val())) {
        //                    $(this).attr("checked", true);
        //                }
        //            });
        //        }
        //       裂缝与地貌走向关系: "",
        if (obj.裂缝与地貌走向关系 != null) {
            var lfydmzxgxId = ["lfydmtzgxPx", "lfydmtzgxHj", "lfydmtzgxXj"];
            var lfydmzxgxStr = ["平行", "横交", "斜交"];
            judgeCheckboxAndRadio(lfydmzxgxStr, lfydmzxgxId, obj.裂缝与地貌走向关系);
        }
        //        if (obj.裂缝与地貌走向关系 != null) {
        //            $("#lfydmzxgxDlfUP input[type=checkbox]").each(function () {
        //                if (obj.裂缝与地貌走向关系.contains($(this).val())) {
        //                    $(this).attr("checked", true);
        //                }
        //            });
        //        }
        $("#lfjytcsdDlfInput").val(obj.裂缝巨岩土层时代);
        $("#lfjytcyxDlfInput").val(obj.裂缝巨岩土层岩性);
        $("#sltcsjDlfInput").val(obj.受裂土层时间);
        $("#sltctxDlfInput").val(obj.受裂土层土性);
        $("#sltxfcsjDlfInput").val(obj.受裂土下伏层时间);
        $("#sltxfcyxDlfInput").val(obj.受裂土下伏层岩性);
        $("#slytcsdDlfInput").val(obj.受裂岩土层时代);
        $("#slytcyxDlfInput").val(obj.受裂岩土层岩性);
        $("#zsttzDlfInput").val(obj.胀缩土特征);
        //       胀缩土膨胀性: $("#zstpzxDlf input[type=radio]:checked").val();
        if (obj.胀缩土膨胀性 != null) {
            $("#zstpzxDlf input[type=radio]").each(function () {
                if ($(this).val() == obj.胀缩土膨胀性)
                    $(this).attr("checked", true);
            });
        }
        $("#zsthslDlfInput").val(obj.胀缩土含水量);
        $("#lfqgzdlzxOneDlfInput").val(obj.裂缝区构造断裂走向1);
        $("#lfqgzdlqxOneDlfInput").val(obj.裂缝区构造断裂倾向1);
        $("#lfqgzdlqjOneDlfInput").val(obj.裂缝区构造断裂倾角1);
        $("#lfqgzdlzxTwoDlfInput").val(obj.裂缝区构造断裂走向2);
        $("#lfqgzdlqxTwoDlfInput").val(obj.裂缝区构造断裂倾向2);
        $("#lfqgzdlqjTwoDlfInput").val(obj.裂缝区构造断裂倾角2);
        $("#yczydlczqxDlfInput").val(obj.岩层中断裂倾向);
        $("#yczydlczqjDlfInput").val(obj.岩层中断裂倾角);
        //       土层中有无新断裂: $("#tczywxdlDlf input[type=radio]:checked").val();
        //        if (obj.土层中有无新断裂 != null) {
        //            var tcywxdlId = ["havetcxdlDlfUP", "notcxdlDlfUP"];
        //            judgeRadio(tcywxdlId, obj.土层中有无新断裂);
        //        }
        $("#tczywxdlDlf input[type=radio]").each(function () {
            if ($(this).val() == "true" && obj.土层中有无新断裂) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.土层中有无新断裂) {
                $(this).attr("checked", true);
            }
        });

        $("#tcxdlczqxDlfInput").val(obj.土层中新断裂倾向);
        $("#tcxdlczqjDlfInput").val(obj.土层中新断裂倾角);
        $("#zygzdlzxOneDlfInput").val(obj.主要构造断裂走向1);
        $("#zygzdlqxOneDlfInput").val(obj.主要构造断裂倾向1);
        $("#zygzdlqjOneDlfInput").val(obj.主要构造断裂倾角1);
        $("#lzygzdlzxTwoDlfInput").val(obj.主要构造断裂走向2);
        $("#zygzdlqxTwoDlfInput").val(obj.主要构造断裂倾向2);
        $("#zygzdlqjTwoDlfInput").val(obj.主要构造断裂倾角2);
        //        胀缩土中有无新断裂: $("#zstzywxdlDlf input[type=radio]:checked").val();
        if (obj.胀缩土中有无新断裂 != null) {
            var zstywxdlId = ["havezstxdlDlf", "nozstxdlDlf"];
            judgeRadio(zstywxdlId, obj.胀缩土中有无新断裂);
        }
        $("#zstxdlczqxDlfInput").val(obj.胀缩土中新断裂倾向);
        $("#zstxdlczqjDlfInput").val(obj.胀缩土中新断裂倾角);
        $("#dsmsDlfInput").val(obj.洞室埋深);
        $("#dsgmDlfInput").val(obj.洞室规模);
        $("#dscDlfInput").val(obj.洞室长);
        $("#dskDlfInput").val(obj.洞室宽);
        $("#dsgDlfInput").val(obj.洞室高);
        $("#dsylfqgxDlfInput").val(obj.洞室与裂缝区位置关系);
        $("#kwsjDlfInput").val(obj.洞室开挖时间);
        $("#kwfsDlfInput").val(obj.洞室开挖方式);
        $("#kwqdDlfInput").val(obj.洞室开挖强度);
        //        抽排地下水类型: "",
        if (obj.抽排地下水类型 != null) {
            var cpdxslxId = ["jorkcpdxsDlf", "kdcpdxsDlf"];
            var cpdxslxStr = ["井、孔", "坑道"];
            judgeCheckboxAndRadio(cpdxslxStr, cpdxslxId, obj.抽排地下水类型);
        }
        //        if (obj.抽排地下水类型 != null) {
        //            $("#cpdxslxDlfUP input[type=checkbox]").each(function () {
        //                if (obj.抽排地下水类型.contains($(this).val())) {
        //                    $(this).attr("checked", true);
        //                }
        //            });
        //        }
        $("#cpjmsDlfInput").val(obj.抽排井埋深);
        $("#cpswslDlfInput").val(obj.抽排水位水量);
        $("#cprcslDlfInput").val(obj.抽排日出水量);
        $("#cpsstarttimeDlfInput").val(obj.抽排水开始时间);
        $("#cpsendtimeDlfInput").val(obj.抽排水停止时间);
        //        抽排水状态: $("#cpsstatusDlf input[type=radio]:checked").val();
        if (obj.抽排水状态 != null) {
            $("#cpsstatusDlf input[type=radio]").each(function () {
                if ($(this).val() == obj.抽排水状态.toString()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#dzldDlfInput").val(obj.地震烈度);
        $("#dzfssjDlfInput").val(obj.地震发生时间);
        $("#hdcwzDlfInput").val(obj.活动断层位置);
        $("#hdcczqxDlfInput").val(obj.活动断层倾向);
        $("#hdcczqjDlfInput").val(obj.活动断层倾角);
        $("#hdccdDlfInput").val(obj.活动断层长度);
        $("#hdcxzDlfInput").val(obj.活动断层性质);
        $("#hdchdsjDlfInput").val(obj.活动断层活动时间);
        $("#hdchdslDlfInput").val(obj.活动断层活动速率);
        $("#hdcdjDlfInput").val(obj.活动断层断距);
        //        水理作用水源: "",
        if (obj.水理作用水源 != null) {
            var slzysyId = ["jyslzysyDlf", "sksslzysyDlf", "dbsslzysyDlf", "dxsslzysyDlf"];
            var slzysyStr = ["降雨", "水库水", "地表水", "地下水"];
            judgeCheckboxAndRadio(slzysyStr, slzysyId, obj.水理作用水源);
        }
        //        if (obj.水理作用水源 != null) {
        //            $("#slzysyDlfUP input[type=checkbox]").each(function () {
        //                if (obj.水理作用水源.contains($(this).val())) {
        //                    $(this).attr("checked", true);
        //                }
        //            });
        //        }
        $("#slzysjDlfInput").val(obj.水理作用时间);
        $("#slzyszDlfInput").val(obj.水理作用水质);
        //      水理作用类型: "",
        if (obj.水理作用类型 != null) {
            var slzylxId = ["kwxhzyslzylxDlf", "othercauseslzylxDlf"];
            var slzylxStr = ["开挖卸荷作用", "其它作用引起的干湿变化"];
            judgeCheckboxAndRadio(slzylxStr, slzylxId, obj.水理作用类型);
        }
        //        if (obj.水理作用类型 != null) {
        //            $("#slzylxDlfUP input[type=checkbox]").each(function () {
        //                if (obj.水理作用类型.contains($(this).val())) {
        //                    $(this).attr("checked", true);
        //                }
        //            });
        //        }
        $("#slzykwsjDlfInput").val(obj.水理作用开挖时间);
        $("#slzykwfsDlfInput").val(obj.水理作用开挖方式);
        $("#slzykwsdDlfInput").val(obj.水理作用开挖深度);
        $("#damageHouseDlfInput").val(obj.毁坏房屋);
        $("#jamTrafficDlfInput").val(obj.阻断交通);
        $("#jamTrafficTimeDlfInput").val(obj.阻断交通时间);
        $("#dieNumDlfInput").val(obj.死亡人口);
        $("#directLossDlfInput").val(obj.直接损失);
        //        $("#damageClassDlfInputUP").val(obj.灾情等级);
        //        隐患点: $("#dangerPointDlf input[type=radio]:checked").val();
        if (obj.隐患点 != null) {
            var yhdId = ["havedpointDlf", "nodpointDlf"];
            judgeRadio(yhdId, obj.隐患点);
        }
        $("#zhtjDlfInput").val(obj.灾害体积);
        $("#qzwhhhfwDlfInput").val(obj.威胁房屋);
        $("#qzwhjtyhDlfInput").val(obj.交通隐患);
        $("#qzwhwxrkDlfInput").val(obj.威胁人口);
        $("#qzwhwxccDlfInput").val(obj.威胁财产);
        if (obj.灾情等级 != null) {
            $("#damageClassDlf input[type=radio]").each(function () {
                if (obj.灾情等级.indexOf($(this).val()) >= 0)
                    $(this).attr("checked", true);
            });
        }
        if (obj.险情等级 != null) {
            $("#dangerClassDlf input[type=radio]").each(function () {
                if (obj.险情等级.indexOf($(this).val()) >= 0)
                    $(this).attr("checked", true);
            });
        }
        //        $("#dangerClassDlfInputUP").val(obj.险情等级);
        //        发展预测: "",
        if (obj.发展预测 != null) {
            var lffzycId = ["fsIncreaseDlf", "formerLfIncreaseDlf", "activeStrengthIncreaseDlf"];
            var lffzycStr = ["缝数增多", "原有裂缝加大", "活动强度增加"];
            judgeCheckboxAndRadio(lffzycStr, lffzycId, obj.发展预测);
        }
        //        if (obj.发展预测 != null) {
        //            $("#lfDevelopForecastDlfUP input[type=checkbox]").each(function () {
        //                if (obj.发展预测.contains($(this).val())) {
        //                    $(this).attr("checked", true);
        //                }
        //            });
        //        }
        //        防灾预案: $("#pdPlanDlf input[type=radio]:checked").val();
        if (obj.防灾预案 != null) {
            var fzyaId = ["havepdplanDlf", "nopdplanDlf"];
            judgeRadio(fzyaId, obj.防灾预案);
        }
        //        多媒体: $("#mediaDlf input[type=radio]:checked").val();
        if (obj.多媒体 != null) {
            var dmtId = ["havemediaDlf", "nomediaDlf"];
            judgeRadio(dmtId, obj.多媒体);
        }
        $("#preMeasureAndEffectDlfInput").val(obj.防治措施及效果);
        $("#preAdviceDlfInput").val(obj.防治建议);
        $("#investiPersonDlfInput").val(obj.调查负责人);
        $("#fillerDlfInput").val(obj.填表人);
        $("#auditDlfInput").val(obj.审核人);
        $("#investiUnitDlfInput").val(obj.调查单位);
        $("#dateDlfInput").val(obj.填表日期);
        $("#cpsLocationgxDlfInput").val(obj.抽排水位置关系);
        //          平面示意图:$("#").val();
        //          剖面示意图:$("#").val();
        $("#provinceDlfInput").val(obj.省名);
        //        $("#countyDlfInputUP").val(obj.县名);
        //        街道: $("#streetDlfInput option:selected").text()
        $("#streetDlf .countryInput").val(obj.街道);


        //平面示意图 = "";
        //剖面示意图 = "";

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
        UpDataPicFun("planDlf", "平面图", obj.统一编号, planImg);
        UpDataPicFun("profileDlf", "剖面图", obj.统一编号, profileImg);
        UpDataPicFun("dlf_BaseImg", "剖面图", obj.统一编号, baseImg);
        UpBaseVideoFun("dlf_Videos", "视频", obj.统一编号, true, videoArrs);


    })
}

R2.Business.LandCrackDataUpdate = OpenLayers.Class({
    booll: true,
    disaImg:null,
    initialize: function () {
        var landCrackObj = this.landCrackValue();
        var dlfzhInfoObj = this.landCrackValue2();
         this.disaImage_1();
        if (this.booll == true) {
            var object = { 'compreStr': JSON.stringify(dlfzhInfoObj), 'objStr': JSON.stringify(landCrackObj), "planImgs": JSON.stringify(this.disaImg) };
            $.post(baseUrl + "QueryLandCrack/UpdateLandCrack", object, function (data) {
                if (data == "sucess") {
                    alert("数据修改成功！");
                    $(".Imgscan").find(".Imageexist").html("1");
                }
            });
        }
    },
    landCrackValue: function () {
        var tempObj = this;
        var landCrackObj = {};
        //经度
        var jingduDu = $("#lonDUDlfInput").val();
        var jingduFen = $("#lonFenDlfInput").val();
        var jingduMiao = $("#lonMiaoDlfInput").val();
        //纬度()
        var weiduDu = $("#latDUDlfInput").val();
        var weiduFen = $("#latFenDlfInput").val();
        var weiduMiao = $("#latMiaoDlfInput").val();
        //地理位置()
        if ($("#locationDlfInput").val() == "" || $("#nameDlfInput").val() == "" || $("#qzwhjtyhDlfInput").val() == "" || $("#pdPlanDlf input[type=radio]:checked").val() == undefined || $("#mediaDlf input[type=radio]:checked").val() == undefined || $("#dangerPointDlf input[type=radio]:checked").val() == undefined || $("#tczywxdlDlf input[type=radio]:checked").val() == undefined || $("#zstzywxdlDlf input[type=radio]:checked").val() == undefined || $("#cpsstatusDlf input[type=radio]:checked").val() == undefined) {
            alert("橙色为必填字段，请检查是否全部输入");
            tempObj.booll = false;
            return;
        }

        landCrackObj.统一编号 = $("#uNubFastenDlfInput").text() + $("#uNubAgileDlfInput").val();
        landCrackObj.名称 = $("#nameDlfInput").val();
        landCrackObj.野外编号 = $("#fNubDlfInput2").val();
        landCrackObj.室内编号 = $("#rNubDlfInput").val();
        landCrackObj.X坐标 = $("#xCoordinateDlfInput").val();
        landCrackObj.Y坐标 = $("#yCoordinateDlfInput").val();
        landCrackObj.标高 = $("#biaogaoDlfInput").val();
        landCrackObj.经度 = jingduDu + "-" + jingduFen + "-" + jingduMiao;
        landCrackObj.纬度 = weiduDu + "-" + weiduFen + "-" + weiduMiao;
        landCrackObj.地理位置 = $("#locationDlfInput").val(); //发生地点
        landCrackObj.单缝缝号1 = $("#dfbslffhOneInput").val();
        landCrackObj.单缝形态1 = $("#dfbslfxOne input[type=radio]:checked").val();
        landCrackObj.单缝延伸方向1 = $("#dfbslfysfxOneInput").val();
        landCrackObj.单缝倾向1 = $("#dfbslfqxOneInput").val();
        landCrackObj.单缝倾角1 = $("#dfbslfqjOneInput").val();
        landCrackObj.单缝长度1 = $("#dfbslfcdOneInput").val();
        landCrackObj.单缝宽度1 = $("#dfbslfkdOneInput").val();
        landCrackObj.单缝深度1 = $("#dfbslfsdOneInput").val();
        landCrackObj.单缝规模等级1 = $("#dfScaleClassOne input[type=radio]:checked").val();
        landCrackObj.单缝性质1 = $("#dfCharacterOne input[type=radio]:checked").val();
        landCrackObj.单缝位移方向1 = $("#dfDriftDirectionOneInput").val();
        landCrackObj.单缝位移距离1 = $("#dfDriftDistanceOneInput").val();
        landCrackObj.单缝填充物1 = $("#dfFillMatterOneInput").val();
        landCrackObj.单缝出现时间1 = $("#dfOccurTimeOneInput").val();
        landCrackObj.单缝活动性1 = $("#dfActivityOne input[type=radio]:checked").val();
        landCrackObj.单缝缝号2 = $("#dfbslffhTwoInput").val();
        landCrackObj.单缝形态2 = $("#dfbslfxtTwo input[type=radio]:checked").val();
        landCrackObj.单缝延伸方向2 = $("#dfbslfysfxTwoInput").val();
        landCrackObj.单缝倾向2 = $("#dfbslfqxTwoInput").val();
        landCrackObj.单缝倾角2 = $("#dfbslfqjTwoInput").val();
        landCrackObj.单缝长度2 = $("#dfbslfcdTwoInput").val();
        landCrackObj.单缝宽度2 = $("#dfbslfkdTwoInput").val();
        landCrackObj.单缝深度2 = $("#dfbslfsdTwoInput").val();
        landCrackObj.单缝规模等级2 = $("#dfScaleClassTwo input[type=radio]:checked").val();
        landCrackObj.单缝性质2 = $("#dfCharacterTwo input[type=radio]:checked").val();
        landCrackObj.单缝位移方向2 = $("#dfDriftDirectionTwoInput").val();
        landCrackObj.单缝位移距离2 = $("#dfDriftDistanceTwoInput").val();
        landCrackObj.单缝填充物2 = $("#dfFillMatterTwoInput").val();
        landCrackObj.单缝出现时间2 = $("#dfOccurTimeTwoInput").val();
        landCrackObj.单缝活动性2 = $("#dfActivityTwo input[type=radio]:checked").val();
        landCrackObj.单缝缝号3 = $("#dfbslffhThreeInput").val();
        landCrackObj.单缝形态3 = $("#dfbslfxtThree input[type=radio]:checked").val();
        landCrackObj.单缝延伸方向3 = $("#dfbslfysfxThreeInput").val();
        landCrackObj.单缝倾向3 = $("#dfbslfqxThreeInput").val();
        landCrackObj.单缝倾角3 = $("#dfbslfqjThreeInput").val();
        landCrackObj.单缝长度3 = $("#dfbslfcdThreeInput").val();
        landCrackObj.单缝宽度3 = $("#dfbslfkdThreeInput").val();
        landCrackObj.单缝深度3 = $("#dfbslfsdThreeInput").val();
        landCrackObj.单缝规模等级3 = $("#dfScaleClassThree input[type=radio]:checked").val();
        landCrackObj.单缝性质3 = $("#dfCharacterThree input[type=radio]:checked").val();
        landCrackObj.单缝位移方向3 = $("#dfDriftDirectionThreeInput").val();
        landCrackObj.单缝位移距离3 = $("#dfDriftDistanceThreeInput").val();
        landCrackObj.单缝填充物3 = $("#dfFillMatterThreeInput").val();
        landCrackObj.单缝出现时间3 = $("#dfOccurTimeThreeInput").val();
        landCrackObj.单缝活动性3 = $("#dfActivityThree input[type=radio]:checked").val();
        landCrackObj.群缝缝数 = $("#fengshuDlfInput").val();
        landCrackObj.群缝分布面积 = $("#qffbmjDlfInput").val();
        landCrackObj.群缝发育间距 = $("#qffyjjDlfInput").val();
        landCrackObj.群缝排列形式 = "";
        landCrackObj.裂缝长度max = $("#qfzdcdDlfInput").val();
        landCrackObj.裂缝长度min = $("#qfzxcdDlfInput").val();
        landCrackObj.裂缝宽度max = $("#qfzdkdDlfInput").val();
        landCrackObj.裂缝宽度min = $("#qfzxkdDlfInput").val();
        landCrackObj.裂缝深度max = $("#qfzdsdDlfInput").val();
        landCrackObj.裂缝深度min = $("#qfzxsdDlfInput").val();
        landCrackObj.始发时间 = $("#qfsfsjDlfInput").val();
        landCrackObj.盛发开始时间 = $("#qfsfkssjDlfInput").val();
        landCrackObj.盛发截止时间 = $("#qfsfjssjDlfInput").val();
        landCrackObj.停止时间 = $("#qftzsjDlfInput").val();
        landCrackObj.目前发展情况 = $("#stillDevelopDlf input[type=radio]:checked").val();
        landCrackObj.规模等级 = $("#scaleClassDlf input[type=radio]:checked").val();
        landCrackObj.成因类型 = "";
        landCrackObj.裂缝区地貌特征 = "";
        landCrackObj.裂缝与地貌走向关系 = "";
        landCrackObj.裂缝巨岩土层时代 = $("#lfjytcsdDlfInput").val();
        landCrackObj.裂缝巨岩土层岩性 = $("#lfjytcyxDlfInput").val();
        landCrackObj.受裂土层时间 = $("#sltcsjDlfInput").val();
        landCrackObj.受裂土层土性 = $("#sltctxDlfInput").val();
        landCrackObj.受裂土下伏层时间 = $("#sltxfcsjDlfInput").val();
        landCrackObj.受裂土下伏层岩性 = $("#sltxfcyxDlfInput").val();
        landCrackObj.受裂岩土层时代 = $("#slytcsdDlfInput").val();
        landCrackObj.受裂岩土层岩性 = $("#slytcyxDlfInput").val();
        landCrackObj.胀缩土特征 = $("#zsttzDlfInput").val();
        landCrackObj.胀缩土膨胀性 = $("#zstpzxDlf input[type=radio]:checked").val();
        landCrackObj.胀缩土含水量 = $("#zsthslDlfInput").val();
        landCrackObj.裂缝区构造断裂走向1 = $("#lfqgzdlzxOneDlfInput").val();
        landCrackObj.裂缝区构造断裂倾向1 = $("#lfqgzdlqxOneDlfInput").val();
        landCrackObj.裂缝区构造断裂倾角1 = $("#lfqgzdlqjOneDlfInput").val();
        landCrackObj.裂缝区构造断裂走向2 = $("#lfqgzdlzxTwoDlfInput").val();
        landCrackObj.裂缝区构造断裂倾向2 = $("#lfqgzdlqxTwoDlfInput").val();
        landCrackObj.裂缝区构造断裂倾角2 = $("#lfqgzdlqjTwoDlfInput").val();
        landCrackObj.岩层中断裂倾向 = $("#yczydlczqxDlfInput").val();
        landCrackObj.岩层中断裂倾角 = $("#yczydlczqjDlfInput").val();
        landCrackObj.土层中有无新断裂 = $("#tczywxdlDlf input[type=radio]:checked").val();
        landCrackObj.土层中新断裂倾向 = $("#tcxdlczqxDlfInput").val();
        landCrackObj.土层中新断裂倾角 = $("#tcxdlczqjDlfInput").val();
        landCrackObj.主要构造断裂走向1 = $("#zygzdlzxOneDlfInput").val();
        landCrackObj.主要构造断裂倾向1 = $("#zygzdlqxOneDlfInput").val();
        landCrackObj.主要构造断裂倾角1 = $("#zygzdlqjOneDlfInput").val();
        landCrackObj.主要构造断裂走向2 = $("#lzygzdlzxTwoDlfInput").val();
        landCrackObj.主要构造断裂倾向2 = $("#zygzdlqxTwoDlfInput").val();
        landCrackObj.主要构造断裂倾角2 = $("#zygzdlqjTwoDlfInput").val();
        landCrackObj.胀缩土中有无新断裂 = $("#zstzywxdlDlf input[type=radio]:checked").val();
        landCrackObj.胀缩土中新断裂倾向 = $("#zstxdlczqxDlfInput").val();
        landCrackObj.胀缩土中新断裂倾角 = $("#zstxdlczqjDlfInput").val();
        landCrackObj.洞室埋深 = $("#dsmsDlfInput").val();
        landCrackObj.洞室规模 = $("#dsgmDlfInput").val();
        landCrackObj.洞室长 = $("#dscDlfInput").val();
        landCrackObj.洞室宽 = $("#dskDlfInput").val();
        landCrackObj.洞室高 = $("#dsgDlfInput").val();
        landCrackObj.洞室与裂缝区位置关系 = $("#dsylfqgxDlfInput").val();
        landCrackObj.洞室开挖时间 = $("#kwsjDlfInput").val();
        landCrackObj.洞室开挖方式 = $("#kwfsDlfInput").val();
        landCrackObj.洞室开挖强度 = $("#kwqdDlfInput").val();
        landCrackObj.抽排地下水类型 = "";
        landCrackObj.抽排井埋深 = $("#cpjmsDlfInput").val();
        landCrackObj.抽排水位水量 = $("#cpswslDlfInput").val();
        landCrackObj.抽排日出水量 = $("#cprcslDlfInput").val();
        landCrackObj.抽排水开始时间 = $("#cpsstarttimeDlfInput").val();
        landCrackObj.抽排水停止时间 = $("#cpsendtimeDlfInput").val();
        landCrackObj.抽排水状态 = $("#cpsstatusDlf input[type=radio]:checked").val();
        landCrackObj.地震烈度 = $("#dzldDlfInput").val();
        landCrackObj.地震发生时间 = $("#dzfssjDlfInput").val();
        landCrackObj.活动断层位置 = $("#hdcwzDlfInput").val();
        landCrackObj.活动断层倾向 = $("#hdcczqxDlfInput").val();
        landCrackObj.活动断层倾角 = $("#hdcczqjDlfInput").val();
        landCrackObj.活动断层长度 = $("#hdccdDlfInput").val();
        landCrackObj.活动断层性质 = $("#hdcxzDlfInput").val();
        landCrackObj.活动断层活动时间 = $("#hdchdsjDlfInput").val();
        landCrackObj.活动断层活动速率 = $("#hdchdslDlfInput").val();
        landCrackObj.活动断层断距 = $("#hdcdjDlfInput").val();
        landCrackObj.水理作用水源 = "";
        landCrackObj.水理作用时间 = $("#slzysjDlfInput").val();
        landCrackObj.水理作用水质 = $("#slzyszDlfInput").val();
        landCrackObj.水理作用类型 = "";
        landCrackObj.水理作用开挖时间 = $("#slzykwsjDlfInput").val();
        landCrackObj.水理作用开挖方式 = $("#slzykwfsDlfInput").val();
        landCrackObj.水理作用开挖深度 = $("#slzykwsdDlfInput").val();
        landCrackObj.毁坏房屋 = $("#damageHouseDlfInput").val();
        landCrackObj.阻断交通 = $("#jamTrafficDlfInput").val();
        landCrackObj.阻断交通时间 = $("#jamTrafficTimeDlfInput").val();
        landCrackObj.死亡人口 = $("#dieNumDlfInput").val();
        landCrackObj.直接损失 = $("#directLossDlfInput").val();
        landCrackObj.灾情等级 = $("#damageClassDlf input[type=radio]:checked").val();
        landCrackObj.隐患点 = $("#dangerPointDlf input[type=radio]:checked").val();
        landCrackObj.灾害体积 = $("#zhtjDlfInput").val();
        landCrackObj.威胁房屋 = $("#qzwhhhfwDlfInput").val();
        landCrackObj.交通隐患 = $("#qzwhjtyhDlfInput").val();
        landCrackObj.威胁人口 = $("#qzwhwxrkDlfInput").val();
        landCrackObj.威胁财产 = $("#qzwhwxccDlfInput").val();
        landCrackObj.险情等级 = $("#dangerClassDlf input[type=radio]:checked").val();
        landCrackObj.发展预测 = "";
        landCrackObj.防灾预案 = $("#pdPlanDlf input[type=radio]:checked").val();
        landCrackObj.多媒体 = $("#mediaDlf input[type=radio]:checked").val();
        landCrackObj.防治措施及效果 = $("#preMeasureAndEffectDlfInput").val();
        landCrackObj.防治建议 = $("#preAdviceDlfInput").val();
        landCrackObj.调查负责人 = $("#investiPersonDlfInput").val();
        landCrackObj.填表人 = $("#fillerDlfInput").val();
        landCrackObj.审核人 = $("#auditDlfInput").val();
        landCrackObj.调查单位 = $("#investiUnitDlfInput").val();
        landCrackObj.填表日期 = $("#dateDlfInput").val();
        landCrackObj.抽排水位置关系 = $("#cpsLocationgxDlfInput").val();
        landCrackObj.平面示意图 = null;
        landCrackObj.剖面示意图 = null;
        landCrackObj.平面示意图路径 = null;
        landCrackObj.剖面示意图路径 = null;
        landCrackObj.省名 = $("#provinceDlf").text();
        landCrackObj.县名 = $("#countyDlfInput").val();
        landCrackObj.街道 = $("#streetDlfInput").val();

        //群缝排列形式
        landCrackObj.群缝排列形式 = checkBoxConInfo("#qfplxsDlf");
        //成因类型
        landCrackObj.成因类型 = checkBoxConInfo("#causeTypeDlf");
        //裂缝区地貌特征
        landCrackObj.裂缝区地貌特征 = checkBoxConInfo("#lfqdmtzDlf");
        //裂缝与地貌走向关系
        landCrackObj.裂缝与地貌走向关系 = checkBoxConInfo("#lfydmzxgxDlf");
        //抽排地下水类型
        landCrackObj.抽排地下水类型 = checkBoxConInfo("#cpdxslxDlf");
        //水理作用水源
        landCrackObj.水理作用水源 = checkBoxConInfo("#slzysyDlf");
        //水理作用类型
        landCrackObj.水理作用类型 = checkBoxConInfo("#slzylxDlf");
        //发展预测
        landCrackObj.发展预测 = checkBoxConInfo("#lfDevelopForecastDlf");

        
        
        //判断经纬度是否输入正确
        var regExp3 = new R2.Business.IsLegal({ "value": landCrackObj.经度 });
        if (regExp3.isLon() == false) {
            tempObj.booll = false;
            alert("经度的格式不正确，请重新输入");
            return false;
        }
        //判断经纬度是否输入正确
        var regExp4 = new R2.Business.IsLegal({ "value": landCrackObj.纬度 });
        if (regExp4.isLat() == false) {
            tempObj.booll = false;
            alert("纬度的格式不正确，请重新输入");
            return false;
        }

        return landCrackObj;
    },

    landCrackValue2: function () {
        var jingduDu = $("#lonDUDlfInput").val();
        var jingduFen = $("#lonFenDlfInput").val();
        var jingduMiao = $("#lonMiaoDlfInput").val();
        var weiduDu = $("#latDUDlfInput").val();
        var weiduFen = $("#latFenDlfInput").val();
        var weiduMiao = $("#latMiaoDlfInput").val();
        var dlfzhInfoObj = {
            统一编号: $("#uNubFastenDlfInput").text() + $("#uNubAgileDlfInput").val(),
            名称: $("#nameDlfInput").val(),
            地理位置: $("#locationDlfInput").val(),
            经度: jingduDu + "-" + jingduFen + "-" + jingduMiao,
            纬度: weiduDu + "-" + weiduFen + "-" + weiduMiao,
            死亡人数: $("#dieNumDlfInput").val(),
            威胁人口: $("#qzwhwxrkDlfInput").val(),
            直接经济损失: $("#directLossDlfInput").val(),
            威胁财产: $("#qzwhwxccDlfInput").val(),
            目前稳定状态: "",
            灾害规模等级: $("#scaleClassDlf input[type=radio]:checked").val(),
            灾情等级: $("#damageClassDlf input[type=radio]:checked").val(),
            险情等级: $("#dangerClassDlf input[type=radio]:checked").val(),
            X坐标: $("#xCoordinateDlfInput").val(),
            Y坐标: $("#yCoordinateDlfInput").val(),
            灾害体积: $("#zhtjDlfInput").val(),
            灾害类型: "06",
            省名: $("#provinceDlf").text(),
            县名: $("#countyDlfInput").val(),
            街道: $("#streetDlfInput").val(),
            国际代码: $("#countyDlfInput").val(),
            真实状态: 0
        };
        return dlfzhInfoObj;
    },

    //图片
     disaImage_1: function() {
    var list = [];
    var Num = $("#planDlf  .Imgscan").length;
    for (var i = 0; i < Num; i++) {  //平面图
        var jjl = $("#planDlf  .Imgscan").eq(i).find(".Imageexist").html();
        if ($("#planDlf  .Imgscan").eq(i).find(".Imageexist").html() != "1")
        {
            var disaimg = {};
            var imgpath = $("#planDlf  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg.Name = imgArr[imgArr.length - 1];
            disaimg.DisaId = $("#uNubFastenDlfInput").text() + $("#uNubAgileDlfInput").val();
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
    var Num2 = $("#profileDlf  .Imgscan").length;
    for (var i = 0; i < Num2; i++) {    //剖面图
        if ($("#profileDlf  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg2 = {};
            var imgpath = $("#profileDlf  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg2.Name = imgArr[imgArr.length - 1];
            disaimg2.DisaId = $("#uNubFastenDlfInput").text() + $("#uNubAgileDlfInput").val();
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

    var Num3 = $("#dlf_BaseImg  .Imgscan").length;
    for (var i = 0; i < Num3; i++) {    //基础图
        if ($("#dlf_BaseImg  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg3 = {};
            var imgpath = $("#dlf_BaseImg  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg3.Name = imgArr[imgArr.length - 1];
            disaimg3.DisaId = $("#uNubFastenDlfInput").text() + $("#uNubAgileDlfInput").val();
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
    var Num4 = $("#dlf_Videos  .Imgscan").length;
    for (var i = 0; i < Num4; i++) {    //基础图
        if ($("#dlf_Videos  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg4 = {};
            var imgpath = $("#dlf_Videos  .Imgscan").eq(i).find(".video_src").eq(0).html();
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg4.Name = imgArr[imgArr.length - 1];
            disaimg4.DisaId = $("#uNubFastenDlfInput").text() + $("#uNubAgileDlfInput").val();
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
         

    this.disaImg = list;
}
});

