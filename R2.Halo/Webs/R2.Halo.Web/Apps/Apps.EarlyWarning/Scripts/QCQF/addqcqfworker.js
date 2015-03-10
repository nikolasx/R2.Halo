/// <reference path="../Libs/OpenLayers.js" />
/// <reference path="../Libs/jquery-1.7.1.min.js" />
$(function () {
    //初次进入加载
    var gd = new R2.Business.GetFirstdata();
    $(".qcqf_save").click(addqcqfcheckworker);
    $(".qcqf_query_btn").click(function () {
        if ($("#txtValue").val() != "输入姓名或地理位置或威胁对象") {
            var key = $("#txtValue").val();
            var gk = new R2.Business.GetdataByKey({ keyword: key });
        }
        else {
            var gd2 = new R2.Business.GetFirstdata();
        }
    })
    $("#import_qcqf").click(importQcqf)
})

function addqcqfcheckworker() {
    if ($("#qcqf_name").val() != "") {
        if ($("#editor_qcqf").hasClass("noeditorOperating")) {  //录入
            var worker = {};
            worker.Region = $("#qcqf_xian").find("option:selected").text();
            worker.Location = $("#qcqf_location").val();
            worker.Threat = $("#qcqf_threat").val();
            worker.Name = $("#qcqf_name").val();
            worker.TelePhone = $("#qcqf_tele").val();
            worker.Beizhu = $("#qcqf_bz").val();
            worker.DisaNam = $("#qcqf_disaname").val();
            $.post(baseUrl + "QcqfWorker/AddQcqfCheckWorker", { "worker": JSON.stringify(worker) }, function (data) {
                if (data == "success") {
                    alert("添加成功");
                }
            });
        }
        else {    //编辑
            var worker = {};
            worker.ID = $("#qcqf_txt_id").val();
            worker.Region = $("#qcqf_xian").find("option:selected").text();
            worker.Location = $("#qcqf_location").val();
            worker.Threat = $("#qcqf_threat").val();
            worker.Name = $("#qcqf_name").val();
            worker.TelePhone = $("#qcqf_tele").val();
            worker.Beizhu = $("#qcqf_bz").val();
            worker.DisaNam = $("#qcqf_disaname").val();
            $.post(baseUrl + "QcqfWorker/UpdataQcqf", { "qcqf": JSON.stringify(worker) }, function (data) {
                if (data == "success") {
                    alert("编辑修改成功");
                }
                else {
                    alert("编辑失败");
                }
            });
        }
    }
    else {
        alert("监测姓名不能为空！");
    }
}

////初次进入加载
R2.Business.GetFirstdata = OpenLayers.Class({
    pageSize: 10,
    pageIndex: 1,
    pageTotal: 1,
    totalItem:0,
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.GetPage();
        GetAlldata(this.pageSize, this.pageIndex);
        this.clickEvent();
        this.EditorQcqf();
    },
    GetPage: function () {
        var that = this;
        $.post(baseUrl + "QcqfWorker/GetAllDisaNum", function (data) {
            that.totalItem = data;
            that.pageTotal = Math.ceil(data / that.pageSize);
            that.pageInfoCss();
        });
    },
    clickEvent: function () {
        var that = this;
        clearClick();
        $(".firstPage").live("click", function () {
            if (parseInt(that.pageIndex) == 1) {
                return false;
            } else {
                that.pageIndex = 1;
                that.pageInfoCss();
                GetAlldata(that.pageSize, that.pageIndex);
            }
        });
        $(".PrePage").live("click", function () {
            if (parseInt(that.pageIndex) <= 1) {
                return false;
            } else {
                that.pageIndex--;
                that.pageInfoCss();
                GetAlldata(that.pageSize, that.pageIndex);
            }
        });
        $(".nextPage").live("click", function () {
            if (parseInt(that.pageIndex) >= parseInt(that.pageTotal)) {
                return false;
            } else {
                that.pageIndex++;
                that.pageInfoCss();
                GetAlldata(that.pageSize, that.pageIndex);
            }
        });
        $(".lastPage").live("click", function () {
            if (parseInt(that.pageIndex) >= parseInt(that.pageTotal)) {
                return false;
            } else {
                that.pageIndex = that.pageTotal;
                that.pageInfoCss();
                GetAlldata(that.pageSize, that.pageIndex);
            }
        });

        $("#btnGotopage").live("click", function () {
            var goPage = $("#pageIndex").val();
            try {
                goPage = parseInt(goPage);
                if (goPage <= that.pageTotal && goPage > 0) {
                    that.pageIndex = goPage;
                    that.pageInfoCss();
                    GetAlldata(that.pageSize, that.pageIndex);
                }
            }
            catch (e) {
                alert("请填写正确页码！");
                return;
            }
        });
    },

    pageInfoCss:function() {
    var totalPage = this.pageTotal;
    var $current = $(".currentPage");
    $(".allPage").html("共查询到" + this.totalItem.toString() + "条数据")
    $current.html(this.pageIndex.toString() + "/" + totalPage.toString());
    //////控制页码信息
    if (this.pageIndex == 1) {
        $(".firstPage").addClass("pageHidden_sqir");
        $(".PrePage").addClass("pageHidden_sqir");
        $(".nextPage").removeClass("pageHidden_sqir");
        $(".lastPage").removeClass("pageHidden_sqir");
    }
    if (this.pageIndex == totalPage) {
        $(".firstPage").removeClass("pageHidden_sqir");
        $(".PrePage").removeClass("pageHidden_sqir");
        $(".nextPage").addClass("pageHidden_sqir");
        $(".lastPage").addClass("pageHidden_sqir");
    }
    if (this.pageIndex == totalPage && this.pageIndex == 1) {
        $(".firstPage").addClass("pageHidden_sqir");
        $(".PrePage").addClass("pageHidden_sqir");
        $(".nextPage").addClass("pageHidden_sqir");
        $(".lastPage").addClass("pageHidden_sqir");
    }
    if (this.pageIndex < totalPage && this.pageIndex > 1) {
        $(".firstPage").removeClass("pageHidden_sqir");
        $(".PrePage").removeClass("pageHidden_sqir");
        $(".nextPage").removeClass("pageHidden_sqir");
        $(".lastPage").removeClass("pageHidden_sqir");
    }
    },

    //操作
    EditorQcqf: function () {
        var that = this;
        //删除
        $(".qcqf_td_delete").die("click");
        $(".qcqf_td_delete").live("click", function () {
            var con = confirm("确定需要删除该记录吗？");
            if (con == true) {
                var id = $(this).parent().parent().find(".qcqf_id").html();
                $.post(baseUrl + "QcqfWorker/DeleteById", { "id": id }, function (data) {
                    if (data == "success") {
                        alert("删除成功！");
                        GetdataByKey(that.keyword, that.pageSize, that.pageIndex);
                    }
                });
            }
        })

        //编辑
        $(".qcqf_td_editor").die("click")
        $(".qcqf_td_editor").live("click", function () {
            var id = $(this).parent().parent().find(".qcqf_id").html();
            $.post(baseUrl + "QcqfWorker/GetdataById", { "id": id }, function (data) {
                $("#qcqf_txt_id").val(data.ID)
                var idx = getSelectIndex(data.Region);
                $("#qcqf_xian").get(0).selectedIndex = idx;
                $("#qcqf_location").val(data.Location);
                $("#qcqf_threat").val(data.Threat);
                $("#qcqf_name").val(data.Name);
                $("#qcqf_tele").val(data.TelePhone);
                $("#qcqf_bz").val(data.Beizhu);
                $("#qcqf_disaname").val(data.DisaNam);
                editorCss();
            })
        })
    },

})

function GetAlldata(pageSize, pageIndex) {
    $.post(baseUrl + "QcqfWorker/GetAllDisaData", {"pageSize": pageSize, "pageIndex": pageIndex }, function (data) {
        if (data.length > 0) {
            var option = "";
            for (var i = 0; i < data.length; i++) {
                option += '<div class="qcqf_tr" >' +
                        '<div class="qcqf_id" style="display:none" >' + data[i].ID + '</div>' +
                        '<div class="qcqf_td" style="width:50px;">' + (pageSize * (pageIndex - 1) + i + 1) + '</div>' +
                        '<div class="qcqf_td">' + data[i].Name + '</div>' +
                        '<div class="qcqf_td" style="width:310px;">' + data[i].Location + '</div>' +
                        '<div class="qcqf_td">' + data[i].DisaNam + '</div>' +
                        '<div class="qcqf_td2">' +
                            '<div class="qcqf_td_delete">删除</div>' +
                            '<div class="qcqf_td_editor">编辑</div>' +
                        '</div>' +
                    '</div>';
            }
            $("#qcqf_show_data_tr").html(option);
        }
    })
}

//关键字查询
R2.Business.GetdataByKey = OpenLayers.Class({
    pageSize: 10,
    pageIndex: 1,
    pageTotal: 1,
    totalItem: 0,
    keyword:"",
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.GetPage();
        GetdataByKey(this.keyword, this.pageSize, this.pageIndex);
        this.clickEvent();
        this.EditorQcqf();
    },
    GetPage: function () {
        var that = this;
        $.post(baseUrl + "QcqfWorker/GetDataNumByKey", { "key": that.keyword }, function (data) {
            that.totalItem = data;
            that.pageTotal = Math.ceil(data / that.pageSize);
            that.pageInfoCss();
        });
    },
    clickEvent: function () {
        var that = this;
        clearClick();
        $(".firstPage").live("click", function () {
            if (parseInt(that.pageIndex) == 1) {
                return false;
            } else {
                that.pageIndex = 1;
                that.pageInfoCss();
                GetdataByKey(that.keyword, that.pageSize, that.pageIndex);
            }
        });
        $(".PrePage").live("click", function () {
            if (parseInt(that.pageIndex) <= 1) {
                return false;
            } else {
                that.pageIndex--;
                that.pageInfoCss();
                GetdataByKey(that.keyword, that.pageSize, that.pageIndex);
            }
        });
        $(".nextPage").live("click", function () {
            if (parseInt(that.pageIndex) >= parseInt(that.pageTotal)) {
                return false;
            } else {
                that.pageIndex++;
                that.pageInfoCss();
                GetdataByKey(that.keyword, that.pageSize, that.pageIndex);
            }
        });
        $(".lastPage").live("click", function () {
            if (parseInt(that.pageIndex) >= parseInt(that.pageTotal)) {
                return false;
            } else {
                that.pageIndex = that.pageTotal;
                that.pageInfoCss();
                GetdataByKey(that.keyword, that.pageSize, that.pageIndex);
            }
        });

        $("#btnGotopage").live("click", function () {
            var goPage = $("#pageIndex").val();
            try {
                goPage = parseInt(goPage);
                if (goPage <= that.pageTotal && goPage > 0) {
                    that.pageIndex = goPage;
                    that.pageInfoCss();
                    GetdataByKey(that.keyword, that.pageSize, that.pageIndex);
                }
            }
            catch (e) {
                alert("请填写正确页码！");
                return;
            }
        });
    },
    pageInfoCss: function () {
        var totalPage = this.pageTotal;
        var $current = $(".currentPage");
        $(".allPage").html("共查询到" + this.totalItem.toString() + "条数据")
        $current.html(this.pageIndex.toString() + "/" + totalPage.toString());
        //////控制页码信息
        if (this.pageIndex == 1) {
            $(".firstPage").addClass("pageHidden_sqir");
            $(".PrePage").addClass("pageHidden_sqir");
            $(".nextPage").removeClass("pageHidden_sqir");
            $(".lastPage").removeClass("pageHidden_sqir");
        }
        if (this.pageIndex == totalPage) {
            $(".firstPage").removeClass("pageHidden_sqir");
            $(".PrePage").removeClass("pageHidden_sqir");
            $(".nextPage").addClass("pageHidden_sqir");
            $(".lastPage").addClass("pageHidden_sqir");
        }
        if (this.pageIndex == totalPage && this.pageIndex == 1) {
            $(".firstPage").addClass("pageHidden_sqir");
            $(".PrePage").addClass("pageHidden_sqir");
            $(".nextPage").addClass("pageHidden_sqir");
            $(".lastPage").addClass("pageHidden_sqir");
        }
        if (this.pageIndex < totalPage && this.pageIndex > 1) {
            $(".firstPage").removeClass("pageHidden_sqir");
            $(".PrePage").removeClass("pageHidden_sqir");
            $(".nextPage").removeClass("pageHidden_sqir");
            $(".lastPage").removeClass("pageHidden_sqir");
        }
    },
    //操作
    EditorQcqf:function()
    {
        var that = this;
        //删除
        $(".qcqf_td_delete").die("click");
        $(".qcqf_td_delete").live("click", function () {
            var con = confirm("确定需要删除该记录吗？");
            if (con == true) {
                var id = $(this).parent().parent().find(".qcqf_id").html();
                $.post(baseUrl + "QcqfWorker/DeleteById", { "id": id }, function (data) {
                    if (data == "success") {
                        alert("删除成功！");
                        GetdataByKey(that.keyword, that.pageSize, that.pageIndex);
                    }
                });
            }
        })

        //编辑
        $(".qcqf_td_editor").die("click")
        $(".qcqf_td_editor").live("click",function () {
            var id = $(this).parent().parent().find(".qcqf_id").html();
            $.post(baseUrl + "QcqfWorker/GetdataById", { "id": id }, function (data) {
                $("#qcqf_txt_id").val(data.ID)
                var idx = getSelectIndex(data.Region);
                $("#qcqf_xian").get(0).selectedIndex = idx;
                $("#qcqf_location").val(data.Location);
                $("#qcqf_threat").val(data.Threat);
                $("#qcqf_name").val(data.Name);
                $("#qcqf_tele").val(data.TelePhone);
                $("#qcqf_bz").val(data.Beizhu);
                editorCss();
            })
        })
    },
})

//关键字查询
function GetdataByKey(key,pageSize, pageIndex) {
    $.post(baseUrl + "QcqfWorker/GetDataByKey", {"key":key, "pageSize": pageSize, "pageIndex": pageIndex }, function (data) {
        if (data.length > 0) {
            var option = "";
            for (var i = 0; i < data.length; i++) {
                option += '<div class="qcqf_tr" >' +
                        '<div class="qcqf_id" style="display:none" >' + data[i].ID + '</div>' +
                        '<div class="qcqf_td" style="width:50px;">' + (pageSize * (pageIndex - 1) + i + 1) + '</div>' +
                        '<div class="qcqf_td">' + data[i].Name + '</div>' +
                        '<div class="qcqf_td" style="width:310px;">' + data[i].Location + '</div>' +
                        '<div class="qcqf_td">' + data[i].DisaNam + '</div>' +
                        '<div class="qcqf_td2">' +
                            '<div class="qcqf_td_delete">删除</div>' +
                            '<div class="qcqf_td_editor">编辑</div>' +
                        '</div>' +
                    '</div>';
            }
            $("#qcqf_show_data_tr").html(option);
        }
    })
}
//die五个事件 上一页 下一页。。。。
function clearClick() {
    $(".firstPage").die("click");
    $(".PrePage").die("click");
    $(".nextPage").die("click");
    $(".lastPage").die("click");
    $(".btnGotopage").die("click");
}

//编辑样式
function editorCss() {
    $("#import_qcqf").css("background-color", "white");
    $("#import_qcqf").html("录入");
    $("#editor_qcqf").removeClass("noeditorOperating");
}
//录入样式
function importCss() {
    $("#import_qcqf").css("background-color", "#CAD8E4");
    $("#import_qcqf").html("正在录入");
    $("#editor_qcqf").addClass("noeditorOperating");
}
//录入事件
function importQcqf() {
    if (!$("#editor_qcqf").hasClass("noeditorOperating")) {
        $("#qcqf_txt_id").val("");
        //$("#qcqf_xian").val("");
        $("#qcqf_location").val("");
        $("#qcqf_threat").val("");
        $("#qcqf_name").val("");
        $("#qcqf_tele").val("");
        $("#qcqf_bz").val("");
        $("#qcqf_disaname").val("");
    }
    importCss();
}

function getSelectIndex(value) {
    var index = 0;
    switch (value) {
        case "市辖区":
            index = 0;
            break;
        case "高新区":
            index = 1;
            break;
        case "历下区":
            index = 2;
            break;
        case "市中区":
            index = 3;
            break;
        case "槐荫区":
            index = 4;
            break;
        case "天桥区":
            index = 5;
            break;
        case "历城区":
            index = 6;
            break;
        case "长清区":
            index = 7;
            break;
        case "平阴县":
            index = 8;
            break;
        case "济阳县":
            index = 9;
            break;
        case "商河县":
            index = 10;
            break;
        case "章丘市":
            index = 11;
            break;
        case "国土系统":
            index = 12;
            break;
    }
    return index;
}




