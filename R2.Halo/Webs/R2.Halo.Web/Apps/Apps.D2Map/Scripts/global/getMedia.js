
function getImage(id) {
    var Num3 = $("#dlf_BaseImg  .Imgscan").length;
    for (var i = 0; i < Num3; i++) {    //基础图
        var disaimg3 = {};
        var imgpath = $("#dlf_BaseImg  .Imgscan").eq(i).find("img").attr("src");
        var imgArr = imgpath.split('/');
        var houzui = imgArr[imgArr.length - 1].split('.');
        var d = new Date()

        disaimg3.Name = imgArr[imgArr.length - 1];
        disaimg3.DisaId = $("#uNubFastenDlfInput").text() + $("#uNubAgileDlfInput").val();
        disaimg3.DisaIdNum = 3;
        disaimg3.FileType = "Image";
        disaimg3.Format = houzui[houzui.length - 1];
        disaimg3.DiskPath = imgpath.replace(baseUrl, "/");
        disaimg3.UploadTime = d.toLocaleTimeString()
        disaimg3.OriFileName = "";
        disaimg3.Region = disaimg3.DisaId.substring(0, 6);
        disaimg3.Description = "基础图";

        list.push(disaimg3);
    }
}