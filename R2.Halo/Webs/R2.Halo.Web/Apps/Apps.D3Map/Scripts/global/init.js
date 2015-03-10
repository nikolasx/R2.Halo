$(function() {
    //addMap();
    leftMove();
    //dragdrawBtn();
    //dragdraw();
    $("#ui_left").bgiframe({
        width: "380px",
        height:'100%'
});


});

//添加地图


//左侧板子移动事件
function leftMove() {
    $(".slide_btn").click(function () {
        if ($(this).parent().css("left") == "382px") {
            $("#ui_left").animate({ "left": "-384px" });
            $("#ui_left1").animate({ "left": "-384px" });
            $(this).parent().animate({ "left": "-2px" });
            $(".slide_btn").css("background-position", "-20px 0");
        } else {
            $("#ui_left").animate({ "left": "0px" });
            $("#ui_left1").animate({ "left": "0px" });
            $(this).parent().animate({ "left": "382px" });
            $(".slide_btn").css("background-position", "0 0");
        }
    })
}

//放大、缩小、拖拽、复位事件


//放大、缩小、拖拽、复位事件


//添加添加菜单
function addMenu() {
    for (var i = 0; i < $(".ui_menuli").length; i++) {
        $(".ui_menuli").eq(i).children(".ui_menu_pic").css("background-position", (-i * 100) + "px 0px");
    }

    var secondNav = [["雨量查询"], ["灾害管理",  "灾害点查询", "灾害点统计"], ["预警分析", "参数设置", "历史预警"],["两卡录入","两卡编辑","监测人员","接收人员","防灾预案"],["图层数据"],["注销用户","修改密码","用户管理"]];

    for (var j = 0; j < secondNav.length; j++) {
        var secondNavStr = "";
        for (var i = 0; i < secondNav[j].length; i++) {
            secondNavStr += '<li class="second_nav "><span></span><div class=nav' + (j + 1) + "_" + (i + 1) + '>' + secondNav[j][i] + '</div></li>';
        }
        $(".ui_menuli").eq(j).children(".second_menu").append(secondNavStr);
        for (var i = 0; i < secondNav[j].length; i++) {
            if (i != 1 && i != 2) {
                $(".ui_menuli").eq(j).find(".second_nav").eq(i).children("span").css("background-position", (-j * 20) + "px " + (-i * 30) + "px");
            }
            else if (i == 1) {
                $(".ui_menuli").eq(1).find(".second_nav").eq(1).children("span").css("background-position", "0px " + 0 + "px");
                $(".ui_menuli").eq(1).find(".second_nav").eq(1).children("span").addClass("second_query_static_span");
            }
            else if (i == 2) {
                $(".ui_menuli").eq(j).find(".second_nav").eq(i).children("span").css("background-position", "0px " + (-60) + "px");
            }
        }
    }
    $(".ui_menuli").eq(3).find(".second_nav").eq(4).children("span").css("background-position", "-20px " + "-60px");//防灾预案
    $(".ui_menuli").eq(4).find(".second_nav").eq(0).children("span").css("background-position", "-60px " + "-90px");//图层数据
    $(".ui_menuli").eq(5).find(".second_nav").eq(0).children("span").css("background-position", "-60px " + "-60px");//注销用户
    $(".ui_menuli").eq(5).find(".second_nav").eq(2).children("span").css("background-position", "-20px " + "-180px");//用户管理

    $(".second_menu").hide();
    $(".ui_menuli:eq(0),.ui_menuli:eq(3)").css("color", "#000000");
    $(".ui_menuli:eq(1)").find(".second_nav:gt(3)").css("color", "#666");

    $(".ui_menuli:lt(6)").hover(function() {
        $(this).css("background-position", "-130px 0");
        $(this).children(".second_menu").show();
    }, function() {
        $(this).css("background-position", "0 0");
        $(this).children(".second_menu").hide();
    });
    $(".second_nav").hover(function() {
        $(this).children(".third_menu").show();
    }, function() {
        $(this).children(".third_menu").hide();
    });

    //二级菜单添加三级菜单
    $(".nav2_1,.nav4_1,.nav4_5").css("background", "url(" + baseUrl + "Content/images/nav_icon_more.png) no-repeat 63px center");
    var zhThirdMenu = '<ul class="third_menu third_menu1">' +
                                //'<li class="third_nav third_nav2_1_1"><span></span><div class="nav2_1_1">灾害查询</div></li>' +
                                //'<li class="third_nav third_nav2_1_2"><span></span><div class="nav2_1_2">灾害统计</div></li>' +
                                '<li class="third_nav third_nav2_1_3"><span></span><div class="nav2_1_3">灾害点录入</div></li>' +
                                '<li class="third_nav third_nav2_1_4"><span></span><div class="nav2_1_4">灾害点编辑</div></li>' +
                                '</ul>';
    $(".nav2_1").parent().append(zhThirdMenu);
    //var cardThirdMenu = '<ul class="third_menu">' +
    //                            '<li class="third_nav third_nav2_2_1"><span style="margin:4px 8px 0 8px;"></span><div class="nav2_2_1" style="width:84px">防灾明白卡录入</div></li>' +
    //                            '<li class="third_nav third_nav2_2_2"><span style="margin:4px 8px 0 8px;"></span><div class="nav2_2_2" style="width:84px">避险明白卡录入</div></li>' +
    //                            '<li class="third_nav third_nav2_2_3"><span style="margin:4px 8px 0 8px;"></span><div class="nav2_2_3" style="width:84px">明白卡编辑</div></li>' +
    //                            '</ul>';
    //$(".nav2_2").parent().append(cardThirdMenu);
    $(".third_menu").hide();

    var qcqfThirdMenu = '<ul class="third_menu third_menu2">' +
                                '<li class="third_nav third_nav4_1_1"><span style="margin:4px 8px 0 8px;"></span><div class="nav4_1_1" style="width:84px">防灾明白卡录入</div></li>' +
                                '<li class="third_nav third_nav4_1_2"><span style="margin:4px 8px 0 8px;"></span><div class="nav4_1_2" style="width:84px">避险明白卡录入</div></li>' +
                                '</ul>';
    $(".nav4_1").parent().append(qcqfThirdMenu);

    var fzyaThirdMenu = '<ul class="third_menu third_menu3">' +
                                '<li class="third_nav third_nav4_5_1"><span style="margin:4px 8px 0 8px;"></span><div class="nav4_5_1" style="width:84px">防灾预案录入</div></li>' +
                                '<li class="third_nav third_nav4_5_2"><span style="margin:4px 8px 0 8px;"></span><div class="nav4_5_2" style="width:84px">防灾预案编辑</div></li>' +
                                '</ul>';
    $(".nav4_5").parent().append(fzyaThirdMenu);

    $(".third_menu").hide();

    for (var i = 0; i < $(".third_menu1 .third_nav").length; i++) {
        $(".third_menu1 .third_nav").eq(i).children("span").css("background-position", "0px " + (-(i + 2) * 30) + "px");// 灾害管理 灾害管理三级菜单标签
        $(".third_menu2 .third_nav").eq(i).children("span").css("background-position", "-20px " + (-(i + 2) * 30) + "px");// 群测群防 两卡录入三级菜单标签
        $(".third_menu3 .third_nav").eq(i).children("span").css("background-position", "-40px " + (-(i + 2) * 30) + "px");//群测群防 防灾预案三级菜单标签
    }
    //灾害点查询和灾害点统计提到二级菜单下
    //var f = $(".ui_menuli").eq(1).find(".second_nav").eq(2).children("span");
    //$(".ui_menuli").eq(1).find(".second_nav").eq(2).children("span").css("background-position", "0px " + 0 + "px");
    //$(".ui_menuli").eq(1).find(".second_nav").eq(2).children("span").addClass("second_query_static_span")
    //$(".ui_menuli").eq(1).find(".second_nav").eq(3).children("span").css("background-position", "0px " + (-60) + "px  !important");
    //$(".ui_menuli").eq(1).find(".second_nav").eq(3).children("span").addClass("second_query_static_span");
}

