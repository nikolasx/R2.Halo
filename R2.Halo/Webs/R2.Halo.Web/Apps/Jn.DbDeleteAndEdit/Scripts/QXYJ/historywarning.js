/*
*历史预警 
*cxm 2014年3月10日 10:58:22
*/

var eachPageDataNums = 5;//每页显示条数
var totalDataRes = null;//符合时间段的数据集合
var nowPageNum = 0;//当前页数
var maxPageNum = 0;//
var mapHistoryWarnVecotor = null;
var hWarnResShowAllLastClickIndex = -1;

var historyWarning = {
    //页面内容
    html: '<div class="histroyWarningMain">' +
                '<p class="hWarningTitle">历史预警</p>' +
                '<div class="hWarningArea">' +
                '<div class="hWarning_TitleP" style="margin-top:5px;"><div class="hw_steps_coin" id="hw_steps_coin0"></div><div class="hWarn_Name">最近操作预警图层</div></div>' +
                '<div class="hWarnRegion" style="height:200px;">' +
                        //结果列表
                        '<table id="hWarnResTable">' +
                            '<thead>' +
                                '<tr><th>序号</th><th>预警日期</th><th>操作时间</th><th>操 作</th></tr>' +
                            '</thead>' +
                            '<tbody>' +
                            '</tbody>' +
                        '</table>' +
                    '</div>' +
                    '<div class="hWarning_TitleP"><div class="hw_steps_coin" id="hw_steps_coin1"></div><div class="hWarn_Name" style="margin-left:6px;">预警查询</div></div>' +
                    '<div class="hWarnRegion">' +
                        '<label class="hWarn_Date_Label">时间：</label>' +
                        '<input type="text" id="hWarn_Date_Start" class="hWarn_Date" value="2014-02-26"/>' +
                        '<label class="hWarn_Date_Label_1">—</label>' +
                        '<input type="text" id="hWarn_Date_End" class="hWarn_Date" value="2014-03-26"/>' +
                        '<div><div class="hWarnbtn">查 询</div></div>' +
                    '</div>' +
                    
                '</div>' +
          '</div>',
    //初始化
    init: function () {
        var obj = this;
        var lastHistoryWarningFive = [];
        //日期text框初始化日期
        var time = new Date();
        var year = time.getFullYear();
        var smonth, emonth;
        var month = time.getMonth() + 1;
        if (month < 10) {
            var tempmonth = month - 1;
            smonth = '0' + tempmonth;
            emonth = '0' + month;
        } else {
            smonth = month - 1;
            emonth = month;
        }
        var date = time.getDate();
        if (date < 10) date = '0' + date;
        var hours = time.getHours();
        if (hours < 10) hours = '0' + hours;
        $("#hWarn_Date_Start").attr("value", year + "-" + smonth + "-" + date);
        $("#hWarn_Date_End").attr("value", year + "-" + emonth + "-" + date);

        //初始化查询最近五条历史预警
        this.queryLastFive();
        //日期text框获得焦点
        $(".hWarn_Date").focus(function () {
            $(this).calendar({ format: 'yyyy-MM-dd', zIndex: 10001 });
            $(this).css("border-color", "#e4a112");
        });

        //注册点击事件
        $(".hWarnbtn").click(function () {
            obj.hWarnbtnClickEvt();
        });

        //最近历史预警编辑事件
    },
    queryLastFive: function () {
        var obj = this;
        $("#hWarnResTable>tbody").html("");
        $.post(baseUrl + "HistoryWarning/HistoryWarningQueryLastFive", null, function (cbdata) {
            var hWarnRes = '';
            lastHistoryWarningFive = [];
            for (var i = 0; i < 5 && i < cbdata.length; i++) {
                var strLength = cbdata[i].operateTime.length;
                lastHistoryWarningFive.push(cbdata[i]);
                hWarnRes = hWarnRes + '<tr><td>' + (i + 1) + '</td><td>' + cbdata[i].warningTime.substr(0, 16) + '</td><td>' + cbdata[i].operateTime.substr(0, strLength - 3) + '</td><td style="color:#026ba6;" class="hWarnLast">编辑</td></tr>';
            }
            $("#hWarnResTable>tbody").html(hWarnRes);
            obj.lastHistroyEvt(lastHistoryWarningFive);
            //给每一行注册事件
            $("#hWarnResTable>tbody>tr").click(function () {
                var index = $("#hWarnResTable>tbody>tr").index(this);
                obj.overlayWarningResultLayer(index, lastHistoryWarningFive);
            });
        });
    },
    //将详情列表分页显示到
    lastHistroyEvt: function (lastHistoryWarningFive) {
        $(".hWarnLast").click(function () {
            var index = $(".hWarnLast").index(this);
            window.qpd_yubaoDate = $(this).siblings("td").eq(1).text();
            window.qpd_yubaoDate1 = $(this).siblings("td").eq(2).text();
            R2.warningOriResultLayer = lastHistoryWarningFive[index].layerName.split("&");
            R2.warningResultLayer = lastHistoryWarningFive[index].layerName.split("&");
            R2.WarnLayerID = lastHistoryWarningFive[index].id;
            R2.CreateLayerR = lastHistoryWarningFive[index].analysisResult;
            R2.copyLayerD = lastHistoryWarningFive[index].defaultResult;
            R2.IsAnalysis = lastHistoryWarningFive[index].isAnalysis;
            R2.rainLayers = [];
            R2.rainLayers.push(lastHistoryWarningFive[index].rain15Layer);
            R2.rainLayers.push(lastHistoryWarningFive[index].rainTodayLayer);
            R2.rainLayers.push(lastHistoryWarningFive[index].rainHSumLayer);
            R2.rainLayers.push(lastHistoryWarningFive[index].rainHMaxLayer);
            if (R2.IsAnalysis == "是") {
                R2.warningResultLayer = [];
                R2.warningResultLayer.push(R2.CreateLayerR);
            }
            warningResultAnalysis.init(R2.warningResultLayer);
        });
    },
    //查询点击事件
    hWarnbtnClickEvt: function () {
        var obj = this;
        var dateStartTime = $("#hWarn_Date_Start").val();
        var dateEndTime = $("#hWarn_Date_End").val();
        //查询历史预警
        var warningSTime = dateStartTime.split("-")[0] + dateStartTime.split("-")[1] + dateStartTime.split("-")[2];
        var warningETime = dateEndTime.split("-")[0] + dateEndTime.split("-")[1] + dateEndTime.split("-")[2];

        var data = { stime: warningSTime, etime: warningETime };
        var url = baseUrl + "HistoryWarning/QueryHistoryWarningByTime";
        $.post(url, data, function (res) {
            //回调
            totalDataRes = res;
            //obj.cbQueryHistoryResult();
            var result = new HistoryWarningShow(res);
            result.init(warningSTime,warningETime);
        });
    },
    //叠加图层
    overlayWarningResultLayer: function (index,lastFive) { 
        var gdbps = lastFive[index].layerName.split("&");
        if (mapHistoryWarnVecotor != null) {
            fullMap.removeLayer(mapHistoryWarnVecotor);
            mapHistoryWarnVecotor == null;
        }
        if (fullMap.getLayersByName("warningLayer").length>0) {
            fullMap.removeLayer(R2.mapVector);
        }
        var WResultLayer = [];
        WResultLayer.push(R2.CreateLayerR);
        R2.mapVector = new Zondy.Map.Layer("warningLayer", WResultLayer,
        {
            ip: R2.gisIp,
            port: R2.gisPort,
            transitionEffect: "resize",
            singleTile: true,
            isBaseLayer: false,
            ration: 1,
            turnOnGuid: true
        });
        R2.mapVector.setOpacity(0.6);
        fullMap.addLayer(R2.mapVector);
        fullMap.setLayerIndex(R2.mapVector, 2);
    },

    
}

//历史预警的分页展示
function HistoryWarningShow(data) {
    this.data = null;
    this.totalPage = 0;
    this.currentPage = 0;
    this.pageVolumn = 10;
    //做删除提供
    this.startTime = null;
    this.endTime = null;
    //初始化方法
    this.init = function (stime,etime) {
        this.data = data;
        this.startTime = stime;
        this.endTime = etime;
        //展示历史预警列表
        $(".ui_menu").hide();
        $(".ui_Content").hide();
        this.addHead();
        var height = $("#hWarnBox").height();
        this.pageVolumn = Math.floor(height / 53);
        this.totalPage = Math.ceil(this.data.length / this.pageVolumn);
        this.addPageContent(0);
        this.ClickEvent();
    };
    this.addHead = function () {
        var htmlStr = '<div id="hWarnShowAllResult">' +
                             '<div id="hWarnShowResTitle" style="height:50px;background-color:#DBDBDB;">' +
                                 '<div id="hWarnShowResPageControl" style="position:relative;">' +
                                        '<div id="hWarnSAFirstPage" class="hWarnSAPageControl">第一页</div>' +
                                        '<div id="hWarnSAPrePage" class="hWarnSAPageControl">上一页</div>' +
                                        '<div id="hWarnSAPageNum" class="hWarnSAPageControl">1/1</div>' +
                                        '<div id="hWarnSANextPage" class="hWarnSAPageControl">下一页</div>' +
                                        '<div id="hWarnSALastPage" class="hWarnSAPageControl">最后一页</div>' +
                                        '<div id="hWarnSABack" class="hWarnSAPageControl"></div>' +
                                 '</div>' +
                             '</div>' +
                             '<div style="width:380px;height:20px;margin-top:5px;"><div style="float:left;width:150px;height:20px;line-height:20px;margin-left:70px;color:#135695;">预警时间</div><div style="line-height:20px;color:#135695;margin-left:20px;">操作时间</div></div>'+
                             '<div id="hWarnBox" style="width:375px;overflow:hidden; position:absolute; top:75px; bottom:0px;border-right-style: none;">' +
                             '<div id="hWarnShowResContent">' +
                             '</div></div></div>';
        $("#ui_left").append(htmlStr);
    };
    //添加每一页内容
    //从第0页开始
    this.addPageContent = function (page) {
        this.currentPage = page;
        this.pageForbidden();
        var htmlStr = "";
        var that = this;
        for (var i = page * this.pageVolumn; i < (page + 1) * this.pageVolumn && i < that.data.length; i++) {
            htmlStr = htmlStr +
                                '<div id="hWarnShowRes' + i + '" class="hWarnShowRes1">' +
                                    '<div style="width:30px;height:40px;text-align:center;line-height:40px;float:left;color:#575757;">' + (i + 1) + '</div>' +
                                    '<div style="width:120px;height:40px;line-height:40px;float:left;color:#575757;">' + that.data[i].warningTime + '</div>' +
                                    '<div style="width:120px;height:40px;text-align:center;line-height:40px;float:left;color:#575757;margin-left:20px;">' + that.data[i].operateTime + '</div>' +
                                    '<div id="hWarnShowRes' + i + 'Down" title="编辑" class="hWarnShowResDown" style="float:left;width:16px;height:16px;text-align:center;line-height:20px;cursor:pointer;margin-top:12px;"></div>' +
                                    '<div id="hWarnRes'+i+'Delete" title="删除" class="hWarnDelete" style="float:left;width:16px;height:16px;text-align:center;line-height:20px;cursor:pointer;margin-left:8px;margin-top:12px;display:none;"></div>' +
                                '</div>' +
                                '<div id="hWarnShowRes' + i + 'Child" class="hWarnShowRes2">' +
                                    '<div id="hWarnShowRes' + i + 'ChildCGT" class="hWarnShowResChildCGT"></div>' +
                                    '<div id="hWarnShowRes' + i + 'ChildQPD" class="hWarnShowResChildQPD"></div>' +
                                    '<div id="hWarnShowRes' + i + 'ChildYJDJB" class="hWarnShowResChildYJDJB"></div>' +
                                    '<div id="hWarnShowRes' + i + 'ChildXZDJB" class="hWarnShowResChildXZDJB"></div>' +
                                '</div>';
        }
        $("#hWarnShowResContent").html(htmlStr);
        var hWarnShowAllResultHeight = $("#hWarnShowAllResult").height();
        var hWarnShowResContentHeight = hWarnShowAllResultHeight - 72;
        $("#hWarnShowResContent").height(hWarnShowResContentHeight);
        $("#hWarnSAPageNum").html((page + 1) + "/" + this.totalPage);
        this.listClickEvt();
        for (var i = page * this.pageVolumn, j = 0; i < (page + 1) * this.pageVolumn && i < that.data.length; i++, j++) {
            //$(".hWarnShowResChildCGT").eq(i).addClass("hWarnShowResChildYJChecked");
            if (that.data[i].isQPD) {
                $(".hWarnShowResChildQPD").eq(j).addClass("hWarnShowResChildYJChecked");
            }
            if (that.data[i].isTownGrade) {
                $(".hWarnShowResChildYJDJB").eq(j).addClass("hWarnShowResChildYJChecked");
            }
            if (that.data[i].isXQGrade) {
                $(".hWarnShowResChildXZDJB").eq(j).addClass("hWarnShowResChildYJChecked");
            }
        }
    };
    //表头点击事件
    this.ClickEvent = function () {
        var that=this;
        //返回按钮
        $("#hWarnSABack").click(function () {
            $("#hWarnShowAllResult").remove();
            $(".ui_menu").show();
            $(".ui_Content").show();
            historyWarning.queryLastFive();
        });
        //第一页
        $("#hWarnSAFirstPage").click(function () {
            if (that.currentPage > 0) {
                that.addPageContent(0);
            }
        });
        //上一页
        $("#hWarnSAPrePage").click(function () {
            if (that.currentPage > 0) {
                var page = that.currentPage - 1;
                that.addPageContent(page);
            }
        });
        //下一页
        $("#hWarnSANextPage").click(function () {
            if (that.currentPage < that.totalPage - 1) {
                var page = that.currentPage + 1;
                that.addPageContent(page);
            }
        });
        //最后一页
        $("#hWarnSALastPage").click(function () {
            if (that.currentPage < that.totalPage - 1) {
                var page = that.totalPage - 1;
                that.addPageContent(page);
            }
        });
    };
    //历史预警每一列的点击事件
    this.listClickEvt = function () {
        var that=this;
        //每一行点击弹出框事件
        $(".hWarnShowRes1").click(function () {
            var preIndex = that.currentPage * that.pageVolumn;
            var clickindex = $(".hWarnShowRes1").index(this)+preIndex;

            if ($("#hWarnShowRes" + hWarnResShowAllLastClickIndex + "Child").css("display") != "none") {
                $("#hWarnShowRes" + hWarnResShowAllLastClickIndex + "Child").hide();
                $("#hWarnShowRes" + hWarnResShowAllLastClickIndex + "Down").hide();
                $("#hWarnRes" + hWarnResShowAllLastClickIndex + "Delete").hide();
            }

            if ($("#hWarnShowRes" + clickindex + "Child").css("display") != "none") {

            } else {
                if (clickindex == hWarnResShowAllLastClickIndex) {
                    hWarnResShowAllLastClickIndex = -1;
                } else {
                    $("#hWarnShowRes" + clickindex + "Down").show();
                    $("#hWarnRes" + clickindex + "Delete").show();
                    $("#hWarnShowRes" + clickindex + "Child").show();
                    hWarnResShowAllLastClickIndex = clickindex;
                }
            }
        });
        //列表编辑
        $(".hWarnShowResDown").click(function () {
            //var index = $(".hWarnShowResDown").index(this);
            //var count = that.currentPage * that.pageVolumn + index;
            //R2.warningResultLayer = that.data[count].layerName.split("&");
            //warningResultAnalysis.init(R2.warningResultLayer);

            var index = $(".hWarnShowResDown").index(this);
            var count = that.currentPage * that.pageVolumn + index;
            window.qpd_yubaoDate = that.data[count].warningTime;
            window.qpd_yubaoDate1 = that.data[count].operateTime;
            R2.warningOriResultLayer = that.data[count].layerName.split("&");
            R2.warningResultLayer = that.data[count].layerName.split("&");
            R2.WarnLayerID = that.data[count].id;
            R2.CreateLayerR = that.data[count].analysisResult;
            R2.copyLayerD = that.data[count].defaultResult;
            R2.IsAnalysis = that.data[count].isAnalysis;
            R2.rainLayers = [];
            R2.rainLayers.push(that.data[count].rain15Layer);
            R2.rainLayers.push(that.data[count].rainTodayLayer);
            R2.rainLayers.push(that.data[count].rainHSumLayer);
            R2.rainLayers.push(that.data[count].rainHMaxLayer);
            if (R2.IsAnalysis == "是") {
                R2.warningResultLayer = [];
                R2.warningResultLayer.push(R2.CreateLayerR);
            }
            else {
                R2.CreateLayerR = R2.warningOriResultLayer[0];
            }
            warningResultAnalysis.init(R2.warningResultLayer);

        });
        //记录删除
        $(".hWarnDelete").click(function () {
            var index = $(".hWarnDelete").index(this);
            var count = that.currentPage * that.pageVolumn + index;
            var r = confirm("是否删除该条历史预警记录?");
            if (r == true) {
                $.post(baseUrl + "HistoryWarning/DeleteHistoryWarning", { id: that.data[count].id }, function (cbdata) {
                    //删除之后，重新查询，刷新列表
                    var postData = { stime: that.startTime, etime: that.endTime };
                    $.post(baseUrl + "HistoryWarning/QueryHistoryWarningByTime", postData, function (res) {
                        that.data = res;
                        that.addPageContent(that.currentPage);
                    });
                });
            }
        });
        //成果发布事件
        $(".hWarnShowResChildQPD").click(function () {
            var index = $(".hWarnShowResChildQPD").index(this);
            var count = that.currentPage * that.pageVolumn + index;
            if ($(this).hasClass("hWarnShowResChildYJChecked")) {
                $.post(baseUrl + "HistoryWarning/QueryAnalysisResult", { id: that.data[count].id }, function (cbdata) {
                    cbdata;
                    //createOfficeFile(cbdata.analysisResult, "QPD");
                    var file = new R2.Business.Download({filePath:cbdata.qpdRoad});
                });
            }
        });
        $(".hWarnShowResChildYJDJB").click(function () {
            var index = $(".hWarnShowResChildYJDJB").index(this);
            var count = that.currentPage * that.pageVolumn + index;
            if ($(this).hasClass("hWarnShowResChildYJChecked")) {
                $.post(baseUrl + "HistoryWarning/QueryAnalysisResult", { id: data[count].id }, function (cbdata) {
                    //createOfficeFile(cbdata.analysisResult, "YJDJB");
                    var file = new R2.Business.Download({ filePath: cbdata.townGradeRoad });
                });
            }
        });
        $(".hWarnShowResChildXZDJB").click(function () {
            var index = $(".hWarnShowResChildXZDJB").index(this);
            var count = that.currentPage * that.pageVolumn + index;
            if ($(this).hasClass("hWarnShowResChildYJChecked")) {
                $.post(baseUrl + "HistoryWarning/QueryAnalysisResult", { id: that.data[count].id }, function (cbdata) {
                    //createOfficeFile(cbdata.analysisResult, "XZDJB");
                    var file = new R2.Business.Download({ filePath: cbdata.xqGradeRoad });
                });
            }
        });
    };
    //页码禁用的灰色处理
    this.pageForbidden = function () {
        $(".hWarnSAPageControl").removeClass("hWarnSAPageControlGrey");
        if (this.currentPage == 0) {
            $("#hWarnSAFirstPage").addClass("hWarnSAPageControlGrey");
            $("#hWarnSAPrePage").addClass("hWarnSAPageControlGrey");
        }
        if (this.currentPage == this.totalPage-1) {
            $("#hWarnSANextPage").addClass("hWarnSAPageControlGrey");
            $("#hWarnSALastPage").addClass("hWarnSAPageControlGrey");
        }
    }
}

