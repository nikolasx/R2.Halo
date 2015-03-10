/*------------------------全局定义-----------------------------*/
window.Rrteam = {};

Rrteam.Control = OpenLayers.Class(Rrteam, {
});

/*-------------------------RrPopup类----------------------------*/
/*---------------继承NestFramedCloud.js------------------------*/
Rrteam.Control.RrPopup = OpenLayers.Class(OpenLayers.Popup.NestFramedCloud, {
    /*---------------------------类属性-------------------------------*/
    titleTemp: "",

    firstTemp: "",

    secondTemp: "",

    thirdTemp: "",

    fourthTemp: "",

    footTemp: "",

    imgUrl: "",

    hrefTemp: [],

    hrefUrl: [],

    createSuccess: $.noop,


    //参数说明:id:id
    //              lon:经度,
    //              lat:纬度，
    //              closeBox:是否有关闭按钮，boolean
    //              closeBoxCallback:关闭的回调，function
    //              option:自定义属性
    initialize: function (id, lon, lat, closeBox, closeBoxCallback, option) {
        OpenLayers.Util.extend(this, option);
        var html = this.createPopupContentHtml();
        var lonlat = new OpenLayers.LonLat(Number(lon), Number(lat));
        var contentSize = new OpenLayers.Size(260, 120);
        OpenLayers.Popup.NestFramedCloud.prototype.initialize.apply(this, [id, lonlat, contentSize, html, null, closeBox, closeBoxCallback, null]);
        //对象制造完毕，返回对象本身，供用户进行处理
        this.createSuccess.call(this.createSuccess, this);
    },

    //解析option，将option序列成htmlStr
    createPopupContentHtml: function () {
        //链接的处理
        var hrefStr = "";
        if (this.hrefTemp.length == this.hrefUrl.length&&this.hrefTemp.length>0) {
            for (var i = 0; i < this.hrefTemp.length; i++) {
                //hrefStr = hrefStr + '<div class="rrPopupADiv"><a href="' + this.hrefUrl[i] + '"  target="_blank" style="color:#325E7E;font-size:12px;margin-right:5px;">' + this.hrefTemp[i] + '</a><div class="rrPopupHrefLine"></div></div>';
                //------之所以去掉 this.hrefUrl[i] ，是因为滑屏机制会自动触发，更改前请联系张振强----------//
                hrefStr = hrefStr + '<div class="rrPopupADiv" id="rrPopupADiv' + i + '"><a  style="color:#325E7E;font-size:12px;" id="rrPopupA' + i + '">' + this.hrefTemp[i] + '</a><div class="rrPopupHrefLine" id="rrPopupLine' + i + '"></div></div>';
            }
        }
        //显示15个字符
        var html = '<div class="rrPopupContent">' +
                    '<div class="rrPopupTitle">' +
                        '<label class="rrPopupTitleTable">' + this.titleTemp + '</label>' +
                    '</div>' +
                    '<div class="rrPopupLine"></div>' +
                    '<div class="rrPopupTempContent">' +
                       '<div class="rrPopupTempDiv">' +
                        '<label class="rrPopupTempName">' + this.firstTemp.split(":")[0] + ':' + '</label>' +
                         '<label class="rrPopupTempValue" title="' + this.firstTemp.split(":")[1] + '">' + this.changeStrLength(this.firstTemp, 15) + '</label>' +
                        '</div>' +
                        '<div class="rrPopupTempDiv">' +
                        '<label class="rrPopupTempName">' + this.secondTemp.split(":")[0] + ':' + '</label>' +
                         '<label class="rrPopupTempValue" title="' + this.secondTemp.split(":")[1] + '">' + this.changeStrLength(this.secondTemp, 13) + '</label>' +
                        '</div>' +
                        '<div class="rrPopupTempDiv">' +
                        '<label class="rrPopupTempName">' + this.thirdTemp.split(":")[0] + ':' + '</label>' +
                         '<label class="rrPopupTempValue" title="' + this.thirdTemp.split(":")[1] + '">' + this.changeStrLength(this.thirdTemp, 13) + '</label>' +
                        '</div>' +
                        '<div class="rrPopupTempDiv">' +
                        '<label class="rrPopupTempName">' + this.fourthTemp.split(":")[0] + ':' + '</label>' +
                         '<label class="rrPopupTempValue" title="' + this.fourthTemp.split(":")[1] + '">' + this.changeStrLength(this.fourthTemp, 13) + '</label>' +
                         '</div>' +
                          '<div class="rrPopupTempDiv">' +
                        '<label class="rrPopupTempName">' + this.footTemp.split(":")[0] + ':' + '</label>' +
                         '<label class="rrPopupTempValue" title="' + this.footTemp.split(":")[1] + '">' + this.changeStrLength(this.footTemp, 13) + '</label>' +
                         '</div>' +
                    '</div>' +
                    '<div class="rrPopupImgDiv"><img class="rrPopupImgContent" src="' + this.imgUrl + '"></div>' +
                    '</img>' +
                    '<div class="rrPopupMessEditor"><a id="rrPopupEditorA" href="#" style="text-decoration:none; color:#F7733A">信息编辑<a></div>' +
                    '<div class="rrPopupHrefDiv">' +
                    hrefStr+
                    '</div>' +
                '</div>';
        return html;
    },

    //将多的字符串删减,加上name和value共15个字符
    changeStrLength: function (tempStr, maxLength) {
        var nameStr = tempStr.split(":")[0];
        var valueStr = tempStr.split(":")[1];
        var length = maxLength - nameStr.length;
        if (valueStr.length > length) {
            valueStr = valueStr.substring(0, length) + "...";
        }
        return valueStr;
    },


    CLASS_NAME: "Rrteam.Control.RrPopup"
});