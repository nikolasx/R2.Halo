/// <reference path="../Libs/OpenLayers.js" />
/// <reference path="../Libs/zdclient.js" />
/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../global/global.js" />

//预警结果分析
//var globalData = {};
//globalData.layerName = {};
var editorFlashLayer;
var FeatureAllForQ = [];
var IswarnSelect = true;
var warningResultAnalysis = {
    analysisFlag: false,
    data: null,
    GeometryArr: [],
    IsfirstDraw : true,
    content:'<div class="warBox">'+
                      '<div class="wraHead">预警分析成功！</div>' +
                      //'<div class="wrafunTitle"><div class="wrafunTitleTip" style="margin-left:3px;">预警信息</div></div>' +
                      '<div id="warnmessage" class="wraInfo" >' +
                          '<div><div class="wraInfoTip">预警时间：</div><div class="wraInfoRes"><input type="text" class="warninfo_date" value="2014-02-26 10:00:00"/></div></div>' +
                          '<div><div class="wraInfoTip">网格大小：</div><div class="wraInfoRes"><select class="warninfo_netsize"><option  value="250">250m X 250m</option><option value="1000">1000m X 1000m</option></select></div></div>' +
                          '<div><div class="wraInfoTip">预报雨量：</div><div class="wraInfoRes"><span class="warninfo_type"></span><span class="warninfo_modify">修改</span></div></div>' +
                      '</div>'+
                      '<div class="wrafunTitle"><div class="wrafunTitleCount" style="float:left;"></div><div class="wrafunTitleTip" style="width:120px;float:left;">预警区绘制</div>' +
                             '<div class="wraCanvasBox_zdy">' +
                             '<div id="clearDrawLayer"  style="display:none;">刷新</div>' +
                              '<div id="layerMana">图层管理</div>' +
                              '<div id="gradebest" class="hightseting">高级编辑</div>' +
                              '</div>'+
                      '</div>' +
                       '<div id="warn_drawbox" class="wraResultBox" style="height:150px;">' +
                       '<div class="wraCanvasBox_Title"  style="height:30px;display:none"><div class="wraCanvasBox_Title_span" style="margin-top:5px;">选择模式:</div></div>' +
                       '<div id="war_select_style" class="wraCanvasBox4" style="height:30px;display:none">' +
                            '<input id="cb_fordefault" type="radio" name="cb_defined" class="checkBoxSpace_warn" style="display:none" value="默认模式" /><label class="labelSpace_warn" style="line-height:22px;display:none">默认模式</label>' +
                            '<input id="cb_forDefined" type="radio" name="cb_defined" class="checkBoxSpace_warn" value="自定义模式" checked/><label class="labelSpace_warn" style="line-height:22px;">自定义模式</label>' +
                      '</div>' +
                        '<div id="war_showlayer_title"  class="wraCanvasBox_Title"  style="height:30px;"><div class="wraCanvasBox_Title_span" style="margin-top:5px;">显示预警图:</div></div>' +
                       '<div id="war_showlayer_style"  class="wraCanvasBox4" style="height:30px;">' +
                            '<input id="cb_forshow" type="radio" name="cb_showlayer" class="checkBoxSpace_warn" value="显示" checked="checked"/><label class="labelSpace_warn" style="line-height:22px;">显示</label>' +
                            '<input id="cb_fordisshow" type="radio" name="cb_showlayer" class="checkBoxSpace_warn" value="不显示"/><label class="labelSpace_warn" style="line-height:22px;">不显示</label>' +
                      '</div>' +
                       '<div class="wraCanvasBox_Title"><div class="wraCanvasBox_Title_span">险情等级:</div></div>' +
                      '<div class="wraCanvasBox">' +
                            '<div class="wraThreeXiu wragrade" id="wraFirstGrade">1级</div>' +
                            '<div class="wraThreeXiu wragrade" id="wraSecondGrade">2级</div>' +
                            '<div class="wraThreeXiu wragrade selectbtn" id="wraThirdGrade">3级</div>' +
                      '</div>' +
                      '<div class="wraCanvasBox_Title"><div class="wraCanvasBox_Title_span">选择形状:</div></div>' +
                      '<div class="wraCanvasBox2">' +
                            '<div class="wraThreeXiu wragrade selectbtn" id="RingDraw">环形</div>' +
                            '<div class="wraThreeXiu wragrade" id="polygonDraw">多边形</div>' +
                      '</div>' +
                       '<div class="wraCanvasBox3">' +
                            '<div class="wraThreeXiu wragrade" id="wraCanvas">绘制</div>' +
                            '<div class="wraThreeXiu wragrade" id="polygonPh" style="display:none;">多边形平滑</div>' +
                      '</div>' +
                      //'<div class="wraCanvasBox_Title"><div class="wraThreeXiu wragrade" id="ClearDraw">清空绘制</div></div>' +
                       '<div class="wraCanvasBox_Title"><div class="wraCanvasBox_Title_span">操作方法:</div></div>' +
                      '<div class="wraCanvasBox4">' +
                            //'<div class="wraThreeXiu wragrade" id="wraCanvas">绘制</div>' +
                            //'<div class="wraThreeXiu wragrade" id="polygonPh">多边形平滑</div>' +
                            '<div class="wraThreeXiu" id="wraCaijian">行政裁剪</div>' +
                      '</div>' +
                      '</div>' +
                       '<div class="wrafunTitle wrafunTitle2"><div class="wrafunTitleCount wrafunTitleCount2"></div><div class="wrafunTitleTip">等值线显示</div></div>' +
                      '<div id="rainlayer_container" class="wraResultBox" style="height:50px;">' +
                            '<input type="checkbox" name="wraRadio" style="margin-top:5px;margin-left:25px;" value="2" >15天雨量等值线' +
                            '<input type="checkbox" name="wraRadio" style="margin-top:5px;margin-left:25px;" value="2" >未来24/48小时累计雨量等值线' +
                            '<input type="checkbox" name="wraRadio" style="margin-top:5px;margin-left:25px;" value="1" >当天雨量等值线' +
                            '<input type="checkbox" name="wraRadio" style="margin-top:5px;margin-left:25px;" value="1" >未来24/48小时最大小时雨量等值线' +
                      '</div>' +

                      '<div class="wrafunTitle wrafunTitle2"><div class="wrafunTitleCount wrafunTitleCount3"></div><div class="wrafunTitleTip">结果分析</div></div>' +
                      '<div class="wraResultBox" style="height:50px;">' +
                            //'<input type="radio" name="wraRadio" style="margin-top:5px;" value="2" checked>制作预报词' +
                            //'<input type="radio" name="wraRadio" style="margin-top:5px;" value="1">行政区分析' +
                            '<div id="btnMarkybc" class="wraButton" style="opacity:0.5">制作预报词</div>' +
                            '<div id="btnxzqanaliysis" class="wraButton">行政区分析</div>' +
                      '</div>' +
                      
                      '<div class="wrafunTitle wrafunTitle2"><div class="wrafunTitleCount wrafunTitleCount4"></div><div class="wrafunTitleTip">成果发布</div></div>' +
                      '<div class="wraResultBox" style="height:95px;">' +
                            '<div class="wrafb wrafb1" id="qpdfb">签批单</div>' +
                            '<div class="wrafb" id="xzdjbfb" style="opacity:0.5">乡镇等级表</div>' +
                            '<div class="wrafb" id="xqdjbfb" style="opacity:0.5">等级表+图</div>' +
                            '<div id="createJpg" class="wrafbJpgdisable" style="opacity:1">产品发布</div>' +
                            '<div id="scanJpg" class="wrafbJpgdisable" style="opacity:1">产品预览</div>' +
                            '<div class="wrareturn">返&nbsp;&nbsp;回</div>' +
                      '</div>' +
                      
                 '</div>' +
                 '<div class="warBox3">' +
                     '<div class="wraHead2">预警编辑高级设置<span class="return_to_fx"></span></div>' +
                     '<div class="wrafunTitle wrafunTitle2"><div class="wrafunTitleCount"></div><div class="wrafunTitleTip">图层操作</div></div>' +
                     '<div id="warn_operatebox" class="wraResultBox" style="height:60px;">' +
                         //'<div id="war_editor_style" class="wraCanvasBox" style="width:348px;">' +
                         //       '<input id="rd_formodify" type="radio" name="cb_editor" class="checkBoxSpace" value="修改区" /><label class="labelSpace" style="line-height:22px;">修改区</label>' +
                         //       '<input id="cb_fordelete" type="radio" name="cb_editor" class="checkBoxSpace" value="删除区"/><label class="labelSpace" style="line-height:22px;">删除区</label>' +
                         // '</div>' +
                          '<div id="war_selectedit_style" class="wraCanvasBox" style="width:348px;">' +
                            '<div id="warn_rectangleQ" class="wa_queryBtnh" title="拉框查询"></div>' +
                            '<div id="warn_polygonQ" class="wa_queryBtnh" title="多边形查询"></div>' +
                          '</div>' +
                     '</div>' +
                     '<div class="wrafunTitle wrafunTitle2"><div class="wrafunTitleCount wrafunTitleCount2"></div><div class="wrafunTitleTip" >查询结果展示</div></div>' +
                     '<div id="warn_query_result_box" class="wraResultBox" >' +
                         '<div class="warn_tblist">' +
                              '<div class="warn_tblist_tr">' +
                                    '<div class="warn_tblist_td">序号</div>' +
                                    '<div class="warn_tblist_td">FID</div>' +
                                    '<div class="warn_tblist_td_grade">等级</div>' +
                                    '<div class="warn_tblist_td2">修改</div>' +
                              '</div>' +
                         '</div>' +
                        '<div class="warn_tblist" id="wtb_box">' +
                              '<div id="wlistdata"></div>' +
                         '</div>' +
                     '</div>' +
                 '</div>' +
                 '<div class="warBox1"></div>'+  //行政区分析
                 '<div class="warBox2"></div>',
    ///<parama name="layer">当前地图显示的预警图层</parama>
    init: function (layers) {
        this.cssInit();
        this.analysisFlag = false;

        this.queryLayerInfo(R2.warningOriResultLayer);
        //this.layerCompile();

        //添加假的预警图层

        (function (res) {

            var warningLayer = new OpenLayers.Layer.Vector("warningLayers", { styleMap: this.myDrawLayerStyle });
            fullMap.addLayer(warningLayer);

            var feageo = CreateOFeatureByDots(res, "#FFAE00", 80);
            warningLayer.addFeatures([feageo]);
            

        })(components);

        this.resultAnalysis();
        this.clickControl();
        //this.layerEditClickEvt();//图层修改
        this.drawActived = false;
        this.actualYJLayer = R2.warningResultLayer;
        this.drawResultLayer = null;

        // bycsw
        this.changeState();
        //添加等值线显示
        this.AddRainLayer();
        //控制等值线显示
        this.ControlRainlayer();
        //高级查询
        this.QueryWarnlayerForEditor();
        //修改预警日期和网格类型
        this.modifyWarnInfo();
        CreateImgJpg();
        ScanJpg();
    },
    //初始加载页面样式
    cssInit: function () {
        //页面弹出及内容添加
        $("#ui_left").hide();
        $("#ui_left1").show();
        $("#ui_left1").html(this.content);
        //按钮样式初始化
        $(".wraThreeXiu").css("opacity", 1);
        $(".wraThreeXiu").eq(7).css("opacity", "0.5");
        $(".wraThreeXiu").eq(8).css("opacity", "0.5");

        ////csw
        //$("#war_select_style .checkBoxSpace").eq(1).attr("checked", 'true');
        //$("#war_select_style .checkBoxSpace").eq(0).attr("checked", 'false');
        $("#war_editor_style .checkBoxSpace_warn").eq(1).attr("checked", 'checked');
        $("#war_editor_style .checkBoxSpace_warn").eq(0).attr("checked", '');

        $(".warninfo_date").focus(function () {
            $(this).calendar({ format: 'yyyy/MM/dd HH:mm:ss', zIndex: 10001 });
            $(this).css("border-color", "#e4a112");
        });


    },

    //修改预警日期和网格类型
    modifyWarnInfo: function () {
        $(".warninfo_modify").die("click");
        $(".warninfo_modify").live("click",function () {
            var Modify_datetime = $(".warninfo_date").eq(0).val();
            var modify_net = $(".warninfo_netsize").eq(0).val();
            //更新数据库
            //$.post(baseUrl + "EarlyWarning/ModifyWarnMess", { layerid: R2.WarnLayerID, warndate: Modify_datetime, nettype: modify_net }, function (rest) {
            //    if (rest == "success") {
            //        alert("修改成功！");
            //    } else {
            //        alert(rest);
            //    }

            //})
        })
        
    },
    //状态切换
    changeState: function () {
        var tempobj = this;
        $(".wraCanvasBox  .wraThreeXiu").click(function () {
            $(this).addClass("selectbtn").siblings().removeClass("selectbtn");
        });
        $(".wraCanvasBox2  .wraThreeXiu").click(function () {
            $(this).addClass("selectbtn").siblings().removeClass("selectbtn");
        });

        $("#war_select_style .checkBoxSpace_warn").click(function () {
            var idx = $(this).index();
            tempobj.removeAllDrawLayers();
            tempobj.IsfirstDraw = true;
            IswarnSelect = true;
            if (idx == 0) {
                tempobj.showWarnResultLayerBox(false);
            }
            else if (idx == 2) {
                tempobj.showWarnResultLayerBox(true);
            }
        });
        $("#war_showlayer_style .checkBoxSpace_warn").click(function () {
            var idx = $(this).index();
            if (idx == 0) {
                tempobj.showWarnResultLayer(true);
            }
            else if (idx == 2) {
                tempobj.showWarnResultLayer(false);
            }
        });
        $("#gradebest").click(function () {
            $(".warBox").animate({ "left": "-382px", "opacity": "0" }, function () {
                $(".warBox3").animate({ "left": "0px", "opacity": "1" });
            });
            
            $("#wlistdata").html("");
        })

        $("#layerMana").click(function () {
            //var layMane = new R2.Business.LayerManager({ left: 1 });
            layerManaFun(1);
        })
        $(".return_to_fx").click(function () {
            $(".warBox3").animate({ "left": "-382px", "opacity": "0" }, function () {
                $(".warBox").animate({ "left": "0px", "opacity": "1" });
            });
            
            $("#wlistdata").html("");
        })
    },
    AddRainLayer:function()
    {
        var index = 4;
        for (var i = 0; i < R2.rainLayers.length; i++) {
            if (R2.rainLayers[i] != "" && R2.rainLayers[i] != null) {
                var gdb = R2.rainLayers[i].split('|');
                var gdbps = [];
                gdbps.push(gdb[1]);
                gdbps.push(gdb[2]);
                var rainlayer = new Zondy.Map.Layer("rain" + i, gdbps,
                    {
                        ip: R2.gisIp,
                        port: R2.gisPort,
                        transitionEffect: "resize",
                        singleTile: true,
                        isBaseLayer: false,
                        ration: 1,
                        turnOnGuid: true
                    });
                rainlayer.setOpacity(0);
                fullMap.addLayer(rainlayer);
                fullMap.setLayerIndex(rainlayer, index);
                index++;
            }
        }
    },
    ControlRainlayer:function(){
        //15rain
        $("#rainlayer_container input:eq(0)").click(function () {
            if (R2.rainLayers[0] != "" && R2.rainLayers[0] != null && R2.rainLayers[0] != undefined) {
                var ch = $(this).attr("checked");
                if (ch) {
                    fullMap.getLayersByName("rain0")[0].setOpacity(1);
                }
                else {
                    fullMap.getLayersByName("rain0")[0].setOpacity(0);
                }
            }
        });

        //Todayrain
        $("#rainlayer_container input:eq(2)").click(function () {
            if (R2.rainLayers[1] != "" && R2.rainLayers[1] != null && R2.rainLayers[1] != undefined) {
                var ch = $(this).attr("checked");
                if (ch) {
                    fullMap.getLayersByName("rain1")[0].setOpacity(1);
                }
                else {
                    fullMap.getLayersByName("rain1")[0].setOpacity(0);
                }
            }
        });

        //24Hsumrain
        $("#rainlayer_container input:eq(1)").click(function () {
            if (R2.rainLayers[2] != "" && R2.rainLayers[2] != null && R2.rainLayers[2] != undefined) {
                var ch=  $(this).attr("checked");
                if (ch) {
                    fullMap.getLayersByName("rain2")[0].setOpacity(1);
                }
                else {
                    fullMap.getLayersByName("rain2")[0].setOpacity(0);
                }
            }
        });

        //24Hsumrain
        $("#rainlayer_container input:eq(3)").click(function () {
            if (R2.rainLayers[3] != "" && R2.rainLayers[3] != null && R2.rainLayers[3] != undefined) {
                var ch = $(this).attr("checked");
                if (ch) {
                    fullMap.getLayersByName("rain3")[0].setOpacity(1);
                }
                else {
                    fullMap.getLayersByName("rain3")[0].setOpacity(0);
                }
            }
        });
        
    },
    removeRainlayer:function(){
        for (var i = 0; i < R2.rainLayers.length; i++) {
            if (fullMap.getLayersByName("rain" + i)[0] != null || fullMap.getLayersByName("rain" + i)[0] != undefined) {
                for (var j = fullMap.getLayersByName("rain" + i).length; j > 0; j--) {
                    fullMap.removeLayer(fullMap.getLayersByName("rain" + i)[j - 1]);
                }
            }
            //if (fullMap.g
        }
    },
    //显示隐 显示预警图框
    showWarnResultLayerBox:function(b)
    {
        if (b) {
            $("#war_showlayer_title").css({ display: "block" });
            $("#war_showlayer_style").css({ display: "block" });
            $("#warn_drawbox").css({ height: "180px" });
            $("#war_select_style .checkBoxSpace_warn").eq(0).attr("checked", 'checked');
            $("#war_select_style .checkBoxSpace_warn").eq(1).attr("checked", '');
        }
        else {
            $("#war_showlayer_title").css({ display: "none" });
            $("#war_showlayer_style").css({ display: "none" }); 
            $("#warn_drawbox").css({ height: "180px" });
            $("#war_select_style .checkBoxSpace_warn").eq(1).attr("checked", 'checked');
            $("#war_select_style .checkBoxSpace_warn").eq(0).attr("checked", '');
        }
    },
    //显示隐 显示预警图
    showWarnResultLayer: function (b) {
        //if (b) {
        //    R2.WarnOriLayer.setOpacity(0.6);
        //}
        //else {
        //    R2.WarnOriLayer.setOpacity(0);
        //}
    },
    //预警分析高级设置
    QueryWarnlayerForEditor:function()
    {
        var that = this;
        
        $("#warn_rectangleQ").click(function () {
            fullMap.getControl("drc_rect").deactivate();
            fullMap.getControl("drc_circle").deactivate();
            fullMap.getControl("drc_polygon").deactivate();
            cleanFormer(fullMap.getControl("drc_rect"));
            fullMap.getControl("drc_rect").featureAdded = that.AddPolygonForQ;
            
        });
        $("#warn_polygonQ").click(function () {
            fullMap.getControl("drc_rect").deactivate();
            fullMap.getControl("drc_circle").deactivate();
            fullMap.getControl("drc_polygon").deactivate();
            cleanFormer(fullMap.getControl("drc_polygon"));
            fullMap.getControl("drc_polygon").featureAdded = that.AddPolygonForQ;

        });


        
    },
    //拉框 多边形后
    AddPolygonForQ:function(feature) {

        fullMap.getLayersByName("Boxlayer")[0].removeAllFeatures();
        fullMap.getControl("drc_circle").deactivate();
        fullMap.getControl("drc_rect").deactivate();
        fullMap.getControl("drc_polygon").deactivate();
        return;
        var that = this;
        var request = new Zondy.Service.HttpRequest();

        var pointStr = "";
        for (var i = 0; i < feature.geometry.components[0].components.length; i++) {
            pointStr = pointStr + "," + feature.geometry.components[0].components[i].x + "," + feature.geometry.components[0].components[i].y;
        }
        pointStr = pointStr.substring(1, pointStr.length);
        var gdbps = "";
       
        gdbps = R2.CreateLayerR;

        if (R2.IsAnalysis != "是" && IswarnSelect ==true) {
            gdbps = R2.warningOriResultLayer[0];
        }
        var vzhi = encodeURI("起始值>=25");
        var url = "http://" + R2.gisIp + ":" + R2.gisPort + "/igs/rest/mrfs/layer/query?gdbp=" + gdbps +
        "&geometryType=polygon&structs={IncludeGeometry:true,IncludeWebGraphic:true,IncludeAttribute:true}&where="+vzhi+"&pageCount=1000&geometry=" + pointStr + "&f=json";
        request.ajax(url, null, function (data) {
            if (data.TotalCount > 0) {
                FeatureAllForQ = data;
                editorFlashLayer = CreateFlashlayer(data);
                AddPolygonList(data);
            }
            else {
                alert("查询结果为空！");
            }
        })
        //feature.destroy();
        fullMap.getLayersByName("Boxlayer")[0].removeAllFeatures();
        fullMap.getControl("drc_circle").deactivate();
        fullMap.getControl("drc_rect").deactivate();
        fullMap.getControl("drc_polygon").deactivate();
    },
    
    //图层编辑
    layerCompile: function () {
        //addYJLayer(R2.warningResultLayer);
    },
    //查询该图层的信息
    queryLayerInfo: function (layer) {
        var that = this;
        //$.post(baseUrl + "HistoryWarning/QueryHistoryByLayer", { warningLayer: layer.join("&") }, function (cbdata) {
        //    that.data = cbdata;
        //    //$(".wraInfoRes").eq(0).html(cbdata.warningTime);
        //    //$(".wraInfoRes").eq(1).html(cbdata.grideRole + "m X " + cbdata.grideRole+"m");
            
        //    $(".wraInfoRes .warninfo_date").eq(0).val(cbdata.warningTime.toString().replace("\t"," "));
        //    //if (cbdata.grideRole == "1000") $(".wraInfoRes  .warninfo_netsize").eq(0).val(1);
        //    //else $(".wraInfoRes  .warninfo_netsize").eq(0).val(1);warninfo_type
        //    $(".wraInfoRes  .warninfo_netsize").eq(0).val(cbdata.grideRole);
        //    $(".wraInfoRes .warninfo_type").eq(0).html(cbdata.forecastTime + "小时");

        //    CreateImgJpg(cbdata.warningTime, cbdata.operateTime);
        //    ScanJpg(cbdata.warningTime, cbdata.operateTime);
        //    window.qpd_yubaoDate = cbdata.warningTime;
        //    window.qpd_yubaoDate1 = cbdata.operateTime;
        //});
    },
    //结果分析
    resultAnalysis: function () {
        var that = this;
       
        //制作预报词
        $("#btnMarkybc").click(function () {
            //if (that.drawResultLayer) {
            //    var ybc = new MakeYBC(that.drawResultLayer);
            //    ybc.init();
            //} else {
            //    var ybc = new MakeYBC(R2.warningResultLayer[0]);
            //    ybc.init();
            //}
        })

        //行政区分析
        $("#btnxzqanaliysis").click(function () {
            that.superPositionXingzheng();
        })

    },
    removeAllDrawLayers:  function () {
        if(fullMap.getLayersByName("tucengxiugai1")[0] != null || fullMap.getLayersByName("tucengxiugai1")[0] != undefined) {
            for (var i = fullMap.getLayersByName("tucengxiugai1").length; i > 0; i--) {
                fullMap.getLayersByName("tucengxiugai1")[i - 1].removeAllFeatures();
                fullMap.removeLayer(fullMap.getLayersByName("tucengxiugai1")[i - 1]);
                 }
        }
        //if(fullMap.getLayersByName("layerMana")[0] != null || fullMap.getLayersByName("layerMana")[0] != undefined) {
        //    for (var i = fullMap.getLayersByName("layerMana").length; i > 0; i--) {
        //        fullMap.removeLayer(fullMap.getLayersByName("layerMana")[i - 1]);
        //    }
        //}
        
},
    //点击事件
    clickControl: function () {
        var that=this;
        //页面返回事件
        $(".wrareturn").click(function () {
            $("#ui_left").show();
            $("#ui_left1").hide();
            CreateContent(warningAnalyse);
            R2.ybcContent = null;
            //返回时清空当前添加的图层
            if (fullMap.getLayersByName("warningLayer").length>0) {
                fullMap.removeLayer(R2.mapVector);
            }
            if (fullMap.getLayersByName("warningOriLayer").length>0) {
                fullMap.removeLayer(R2.WarnOriLayer);
            }
            that.IsfirstDraw = true;
            IswarnSelect = true;
            that.removeAllDrawLayers();
            that.removeRainlayer();
            //清空预览图层
            removeScanLayers();
        });
        //成果发布事件
        //签批单
        //$("#qpdfb").click(function () {
        //    if (R2.ybcContent != null) {
        //        resultIssue(0);
        //    }
        //});
        ////乡镇等级表
        //$("#xzdjbfb").click(function () {
        //    that.data;
        //    if (that.analysisFlag) {
        //        resultIssue(1);
        //    } else {
        //        that.superPositionXingzheng("乡镇等级表");
        //    }
            
        //});
        ////险情等级表
        //$("#xqdjbfb").click(function () {
        //    that.data;
        //    if (that.analysisFlag) {
        //        resultIssue(2);
        //    } else {
        //        that.superPositionXingzheng("险情等级表");
        //    }
        //});
        
    },
    //成果发布，分析完后执行的发布
    resultPublish: function (index) {
        resultIssue(index);
    },
    //与行政区叠加
    superPositionXingzheng: function (flag) {
        top.waitPage.show("预警图层与行政区进行叠加...");
        SuperPositionYJandQH(flag);
    },
    //展示叠加结果
    addResultList: function () {
        var result = new XingzhengResult(R2.warningAnalysisLayer);
        result.init();
    },
    
    layerGdb: null,//图层名
    //创建图层
    createLayer: function () {
        var that = this;
        var time = new Date();
        var timeStr = "tempLayer"+time.getFullYear().toString() + (time.getMonth() + 1).toString() + time.getDate().toString() + time.getHours().toString() + time.getMinutes().toString() + time.getSeconds().toString();
        $.post(baseUrl + "FactorQuery/CreateLayer", { layerName: timeStr }, function (cbdata) {
            if (cbdata == "true") {
                that.layerGdb = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/" + timeStr;
            }
        });
    },
    //Copy图层
    CopyLayer: function (layer) {
        var that = this;
        var time = new Date();
        R2.copyLayer = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/" + "CopyLayer" + time.getFullYear().toString() + (time.getMonth() + 1).toString() + time.getDate().toString() + time.getHours().toString() + time.getMinutes().toString() + time.getSeconds().toString();
        $.post(baseUrl + "FactorQuery/CopyLayer", { "gdbpsLayer": layer, "deslayer": R2.copyLayer }, function (ds) {
            if (ds != "fail") {
                that.layerGdb = R2.copyLayer;
                R2.CreateLayerR = R2.copyLayer;
            }
        })
    },

    myDrawLayerStyle:new OpenLayers.StyleMap({
        "default": new OpenLayers.Style({
            fillColor: "${color}",
            strokeWidth: 0,
            fillOpacity: 0.6,
            label: "${label}",
            fontColor: "black",
            fontSize: "16px",
            fontOpacity: "0"
        })
    }),
    colorRang: ["#ff0000", "#FFAE00", "#ffff00"],
    drawLayer1: null,
    drawActived: false,//绘图状态，防止开始按钮的多次点击
    actualYJLayer: null,//未修改的预警图层
    drawResultLayer:null,//手绘裁剪后得到的图层
    //初始化图层操作
    drawInit: function () {
        var that = this;
        
        that.drawLayer1 = new OpenLayers.Layer.Vector("tucengxiugai1", { styleMap: that.myDrawLayerStyle });
        fullMap.addLayer(that.drawLayer1);
        //创建图层
        that.createLayer();

        var gdbps = R2.warningResultLayer;
        R2.mapVector = new Zondy.Map.Layer("warningLayer", gdbps,
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
        //that.drawActived = true;
        that.drawResultLayer = null;
        //postFlag = true;
    },
   
    //修改图层操作
    layerEditClickEvt: function () {
        var that = this;
        var postFlag = false;//防止多次点击裁剪


        //if (R2.IsAnalysis != "是" && IswarnSelect == true) {
        //    gdbps = R2.warningOriResultLayer[0];
        //}

        //清除绘制图层按钮事件 从mapgis图层中获取要素 并绘制
        $("#clearDrawLayer").die("click");
        $("#clearDrawLayer").live("click", function () {
            that.removeAllDrawLayers();
            
            //清除当前添加图层，返回到添加预警图层初始状态
            if (fullMap.getLayersByName("warningLayer").length>0) {
                fullMap.removeLayer(R2.mapVector);
            }
            var gdbps = [];
            if (R2.IsAnalysis != "是" && IswarnSelect == true) {
                fullMap.removeLayer(R2.WarnOriLayer);
                R2.WarnOriLayer = new Zondy.Map.Layer("warningOriLayer", R2.warningOriResultLayer,
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
                gdbps.push(R2.CreateLayerR);

            } else {
                gdbps.push(R2.CreateLayerR);
            }
            R2.mapVector = new Zondy.Map.Layer("warningLayer", gdbps,
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
            that.drawActived = true;
            that.drawResultLayer = null;
            
            that.GeometryArr.splice(0,that.GeometryArr.length)
            that.GeometryArr.length = 0;

        });
       
        
        var control1 = null;
        var control2 = null;
        var control3 = null;
        //绘制图层按钮事件
        $("#wraCanvas").die("click");
        $("#wraCanvas").live("click",function () {
            //$(".wraThreeXiu").css("opacity", 1);
            var idx = $("#war_select_style input[type=radio]:checked").index();  //选择模式
            if (that.IsfirstDraw) {

                that.drawLayer1 = new OpenLayers.Layer.Vector("tucengxiugai1", { styleMap: that.myDrawLayerStyle });
                fullMap.addLayer(that.drawLayer1);
                //that.IsfirstDraw = false;
                that.GeometryArr.splice(0, that.GeometryArr.length)
                that.GeometryArr.length = 0;

            }
            else {
                if (fullMap.getLayersByName("tucengxiugai1").length<1) {
                    that.drawLayer1 = new OpenLayers.Layer.Vector("tucengxiugai1", { styleMap: that.myDrawLayerStyle });
                    fullMap.addLayer(that.drawLayer1);
                }
            }
            //else {
                
            //}
            if (control1 != null) {
                control1.deactivate();
            }
            if (control2 != null) {
                control2.deactivate();
            }
            if (control3 != null) {
                control3.deactivate();
            }

            
            var grade_index = $(".wraCanvasBox").find(".selectbtn").index();  //险情等级
            var Select_index = $(".wraCanvasBox2").find(".selectbtn").index();  //选择形状
            if (idx == 0) {    //选择模式 默认
                switch (Select_index) { 
                    case 0:             //环形
                        {
                            if (grade_index == 0) {
                                if (that.drawLayer1 != null) {
                                    var options = { handlerOptions: { freehand: true } };
                                    control1 = new OpenLayers.Control.DrawFeature(that.drawLayer1, OpenLayers.Handler.Polygon, options);
                                    control1.featureAdded = function (evt) {
                                        control1.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        that.GeometryArr.push({ geometry: geometry, index: "1" });
                                        //将所画的区域图层添加到预警图层
                                        //if (that.layerGdb) {
                                        //    $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: that.layerGdb, grade: "1" }, function () {
                                        //    });
                                        //}
                                    }
                                    fullMap.addControl(control1);
                                    control1.activate();
                                }
                            }
                            else if (grade_index == 1) {
                                if (that.drawLayer2 != null) {
                                    var options = { handlerOptions: { freehand: true } };
                                    control2 = new OpenLayers.Control.DrawFeature(that.drawLayer2, OpenLayers.Handler.Polygon, options);
                                    control2.featureAdded = function (evt) {
                                        control2.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        that.GeometryArr.push({ geometry: geometry, index: "2" });
                                        //将所画的区域图层添加到预警图层
                                        //if (that.layerGdb) {
                                        //    $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: that.layerGdb, grade: "2" }, function () {
                                        //    });
                                        //}
                                    }
                                    fullMap.addControl(control2);
                                    control2.activate();
                                }
                            }
                            else if (grade_index == 2) {
                                if (that.drawLayer3 != null) {
                                    var options = { handlerOptions: { freehand: true } };
                                    control3 = new OpenLayers.Control.DrawFeature(that.drawLayer3, OpenLayers.Handler.Polygon, options);
                                    control3.featureAdded = function (evt) {
                                        control3.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        that.GeometryArr.push({ geometry: geometry, index: "3" });
                                        //将所画的区域图层添加到预警图层
                                        //if (that.layerGdb) {
                                        //    $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: that.layerGdb, grade: "3" }, function () {
                                        //    });
                                        //}
                                    }
                                    fullMap.addControl(control3);
                                    control3.activate();
                                }
                            }
                            that.drawActived = true;
                            postFlag = true;
                            break;
                        }
                    case 1:   //多边形
                        {
                            if (grade_index == 0) {
                                if (that.drawLayer1 != null) {
                                    var options = { handlerOptions: { id: "drc_polygon1" } };
                                    control1 = new OpenLayers.Control.DrawFeature(that.drawLayer1, OpenLayers.Handler.Polygon, options);
                                    control1.featureAdded = function (evt) {
                                        control1.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        that.GeometryArr.push({ geometry: geometry, index: "1" });
                                        //将所画的区域图层添加到预警图层
                                        //if (that.layerGdb) {
                                        //    $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: that.layerGdb, grade: "1" }, function () {
                                        //    });
                                        //}
                                    }
                                    fullMap.addControl(control1);
                                    control1.activate();
                                }
                            }
                            else if (grade_index == 1) {
                                if (that.drawLayer2 != null) {
                                    var options = { handlerOptions: { id: "drc_polygon1" } };
                                    control2 = new OpenLayers.Control.DrawFeature(that.drawLayer2, OpenLayers.Handler.Polygon, options);
                                    control2.featureAdded = function (evt) {
                                        control2.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        that.GeometryArr.push({ geometry: geometry, index: "2" });
                                        //将所画的区域图层添加到预警图层
                                        //if (that.layerGdb) {
                                        //    $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: that.layerGdb, grade: "2" }, function () {
                                        //    });
                                        //}
                                    }
                                    fullMap.addControl(control2);
                                    control2.activate();
                                }
                            }
                            else if (grade_index == 2) {
                                if (that.drawLayer3 != null) {
                                    var options = { handlerOptions: { id: "drc_polygon1" } };
                                    control3 = new OpenLayers.Control.DrawFeature(that.drawLayer3, OpenLayers.Handler.Polygon, options);
                                    control3.featureAdded = function (evt) {
                                        control3.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        that.GeometryArr.push({ geometry: geometry, index: "3" });
                                        //将所画的区域图层添加到预警图层
                                        //if (that.layerGdb) {
                                        //    $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: that.layerGdb, grade: "3" }, function () {
                                        //    });
                                        //}
                                    }
                                    fullMap.addControl(control3);
                                    control3.activate();
                                }
                            }
                            that.drawActived = true;
                            postFlag = true;
                            break;
                        }
                    default:
                        break;
                }
            }
            else if (idx == 2) {   //选择模式 自定义
                switch (Select_index) {
                    case 0:    // 环形
                        {
                            if (grade_index == 0) {
                                if (that.drawLayer1 != null) {
                                    var options = { handlerOptions: { freehand: true }}
                                    control1 = new OpenLayers.Control.DrawFeature(that.drawLayer1, OpenLayers.Handler.Polygon, options);
                                    control1.featureAdded = function (evt) {
                                        var FeaCount = evt.layer.features.length;
                                        if (evt.layer.features[FeaCount - 1]) {
                                            evt.layer.removeFeatures(evt.layer.features[FeaCount - 1]);
                                        }
                                        control1.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        var feageo = CreateOFeatureByDots(res, that.colorRang[0], R2.warningGrade[3]);
                                        that.drawLayer1.addFeatures([feageo]);
                                        //将所画的区域图层添加到预警图层
                                        if (R2.CreateLayerR) {
                                            $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: R2.CreateLayerR, grade: "1" }, function () {
                                                that.activeCaijian();
                                                postFlag = true;
                                                that.IsfirstDraw = false;
                                                IswarnSelect = false;
                                            });
                                        }
                                    }
                                    fullMap.addControl(control1);
                                    control1.activate();
                                }
                            }
                            else if (grade_index == 1) {
                                if (that.drawLayer1 != null) {
                                    var options = { handlerOptions: { freehand: true } };
                                    control2 = new OpenLayers.Control.DrawFeature(that.drawLayer1, OpenLayers.Handler.Polygon, options);
                                    control2.featureAdded = function (evt) {
                                        var FeaCount = evt.layer.features.length;
                                        if (evt.layer.features[FeaCount - 1]) {
                                            evt.layer.removeFeatures(evt.layer.features[FeaCount - 1]);
                                        }
                                        control2.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        var feageo = CreateOFeatureByDots(res, that.colorRang[1], R2.warningGrade[2]);
                                        that.drawLayer1.addFeatures([feageo]);
                                        //将所画的区域图层添加到预警图层that.layerGdb
                                        if (R2.CreateLayerR) {
                                            $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: R2.CreateLayerR, grade: "2" }, function () {
                                                that.activeCaijian();
                                                postFlag = true;
                                                that.IsfirstDraw = false;
                                                IswarnSelect = false;
                                            });
                                        }
                                    }
                                    fullMap.addControl(control2);
                                    control2.activate();
                                }
                            }
                            else if (grade_index == 2) {  
                                if (that.drawLayer1 != null) {
                                    var options = { handlerOptions: { freehand: true }};
                                    control3 = new OpenLayers.Control.DrawFeature(that.drawLayer1, OpenLayers.Handler.Polygon, options);
                                    control3.featureAdded = function (evt) {
                                        var FeaCount = evt.layer.features.length;
                                        if (evt.layer.features[FeaCount - 1]) {
                                            evt.layer.removeFeatures(evt.layer.features[FeaCount - 1]);
                                        }
                                        control3.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        var geometry = createFeatureByDots(res);
                                        var feageo = CreateOFeatureByDots(res, that.colorRang[2], R2.warningGrade[1]);
                                        that.drawLayer1.addFeatures([feageo]);
                                        //将所画的区域图层添加到预警图层
                                        if (R2.CreateLayerR) {
                                            $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: R2.CreateLayerR, grade: "3" }, function () {
                                                that.activeCaijian();
                                                postFlag = true;
                                                that.IsfirstDraw = false;
                                                IswarnSelect = false;
                                            });
                                        }
                                    }
                                    fullMap.addControl(control3);
                                    control3.activate();
                                }
                            }
                            //that.drawActived = true;
                            //postFlag = true;
                            break;
                        }
                    case 1:   //多边形
                        {
                            if (grade_index == 0) {
                                if (that.drawLayer1 != null) {
                                    var options = { handlerOptions: { id: "drc_polygon1" }};
                                    control1 = new OpenLayers.Control.DrawFeature(that.drawLayer1, OpenLayers.Handler.Polygon, options);
                                    control1.featureAdded = function (evt) {
                                        var FeaCount = evt.layer.features.length;
                                        if (evt.layer.features[FeaCount - 1]) {
                                            evt.layer.removeFeatures(evt.layer.features[FeaCount - 1]);
                                        }
                                        control1.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        //平滑
                                        $.post(baseUrl + "FactorQuery/SmoothLine", { dots: JSON.stringify(res) }, function (resdata) {
                                            var geometry = createFeatureByDots(resdata);
                                            var feageo = CreateOFeatureByDots(resdata, that.colorRang[0], R2.warningGrade[3]);
                                            that.drawLayer1.addFeatures([feageo]);
                                            //that.GeometryArr.push({ geometry: geometry, index: "1" });
                                            //将所画的区域图层添加到预警图层
                                            if (R2.CreateLayerR) {
                                                $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: R2.CreateLayerR, grade: "1" }, function () {
                                                    that.activeCaijian();
                                                    postFlag = true;
                                                    that.IsfirstDraw = false;
                                                    IswarnSelect = false;
                                                });
                                            }
                                        })
                                    }
                                    fullMap.addControl(control1);
                                    control1.activate();
                                }
                            }
                            else if (grade_index == 1) {
                                if (that.drawLayer1 != null) {
                                    var options = { handlerOptions: { id: "drc_polygon1" }};
                                    control2 = new OpenLayers.Control.DrawFeature(that.drawLayer1, OpenLayers.Handler.Polygon, options);
                                    control2.featureAdded = function (evt) {
                                        var FeaCount = evt.layer.features.length;
                                        if (evt.layer.features[FeaCount-1]){
                                            evt.layer.removeFeatures(evt.layer.features[FeaCount - 1]);
                                        }
                                        control2.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        //平滑
                                        $.post(baseUrl + "FactorQuery/SmoothLine", { dots: JSON.stringify(res) }, function (resdata) {
                                            var geometry = createFeatureByDots(resdata);
                                            var feageo = CreateOFeatureByDots(resdata, that.colorRang[1], R2.warningGrade[2]);
                                            that.drawLayer1.addFeatures([feageo]);
                                            //that.GeometryArr.push({ geometry: geometry, index: "2" });
                                            //将所画的区域图层添加到预警图层
                                            if (R2.CreateLayerR) {
                                                $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: R2.CreateLayerR, grade: "2" }, function () {
                                                    that.activeCaijian();
                                                    postFlag = true;
                                                    that.IsfirstDraw = false;
                                                    IswarnSelect = false;
                                                });
                                            }
                                        });
                                    }
                                    fullMap.addControl(control2);
                                    control2.activate();
                                }
                            }
                            else if (grade_index == 2) {
                                if (that.drawLayer1 != null) {
                                    var options = { handlerOptions: { id: "drc_polygon1" } };
                                    control3 = new OpenLayers.Control.DrawFeature(that.drawLayer1, OpenLayers.Handler.Polygon, options);
                                    control3.featureAdded = function (evt) {
                                        var FeaCount = evt.layer.features.length;
                                        if (evt.layer.features[FeaCount - 1]) {
                                            evt.layer.removeFeatures(evt.layer.features[FeaCount - 1]);
                                        }
                                        control3.deactivate();
                                        var res = [];
                                        for (var i = 0; i < evt.geometry.components[0].components.length; i++) {
                                            res.push({ x: evt.geometry.components[0].components[i].x, y: evt.geometry.components[0].components[i].y });
                                        }
                                        //平滑
                                        $.post(baseUrl + "FactorQuery/SmoothLine", { dots: JSON.stringify(res) }, function (resdata) {
                                            var geometry = createFeatureByDots(resdata);
                                            var feageo = CreateOFeatureByDots(resdata, that.colorRang[2], R2.warningGrade[1]);
                                            that.drawLayer1.addFeatures([feageo]);
                                            //that.GeometryArr.push({ geometry: geometry, index: "3" });
                                            //将所画的区域图层添加到预警图层
                                            if (R2.CreateLayerR) {
                                                $.post(baseUrl + "FactorQuery/AddFeatures", { components: JSON.stringify(geometry), gdb: R2.CreateLayerR, grade: "3" }, function () {
                                                    that.activeCaijian();
                                                    postFlag = true;
                                                    that.IsfirstDraw = false;
                                                    IswarnSelect = false;
                                                });
                                            }
                                        })
                                    }
                                    fullMap.addControl(control3);
                                    control3.activate();
                                }
                            }
                            break;
                        }
                    default:
                        break;
                }
            }

        });
        
        //行政区裁剪
        $("#wraCaijian").click(function () {
            if (that.drawActived && postFlag) {
                postFlag = false;
                waitPage.hide();
                waitPage.show("正在进行裁剪分析.....");
                var styleStr = $("#war_select_style input[type=radio]:checked").val();
                var idx = $("#war_select_style input[type=radio]:checked").index();

                //默认模式
                //将所画的区域图层添加到预警图层
                if (idx == 0) {
                    var gdbps = R2.warningResultLayer;
                    if (gdbps[0]) {
                        if (that.GeometryArr.length > 0) {
                            $.post(baseUrl + "FactorQuery/AddFeatureSet", { components: JSON.stringify(that.GeometryArr), gdb: R2.copyLayer }, function (dataS) {
                                if (dataS == "true") {
                                    //自定义模式
                                    $.post(baseUrl + "FactorQuery/SuperLayer", { layer: R2.copyLayer }, function (data) {
                                        //更新数据库
                                        $.post(baseUrl + "EarlyWarning/UpdateHistoryWarning", { layerid: R2.WarnLayerID, copyLayer: data }, function (datacopy) {
                                            if (datacopy == "success") {
                                            }
                                        })
                                        R2.
                                        that.drawResultLayer = data;
                                        R2.warningResultLayer = [];
                                        R2.warningResultLayer.push(data);
                                        //去除所画图层，和预警图层
                                        if (fullMap.getLayersByName("warningLayer").length > 0) {
                                            fullMap.removeLayer(R2.mapVector);
                                        }
                                        fullMap.removeLayer(that.drawLayer1);
                                        fullMap.removeLayer(that.drawLayer2);
                                        fullMap.removeLayer(that.drawLayer3);

                                        that.drawLayer1 = null;
                                        that.drawLayer2 = null;
                                        that.drawLayer3 = null;
                                        that.drawActived = false;
                                        //$(".wraThreeXiu").css("opacity", 0.4);
                                        //$(".wraThreeXiu").eq(0).css("opacity", 1);
                                        //添加所绘后裁剪的图层
                                        var gdbps = [];
                                        gdbps.push(data);
                                        R2.mapVector = new Zondy.Map.Layer("warningLayer", gdbps,
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
                                    });
                                }
                            });
                        }
                    }
                }
                else if (idx == 2) {
                    var gdbp = R2.warningResultLayer;
                    //自定义模式
                    var time = new Date();
                    R2.copyLayer = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/" + "CopyWarnLayer" + time.getFullYear().toString() + (time.getMonth() + 1).toString() + time.getDate().toString() + time.getHours().toString() + time.getMinutes().toString() + time.getSeconds().toString();
                    //复制图层
                    $.post(baseUrl + "FactorQuery/CopyLayer", { "gdbpsLayer": R2.CreateLayerR, "deslayer": R2.copyLayer }, function (ds) {
                        if (ds != "fail") {
                            R2.CreateLayerR = R2.copyLayer;
                            //裁剪叠加
                            $.post(baseUrl + "FactorQuery/SuperLayer", { layer: R2.CreateLayerR }, function (data) {

                                //更新数据库
                                $.post(baseUrl + "EarlyWarning/UpdateHistoryWarning", { layerid: R2.WarnLayerID, copyLayer: data }, function (datacopy) {
                                    if (datacopy == "success") {
                                        R2.IsAnalysis = "是";
                                    }
                                })

                                that.drawResultLayer = data;
                                R2.CreateLayerR = data;
                                R2.warningResultLayer = [];
                                R2.warningResultLayer.push(data);
                                //去除所画图层，和预警图层
                                if (fullMap.getLayersByName("warningLayer").length > 0) {
                                    fullMap.removeLayer(R2.mapVector);
                                }
                                fullMap.removeLayer(that.drawLayer1);

                                that.drawLayer1 = null;
                                that.drawActived = false;

                                //添加所绘后裁剪的图层
                                var gdbps = [];
                                gdbps.push(data);
                                R2.mapVector = new Zondy.Map.Layer("warningLayer", gdbps,
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
                                waitPage.hide();
                            });

                        }
                        else {
                            waitPage.hide();
                        }
                    })

                }
                that.IsfirstDraw = true;
                IswarnSelect = true;
                R2.IsAnalysis = "是";
                $(".wraThreeXiu").eq(7).css("opacity", "0.5");
                $(".wraThreeXiu").eq(8).css("opacity", "0.5");
                
            }
        })
        


    },
    activeCaijian: function () {
        $(".wraThreeXiu").css("opacity", 1);
        this.drawActived = true;
    }
};
//通过点集创建OpenlayerFeature
function CreateOFeatureByDots(dots,color,label) {
    var components = [];
    for (var i = 0; i < dots.length; i++) {
        var point = new OpenLayers.Geometry.Point(dots[i].x, dots[i].y)
        components.push(point);
    }
    var lineRing = new OpenLayers.Geometry.LinearRing(components);
    var polygon = new OpenLayers.Geometry.Polygon([lineRing]);
    var fea = new OpenLayers.Feature.Vector(polygon, { color: color, label: label});
    return fea;
}
//预警结果与行政区叠加，进行查询
function SuperPositionYJandQH(flag) {
    flag = "乡镇等级表";
    //gdb = "gdbp://MapGisLocal/JNDZPRODUCT/sfcls/EarlyWarningFinalResultWP_20140320100000_aeab5f89-f765-4a22-bd12-bbc818cc4a20";
    //if (warningResultAnalysis.drawResultLayer != null) {
    //    var gdb = warningResultAnalysis.drawResultLayer;
    //} else {
    //    var gdb = R2.warningResultLayer[0];
    //}
    //if (gdb) {
    //    $.post(baseUrl + "FactorQuery/SuperPositionYJandQH", { gdb: gdb }, function (cbdata) {
    //        R2.warningAnalysisLayer = cbdata;
    //        warningResultAnalysis.analysisFlag = true;
    //        if (flag == "乡镇等级表") {
    //            warningResultAnalysis.resultPublish(1);
    //        } else if (flag == "险情等级表") {
    //            warningResultAnalysis.resultPublish(2);
    //        }else {
    //            warningResultAnalysis.addResultList();
    //        }
    //        top.waitPage.hide();
    //        //将预警图层与行政区叠加得到的结果图层保存到数据库
    //        //$.post(baseUrl + "HistoryWarning/SaveAnalysisResult", { warningLayer: R2.warningResultLayer.join("&"), resultLayer: R2.warningAnalysisLayer });
    //    });
    //}
    (function () {

        window.time = setTimeout(function() {
            warningResultAnalysis.addResultList();
            top.waitPage.hide();

            clearTimeout(window.time);
        }, 5000);

    })();
    
}
//通过点创建MapGIS要素对象
function createFeatureByDots(dots) {
    var dotArray = [];
    for (var i = 0; i < dots.length; i++) {
        var dot = new Zondy.Object.Point2D(dots[i].x, dots[i].y);
        dotArray.push(dot);
    }
    var GRegion = new Zondy.Object.GRegion(dotArray);
    var sfgeo = new Zondy.Object.FeatureGeometry({ RegGeom: [GRegion] });
    return sfgeo;
}
var FlashTimeID;
var oldGeoFID = 0;
//添加查询结果
 function AddPolygonList(feature)
{
     oldGeoFID = 0;
     $("#wlistdata").html("");
     var gradeList = R2.warningGrade;
    var myhtml = "";
    for (var i = 0; i < feature.TotalCount;i++)
    {
        var endVal = feature.SFEleArray[i].AttValue[1];
        var gd=GetgradeValue(endVal);
        myhtml = '<div id="listtr'+i+'" class="warn_tblist_tr">' +
                                     '<div class="warn_tblist_td">'+i+'</div>' +
                                     '<div class="warn_tblist_td">' +feature.SFEleArray[i].FID+ '</div>' +
                                     '<div class="warn_tblist_td_grade"><div class="' + gd[0] + '"></div><select id="select'+i+'">' +
                                           //'<option value="无">无</option>' +
                                           '<option value="三级">三级</option>' +
                                           '<option value="二级">二级</option>' +
                                           '<option value="一级">一级</option>' +
                                       '</select></div>' +
                                     '<div class="warn_tblist_td2"><div class="AlterGeo"></div><div class="DeleteGeo"></div></div>' +
                               '</div>';
        $("#wlistdata").append(myhtml);
        $("#wlistdata").find("#listtr"+i).find("#select" + i).val(gd[1]);
    }
     //下拉级别动态更改显示
    $(".warn_tblist_td_grade  select").change(function () {
        var str = $(this).val();
        var gb = GetValueByStr(str);
        $(this).parent().find("div").eq(0).removeAttr("class").addClass(gb[3]);
        return false;
    });
    
     //点击列表闪烁
    $(".warn_tblist_tr").click(function () {
        var index = $(this).find(".warn_tblist_td").eq(0).html();
        if (FlashTimeID) {
            clearTimeout(FlashTimeID);
            editorFlashLayer.drawFeature(editorFlashLayer.features[oldGeoFID], hideStyle);
        }
        oldGeoFID = index;
        flashFeature(index, 10);
    });


     //修改
    $(".warn_tblist_tr  .AlterGeo").click(function () {
        if (FlashTimeID) {
            clearTimeout(FlashTimeID);
            editorFlashLayer.drawFeature(editorFlashLayer.features[oldGeoFID], hideStyle);
        }
        var con1 = confirm("确定需要修改吗？");
        if (con1 == true) {
            var that = this;
            var fid = $(this).parent().parent().find(".warn_tblist_td").eq(1).html();
            var Strvalue = $(this).parent().parent().find(".warn_tblist_td_grade").eq(0).find("select").eq(0).val();
            //var gvalue = GetValueByStr(Strvalue);
            ////gdata.push({ "FID": fid, "GvalusL": gvalue[0], "GvalusH": gvalue[1] });

            //fidIndex = $(this).parent().parent().find(".warn_tblist_td").eq(0).html();
            //FeatureAllForQ.SFEleArray[fidIndex].GraphicInfo.RegInfo.FillColor = gvalue[2];
            //FeatureAllForQ.SFEleArray[fidIndex].AttValue[0] = gvalue[0];
            //FeatureAllForQ.SFEleArray[fidIndex].AttValue[1] = gvalue[1];

            //var gdbps = R2.warningResultLayer;
            //var gdbps = R2.mapVector.gdbps;
            var gdbps = "";
            gdbps = R2.CreateLayerR;
            if (R2.IsAnalysis != "是" && IswarnSelect == true) {
                gdbps = R2.warningOriResultLayer[0];
            }

            $.post(baseUrl + "FactorQuery/UpdateLayerById", { gdb: gdbps, fid: fid, grade: Strvalue }, function (rlt) {
                if (rlt == "true" || rlt) {
                    $("#clearDrawLayer").trigger("click");
                    alert("修改要素属性成功");

                } else {
                    alert("修改要素属性失败");
                }
            })
        }
        else {

        }
        return false;
    });

     //删除
    $(".warn_tblist_tr  .DeleteGeo").click(function () {
        if (FlashTimeID) {
            clearTimeout(FlashTimeID);
            editorFlashLayer.drawFeature(editorFlashLayer.features[oldGeoFID], hideStyle);
        }
        var dfcls = editorFlashLayer.features[oldGeoFID];

        var con = confirm("确定需要删除该要素吗？");
        if (con == true) {
            var that = this;
            var fid = $(this).parent().parent().find(".warn_tblist_td").eq(1).html();

            //var gdbps = R2.warningResultLayer;
            //var gdbps = R2.mapVector.gdbps;
            var gdbps = "";
            gdbps = R2.CreateLayerR;

            if (R2.IsAnalysis != "是" && IswarnSelect == true) {
                gdbps = R2.warningOriResultLayer[0];
            }
            
            $.post(baseUrl + "FactorQuery/DeleteLayerById", { gdb: gdbps, fid: fid }, function (rlt) {
                if (rlt == "true" || rlt) {
                    $(that).parent().parent().remove();
                    $("#clearDrawLayer").trigger("click");
                    
                    alert("删除要素属性成功");
                } else {
                    alert("删除要素属性失败");
                }
            })
        }
        else {

        }
        return false;
    })

     //刷新
   
 }



//新建闪烁图层
 var showStyle = OpenLayers.Feature.Vector.style["select"];
 var hideStyle = OpenLayers.Feature.Vector.style["delete"];
 function CreateFlashlayer(feature)
 {
     var total=feature.TotalCount;
     var style = OpenLayers.Util.extend({ fill: true, stroke: true }, hideStyle);
     if (editorFlashLayer) {
         editorFlashLayer.removeAllFeatures();
         fullMap.removeLayer(editorFlashLayer);
         editorFlashLayer = {};
     }
     editorFlashLayer = new OpenLayers.Layer.Vector("editorFlashLayer");
     var sfSet = [];
     for (var i = 0; i < total; i++) {
         var geometry=feature.SFEleArray[i].fGeom;
         var feat;
         var RingArr = [];
         for (var n = 0; n < geometry.RegGeom[0].Rings.length; n++) {
             var DotArr = [];
             for (var j = 0; j < geometry.RegGeom[0].Rings[n].Arcs[0].Dots.length; j++) {
                 DotArr.push(new OpenLayers.Geometry.Point(geometry.RegGeom[0].Rings[n].Arcs[0].Dots[j].x, geometry.RegGeom[0].Rings[n].Arcs[0].Dots[j].y));

             }
             RingArr.push(new OpenLayers.Geometry.LinearRing(DotArr));
         }
         feat=new  OpenLayers.Feature.Vector(new OpenLayers.Geometry.Polygon(RingArr),null,style);
         sfSet.push(feat); 
     }
     editorFlashLayer.addFeatures(sfSet);
     fullMap.addLayer(editorFlashLayer);
     return editorFlashLayer;
 }
     //闪烁图元
     function flashFeature(index, flashTimes) {
         if (flashTimes > 0) {
             if (flashTimes % 2 == 0) {//模2取余数来间隔显示要素，实现闪烁
                 var ggg = editorFlashLayer.features[index];
                 editorFlashLayer.drawFeature(ggg, showStyle);
             } else {
                 editorFlashLayer.drawFeature(editorFlashLayer.features[index], hideStyle);
             }
             flashTimes--;
             FlashTimeID = setTimeout(function () { flashFeature(index, flashTimes); }, 600);
         } else {
             editorFlashLayer.drawFeature(editorFlashLayer.features[index], hideStyle);
             clearTimeout(FlashTimeID);
         }
     }
//预警的终止值 转化成 颜色和下拉级别的数组
     function GetgradeValue(value) {
         var gradeList = R2.warningGrade;
         var gd = [];
         value = parseInt(value);
         //if (value <= gradeList[0]) {
         //    gd.push("w_grade4");
         //    gd.push("无");
         //}
         //else
             if (value <= gradeList[1]) {
             gd.push("w_grade3");
             gd.push("三级");
         }
         else if (value <= gradeList[2]) {
             gd.push("w_grade2");
             gd.push("二级");
         }
         else if (value <= gradeList[3]) {
             gd.push("w_grade1");
             gd.push("一级");
         }
         else if (value > gradeList[3]) {
             gd.push("w_grade1");
             gd.push("一级");
         }
         return gd;
     }
//下拉的级别 转变成终止值值
     function GetValueByStr(value) {

         // 7,4,168,6//绿色，黄色，橙色，红色
         var colorArr = [7, 4, 168, 6];
         var gradeList = R2.warningGrade;
         var StrArr=["无","三级","二级","一级"];
         var gd = [];
         //if (value == StrArr[0]) {
         //    gd.push("0.0001");
         //    gd.push(gradeList[0]);
         //    gd.push(colorArr[0]);
         //    gd.push("w_grade4");
         //}
         //else
             if (value == StrArr[1]) {
             gd.push(gradeList[0]);
             gd.push(gradeList[1]);
             gd.push(colorArr[1]);
             gd.push("w_grade3");
         }
         else if (value == StrArr[2]) {
             gd.push(gradeList[1]);
             gd.push(gradeList[2]);
             gd.push(colorArr[2]);
             gd.push("w_grade2");
         }
         else if (value == StrArr[3]) {
             gd.push(gradeList[2]);
             gd.push(gradeList[3]);
             gd.push(colorArr[3]);
             gd.push("w_grade1");
         }
         else {
             gd.push(gradeList[2]);
             gd.push(gradeList[3]);
             gd.push(colorArr[3]);
             gd.push("w_grade1");
         }
         return gd;
     }


