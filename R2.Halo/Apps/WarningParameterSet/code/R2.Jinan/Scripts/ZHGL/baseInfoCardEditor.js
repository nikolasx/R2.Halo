/// <reference path="../Libs/jquery-1.7.1.min.js" />
$(function () {
    var workCardResult = new R2.Business.workCardResult();
})
//防灾明白卡列表结果展示
R2.Business.workCardResult = OpenLayers.Class({
    TempHtml: null,
    pageSize: 10,
    pageIndex: 1,
    pageSize2: 21,
    pageIndex2: 1,
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.addTitle();
        this.getData();
        this.pageChange();
        var tempObj = this;
        $("#Submit").click(function () {
            tempObj.searchByKeyWord();
        });
    },
    //添加列表标题
    addTitle: function () {
        var tit = '<div id="header">' +
                        '<div class="header_class" style="width: 60px;">序号</div>' +
                        '<div class="header_class" style="width: 130px;">统一编号</div>' +
                        '<div class="header_class" style="width: 250px;">名称</div>' +
                        '<div class="header_class" style="width: 254px;">灾害位置</div>' +
                        '<div class="header_class" style="width: 125px;">防灾工作卡数量</div>' +
                        '<div class="header_class" style="width: 123px;border-right: 1px solid #CAD8E4;">防灾避险卡数量</div>' +
                    '</div>';
        $("#Gridview").prepend(tit);
    },
    //模糊查询
    searchByKeyWord: function () {
        var tempObj = this;
        tempObj.pageIndex = 1;
        if ($("#txtValue").val().toString().trim() != "输入灾害点编号或名称") {
            $.post(baseUrl + "QueryWorkCard/GetPreventDataByKeyWord", { "pageSize": tempObj.pageSize, "pageIndex": tempObj.pageIndex, "keyWord": $("#txtValue").val().toString().trim() }, function (data) {
                tempObj.addHtml(data);
                tempObj.pageCss();
            })
            $.post(baseUrl + "QueryWorkCard/GetAllDataCountByKeyWord",{"keyWord": $("#txtValue").val().toString().trim()}, function (data) {
                $(".allPage").text("第1/" + Math.ceil(data / 10) + "页");
                tempObj.totalCount = data;
            })
        }
    },
    //初始入口
    getData: function () {
        var tempObj = this;
        $.post(baseUrl + "QueryWorkCard/GetAllData", { "pageSize": tempObj.pageSize, "pageIndex": tempObj.pageIndex }, function (data) {
            tempObj.addHtml(data);
            tempObj.pageCss();
        })
        $.post(baseUrl + "QueryWorkCard/GetAllDataCount", function (data) {
            $(".allPage").text("第1/" + Math.ceil(data / 10) + "页");
            tempObj.totalCount=data;
        })
    },
    //添加分页别表
    addHtml: function (data) {
        var tempObj = this;
        $("#infodata").empty();
        tempObj.editorNum(data);
        tempObj.openData();
    },
    //分页按钮点击事件
    pageChange: function () {
        var tempObj = this;
        $(".firstPage").click(function () {
            if (tempObj.pageIndex > 1) {
                $("#infodata").empty();
                tempObj.pageIndex = 1;
                $.post(baseUrl + "QueryWorkCard/GetAllData", { "pageSize": tempObj.pageSize, "pageIndex": tempObj.pageIndex }, function (data) {
                    tempObj.addHtml(data);
                    $(".allPage").text("第1/" + Math.ceil(tempObj.totalCount / 10) + "页");
                })
            }
            tempObj.pageCss();
        })
        $(".PrePage").click(function () {
            if (tempObj.pageIndex > 1) {
                $("#infodata").empty();
                tempObj.pageIndex--;
                $.post(baseUrl + "QueryWorkCard/GetAllData", { "pageSize": tempObj.pageSize, "pageIndex": tempObj.pageIndex }, function (data) {
                    tempObj.addHtml(data);
                    $(".allPage").text("第"+tempObj.pageIndex+"/" + Math.ceil(tempObj.totalCount / 10) + "页");
                })
            }
            tempObj.pageCss();
        })
        $(".nextPage").click(function () {
            if (tempObj.pageIndex < Math.ceil(tempObj.totalCount / 10)) {
                $("#infodata").empty();
                tempObj.pageIndex++;
                $.post(baseUrl + "QueryWorkCard/GetAllData", { "pageSize": tempObj.pageSize, "pageIndex": tempObj.pageIndex }, function (data) {
                    tempObj.addHtml(data);
                    $(".allPage").text("第" + tempObj.pageIndex + "/" + Math.ceil(tempObj.totalCount / 10) + "页");
                })
            }
            tempObj.pageCss();
        })
        $(".lastPage").click(function () {
            if (tempObj.pageIndex < Math.ceil(tempObj.totalCount / 10)) {
                $("#infodata").empty();
                tempObj.pageIndex = Math.ceil(tempObj.totalCount / 10);
                $.post(baseUrl + "QueryWorkCard/GetAllData", { "pageSize": tempObj.pageSize, "pageIndex": tempObj.pageIndex }, function (data) {
                    tempObj.addHtml(data);
                    $(".allPage").text("第" + tempObj.pageIndex + "/" + Math.ceil(tempObj.totalCount / 10) + "页");
                })
            }
            tempObj.pageCss();
        })
        $("#btnGotopage").click(function () {
            if ($("#pageIndex").val() <= Math.ceil(tempObj.totalCount / 10) && $("#pageIndex").val()!=0) {
                $("#infodata").empty();
                tempObj.pageIndex = Number($("#pageIndex").val());
                $.post(baseUrl + "QueryWorkCard/GetAllData", { "pageSize": tempObj.pageSize, "pageIndex": $("#pageIndex").val() }, function (data) {
                    tempObj.addHtml(data);
                    $(".allPage").text("第" + $("#pageIndex").val() + "/" + Math.ceil(tempObj.totalCount / 10) + "页");
                })
            }
            tempObj.pageCss();
        })
    },
    //添加查询得到的数据
    editorNum: function (Mydata) {
        var tempObj = this;
        var PreventNum = 0;
        var HedgeNum = 0;
        var tybhData = "";
        for (var i = 0; i < Mydata.length; i++) {
            tybhData = tybhData + Mydata[i].统一编号 + ",";
        }
        tybhData = tybhData.substring(0, (tybhData.length - 1));
        $.post(baseUrl + "QueryWorkCard/GetCountArrByTids", { "Tids": tybhData }, function (data) {
            for (var i = 0; i < Mydata.length; i++) {
                if (data[i].PreventNum == 1) {
                    colorobj = "#0f4b83";
                } else if (data[i].PreventNum == 0) {
                    colorobj = "#666";
                }else{
                    colorobj = "#ff6400";
                }
                if (data[i].HedgeNum == 1) {
                    colorobj2 = "#0f4b83";
                } else if (data[i].HedgeNum == 0) {
                    colorobj2 = "#666";
                } else {
                    colorobj2 = "#ff6400";
                }
                var html = '<div class="dataline">' +
                    '<div class="dataline_class" style=" width:60px;">' + ((tempObj.pageIndex-1)*10+i+1) + '</div>' +
                    '<div class="dataline_class tybhNum" style=" width:130px;">' + Mydata[i].统一编号 + '</div>' +
                    '<div class="dataline_class" style=" width:250px;"> ' + Mydata[i].名称 + '</div>' +
                    '<div class="dataline_class" style=" width:254px;">' + Mydata[i].地理位置 + '</div>' +
                    '<div class="dataline_class preventNum" style=" width:125px; color:'+colorobj+'">' + data[i].PreventNum + '</div>' +
                    '<div class="dataline_class hedgeNum" style=" width:123px;border-right:1px solid #CAD8E4; color:' + colorobj2 + '">' + data[i].HedgeNum + '</div>' +
                '</div>';
                $("#infodata").append(html);
            }
        })
    },
    //点击明白卡数量展开明白卡
    openData: function () {
        var thisobj = this;
        $(".preventNum").die("click");
        $(".preventNum").live("click", function () {
            $(".openField2").slideUp().removeClass("openField2OpenSlide");
            if ($(this).parent().next(".openField").hasClass("openFieldOpen openFieldOpenSlide")) {
                $(this).parent().next(".openField").slideUp().removeClass("openFieldOpenSlide");
            } else {
                var tybh = $(this).siblings(".tybhNum").text();
                var tempObj = $(this);
                if ($(this).text() == "0") {
                } else {
                    var liField = "";
                    if ($(this).parent().next(".openField").hasClass("openFieldOpen")) {
                        $(".openField").slideUp().removeClass("openFieldOpenSlide");
                        $(this).parent().next(".openField").slideDown().addClass("openFieldOpenSlide");
                    } else {
                        $(".openField").slideUp().removeClass("openFieldOpenSlide");
                        $(this).parent().after('<ul class="openField" style="width:947px;height:auto;padding-bottom:10px; border:1px solid #ccc; border-top:none; display:none"></ul>');
                        $.post(baseUrl + "QueryWorkCard/GetPreventData", { "tybhid": tybh, "pageSize": 12, "pageIndex": 1 }, function (data) {
                            for (var i = 0; i < data.length; i++) {
                                liField += '<li class="openFieldLi" title="监测负责人"><label class="openFieldDel">X</label><div style="width:100%; float:left;"><span style="float:left; width:75px; text-align:center;">编号：</span><span class="openFieldVal" style="width:40px; text-aligh:center;">' + data[i].ID + '</span></div><div style="width:100%; float:left;"><span style="float:left; width:75px; text-align:center;">监测负责人：</span><span class="openFieldVal"  style="width:40px; text-aligh:center;">' + data[i].监测负责人 + '</span></div><input value=' + data[i].ID + ' type="hidden"/></li>';
                            }
                            tempObj.parent().next(".openField").append(liField).slideDown().addClass("openFieldOpen openFieldOpenSlide");
                            thisobj.showWorkData();
                        });
                    }
                }
            }
        })
        $(".hedgeNum").die("click");
        $(".hedgeNum").live("click", function () {
            $(".openField").slideUp().removeClass("openFieldOpenSlide");
            if ($(this).parent().next(".openField2").hasClass("openField2Open openField2OpenSlide")) {
                $(this).parent().next(".openField2").slideUp().removeClass("openField2OpenSlide");
            } else {
                var tybh = $(this).siblings(".tybhNum").text();
                var tempObj = $(this);
                if ($(this).text() == "0") {
                } else {
                    //if ($(this).parent().next(".openField2").hasClass("openField2Open")) {
                    //    $(".openField2").slideUp().removeClass("openField2OpenSlide");
                    //    $(this).parent().next(".openField2").slideDown().addClass("openField2OpenSlide");
                    //} else {
                    $(".openField2").slideUp(function () {
                        $(this).remove()
                    }).removeClass("openField2OpenSlide");
                        $(this).parent().after('<ul class="openField2" style="width:947px;height:auto;padding-bottom:10px; border:1px solid #ccc; border-top:none; display:none"></ul>');
                        thisobj.pageIndex2 = 1;
                        thisobj.showHedgeDataByPage(tempObj, tybh);
                    //}
                }
            }
        })
    },
    showWorkData: function () {
        $(".openField").children(".openFieldLi").click(function () {
            top.fullPanel2.showByIFrame(baseUrl + "DisasterCard/EditWorkCard?editWorkCardId=" + $(this).children("input").val());
        })
    },
    showHedgeData: function () {
        $(".openField2").children(".openFieldLi").click(function () {
            top.fullPanel2.showByIFrame(baseUrl + "DisasterCard/EditEscapseCard?editHedgeCardId=" + $(this).children("input").val());
        })
    },
    pageCss: function () {
        if (this.pageIndex == 1) {
            $(".firstPage").css("color", "#666");
            $(".PrePage").css("color", "#666");
            $(".nextPage").css("color", "#000");
            $(".lastPage").css("color", "#000");
        } else if (this.pageIndex == Math.ceil(this.totalCount / 10)) {
            $(".firstPage").css("color", "#000");
            $(".PrePage").css("color", "#000");
            $(".nextPage").css("color", "#666");
            $(".lastPage").css("color", "#666");
        } else {
            $(".firstPage").css("color", "#000");
            $(".PrePage").css("color", "#000");
            $(".nextPage").css("color", "#000");
            $(".lastPage").css("color", "#000");
        }
    },
    showHedgeDataByPage: function (tempObj, tybh) {
        var thisobj = this;
        var liField = "";
        $.post(baseUrl + "QueryHedgeCard/GetHedgesByTid", { "tid": tybh, "pageSize": thisobj.pageSize2, "pageIndex": thisobj.pageIndex2 }, function (data) {
            for (var i = 0; i < data.length; i++) {
                liField += '<li class="openFieldLi"><label class="openFieldDel">X</label><div style="width:100%; float:left;"><span style="float:left; width:75px; text-align:center;">编号：</span><span class="openFieldVal" style="width:40px; text-aligh:center; float:left;">' + data[i].ID + '</span></div><div style="width:100%; float:left;"><span style="float:left; width:75px; text-align:center;">户主姓名：</span><span class="openFieldVal"  style="width:40px; text-aligh:center; float:left;">' + data[i].户主姓名 + '</span></div><input value=' + data[i].ID + ' type="hidden"/></li>';
            }
            tempObj.parent().next(".openField2").html(liField).slideDown().addClass("openField2Open openField2OpenSlide");
            if (Number(tempObj.text()) > 24) {
                tempObj.parent().next(".openField2").append('<div style="float:left;width:946px; height:14px; line-height:14px; padding-top:10px;"><div class="prevP" style="float:left; margin-left:400px; cursor:pointer;">上一页</div><div class="thisp" style="float:left; margin:0px 22px;"></div><div class="nextP" style="float:left; cursor:pointer;">下一页</div></div>');
                $(".thisp").text("第" + thisobj.pageIndex2 + "/" + Math.ceil(tempObj.text() / thisobj.pageSize2) + "页");
                thisobj.showHedgeDataByPageClick(tempObj, tybh, Math.ceil(tempObj.text() / thisobj.pageSize2));
            }
            thisobj.showHedgeData();
        });
    },
    showHedgeDataByPageClick: function (tempObj, tybh, totalPage) {
        var thisobj = this;
        $(".prevP").click(function () {
            if (thisobj.pageIndex2>1) {
                thisobj.pageIndex2--;
            }
            thisobj.showHedgeDataByPage(tempObj, tybh);
        })
        $(".nextP").click(function () {
            if (thisobj.pageIndex2 < totalPage) {
                thisobj.pageIndex2++;
            }
            thisobj.showHedgeDataByPage(tempObj, tybh);
        })
    }
});
