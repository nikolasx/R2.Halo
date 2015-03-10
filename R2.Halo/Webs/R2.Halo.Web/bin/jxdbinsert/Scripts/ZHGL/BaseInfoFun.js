/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/jquery.MultiFile.js" />
/// <reference path="../Libs/jquery.form.js" />

UpPicFun = function (ParentId,ImgType) {
    var UpImgStr = '<div class="UpImageFormDiv">' +
        '<div class="tongyibianhao1" style="display:none"></div><div class="tongyibianhao2" style="display:none"></div>' +
                        '<form method="POST" enctype="multipart/form-data"  runat="server" id="' + ParentId + '_upImgForm"   target="jqFormIONaN"  >' +
                              //'<div class="UpImgInput" ><input type="file" name="' + ParentId + '_Ipt"  id="' + ParentId + '_InputImg"   runat="server" class="UpImgInputText" /></div>' +
                              '<div class="contentIbtn" ><input type="file" id="' + ParentId + '_InputImg" runat="server"  class="BIT_inputFile" />浏 览</div>' +
                            //'<input type="file" name="' + ParentId + '_Ipt"  id="' + ParentId + '_InputImg" class="UpImgInputText"  runat="server"  />' +
                         '</form>' +
                    '</div>';
    var TID_last = "";
    var Tid_first = "";
    var Tid = "";
    var DisaType = "";
    $("#" + ParentId).html(UpImgStr);

    $("#" + ParentId + "_InputImg").MultiFile({
        max: 20,
        accept: "jpg|JPG|gif|bmp|png|PNG|tif",
        namePattern: '$g',
        STRING: {
            remove: "[删除]",
            selected: 'Selecionado: $file',
            denied: '不支持上传 $ext 格式的文件!',
            duplicate: '文件已经在上传列表中: $file'
        }
    });
    $("#" + ParentId + "_upImgForm").change(function () {
        TID_last = $("#" + ParentId + " .tongyibianhao2").text();
        Tid_first = $("#" + ParentId + " .tongyibianhao1").text();
        Tid = Tid_first + TID_last;
        DisaType = Tid_first.substring(6, 8);
        if (TID_last == "") {
            alert("请填写统一编号！");
            $("a.MultiFile-remove").each(function (i) {
                $(this).click();
            });
            return false;

        }
        $("#" + ParentId + "_upImgForm").attr("action", baseUrl + "BaseInfoImg/BaseInfoScan?Tid=" + encodeURI(Tid) + "&&disaType=" + encodeURI(DisaType) + "&&Imgtype=" + encodeURI(ImgType));
        $("#" + ParentId + "_upImgForm").submit(function () {
            $(this).ajaxSubmit();
            return false;
        })
       
        $("#" + ParentId + "_upImgForm").ajaxSubmit(function (data) {

            var data1 = data.split('"');
            if (data1[1] != "fail") {
                var srcPath = baseUrl + data1[1].substring(1, data1[1].length);
                var imghtl='<div class="Imgscan">' +
                        '<img id="' + ParentId + '_upPicScanImg" src="' + srcPath + '" style=" width:75px; height:100px;" />' +
                         '<div class="upPicControlDiv" id="' + ParentId + '_upPicScanDiv" style=" position:relative; margin-top:-35px;margin-left:10px; width:70px; height:16px;">' +
                               '<div title="预览" class="PicScan" id="' + ParentId + '_PicScan"></div>' +
                               '<div title="删除" class="PicDele" id="' + ParentId + '_PicDele" ></div>' +
                         '</div>' +
                    '</div>';

                $("#" + ParentId).append(imghtl);

                $(".PicScan").die("click");
                $(".PicDele").die("click");
                $(".PicDele").live("click", function () {
                    var r = confirm("确定要删除?");
                    if (r) {
                        var that = this;
                        var path = $(this).parent().parent().find("img").eq(0).attr("src");
                        path = path.replace(baseUrl, "/");
                        $.post(baseUrl + "BaseInfoImg/DeleteScan", { "picPath": encodeURI(path) }, function (d) {
                            if (d == 1) {
                                $(that).parent().parent().remove();
                            }
                        })
                    }
                });
                $(".PicScan").live("click", function () {
                    var srcPath = $(this).parent().parent().find("img").eq(0).attr("src");
                    var imgStr = '<img src="' +  srcPath + '" id="' + ParentId + '_upPicScanImg" style=" width:100%; height:100%;" />';
                    var content = '<div class="ScanImgDlg"><div class="ScanModel"></div><div class="Scanclose"></div>' +
                                       '<div class="Scancontent"><div class="ScanresultChart">' + imgStr + '</div></div></div>';
                    $("body").append(content);
                    $(".ScanImgDlg .Scanclose").die("click");
                    $(".ScanImgDlg .Scanclose").live("click", function () {
                        //$(".ScanImgDlg").hide("drop", null, 500, function () {
                            $(".ScanImgDlg").remove();
                        //})
                    })
                });


            }
            $("a.MultiFile-remove").each(function (i) {
                $(this).click();
            });
            
        })
        


   })
}