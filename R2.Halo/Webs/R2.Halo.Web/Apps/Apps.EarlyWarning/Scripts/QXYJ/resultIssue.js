function resultIssue(v) {
    switch (v) {
        case 0:
            var sa = new R2.Business.SignAndApprove();
            break;
        case 1:
            var xls = new R2.Business.TownGradeXls();
            break;
        case 2:
            var gxg = new R2.Business.GradeXlsAndGraph();
            break;        
        default:
            ;
            break;
    }
}

R2.Business.TownGradeXls = OpenLayers.Class({
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.caseExecute();
    },
    caseExecute: function () {                
        //var gdbp = "gdbp://MapGisLocal/JNDZRUBBISH/sfcls/Resultf72cee2a-ec54-41f0-babd-1e73b79ae199";
        var gdbp = R2.warningAnalysisLayer;
        if (gdbp == null) {
            alert("图层为空！");
            return false;
        }
        $.post(baseUrl + "ExportExcel/ExportExcel", { "gdb": gdbp, "pageIndex": 0, "pageVolumn": 1000, "layerName": R2.warningResultLayer.join("&") }, function (data) {
            if (data != "failed") {                
                $("body").append("<a id='excel' ></a>");
                var arr = new Array();
                arr = data.split('\\');
                $("#excel").attr("href", baseUrl+"Files/Temp/" + arr[arr.length-1]);
                $("#excel").get(0).click();
                $("#excel").remove();
            }
        });
    },
    CLASS_NAME: "R2.Business.TownGradeXls"
});


R2.Business.GradeXlsAndGraph = OpenLayers.Class({   
        initialize: function (option) {
            OpenLayers.Util.extend(this, option);
            this.click();         
        },
        click:function(){
            //var gdbp = "gdbp://MapGisLocal/JNDZRUBBISH/sfcls/Resultf72cee2a-ec54-41f0-babd-1e73b79ae199";
            var gdbp = R2.warningAnalysisLayer;
            if (gdbp == null) {
                alert("图层为空！");
                return false;
            }
            $.post(baseUrl + "ExportExcel/ExportGradeExcel", { "gdb": gdbp, "pageIndex": 0, "pageVolumn": 1000, "layerName": R2.warningResultLayer.join("&") }, function (data) {
                if (data != "failed") {
                    $("body").append("<a id='gradeExcel' ></a>");
                    var arr = new Array();
                    arr = data.split('\\');
                    $("#gradeExcel").attr("href", baseUrl+"Files/Temp/" + arr[arr.length-1]);
                    $("#gradeExcel").get(0).click();
                    $("#gradeExcel").remove();
                }
            });
        },
        CLASS_NAME: "R2.Business.GradeXlsAndGraph"
});



R2.Business.SignAndApprove = OpenLayers.Class({
    html: '<div id="content">' +
               '<div id="qpd_head"></div>' +
               '<div id="qpd_neck">' +
                   '<div id="qpd_one" class="wrafunTitleCount" ></div>' +
                   '<div id="qpd_two">预警签批单发布</div>' +
                   '<div id="qpd_three"></div>' +
               '</div>' +
               '<div id="qpd_line"></div>' +
               '<div id="qpd_table_head">济南市地质灾害气象风险预警签批单</div>' +
               '<table id="qpd_table">' +                 
                   '<tr>' +
                       '<td class="qpd_tdLeft">预报日期</td>' +
                       '<td class="qpd_tdRight">' +
                             '<input type="text" class="qpd_input" id="qpd_date">' +
                       '</td>' +
                   '</tr>' +
                   '<tr>' +
                       '<td class="qpd_tdLeft">收到气象资料时间</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_timeReceived">' +
                       '</td>' +
                   '</tr>' +
                   '<tr>' +
                       '<td class="qpd_tdLeft">发送预报信息时间</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_timeSended">' +
                       '</td>' +
                   '</tr>' +
                   '<tr>' +
                       '<td class="qpd_tdLeft">预报（警）时段</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_shortInput" id="qpd_warnPeriodStart">' +" —— "+'<input type="text" class="qpd_shortInput" id="qpd_warnPeriodEnd">'+
                       '</td>' +
                   '</tr>' +
                   '<tr>' +
                       '<td class="qpd_tdLeft">值班预报员</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_watcher">' +
                       '</td>' +
                   '</tr>' +
                   '<tr>' +
                       '<td class="qpd_tdLeft">校核</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_checker">' +
                       '</td>' +
                   '</tr>' +
                   '<tr>' +
                       '<td class="qpd_tdLeft">预警系统负责人</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_yjxtLeader">' +
                       '</td>' +
                   '</tr>' +
                     '<tr>' +
                       '<td class="qpd_tdLeft">气象信息中心负责人</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_qxxxzxLeader">' +
                       '</td>' +
                   '</tr>' +
                    '<tr>' +
                       '<td class="qpd_tdLeft">地勘处负责人</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_dkcLeader">' +
                       '</td>' +
                   '</tr>' +
                    '<tr>' +
                       '<td class="qpd_tdLeft">气象局分管领导</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_qxjLeader">' +
                       '</td>' +
                   '</tr>' +
                    '<tr>' +
                       '<td class="qpd_tdLeft">国土局分管领导</td>' +
                       '<td class="qpd_tdRight">' +
                            '<input type="text" class="qpd_input" id="qpd_gtjLeader">' +
                       '</td>' +
                   '</tr>' +
               '</table>' +
               '<div id="qpd_yjResult">'+
                   '<div class="wrafunTitleCount1"></div>' +
                   '<div class="qpd_fxyjjg">风险预警结果：</div>'+
               '</div>' +
               '<textarea rows="8" cols="40" id="qpd_textarea"></textarea>' +
               '<div id="qpd_buttons">' +
                   '<div class="qpd_btn" id="qpd_back">返&nbsp;&nbsp;回</div>' +
                   '<div class="qpd_btn" id="qpd_resultGraph" style="color:#CCC;">显示成果图</div>' +
                   '<div class="qpd_btn" id="qpd_publish">发&nbsp;&nbsp;布</div>' +
               '</div>' +
               '</div>',
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.createContent();
    },
    createContent: function () {
        var tempObj = this;
        $(".warBox").animate({ "left": "-380px", "opacity": "0" }, function () {
            $(".warBox2").html(tempObj.html).css("display", "block").animate({ "left": "0", "opacity": "1" }, function () {                
                $("#qpd_date").val(window.qpd_yubaoDate.substring(0,10));
                $("#qpd_warnPeriod").val(window.qpd_yubaoDate1.substring(0, 10));
                var date = new Date;
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                var day = date.getDate();
                var hour = date.getHours();
                var min = date.getMinutes();
                var localDate = date.toLocaleDateString();
                $("#qpd_head").text( localDate +hour+"时 " + " 预警分析成功！");                                
                $("#qpd_textarea").val(R2.ybcContent);
                $("#qpd_timeSended").val($("#qpd_date").val()+" 17:00");
                var date0 = $("#qpd_date").val();                
                var date1 = $("#qpd_date").val() + " 17:00";
                $("#qpd_warnPeriodStart").val(date0 + " 20:00");
                var year = date0.split('/')[0];
                var month = date0.split('/')[1];
                var day = date0.split('/')[2];
                var date = new Date(year, month-1, day);
                date.setDate(date.getDate() + 1);
                var stttt = date.toLocaleDateString();
                var year1 = stttt.split('年')[0];
                var month1 = (stttt.split('年')[1]).split('月')[0];
                var day1 = (stttt.split('月')[1]).split('日')[0];
                var date2 = year1+"/"+ (parseInt(month)) + "/"+day1 + " 20:00";
                $("#qpd_warnPeriodEnd").val(date2);
                tempObj.switchReg();//返回按钮等切换事件注册
                tempObj.resizeHeight();
            });
        });
    },
    resizeHeight: function () {
        var height = window.screen.height;
        if (height >= 900) {
            $("#qpd_table").css("height", "350px");
            $("#qpd_textarea").css({ "height": "120px" ,"font-size":"14px"});            
        }
        else {
            $("#qpd_table").css("height", "280px");
            $("#qpd_textarea").css("height", "90px");
            //$("#qpd_table tr").css("height", "25px");
            //$("#qpd_table tr td").css("height", "25px");
        }
    },
    switchReg: function () {
        var tempObj = this;
        $("#qpd_back").click(function () {
            $(".warBox2").animate({ "left": "-380px", "opacity": "0" }, function () {
                $(".warBox").animate({ "left": "0", "opacity": "1" });
            });
        });
        $("#qpd_resultGraph").click(function () {
            //alert("暂无成果图");
        });
        $("#qpd_publish").click(function () {            
            var layerName = R2.warningResultLayer.join("&");                        
            //把传入的字符串用^分割，所以这里就要求填入的信息中不能含有^
            var qpd_ybDate = $("#qpd_date").val();            
            var qpd_timeReceived = $("#qpd_timeReceived").val();
            var qpd_timeSended = $("#qpd_timeSended").val();
            var qpd_warnPeriod = $("#qpd_warnPeriodStart").val()+" 至 " + $("#qpd_warnPeriodEnd").val();
            var qpd_watcher = $("#qpd_watcher").val();
            var qpd_checker = $("#qpd_checker").val();
            var qpd_yjxtfzr = $("#qpd_yjxtLeader").val();
            var qpd_qxxxzxfzr = $("#qpd_qxxxzxLeader").val();
            var qpd_dkcfzr = $("#qpd_dkcLeader").val();
            var qpd_qxjLeader = $("#qpd_qxjLeader").val();
            var qpd_gtjLeader = $("#qpd_gtjLeader").val();
            var qpd_textarea = $("#qpd_textarea").val();

            var value = [qpd_ybDate, qpd_timeReceived, qpd_timeSended, qpd_warnPeriod, qpd_watcher, qpd_checker, qpd_yjxtfzr, qpd_qxxxzxfzr, qpd_dkcfzr, qpd_qxjLeader, qpd_gtjLeader, qpd_textarea];
            var title = ["预报日期", "收到气象资料时间", "发送预报信息时间", "预报（警）时段", "值班预报员", "校核", "预警系统负责人", "气象信息中心负责人", "地勘处负责人", "气象局分管领导", "国土局分管领导", "风险预警结果"];
            var test = tempObj.isTheValueLegal(value, title);
            if (test == false) {
                return false;
            }           
            var info = qpd_ybDate + "^" + qpd_timeReceived + "^" + qpd_timeSended + "^" + qpd_warnPeriod + "^" + qpd_watcher + "^" + qpd_checker
                + "^" + qpd_yjxtfzr + "^" + qpd_qxxxzxfzr + "^" + qpd_dkcfzr + "^" + qpd_qxjLeader + "^" + qpd_gtjLeader + "^" + qpd_textarea + "^" + layerName;
            //$.post(baseUrl + "Word/ExportWord", { "info": info}, function (data) {
            //    if (data != "failed") {
            //        $("body").append("<a id='word' ></a>");
            //        var arr = new Array();
            //        arr = data.split('\\');
            //        $("#word").attr("href", baseUrl+"Files/Temp/" + arr[arr.length - 1]);
            //        $("#word").get(0).click();
            //    } else {
            //        alert("导出出错!");
            //    }
            //});
        });
    },
    isTheValueLegal: function (a, b) {
        var al = a.length;
        var tempObj = this;
        for (var i = 0; i < al;i++){
            if (tempObj.hasThatChar(a[i]) == true) {
                alert(b[i]+" 填写内容不合要求，请不要带有特殊符号^");
                return false;
            }
        }
        return true;
    },
    hasThatChar:function(str){
        var regExp = /\^+/g;
        return regExp.test(str);
    },
    CLASS_NAME: "R2.Business.SignAndApprove"
});


//这里写一个执行下载行为的通用方法，前台传入一个（已经存在的文件）路径，然后执行下载行为
R2.Business.Download = OpenLayers.Class({
    filePath: "",
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.executeDownload();
    },
    executeDownload: function () {
        var tempObj = this;
        $("body").append("<a id='_dldButton' style='display:none;'></a>");
        var arr = [];
        arr = tempObj.filePath.split('\\');
        $("#_dldButton").attr("href", "..\\..\\Files\\Temp\\" + arr[arr.length - 1]);
        $("#_dldButton").get(0).click();
        $("#_dldButton").remove();
    },
        CLASS_NAME: "R2.Business.Download"
});
