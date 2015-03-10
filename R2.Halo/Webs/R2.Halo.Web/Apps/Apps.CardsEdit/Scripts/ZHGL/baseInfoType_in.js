/// <reference path="BaseInfoFun.js" />
window.sessionStorage.inputFlag = 0;
/// <reference path="isValueCollpses.js" />

window.sessionStorage.inputFlag = 0;
$(function () {
    tableLeftClickReg();
    tableSwitchReg();
    utilReg();
    saveBtnClick();
    clearBtnClick();
    $(".BIT_left_cell:eq(0)").trigger("click");

    //泥石流
    $("#countyNsl").change(function () {
        var tidf = $("#countyNsl").val().substring(4, 6) + "03";
        $("#UN_regionLSLCode").html(tidf);
        $("#planLsl  .tongyibianhao1").text("3701" + tidf);
        $("#profileLsl  .tongyibianhao1").text("3701" + tidf);
        $("#nsl_BaseImg  .tongyibianhao1").text("3701" + tidf);
        $("#nsl_Videos  .tongyibianhao1").text("3701" + tidf);
    });
    //泥石流
    $("#unifiedNumberLSL").blur(function () {
        if ($("#unifiedNumberLSL").val() != "请输入4位数字组成统一编号") {
            $.post(baseUrl + "MudFlowImport/ExamineNumber", { "number": "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val() }, function (data) {
                if (data == 2) {
                    alert("此统一编号已经存在！");
                    $("#planLsl  .tongyibianhao2").text("");
                    $("#profileLsl  .tongyibianhao2").text("");
                    $("#nsl_BaseImg  .tongyibianhao2").text("");
                    $("#nsl_Videos  .tongyibianhao2").text("");
                }
                else {
                    var tid_f = "3701" + $("#UN_regionLSLCode").html();
                    var tid_l = $("#unifiedNumberLSL").val();
                    $("#planLsl  .tongyibianhao1").text( tid_f);
                    $("#planLsl  .tongyibianhao2").text(tid_l);

                    $("#profileLsl  .tongyibianhao1").text(tid_f);
                    $("#profileLsl  .tongyibianhao2").text(tid_l);

                    $("#nsl_BaseImg  .tongyibianhao1").text(tid_f);
                    $("#nsl_BaseImg  .tongyibianhao2").text(tid_l);

                    $("#nsl_Videos  .tongyibianhao1").text(tid_f);
                    $("#nsl_Videos  .tongyibianhao2").text(tid_l);
                }
                
            });
        }
    });
    //滑坡
    $("#unifiedNumber").blur(function () {
        if ($("#unifiedNumber").val() != "请输入4位数字组成统一编号") {
            $.post(baseUrl + "MudFlowImport/ExamineNumber", { "number": "3701" + $("#UN_regionCode").html() + $("#unifiedNumber").val() }, function (data) {
                if (data == 2) {
                    alert("此统一编号已经存在！");
                    $("#BITHP_plan  .tongyibianhao2").text("");
                    $("#profileHp  .tongyibianhao2").text("");
                    $("#hp_BaseImg  .tongyibianhao2").text("");
                    $("#hp_BaseVideo  .tongyibianhao2").text("");
                }
                else {
                    var tid_f = $("#UN_regionCode").html();
                    var tid_l = $("#unifiedNumber").val();
                    $("#BITHP_plan  .tongyibianhao1").text("3701" + tid_f);
                    $("#BITHP_plan  .tongyibianhao2").text(tid_l);

                    $("#profileHp  .tongyibianhao1").text("3701" + tid_f);
                    $("#profileHp  .tongyibianhao2").text(tid_l);

                    $("#hp_BaseImg  .tongyibianhao1").text("3701" + tid_f);
                    $("#hp_BaseImg  .tongyibianhao2").text(tid_l);

                    $("#hp_BaseVideo  .tongyibianhao1").text("3701" + tid_f);
                    $("#hp_BaseVideo  .tongyibianhao2").text(tid_l);
                }
            });
        }
    });
    //地裂缝
    $("#uNubAgileDlfInput").blur(function () {
        if ($("#uNubAgileDlfInput").val() != "请输入4位数字组成统一编号") {
            $.post(baseUrl + "MudFlowImport/ExamineNumber", { "number": $("#uNubFastenDlfInput").html() + $("#uNubAgileDlfInput").val() }, function (data) {
                if (data == 2) {
                    alert("此统一编号已经存在！");
                    $("#planDlf  .tongyibianhao2").text("");
                    $("#profileDlf  .tongyibianhao2").text("");
                    $("#dlf_BaseImg  .tongyibianhao2").text("");
                    $("#dlf_Videos  .tongyibianhao2").text("");
                }
                else {
                    var tid_l = $("#uNubAgileDlfInput").val();
                    var tid_f = $("#uNubFastenDlfInput").html();
                    $("#planDlf  .tongyibianhao1").text(tid_f);
                    $("#planDlf  .tongyibianhao2").text(tid_l);

                    $("#profileDlf  .tongyibianhao1").text(tid_f);
                    $("#profileDlf  .tongyibianhao2").text(tid_l);

                    $("#dlf_BaseImg  .tongyibianhao1").text(tid_f);
                    $("#dlf_BaseImg  .tongyibianhao2").text(tid_l);

                    $("#dlf_Videos  .tongyibianhao1").text(tid_f);
                    $("#dlf_Videos  .tongyibianhao2").text(tid_l);
                }
            });
        }
    });

    //地面沉降
    $("#BT_regionname").change(function () {
        var county = $("#BT_regionname").val();

        $("#uNubFastenDmCJInput").text(county + "05");
    });
    //地面沉降
    $("#uNubAgileDmcjInput").blur(function () {
        if ($("#uNubAgileDmcjInput").val() != "请输入4位数字组成统一编号") {
            $.post(baseUrl + "GroundSettleImport/ExamineNumber", { "number": $("#uNubFastenDmcjInput").text() + $("#uNubAgileDmcjInput").val() }, function (data) {
                if (data == 2) {
                    alert("此统一编号已经存在！");
                }
            });
        }
    });

    //地面塌陷
    $("#uNubAgileDmtxInput").blur(function () {
        if ($("#uNubAgileDmtxInput").val() != "请输入4位数字组成统一编号") {
            $.post(baseUrl + "GroundSubsideImport/ExamineNumber", { "number": $("#uNubFastenDmtxInput").text() + $("#uNubAgileDmtxInput").val() }, function (data) {
                if (data == 2) {
                    alert("此统一编号已经存在！");
                    $("#planDmtx  .tongyibianhao2").text("");
                    $("#profileDmtx  .tongyibianhao2").text("");
                    $("#dmtx_BaseImg  .tongyibianhao2").text("");
                    $("#dmtx_Videos  .tongyibianhao2").text("");
                }
                else {
                    var tid_l = $("#uNubAgileDmtxInput").val();
                    var tid_f = $("#uNubFastenDmtxInput").text();
                    $("#planDmtx  .tongyibianhao1").text(tid_f);
                    $("#planDmtx  .tongyibianhao2").text(tid_l);

                    $("#profileDmtx  .tongyibianhao1").text(tid_f);
                    $("#profileDmtx  .tongyibianhao2").text(tid_l);

                    $("#dmtx_BaseImg  .tongyibianhao1").text(tid_f);
                    $("#dmtx_BaseImg  .tongyibianhao2").text(tid_l);

                    $("#dmtx_Videos  .tongyibianhao1").text(tid_f);
                    $("#dmtx_Videos  .tongyibianhao2").text(tid_l);
                }
            });
        }
    });
 
        //滑坡平面
        UpPicFun("BITHP_plan", "平面图");
        //滑坡剖面
        UpPicFun("profileHp", "剖面图");
        //滑坡基础图
        UpPicFun("hp_BaseImg", "基础图");
       //滑坡视频
        UpBaseVideoFun("hp_BaseVideo", "视频","", true, []);

        //崩塌平面
        UpPicFun("planBt", "平面图");
        //崩塌剖面
        UpPicFun("profileBt", "剖面图");
        //崩塌基础图
        UpPicFun("bt_BaseImg", "基础图");
    //崩塌视频
        UpBaseVideoFun("bt_Videos", "视频", "", true, []);

        //泥石流平面
        UpPicFun("planLsl", "平面图");
        //泥石流剖面
        UpPicFun("profileLsl", "剖面图");
         //泥石流基础图
        UpPicFun("nsl_BaseImg", "基础图");
    //泥石流视频
        UpBaseVideoFun("nsl_Videos", "视频", "", true, []);

        //地裂缝平面
        UpPicFun("planDlf", "平面图");
        //地裂缝剖面
        UpPicFun("profileDlf", "剖面图");
    //地裂缝基础图
        UpPicFun("dlf_BaseImg", "基础图");
    //泥地裂缝视频
        UpBaseVideoFun("dlf_Videos", "视频", "", true, []);

    //地面塌陷平面
        UpPicFun("planDmtx", "平面图");
        //地面塌陷剖面
        UpPicFun("profileDmtx", "剖面图");
    //地面塌陷基础图
        UpPicFun("dmtx_BaseImg", "基础图");
    //地面塌陷视频
        UpBaseVideoFun("dmtx_Videos", "视频", "", true, []);



});
function tableLeftClickReg() {
    $(".BIT_left_cell").click(function () {
        var index = $(".BIT_left_cell").index($(this));
        window.sessionStorage.inputFlag = index;
        $(".BIT_right_disaType" + index).css("display", "block").siblings(".BIT_right_disaType").css("display", "none");
        $(".BIT_left_cell:eq(" + index + ")").css({ "background-color": "#ffffff", "border-right": "1px solid transparent" })
            .siblings(".BIT_left_cell").css({ "background-color": "#F4F8FB", "border-right": "1px solid #CAD8E4" });
        if (index == 1) {
            var Collapses1 = new R2.Business.Check();
        }
    });
}

function tableSwitchReg() {
    $(".BIT_right_neck_cell").click(function () {
        var index = $(".BIT_right_neck_cell").index($(this));
        $(this).parent().children(".BIT_right_neck_cell").css("color", "#000");
        $(this).css("color", "#33699c");
        $(".BIT_right_table:eq(" + index + ")").css("display", "block").siblings(".BIT_right_table").css("display", "none");
    });
}

//滑坡
function utilReg() {
    $("#BIT_regionname").change(function () {
        var tid = $("#BIT_regionname").val().substring(4, 6) + "01";
        $("#UN_regionCode").html(tid);

        $("#BITHP_plan  .tongyibianhao1").text("3701" + tid);
        $("#profileHp  .tongyibianhao1").text("3701" + tid);
        $("#hp_BaseImg  .tongyibianhao1").text("3701" + tid);
        $("#hp_BaseVideo  .tongyibianhao1").text("3701" + tid);
    });


    var type = window.sessionStorage.inputFlag;
    switch (type) {
        case 0:
            $("#UN_disaType").html("01");
            break;
        case 1:
            $("#UN_disaType").html("02");
            break;
        case 2:
            $("#UN_disaType").html("03");
            break;
        case 3:
            $("#UN_disaType").html("06");
            break;
        case 4:
            $("#UN_disaType").html("04");
            break;
        case 5:
            $("#UN_disaType").html("05");
            break;
        default:
            $("#UN_disaType").html("");
    }
}


function saveBtnClick() {
    $("#BIT_right_img_save").click(function () {
        switch (window.sessionStorage.inputFlag) {
            case "0":
                new R2.Business.LandSlideQuery();
                break;
            case "1":
                var bengta = new R2.Business.BengtaData();
                ;
                break;
            case "2":
                ;
                new R2.Business.MudFlowQuery();
                break;
            case "3":
                ;
                new R2.Business.LandCrackData();
                break;
            case "4":
                dMTXBaseInfoLuRuFunc();
                break;
            case "5":
                ;
                var GroundSettleManage = new R2.Business.GroundSettleData();
                GroundSettleManage.saveGroundSettle(GroundSettleManage.getComhensiveObject(), GroundSettleManage.getGroundSettle());
                break;
            default:
                ;
        }
    });
}

function clearBtnClick() {
    $("#BIT_right_img_clear").click(function () {
        switch (window.sessionStorage.inputFlag) {
            case "0":
                ;
                new R2.Business.ClearData();
                break;
            case "1":
                ;
                ;
                break;
            case "2":
                ;
                new R2.Business.ClearData();
                break;
            case "3":
                ;
                new R2.Business.ClearData();
                break;
            case "4":
                ;
                break;
            case "5":
                ;
                break;
            case "6":
                ;
                break;
            default:
                ;
        }
    });
}

function getDisaTypeCode() {
    var result = "";
    switch (window.sessionStorage.inputFlag) {
        case "0":
            result = "01";
            break;
        case "1":
            result = "02";
            break;
        case "2":
            result = "03";
            break;
        case "3":
            result = "04";
            break;
        case "4":
            result = "02";
            break;
        case "5":
            result = "02";
            break;
        case "6":
            result = "02";
            break;
        default:
            result = "";
            break;
        }
    return result;
}