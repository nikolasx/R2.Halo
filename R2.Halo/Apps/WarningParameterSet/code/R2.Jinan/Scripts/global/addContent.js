$(function () {
    //clickEvtReg();
    //$(".ui_Content").html(quickFun.html);
    //quickFun.init();
    

    (function () {

        warningAnalysesetting.init();

    })();
});

function clickEvtReg() {

    //返回快捷菜单
    $(".top_home,.mtitle_txt").click(function () {
        CreateContent(quickFun);
    })
    $(".top_cancel").click(function () {
        //window.location.href=baseUrl+"Home/Login"
    })

    $(".ui_menuli:eq(0)").find(".second_nav:eq(0)").click(function () {
        CreateContent(rainManage);
    });//信息导入

    //----------------
    //$(".third_nav2_1_1").click(function () {
    $(".ui_menuli:eq(1)").find(".second_nav:eq(1)").click(function () {
        if (fullMap.getLayersByName('markers').length > 0) {
            var arr = [];
            arr = fullMap.getLayersByName('markers')[0].markers;
            fullMap.getLayersByName('markers')[0].clearMarkers(arr);
        }
        if (fullMap.getControlsBy("id", "drc_rect").length > 0) {
            if (fullMap.getControlsBy("id", "drc_rect")[0].active) {
                fullMap.getControlsBy("id", "drc_rect")[0].deactivate();
            }            
        }
        if (fullMap.getControlsBy("id", "drc_circle").length > 0) {
            if (fullMap.getControlsBy("id", "drc_circle")[0].active) {
                fullMap.getControlsBy("id", "drc_circle")[0].deactivate();
            }
        }


        //进入灾点查询功能，如果有气象站点的画feature事件存在，则对其进行反激活
        if (fullMap.getControl("drc_polygon").active == true) {
            fullMap.getControl("drc_polygon").deactivate();
        }
        if (fullMap.getControl("drc_circle").active == true) {
            fullMap.getControl("drc_circle").deactivate();
        }
        if (fullMap.getControl("drc_rect").active == true) {
            fullMap.getControl("drc_rect").deactivate();
        }

        CreateContent(disasterQuery);
    });//灾害查询
    $(".ui_menuli:eq(1)").find(".second_nav:eq(2)").click(function () {
        contentPanel.showByIFrame(baseUrl + "ZHGLstatistics/index");
    });//灾害统计
    $(".third_nav2_1_3").click(function () {
        fullPanel.showByIFrame(baseUrl + "BaseInfoType_in/index");
    });//灾害点录入
    $(".third_nav2_1_4").click(function () {
        fullPanel.showByIFrame(baseUrl + "BaseInfoEditor/index");
    });//灾害点编辑
    $(".third_nav4_1_1").click(function () {
        fullPanel.showByIFrame(baseUrl + "DisasterCard/Index");
    });//工作明白卡录入
    $(".third_nav4_1_2").click(function () {
        fullPanel.showByIFrame(baseUrl + "DisasterCard/EscapseCard");
    });//避险明白卡录入
    $(".nav4_2").click(function () {
        fullPanel.showByIFrame(baseUrl + "DisasterCard/DisasterCardList?type=workCard");
    });//防灾明白卡编辑

    $(".nav4_3").click(function () {
        fullPanel.showByIFrame(baseUrl + "QcqfWorker/AddQcqfWorker");
    });//群测群防监测人员录入
    $(".nav4_4").click(function () {
        fullPanel.showByIFrame(baseUrl + "QcqfRecWorker/AddQcqfRecWorker");
    });//群测群防 气象预警预报 接受人员录入

    $(".third_nav4_5_1").click(function () {
        fullPanel.showByIFrame(baseUrl + "PreCautionPlans/AddPrecautionsPlans");
    });//防灾预案录入

    $(".third_nav4_5_2").click(function () {
        fullPanel.showByIFrame(baseUrl + "PreCautionPlans/Index");
    });//防灾预案编辑


    $(".nav5_1").click(function () {
        layerManaFun(0);
    });//图层管理


    //------------------
    $(".ui_menuli:eq(2)").find(".second_nav:eq(1)").click(function () {
        //CreateContent(warningAnalysesetting);
        warningAnalysesetting.init();
    });//预警参数设置
    $(".ui_menuli:eq(2)").find(".second_nav:eq(0)").click(function () {
        //进入气象站点的功能，此时如果灾点查询功能的control行为还处于激活状态，则反激活
        if (fullMap.getControlsBy("id", "circle") != null) {
            if (fullMap.getControlsBy("id", "circle")[0].active == true) {
                fullMap.getControlsBy("id", "circle")[0].deactivate();
            }
        }
        if (fullMap.getControlsBy("id", "rect") != null) {
            if (fullMap.getControlsBy("id", "rect")[0].active == true) {
                fullMap.getControlsBy("id", "rect")[0].deactivate();
            }
        }
        CreateContent(warningAnalyse);
    });//预警分析
    $(".ui_menuli:eq(2)").find(".second_nav:eq(2)").click(function () {
        CreateContent(historyWarning);
    });//历史预警

    $(".ui_menuli:eq(2)").find(".second_nav:eq(3)").click(function () {
        CreateContent(luobaoqu);
    });//历史预警


    //-------------用户管理
    $(".ui_menuli:eq(5)").find(".second_nav:eq(0)").click(function () {
        indexResetUser();
    });//注销用户
    $(".ui_menuli:eq(5)").find(".second_nav:eq(1)").click(function () {
        indexModifyPwd();
    });//修改密码
    $(".ui_menuli:eq(5)").find(".second_nav:eq(2)").click(function () {
        indexShowuser();
    });//管理用户
    //------------------

    //灾害统计滑屏返回主页
    $(".slide_btn2").click(function () {
        $("#ui_content").animate({ "left": "0" });
        $("#contentPanel").animate({ "left": "100%" });
    })

    $(".slide_btn3").click(function () {
        $("#ui_whole").animate({ "left": "0" });
        $("#fullPanel").animate({ "left": "100%" });
    })
    $(".slide_btn3_1").click(function () {
        $("#fullPanel").animate({ "left": "0" });
        $("#fullPanel2").animate({ "left": "100%" });
    })
}



//点击某一菜单改变下方内容
function CreateContent(obj) {
    $(".ui_Content").animate({ "left": "-380px", "opacity": "0" }, function () {
        $(".ui_Content").empty();
        $(".ui_Content").html(obj.html);
        $(".ui_Content").animate({ "left": "0", "opacity": "1" }, function () {
            obj.init();
        });
    })
}

