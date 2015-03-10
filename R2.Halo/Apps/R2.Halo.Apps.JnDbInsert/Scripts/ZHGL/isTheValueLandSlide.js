/// <reference path="../Libs/jquery-1.7.1.min.js" />

R2.Business.LandSlideQuery = OpenLayers.Class({
    planImg: null,
    initialize: function (option) {
        comprehensiveObj: null;
        landslideObj: null;


        OpenLayers.Util.extend(this, option);
        this.initComprehensive();
        this.initLandSlide();
        this.disaImage_1();
        this.mergeComprehensiveAndLandSlide();

    },


    initComprehensive: function () {
        var comprehensiveOption = {};
        comprehensiveOption.统一编号 = "3701" + $("#UN_regionCode").html() + $("#unifiedNumber").val();
        comprehensiveOption.地理位置 = $("#disaPlace").val();
        comprehensiveOption.名称 = $("#disaName").val();
        comprehensiveOption.经度 = $("#jingduHPDu").val() + "-" + $("#jingduHPFen").val() + "-" + $("#jingduHPMiao").val();
        comprehensiveOption.纬度 = $("#weiduHPDu").val() + "-" + $("#weiduHPFen").val() + "-" + $("#weiduHPMiao").val();
        comprehensiveOption.死亡人数 = $("#dieNubHpInput").val();
        comprehensiveOption.威胁人口 = $("#threatenNubHpInput").val();
        comprehensiveOption.直接经济损失 = $("#directLossHpInput").val();
        comprehensiveOption.威胁财产 = $("#threatenFortuneHpInput").val();
        comprehensiveOption.目前稳定状态 = $("#nowSteadyHp").find("input:checked").val();
        comprehensiveOption.灾害规模等级 = $("#scaleLevelHp").find("input:checked").val();
        comprehensiveOption.灾情等级 = $("#damageClassHp").find("input:checked").val();
        comprehensiveOption.险情等级 = $("#dangerClassHp").find("input:checked").val();
        comprehensiveOption.X坐标 = $("#coordinateX").val();
        comprehensiveOption.Y坐标 = $("#coordinateY").val();
        comprehensiveOption.灾害体积 = $("#disaVolumn").val();
        comprehensiveOption.灾害类型 = getDisaTypeCode();
        comprehensiveOption.国际代码 = "370181";
        comprehensiveOption.真实状态 = "0";

        comprehensiveObj = comprehensiveOption;
    },

    //平面图
    disaImage_1: function () {
        var list = [];
        var Num = $("#BITHP_plan  .Imgscan").length;
        for (var i = 0; i < Num; i++) {  //平面图
            var disaimg = {};
            var imgpath = $("#BITHP_plan  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg.Name = imgArr[imgArr.length - 1];
            disaimg.DisaId = "3701" + $("#UN_regionCode").html() + $("#unifiedNumber").val();
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
        var Num2 = $("#profileHp  .Imgscan").length;
        for (var i = 0; i < Num2; i++) {    //剖面图
            var disaimg2 = {};
            var imgpath = $("#profileHp  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg2.Name = imgArr[imgArr.length - 1];
            disaimg2.DisaId = "3701" + $("#UN_regionCode").html() + $("#unifiedNumber").val();
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

        var Num3 = $("#hp_BaseImg  .Imgscan").length;
        for (var i = 0; i < Num3; i++) {    //基础图
            var disaimg3 = {};
            var imgpath = $("#hp_BaseImg  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg3.Name = imgArr[imgArr.length - 1];
            disaimg3.DisaId = "3701" + $("#UN_regionCode").html() + $("#unifiedNumber").val();
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

        var Num4 = $("#hp_BaseVideo  .Imgscan").length;
        for (var i = 0; i < Num4; i++) {    //基础图
            var disaimg4 = {};
            var imgpath = $("#hp_BaseVideo  .Imgscan").eq(i).find(".video_src").eq(0).html();
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg4.Name = imgArr[imgArr.length - 1];
            disaimg4.DisaId = "3701" + $("#UN_regionCode").html() + $("#unifiedNumber").val();
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


    initLandSlide: function () {
        var option = {};
        option.名称 = $("#disaName").val();
        option.统一编号 = "3701" + $("#UN_regionCode").html() + $("#unifiedNumber").val();
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
        option.原始坡形 = $("#poShapeHp").find("input:checked").val();
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
        option.规模等级 = $("#scaleLevelHp").find("input:checked").val();
        option.滑坡平面形态 = $("#planeTHp").find("input:checked").val();
        option.滑坡剖面形态 = $("#pokkHp").find("input:checked").val();
        option.滑体岩性 = $("#StoreXInput").val();
        option.滑体结构 = $("#Structor").find("input:checked").val();
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
        option.变形迹象名称1 = $("#oneVariantDaNamehp").find("input").val();
        option.变形迹象部位1 = $("#oneVariantLocationHp").text();
        option.变形迹象特征1 = $("#oneVariantFeatureHp").text();
        option.变形迹象初现时间1 = $("#oneVariantTimeHp").text();
        option.变形迹象名称2 = $("#twoVariantDaNamehp").find("input").val();
        option.变形迹象部位2 = $("#twoVariantLocationHp").text();
        option.变形迹象特征2 = $("#twoVariantFeatureHp").text();
        option.变形迹象初现时间2 = $("#twoVariantTimeHp").text();
        option.变形迹象名称3 = $("#threeVariantDaNamehp").find("input").val();
        option.变形迹象部位3 = $("#threeVariantLocationHp").text();
        option.变形迹象特征3 = $("#threeVariantFeatureHp").text();
        option.变形迹象初现时间3 = $("#threeVariantTimeHp").text();
        option.变形迹象名称4 = $("#fourVariantDaNamehp").find("input").val();
        option.变形迹象部位4 = $("#fourVariantLocationHp").text();
        option.变形迹象特征4 = $("#fourVariantFeatureHp").text();
        option.变形迹象初现时间4 = $("#fourVariantTimeHp").text();
        option.变形迹象名称5 = $("#fiveVariantDaNamehp").find("input").val();
        option.变形迹象部位5 = $("#fiveVariantLocationHp").text();
        option.变形迹象特征5 = $("#fiveVariantFeatureHp").text();
        option.变形迹象初现时间5 = $("#fiveVariantTimeHp").text();
        option.变形迹象名称6 = $("#sixVariantDaNamehp").find("input").val();
        option.变形迹象部位6 = $("#sixVariantLocationHp").text();
        option.变形迹象特征6 = $("#sixVariantFeatureHp").text();
        option.变形迹象初现时间6 = $("#sixVariantTimeHp").text();
        option.变形迹象名称7 = $("#sevenVariantDaNamehp").find("input").val();
        option.变形迹象部位7 = $("#sevenVariantLocationHp").text();
        option.变形迹象特征7 = $("#sevenVariantFeatureHp").text();
        option.变形迹象初现时间7 = $("#sevenVariantTimeHp").text();
        option.变形迹象名称8 = $("#eightVariantDaNamehp").find("input").val();
        option.变形迹象部位8 = $("#eightVariantLocationHp").text();
        option.变形迹象特征8 = $("#eightVariantFeatureHp").text();
        option.变形迹象初现时间8 = $("#eightVariantTimeHp").text();
        option.地下水埋深 = $("#gwBuriedDepthHpInput").val();
        option.地下水露头 = $("#gwHeadHp").find("input:checked").val();
        option.地下水补给类型 = checkBoxConInfo("#gwSupplyClassHp");
        option.主导因素 = checkBoxConInfo("#leadingCauseHp");
        option.地质因素 = checkBoxConInfo("#geologyHp");
        option.地貌因素 = checkBoxConInfo("#landformsHp");
        option.物理因素 = checkBoxConInfo("#physicsHp");
        option.人为因素 = checkBoxConInfo("#artificialHp");
        option.复活诱发因素 = checkBoxConInfo("#causeHp");
        option.目前稳定状态 = $("#nowSteadyHp").find("input:checked").val();
        option.今后变化趋势 = $("#changeTrendHp").find("input:checked").val();
        option.毁坏房屋 = $("#damageDoorHpInput").val();
        option.死亡人口 = $("#dieNubHpInput").val();
        option.灾情等级 = $("#damageClassHp").find("input:checked").val();
        option.险情等级 = $("#dangerClassHp").find("input:checked").val();
        option.威胁住户 = $("#threatenZhuhuHpInput").val();
        option.威胁人口 = $("#threatenNubHpInput").val();
        option.直接损失 = $("#directLossHpInput").val();
        option.威胁财产 = $("#threatenFortuneHpInput").val();
        option.监测建议 = checkBoxConInfo("#monitorAdviceHp");
        option.防治建议 = checkBoxConInfo("#preventAdviceHp");
        option.隐患点 = $("#dangerPointHp").find("input:checked").val();
        option.平面示意图 = "";
        option.剖面示意图 = "";

        landslideObj = option;
    },

    mergeComprehensiveAndLandSlide: function () {
        var mudflowOption = landslideObj;

        var arrValue_Flaot = [mudflowOption.冠, mudflowOption.年均降雨量, mudflowOption.日最大降雨量, mudflowOption.时最大降雨量, mudflowOption.洪水位, mudflowOption.枯水位, mudflowOption.原始坡高, mudflowOption.原始坡度, mudflowOption.滑坡长度, mudflowOption.滑坡宽度, mudflowOption.滑坡厚度, mudflowOption.滑坡坡度, mudflowOption.滑坡坡向, mudflowOption.滑坡面积, mudflowOption.滑坡体积, mudflowOption.滑体碎石含量, mudflowOption.滑面埋深, mudflowOption.滑带厚度, mudflowOption.地下水埋深, mudflowOption.直接损失, mudflowOption.威胁住户, mudflowOption.威胁财产, mudflowOption.X坐标, mudflowOption.Y坐标, mudflowOption.灾害体积];
        var arrName_Flaot = ["冠", "年均降雨量", "日最大降雨量", "时最大降雨量", "洪水位", "枯水位", "原始坡高", "原始坡度", "滑坡长度", "滑坡宽度", "滑坡厚度", "滑坡坡度", "滑坡坡向", "滑坡面积", "滑坡体积", "滑体碎石含量", "滑面埋深", "滑带厚度", "地下水埋深", "直接损失", "威胁住户", "威胁财产", "X坐标", "Y坐标", "灾害体积"];
        var regExp = new R2.Business.IsLegal({ "valueArr": arrValue_Flaot, "titleArr": arrName_Flaot });
        if (regExp.isAllFloatForArr() == false) {
            return false;
        }


        var arrValue_Int = [mudflowOption.地层倾向, mudflowOption.地层倾角, mudflowOption.控滑结构面倾向1, mudflowOption.控滑结构面倾角1, mudflowOption.控滑结构面倾向2, mudflowOption.控滑结构面倾角2, mudflowOption.控滑结构面倾向3, mudflowOption.控滑结构面倾角3, mudflowOption.滑床倾向, mudflowOption.滑床倾角, mudflowOption.滑面倾向, mudflowOption.滑面倾角, mudflowOption.死亡人口, mudflowOption.威胁人口];
        var arrName_Int = ["地层倾向", "地层倾角", "控滑结构面倾向1", "控滑结构面倾角1", "控滑结构面倾向2", "控滑结构面倾角2", "控滑结构面倾向3", "控滑结构面倾角3", "滑床倾向", "滑床倾角", "滑面倾向", "滑面倾角", "死亡人口", "威胁人口"];
        var regExp = new R2.Business.IsLegal({ "valueArr": arrValue_Int, "titleArr": arrName_Int });
        if (regExp.isIntForArr() == false) {
            return false;
        }

        var regExp = new R2.Business.IsLegal({ "value": $("#unifiedNumber").val(), "n": 4 });
        if (regExp.has_n_Number() == false) {
            alert("统一编号的格式不正确！");
            return false;
        }

        //var arrValue_Null = [mudflowOption.名称,mudflowOption.地理位置, mudflowOption.主导因素, mudflowOption.复活诱发因素, mudflowOption.隐患点, mudflowOption.防灾预案, mudflowOption.多媒体];
        //var arrName_Null = ["名称","发生地点", "主导因素", "复活诱发因素", "隐患点", "防灾预案", "多媒体"];

        //var regExp = new R2.Business.IsLegal({ "valueArr": arrValue_Null, "titleArr": arrName_Null });
        //if (regExp.isAllNullForArr() == false) {
        //    return false;
        //}

        var regExp = new R2.Business.IsLegal({ "value": mudflowOption.经度 });
        if (regExp.isLon() == false) {
            alert("经度的格式不正确!");
            return false;
        }
        var regExp = new R2.Business.IsLegal({ "value": mudflowOption.纬度 });
        if (regExp.isLat() == false) {
            alert("纬度的格式不正确!");
            return false;
        }

        //$.post(window.baseUrl1 + "Apps/JnDbInserting/AddDisaster", landslideObj, function (cbdata) {
        //    alert(cbdata);
        //});
        alert("数据插入成功！");



    },

    checkBoxConInfo: function (id) {
        var conStr = "";
        conStr = $(id + " input[type=checkbox]:checked").map(function () {
            return $(this).val();
        }).get().join(",");
        return conStr;
    }

});