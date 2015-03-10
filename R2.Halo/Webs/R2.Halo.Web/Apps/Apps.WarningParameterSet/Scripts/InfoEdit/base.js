/// <reference path="BaseInfoFun.js" />
window.sessionStorage.inputFlag = 0;
/// <reference path="isValueCollpses.js" />

$(function () {
    tableSwitchReg();
    utilReg();
    clearBtnClick();
    $(".BIT_left_cell:eq(0)").trigger("click");

    //泥石流
    $("#countyNsl").change(function () {
        var tidf = $("#countyNsl").val().substring(4, 6) + "03";
        $("#UN_regionLSLCode").html(tidf);
        
    });
    //泥石流
    $("#unifiedNumberLSL").blur(function () {
        if ($("#unifiedNumberLSL").val() != "请输入4位数字组成统一编号") {
            $.post(baseUrl + "MudFlowImport/ExamineNumber", { "number": "3701" + $("#UN_regionLSLCode").html() + $("#unifiedNumberLSL").val() }, function (data) {
                if (data == 2) {
                    alert("此统一编号已经存在！");
                   
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
                   
                }
                
            });
        }
    });

    //地面沉降
    $("#BT_regionname").change(function () {
        var county = $("#BT_regionname").val();

        $("#uNubFastenDmCJInput").text(county + "05");
    });

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
                   
                }
                
            });
        }
    });
    


});


function tableSwitchReg() {
    $(".BIT_right_neck_cell").click(function () {
        var index = $(".BIT_right_neck_cell").index($(this));
        $(this).parent().children(".BIT_right_neck_cell").css("color", "#000");
        $(this).css("color", "#33699c");
        $(".BIT_right_table:eq(" + index + ")").css("display", "block").siblings(".BIT_right_table").css("display", "none");
    });
}

function utilReg() {
    $("#BIT_regionname").change(function () {
        var tid = $("#BIT_regionname").val().substring(4, 6) + "01";
        $("#UN_regionCode").html(tid);
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