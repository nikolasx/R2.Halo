//崩塌录入
R2.Business.BengtaData = OpenLayers.Class({
    planImg: null,
    IsTongguo:true,
    initialize: function () {
        //$("#bengTaName").text()
        this.IsAccess();
        this.disaImage_1();
        if (this.IsTongguo) {
            $.post(baseUrl + "Collapses/CollapsesImport", { "userInfo": "0", "btBaseInfor": JSON.stringify(this.btDataIsValue()), "btZhongHeInfor": JSON.stringify(this.getComprehensive()),"planImgs":JSON.stringify(this.planImg) }, function (data) {
                if (data == "success") {
                    alert("数据插入成功！");
                } else if (data == "2" ) {
                    alert("统一编号已存在，请重新编号! ");
                }
                else {
                    alert("数据插入失败，可能导致的原因如下为:    " + data);
                }
            });
        }
        else {
            return;
        }
    },
   btDataIsValue: function() {
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
    
    return bengtadata;
   },
   getComprehensive: function () {
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
       comprehensiveOption.目前稳定状态 = $("#accumulationBodyNSteady").find("input[type=radio]:checked").val();
       comprehensiveOption.灾害规模等级 = $("#btzhgmdj").find("input:checked").next("span").html();
       comprehensiveOption.灾情等级 = $("#damageClassBt").find("input[type=radio]:checked").val();
       comprehensiveOption.险情等级 = $("#dangerClassBt").find("input[type=radio]:checked").val();
       comprehensiveOption.X坐标 = $("#btxzuob").val();
       comprehensiveOption.Y坐标 = $("#btyzuob").val();
       comprehensiveOption.灾害体积 = $("#btdisterV").val();
       comprehensiveOption.灾害类型 = "02";
       comprehensiveOption.国际代码 = "370181";
       comprehensiveOption.真实状态 = "0";
       return comprehensiveOption;
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
    //图片
   disaImage_1: function () {   //可优化
       var list = [];
       var Num = $("#planBt  .Imgscan").length;
       for (var i = 0; i < Num; i++) {  //平面图
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
       var Num2 = $("#profileBt  .Imgscan").length;
       for (var i = 0; i < Num2; i++) {    //剖面图
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

       var Num3 = $("#bt_BaseImg  .Imgscan").length;
       for (var i = 0; i < Num3; i++) {    //基础图
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

       var Num4 = $("#bt_Videos  .Imgscan").length;
       for (var i = 0; i < Num4; i++) {    //基础图
           var disaimg4 = {};
           var imgpath = $("#bt_Videos  .Imgscan").eq(i).find(".video_src").eq(0).html();
           var imgArr = imgpath.split('/');
           var houzui = imgArr[imgArr.length - 1].split('.');
           var d = new Date()

           disaimg4.Name = imgArr[imgArr.length - 1];
           disaimg4.DisaId = $("#btFirstcode").html() + $("#bt_regionCode").html() + $("#btunifiedNumber").val();
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
   
   IsAccess: function () {
       

       //统一编号
       var btNo_Only = new R2.Business.IsLegal({ "value": $("#btunifiedNumber").val(), "n": 4 });
       if (!btNo_Only.has_n_Number()) {
           this.IsTongguo = false;
           alert("统一编号不能必须是四位数字，请重新编写！")
           return;
       }

       //经度
       var mylon = $("#btjdd").val() + "-" + $("#btjdf").val() + "-" + $("#btjdm").val();
       //纬度
       var myLat = $("#btwdd").val() + "-" + $("#btwdf").val() + "-" + $("#btwdm").val();

       var LonObj = new R2.Business.IsLegal({ "value": mylon })
       if (!LonObj.isLon()) {
           this.IsTongguo = false;
           alert("经度格式不正确，请重新编写！")
           return;
       }
       var LatObj = new R2.Business.IsLegal({ "value": myLat })
       if (!LatObj.isLat()) {
           this.IsTongguo = false;
           alert("纬度格式不正确，请重新编写！")
           return;
       }

       //判断空
       var btjdDu = $("#btjdd").val();
       var btjdFen = $("#btjdf").val();
       var btjdMiao = $("#btjdm").val();
       var btwdDu = $("#btwdd").val();
       var btwdFen = $("#btwdf").val();
       var btwdMiao = $("#btwdm").val();
       var kzhi = [$("#bengTaName").val(),$("#btlocation").val(),$("#pdPlanBt input[type=radio]:checked").val(), $("#dangerPointBt input[type=radio]:checked").val(), $("#mediaBt input[type=radio]:checked").val()]
       var ktitle = ["名称","发生地点", "灾害预案", "隐患点", "多媒体"]
       var bengt = new R2.Business.IsLegal({ "valueArr": kzhi, "titleArr": ktitle });
       if (!bengt.isAllNullForArr()) {
           this.IsTongguo = false;
           return;
       }

       var btNo_Only = new R2.Business.IsLegal({ "value": $("#btunifiedNumber").val(), "n": 4 });
       if (!btNo_Only) {
           this.IsTongguo = false;
           alert("统一编号必须是四位数字，请重新编写！")
           return;
       }

       //判断float
       var FloatNum = {};
       FloatNum.X坐标 = $("#btxzuob").val();
       FloatNum.Y坐标 = $("#btyzuob").val();
       FloatNum.坡顶标高 = $("#btbiaogd").val();
       FloatNum.坡脚标高 = $("#btbiaogj").val();
       FloatNum.年均降雨量 = $("#yearAvgBtInput").val();
       FloatNum.日最大降雨 = $("#dayMaxBtInput").val();
       FloatNum.时最大降雨 = $("#hourMaxBtInput").val();
       FloatNum.洪水位 = $("#floodBtInput").val();   //展示中写成了丰水位
       FloatNum.枯水位 = $("#lowWaterBtInput").val();
       FloatNum.坡高 = $("#poHeightBtInput").val();
       FloatNum.坡长 = $("#poLengthBtInput").val();
       FloatNum.坡宽 = $("#poWidthBtInput").val();
       FloatNum.规模 = $("#scaleBtInput").val();
       FloatNum.坡度 = $("#poDuBtInput").val();
       FloatNum.坡向 = $("#poOrientationBtInput").val();
       FloatNum.岩体厚度 = $("#rockBodyDepthInput").val();
       FloatNum.控制结构面长度1 = $("#oneControlLengthBtInput").val();
       FloatNum.控制结构面间距1 = $("#oneControlDistanceBtInput").val();
       FloatNum.控制结构面长度2 = $("#twoControlLengthBtInput").val();
       FloatNum.控制结构面间距2 = $("#twoControlDistanceBtInput").val();
       FloatNum.控制结构面长度3 = $("#threeControlLengthBtInput").val();
       FloatNum.控制结构面间距3 = $("#threeControlDistanceBtInput").val();
       FloatNum.全风化带深度 = $("#weatherBeltDepthBtInput").val();
       FloatNum.卸荷裂缝深度 = $("#unloadCrackDepthBtInput").val();
       FloatNum.堆积体长度 = $("#accumulationBodyLengthInput").val();
       FloatNum.堆积体宽度 = $("#accumulationBodyWidthInput").val();
       FloatNum.堆积体厚度 = $("#accumulationBodyThicknessInput").val();
       FloatNum.堆积体坡度 = $("#accumulationBodyPoduInput").val();
       FloatNum.堆积体坡向 = $("#accumulationBodyPoxInput").val();
       FloatNum.死亡人口 = $("#dieNubBtInput").val();
       FloatNum.毁路 = $("#damageRoadBtInput").val();
       FloatNum.毁渠 = $("#damageChannelBtInput").val();
       FloatNum.直接损失 = $("#directLossBtInput").val();
       FloatNum.灾害体积 = $("#provinceBtInput").val();
       
       var fzhi = [FloatNum.X坐标, FloatNum.Y坐标, FloatNum.坡顶标高, FloatNum.坡脚标高, FloatNum.年均降雨量, FloatNum.日最大降雨, FloatNum.时最大降雨, FloatNum.洪水位, FloatNum.枯水位, FloatNum.坡高, FloatNum.坡长,FloatNum.坡宽, FloatNum.规模, FloatNum.坡度, FloatNum.坡向, FloatNum.岩体厚度, FloatNum.控制结构面长度1, FloatNum.控制结构面间距1, FloatNum.控制结构面长度2, FloatNum.控制结构面间距2, FloatNum.控制结构面长度3, FloatNum.控制结构面间距3, FloatNum.全风化带深度, FloatNum.卸荷裂缝深度, FloatNum.堆积体长度, FloatNum.堆积体宽度, FloatNum.堆积体厚度, FloatNum.堆积体坡度, FloatNum.堆积体坡向, FloatNum.死亡人口, FloatNum.毁路,FloatNum.毁渠, FloatNum.直接损失, FloatNum.灾害体积];
       var ftitle = ["X坐标"," Y坐标"," 坡顶标高"," 坡脚标高"," 年均降雨量"," 日最大降雨"," 时最大降雨"," 洪水位"," 枯水位"," 坡高"," 坡长","坡宽"," 规模"," 坡度"," 坡向"," 岩体厚度"," 控制结构面长度1"," 控制结构面间距1"," 控制结构面长度2"," 控制结构面间距2"," 控制结构面长度3","控制结构面间距3"," 全风化带深度"," 卸荷裂缝深度"," 堆积体长度"," 堆积体宽度"," 堆积体厚度"," 堆积体坡度"," 堆积体坡向"," 死亡人口"," 毁路","毁渠"," 直接损失"," 灾害体积"];
       var fa = new R2.Business.IsLegal({ "valueArr": fzhi, "titleArr": ftitle });
       if (!fa.isAllFloatForArr()) {
           this.IsTongguo = false;
           return;
       }
       //判断int
       var IntNum = {};
       IntNum.地层倾向 = $("#shapedcqxBtInput").val();
       IntNum.地层倾角 = $("#shapedcqjBtInput").val();
       IntNum.岩体裂隙组数 = $("#rockFractureNubInput").val();
       IntNum.控制结构面倾向1 = $("#oneInclinationBtInput").val();
       IntNum.控制结构面倾角1 = $("#oneIncidenceBtInput").val();
       IntNum.控制结构面倾向2 = $("#twoInclinationBtInput").val();
       IntNum.控制结构面倾角2 = $("#twoIncidenceBtInput").val();
       IntNum.控制结构面倾向3 = $("#threeInclinationBtInput").val();
       IntNum.控制结构面倾角3 = $("#threeIncidenceBtInput").val();
       IntNum.下伏基岩倾向 = $("#basicRockInclinationBtInput").val();
       IntNum.下伏基岩倾角 = $("#basicRockIncidenceBtInput").val();
       IntNum.下伏基岩埋深 = $("#basicRockDepthBtInput").val()
       IntNum.地下水埋深 = $("#gwDepthBtInput").val();
       IntNum.毁坏房屋 = $("#damageDoorBtInput").val();
       IntNum.威胁人口 = $("#threatenNubBtInput").val();
       IntNum.威胁财产 = $("#threatenFortuneBtInput").val();



       var intvalue = [IntNum.地层倾向, IntNum.地层倾角, IntNum.岩体裂隙组数, IntNum.控制结构面倾向1, IntNum.控制结构面倾角1, IntNum.控制结构面倾向2,IntNum.控制结构面倾角2, IntNum.控制结构面倾向3, IntNum.控制结构面倾角3, IntNum.下伏基岩倾向, IntNum.下伏基岩倾角, IntNum.下伏基岩埋深,IntNum.地下水埋深, IntNum.毁坏房屋, IntNum.威胁人口, IntNum.威胁财产];

       var inttitle = [
           "地层倾向"," 地层倾角"," 岩体裂隙组数"," 控制结构面倾向1"," 控制结构面倾角1"," 控制结构面倾向2"," 控制结构面倾角2"," 控制结构面倾向3"," 控制结构面倾角3"," 下伏基岩倾向"," 下伏基岩倾角"," 下伏基岩埋深"," 地下水埋深"," 毁坏房屋"," 威胁人口"," 威胁财产"
       ];
       var intReg = new R2.Business.IsLegal({ "valueArr": intvalue, "titleArr": inttitle });
       if (!intReg.isIntForArr()) {
           this.IsTongguo = false;
           return;
       }
   }
});


function checkBoxConInfo(id) {
    var conStr = "";
    conStr = $(id + " input[type=checkbox]:checked").map(function () {
        return $(this).val();
    }).get().join(",");
    return conStr;
};

R2.Business.Check = OpenLayers.Class({
    initialize: function () {
        this.utilRegSel();
        this.checkNum();
        //this.isAccess();
        //alert(33);
    },
    utilRegSel: function () {
        $("#BT_countyBt").change(function () {
            $("#bt_regionCode").html($("#BT_countyBt").val().substring(4, 6) + "02");

            var tid_first = $("#btFirstcode").html() + $("#bt_regionCode").html();
            $("#planBt  .tongyibianhao1").text(tid_first);
            $("#profileBt  .tongyibianhao1").text(tid_first);
            $("#bt_BaseImg  .tongyibianhao1").text(tid_first);
            $("#bt_Videos  .tongyibianhao1").text(tid_first);
        });
    },
    checkNum:function()
    {
        $("#btunifiedNumber").focus(function () {
            if ($("#btunifiedNumber").val() == "请输入4位数字组成统一编号") {
                $(this).val("");
                return false;
            }
        });
        $("#btunifiedNumber").blur(function () {
            if ($(this).val() == "") {
                $(this).val("请输入4位数字组成统一编号");
                $("#planBt  .tongyibianhao2").text("");
                $("#profileBt  .tongyibianhao2").text("");
                $("#bt_BaseImg  .tongyibianhao2").text("");
                $("#bt_Videos  .tongyibianhao2").text("");
                return false;
            }
            else {
                var collapses = {};
                collapses.统一编号 = $("#btFirstcode").html() + $("#bt_regionCode").html() + $("#btunifiedNumber").val();
                $.post(baseUrl + "Collapses/CollapsesCheck", { "btZhongHeInfor": JSON.stringify(collapses) }, function (data) {
                    if (data == "success") {
                        alert("统一编号已存在，请重新编号！");
                        $("#planBt  .tongyibianhao2").text("");
                        $("#profileBt  .tongyibianhao2").text("");
                        $("#bt_BaseImg  .tongyibianhao2").text("");
                        $("#bt_Videos  .tongyibianhao2").text("");
                        return false;
                    } 
                    else {
                        $("#planBt  .tongyibianhao2").text($("#btunifiedNumber").val());
                        $("#profileBt  .tongyibianhao2").text($("#btunifiedNumber").val());
                        $("#bt_BaseImg  .tongyibianhao2").text($("#btunifiedNumber").val());
                        $("#bt_Videos  .tongyibianhao2").text($("#btunifiedNumber").val());
                        var tid_first = $("#btFirstcode").html() + $("#bt_regionCode").html();
                        $("#planBt  .tongyibianhao1").text( tid_first);
                        $("#profileBt  .tongyibianhao1").text(tid_first);
                        $("#bt_BaseImg  .tongyibianhao1").text(tid_first);
                        $("#bt_Videos  .tongyibianhao1").text(tid_first);
                        return false;
                        //alert("数据插入失败，可能导致的原因如下为:    " + data);
                    }
                })
            }
        })
    },
    isAccess:function(){
        this.waring("#bengTaName");  //名称
        this.waring("#btunifiedNumber");  //统一编号
        this.waring("#btjdd");  //经纬度
        this.waring("#btjdf");  //经纬度
        this.waring("#btjdm");  //经纬度
        this.waring("#btwdd");  //经纬度
        this.waring("#btwdf");  //经纬度
        this.waring("#btwdm");  //经纬度
        this.waring("#btlocation");  //发生地点
        this.waring("#btunifiedNumber");  //统一编号
    },
    waring: function (id) {
        $(id).blur(function () {
            if ($(id).val() == "") {
                $(id).addClass("ImportWaing");
            }
            else {
                $(id).removeClass("ImportWaing");
            }
        })
    }
});

R2.Business.ClearCollapses = OpenLayers.Class({
    initialize: function () {
        var bengtadata = {};
        $("#btunifiedNumber").val("请输入4位数字组成统一编号");
        $("#bengTaName").val("");
        $("#btoutdoorNO").val("");
        $("#btindoorNO").val("");
        $("#btlocation").val("");
        $("#btxzuob").val("");
        $("#btyzuob").val("");
        $("#btbiaogd").val("");
        $("#btbiaogj").val("");
        //经度
        $("#btjdd").val("");
        $("#btjdf").val("");
        $("#btjdm").val("");
        
        //纬度
       $("#btwdd").val("");
        $("#btwdf").val("");
        $("#btwdm").val("");
       
       $("#gmPersonBtInput").val("");
       $("#vHeadBtInput").val("");
       $("#phoneBtInput").val("");
       $("#btinvestiPersonBtInput").val("");
        $("#btfillerBtInput").val("");
        $("#btauditBtInput").val("");
        $("#btauditCaseBtInput").val("");
        $("#btinvestiUnitBtInput").val("");
        $("#btdateBtInput").val("");
       checkBoxConInfo("#landuserbt");
        $("#btoccurTimeBt").val("");

        $("#btcollapseSitInput").val("");
       $("#btprovinceBtInput").html("");
       $("#btstreetBt").val("");

        //第二张表
        $("#btlayerTimeBtInput").val("");
        $("#layerLithologyBtInput").val("");
       $("#geoStructureBtInput").val("");
        $("#shapedcqxBtInput").val("");
        $("#shapedcqjBtInput").val("");
        $("#yearAvgBtInput").val("");
        $("#dayMaxBtInput").val("");
        $("#hourMaxBtInput").val("");
        $("#floodBtInput").val("");   //展示中写成了丰水位
        $("#lowWaterBtInput").val("");

        //第三张表
        $("#poHeightBtInput").val("");
        $("#poLengthBtInput").val("");
        $("#poWidthBtInput").val("");
        $("#scaleBtInput").val("");
        $("#poDuBtInput").val("");
        $("#poOrientationBtInput").val("");
        $("#rockBodyDepthInput").val("");
        $("#rockFractureNubInput").val("");
        $("#rockLumpInput").val("");
        $("#oneInclinationBtInput").val("");
        $("#oneIncidenceBtInput").val("");
        $("#oneControlLengthBtInput").val("");
        $("#oneControlDistanceBtInput").val("");
        $("#twoControlTypeBtInput option:selected").val("");
        $("#twoInclinationBtInput").val("");
        $("#twoIncidenceBtInput").val("");
        $("#twoControlLengthBtInput").val("");
        $("#twoControlDistanceBtInput").val("");
        $("#threeInclinationBtInput").val("");
        $("#threeIncidenceBtInput").val("");
        $("#threeControlLengthBtInput").val("");
        $("#threeControlDistanceBtInput").val("");

        $("#weatherBeltDepthBtInput").val("");
        $("#unloadCrackDepthBtInput").val("");
        $("#soilNameBtInput").val("")
        $("#chouDuBtInput").val("");
        $("#basicRockNatureBtInput").val("");
        $("#basicRockEraBtInput").val("");
        $("#basicRockInclinationBtInput").val("");
        $("#basicRockIncidenceBtInput").val("");
        $("#basicRockDepthBtInput").val("");
        $("#oneVariantLocationBt").text("");
        $("#oneVariantFeatureBt").text("");

        $("#oneVariantTimeBt").text("");
       $("#twoVariantLocationBt").text("");
       $("#twoVariantFeatureBt").text("");
        $("#twoVariantTimeBt").text("");
        $("#threeVariantLocationBt").text("");
        $("#threeVariantFeatureBt").text("");
        $("#threeVariantTimeBt").text("");
        $("#fourVariantLocationBt").text("");
        $("#fourVariantFeatureBt").text("");
        $("#fourVariantTimeBt").text("");
        $("#fiveVariantLocationBt").text("");
        $("#fiveVariantFeatureBt").text("");
        $("#fiveVariantTimeBt").text("");
        $("#sixVariantLocationBt").text("");
        $("#sixVariantFeatureBt").text("");
        $("#sixVariantTimeBt").text("");
        $("#sevenVariantLocationBt").text("");
        $("#sevenVariantFeatureBt").text("");
        $("#sevenVariantTimeBt").text("");
        $("#eightVariantLocationBt").text("");
        $("#eightVariantFeatureBt").text("");
        $("#eightVariantTimeBt").text("");
        $("#gwDepthBtInput").val("");
        $("#accumulationBodyLengthInput").val("");
        $("#accumulationBodyWidthInput").val("");
        $("#accumulationBodyThicknessInput").val("");
        $("#accumulationBodyVolumeInput").val("");
        $("#accumulationBodyPoduInput").val("");
        $("#accumulationBodyPoxInput").val("");
       $("#dieNubBtInput").val("");
       $("#damageDoorBtInput").val("");
        $("#damageRoadBtInput").val("");
        $("#damageChannelBtInput").val("");
        $("#otherDamagerBtInput").val("");
        $("#directLossBtInput").val("");
        $("#threatenNubBtInput").val("");
        $("#threatenFortuneBtInput").val("");

        $("#btdisterV").val("");
    }
})
