/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/OpenLayers.js" />
/// <reference path="../global/global.js" />

//分析结果图层与行政区叠加结果

function XingzhengResult(gdb) {
    var list = this;
    this.grade = R2.warningGrade; //预警等级划分
    this.data = null;
    this.pageVolumn = 10;
    //进入行政区结果展示的初始化方法
    this.content =// '<div class="warBox1">' +
                                   //'<div class="wra1title">行政区结果展示' +
                                   //'</div>' +
                                   '<div class="wra1listContent"></div>' +
                                   '<div class="wra1bottom">' +
                                      '<div class="wra1pageCls wra1firstPage">第一页</div>' +
                                      '<div class="wra1pageCls wra1prePage">上一页</div>' +
                                      '<div class="wra1pageCls wra1currentPage">1/12</div>' +
                                      '<div class="wra1pageCls wra1nextPage">下一页</div>' +
                                      '<div class="wra1pageCls wra1lastPage">最后一页</div>' +
                                      '<div class="wra1pageCls wraReturn">返&nbsp;&nbsp;回</div>' +
                                   '</div>'+
                                   '<div class="wra1listContent"></div>';
                          // '</div>';
    this.init = function () {
        $(".warBox").hide();
        $(".warBox3").hide();
        $(".warBox1").show();
        $(".warBox1").animate({ "left": "0px", "opacity": "1" });
        $(".warBox1").html(this.content);
        var height = $(".wra1listContent").height();
        this.pageVolumn = Math.floor(height / 57);
        this.currentPage = 0;
        this.queryData();
        this.pageControl();
    };
    //查询图层结果数据
    this.queryData = function () {
        var that = this;
        //var gdb = "gdbp://MapGisLocal/JNDZRUBBISH/sfcls/Result9af85d4a-e9e4-406a-9223-a42622886b53";
        //$.post(baseUrl + "FactorQuery/GetByYJQHLayer", { gdb: gdb, pageIndex: that.currentPage, pageVolumn: that.pageVolumn }, function (cbdata) {
        //    if (cbdata && cbdata.TotalCount != 0) {
        //        that.data = cbdata.SFEleArray;
        //        that.totalPage = Math.ceil(cbdata.TotalCount/that.pageVolumn);
        //        that.addResultList(that.data);
        //        that.forbidden();
        //    }
        //});

        //假数据模拟
        (function (cbdata) {

            if (cbdata && cbdata.TotalCount != 0) {
                that.data = cbdata.SFEleArray;
                that.totalPage = Math.ceil(cbdata.TotalCount / that.pageVolumn);
                that.addResultList(that.data);
                that.forbidden();
            }

        })(xingzhengqu);
    };
    //添加结果列表
    this.addResultList = function (data) {
        $(".wra1listContent").html("");
        for (var i = 0; i < data.length; i++) {
            var gradeVal = parseFloat(data[i].AttValue[21]);
            var grade = 1;
            for (var j = 0; j < 4; j++) {
                if (gradeVal <= parseFloat(this.grade[j])) {
                    grade = 4 - j;
                    break;
                }
            }
            var count = this.currentPage * this.pageVolumn + (i + 1);
            var str = '<div class="wra1ListBox">' +
                               '<div class="wra1listCount">' + count + '</div>' +
                               '<div class="wra1listAddress"><span style="color:#555555">地区 ：</span> ' + data[i].AttValue[2] + '</div>' +
                             //  '<div class="wra1listAddCode">地区代码 ： ' + 350722 + '</div>' +
                               '<div class="wra1listYJ">' +
                                      '<div class="wra1listYJTip"><span style="color:#555555">预警等级 :</span></div>' +
                                      '<div class="wra1listYJGrade">' + grade + '</div>' +
                                       '<div class="wra1listYJTip2"> 级</div>' +
                               '</div>' +
                          '</div>';
            $(".wra1listContent").append(str);
            $(".wra1currentPage").html((this.currentPage+1)+"/"+this.totalPage);
            switch (grade) {
                case 3:
                    //$(".wra1ListBox").eq(i).css("background", "rgba(247,235,74,0.15)");
                    $(".wra1listYJGrade").eq(i).css("background-color", "#EBB31B");
                    break;
                case 4:
                    //$(".wra1ListBox").eq(i).css("background", "rgba(90,245,42,0.1)");
                    $(".wra1listYJGrade").eq(i).css("background-color", "#428F14");
                    break;
                case 2:
                    //$(".wra1ListBox").eq(i).css("background", "rgba(255,126,0,0.15)");
                    $(".wra1listYJGrade").eq(i).css("background-color", "#F3540D");
                    break;
                case 1:
                    //$(".wra1ListBox").eq(i).css("background-color", "#ECE7D9");
                    $(".wra1listYJGrade").eq(i).css("background-color", "#DA6566");
                    break;
            }
        }
    };
    this.totalPage = 0;
    this.currentPage = 0;
    //翻页操作
    this.pageControl = function () {
        var that = this;
        $(".wra1firstPage").click(function () {
            if (that.currentPage > 0) {
                that.currentPage = 0;
                that.queryData();
            }
        });
        $(".wra1prePage").click(function () {
            if (that.currentPage > 0) {
                that.currentPage--;
                that.queryData();
            }
        });
        $(".wra1nextPage").click(function () {
            if (that.currentPage < that.totalPage - 1) {
                that.currentPage++;
                that.queryData();
            }
        });
        $(".wra1lastPage").click(function () {
            if (that.currentPage < that.totalPage - 1) {
                that.currentPage = that.totalPage - 1;
                that.queryData();
            }
        });
        $(".wraReturn").click(function () {
            $(".warBox").show();
            $(".warBox3").show();
            $(".warBox1").hide();
        });
    };
    //翻页的灰色处理
    this.forbidden = function () {
        if (this.currentPage == 0) {
            $(".wra1firstPage,.wra1prePage").css("color", "#9c9c9c");
        } else {
            $(".wra1firstPage,.wra1prePage").css("color", "#000000");
        }
        if (this.currentPage == this.totalPage - 1) {
            $(".wra1nextPage,.wra1lastPage").css("color", "#9c9c9c");
        } else {
            $(".wra1nextPage,.wra1lastPage").css("color", "#000000");
        }
    }
}

//将分析结果图层与区叠加分析，制作预报词
function MakeYBC(gdb) {
    var obj = this;
    this.content = '<div class="wra2head">' +
                                  '<div class="wra2title">预报词制作</div>' +
                                  '<div class="wra2return">返回</div>' +
                            '</div>' +
                            '<div class="wra2TabTitle">请选择县（区）方位</div>' +
                            '<div class="wra2Table">' +
                                  '<div class="wra2row"><div class="wra2col1">县（区）</div><div class="wra2col2">预警区域</div></div>'+
                            '</div>'+
                            '<div class="wra2btn">生成预报词</div>' +
                            '<div class="wra2YBC">'+
                            '<div class="wra2TabTitle">编辑预报词</div>' +
                            '<textarea class="wra2bj"></textarea>' +
                            '<div class="wra2save">保 存</div>'+
                            "</div>";
    //初始化方法
    obj.init = function () {
        $(".warBox").hide();
        $(".warBox3").hide();
        $(".warBox1").show();
        $(".warBox1").animate({ "left": "0px", "opacity": "1" });
        $(".warBox1").html(this.content);
        obj.clickEvt();
        //obj.superXingzhengqu();
        obj.queryEachQu(gdb);
        R2.ybcContent = null;
    };
    //obj.ybcContent = null;
    //页面点击按钮事件
    obj.clickEvt = function () {
        $(".wra2return").click(function () {
            
            $(".warBox").show();
            $(".warBox3").show();
            $(".warBox1").hide();

        });
        $(".wra2btn").click(function () {
            $(".wra2YBC").show();
            var str = obj.getYBC();
            $(".wra2bj").val(str);
            //obj.ybcContent = str;
        });
        //预报词保存
        $(".wra2save").click(function () {
            if ($(".wra2bj").val() != "") {
                R2.ybcContent = $(".wra2bj").val();
                $("#createJpg").removeClass("wrafbJpgdisable");
                $("#createJpg").addClass("wrafbJpg");
                $("#scanJpg").removeClass("wrafbJpgdisable");
                $("#scanJpg").addClass("wrafbJpg");
                $(".wrafb1").css("opacity",1);
            }
            else {
                R2.ybcContent = null;
                $("#createJpg").removeClass("wrafbJpg");
                $("#createJpg").addClass("wrafbJpgdisable");
                $("#scanJpg").removeClass("wrafbJpg");
                $("#scanJpg").addClass("wrafbJpgdisable");
                $(".wrafb1").css("opacity", 0.4);
            }
            alert("保存成功!");
        });
    };
    //与行政区的区进行叠加分析，得到每个区的预警等级
    //obj.superXingzhengqu = function () {
    //    top.waitPage.show("预警图层正在与与行政区进行叠加...");
    //    $.post(baseUrl + "FactorQuery/SuperPostionYJandXian", { gdb: gdb}, function (cbdata) {
    //        //得到区的预警等级图层
    //        cbdata;
    //        obj.queryEachQu(cbdata);
    //    });
    //}
    //查询每个区的预警等级
    obj.queryEachQu = function (gdbLayer) {
        $.post(baseUrl + "FactorQuery/GetByYJXian", { gdb: gdbLayer }, function (cbdata) {
            top.waitPage.hide();
            cbdata;
            obj.getQuGrade(cbdata);
        });
    }
    obj.grade=R2.warningGrade;
    obj.data=null;
    //根据查询到得值，获得每个区的最大等级
    obj.getQuGrade = function (data) {
        data;
        data = ResetAttr(data);
        var resultArr = [];
        for (var i = 0; i < data.TotalCount; i++) {
            for (var j = 0; j < resultArr.length; j++) {
                if (resultArr[j].AttValue[3] == data.SFEleArray[i].AttValue[3]) {
                    break;
                }
            }
            if (j == resultArr.length) {
                if (parseInt(data.SFEleArray[i].AttValue[1]) >= parseInt(obj.grade[1])) {
                    resultArr.push(data.SFEleArray[i]);
                }
            } else {
                if (parseInt(data.SFEleArray[i].AttValue[1]) > parseInt(resultArr[j].AttValue[1])) {
                    resultArr.splice(j, 1, data.SFEleArray[i]);
                }
            }
        }
        obj.data=resultArr;
        obj.addQu(resultArr);
    };
    //将每个3级以上区的预警添加到预报词列表
    obj.addQu = function (data) {
        for (var i = 0; i < data.length; i++) {
            var str = '<div class="wra2row"><div class="wra2col1">' + data[i].AttValue[3] + '</div><div class="wra2col2">' +
                               '<select>' +
                                      '<option value="全部">全部</option>' +
                                      '<option value="东部">东部</option>' +
                                      '<option value="东北部">东北部</option>' +
                                      '<option value="北部">北部</option>' +
                                      '<option value="西北部">西北部</option>' +
                                      '<option value="西部">西部</option>' +
                                      '<option value="西南部">西南部</option>' +
                                      '<option value="南部">南部</option>' +
                                      '<option value="东南部">东南部</option>' +
                               '</select>' +
                          '</div></div>';
            $(".wra2Table").append(str);
        }
        $(".wra2col2 select").change(function () {
            $(".wra2btn").trigger("click");
        });
    };
    //根据用户对每个区的选择，提取出预报词信息
    obj.getYBC = function () {
        var grade3 = '', grade2 = '', grade1 = '';
        var info=obj.data;
        var grade = obj.grade;
        if (info == null) return;
        for (var i = 0; i < info.length; i++) {
            if (parseInt(info[i].AttValue[1]) > parseInt(grade[2])) {
                grade1 += info[i].AttValue[3] + $(".wra2col2 select").eq(i).val() + ",";
            } else if (parseInt(info[i].AttValue[1]) > parseInt(grade[1])) {
                grade2 += info[i].AttValue[3] + $(".wra2col2 select").eq(i).val() + ",";
            } else {
                grade3 += info[i].AttValue[3] + $(".wra2col2 select").eq(i).val() + ",";
            }
        }
        grade3 =grade3==''?'':grade3+ "降雨诱发的地质灾害可能性为三级；";
        grade2 = grade2 == '' ? '' : grade2 + "降雨诱发的地质灾害可能性为二级；";
        grade1 = grade1 == '' ? '' : grade1 + "降雨诱发的地质灾害可能性为一级；";
        
        var result = '根据未来24小时降雨预报及前期实际降雨分析,' + grade1 + grade2 + grade3 + "请当地政府及相关单位做好地质灾害防范工作";
        return result;
    }
}
function ResetAttr(data) {
    data;
    if (data.AttStruct.FldNumber > 7) {
        var count = (data.AttStruct.FldNumber - 7) / 3;
        var Index = data.AttStruct.FldNumber - 2;
        for (var i = 0; i < data.TotalCount; i++) {
            data.SFEleArray[i].AttValue[2] = data.SFEleArray[i].AttValue[Index-1];
            data.SFEleArray[i].AttValue[3] = data.SFEleArray[i].AttValue[Index];
        }
        return data;
    }
    else {
        return data;
    }
}