//地面塌陷基本信息录入开始

$(function () {
    $("#countyDmtxInput").change(function () {
        var tid_f = $("#countyDmtxInput").val() + "04";
        $("#uNubFastenDmtxInput").text(tid_f);
        $("#planDmtx  .tongyibianhao1").text(tid_f);
        $("#profileDmtx  .tongyibianhao1").text(tid_f);
        $("#dmtx_BaseImg  .tongyibianhao1").text(tid_f);
    })
})
function dMTXBaseInfoLuRuFunc() {

    //统一编号
    var dMTXNumVal = new R2.Business.IsLegal({ "value": $("#uNubAgileDmtxInput").val(), "n": 4 });
    if (!dMTXNumVal.has_n_Number()) {
        alert("请输入正确的统一编号");
        return;
    };
    //经度
    var jingduDu = $("#lonDUDmtxInput").val();
    var jingduFen = $("#lonFenDmtxInput").val();
    var jingduMiao = $("#lonMiaoDmtxInput").val();
    //纬度()
    var weiduDu = $("#latDUDmtxInput").val();
    var weiduFen = $("#latFenDmtxInput").val();
    var weiduMiao = $("#latMiaoDmtxInput").val();

    //名称
    if ($("#nameDmtxInput").val() == "") {
        alert("请输入名称");
        return;
    }
    //发生地点
    if ($("#locationDmtxInput").val() == "") {
        alert("请输入发生地点");
        return;
    }
    var dmtxInfoObj = {
        统一编号: "",
        名称: $("#nameDmtxInput").val(),
        野外编号: $("#fNubDmtxInput").val(),
        室内编号: $("#rNubDmtxInput").val(),
        X坐标: $("#xCoordinateDmtxInput").val(),
        Y坐标: $("#yCoordinateDmtxInput").val(),
        标高: $("#combDmtxInput").val(),
        //          经度: $("#longitudeDmtxInput").val(),
        //          纬度: $("#latitudeDmtxInput").val(),
        经度: jingduDu + "-" + jingduFen + "-" + jingduMiao,
        纬度: weiduDu + "-" + weiduFen + "-" + weiduMiao,
        地理位置: $("#locationDmtxInput").val(),
        单体陷坑坑号1: $("#dfkenghaoOnedmtxInput").val(),
        //          单体陷坑形状1: $("#dfxingzhuangOnedmtxInput").val(),
        单体陷坑形状1: $("#dfxingzhuangOnedmtx input[type=radio]:checked").val(),
        单体陷坑坑口规模1: $("#dfkkgmOnedmtxInput").val(),
        单体陷坑深度1: $("#dfshenduOnedmtxInput").val(),
        单体陷坑变形面积1: $("#dfbxmjOnedmtxInput").val(),
        单体陷坑规模等级1: $("#dfgmdjOnedmtxInput option:selected").val(),
        单体陷坑长轴方向1: $("#dfczfxOnedmtxInput").val(),
        单体陷坑充水水位深1: $("#dfcsswsOnedmtxInput").val(),
        单体陷坑水位变动1: $("#dfswbdOnedmtxInput").val(),
        单体陷坑发生时间1: $("#dffssjOnedmtxInput").val(),
        //          单体陷坑发展变化1: $("#dffzbhOnedmtxInput").val(),
        单体陷坑发展变化1: $("#dffzbhOnedmtx input[type=radio]:checked").val(),
        单体陷坑坑号2: $("#dfkenghaoTwodmtxInput").val(),
        单体陷坑形状2: $("#dfxingzhuangTwodmtx input[type=radio]:checked").val(),
        单体陷坑坑口规模2: $("#dfkkgmTwodmtxInput").val(),
        单体陷坑深度2: $("#dfshenduTwodmtxInput").val(),
        单体陷坑变形面积2: $("#dfbxmjTwodmtxInput").val(),
        单体陷坑规模等级2: $("#dfgmdjTwodmtxInput option:selected").val(),
        单体陷坑长轴方向2: $("#dfczfxTwodmtxInput").val(),
        单体陷坑充水水位深2: $("#dfcsswsTwodmtxInput").val(),
        单体陷坑水位变动2: $("#dfswbdTwodmtxInput").val(),
        单体陷坑发生时间2: $("#dffssjTwodmtxInput").val(),
        //          单体陷坑发展变化2: $("#dffzbhTwodmtxInput").val(),
        单体陷坑发展变化2: $("#dffzbhTwodmtx input[type=radio]:checked").val(),
        单体陷坑坑号3: $("#dfkenghaoThreedmtxInput").val(),
        //          单体陷坑形状3: $("#dfxingzhuangThreedmtxInput").val(),
        单体陷坑形状3: $("#dfxingzhuangThreedmtx input[type=radio]:checked").val(),
        单体陷坑坑口规模3: $("#dfkkgmThreedmtxInput").val(),
        单体陷坑深度3: $("#dfshenduThreedmtxInput").val(),
        单体陷坑变形面积3: $("#dfbxmjThreedmtxInput").val(),
        单体陷坑规模等级3: $("#dfgmdjThreedmtxInput option:selected").val(),
        单体陷坑长轴方向3: $("#dfczfxThreedmtxInput").val(),
        单体陷坑充水水位深3: $("#dfcsswsThreedmtxInput").val(),
        单体陷坑水位变动3: $("#dfswbdThreedmtxInput").val(),
        单体陷坑发生时间3: $("#dffssjThreedmtxInput").val(),
        //          单体陷坑发展变化3: $("#dffzbhThreedmtxInput").val(),
        单体陷坑发展变化3: $("#dffzbhThreedmtx input[type=radio]:checked").val(),
        陷坑坑数: $("#xkqtksDmtxInput").val(),
        陷坑分布面积: $("#qffbmjdmtxInput").val(),
        //          排列形式: $("#qfplxsdmtxInput").val(),
        排列形式: $("#qfplxsdmtx input[type=radio]:checked").val(),
        长列方向: $("#qfclfxdmtxInput").val(),
        最小陷坑口径: $("#qfzxkkkjdmtxInput").val(),
        最大陷坑口径: $("#qfzdkkkjdmtxInput").val(),
        最小陷坑深度: $("#qfkdzxsddmtxInput").val(),
        最大陷坑深度: $("#qfkdzdsddmtxInput").val(),
        始发时间: $("#qfsfsjdmtxInput").val(),
        盛发开始时间: $("#qfsfkssjdmtxInput").val(),
        盛发截止时间: $("#qfsfjzsjdmtxInput").val(),
        停止时间: $("#qftzsjdmtxInput").val(),
        //          尚在发展: $("#qfszfzdmtxInput").val(),
        尚在发展: $("#qfszfzdmtx input[type=radio]:checked").val(),
        单缝缝号1: $("#dfbslffhOnedmtxInput").val(),
        单缝形态1: $("#dfbslfxOnetdmtxInput").val(),
        单缝延伸方向1: $("#dfbslfysfxOnedmtxInput").val(),
        单缝倾向1: $("#dfbslfqxOnedmtxInput").val(),
        单缝倾角1: $("#dfbslfqjOnedmtxInput").val(),
        单缝长度1: $("#dfbslfcdOnedmtxInput").val(),
        单缝宽度1: $("#dfbslfkdOnedmtxInput").val(),
        单缝深度1: $("#dfbslfsdonedmtxInput").val(),
        单缝性质1: $("#dfbslfxzOnedmtxInput").val(),
        单缝缝号2: $("#dfbslffhTwodmtxInput").val(),
        单缝形态2: $("#dfbslfxtTwodmtxInput").val(),
        单缝延伸方向2: $("#dfbslfysfxTwodmtxInput").val(),
        单缝倾向2: $("#dfbslfqxTwodmtxInput").val(),
        单缝倾角2: $("#dfbslfqjTwodmtxInput").val(),
        单缝长度2: $("#dfbslfcdTwodmtxInput").val(),
        单缝宽度2: $("#dfbslfkdTwodmtxInput").val(),
        单缝深度2: $("#dfbslfsdTwodmtxInput").val(),
        单缝性质2: $("#dfbslfxzTwodmtxInput").val(),
        单缝缝号3: $("#dfbslffhThreedmtxInput").val(),
        单缝形态3: $("#dfbslfxtThreedmtxInput").val(),
        单缝延伸方向3: $("#dfbslfysfxThreedmtxInput").val(),
        单缝倾向3: $("#dfbslfqxThreedmtxInput").val(),
        单缝倾角3: $("#dfbslfqjThreedmtxInput").val(),
        单缝长度3: $("#dfbslfcdThreedmtxInput").val(),
        单缝宽度3: $("#dfbslfkdThreedmtxInput").val(),
        单缝深度3: $("#dfbslfsdThreedmtxInput").val(),
        单缝性质3: $("#dfbslfxzThreedmtxInput").val(),
        缝数: $("#qffsInput").val(),
        裂缝分布面积: $("#qffbmjInput").val(),
        裂缝间距: $("#qfjjInput").val(),
        //          裂缝排列形式: $("#qfplxsInput").val(),
        裂缝排列形式: $("#qfplxs input[type=radio]:checked").val(),
        裂缝倾向: $("#qfczqxInput").val(),
        裂缝倾角: $("#qfczqjInput").val(),
        裂缝长max: $("#qfzdcdzInput").val(),
        裂缝长min: $("#qfzxcdzInput").val(),
        裂缝宽max: $("#qfzdkdzInput").val(),
        裂缝宽min: $("#qfzxkdzInput").val(),
        裂缝深max: $("#qfzdsdzInput").val(),
        裂缝深min: $("#qfzxsdzInput").val(),
        塌陷区地貌特征: "",
        成因类型: $("#dmtxcylx input[type=radio]:checked").val(),
        岩溶塌陷地层时代: "",
        岩溶塌陷地层岩性: "",
        岩溶塌陷岩层倾向: "",
        岩溶塌陷岩层倾角: "",
        岩溶塌陷断裂情况: "",
        岩溶塌陷溶洞发育情况: "",
        岩溶塌陷岩层发育程度: "",
        岩溶塌陷塌顶溶洞埋深: "",
        岩溶塌陷地下水位埋深: "",
        岩溶塌陷诱发动力因素: "",
        土洞塌陷单层土性: "",
        土洞塌陷单层土厚: "",
        土洞塌陷双层上部土性: "",
        土洞塌陷双层上部土厚: "",
        土洞塌陷双层下部土性: "",
        土洞塌陷双层下部土厚: "",
        土洞塌陷下伏基岩时代: "",
        土洞塌陷下伏基岩岩性: "",
        土洞塌陷地下水位埋深: "",
        土洞塌陷诱发动力因素: "",
        井位塌陷区方向: "",
        井位塌陷区距离: "",
        井位塌陷区抽水降深: "",
        井位塌陷区日出水量: "",
        江河水位塌陷区方向: "",
        江河水位塌陷区距离: "",
        江河水位塌陷区水位变幅: "",
        江河水位塌陷区变化类型: "",
        冒顶塌陷土层时代: "",
        冒顶塌陷土层土性: "",
        冒顶塌陷土层厚度: "",
        冒顶塌陷岩层时代: "",
        冒顶塌陷岩层岩性: "",
        冒顶塌陷岩层厚度: "",
        冒顶塌陷地下水位埋深: "",
        冒顶塌陷诱发动力因素: "",
        冒顶塌陷矿层厚度: "",
        冒顶塌陷开采时间: "",
        冒顶塌陷开采厚度: "",
        冒顶塌陷开采深度: "",
        冒顶塌陷开采方法: "",
        冒顶塌陷工作面推进速度: "",
        冒顶塌陷采出量: "",
        冒顶塌陷顶板管理方法: "",
        冒顶塌陷重复采动: $("#mdtxcfcd input[type=radio]:checked").val(),
        冒顶塌陷采空区形态: "",
        冒顶塌陷采空区规模: "",
        毁坏田地: $("#damageFormDmtxInput").val(),
        毁坏房屋: $("#damageHouseDmtxInput").val(),
        阻断交通: "",
        阻断交通时间: $("#jamTrafficTimeDmtxInput").val(),
        地下水源枯竭: "",
        地下水井突水: "",
        掩埋地面物资: $("#buryregionGoodsDmtxInput").val(),
        死亡人口: $("#dieNumDmtxInput").val(),
        直接损失: $("#directLossDmtxInput").val(),
        灾情等级: $("#damageClassDmtx input[type=radio]:checked").val(),
        新增陷坑: $("#xzxkgsDmtxInput").val(),
        扩大陷区: $("#kdxqmjDmtzInput").val(),
        潜在毁田: $("#htmsDmtxInput").val(),
        潜在毁房: $("#hfjsDmtxInput").val(),
        出现新陷区: $("#cxxxqcsDmtxInput").val(),
        新陷区面积: $("#mjDmtxInput").val(),
        断路: $("#dlxssDmtxInput").val(),
        其他危害: $("#otherwhDmtxInput").val(),
        威胁人口: $("#wxrkDmtxInput").val(),
        威胁财产: $("#wxccDmtxInput").val(),
        险情等级: $("#dangerClassDmtx input[type=radio]:checked").val(),
        隐患点: $("#dangerpointerDmtx input[type=radio]:checked").val(),
        防灾预案: $("#pdPlanDmtx input[type=radio]:checked").val(),
        多媒体: $("#mediaDmtx input[type=radio]:checked").val(),
        防治措施: $("#precsandEffectDmtxInput").val(),
        防治建议: $("#preAdviceDmtxInput").val(),
        群测人员: $("#gmPersonDmtxInput").val(),
        村长: $("#vHeadDmtxInput").val(),
        电话: $("#phoneDmtxInput").val(),
        调查负责人: $("#investiPersonDmtxInput").val(),
        填表人: $("#fillerDmtxInput").val(),
        审核人: $("#auditDmtxInput").val(),
        调查单位: $("#investiUnitDmtxInput").val(),
        填表日期: $("#dateDmtxInput").val(),
        阶步指向: $("#qfjbzxInput").val(),
        平面示意图: null,
        剖面示意图: null,
        平面示意图路径: null,
        剖面示意图路径: null,
        地面塌陷情况: $("#collapseSit").val(),
        省名: $("#provinceDmtx").text(),
        县名: $("#countyDmtx").find("option:selected").text(),
        //          街道: $("#streetDmtxInput option:selected").text()
        街道: $("#streetDmtxInput").val(),
    };
    //统一编号
    dmtxInfoObj.统一编号 = $("#uNubFastenDmtxInput").text() + $("#uNubAgileDmtxInput").val();
    //判断经纬度是否输入正确
    var regExp3 = new R2.Business.IsLegal({ "value": dmtxInfoObj.经度 });
    if (regExp3.isLon() == false) {
        alert("经度的格式不正确，请重新输入");
        return false;
    }
    //判断经纬度是否输入正确
    var regExp4 = new R2.Business.IsLegal({ "value": dmtxInfoObj.纬度 });
    if (regExp4.isLat() == false) {
        alert("纬度的格式不正确，请重新输入");
        return false;
    }
    //地下水源枯竭
    if ($("#rainFlowDecreaseDmtx")[0].checked) {
        dmtxInfoObj.地下水源枯竭 = $("#rainFlowDecreaseDmtx").val();
    }
    if ($("#cutoffDmtxCon")[0].checked) {
        dmtxInfoObj.地下水源枯竭 += "$" + $("#cutoffDmtxCon").val();
    }
    if ($("#springDecreaseDmtxCon")[0].checked) {
        dmtxInfoObj.地下水源枯竭 += "$" + $("#springDecreaseDmtxCon").val();
    }
    if ($("#waterLevelDecreaseDmtxCon")[0].checked) {
        dmtxInfoObj.地下水源枯竭 += "$" + $("#waterLevelDecreaseDmtxCon").val();
    }
    if ($("#driedup")[0].checked) {
        dmtxInfoObj.地下水源枯竭 += "$" + $("#driedup").val();
    }

    //地下水井突水
    if ($("#waterIncreaseDmtx")[0].checked) {
        dmtxInfoObj.地下水井突水 = "$" + $("#waterIncreaseDmtx").val();
    }
    if ($("#disasterOrLossDmtx")[0].checked) {
        dmtxInfoObj.地下水井突水 += "$" + $("#disasterOrLossDmtx").val();
    }
    if ($("#yanjingLossDmtx")[0].checked) {
        dmtxInfoObj.地下水井突水 += "$" + $("#yanjingLossDmtx").val();
    }

    /*
    *地面塌陷成因类型条件
    */
    //冒顶型塌陷
    if ($("#mdxtxdmtx")[0].checked) {
        dmtxInfoObj.冒顶塌陷土层时代 = $("#mdtxtcsdDmtxInput").val();
        dmtxInfoObj.冒顶塌陷土层土性 = $("#mdtxtctxDmtxInput").val();
        dmtxInfoObj.冒顶塌陷土层厚度 = $("#mdtxtchdDmtxInput").val();
        dmtxInfoObj.冒顶塌陷岩层时代 = $("#mdtxycsdDmtxInput").val();
        dmtxInfoObj.冒顶塌陷岩层岩性 = $("#mdtxycyxDmtxInput").val();
        dmtxInfoObj.冒顶塌陷岩层厚度 = $("#mdtxychdDmtxInput").val();
        dmtxInfoObj.冒顶塌陷地下水位埋深 = $("#mdtxdxswmsDmtxInput").val();
        //          dmtxInfoObj.冒顶塌陷诱发动力因素 = "";
        dmtxInfoObj.冒顶塌陷矿层厚度 = $("#mdtxkchdDmtxInput").val();
        dmtxInfoObj.冒顶塌陷开采时间 = $("#mdtxkcsjDmtxInput").val();
        dmtxInfoObj.冒顶塌陷开采厚度 = $("#mdtxkcsdDmtxInput").val();
        dmtxInfoObj.冒顶塌陷开采深度 = $("#mdtxkcaihdDmtxInput").val();
        dmtxInfoObj.冒顶塌陷开采方法 = $("#mdtxkcffDmtxInput").val();
        dmtxInfoObj.冒顶塌陷工作面推进速度 = $("#mdtxgzmtjsdDmtxInput").val();
        dmtxInfoObj.冒顶塌陷采出量 = $("#mdtxcclDmtxInput").val();
        dmtxInfoObj.冒顶塌陷顶板管理方法 = $("#mdtxdbglffDmtxInput").val();
        dmtxInfoObj.冒顶塌陷重复采动 = $("#mdtxcfcd input[type=radio]:checked").val();
        dmtxInfoObj.冒顶塌陷采空区形态 = $("#mdtxckqxtDmtxInput").val();
        dmtxInfoObj.冒顶塌陷采空区规模 = $("#mdtxckqgmDmtxInput").val();
        //冒顶塌陷诱发动力因素
        dmtxInfoObj.冒顶塌陷诱发动力因素 = checkBoxConInfo("#mdtxYouFaYinSu");
    }
    //岩溶型塌陷
    if ($("#yrxtxdmtx")[0].checked) {
        dmtxInfoObj.岩溶塌陷地层时代 = $("#yrtxdcsdDmtxInput").val();
        dmtxInfoObj.岩溶塌陷地层岩性 = $("#yrtxdcyxDmtxInput").val();
        dmtxInfoObj.岩溶塌陷岩层倾向 = $("#yrtxycqxDmtxInput").val();
        dmtxInfoObj.岩溶塌陷岩层倾角 = $("#yrtxycqjDmtxInput").val();
        dmtxInfoObj.岩溶塌陷断裂情况 = $("#yrtxdlqkDmtxInput").val();
        dmtxInfoObj.岩溶塌陷溶洞发育情况 = $("#yrtxrdfyqkDmtxInput").val();
        dmtxInfoObj.岩溶塌陷岩层发育程度 = $("#rybtycfycd input[type=radio]:checked").val();
        dmtxInfoObj.岩溶塌陷塌顶溶洞埋深 = $("#yrtxtdrdmsDmtxInput").val();
        dmtxInfoObj.岩溶塌陷地下水位埋深 = $("#yrtxdxswmsDmtxInput").val();
        //          dmtxInfoObj.岩溶塌陷诱发动力因素 = "";
        //岩溶塌陷诱发动力因素
        dmtxInfoObj.岩溶塌陷诱发动力因素 = checkBoxConInfo("#rytxyfdlys");

    }
    //土洞型塌陷
    if ($("#tdxtxdmtx")[0].checked) {
        dmtxInfoObj.土洞塌陷单层土性 = $("#tdtxdctxDmtxInput").val();
        dmtxInfoObj.土洞塌陷单层土厚 = $("#tdtxdcthDmtxInput").val();
        dmtxInfoObj.土洞塌陷双层上部土性 = $("#tdtxscsbtxDmtxInput").val();
        dmtxInfoObj.土洞塌陷双层上部土厚 = $("#tdtxscsbthDmtxInput").val();
        dmtxInfoObj.土洞塌陷双层下部土性 = $("#tdtxscxbtxDmtxInput").val();
        dmtxInfoObj.土洞塌陷双层下部土厚 = $("#tdtxscxbthDmtxInput").val();
        dmtxInfoObj.土洞塌陷下伏基岩时代 = $("#tdtxxfjysdDmtxInput").val();
        dmtxInfoObj.土洞塌陷下伏基岩岩性 = $("#tdtxxfjyyxDmtxInput").val();
        dmtxInfoObj.土洞塌陷地下水位埋深 = $("#tdtxdxswmsDmtxInput").val();
        dmtxInfoObj.井位塌陷区方向 = $("#jwtxqfxDmtxInput").val();
        dmtxInfoObj.井位塌陷区距离 = $("#jwtxqjlDmtxInput").val();
        dmtxInfoObj.井位塌陷区抽水降深 = $("#jwtxqcsjsDmtxInput").val();
        dmtxInfoObj.井位塌陷区日出水量 = $("#jhswtxqrcslDmtxInput").val();
        dmtxInfoObj.江河水位塌陷区方向 = $("#jhswtxqfxDmtxInput").val();
        dmtxInfoObj.江河水位塌陷区距离 = $("#jhswtxqjlDmtxInput").val();
        dmtxInfoObj.江河水位塌陷区水位变幅 = $("#jhswtxqswbfDmtxInput").val();
        dmtxInfoObj.江河水位塌陷区变化类型 = $("#jhswtxqbhlxDmtx input[type=radio]:checked").val();
        //土洞塌陷诱发动力因素
        dmtxInfoObj.土洞塌陷诱发动力因素 = checkBoxConInfo("#tddlYouFaYinSu");

    }

    //塌陷区地貌特征
    dmtxInfoObj.塌陷区地貌特征 = checkBoxConInfo("#landformFeatureDmtx");

    //阻断交通
    dmtxInfoObj.阻断交通 = checkBoxConInfo("#jamTrafficDmtx");

    //平面示意图、剖面示意图
    //var imgpathFlage = $("#planDmtx img").attr("src");
    //if (imgpathFlage != "") {
    //    dmtxInfoObj.平面示意图路径 = imgpathFlage.substring(1, imgpathFlage.length);
    //}
    //imgpathFlage = $("#profileDmtx img").attr("src");
    //if (imgpathFlage != "") {
    //    dmtxInfoObj.剖面示意图路径 = imgpathFlage.substring(1, imgpathFlage.length);
    //}

    var dmtxzhInfoObj = {
        统一编号: dmtxInfoObj.统一编号,
        名称: dmtxInfoObj.名称,
        地理位置: dmtxInfoObj.地理位置,
        经度: dmtxInfoObj.经度,
        纬度: dmtxInfoObj.纬度,
        死亡人数: dmtxInfoObj.死亡人口,
        威胁人口: dmtxInfoObj.威胁人口,
        直接经济损失: dmtxInfoObj.直接损失,
        威胁财产: dmtxInfoObj.威胁财产,
        目前稳定状态: dmtxInfoObj.危岩体目前稳定程度,
        灾害规模等级: dmtxInfoObj.规模等级,
        灾情等级: dmtxInfoObj.灾情等级,
        险情等级: dmtxInfoObj.险情等级,
        X坐标: dmtxInfoObj.X坐标,
        Y坐标: dmtxInfoObj.Y坐标,
        灾害体积: "",
        灾害类型: "04",
        省名: dmtxInfoObj.省名,
        县名: dmtxInfoObj.县名,
        街道: dmtxInfoObj.街道,
        国际代码: $("#countyDmtxInput").val(),
        真实状态: 0
    };

    //灾害体积
    //    btzhInfoObj.灾害体积 = $("#").val();
    //var LoginUserInfo = getSysUserGrade();
    var disaImg = disaImage_1();
    var object = { 'userInfo': "0", 'compreStr': JSON.stringify(dmtxzhInfoObj), 'objStr': JSON.stringify(dmtxInfoObj), "planImgs": JSON.stringify(disaImg) };
    //$.post(baseUrl + "GroundSubsideImport/GroundSubsideImport", object, function (data) {
    //    if (data == "success") {
    //        alert("录入成功！");
    //    } else if (data == 2) {
    //        alert("此统一编号已经存在！");
    //    }
    //});

    //$.post(window.baseUrl1 + "Apps/JnDbInserting/AddDisaster", dmtxzhInfoObj, function (cbdata) {
    //    if (cbdata == "success") {
            alert("插入成功");
    //    } else {
    //        alert("插入失败");
    //    }
    //});

};
    //图片
    function disaImage_1() {
        var list = [];
        var Num = $("#planDmtx  .Imgscan").length;
        for (var i = 0; i < Num; i++) {  //平面图
            var disaimg = {};
            var imgpath = $("#planDmtx  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg.Name = imgArr[imgArr.length - 1];
            disaimg.DisaId = $("#uNubFastenDmtxInput").text() + $("#uNubAgileDmtxInput").val();
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
        var Num2 = $("#profileDmtx  .Imgscan").length;
        for (var i = 0; i < Num2; i++) {    //剖面图
            var disaimg2 = {};
            var imgpath = $("#profileDmtx  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg2.Name = imgArr[imgArr.length - 1];
            disaimg2.DisaId = $("#uNubFastenDmtxInput").text() + $("#uNubAgileDmtxInput").val();
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

        var Num3 = $("#dmtx_BaseImg  .Imgscan").length;
        for (var i = 0; i < Num3; i++) {    //基础图
            var disaimg3 = {};
            var imgpath = $("#dmtx_BaseImg  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg3.Name = imgArr[imgArr.length - 1];
            disaimg3.DisaId = $("#uNubFastenDmtxInput").text() + $("#uNubAgileDmtxInput").val();
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

        var Num4 = $("#dmtx_Videos  .Imgscan").length;
        for (var i = 0; i < Num4; i++) {    //基础图
            var disaimg4 = {};
            var imgpath = $("#dmtx_Videos  .Imgscan").eq(i).find(".video_src").eq(0).html();
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg4.Name = imgArr[imgArr.length - 1];
            disaimg4.DisaId = $("#uNubFastenDmtxInput").text() + $("#uNubAgileDmtxInput").val();
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


        return list;
    }