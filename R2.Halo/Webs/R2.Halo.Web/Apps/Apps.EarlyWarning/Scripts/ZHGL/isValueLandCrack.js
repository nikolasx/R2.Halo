//-----------------地裂缝js  zzq-------------------//

/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/OpenLayers.js" />

/**
*获取checkbox被选中的内容
*/

$(function () {
    $("#countyDlfInput").change(function () {
        var tid_f = $("#countyDlfInput").val() + "06";
        $("#uNubFastenDlfInput").text(tid_f);
        $("#planDlf  .tongyibianhao1").text(tid_f);
        $("#profileDlf  .tongyibianhao1").text(tid_f);
        $("#dlf_BaseImg  .tongyibianhao1").text(tid_f);
        $("#dlf_Videos  .tongyibianhao1").text(tid_f);
        
    })
})
checkBoxConInfo = function (id) {
    var conStr = "";
    conStr = $(id + " input[type=checkbox]:checked").map(function () {
        return $(this).val();
    }).get().join(",");
    return conStr;
}

R2.Business.LandCrackData = OpenLayers.Class({
    booll: true,
    planImg: null,
    initialize: function () {
        var landCrackObj = this.landCrackValue();
        var dlfzhInfoObj = this.landCrackValue2();
        this.disaImage_1();
        if (this.booll == true) {
            var object = { 'userInfo': "0", 'dlfZongHeInfor': JSON.stringify(dlfzhInfoObj), 'dlfBaseInfor': JSON.stringify(landCrackObj), "planImgs": JSON.stringify(this.planImg) };
            $.post(baseUrl + "LandCrackImport/LandCrackImport", object, function (data) {
                if (data == "success") {
                    alert("数据插入成功！");
                } else if (data == "2" || data == "3") {
                    alert("统一编号已存在，请重新输入！");
                }else {
                    alert("数据插入失败，可能导致的原因如下为:    " + data);
                }
            });
        }
    },
    landCrackValue: function () {
        var tempObj=this;
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
        //统一编号
        var DLFNumVal = new R2.Business.IsLegal({ "value": $("#uNubAgileDlfInput").val(), "n": 4 });
        if (!DLFNumVal.has_n_Number()) {
            alert("请输入正确的统一编号");
            tempObj.booll = false;
            return;
        };

        landCrackObj.统一编号 = $("#uNubFastenDlfInput").text() + $("#uNubAgileDlfInput").val();
        landCrackObj.名称= $("#nameDlfInput").val();
        landCrackObj.野外编号 = $("#fNubDlfInput2").val();
        landCrackObj.室内编号= $("#rNubDlfInput").val();
        landCrackObj.X坐标= $("#xCoordinateDlfInput").val();
        landCrackObj.Y坐标= $("#yCoordinateDlfInput").val();
        landCrackObj.标高= $("#biaogaoDlfInput").val();
        landCrackObj.经度 = jingduDu + "-" + jingduFen + "-" + jingduMiao;
        landCrackObj.纬度 = weiduDu + "-" + weiduFen + "-" + weiduMiao;
        landCrackObj.地理位置= $("#locationDlfInput").val(); //发生地点
        landCrackObj.单缝缝号1= $("#dfbslffhOneInput").val();
        landCrackObj.单缝形态1= $("#dfbslfxOne input[type=radio]:checked").val();
        landCrackObj.单缝延伸方向1= $("#dfbslfysfxOneInput").val();
        landCrackObj.单缝倾向1= $("#dfbslfqxOneInput").val();
        landCrackObj.单缝倾角1= $("#dfbslfqjOneInput").val();
        landCrackObj.单缝长度1= $("#dfbslfcdOneInput").val();
        landCrackObj.单缝宽度1= $("#dfbslfkdOneInput").val();
        landCrackObj.单缝深度1= $("#dfbslfsdOneInput").val();
        landCrackObj.单缝规模等级1 = $("#dfScaleClassOne input[type=radio]:checked").val();
        landCrackObj.单缝性质1 = $("#dfCharacterOne input[type=radio]:checked").val();
        landCrackObj.单缝位移方向1= $("#dfDriftDirectionOneInput").val();
        landCrackObj.单缝位移距离1= $("#dfDriftDistanceOneInput").val();
        landCrackObj.单缝填充物1= $("#dfFillMatterOneInput").val();
        landCrackObj.单缝出现时间1= $("#dfOccurTimeOneInput").val();
        landCrackObj.单缝活动性1 = $("#dfActivityOne input[type=radio]:checked").val();
        landCrackObj.单缝缝号2= $("#dfbslffhTwoInput").val();
        landCrackObj.单缝形态2 = $("#dfbslfxtTwo input[type=radio]:checked").val();
        landCrackObj.单缝延伸方向2= $("#dfbslfysfxTwoInput").val();
        landCrackObj.单缝倾向2= $("#dfbslfqxTwoInput").val();
        landCrackObj.单缝倾角2= $("#dfbslfqjTwoInput").val();
        landCrackObj.单缝长度2= $("#dfbslfcdTwoInput").val();
        landCrackObj.单缝宽度2= $("#dfbslfkdTwoInput").val();
        landCrackObj.单缝深度2= $("#dfbslfsdTwoInput").val();
        landCrackObj.单缝规模等级2 = $("#dfScaleClassTwo input[type=radio]:checked").val();
        landCrackObj.单缝性质2 = $("#dfCharacterTwo input[type=radio]:checked").val();
        landCrackObj.单缝位移方向2= $("#dfDriftDirectionTwoInput").val();
        landCrackObj.单缝位移距离2= $("#dfDriftDistanceTwoInput").val();
        landCrackObj.单缝填充物2= $("#dfFillMatterTwoInput").val();
        landCrackObj.单缝出现时间2= $("#dfOccurTimeTwoInput").val();
        landCrackObj.单缝活动性2 = $("#dfActivityTwo input[type=radio]:checked").val();
        landCrackObj.单缝缝号3= $("#dfbslffhThreeInput").val();
        landCrackObj.单缝形态3 = $("#dfbslfxtThree input[type=radio]:checked").val();
        landCrackObj.单缝延伸方向3= $("#dfbslfysfxThreeInput").val();
        landCrackObj.单缝倾向3= $("#dfbslfqxThreeInput").val();
        landCrackObj.单缝倾角3= $("#dfbslfqjThreeInput").val();
        landCrackObj.单缝长度3= $("#dfbslfcdThreeInput").val();
        landCrackObj.单缝宽度3= $("#dfbslfkdThreeInput").val();
        landCrackObj.单缝深度3= $("#dfbslfsdThreeInput").val();
        landCrackObj.单缝规模等级3 = $("#dfScaleClassThree input[type=radio]:checked").val();
        landCrackObj.单缝性质3 = $("#dfCharacterThree input[type=radio]:checked").val();
        landCrackObj.单缝位移方向3= $("#dfDriftDirectionThreeInput").val();
        landCrackObj.单缝位移距离3= $("#dfDriftDistanceThreeInput").val();
        landCrackObj.单缝填充物3= $("#dfFillMatterThreeInput").val();
        landCrackObj.单缝出现时间3= $("#dfOccurTimeThreeInput").val();
        landCrackObj.单缝活动性3 = $("#dfActivityThree input[type=radio]:checked").val();
        landCrackObj.群缝缝数= $("#fengshuDlfInput").val();
        landCrackObj.群缝分布面积= $("#qffbmjDlfInput").val();
        landCrackObj.群缝发育间距= $("#qffyjjDlfInput").val();
        landCrackObj.群缝排列形式= "";
        landCrackObj.裂缝长度max= $("#qfzdcdDlfInput").val();
        landCrackObj.裂缝长度min= $("#qfzxcdDlfInput").val();
        landCrackObj.裂缝宽度max= $("#qfzdkdDlfInput").val();
        landCrackObj.裂缝宽度min= $("#qfzxkdDlfInput").val();
        landCrackObj.裂缝深度max= $("#qfzdsdDlfInput").val();
        landCrackObj.裂缝深度min= $("#qfzxsdDlfInput").val();
        landCrackObj.始发时间= $("#qfsfsjDlfInput").val();
        landCrackObj.盛发开始时间= $("#qfsfkssjDlfInput").val();
        landCrackObj.盛发截止时间= $("#qfsfjssjDlfInput").val();
        landCrackObj.停止时间= $("#qftzsjDlfInput").val();
        landCrackObj.目前发展情况 = $("#stillDevelopDlf input[type=radio]:checked").val();
        landCrackObj.规模等级 = $("#scaleClassDlf input[type=radio]:checked").val();
        landCrackObj.成因类型= "";
        landCrackObj.裂缝区地貌特征= "";
        landCrackObj.裂缝与地貌走向关系= "";
        landCrackObj.裂缝巨岩土层时代= $("#lfjytcsdDlfInput").val();
        landCrackObj.裂缝巨岩土层岩性= $("#lfjytcyxDlfInput").val();
        landCrackObj.受裂土层时间= $("#sltcsjDlfInput").val();
        landCrackObj.受裂土层土性= $("#sltctxDlfInput").val();
        landCrackObj.受裂土下伏层时间= $("#sltxfcsjDlfInput").val();
        landCrackObj.受裂土下伏层岩性= $("#sltxfcyxDlfInput").val();
        landCrackObj.受裂岩土层时代= $("#slytcsdDlfInput").val();
        landCrackObj.受裂岩土层岩性= $("#slytcyxDlfInput").val();
        landCrackObj.胀缩土特征= $("#zsttzDlfInput").val();
        landCrackObj.胀缩土膨胀性 = $("#zstpzxDlf input[type=radio]:checked").val();
        landCrackObj.胀缩土含水量= $("#zsthslDlfInput").val();
        landCrackObj.裂缝区构造断裂走向1= $("#lfqgzdlzxOneDlfInput").val();
        landCrackObj.裂缝区构造断裂倾向1= $("#lfqgzdlqxOneDlfInput").val();
        landCrackObj.裂缝区构造断裂倾角1= $("#lfqgzdlqjOneDlfInput").val();
        landCrackObj.裂缝区构造断裂走向2= $("#lfqgzdlzxTwoDlfInput").val();
        landCrackObj.裂缝区构造断裂倾向2= $("#lfqgzdlqxTwoDlfInput").val();
        landCrackObj.裂缝区构造断裂倾角2= $("#lfqgzdlqjTwoDlfInput").val();
        landCrackObj.岩层中断裂倾向= $("#yczydlczqxDlfInput").val();
        landCrackObj.岩层中断裂倾角= $("#yczydlczqjDlfInput").val();
        landCrackObj.土层中有无新断裂 = $("#tczywxdlDlf input[type=radio]:checked").val();
        landCrackObj.土层中新断裂倾向= $("#tcxdlczqxDlfInput").val();
        landCrackObj.土层中新断裂倾角= $("#tcxdlczqjDlfInput").val();
        landCrackObj.主要构造断裂走向1= $("#zygzdlzxOneDlfInput").val();
        landCrackObj.主要构造断裂倾向1= $("#zygzdlqxOneDlfInput").val();
        landCrackObj.主要构造断裂倾角1= $("#zygzdlqjOneDlfInput").val();
        landCrackObj.主要构造断裂走向2= $("#lzygzdlzxTwoDlfInput").val();
        landCrackObj.主要构造断裂倾向2= $("#zygzdlqxTwoDlfInput").val();
        landCrackObj.主要构造断裂倾角2= $("#zygzdlqjTwoDlfInput").val();
        landCrackObj.胀缩土中有无新断裂 = $("#zstzywxdlDlf input[type=radio]:checked").val();
        landCrackObj.胀缩土中新断裂倾向= $("#zstxdlczqxDlfInput").val();
        landCrackObj.胀缩土中新断裂倾角= $("#zstxdlczqjDlfInput").val();
        landCrackObj.洞室埋深= $("#dsmsDlfInput").val();
        landCrackObj.洞室规模= $("#dsgmDlfInput").val();
        landCrackObj.洞室长= $("#dscDlfInput").val();
        landCrackObj.洞室宽= $("#dskDlfInput").val();
        landCrackObj.洞室高= $("#dsgDlfInput").val();
        landCrackObj.洞室与裂缝区位置关系= $("#dsylfqgxDlfInput").val();
        landCrackObj.洞室开挖时间= $("#kwsjDlfInput").val();
        landCrackObj.洞室开挖方式= $("#kwfsDlfInput").val();
        landCrackObj.洞室开挖强度= $("#kwqdDlfInput").val();
        landCrackObj.抽排地下水类型= "";
        landCrackObj.抽排井埋深= $("#cpjmsDlfInput").val();
        landCrackObj.抽排水位水量= $("#cpswslDlfInput").val();
        landCrackObj.抽排日出水量= $("#cprcslDlfInput").val();
        landCrackObj.抽排水开始时间= $("#cpsstarttimeDlfInput").val();
        landCrackObj.抽排水停止时间= $("#cpsendtimeDlfInput").val();
        landCrackObj.抽排水状态= $("#cpsstatusDlf input[type=radio]:checked").val();
        landCrackObj.地震烈度= $("#dzldDlfInput").val();
        landCrackObj.地震发生时间= $("#dzfssjDlfInput").val();
        landCrackObj.活动断层位置= $("#hdcwzDlfInput").val();
        landCrackObj.活动断层倾向= $("#hdcczqxDlfInput").val();
        landCrackObj.活动断层倾角= $("#hdcczqjDlfInput").val();
        landCrackObj.活动断层长度= $("#hdccdDlfInput").val();
        landCrackObj.活动断层性质= $("#hdcxzDlfInput").val();
        landCrackObj.活动断层活动时间= $("#hdchdsjDlfInput").val();
        landCrackObj.活动断层活动速率= $("#hdchdslDlfInput").val();
        landCrackObj.活动断层断距= $("#hdcdjDlfInput").val();
        landCrackObj.水理作用水源= "";
        landCrackObj.水理作用时间= $("#slzysjDlfInput").val();
        landCrackObj.水理作用水质= $("#slzyszDlfInput").val();
        landCrackObj.水理作用类型= "";
        landCrackObj.水理作用开挖时间= $("#slzykwsjDlfInput").val();
        landCrackObj.水理作用开挖方式= $("#slzykwfsDlfInput").val();
        landCrackObj.水理作用开挖深度= $("#slzykwsdDlfInput").val();
        landCrackObj.毁坏房屋= $("#damageHouseDlfInput").val();
        landCrackObj.阻断交通= $("#jamTrafficDlfInput").val();
        landCrackObj.阻断交通时间= $("#jamTrafficTimeDlfInput").val();
        landCrackObj.死亡人口= $("#dieNumDlfInput").val();
        landCrackObj.直接损失= $("#directLossDlfInput").val();
        landCrackObj.灾情等级 = $("#damageClassDlf input[type=radio]:checked").val();
        landCrackObj.隐患点 = $("#dangerPointDlf input[type=radio]:checked").val();
        landCrackObj.灾害体积= $("#zhtjDlfInput").val();
        landCrackObj.威胁房屋= $("#qzwhhhfwDlfInput").val();
        landCrackObj.交通隐患= $("#qzwhjtyhDlfInput").val();
        landCrackObj.威胁人口= $("#qzwhwxrkDlfInput").val();
        landCrackObj.威胁财产= $("#qzwhwxccDlfInput").val();
        landCrackObj.险情等级 = $("#dangerClassDlf input[type=radio]:checked").val();
        landCrackObj.发展预测= "";
        landCrackObj.防灾预案 = $("#pdPlanDlf input[type=radio]:checked").val();
        landCrackObj.多媒体 = $("#mediaDlf input[type=radio]:checked").val();
        landCrackObj.防治措施及效果= $("#preMeasureAndEffectDlfInput").val();
        landCrackObj.防治建议= $("#preAdviceDlfInput").val();
        landCrackObj.调查负责人= $("#investiPersonDlfInput").val();
        landCrackObj.填表人= $("#fillerDlfInput").val();
        landCrackObj.审核人= $("#auditDlfInput").val();
        landCrackObj.调查单位= $("#investiUnitDlfInput").val();
        landCrackObj.填表日期= $("#dateDlfInput").val();
        landCrackObj.抽排水位置关系= $("#cpsLocationgxDlfInput").val();
        landCrackObj.平面示意图= null;
        landCrackObj.剖面示意图= null;
        landCrackObj.平面示意图路径= null;
        landCrackObj.剖面示意图路径= null;
        landCrackObj.省名= $("#provinceDlf").text();
        landCrackObj.县名= $("#countyDlfInput").val();
        landCrackObj.街道= $("#streetDlfInput").val();

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

        //判断float real数值是否输入正确
        var floatValue = [landCrackObj.群缝分布面积, landCrackObj.群缝发育间距, landCrackObj.裂缝长度max,
            landCrackObj.裂缝长度min, landCrackObj.裂缝宽度max, landCrackObj.裂缝宽度min, landCrackObj.裂缝深度max,
            landCrackObj.裂缝深度min, landCrackObj.胀缩土含水量, landCrackObj.洞室埋深, landCrackObj.洞室长,
            landCrackObj.洞室宽, landCrackObj.洞室高, landCrackObj.抽排井埋深, landCrackObj.抽排水位水量, landCrackObj.抽排日出水量,
            landCrackObj.活动断层长度, landCrackObj.水理作用开挖深度, landCrackObj.毁坏房屋, landCrackObj.直接损失,
            landCrackObj.威胁房屋, landCrackObj.威胁财产, landCrackObj.灾害体积];
        var floatStr = ["群缝分布面积", "群缝发育间距", "裂缝长度max", "裂缝长度min", "裂缝宽度max", "裂缝宽度min", "裂缝深度max",
            "裂缝深度min", "胀缩土含水量", "洞室埋深", "洞室长", "洞室宽", "洞室高", "抽排井埋深", "抽排水位水量", "抽排日出水量",
            "活动断层长度", "水理作用开挖深度", "毁坏房屋", "直接损失", "威胁房屋", "威胁财产", "灾害体积"];
        var regExp = new R2.Business.IsLegal({ "valueArr": floatValue, "titleArr": floatStr });
        if (regExp.isAllFloatForArr() == false) {
            tempObj.booll = false;
            return false;
        }
        //判断int型数值是否输入正确
        var intValue = [landCrackObj.X坐标, landCrackObj.Y坐标, landCrackObj.标高, landCrackObj.单缝缝号1, landCrackObj.单缝倾向1,
        landCrackObj.单缝倾角1, landCrackObj.单缝倾向3, landCrackObj.群缝缝数, landCrackObj.裂缝区构造断裂倾向1, landCrackObj.裂缝区构造断裂倾角1,
        landCrackObj.裂缝区构造断裂倾向2, landCrackObj.裂缝区构造断裂倾角2, landCrackObj.岩层中断裂倾向, landCrackObj.岩层中断裂倾角,
        landCrackObj.土层中新断裂倾向, landCrackObj.土层中新断裂倾角, landCrackObj.主要构造断裂倾向1, landCrackObj.主要构造断裂倾角1, landCrackObj.主要构造断裂倾向2,
        landCrackObj.主要构造断裂倾角2, landCrackObj.胀缩土中新断裂倾向, landCrackObj.胀缩土中新断裂倾角, landCrackObj.活动断层倾向, landCrackObj.活动断层倾角,
        landCrackObj.死亡人口, landCrackObj.威胁人口 ];
        var intStr = ["X坐标", "Y坐标", "标高", "单缝缝号1", "单缝倾向1", "单缝倾角1", "单缝倾向3", "群缝缝数", "裂缝区构造断裂倾向1",
            "裂缝区构造断裂倾角1", "裂缝区构造断裂倾向2", "裂缝区构造断裂倾角2", "岩层中断裂倾向", "岩层中断裂倾角", "土层中新断裂倾向",
            "土层中新断裂倾角", "主要构造断裂倾向1", "主要构造断裂倾角1", "主要构造断裂倾向2", "主要构造断裂倾角2", "胀缩土中新断裂倾向",
            "胀缩土中新断裂倾角", "活动断层倾向", "活动断层倾角", "死亡人口", "威胁人口"];
        var regExp2 = new R2.Business.IsLegal({ "valueArr": intValue, "titleArr": intStr });
        if (regExp2.isIntForArr() == false) {
            tempObj.booll = false;
            return false;
        }
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
    disaImage_1: function () {
        var list = [];
        var Num = $("#planDlf  .Imgscan").length;
        for (var i = 0; i < Num; i++) {  //平面图
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
        var Num2 = $("#profileDlf  .Imgscan").length;
        for (var i = 0; i < Num2; i++) {    //剖面图
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
        var Num3 = $("#dlf_BaseImg  .Imgscan").length;
        for (var i = 0; i < Num3; i++) {    //基础图
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

        var Num4 = $("#dlf_Videos  .Imgscan").length;
        for (var i = 0; i < Num4; i++) {    //基础图
            var disaimg4 = {};
            var imgpath = $("#dlf_Videos  .Imgscan").eq(i).find(".video_src").html();
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


        this.planImg = list;
    }
});