



R2.Business.MudFlowQuery = OpenLayers.Class({
    planImg: null,
    initialize: function (option) {
        comprehensiveObj: null;
        mudflowObj: null;

        OpenLayers.Util.extend(this, option);
        this.initComprehensive();
        this.initMudFlow();
        this.disaImage_1();
        this.mergeComprehensiveAndMudFlow();

    },


    initComprehensive: function () {
        var comprehensiveOption = {};
            comprehensiveOption.统一编号 = "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val();
            comprehensiveOption.地理位置 = $("#locationNslInput").val();
            comprehensiveOption.名称 = $("#nameNslInput").val();
            comprehensiveOption.经度 = $("#jingduLSLDu").val() +"-"+ $("#jingduLSLFen").val() +"-"+ $("#jingduLSLMiao").val();
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
            comprehensiveOption.灾害类型 = getDisaTypeCode();
            comprehensiveOption.国际代码 = $("#countyNsl").val();
            comprehensiveOption.真实状态 = "0";

            comprehensiveObj = comprehensiveOption;
    },

    initMudFlow: function () {
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

            mudflowObj = mudflowOption;
    },

    //图片
    disaImage_1: function () {
        var list = [];
        var Num = $("#planLsl  .Imgscan").length;
        for (var i = 0; i < Num; i++) {  //平面图
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
        var Num2 = $("#profileLsl  .Imgscan").length;
        for (var i = 0; i < Num2; i++) {    //剖面图
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

        var Num3 = $("#nsl_BaseImg  .Imgscan").length;
        for (var i = 0; i < Num3; i++) {    //剖面图
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

        var Num4 = $("#nsl_Videos  .Imgscan").length;
        for (var i = 0; i < Num4; i++) {    //剖面图
            var disaimg4 = {};
            var imgpath = $("#nsl_Videos  .Imgscan").eq(i).find(".video_src").eq(0).html();
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


        this.planImg = list;
    },

    mergeComprehensiveAndMudFlow: function () {
        var mudflowOption = mudflowObj;

        var arrValue_Flaot = [mudflowOption.最大标高, mudflowOption.最小标高, mudflowOption.年最大降雨, mudflowOption.年均降雨量, mudflowOption.日最大降雨量, mudflowOption.日平均降雨, mudflowOption.时最大降雨量, mudflowOption.时平均降雨, mudflowOption.十分钟最大降雨, mudflowOption.十分钟平均降雨, mudflowOption.沟口扇形地变幅, mudflowOption.沟口扇形地扇长, mudflowOption.沟口扇形地扇宽, mudflowOption.沟口扇形地扩散角, mudflowOption.森林, mudflowOption.灌丛, mudflowOption.草地, mudflowOption.缓坡耕地, mudflowOption.荒地, mudflowOption.陡坡耕地, mudflowOption.建筑用地, mudflowOption.其它用地, mudflowOption.威胁财产, mudflowOption.灾害史损失牲畜1, mudflowOption.灾害史全毁农田1, mudflowOption.灾害史半毁农田1, mudflowOption.灾害史毁坏道路1, mudflowOption.灾害史直接损失1, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史半毁农田2, mudflowOption.灾害史毁坏道路2, mudflowOption.灾害史直接损失2, mudflowOption.灾害史全毁农田3, mudflowOption.灾害史半毁农田3, mudflowOption.灾害史毁坏道路3, mudflowOption.灾害史直接损失3, mudflowOption.灾害史全毁农田4, mudflowOption.灾害史半毁农田4, mudflowOption.灾害史毁坏道路4, mudflowOption.灾害史直接损失4, mudflowOption.灾害史全毁农田5, mudflowOption.灾害史半毁农田5, mudflowOption.灾害史毁坏道路5, mudflowOption.灾害史直接损失5, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史全毁农田2, mudflowOption.灾害史全毁农田2];
        var arrName_Flaot = ["最大标高", "最小标高", "年最大降雨", "年均降雨量", "日最大降雨量", "日平均降雨", "时最大降雨量", "时平均降雨", "十分钟最大降雨", "十分钟平均降雨", "沟口扇形地变幅", "沟口扇形地扇长", "沟口扇形地扇宽", "沟口扇形地扩散角", "森林", "灌丛", "草地", "缓坡耕地", "荒地", "陡坡耕地", "建筑用地", "其它用地", "威胁财产", "灾害史损失牲畜1", "灾害史全毁农田1", "灾害史半毁农田1", "灾害史毁坏道路1", "灾害史直接损失1", "灾害史全毁农田2", "灾害史半毁农田2", "灾害史毁坏道路2", "灾害史直接损失2", "灾害史全毁农田3", "灾害史半毁农田3", "灾害史毁坏道路3", "灾害史直接损失3", "灾害史全毁农田4", "灾害史半毁农田4", "灾害史毁坏道路4", "灾害史直接损失4", "灾害史全毁农田5", "灾害史半毁农田5", "灾害史毁坏道路5", "灾害史直接损失5", "灾害史全毁农田2", "灾害史全毁农田2", "灾害史全毁农田2", "灾害史全毁农田2", "灾害史全毁农田2", "灾害史全毁农田2", "灾害史全毁农田2", "灾害史全毁农田2", "灾害史全毁农田2"];
        var regExp = new R2.Business.IsLegal({ "valueArr": arrValue_Flaot, "titleArr": arrName_Flaot });
        if (regExp.isAllFloatForArr() == false) {
            return false;
        }


        var arrValue_Int = [mudflowOption.X坐标, mudflowOption.Y坐标, mudflowOption.沟口扇形地完整性, mudflowOption.威胁人口, mudflowOption.灾害史死亡人口1, mudflowOption.灾害史全毁房屋1, mudflowOption.灾害史半毁房屋1, mudflowOption.灾害史毁坏桥梁1, mudflowOption.灾害史死亡人口2, mudflowOption.灾害史损失牲畜2, mudflowOption.灾害史全毁房屋2, mudflowOption.灾害史半毁房屋2, mudflowOption.灾害史毁坏桥梁2, mudflowOption.灾害史死亡人口3, mudflowOption.灾害史损失牲畜3, mudflowOption.灾害史全毁房屋3, mudflowOption.灾害史半毁房屋3, mudflowOption.灾害史毁坏桥梁3, mudflowOption.灾害史死亡人口4, mudflowOption.灾害史损失牲畜4, mudflowOption.灾害史全毁房屋4, mudflowOption.灾害史半毁房屋4, mudflowOption.灾害史毁坏桥梁4, mudflowOption.灾害史死亡人口5, mudflowOption.灾害史损失牲畜5, mudflowOption.灾害史全毁房屋5, mudflowOption.灾害史半毁房屋5, mudflowOption.灾害史毁坏桥梁5];
        var arrName_Int = ["X坐标", "Y坐标", "沟口扇形地完整性", "威胁人口", "灾害史死亡人口1", "灾害史全毁房屋1", "灾害史半毁房屋1", "灾害史毁坏桥梁1", "灾害史死亡人口2", "灾害史损失牲畜2", "灾害史全毁房屋2", "灾害史半毁房屋2", "灾害史毁坏桥梁2", "灾害史死亡人口3", "灾害史损失牲畜3", "灾害史全毁房屋3", "灾害史半毁房屋3", "灾害史毁坏桥梁3", "灾害史死亡人口4", "灾害史损失牲畜4", "灾害史全毁房屋4", "灾害史半毁房屋4", "灾害史毁坏桥梁4", "灾害史死亡人口5", "灾害史损失牲畜5", "灾害史全毁房屋5", "灾害史半毁房屋5", "灾害史毁坏桥梁5"];
        var regExp = new R2.Business.IsLegal({ "valueArr": arrValue_Int, "titleArr": arrName_Int });
        if (regExp.isIntForArr() == false) {
            return false;
        }

        var regExp = new R2.Business.IsLegal({ "value": $("#unifiedNumberLSL").val(), "n": 4 });
        if (regExp.has_n_Number() == false) {
            alert("统一编号的格式不正确！");
            return false;
        }

        var arrValue_Null = [mudflowOption.名称, mudflowOption.地理位置, mudflowOption.隐患点, mudflowOption.防灾预案, mudflowOption.多媒体, mudflowOption.监测措施, mudflowOption.防治措施现状];
        var arrName_Null = ["名称", "发生地点", "隐患点", "防灾预案", "多媒体", "监测措施", "防治措施现状"];

        var regExp = new R2.Business.IsLegal({ "valueArr": arrValue_Null, "titleArr": arrName_Null });
        if (regExp.isAllNullForArr() == false) {
            return false;
        }

        var regExp = new R2.Business.IsLegal({ "value": mudflowOption.经度 });
        if (regExp.isLon()==false) {
            alert("经度的格式不正确!");
            return false;
        }
        var regExp = new R2.Business.IsLegal({ "value": mudflowOption.纬度 });
        if (regExp.isLat()==false) {
            alert("纬度的格式不正确!");
            return false;
        }

        $.post(baseUrl + "MudFlowImport/MudFlowImport", { "userInfo": "2", "compreStr": JSON.stringify(comprehensiveObj), "mudFlowStr": JSON.stringify(mudflowObj), "planImgs": JSON.stringify(this.planImg) }, function (data) {
            if (data == "success") {
                alert("数据插入成功！");
            } else if (data == 2) {
                alert("此统一编号已存在");
            } else {
                alert("数据插入失败，可能导致的原因如下为:    " + data);
            }
        });
    }

});
function checkBoxConInfo(id) {
    var conStr = "";
    conStr = $(id + " input[type=checkbox]:checked").map(function () {
        return $(this).val();
    }).get().join(",");
    return conStr;
}