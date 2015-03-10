/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="../Libs/OpenLayers.js" />

var layerManaLeft = 0;
function layerManaFun(left) {
    layerManaLeft = left;
    if ($(".LayerManaBox").length > 0) {
        if (left == 1) {
            $("#ui_left1").hide();
            $("#ui_left2").show();
            $(".LayerManaBox").show();
        } else {
            $("#ui_left").hide();
            $("#ui_left2").show();
            $(".LayerManaBox").show();
        }
    }
    else {
        var layermana = new R2.Business.LayerManager({ left: left });
    }
}

var treeLayerRestoreGdbp = [];     //储存已显示的gdbp
var treeLayerRestoreName = [];    //储存已显示的图层name
R2.Business.LayerManager = OpenLayers.Class({
    left:0,  //0 left  是从数据管理进入  1  left1是从预警编辑
    data: null,
    LayerArr:[],
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        this.CreateHtml();
        //this.getLayerData();
        this.clickEvent();
        this.CreateTreeLayerMana();
    },
    CreateHtml: function () {
        var htmlstr = "";
        //for (var i = 0; i < this.data.length; i++) {
        htmlstr += '<div class="LayerManaBox">' +
            '<div class="wraHead2"  style="border-right:1px solid #BFBFBF;">图层管理<span class="lmreturn_to_fx"></span></div>' +
                 '<div class="wrafunTitle wrafunTitle2"><div class="wrafunTitleCount"></div><div class="wrafunTitleTip" style="width:150px;" >图层展示</div> <div id="showlayerSubmit">确定</div></div>' +
                 '<div id="lm_query_result_box"  style="" >' +

                    '<div class="lM_tblist" id="lMtb_box">' +
                          '<div id="lMlistdata"></div>' +
                     '</div>' +
                     //'<div id="showlayerSubmit1">确定</div>' +
                 '</div>' +
                 '</div>';
                 
        //}
        //$(".warBox2").append(htmlstr);

        //$(".warBox").animate({ "left": "-382px", "opacity": "0" }, function () {
        //    $(".warBox2").animate({ "left": "0px", "opacity": "1" });
        //});
        if (this.left == 1) {
            $("#ui_left1").hide();
            $("#ui_left2").show();
            $("#ui_left2").append(htmlstr);

        } else if (this.left == 0) {
            $("#ui_left").hide();
            $("#ui_left2").show();
            $("#ui_left2").append(htmlstr);
        }
        


    },
    clickEvent: function () {
        var that = this;
        $(".lmreturn_to_fx").click(function () {
            that.left = layerManaLeft;
            if (that.left == 1) {
                $("#ui_left1").show();
                $("#ui_left2").hide();
            } else if (that.left == 0) {
                $("#ui_left").show();
                $("#ui_left2").hide();
            }
        })
        
        $("#showlayerSubmit").click(function () {
            that.showlayer(treeLayerRestoreGdbp);
        })

    },
    showlayer: function (gdbp) {
        if (fullMap.getLayersByName("layerMana")[0] != null || fullMap.getLayersByName("layerMana")[0] != undefined) {
            for (var i = fullMap.getLayersByName("layerMana").length; i > 0; i--) {
                fullMap.removeLayer(fullMap.getLayersByName("layerMana")[i - 1]);
            }
        }
        if (gdbp.length > 0) {
            var Manalayer = new Zondy.Map.Layer("layerMana", gdbp,
                {
                    ip: R2.gisIp,
                    port: R2.gisPort,
                    transitionEffect: "resize",
                    singleTile: true,
                    isBaseLayer: false,
                    ration: 1,
                    turnOnGuid: true
                });
            Manalayer.setOpacity(1);
            fullMap.addLayer(Manalayer);
             var n=  fullMap.layers.length;
            fullMap.setLayerIndex(Manalayer, n);
        }
    },

    CreateTreeLayerMana:function()
    {
        treeLayerRestoreGdbp = [];
        treeLayerRestoreName = [];
        var treeLayer = new Rrteam.Control.Rrtree({
            id: "treeLayerMana",
            parentDivId: "lMlistdata",
            showCheckBox: true,
            titleLenght: 22,
            showRightClickMenu: false,
            requestUrl: baseUrl + "LayerManager/GetXmlArray",
            xmlUrl: baseUrl + "Config/baselayers.xml",
            imagesUrl: baseUrl + "Scripts/libs/treeLayerManage/images/",
            nodeClickCallBack: this.nodeClick,
            //nodeStateChangeCallBack: arrowClick
            checkBoxClickCallBack: this.checkBoxClick
        });
        //return treeLayer;
    },
    nodeClick: function () {

    },
    /*部分全局变量*/
//treeLayerRestoreGdbp:[],     //储存已显示的gdbp
//treeLayerRestoreName:[],     //储存已显示的图层name

    //多选框回调(包括右键菜单的显示和隐藏的回调)
    checkBoxClick: function (resultObj) {
        this;
    if (resultObj.leafVlaue.length == 0)
        return;
    var removeGdbp = []; //储存要隐藏的gdbp
    var removeName = []; //储存要隐藏的图层name
    var type = resultObj.type;
    for (var i = 0; i < resultObj.leafVlaue.length; i++) {
        if (type == "show") {
            treeLayerRestoreGdbp.push(resultObj.leafVlaue[i].Path);
            treeLayerRestoreName.push(resultObj.leafVlaue[i].Name);
            
        }
        else {
            removeGdbp.push(resultObj.leafVlaue[i].Path);
            removeName.push(resultObj.leafVlaue[i].Name);
        }
    }
    if (type == "show") {
        //去除数组 中的重复项
        treeLayerRestoreGdbp = filterSameItem(treeLayerRestoreGdbp);
        treeLayerRestoreName = filterSameItem(treeLayerRestoreName);
    }
    else {
        removeLayers(removeGdbp, treeLayerRestoreGdbp);
        removeArray(removeName, treeLayerRestoreName);
        removeGdbp = [];
        removeName = [];
    }
    //$("#showlayerSubmit").trigger("click");
}

})

//过滤掉gdbp数组中的相同项
function filterSameItem(array) {
    for (var i = 0; i < 2; i++) {
        array = array.reverse().join(',').match(/([^,]+)(?!.*\1)/ig).reverse();
    }
    return array;
}

//隐藏图层
function removeLayers(removeArr, storeArr) {
    removeArray(removeArr, storeArr);
}

//从原来储存的数组中移除想要隐藏的项
function removeArray(removeArr, storeArr) {
    for (var i = 0; i < removeArr.length; i++) {
        //从当前的数据中去除想要隐藏的图层
        for (var j = 0; j < storeArr.length; j++) {
            if (storeArr[j] == removeArr[i]) {
                storeArr.splice(j, 1);
                break;
            }
        }
    }
}