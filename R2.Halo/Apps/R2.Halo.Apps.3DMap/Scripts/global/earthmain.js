
//地球上的操作


function addDisasterMarkerByType(dataObj) {
    removeAllCustomPlaceMark("marker");
    
    for (var i = 0; i < dataObj.length; i++) {
        var data = dataObj[i];
        var img = getDisasterMarkImg(data.灾害类型);
        addSimpleImgMark(i, data.经度, data.纬度, 0, false,
        img, -0.5, false, data.名称, "white", 0,
        "blue", "green", "addMarkerCallBack", data.name, "marker");
    }
}

function addMarkerCallBack() {
    
}
function getDisasterMarkImg(disType) {
    var url = "Content/images/earthMark/";
    switch (disType) {
        case "00":
            url += "xiepo.png";
            break;
        case "01":
            url += "huapo.png";
            break;
        case "02":
            url += "bengta.png";
            break;
        case "03":
            url += "nishiliu.png";
            break;
        case "04":
            url += "taxian.png";
            break;
        case "05":
            url += "taxian.png";
            break;
        case "06":
            url += "diliefeng.png";
    }
    return url;
}

