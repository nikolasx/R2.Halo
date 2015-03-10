/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/jquery.MultiFile.js" />
/// <reference path="../Libs/jquery.form.js" />

UpDataPicFun = function (ParentId,ImgArr) {

    if (ImgArr != null) {
        var imghtl = "";
        for (var jj = 0; jj < ImgArr.length; jj++) {
            var imgpath = ImgArr[jj].DiskPath;
            var srcPath = baseUrl + imgpath.substring(1, imgpath.length);
            imghtl += '<div class="Imgscan">' +
                           '<img id="' + ParentId + '_upPicScanImg" src="' + srcPath + '" style=" width:75px; height:100px;" />' +
                            '<div class="upPicControlDiv" id="' + ParentId + '_upPicScanDiv" style=" position:relative; margin-top:-35px;margin-left:50px; width:40px; height:16px;">' +
                                  '<div title="预览" class="PicScan" id="' + ParentId + '_PicScan"></div>' +
                            '</div>' +
                       '</div>';
        }
        $("#" + ParentId).append(imghtl);
    }

 

    $(".PicScan").die("click");
    $(".PicScan").live("click", function () {
        var srcPath = $(this).parent().parent().find("img").eq(0).attr("src");
        var imgStr = '<img src="' + srcPath + '" id="' + ParentId + '_upPicScanImg" style=" width:100%; height:100%;" />';
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