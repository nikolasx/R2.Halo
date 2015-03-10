/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/jquery.MultiFile.js" />
/// <reference path="../Libs/jquery.form.js" />

/// 父id 图片类型（视频） 是否编辑 视频数组
UpBaseVideoFun = function (ParentId, ImgType,vtid,iseditor,video) {
    var UpImgStr = '<div class="UpImageFormDiv">' +
        '<div class="tongyibianhao1" style="display:none"></div><div class="tongyibianhao2" style="display:none"></div>' +
                        '<form method="POST" enctype="multipart/form-data"  runat="server" id="' + ParentId + '_upImgForm"   target="jqFormIONaN"  >' +
                              '<div class="contentIbtn" ><input type="file" id="' + ParentId + '_InputVideo" runat="server"  class="BIT_inputFile" />浏 览</div>' +
                         '</form>' +
                    '</div>';
    var TID_last = "";
    var Tid_first = "";
    var Tid = "";
    var DisaType = "";
    if (iseditor) {
        $("#" + ParentId).html(UpImgStr);
    }
    if (vtid != "") {
        var a = vtid.substring(0, 8);
        var b = vtid.substring(8, 12);
        $("#" + ParentId + " .tongyibianhao1").html(vtid.substring(0,8));
        $("#" + ParentId + " .tongyibianhao2").html(vtid.substring(8,12));

    }

    //添加视频展示
    if (video!=null&&video.length > 0) {
        var imghtl = "";
        for (var i = 0; i < video.length; i++) {
            var imgpath = video[i].DiskPath;
            var srcPath = baseUrl + imgpath.substring(1, imgpath.length);
             imghtl += '<div class="Imgscan">' +
                        '<img id="' + ParentId + '_upPicScanImg" src="' + baseUrl + 'Content/images/videoimg.jpg" style=" width:75px; height:100px;" />' +
                        '<div class="video_src"  style="display:none">' + srcPath + '</div>' +
                         '<div class="upPicControlDiv" id="' + ParentId + '_upPicScanDiv" style=" position:relative; margin-top:-35px;margin-left:10px; width:70px; height:16px;">' +
                               '<div title="预览" class="VideoScan" id="' + ParentId + '_PicScan"></div>' +
                               '<div title="删除" class="PicDele" id="' + ParentId + '_PicDele" ></div>' +
                               '<div class="ImageId" style="display:none;" >' + video[i].ID + '</div>' +
                               '<div class="Imageexist" style="display:none;" >1</div>' +
                         '</div>' +
                    '</div>';
        }
        $("#" + ParentId).append(imghtl);
    }



    $("#" + ParentId + "_InputVideo").MultiFile({
        max: 5,
        accept: "mp4|wmv",
        namePattern: '$g',
        STRING: {
            remove: "[删除]",
            selected: 'Selecionado: $file',
            denied: '不支持上传 $ext 格式的文件!',
            duplicate: '文件已经在上传列表中: $file'
        }
    });

    $("#" + ParentId + "_upImgForm").change(function() {
        TID_last = $("#" + ParentId + " .tongyibianhao2").text();
        Tid_first = $("#" + ParentId + " .tongyibianhao1").text();
        Tid = Tid_first + TID_last;
        DisaType = Tid_first.substring(6, 8);
        if (TID_last == "") {
            alert("请填写统一编号！");
            $("a.MultiFile-remove").each(function(i) {
                $(this).click();
            });
            return false;

        }
        $("#" + ParentId + "_upImgForm").attr("action", baseUrl + "BaseInfoImg/BaseVideoScan?Tid=" + encodeURI(Tid) + "&&disaType=" + encodeURI(DisaType) + "&&Imgtype=" + encodeURI(ImgType));
        $("#" + ParentId + "_upImgForm").submit(function() {
            $(this).ajaxSubmit();
            return false;
        })

        $("#" + ParentId + "_upImgForm").ajaxSubmit(function(data) {

            var data1 = data.split('"');
            if (data1[1] != "fail") {
                var srcPath = baseUrl + data1[1].substring(1, data1[1].length);
                var imghtl = '<div class="Imgscan">' +
                    '<img id="' + ParentId + '_upPicScanImg" src="' + baseUrl + 'Content/images/videoimg.jpg" style=" width:75px; height:100px;" />' +
                    '<div class="video_src"  style="display:none">' + srcPath + '</div>' +
                    '<div class="upPicControlDiv" id="' + ParentId + '_upPicScanDiv" style=" position:relative; margin-top:-35px;margin-left:10px; width:70px; height:16px;">' +
                    '<div title="预览" class="VideoScan" id="' + ParentId + '_PicScan"></div>' +
                    '<div title="删除" class="VideocDele" id="' + ParentId + '_PicDele" ></div>' +
                    '<div class="ImageId" style="display:none;" ></div>' +
                    '<div class="Imageexist" style="display:none;" >0</div>' +
                    '</div>' +
                    '</div>';

                $("#" + ParentId).append(imghtl);
            }
            $("a.MultiFile-remove").each(function(i) {
                $(this).click();
            });

        })

    });

    $(".VideoScan").die("click");
    $(".VideocDele").die("click");
    $(".VideocDele").live("click", function () {
        var r = confirm("确定要删除?");
        if (r) {
            var that = this;
            var imgid = $(this).next(".ImageId").html();
            var path = $(this).parent().parent().find(".video_src").eq(0).html();
            path = path.replace(baseUrl, "/");
            $.post(baseUrl + "BaseInfoImg/DeleteVideo", { "tid": encodeURI(imgid), "picPath": encodeURI(path) }, function (d) {
                if (d == 1) {
                    $(that).parent().parent().remove();
                }
            })
        }
    });
    $(".VideoScan").live("click", function () {
        var srcPath = $(this).parent().parent().find(".video_src").eq(0).html();
        window.showModelessDialog(top.baseUrl + "BaseInfoType_in/video", { srcPath: srcPath }, "dialogWidth:1000px;dialogHeight:500px;dialogTop:100px;");

    });

}

GetVideosForMedia = function (parentId, DisaId) {
    var list = [];
    var Num = $("#" + parentId + "  .Imgscan").length;
    for (var i = 0; i < Num; i++) {    //基础图
        if ($("#" + parentId + "  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg4 = {};
            var imgpath = $("#" + parentId + "  .Imgscan").eq(i).find(".video_src").eq(0).html();
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date()

            disaimg4.Name = imgArr[imgArr.length - 1];
            disaimg4.DisaId = DisaId;
            disaimg4.DisaIdNum = 4;
            disaimg4.FileType = "Video";
            disaimg4.Format = houzui[houzui.length - 1];
            disaimg4.DiskPath = imgpath.replace(baseUrl, "/");
            disaimg4.UploadTime = d.toLocaleTimeString()
            disaimg4.OriFileName = "";
            disaimg4.Region = disaimg4.DisaId.substring(0, 6);
            disaimg4.Description = "视频";

            list.push(disaimg4);
        }
    }
    return list;
}

GetImagesForMedia = function (parentId, DisaId) {
    var list = [];
    var Num3 = $("#" + parentId + "  .Imgscan").length;
    for (var i = 0; i < Num3; i++) {    //基础图
        if ($("#" + parentId + "  .Imgscan").eq(i).find(".Imageexist").html() != "1") {
            var disaimg3 = {};
            var imgpath = $("#" + parentId + "  .Imgscan").eq(i).find("img").attr("src");
            var imgArr = imgpath.split('/');
            var houzui = imgArr[imgArr.length - 1].split('.');
            var d = new Date();

            disaimg3.Name = imgArr[imgArr.length - 1];
            disaimg3.DisaId = DisaId;
            disaimg3.DisaIdNum = 3;
            disaimg3.FileType = "Image";
            disaimg3.Format = houzui[houzui.length - 1];
            disaimg3.DiskPath = imgpath.replace(baseUrl, "/");
            disaimg3.UploadTime = d.toLocaleTimeString();
            disaimg3.OriFileName = "";
            disaimg3.Region = disaimg3.DisaId.substring(0, 6);
            disaimg3.Description = "基础图";

            list.push(disaimg3);
        }
    }
    return list;
}