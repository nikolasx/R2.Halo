$(function () {
    tableSwitchReg();
    initializationDlf();
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
function initializationDlf() {

    $("input[type=text]").remove();
    $("#BIT_right div").css({ "text-align": "center", "overflow": "hidden" });
    var tybh = $("#dlfTybh").text();
    $("input").attr("disabled", "disabled");
    $.post(baseUrl + "QueryLandCrack/GetLandCrackById", { "id": tybh }, function(data) {
        if (data == "fail") {
            return false;
        }
        var obj = eval("(" + data + ")");

        $("#uNubDlf").text(obj.统一编号);
        var num = obj.统一编号.substring(0, 6);
        for (var i = 0; i < $("#countyDlfInput").children("option").length; i++) {
            if (num == $("#countyDlfInput").children("option").eq(i).val()) {
                $("#countyDlfInput").children("option").eq(i).attr("selected", "selected");
            }
        }
        $("#nameDlf").text(obj.名称);
        $("#fNubDlf").text(obj.野外编号);
        $("#rNubDlf").text(obj.室内编号);
        $("#xCoordinateDlf").text(obj.X坐标);
        $("#yCoordinateDlf").text(obj.Y坐标);
        $("#biaogaoDlf").text(obj.标高);
        $("#locationDlf").text(obj.地理位置);
        $("#longitudeDlf").text(obj.经度);
        $("#latitudeDlf").text(obj.纬度);
        $("#dfbslffhOne").text(obj.单缝缝号1);
        //    单缝形态1: $("#dfbslfxOne input[type=radio]:checked").val(),
        if (obj.单缝形态1 != null) {
            $("#dfbslfxOne input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝形态1)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslfysfxOne").text(obj.单缝延伸方向1);
        $("#dfbslfqxOne").text(obj.单缝倾向1);
        $("#dfbslfqjOne").text(obj.单缝倾角1);
        $("#dfbslfcdOne").text(obj.单缝长度1);
        $("#dfbslfkdOne").text(obj.单缝宽度1);
        $("#dfbslfsdOne").text(obj.单缝深度1);
        //    单缝规模等级1: $("#dfScaleClassOne input[type=radio]:checked").val(),
        if (obj.单缝规模等级1 != null) {
            $("#dfScaleClassOne input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝规模等级1)
                    $(this).attr("checked", true);
            });
        }
        //    单缝性质1: $("#dfCharacterOne input[type=radio]:checked").val(),
        if (obj.单缝性质1 != null) {
            $("#dfCharacterOne input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝性质1)
                    $(this).attr("checked", true);
            });
        }
        $("#dfDriftDirectionOne").text(obj.单缝位移方向1);
        $("#dfDriftDistanceOne").text(obj.单缝位移距离1);
        $("#dfFillMatterOne").text(obj.单缝填充物1);
        $("#dfOccurTimeOne").text(obj.单缝出现时间1);
        //        单缝活动性1: $("#dfActivityOne input[type=radio]:checked").val(),
        if (obj.单缝活动性1 != null) {
            $("#dfActivityOne input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝活动性1)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslffhTwo").text(obj.单缝缝号2);
        //        单缝形态2: $("#dfbslfxtTwo input[type=radio]:checked").val(),
        if (obj.单缝形态2 != null) {
            $("#dfbslfxtTwo input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝形态2)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslfysfxTwo").text(obj.单缝延伸方向2);
        $("#dfbslfqxTwo").text(obj.单缝倾向2);
        $("#dfbslfqjTwo").text(obj.单缝倾角2);
        $("#dfbslfcdTwo").text(obj.单缝长度2);
        $("#dfbslfkdTwo").text(obj.单缝宽度2);
        $("#dfbslfsdTwo").text(obj.单缝深度2);
        //        单缝规模等级2: $("#dfScaleClassTwo input[type=radio]:checked").val();
        if (obj.单缝规模等级2 != null) {
            $("#dfScaleClassTwo input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝规模等级2)
                    $(this).attr("checked", true);
            });
        }
        //        单缝性质2: $("#dfCharacterTwo input[type=radio]:checked").val();
        if (obj.单缝性质2 != null) {
            $("#dfCharacterTwo input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝性质2)
                    $(this).attr("checked", true);
            });
        }
        $("#dfDriftDirectionTwo").text(obj.单缝位移方向2);
        $("#dfDriftDistanceTwo").text(obj.单缝位移距离2);
        $("#dfFillMatterTwo").text(obj.单缝填充物2);
        $("#dfOccurTimeTwo").text(obj.单缝出现时间2);
        //        单缝活动性2: $("#dfActivityTwo input[type=radio]:checked").val();
        if (obj.单缝活动性2 != null) {
            $("#dfActivityTwo input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝活动性2)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslffhThree").text(obj.单缝缝号3);
        //        单缝形态3: $("#dfbslfxtThree input[type=radio]:checked").val();
        if (obj.单缝形态3 != null) {
            $("#dfbslfxtThree input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝形态3)
                    $(this).attr("checked", true);
            });
        }
        $("#dfbslfysfxThree").text(obj.单缝延伸方向3);
        $("#dfbslfqxThree").text(obj.单缝倾向3);
        $("#dfbslfqjThree").text(obj.单缝倾角3);
        $("#dfbslfcdThree").text(obj.单缝长度3);
        $("#dfbslfkdThree").text(obj.单缝宽度3);
        $("#dfbslfsdThree").text(obj.单缝深度3);
        //        单缝规模等级3: $("#dfScaleClassThree input[type=radio]:checked").val();
        if (obj.单缝规模等级3 != null) {
            $("#dfScaleClassThree input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝规模等级3)
                    $(this).attr("checked", true);
            });
        }
        //        单缝性质3: $("#dfCharacterThree input[type=radio]:checked").val();
        if (obj.单缝性质3 != null) {
            $("#dfCharacterThree input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝性质3)
                    $(this).attr("checked", true);
            });
        }
        $("#dfDriftDirectionThree").text(obj.单缝位移方向3);
        $("#dfDriftDistanceThree").text(obj.单缝位移距离3);
        $("#dfFillMatterThree").text(obj.单缝填充物3);
        $("#dfOccurTimeThree").text(obj.单缝出现时间3);
        //        单缝活动性3: $("#dfActivityThree input[type=radio]:checked").val();
        if (obj.单缝活动性3 != null) {
            $("#dfActivityThree input[type=radio]").each(function() {
                if ($(this).val() == obj.单缝活动性3)
                    $(this).attr("checked", true);
            });
        }
        $("#fengshuDlf").text(obj.群缝缝数);
        $("#qffbmjDlf").text(obj.群缝分布面积);
        $("#qffyjjDlf").text(obj.群缝发育间距);
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
        $("#qfzdcdDlf").text(obj.裂缝长度max);
        $("#qfzxcdDlf").text(obj.裂缝长度min);
        $("#qfzdkdDlf").text(obj.裂缝宽度max);
        $("#qfzxkdDlf").text(obj.裂缝宽度min);
        $("#qfzdsdDlf").text(obj.裂缝深度max);
        $("#qfzxsdDlf").text(obj.裂缝深度min);
        $("#qfsfsjDlf").text(obj.始发时间);
        $("#qfsfkssjDlf").text(obj.盛发开始时间);
        $("#qfsfjssjDlf").text(obj.盛发截止时间);
        $("#qftzsjDlf").text(obj.停止时间);
        //        目前发展情况: $("#stillDevelopDlf input[type=radio]:checked").val();
        if (obj.目前发展情况 != null) {
            $("#stillDevelopDlf input[type=radio]").each(function() {
                if ($(this).val() == obj.目前发展情况)
                    $(this).attr("checked", true);
            });
        }
        //        规模等级: $("#scaleClassDlf input[type=radio]:checked").val();
        if (obj.规模等级 != null) {
            $("#scaleClassDlf input[type=radio]").each(function() {
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
        $("#lfjytcsdDlf").text(obj.裂缝巨岩土层时代);
        $("#lfjytcyxDlf").text(obj.裂缝巨岩土层岩性);
        $("#sltcsjDlf").text(obj.受裂土层时间);
        $("#sltctxDlf").text(obj.受裂土层土性);
        $("#sltxfcsjDlf").text(obj.受裂土下伏层时间);
        $("#sltxfcyxDlf").text(obj.受裂土下伏层岩性);
        $("#slytcsdDlf").text(obj.受裂岩土层时代);
        $("#slytcyxDlf").text(obj.受裂岩土层岩性);
        $("#zsttzDlf").text(obj.胀缩土特征);
        //       胀缩土膨胀性: $("#zstpzxDlf input[type=radio]:checked").val();
        if (obj.胀缩土膨胀性 != null) {
            $("#zstpzxDlf input[type=radio]").each(function() {
                if ($(this).val() == obj.胀缩土膨胀性)
                    $(this).attr("checked", true);
            });
        }
        $("#zsthslDlf").text(obj.胀缩土含水量);
        $("#lfqgzdlzxOneDlf").text(obj.裂缝区构造断裂走向1);
        $("#lfqgzdlqxOneDlf").text(obj.裂缝区构造断裂倾向1);
        $("#lfqgzdlqjOneDlf").text(obj.裂缝区构造断裂倾角1);
        $("#lfqgzdlzxTwoDlf").text(obj.裂缝区构造断裂走向2);
        $("#lfqgzdlqxTwoDlf").text(obj.裂缝区构造断裂倾向2);
        $("#lfqgzdlqjTwoDlf").text(obj.裂缝区构造断裂倾角2);
        $("#yczydlczqxDlf").text(obj.岩层中断裂倾向);
        $("#yczydlczqjDlf").text(obj.岩层中断裂倾角);
        //       土层中有无新断裂: $("#tczywxdlDlf input[type=radio]:checked").val();
        //        if (obj.土层中有无新断裂 != null) {
        //            var tcywxdlId = ["havetcxdlDlfUP", "notcxdlDlfUP"];
        //            judgeRadio(tcywxdlId, obj.土层中有无新断裂);
        //        }
        $("#tczywxdlDlf input[type=radio]").each(function() {
            if ($(this).val() == "true" && obj.土层中有无新断裂) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.土层中有无新断裂) {
                $(this).attr("checked", true);
            }
        });

        $("#tcxdlczqxDlf").text(obj.土层中新断裂倾向);
        $("#tcxdlczqjDlf").text(obj.土层中新断裂倾角);
        $("#zygzdlzxOneDlf").text(obj.主要构造断裂走向1);
        $("#zygzdlqxOneDlf").text(obj.主要构造断裂倾向1);
        $("#zygzdlqjOneDlf").text(obj.主要构造断裂倾角1);
        $("#lzygzdlzxTwoDlf").text(obj.主要构造断裂走向2);
        $("#zygzdlqxTwoDlf").text(obj.主要构造断裂倾向2);
        $("#zygzdlqjTwoDlf").text(obj.主要构造断裂倾角2);
        //        胀缩土中有无新断裂: $("#zstzywxdlDlf input[type=radio]:checked").val();
        if (obj.胀缩土中有无新断裂 != null) {
            var zstywxdlId = ["havezstxdlDlf", "nozstxdlDlf"];
            judgeRadio(zstywxdlId, obj.胀缩土中有无新断裂);
        }
        $("#zstxdlczqxDlf").text(obj.胀缩土中新断裂倾向);
        $("#zstxdlczqjDlf").text(obj.胀缩土中新断裂倾角);
        $("#dsmsDlf").text(obj.洞室埋深);
        $("#dsgmDlf").text(obj.洞室规模);
        $("#dscDlf").text(obj.洞室长);
        $("#dskDlf").text(obj.洞室宽);
        $("#dsgDlf").text(obj.洞室高);
        $("#dsylfqgxDlf").text(obj.洞室与裂缝区位置关系);
        $("#kwsjDlf").text(obj.洞室开挖时间);
        $("#kwfsDlf").text(obj.洞室开挖方式);
        $("#kwqdDlf").text(obj.洞室开挖强度);
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
        $("#cpjmsDlf").text(obj.抽排井埋深);
        $("#cpswslDlf").text(obj.抽排水位水量);
        $("#cprcslDlf").text(obj.抽排日出水量);
        $("#cpsstarttimeDlf").text(obj.抽排水开始时间);
        $("#cpsendtimeDlf").text(obj.抽排水停止时间);
        //        抽排水状态: $("#cpsstatusDlf input[type=radio]:checked").val();
        if (obj.抽排水状态 != null) {
            $("#cpsstatusDlf input[type=radio]").each(function() {
                if ($(this).val() == obj.抽排水状态.toString()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#dzldDlf").text(obj.地震烈度);
        $("#dzfssjDlf").text(obj.地震发生时间);
        $("#hdcwzDlf").text(obj.活动断层位置);
        $("#hdcczqxDlf").text(obj.活动断层倾向);
        $("#hdcczqjDlf").text(obj.活动断层倾角);
        $("#hdccdDlf").text(obj.活动断层长度);
        $("#hdcxzDlf").text(obj.活动断层性质);
        $("#hdchdsjDlf").text(obj.活动断层活动时间);
        $("#hdchdslDlf").text(obj.活动断层活动速率);
        $("#hdcdjDlf").text(obj.活动断层断距);
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
        $("#slzysjDlf").text(obj.水理作用时间);
        $("#slzyszDlf").text(obj.水理作用水质);
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
        $("#slzykwsjDlf").text(obj.水理作用开挖时间);
        $("#slzykwfsDlf").text(obj.水理作用开挖方式);
        $("#slzykwsdDlf").text(obj.水理作用开挖深度);
        $("#damageHouseDlf").text(obj.毁坏房屋);
        $("#jamTrafficDlf").text(obj.阻断交通);
        $("#jamTrafficTimeDlf").text(obj.阻断交通时间);
        $("#dieNumDlf").text(obj.死亡人口);
        $("#directLossDlf").text(obj.直接损失);
        //        $("#damageClassDlfInputUP").val(obj.灾情等级);
        //        隐患点: $("#dangerPointDlf input[type=radio]:checked").val();
        if (obj.隐患点 != null) {
            var yhdId = ["havedpointDlf", "nodpointDlf"];
            judgeRadio(yhdId, obj.隐患点);
        }
        $("#zhtjDlf").text(obj.灾害体积);
        $("#qzwhhhfwDlf").text(obj.威胁房屋);
        $("#qzwhjtyhDlf").text(obj.交通隐患);
        $("#qzwhwxrkDlf").text(obj.威胁人口);
        $("#qzwhwxccDlf").text(obj.威胁财产);
        if (obj.灾情等级 != null) {
            $("#damageClassDlf input[type=radio]").each(function() {
                if (obj.灾情等级.indexOf($(this).val()) >= 0)
                    $(this).attr("checked", true);
            });
        }
        if (obj.险情等级 != null) {
            $("#dangerClassDlf input[type=radio]").each(function() {
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
        $("#preMeasureAndEffectDlf").text(obj.防治措施及效果);
        $("#preAdviceDlf").text(obj.防治建议);
        $("#investiPersonDlf").text(obj.调查负责人);
        $("#fillerDlf").text(obj.填表人);
        $("#auditDlf").text(obj.审核人);
        $("#investiUnitDlf").text(obj.调查单位);
        $("#dateDlf").text(obj.填表日期);
        $("#cpsLocationgxDlf").text(obj.抽排水位置关系);
        //          平面示意图:$("#").text();
        //          剖面示意图:$("#").text();
        $("#provinceDlf").text(obj.省名);
        //        $("#countyDlfInputUP").text(obj.县名);
        //        街道: $("#streetDlfInput option:selected").text()
        $("#streetDlf .country").text(obj.街道);

        $("input").each(function() {
            if ($(this).attr("checked") == "checked") {

            } else {
                $(this).next("label").css("color", "#999");
            }
        })


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
        UpDataPicFun("planDlf", planImg);
        UpDataPicFun("profileDlf", profileImg);
        UpDataPicFun("dlf_BaseImg", baseImg);
        UpBaseVideoFun("dlf_Videos", "视频", obj.统一编号, false, videoArrs);

    });
}