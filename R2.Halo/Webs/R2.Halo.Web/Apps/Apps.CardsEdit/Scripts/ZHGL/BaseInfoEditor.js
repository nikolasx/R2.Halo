/// <reference path="../Libs/jquery-1.7.1.min.js" />

var pageIndex = 1;
var pageSize = 12;
var pageTotal = 0;
var totalItem = 0;
var bie_Keyword = "";
var bie_disaType = "";
var bie_disaGrade = "";
var bie_bool = true;
$(function () {
    //bie_disaGrade = checkBoxConInfo("#dangerClassDmtx");
    //bie_disaType = checkBoxConInfo("#bit_zhxl");
    bie_disaType = checkBoxConInfoLx("#bit_zhxl");
    bie_disaGrade = checkBoxConInfoDj("#dangerClassDmtx");
    GetAlldata(bie_disaType, bie_disaGrade);
    DoFirstselect();

});
//初始入口
function GetAlldata(type,leve) {
    $.post(baseUrl + "BaseInfoEditor/GetallDisCount", { "DisaType": type, "DisaGrade": leve }, function (data) {
        bie_bool = true;
        totalItem = data;
        pageTotal = Math.ceil(totalItem / pageSize);
        pageIndex = 1;
        $.post(baseUrl + "BaseInfoEditor/GetallDis", { "DisaType": type, "DisaGrade": leve,"pageSize":pageSize,"pageIndex":pageIndex}, function (d) {
            if (d.length < 1) {
                alert("没有符合条件的内容！");
                ClearInfoData();
                return false;
            }
            var shpw = new R2.Business.layResult({data:d});
            pageInfoCss();
            pageMana();

        });
    })
};

function checkBoxConInfoDj(id) {
    var conStr = $(".checkBox1:gt(0):checked").map(function () {
        return $(this).val();
    }).get().join(",");
    $("#xqdjdxDmtxqx").click(function () {
        $(".checkBox1:gt(0)").attr("checked", this.checked);
    })
    $(".checkBox1:gt(0)").click(function () {
        conStr = "";
        conStr = $(".checkBox1:gt(0):checked").map(function () {
            return $(this).val();
        }).get().join(",");
        if (conStr == "小型,中型,大型,特大型") {
            $("#xqdjdxDmtxqx").attr("checked", "checked");
        } else {
            $("#xqdjdxDmtxqx").removeAttr("checked");
        }
    })
    return conStr;
};
function checkBoxConInfoLx(id) {
    var conStr = $(".checkBox2:gt(0):checked").map(function () {
        return $(this).val();
    }).get().join(",");
    $("#xqdjtdxDmtxqx").click(function () {
        $(".checkBox2:gt(0)").attr("checked", this.checked);
    })
    $(".checkBox2:gt(0)").click(function () {
        conStr = "";
        conStr = $(".checkBox2:gt(0):checked").map(function () {
            return $(this).val();
        }).get().join(",");
        if (conStr == "滑坡,崩塌,泥石流,地面塌陷,地面沉降,地裂缝") {
            $("#xqdjtdxDmtxqx").attr("checked", "checked");
        } else {
            $("#xqdjtdxDmtxqx").removeAttr("checked");
        }
    })
    return conStr;
};
function checkBoxConInfo(id) {
    $("#xqdjdxDmtxqx").click(function () {
        $(id + " input[type=checkbox]:checked")
    })

    var conStr = "";
    conStr = $(id + " input[type=checkbox]:checked").map(function () {
        return $(this).val();
    }).get().join(",");
    return conStr;
};

//翻页样式控制
function pageInfoCss() {
    var totalPage = pageTotal;
    var $current = $(".currentPage");
    $(".allPage").html("共查询到" + totalItem.toString() + "条数据")
    $current.html(pageIndex.toString() + "/" + totalPage.toString());
    //////控制页码信息
    if (pageIndex == 1) {
        $(".firstPage").addClass("pageHidden_sqir");
        $(".PrePage").addClass("pageHidden_sqir");
        $(".nextPage").removeClass("pageHidden_sqir");
        $(".lastPage").removeClass("pageHidden_sqir");
    }
    if (pageIndex == totalPage) {
        $(".firstPage").removeClass("pageHidden_sqir");
        $(".PrePage").removeClass("pageHidden_sqir");
        $(".nextPage").addClass("pageHidden_sqir");
        $(".lastPage").addClass("pageHidden_sqir");
    }
    if (pageIndex == totalPage && pageIndex == 1) {
        $(".firstPage").addClass("pageHidden_sqir");
        $(".PrePage").addClass("pageHidden_sqir");
        $(".nextPage").addClass("pageHidden_sqir");
        $(".lastPage").addClass("pageHidden_sqir");
    }
    if (pageIndex < totalPage && pageIndex > 1) {
        $(".firstPage").removeClass("pageHidden_sqir");
        $(".PrePage").removeClass("pageHidden_sqir");
        $(".nextPage").removeClass("pageHidden_sqir");
        $(".lastPage").removeClass("pageHidden_sqir");
    }
};
//结果展示
R2.Business.layResult = OpenLayers.Class({
    data: null,
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        ClearInfoData();
        this.addHtml();
        $(".dataline:odd").addClass("datalineOdd");
        $(".dataline:even").addClass("datalineEven");
    },
    addHtml: function () {
        var html='';
        for (var i = 0; i < this.data.length; i++) {
            html+='<div class="dataline">'+
                '<div class="dataline_class" style=" width:50px;">' + (i+(pageIndex-1)*pageSize+1)+ '</div>' +
                '<div class="dataline_class" style=" width:130px;">' + this.data[i].统一编号 + '</div>' +
                '<div class="dataline_class" style=" width:240px;"> ' + this.data[i].名称 + '</div>' +
                '<div class="dataline_class" style=" width:240px;">' + this.data[i].地理位置 + '</div>' +
                '<div class="dataline_class" style=" width:140px;">' + this.getDisaTypes(this.data[i].灾害类型) + '</div>' +
                '<div class="dataline_class" style="border-right:1px solid #CAD8E4;width:143px;">'+
                    '<div class="btndelete">删除</div>'+
                    '<div class="btneditor"><a href="#" style="text-decoration:none;">编辑</a></div>'+
                '</div>'+
            '</div>';
        }
        $("#infodata").html(html);
    },
    getDisaTypes: function (s) {
        var val = "";
    switch (s) {
        case "00":
            val = "斜坡";
            break;
        case "01":
            val = "滑坡";
            break;
        case "02":
            val = "崩塌";
            break;
        case "03":
            val = "泥石流";
            break;
        case "04":
            val = "地面塌陷";
            break;
        case "05":
            val = "地面沉降";
            break;
        case "06":
            val = "地裂缝";
            break;
        default:
            val = "";
            break;
        }
        return val;
        }
});
//查询
function DoFirstselect() {
    $("#Submit").unbind("click");
    $("#Submit").live("click",function () {
        bie_bool = false;
        bie_Keyword = $("#txtValue").val();
        if (bie_Keyword == "输入灾害点编号或名称") {
            bie_bool = true;
            if (checkBoxConInfoDj("#dangerClassDmtx") == "") {
                alert("请选择灾害规模类型！")
                return false;
            }
            if (checkBoxConInfoLx("#bit_zhxl") == "") {
                alert("请选择灾害类型！")
                return false;
            }
            pageIndex = 1;
            bie_disaType = checkBoxConInfoLx("#bit_zhxl");
            bie_disaGrade = checkBoxConInfoDj("#dangerClassDmtx");
            bie_bool = true;
            Search();
            return false;

        } else { 
            if (checkBoxConInfoDj("#dangerClassDmtx") == "") {
                alert("请选择灾害规模类型！")
                return false;
            }
            if (checkBoxConInfoLx("#bit_zhxl") == "") {
                alert("请选择灾害类型！")
                return false;
            }
            bie_disaType = checkBoxConInfoLx("#bit_zhxl");
            bie_disaGrade = checkBoxConInfoDj("#dangerClassDmtx");
            $.post(baseUrl + "BaseInfoEditor/GetDisaCountByCondition", { "key": bie_Keyword, "DisaType": bie_disaType, "DisaGrade": bie_disaGrade }, function (data) {
                totalItem = data;
                pageTotal = Math.ceil(totalItem / pageSize);
                pageIndex = 1;
                $.post(baseUrl + "BaseInfoEditor/GetDisaByCondition", { "key": bie_Keyword, "DisaType": bie_disaType, "DisaGrade": bie_disaGrade, "pageSize": pageSize, "pageIndex": pageIndex }, function (d) {
                    if (d.length < 1) {
                        alert("没有符合条件的内容！");
                        ClearInfoData();
                        return false;
                    }
                    var shpw = new R2.Business.layResult({ data: d });
                    pageInfoCss();
                    //pageMana();

                });
            })
        }
        })
        
    
}
//翻页查询
function Search() {
    if (bie_bool) {
        $.post(baseUrl + "BaseInfoEditor/GetallDisCount", { "DisaType": bie_disaType, "DisaGrade": bie_disaGrade }, function (data) {
            totalItem = data;
            pageTotal = Math.ceil(totalItem / pageSize);
            $.post(baseUrl + "BaseInfoEditor/GetallDis", { "DisaType": bie_disaType, "DisaGrade": bie_disaGrade, "pageSize": pageSize, "pageIndex": pageIndex }, function (d) {
                if (d.length < 1) {
                    alert("没有符合条件的内容！");
                    ClearInfoData();
                    return false;
                }
                var shpw = new R2.Business.layResult({ data: d });
                pageInfoCss();

            });
        })
    }
    else if (!bie_bool) {
        if (isAccee()) {
            $.post(baseUrl + "BaseInfoEditor/GetDisaCountByCondition", { "key": bie_Keyword, "DisaType": bie_disaType, "DisaGrade": bie_disaGrade }, function (data) {
                totalItem = data;
                pageTotal = Math.ceil(totalItem / pageSize);
                $.post(baseUrl + "BaseInfoEditor/GetDisaByCondition", { "key": bie_Keyword, "DisaType": bie_disaType, "DisaGrade": bie_disaGrade, "pageSize": pageSize, "pageIndex": pageIndex }, function (d) {
                    if (d.length < 1) {
                        alert("没有符合条件的内容！");
                        ClearInfoData();
                        return false;
                    }
                    var shpw = new R2.Business.layResult({ data: d });
                    pageInfoCss();

                });
            })
        }
    }

    
}
//翻页
function pageMana() {
    $(".firstPage").live("click", function () {
        if (parseInt(pageIndex) == 1) {
            return false;
        } else {
            pageIndex = 1;
            Search();
        }
    });
    $(".PrePage").live("click", function () {
        if (parseInt(pageIndex) <= 1) {
            return false;
        } else {
            pageIndex--;
            Search();
        }
    });
    $(".nextPage").live("click", function () {
        if (parseInt(pageIndex) >=parseInt(pageTotal)) {
            return false;
        } else {
            pageIndex++;
            Search();
        }
    });
    $(".lastPage").live("click", function () {
        if (parseInt(pageIndex) >= parseInt(pageTotal)) {
            return false;
        } else {
            pageIndex = pageTotal;
            Search();
        }
    });

    $("#btnGotopage").live("click",function () {
        var goPage = $("#pageIndex").val();
        try
        {
            goPage=parseInt(goPage);
            if(goPage<=pageTotal && goPage>0)
            {
                pageIndex=goPage;
                Search();
            }
        }
        catch(e)
        {
            alert("请填写正确页码！");
            return;
        }
    });

    //删除
    $(".btndelete").live("click", function (evt) {
        var locaTybh = $(this).parent().parent().find(".dataline_class").eq(1)[0].innerHTML;
        var locaName = $(this).parent().parent().find(".dataline_class").eq(2)[0].innerHTML;
        var com = confirm("你确定要删除名称为" + locaName + "地质灾害信息吗？")
        if (com == false) { return; }
        $.post(baseUrl + "BaseInfoEditor/DeletDisaByNameAndID", { "id": locaTybh, "name": locaName }, function (data) {
            if (data > 0) {
                alert("删除成功！")
                Search();
            }
            else {
                alert("删除失败!");
            }
        })
    })
    //编辑
    $(".btneditor").live("click",function (evt) {
        var locaTybh = $(this).parent().parent().find(".dataline_class").eq(1)[0].innerHTML;
        var disasterCode = locaTybh.toString().substring(6, 8);
        switch (disasterCode) {
            //滑坡
            case "01":
                top.fullPanel2.showByIFrame(baseUrl + "InfoEdit/EditLandSlide?landSlideId=" + locaTybh);
                break;
                //崩塌
            case "02":
                top.fullPanel2.showByIFrame(baseUrl + "InfoEdit/EditCollapse?collapseId=" + locaTybh);
                break;
            case "03":
                top.fullPanel2.showByIFrame(baseUrl + "InfoEdit/EditMudFlow?mudFlowId=" + locaTybh);
                break;
            case "04":
                top.fullPanel2.showByIFrame(baseUrl + "InfoEdit/EditGroundSubside?groundSubsideId=" + locaTybh);
                break;
            case "05":
                top.fullPanel2.showByIFrame(baseUrl + "InfoEdit/EditGroundSettle?groundSettleId=" + locaTybh);
                break;
            case "06":
                top.fullPanel2.showByIFrame(baseUrl + "InfoEdit/EditLandCrack?landCrackId=" + locaTybh);
                break;
            default:
                break;

        }
    })

}

function deleteFunction(tybh, name) {
   
    var r = confirm("是否要删除名称为'" + name + "'的防灾预案信息？");
    if (r == false) { return; }
    var data = {
        "localtybh": tybh,
        "citynum": basecityNum,
    };
    //var url = baseUrl + "BaseInfoEditor/deleteFzyaInfo";
    //$.post(url, data, deleteFzyaInfoCallBack);
}
function ClearInfoData() {
    $("#infodata").html("");
    $(".allPage").html("");
    $(".currentPage").html("");
}

function isAccee() {
    if (bie_Keyword == "") {
        return false;
    }
    if (bie_disaType == "") {
        return false;
    }
    if (bie_disaGrade == "") {
        return false;
    }
    return true;
}