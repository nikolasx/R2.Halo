/// <reference path="../../libs/jquery-1.10.2.min.js" />


$(function () {



    //为用户名和密码输入框注册焦点事件
    $(".inputBox input").focus(function () {
        $("#loginResultTip").html("");
        $(this).parent().css({
            "box-shadow": "0px 0px 4px 1px #84DED3",
            "border": "1px solid #33c9b6"
        });
        $(this).css("color","#464646");
    });
    //失去焦点事件
    $(".inputBox input").blur(function () {
        $(this).parent().css({
            "box-shadow": "none",
            "border": "1px solid #bababa"
        });
        if ($(this).val() == "") {
            $(this).css("color", "#bfbfbf");
        }
    });

    //登陆
    $("#loginSubmit").click(function () {
        $(this).val("正在登录…");
    });

    //直接浏览
    $("#directScanTip").click(function () {
        window.location.href = window.baseUrl + "Home/index";

    });

    

});