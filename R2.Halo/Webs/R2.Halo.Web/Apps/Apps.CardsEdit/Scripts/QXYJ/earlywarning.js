/// <reference path="../Libs/OpenLayers.js" />
/// <reference path="../global/global.js" />

//气象预警逻辑文件
//主要包含：1.预警分析的整个流程（stepOne:计算15天生成等值面，与网格叠加
//                                                  stepTwo:计算当天生成等值面，与网格叠加
//                                                  stepThree:计算未来24小时生成等值面，与网格叠加
//                                                  stepFour:计算未来24最大小时雨强生成等值面，与网格叠加
//                                                  stepFive:带入模型计算，
//                                                  stepSix:生成网格等值面，即最终的预警）
//待完成：1.界面
//            2.等待提示
//            3.结果界面
//            4.结果后续操作界面与操作


//准备函数，整个预警分析的主入口
var EarlyWarningStepLog = 1;
var WarnAnalyseType = 1;//1代表预警分析，2代表回溯分析
var warningTime;
function initEarlyWarning(warningTime,gridChecked,yjRainChecked) {
    EarlyWarningStepLog = 1;
    //warningTime="20140320100000"
    //warningTime = "20130727100000"
    EarlyWarning(warningTime, gridChecked, yjRainChecked,"");
    //addYJLayer();
    //SuperPositionYJandQH();
}



function addYJLayer(layer) {
    //var yjresultwp = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/EarlyWarningFinalResultWP_20140320100000_aeab5f89-f765-4a22-bd12-bbc818cc4a20";
    //var yjresultwl = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/EarlyWarningFinalResultWL_20140320100000_aeab5f89-f765-4a22-bd12-bbc818cc4a20";

    var gdbps = layer;
    if (fullMap.getLayersByName("warningLayer").length>0) {
        fullMap.removeLayer(R2.mapVector);
    }
    if (fullMap.getLayersByName("warningOriLayer").length > 0) {
        fullMap.removeLayer(R2.WarnOriLayer);
    }
    var gdbpArr = [];
    gdbpArr.push(gdbps[0]);

    R2.WarnOriLayer = new Zondy.Map.Layer("warningOriLayer", R2.warningOriResultLayer,
        {
            ip: R2.gisIp,
            port: R2.gisPort,
            transitionEffect: "resize",
            singleTile: true,
            isBaseLayer: false,
            ration: 1,
            //filters:"起始值>35",
            //filters: "1:ID>8",
            turnOnGuid: true
        });
    R2.WarnOriLayer.setOpacity(0.6);
    fullMap.addLayer(R2.WarnOriLayer);
    fullMap.setLayerIndex(R2.WarnOriLayer, 1);


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
    layerWp = gdbps[0];


    //layerWl = yjresultwl;
    //layerEdit();
};
R2.rainLayers = [];
var IsJumpStep = "";
//预警模型全局步骤标记
//warningTime 预警时间
//gridClecked 网格线类型250  1000
//yjRainChecked 预警类型  24小时 48小时
//outres  等值线分析结果 用于显示等值线和注记
//isjump   是否跳过该步
//wrlayer  上一步的叠加图层
function EarlyWarning(warningTime, gridClecked, yjRainChecked, outres, isjump, wrlayer) {
    var url = "";
    var jumpArr = JSON.stringify(IsJumpStep);
    //var data = { warnTime: warningTime, gridChecked: gridClecked, yjRainChecked: yjRainChecked, jumpArr: IsJumpStep, pntLayer: wrlayer };
    var tipList = ["预警分析(1/6)：计算预警时间前15天内累计雨量，生成雨量等值线，与基础网格叠加...",
                            "预警分析(2/6)：计算预警时间当天累积雨量，生成雨量等值线，与基础网格叠加...",
                            "预警分析(3/6)：计算预警时间未来24小时累计雨量，生成雨量等值线，与基础网格叠加...",
                            "预警分析(4/6)：计算预警时间未来24小时最大雨量，生成雨量等值线，与基础网格叠加...",
                            "预警分析(5/6)：根据预警模型，带入各影响因子进行计算，生成预警Z值...",
                            "预警分析(6/6)：根据预警Z值，生成等值线图，并使用济南市行政区对其进行裁剪，生成最后结果"];
    if (WarnAnalyseType == 2) {
        tipList = ["回溯分析(1/6)：计算预警时间前15天内累计雨量，生成雨量等值线，与基础网格叠加...",
                            "回溯分析(2/6)：计算预警时间当天累积雨量，生成雨量等值线，与基础网格叠加...",
                            "回溯分析(3/6)：计算预警时间未来24小时累计雨量(从实况雨量表中获取)，生成雨量等值线，与基础网格叠加...",
                            "回溯分析(4/6)：计算预警时间未来24小时最大雨量(从实况雨量表中获取)，生成雨量等值线，与基础网格叠加...",
                            "回溯分析(5/6)：根据预警模型，带入各影响因子进行计算，生成预警Z值...",
                            "回溯分析(6/6)：根据预警Z值，生成等值线图，并使用济南市行政区对其进行裁剪，生成最后结果"];
    }
    waitPage.hide();
    waitPage.show(tipList[EarlyWarningStepLog - 1]);
    

    switch (EarlyWarningStepLog) {
        case 1:
            R2.rainLayers = [];
            IsJumpStep = "";
            url = baseUrl + "EarlyWarning/EarlyWarningStepOne";
            break;
        case 2:
            R2.rainLayers.push(outres);
            IsJumpStep+=isjump;
            url = baseUrl + "EarlyWarning/EarlyWarningStepTwo";
            break;
        case 3:
            R2.rainLayers.push(outres);
            IsJumpStep +=","+ isjump;
            url = baseUrl + "EarlyWarning/EarlyWarningStepThree";
            if (WarnAnalyseType == 2) {
                url = baseUrl + "EarlyWarning/ReCallWarningStepThree";
            }
            break;
        case 4:
            R2.rainLayers.push(outres);
            IsJumpStep += "," + isjump;
            url = baseUrl + "EarlyWarning/EarlyWarningStepFour";
            if (WarnAnalyseType == 2) {
                url = baseUrl + "EarlyWarning/ReCallWarningStepFour";
            }
            break;
        case 5:
            R2.rainLayers.push(outres);
            IsJumpStep += "," + isjump;
            url = baseUrl + "EarlyWarning/EarlyWarningStepFiveNew";
            break;
        case 6:
            url = baseUrl + "EarlyWarning/EarlyWarningStepSix";
            break;
    }
    var data = { warnTime: warningTime, gridChecked: gridClecked, yjRainChecked: yjRainChecked, jumpArr: IsJumpStep, pntLayer: wrlayer };

    $.post(url, data, function (res_ms) {   //  res_ms 返回 是否正常运行该步，等值线分析后的等值线和注记，与网格叠加的图层，是否跳过等值线分析该步
        EarlyWarningStepLog++;
        var reslist = res_ms.split(',');
        var res = reslist[0];
        var overlayer = reslist[2];
        var isjumpstp=reslist[3];
        if (EarlyWarningStepLog <= 6) {
            if (res == "success") {
                EarlyWarning(warningTime, gridClecked, yjRainChecked, reslist[1],isjumpstp,overlayer);
            } else {
                waitPage.hide();
                alert(res);
            }
        } else {
            //alert(EarlyWarningStepLog);
            EarlyWarningStepLog = 1;
            if (res.indexOf("!") > 0) {
                alert(res);
                waitPage.hide();
                return;
            } else {
                var gdbps = res.split("&");
                R2.warningResultLayer = gdbps;
                if (fullMap.getLayersByName("warningLayer").length>0) {
                    fullMap.removeLayer(R2.mapVector);
                }
                R2.warningOriResultLayer = gdbps;
                if (fullMap.getLayersByName("warningOriLayer").length > 0) {
                    fullMap.removeLayer(R2.WarnOriLayer);
                }
                R2.WarnOriLayer = new Zondy.Map.Layer("warningOriLayer", gdbps,
                        {
                            ip: R2.gisIp,
                            port: R2.gisPort,
                            transitionEffect: "resize",
                            singleTile: true,
                            isBaseLayer: false,
                            ration: 1,
                            turnOnGuid: true
                        });
                R2.WarnOriLayer.setOpacity(0.6);
                fullMap.addLayer(R2.WarnOriLayer);
                fullMap.setLayerIndex(R2.WarnOriLayer, 1);
                
                //Copy图层
                var time1 = new Date();
                var str1 = time1.getFullYear().toString() + (time1.getMonth() + 1).toString() + time1.getDate().toString() + time1.getHours().toString() + time1.getMinutes().toString() + time1.getSeconds().toString();
                R2.copyLayerD = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/" + "CopyLayerD" + str1;
                var createlayer = "CreateLayerR" + str1;
                $.post(baseUrl + "FactorQuery/CopyLayerAndCreateLayer", { "gdblayer": R2.warningResultLayer[0], "copydlayer": R2.copyLayerD, "createRlayer": createlayer }, function(ds) {
                    if (ds == "True" || ds == "true") {

                        R2.CreateLayerR = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/" + createlayer; //第一次是新创建一张空图层 以后就是Copy图层
                        //将预警结果保存到数据库
                        var time = warningTime.substr(0, 4) + "/" + warningTime.substr(4, 2) + "/" + warningTime.substr(6, 2) + "\t" + warningTime.substr(8, 2) + ":" + warningTime.substr(10, 2) + ":" + warningTime.substr(12, 2);
                        var postData = { layer: res, warningTime: time, gridRole: gridClecked, forecastTime: yjRainChecked, copywarnlayer: R2.copyLayerD, createwarnlayer: R2.CreateLayerR, rain15day: R2.rainLayers[0], rainToday: R2.rainLayers[1], rain24Hday: R2.rainLayers[2], rain24Mday: R2.rainLayers[3] };

                        $.post(baseUrl + "EarlyWarning/SaveHistoryWarning", postData, function(path) {
                            var ResReult = path.split(',');
                            R2.WarnLayerID = ResReult[1];


                            var WResultLayer = [];

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

                            warningResultAnalysis.init(R2.warningResultLayer);
                            waitPage.hide();
                        });
                    }

                });
                waitPage.hide();
                //over Copy图层
            }
        }
    });

}

//Copy图层
function CopyLayer() {
    var that = this;
    var time = new Date();
    R2.copyLayer = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/" + "CopyLayer" + time.getFullYear().toString() + (time.getMonth() + 1).toString() + time.getDate().toString() + time.getHours().toString() + time.getMinutes().toString() + time.getSeconds().toString();
    $.post(baseUrl + "FactorQuery/CopyLayer", { "gdbpsLayer": R2.warningResultLayer[0], "deslayer": R2.copyLayer }, function (ds) {
        if (ds != "fail") {
            that.layerGdb = R2.copyLayer;
        }
    })
}
//结果发布出图
function CreateImgJpg(warntime,opretime) {
    
        $("#createJpg").die("click");
        $("#createJpg").live('click', function () {
            if (R2.ybcContent != null) {
                
                //warntime=warntime.replice("\t","")
                if (fullMap.layers.length == 1) {
                    alert("生成预警图还未成功，请稍后！");
                    return;
                }
                var gdbps = [];
                if (fullMap.layers != null && fullMap.layers.length > 2) {
                    gdbps = R2.warningResultLayer;
                }
                var ff = gdbps.join(',');
                //var gdbStr = "gdbp://MapGisLocal/JndzWarning/sfcls/JNJWDXZQ.WP," + gdbps.join(',');
                var gdbStr = "gdbp://MapGisLocal/JndzWarning/ds/jn_new/sfcls/色带1.wp_r.wp," +
                    //gdbps.join(',') +
                    gdbps[0] + ",gdbp://MapGisLocal/JndzWarning/ds/jn_new/sfcls/济南边界线1.wl_r.wl";
                var parame = {
                    level: '0',
                    gdbps: encodeURIComponent(gdbStr),
                    titleName: '济南预警图',
                    warnword: R2.ybcContent,
                    rfDate: warntime,
                    OpDate: opretime,
                    timeFlag: '24'
                }
                var paramUrl = Zondy.Util.toUrlParameters(parame);
                window.open(baseUrl + "EarlyWarning/CreatRfLayerImg?" + paramUrl);
            }
        }) 
}
//预览切换
function ScanJpg(warntime, opretime) {
    $("#scanJpg").die("click");
    //$("#scanJpg").live('click', function () {
    //})
    $('#scanJpg').live("click", function () {
        $(this).toggle(function () { showScanContent(warntime, opretime); },
         function () { removeScanLayers(); $('#scanJpg').html("产品预览");}).trigger('click');;
    });
}

//预览
function showScanContent(warntime, opretime) {
    if (R2.ybcContent != null) {
        var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
        renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;

        removeScanLayers();

        var marklayer_jpg = new OpenLayers.Layer.Markers("marklayer_jpg");
        var textlayer_jpg = new OpenLayers.Layer.Vector("textlayer_jpg", {
            styleMap: new OpenLayers.StyleMap({
                'default': {
                    strokeColor: "#00FF00",
                    strokeOpacity: 1,
                    strokeWidth: 3,
                    fillColor: "#FF5500",
                    fillOpacity: 0.5,
                    pointRadius: 0,
                    pointerEvents: "visiblePainted",
                    // label with \n\n linebreaks
                    label: "${name}",
                    //label: "${name1} \n\n ${name2} \n\n ${name3} \n\n ${name4} \n\n ${name5} \n\n ${name6} \n\n ${name7} \n\n",
                    fontColor: "${favColor}",
                    fontSize: "16px",
                    fontFamily: "Courier New, monospace",
                    fontWeight: "bold",
                    labelAlign: "${align}",
                    labelXOffset: "${xOffset}",
                    labelYOffset: "${yOffset}",
                    labelOutlineColor: "white",
                    labelOutlineWidth: 3
                }
            }),
            renderers: renderer
        });
        fullMap.addLayer(textlayer_jpg);
        fullMap.addLayer(marklayer_jpg);

        var starttime = getDateTimeinScan("s", warntime);
        var starttime1 = getDateTimeinScan("e", warntime);
        var endtime = getDateTimeinScan("o", opretime);

        addTextToLayer(textlayer_jpg, starttime + "20时至" + starttime1 + "20时", 116, 37.35);
        //addTextToLayer(textlayer_jpg, "3级", 116.25, 37.1);
        addTextToLayer(textlayer_jpg, endtime + "17时", 116, 37.15);

        addMarkPic(marklayer_jpg, 116.2, 37.5, "Content/images/wranjpgpictitle.png", 418, 60);
        addMarkPic(marklayer_jpg, 115.8, 37.25, "Content/images/warntitle2.png", 130, 96);
        addMarkPic(marklayer_jpg, 116.05, 36.8, "Content/images/warnscar.png", 283, 130);
        addMarkPic(marklayer_jpg, 117.7, 35.9, "Content/images/warnlhfb.png", 300, 53);
        addYBCTextToLayer(R2.ybcContent, 117.7, 35.95);
        getdangerleve(textlayer_jpg);
        $('#scanJpg').html("取消预览");
        fullMap.setCenter(new OpenLayers.LonLat(116.5, 36.7), 1); //之前是2
    }
}
//后台获取危险等级级别
function getdangerleve(textlayer_jpg) {
    var gdbps = [];
    if (fullMap.layers != null && fullMap.layers.length > 2) {
        gdbps = R2.warningResultLayer;
    }
    var gdbStr = "gdbp://MapGisLocal/JndzWarning/sfcls/JNJWDXZQ.WP," + gdbps.join(',');
    $.post(baseUrl + "EarlyWarning/GetDangerLeve", { "gdbs": gdbStr }, function (data) {
        //var grades = data.substr(1, data.length - 2);
        var grades = data.split(',');
        if (grades[3] == 1) {
            addTextToLayer(textlayer_jpg, "红色预警", 116, 37.25);
        }
        else if (grades[2] == 1) {
            addTextToLayer(textlayer_jpg, "橙色预警", 116, 37.25);
        }
        else if (grades[1] == 1) {
            addTextToLayer(textlayer_jpg, "黄色预警", 116, 37.25);
        }
        else {
            //addTextToLayer(textlayer_jpg, "4级", 116, 37.25);
        }
    });
}
function getDateTimeinScan(flag, strtime) {
    var dt = getDate(strtime);
    if (flag == "s") {
        var year = dt.getFullYear() + "年";
        var month =dt.getMonth() + "月";
        var day = dt.getDate()+ "日";
        return year + month + day;
    }
    else if (flag == "o") {
        var year = dt.getFullYear() + "年";
        var month =dt.getMonth() + "月";
        var day = dt.getDate() + "日";
        return year + month + day;
    }
    else {
        dt.setUTCDate(dt.getUTCDate() + 1);
        var month = dt.getMonth() + "月";
        var day = dt.getDate() + "日";
        return  month + day;
    }
}
//日期格式化
function getDate(strDate) {
    var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,
     function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
    return date;
}
//移除图层
function removeScanLayers() {
    if (fullMap.getLayersByName("marklayer_jpg")[0] != null || fullMap.getLayersByName("marklayer_jpg")[0] != undefined) {
        var ff = fullMap.getLayersByName("marklayer_jpg")[0];
        ff.clearMarkers();
        fullMap.removeLayer(fullMap.getLayersByName("marklayer_jpg")[0]);
    }
    if (fullMap.getLayersByName("textlayer_jpg")[0] != null || fullMap.getLayersByName("textlayer_jpg")[0] != undefined) {
        fullMap.getLayersByName("textlayer_jpg")[0].removeAllFeatures();
        fullMap.removeLayer(fullMap.getLayersByName("textlayer_jpg")[0]);
    }
    if (fullMap.getLayersByName("textYBClayer_jpg")[0] != null || fullMap.getLayersByName("textYBClayer_jpg")[0] != undefined) {
        fullMap.getLayersByName("textYBClayer_jpg")[0].removeAllFeatures();
        fullMap.removeLayer(fullMap.getLayersByName("textYBClayer_jpg")[0]);
    }
}
//添加mark图片
function addMarkPic(layerjpg,lon,lat,image,imgWidth,imgHeight) {
    var icon = new OpenLayers.Icon(baseUrl + image, new OpenLayers.Size(imgWidth, imgHeight), null, null);
    layerjpg.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(lon, lat), icon));
}
//添加text
function addTextToLayer(textlayer, textStr, lon, lat) {
    var labelOffsetPoint1 = new OpenLayers.Geometry.Point(lon, lat);
    var labelOffsetFeature1 = new OpenLayers.Feature.Vector(labelOffsetPoint1);
    labelOffsetFeature1.attributes = {
        name: textStr,
        favColor: 'blue',
        align: "lm",
        xOffset: 0,
        yOffset: -5
    };
    textlayer.addFeatures([labelOffsetFeature1]);
}

//添加预报词
function addYBCTextToLayer(textStr, lon, lat) {
    var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
    renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;

    var  textYBClayer_jpg = new OpenLayers.Layer.Vector("textYBClayer_jpg", {
        styleMap: new OpenLayers.StyleMap({
            'default': {
                strokeColor: "#00FF00",
                strokeOpacity: 1,
                strokeWidth: 3,
                fillColor: "#FF5500",
                fillOpacity: 0.5,
                pointRadius: 0,
                pointerEvents: "visiblePainted",
                // label with \n linebreaks
                label: "${name1} \n \n \n \n ${name2} \n \n ${name3} \n\n ${name4} \n\n ${name5} \n\n ${name6} \n\n ${name7} \n\n ${name8} \n\n",
                fontColor: "${favColor}",
                fontSize: "16px",
                fontFamily: "Courier New, monospace",
                fontWeight: "bold",
                labelAlign: "${align}",
                labelXOffset: "${xOffset}",
                labelYOffset: "${yOffset}",
                labelOutlineColor: "white",
                labelOutlineWidth: 3
            }
        }),
        renderers: renderer
    });
    
    var str1 = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var str5 = "";
    var str6 = "";
    var str7 = "";
    var str8 = "";
    var num = textStr.length;
    var count =parseInt(textStr.length % 20 == 0 ? textStr.length / 20 : textStr.length / 20 + 1);
    var arrtext = new Array(8);
    for (var i = 0; i < 8; i++) {
        arrtext[i] = "";
    }
    for (var i = 0; i < count; i++) {
        if (i < count - 1) {
            arrtext[i]=textStr.substr(i * 20, 20);
        }
        else {
            arrtext[i]=textStr.substr(i * 20, num-i*20);
        }
    }
    str1 = arrtext[0];
    str2 = arrtext[1];
    str3 = arrtext[2];
    str4 = arrtext[3];
    str5 = arrtext[4];
    str6 = arrtext[5];
    str7 = arrtext[6];
    str8 = arrtext[7];
    var labelOffsetPoint = new OpenLayers.Geometry.Point(lon, lat);
    var labelOffsetFeature = new OpenLayers.Feature.Vector(labelOffsetPoint);
    labelOffsetFeature.attributes = {
        name1: str1,
        name2: str2,
        name3: str3,
        name4: str4,
        name5: str5,
        name6: str6,
        name7: str7,
        name8: str8,
        favColor: 'blue',
        align: "cm",
        xOffset: 50,
        yOffset: -15
    };

    textYBClayer_jpg.addFeatures([labelOffsetFeature]);

    //textYBClayer_jpg.addFeatures([labelOffsetFeature]);
    fullMap.addLayer(textYBClayer_jpg);
}

//预警分析的第一步
//拿到当前时间，开始计算15天雨量
function EarlyWarningStepOne(warningTime) {
    var data = { warnTime: warningTime };
    var url = baseUrl + "EarlyWarning/EarlyWarningStepOne";
    $.post(url, data, function (res) {
        EarlyWarningStepOneCallback(res, warningTime);
    });
}

//第一步的回调函数
function EarlyWarningStepOneCallback(res, warningTime) {
    EarlyWarningStepTwo(warningTime);
}

//预警分析的第二步
function EarlyWarningStepTwo(warningTime) {
    var url = baseUrl + "EarlyWarning/EarlyWarningStepTwo";
    var data = { warnTime: warningTime };
    $.post(url, data, function (res) {
        EarlyWarningStepTwoCallback(res, warningTime);
    });
}

//Step.2 CallBack
function EarlyWarningStepTwoCallback(res, warningTime) {
    EarlyWarningStepThree(warningTime);
}

//预警分析的第三步
function EarlyWarningStepThree(warningTime) {
    var url = baseUrl + "EarlyWarning/EarlyWarningStepThree";
    var data = { warnTime: warningTime };
    $.post(url, data, function (res) {
        EarlyWarningStepThreeCallback(res, warningTime);
    });
}

//Step.3 CallBack
function EarlyWarningStepThreeCallback(res, warningTime) {
    EarlyWarningStepFour(warningTime);
}


//预警分析的第四步
function EarlyWarningStepFour(warningTime) {
    var url = baseUrl + "EarlyWarning/EarlyWarningStepFour";
    var data = { warnTime: warningTime };
    $.post(url, data, function (res) {
        EarlyWarningStepFourCallback(res, warningTime);
    });
}

//Step.3 CallBack
function EarlyWarningStepFourCallback(res, warningTime) {
    //EarlyWarningStepFour(warningTime);
    alert("1");
}

