/// <reference path="../../jquery-1.7.1.min.js" />

/// <reference path="../OpenLayers.js" />


/*
*全局变量
*/
//window.Rrteam = {};
//Rrteam.Control = OpenLayers.Class(Rrteam, {});

/*
*Rrtree类
*/
Rrteam.Control.Rrtree = OpenLayers.Class({

    //树id
    id: "",

    //容器id
    parentDivId: "",

    //请求后台地址
    requestUrl: "",

    //renameUrl
    requestOperateUrl: "",

    //xml文件地址
    xmlUrl: "",

    //根节点ID
    rootId: 0,

    //主题
    theme: "arrow",

    //显示的标题文字长度
    titleLenght: 10,

    //是否右键菜单
    showRightClickMenu: true,

    //是否显示图片（节点类型图片）
    showNodeTypeImg: true,

    //点击节点名称是否可以展开 关闭 子节点
    nodeNameClickControl: true,

    //复选框
    showCheckBox: false,

    //是否开始就展开一级子节点
    showFirstChildrenNodes: true,

    /*model
    *是指 该插件是 用于展示（view） 图层 :[显示，隐藏] ，
    *还是 管理(manage) :[添加、删除、重命名],
    *或者文件夹（folder）:[只添加、删除、重命名文件夹].
    *或者是 layer：[只能删除图层]  -----manage已经包含folder和layer 功能
    */
    model: "view",

    //图片的基本地址
    imagesUrl: "images/",

    originalLeafImg: "leaf.gif",

    //节点点击回调
    nodeClickCallBack: $.noop,

    //checkBox回调
    checkBoxClickCallBack: $.noop,

    //取消所有选中的checkBox
   // _cancelAllCheckedBoxCallBack: $.noop,

    //节点操作失败回调
    nodeOperaFailCallBack: $.noop,

    //节点展开隐藏回调
    nodeStateChangeCallBack: $.noop,

    /*
    *构造函数
    */
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        if (this.requestUrl != "" || this.requestUrl != null) {
            var temp = this;
            this.getNodeDataByPid(temp.rootId, function (myHtml, id) {    // xml文档的第一次读取，根节点的id为0,并产生回调
                $("#" + temp.parentDivId).append(myHtml);
                $("#" + temp.parentDivId).html();
                var me = $("#" + temp.parentDivId);
                $(".treeRoot").addClass("parentDivClass");
                $("#" + temp.parentDivId).append("<div id='RrTree_rightMenu'></div>");
                if (temp.showRightClickMenu) {
                    temp.initRightClickEvent(me);      //定义鼠标的右击事件，屏蔽原来的右击
                }
                temp.initEvent(me);                           //注册节点的  单击、hover等事件                 
                if (temp.showFirstChildrenNodes)
                    temp.expandRootFirst(id);
            });
            $(document).click(function () {
                temp.normalClick();
            });
        }
        else {
            alert("创建树失败！");
        }
    },

    /*
    *注册事件
    */
    initEvent: function (parent) {
        var target = $("li.treeNode>div", $(parent));
        var targetRenameTxt = $(".renameTxt");
        var temp = this;

        //节点单击事件
        target.click(function (e) {
            var that = this;
            temp.nodeClick(e, that, temp);
        });

        //节点hover事件
        target.hover(function (e) {
            $(this).addClass("nodeHover");
            $(this).children("a").children("span").addClass("nodeTextHover");
        }, function () {
            $(this).removeClass("nodeHover");
            $(this).children("a").children("span").removeClass("nodeTextHover");
        });

        if (this.showRightClickMenu) {
            //击事件不知为何要保留，才能rightClick生效
            target.rightClick(function (e) {

            });
        }

        //节点重命名[回国确定、失去焦点确定]
        if (this.model == "manage" || this.model == "folder") {

            var oldName;
            targetRenameTxt.focusin(function (e) {
                oldName = $(this).val();
            });
            targetRenameTxt.keydown(function (e) {
                if (e.which == 13) {    //回车键
                    var newName = $(this).val();
                    var currentId = $(this).parent().attr("id");
                    if (newName != "" & newName != oldName) {
                        temp.submitNewName(currentId, newName);
                    }
                    else {
                        $(".renameTxt").hide();
                        $(".nodeText").show();
                    }
                }
            });

            targetRenameTxt.focusout(function (e) {    //重命名txt失去焦点
                var newName = $(this).val();
                if (newName != "" & newName != oldName) {
                    var currentId = $(this).parent().attr("id");
                    temp.submitNewName(currentId, newName);
                }
                else {
                    $(".renameTxt").hide();
                    $(".nodeText").show();
                }
            });
        }

    },

    /*
    *定义鼠标的右击事件，屏蔽原来的右击
    */
    initRightClickEvent: function (parent) {
        var target = $("li.treeNode>div", $(parent));
        var temp = this;
        $.fn.extend({
            "rightClick": function () {
                $(parent).bind("contextmenu", function (e) {
                    return false;
                });

                /*
                * target.rightClick 要保留
                */

                $(target).mousedown(function (e) {
                    if (e.which == 3) {
                        var that = this;
                        $("#RrTree_rightMenu").html("");
                        $("#RrTree_rightMenu").hide();
                        temp.nodeRightClick(e, that);
                    }
                });
            }
        });
    },

    /*
    *根据 父节点的 id 创建子树 
    */
    getNodeDataByPid: function (pid, callBack) {
        var temp = this;
        this.getXmlData(this.requestUrl, pid, this.xmlUrl, function (jsonData) {
            var th = temp.buildTree(jsonData);
            callBack(th, jsonData[0].Id);  //由于ajax异步读取的原因，不能使用 return 来返回 th , 用callBack回调函数来 返回;
        });

    },
    /*
    *利用json数据创建树
    */
    buildTree: function (data) {
        var ht = [];
        ht.push("<ul id='RrTree_0-ul' class='treeRoot'>");
        this.repeatCreateNode(data, ht);
        ht.push("</ul>");
        ht = ht.join("");
        return ht;

    },

    /*
    *得到当前节点数据，并循环创建节点
    */
    repeatCreateNode: function (data, ht) {
        //if (data.length > 0) {
        //   // var deep = this.getDeepById(data[0].NodePid);   //根据节点的id，获得该节点位置前的空白图的个数 
        //    var length = data.Deepth;
        //}
        //循环创建节点
        for (var i = 0; i < data.length; i++)
            this.buildTreeNode(data[i], ht);
    },



    /*
    *创建树的节点，主要的方法 循环 执行
    */
    buildTreeNode: function (nodeData, ht) {
        ht.push("<li class='treeNode'>");
        //ht.push("<div id='RrTree_", nodeData.Id, "' value='", nodeData.NodeValue, "' class='treeNodeDiv'>");
        ht.push("<div id='RrTree_", nodeData.Id, "' value='", nodeData.Title, "' class='treeNodeDiv'>");
        if (nodeData.Id == "0")
            deep = 0;
        var cs = [];
        //根据节点的深度，在节点的前面添加 空格 图片
        ht.push("<span class='instance'>");
        if (nodeData.Deepth == 0) {
            if (!nodeData.IsLeaf == "true") {
                ht.push("<img class='imgInstance' src='", this.imagesUrl, "space.gif' />");
            }
            else {
                ht.push("<img class='imgInstace treeNode_linf_leaf' src='", this.imagesUrl, "space.gif' />");
            }
        }
        else if (nodeData.Deepth > 0) {
            for (var i = 0; i < nodeData.Deepth; i++) {
                ht.push("<img class='imgInstance' src='", this.imagesUrl, "space.gif'/>");
            }
        }
        ht.push("</span>");

        //根据节点的属性（是否展开、是否有子节点）添加图片
        //if (!nodeData.IsLeaf || nodeData.IsLeaf.toString().toLowerCase() == "false") {
        if (this.showCheckBox)
            ht.push("<img id='RrTree_", nodeData.Id, "-checkBox'  class='treeNodeIcon checkBox checkBox_un' src='", this.imagesUrl, "space.gif' />");
        else {
            ht.push("<img class='treeNodeIcon' src='", this.imagesUrl, "space.gif' />");
        }

        // 非叶子节点 前的 展开关闭 图片
        if (!nodeData.IsLeaf || nodeData.IsLeaf.toString().toLowerCase() == "false") {
            if (nodeData.NodeIsexpand == "true") {
                cs.push("treeNode_" + this.theme + "_expanded");
            }
            else {
                cs.push("treeNode_" + this.theme + "_collapsed");
            }
            ht.push("<img class='treeNodeIcon ", cs.join(' '), "' src='", this.imagesUrl, "space.gif' />");
        }
            //叶子节点前的 图层图片
        else {
            if (this.model == "view" && this.showNodeTypeImg) {
                if (nodeData.ImgPath == "" || !nodeData.ImgPath) {
                    //var stateClass = nodeData.NodeState == "hide" ? "treeNode_hide" : "treeNode_show";
                    //cs.push(stateClass);
                    ht.push("<img class='treeNodeIcon' src='", this.imagesUrl + this.originalLeafImg + "'/>");             //没有提供图片时，使用默认的图片
                }
                else {
                    ht.push("<img class='treeNodeIcon' src='", this.imagesUrl + nodeData.ImgPath + "' />");
                }
                ht.push("<img class='noCursor' src='", this.imagesUrl, "space.gif'/>");
            }
            else if (this.showNodeTypeImg) {
                ht.push("<img class='treeNodeIcon' src='", this.imagesUrl, "space.gif' />");
                ht.push("<img class='treeNodeIcon treeNode_leaf' src='", this.imagesUrl, "space.gif' />");
            }
            else {
                ht.push("<img class='treeNodeIcon treeNode_leafNoImg' src='", this.imagesUrl, "space.gif' />");
            }
            //var layerPath = "http://" + nodeData.Ip + ":" + nodeData.Port + "/igs/rest/mrms/layers?gdbps=" + encodeURI(encodeURI(nodeData.Url));
            var layerPath = encodeURI(nodeData.Url);
            ht.push("<label class='treeNodeLeafPath' id='RrTree_", nodeData.Id, "-layerPath' style='display:none;'>", layerPath, "</label>");
        }
        ht.push("<img class='noCursor' src='", this.imagesUrl, "space.gif'/>");
        //重命名txt
        ht.push("<input id='RrTree_", nodeData.Id, "-txt' type='text' class='renameTxt' style='display:none;' value='" + nodeData.Title + "'/>");
        ht.push("<span class='a_nodeText' style='cursor:pointer;'>");

        /*
        *isBottom是用于Model为folder时，判断当前点击的节点是否为最底层的文件夹  最底文件夹可以添加图层，否则
        */
        var isBottom;
        if (nodeData.NodeIsBottom == "true")
            isBottom = "bottom";
        else
            isBottom = "notbottom";
        ht.push("<span id='nodeText_" + nodeData.Id + "' class='nodeText ", isBottom, " colorClass_", nodeData.Deepth, "' title='", nodeData.Title, "'>", this.getTxtSubString(nodeData.Title), "</span>");
        ht.push("</span>");
        ht.push("</div>");

        //子节点
        if (!nodeData.IsLeaf || nodeData.IsLeaf.toString().toLowerCase() == "false" || this.model == "folder") {

            //class=*-ul是为了check时，寻找到ul的直接子ul,不找孙子节点
            var ulClassName;
            if (nodeData.Id == "1") {
                ulClassName = "0";
            }
            else { }
            // ulClassName = nodeData.NodeId.substring(0, nodeData.NodeId.lastIndexOf("_"));
            ht.push("<ul id='RrTree_", nodeData.Id, "-ul' class='RrTree_", ulClassName, "-ul' style='display:none'></ul>");
        }
        ht.push("</li>");
    },

    /*
    *异步获取xml数据
    */
    getXmlData: function (requestUrl, pId, xmlUrl, callBack) {
        var isLoadLeaf = this.model == "folder" ? false : true;  //如果是folder不加载叶子节点。
        var data;
        //数据源为SQL
        if (this.xmlUrl == "") {
            data = { modeType: "view", isLoadLeaf: isLoadLeaf, nodeId: pId };
        }
        else {
            data = { modeType: "view", isLoadLeaf: isLoadLeaf, nodeId: pId, xmlUrl: xmlUrl };
        }
        $.ajax({
            type: "POST",
            url: requestUrl,
            dataType: "json",
            data: { nodeId: pId, xmlUrl: xmlUrl },
            success: function (json) {
                callBack(json);
            },
            error: function (e) {
                e;
                alert("读取数据失败！");
            }
        });
    },


    /*
    *执行节点击节点展开 、收起 事件,checkBox点击，节点回调
    */
    nodeClick: function (e, that, temp) {

        var pId = $(that).attr("id").replace("RrTree_", "");
        pId = pId.replace("-div", "");
        var et = e.target || e.srcElement;
        var ul = $(that).next();        //当前节点的子节点容器
        var controlImgObj = null;   //展开图片对象
        var returnNodeId;                //节点点击返回当前id
        var returnTitle = "";

        //点击节点名称 可以控制子节点状态
        if (temp.nodeNameClickControl) {
            controlImgObj = $(et).parent().siblings(".treeNodeIcon").eq(1);

        }
        var coClassName = "treeNode_" + this.theme + "_collapsed";  //关闭时类名
        var exClassName = "treeNode_" + this.theme + "_expanded";  //展开时类名
        //if (!temp.showCheckBox) {
        var result = "";
        // 获得点击对象的父标签、用于区别<img>、<span>的点击，img时响应 打开、关闭; span、checkBox时产生回调;
        if ($(et).hasClass(coClassName) || controlImgObj.hasClass(coClassName) && $(et).hasClass('nodeText')) {  //当前为收起状态
            if (ul.hasClass("childrenExist")) {  //如果存在，则显示，如果不存在，则create
                ul.show();
                result = 'expand';
            }
            else {
                temp.createChildrenNodes(temp, ul, pId);   //向后台请求xml数据，创建子节点
                result = 'loadAndExpand';
            }
            if (controlImgObj.hasClass(coClassName)) {
                temp.swapClass(controlImgObj, coClassName, exClassName);
                result = 'expand';
                var tpId = $(et).attr("id");
                returnNodeId = tpId.substring(tpId.indexOf("_") + 1);
                var returnObj = { "isLeaf": false, "nodeId": returnNodeId, "returnTitle": "","operateType":'open' };
                temp.nodeClickCallBack.call(temp.nodeClickCallBack, returnObj);  //回调
            }
            else {
                temp.swapClass(et, coClassName, exClassName);
                result = 'expand';
            }
            temp.nodeStateChangeCallBack.call(temp.nodeStateChangeCallBack, result);
        }
        else if ($(et).hasClass(exClassName) || controlImgObj.hasClass(exClassName) && $(et).hasClass('nodeText')) {  //当前为展开状态
            ul.hide();
            result = 'collapse';
            if (controlImgObj.hasClass(exClassName)) {
                temp.swapClass(controlImgObj, exClassName, coClassName);
                var tpId = $(et).attr("id");
                returnNodeId = tpId.substring(tpId.indexOf("_") + 1);
                var returnObj = { "isLeaf": false, "nodeId": returnNodeId, "returnTitle": "", "operateType": 'close' };  //返回一个json对象，信息由节点的类型，节点的id, 操作提示
                temp.nodeClickCallBack.call(temp.nodeClickCallBack, returnObj);  //回调
            }
            else {
                temp.swapClass(et, exClassName, coClassName);
            }
            temp.nodeStateChangeCallBack.call(temp.nodeStateChangeCallBack, result);
        }

            //节点回调
        else if ($(et).hasClass("nodeText")) {
            var callBackValue;
            var target = $(that);
            var tempId = $(that).attr("id");
            //var returnTitle = "";
            var treeLen = "";
            var TitleNode = "";
            if (this.model == "layer") {
                if ($(et).hasClass("bottom")) {
                    if (!$("#" + tempId + "-txt").prev().prev().hasClass("treeNode_leaf"))
                        callBackValue = "y&是最底层，可以添加图层";
                    else
                        callBackValue = "n&叶子节点,不可以添加图层";
                }
                else
                    callBackValue = "n&不是最底层，不可以添加图层";
            }
            else
                callBackValue = "";
            if (this.model == "folder") {
                $(".treeNodeDiv").removeClass("select_node");
                target.addClass("select_node");
            }
            else {
                var nodetext = target.find("span.nodeText");
                $(".nodeText").removeClass("select_node1");
                nodetext.addClass("select_node1");
            }
            retunNodeId = tempId.substring(tempId.indexOf("_") + 1);
            treeLen = retunNodeId.split("_");
            TitleNode = target;
            returnTitle = TitleNode.find(".nodeText").text();
            var returnObj = { "isLeaf": true, "nodeId": retunNodeId, "returnTitle": returnTitle, "operateType": 'null' };
            temp.nodeClickCallBack.call(temp.nodeClickCallBack, returnObj);  //回调
        }

        //}
        //复选框
        //else {
        if ($(et).hasClass("checkBox")) {
            var imgId = $(et).attr("id");
            var boolCheck = $(et).hasClass("checkBox_un");
            var state = boolCheck ? "checkBox_che" : "checkBox_un";
            if (state == 'checkBox_che') {
                newClassName = 'checkBox_che';
                oldClassName = 'checkBox_un';
            }
            else {
                oldClassName = 'checkBox_che';
                newClassName = 'checkBox_un';
            }
            temp.swapClass($(et), oldClassName, newClassName);
            var ulId = imgId.replace("checkBox", "ul");
            //var oul = $("#" + ulId);
            temp.checkBoxClick(imgId, state);          //对父节点、子节点进行处理

            //回调，将ul下的所有leaf节点的value返回
            var allLeafValue = [];
            allLeafValue = temp.getAllLeafValue(ulId);
            var resultObj= {
                type: boolCheck ? "show" : "hide",
                leafVlaue: allLeafValue,
                noodTargetId:imgId.replace('RrTree_','').replace('-checkBox','')
            };
            var type = boolCheck ? "show" : "hide";
            temp.checkBoxClickCallBack.call(temp.checkBoxClickCallBack, resultObj);
        }
        //}
    },

    /*
    *创造子节点，为何独立出来？为了重命名，添加节点，删除节点时，重新加载 
    */
    createChildrenNodes: function (temp, ul, pId) {
        var ht = [];
        temp.getXmlData(temp.requestUrl, pId, temp.xmlUrl, function (jsonData) {
            if (jsonData != null) {
                //if (temp.model == "view" && temp.showCheckBox == true) {
                if (temp.showCheckBox == true) {
                    var checkBox = $("#RrTree_" + pId + "-checkBox");
                    checkBox.addClass("checkBox_un");
                    //                    checkBox.attr("src", temp.imagesUrl + "checkBox_un.png");
                }
                temp.repeatCreateNode(jsonData, ht);
                ul.html(ht.join(''));
                temp.initRightClickEvent(ul)
                temp.initEvent(ul);
                ul.addClass("subTreeNode childrenExist ").css({ "z-index": 0, position: "static", dispaly: "block", visibility: "visible", top: "auto", left: "auto" });
                ul.show();
            }
        });
    },

    /*
    *具体右击事件
    */
    nodeRightClick: function (e, that) {
        var pid = $(that).attr("id");
        var isHasCihilren = $(that).attr("title");
        var target = e.srcElement || e.target;

        if ($(target).hasClass("nodeText")) {
            var _targetLayerState = $(that).find(".layerState");    //显示图层可见的img
            var _targetInput = $(that).find("input");               //重命名的text

            if (this.model == "folder") {  //folder时只有文件夹有右击
                if (!$(_targetInput.prev().prev()).hasClass("treeNode_leaf")) {
                    this.createRightMenu(e);
                    this.bindRightMenuEvent(target, _targetLayerState, _targetInput);
                }
            }
            else if (this.model == "view" || this.model == "manage") {
                this.createRightMenu(e);
                this.bindRightMenuEvent(target, _targetLayerState, _targetInput);
            }
            else if (this.model == "layer") {    //layer时只有节点才有右击
                if ($(_targetInput.prev().prev()).hasClass("treeNode_leaf") || $(_targetInput.prev().prev()).hasClass("treeNode_leafNoImg")) {
                    this.createRightMenu(e);
                    this.bindRightMenuEvent(target, _targetLayerState, _targetInput);
                }
            }
        }
    },

    /*
    *创建右击的快捷菜单
    */
    createRightMenu: function (et) {
        var rightMenu = "";
        var xx = et.pageX || et.clientX + document.body.scrollLeft;
        var yy = et.pageY || et.clientY + document.body.scrollTop;
        $("#RrTree_rightMenu").css({ "position": "fixed", "top": yy, "left": xx });
        rightMenu += "<div>";
        rightMenu += "<ul class='rightMenuUl'>";
        if (this.model == "view") {
            rightMenu += "<li class='showLayer'>";
            rightMenu += "<label>显示知识</label>";
            rightMenu += "</li>";
            rightMenu += "<li class='hideLayer'>";
            rightMenu += "<label>隐藏知识</label>";
            rightMenu += "</li>";
        }
        else if (this.model == "manage") {
            rightMenu += "<li class='add'>";
            rightMenu += "<label>添加节点</label>";
            rightMenu += "</li>";
            rightMenu += "<li class='delete'>";
            rightMenu += "<label>删除节点</label>";
            rightMenu += "</li>";
            rightMenu += "<li class='rename'>";
            rightMenu += "<label>重命名</label>";
            rightMenu += "</li>";
        }
        else if (this.model == "folder") {  //仅用于文件夹目录管理  
            rightMenu += "<li class='rename'>";
            rightMenu += "<label>重命名</label>";
            rightMenu += "</li>";
            rightMenu += "<li  class='add' >";
            rightMenu += "<label>添加节点</label>";
            rightMenu += "</li>";
            rightMenu += "<li class='delete'>";
            rightMenu += "<label>删除节点</label>";
            rightMenu += "</li>";

        }
        else if (this.model == "layer") {  //仅用于图层管理  
            rightMenu += "<li class='delete'>";
            rightMenu += "<label>删除节点</label>";
        }
        rightMenu += "</ul>";
        rightMenu += "</div>";
        $("#RrTree_rightMenu").html(rightMenu);
        $("#RrTree_rightMenu").show();
    },

    /*
    * 普通的单击
    * 消除节点左击产生的效果
    */
    normalClick: function () {
        $("#RrTree_rightMenu").html("");
        $("#RrTree_rightMenu").hide();
    },

    /*
    * 绑定右击菜单的事件
    *右键菜单的click、hover事件
    */
    bindRightMenuEvent: function (target0, _targetLayerState, _targetInput) {

        //right menu click
        $("ul.rightMenuUl>li").hover(function (e) {
            $(this).addClass("rightMenuLiHover");
        }, function (e) {
            $(this).removeClass("rightMenuLiHover");
        });

        //right menu click
        var temp = this;
        $("ul.rightMenuUl>li").click(function (e) {
            var that = this;
            if (temp.model == "view" || temp.model == "layer") {
                var tempImgId = $(_targetLayerState).attr("id");
                var state = "";         //想要的状态（checkBox_che、checkBox_un）
                var allLeafValue = []; //将ul下的所有leaf节点的value返回

                //非叶子节点的右击（显示）
                if (tempImgId == null) {
                    var checkBoxId = $(_targetInput).attr("id").replace("-txt", "-checkBox");
                    state = $("#" + checkBoxId).hasClass("checkBox_un") ? "checkBox_che" : "checkBox_un";
                    if (state == "checkBox_che" && $(this).hasClass("hideLayer")) { }
                    else if (state == "checkBox_un" && $(this).hasClass("showLayer")) { }
                    else {
                        var ulId = checkBoxId.replace("-checkBox", "-ul");
                        var ul = $("#" + ulId);
                        temp.checkBoxClick(ul, state); //更改节点前checkBox
                        allLeafValue = temp.getAllLeafValue(ul);
                    }
                }

                    //叶子节点的右击
                else {
                    //获取相关的参数（layerState,checkBox）
                    var layerState = $(_targetLayerState).hasClass("treeNode_hide") ? "treeNode_show" : "treeNode_hide";
                    if (layerState == "treeNode_show" && $(this).hasClass("hideLayer")) { }
                    else if (layerState == "treeNode_hide" && $(this).hasClass("showLayer")) { }
                    else {
                        var imgId = $(_targetLayerState).attr("id");
                        var tempId = imgId.replace("-img", "");
                        tempId = tempId.substring(0, tempId.lastIndexOf("_"));
                        if (layerState == "treeNode_show") {
                            temp.swapClass(_targetLayerState, "treeNode_hide", "treeNode_show");
                        }
                        else {
                            temp.swapClass(_targetLayerState, "treeNode_show", "treeNode_hide");
                        }
                        var ulId = tempId + "-ul";
                        var ul = $("#" + ulId);
                        state = $(_targetLayerState).hasClass("treeNode_show") ? "checkBox_che" : "checkBox_un";

                        //对父节点checkBox进行处理
                        temp.changeCheckBox(ul, layerState, 3);
                        temp.parentsCheck(ul, state);
                        var textId = imgId.replace("-img", "-txt");
                        var allValue = "{";
                        var singleUri = "\"LayerUri\":[";
                        singleUri += $("#" + imgId).attr("value");
                        singleUri += "],";
                        var singleName = "\"LayerName\":[{";
                        singleName += "\"Name\":";
                        singleName += "\"";
                        singleName += $("#" + textId).attr("value");
                        singleName += "\"";
                        singleName += "}]";
                        allValue += singleUri + singleName;
                        allValue += "}"
                        allLeafValue.push(allValue);
                    }
                }
                //回调，将图层value返回
                var type = (state == "checkBox_che") ? "show" : "hide";
                temp.checkBoxClickCallBack.call(temp.checkBoxClickCallBack, type, allLeafValue);
            }
            else {

                //rename node
                if ($(this).hasClass("rename")) {
                    $(".nodeText").show();
                    $(".renameTxt").hide();
                    $(target0).hide();
                    $(_targetInput).css("display", "inline");
                    $(_targetInput).select();
                }

                else {
                    var nodeId = $(_targetInput).parent().attr("id");
                    nodeId = nodeId.replace("RrTree_", "");
                    var nodeLi = $(_targetInput).parent().parent();   //要的node所在的li
                    var ul;
                    var modelType = "";
                    var isLeaf = $(_targetInput).prev().prev();       //获得本节点是否为叶子节点

                    //insert node
                    if ($(this).hasClass("add")) {
                        if (temp.model == "manage")
                            modelType = "both";
                        else {
                            modelType = "addFolder";
                        }
                        temp.operateChildNode("insert", modelType, nodeId, "", function (data) {
                            if (data == "ok") {

                                /*
                                *根据添加子节点的原来hasChildren属性，重新加载节点的ul
                                *如果原来是无children,则重新加载它的父节点的ul
                                *如果原来是有children的，则直接加载自己的ul
                                */
                                var divId = $(_targetInput).attr("id").replace("-txt", "");
                                if ($(isLeaf).hasClass("treeNode_leaf") || $("#" + divId).find("span.nodeText").hasClass("bottom")) {
                                    ul = $(nodeLi).parent();
                                    nodeId = divId.substring(divId.indexOf("_") + 1, divId.lastIndexOf("_"));
                                }
                                else {
                                    //if (modelType != "addFolder")
                                    //ul = $(_targetInput).parent().next();

                                    /*
                                    *根据添加子节点的原来isBottom属性，重新加载节点的ul
                                    *如果原来是底层节点（isBottom为true）,则重新加载它的父节点的ul
                                    *如果原来不是底层节点的，则直接加载自己的ul      和叶子节点的加载原理一样
                                    */

                                    // else {
                                    temp.swapClass(isLeaf, "treeNode_arrow_collapsed", "treeNode_arrow_expanded");
                                    ul = $(_targetInput).parent().next();
                                    //nodeId = $(_targetInput).parent().attr("id").substring(0, nodeId.lastIndexOf("."));
                                    // }
                                }
                                temp.createChildrenNodes(temp, ul, nodeId);
                            }
                            else
                                temp.nodeOperaFailCallBack.call(temp.nodeOperaFailCallBack, data);   // 将后台添加节点失败的原因回调给用户
                            //alert("不能添加目录！因为该目录下已经存在图层文件。");
                        });
                    }

                        //delete
                    else {
                        if (confirm("确定删除吗？")) {
                            if (temp.model == "manage")
                                modelType = "both";
                            else if (temp.model == "folder") {
                                modelType = "deleteFolder";
                                temp.swapClass(isLeaf, "treeNode_arrow_expanded", "treeNode_arrow_collapsed");
                            }
                            else if (temp.model == "layer") {
                                modelType = "deleteLayer";
                            }
                            brotherCounts = $(nodeLi).parent().children().size();  //判断节点是否为唯一子节点
                            temp.operateChildNode("delete", modelType, nodeId, "", function (data) {
                                if (data == "ok") {
                                    var nodeIdArr = nodeId.split('_');
                                    nodeId = "";
                                    if (brotherCounts == 1) {

                                        for (var i = 0; i < nodeIdArr.length - 2; i++) {
                                            nodeId += nodeIdArr[i] + "_";
                                        }
                                    }
                                    else {

                                        for (var i = 0; i < nodeIdArr.length - 1; i++) {
                                            nodeId += nodeIdArr[i] + "_";
                                        }
                                    }
                                    nodeId = nodeId.substring(0, nodeId.length - 1);
                                    ul = $("#RrTree_" + nodeId + "-ul");
                                    $(nodeLi).remove();
                                    temp.createChildrenNodes(temp, ul, nodeId);
                                }
                                else {
                                    temp.nodeOperaFailCallBack.call(temp.nodeOperaFailCallBack, data);   // 将后台删除节点失败的原因回调给用户
                                }
                            });
                        }
                    }
                }

            }
        });
    },

    /*
    *确定重命名节点
    */
    submitNewName: function (currentId, newName) {
        var parentId;
        //是否为根节点
        if (currentId != "1") {
            currentId = currentId.replace("RrTree_", "");
            parentId = currentId.toString().substring(0, currentId.lastIndexOf("_"));   //重命名,添加、删除节点时，需要获取的父节点
        }
        else
            parentId = "0";
        //var ulId = "RrTree_" + parentId + "-ul";
        //var ul = $("#" + ulId);      //获取父ul 对象
        var temp = this;
        this.operateChildNode("rename", "", currentId, newName, function (result) {    //必须要在更改成功后，回调中再 加载 子节点
            parentId = result.split('&')[1];
            var ulId = "RrTree_" + parentId + "-ul";
            var ul = $("#" + ulId);      //获取父ul 对象
            if (result.split('&')[0] == "ok") {
                $(".renameTxt").hide();
                $(".nodeText").show();
                temp.createChildrenNodes(temp, ul, parentId);
            }
        });
    },

    /*
    * 在外部可以直接调用  添加节点or目录
    *@param nodeId为想添加节点的id,@param value为新加节点的元素值
    */
    _addNodesToXml: function (nodeId, value) {
        var divId = "RrTree_" + nodeId;
        var ul;
        var temp = this;
        var isLeaf = $("#" + divId + "-txt").prev().prev();

        var modeType;
        switch (this.model) {
            case "view":
                {
                    modeType = "";
                    break;
                }
            case "manage":
                {
                    modeType = "both";
                    break;
                }
            case "folder":
                {
                    modeType = "addFolder";
                    break;
                }
            case "layer":
                {
                    modeType = "addLayer";
                    break;
                }
            default:
                {
                    break;
                }

        }
        this.operateChildNode("insert", modeType, nodeId, value, function (data) {
            if (data == "ok") {

                if ($(isLeaf).hasClass("treeNode_leaf") || !$("#" + divId).find("span.nodeText").hasClass("bottom")) {  //添加成功后重新加载ul，以显示新节点,判断ul
                    var tempId = divId.substring(0, divId.lastIndexOf("_"));
                    ulId = tempId + "-ul";
                    ul = $("#" + ulId);
                    nodeId = tempId.substring(divId.indexOf("_") + 1);
                }
                else {
                    temp.swapClass(isLeaf, "treeNode_arrow_collapsed", "treeNode_arrow_expanded");
                    ul = $("#" + divId + "-ul");
                }
                temp.createChildrenNodes(temp, ul, nodeId);
            }
            else
                //temp.checkBoxClickCallBack.call(temp.checkBoxClickCallBack, type, allLeafValue);
                temp.inserNodeFailCallBack.call(temp.inserNodeFailCallBack, "fail", "hasChildre");
            //alert("不能添加目录！因为该目录下已经存在图层文件。");
        });
    },

    /*
    *通过id获取节点的深度
    */
    getDeepById: function (dataId) {
        var length;
        if (dataId == 0)
            length = 0;
        else {
            var deep = [];
            deep = dataId.split('_');
            length = deep.length;
        }
        return length;
    },


    /*
    *根据节点的是否展开，转换class
    */
    swapClass: function (et, oldClass, newClass) {
        var ss = $(et).attr("class");
        //if ($(et).hasClass(newClass))
        //{

        //}
        //else {
        $(et).addClass(newClass).removeClass(oldClass);
        //}
    },

    /*
    *截取txt的长度，
    */
    getTxtSubString: function (txt) {
        if (txt.length > this.titleLenght)
            txt = txt.substring(0, this.titleLenght) + "...";
        return txt;
    },

    /*
    *重命名子节点、添加子节点、删除节点
    *@param modeType是原来的设计的用于选择（图层查看、图层管理[add，delete,renmae]）
    *@param _modeType是后来的用于选择（添加文件夹、图层）  
    */
    operateChildNode: function (modeType, _modeType, id, nodeInfo, callBack) {
        var temp = this;
        $.ajax({
            type: "POST",
            dataType: "text",
            url: this.requestOperateUrl,
            data: { modeType: modeType, _modeType: _modeType, nodeId: id, nodeInfo: nodeInfo, xmlUrl: temp.xmlUrl },
            success: function (data) {
                callBack(data);
            },
            error: function (evt) {
                var ert = evt;
            },
            beforeSend: function (evt) {
                this;
                var aa = "";
            }
        });
        //$.post(this.requestUrl,"text",{ ModeType: modeType, _ModeType: _modeType, NodeId: id, NodeInfo: nodeInfo, XmlUrl: temp.xmlUrl },
        //    function (data) {
        //        callBack(data);
        //    }
        //);
    },

    /*
    *以下的所有方法都是仅仅征对view时使用
    *更改节点前checkBox
    */
    checkBoxClick: function (imgId, state) {
        var ulId = imgId.replace("checkBox", "ul");
        var oul = $("#" + ulId);
        this.childrenCheck(oul, state);   //对子节点进行处理
        this.parentsCheck(imgId, state);    //对父节点进行处理
    },

    /*
    *更改节点前layerState  所有子节点
    */
    changeLayerState: function (oul) {
        var img = $(oul).find("img.checkBox");
        if (img.size() > 0) {
            //var checkBox = $(oul).prev().find("img.checkBox");
            if (img.hasClass("checkBox_che")) {
                for (var i = 0; i < img.size() ; i++) {
                    //this.swapClass(img[i], "treeNode_hide", "treeNode_show");
                    this.swapClass(img[i], "checkBox_un", "checkBox_che");
                }
            }
            else {
                for (var i = 0; i < img.size() ; i++) {
                    //checkBox.attr("src", this.imagesUrl + newState + ".png");
                    this.swapClass(img[i], "checkBox_che", "checkBox_un");
                }
            }
        }
    },

    /*
    *利用递归
    *复选框的具体方法,currentNode是当前有ul标签，使ul下的子ul也被选中或取消
    */
    childrenCheck: function (currentUl, state) {
        if (this.changeCheckBox(currentUl, state, 1) != false) {
            //var ulId = $(currentUl).attr("id");
            var img = $(currentUl).find("img.checkBox");
            var newClassName;
            var oldClassName;
            if (state == 'checkBox_che') {
                newClassName = 'checkBox_che';
                oldClassName = 'checkBox_un';
            }
            else {
                oldClassName = 'checkBox_che';
                newClassName = 'checkBox_un';
            }
            if (img.size() > 0) {
                for (var i = 0; i < img.size() ; i++) {
                    this.swapClass(img[i], oldClassName, newClassName);
                }

            }
        }
    },

    /*2014.1.8更改
    *利用递归
    *复选框的具体方法,currentUl是当前有ul标签，使ul的父ul也被操作（通过判断后）
    */
    parentsCheck: function (id, state) {
        var ulId = id.replace("-checkBox", "");
        var pUl = $('#' + ulId).parent();
        var parentTarget = pUl.parent().prev().find('.checkBox');
        if (parentTarget.length > 0) {
            var parentItems = pUl.siblings();
            var allCheckFlag = 0;
            for (var i = 0; i < parentItems.length; i++) {
                var tempImgCheckBox = parentItems.eq(i).find('.treeNodeDiv').find(".checkBox").eq(0);   ///第二个eq是防止找到其孙子节点下的checkbox 或者其兄弟节点下的checkbox
                if (!tempImgCheckBox.hasClass(state)) {
                    allCheckFlag = 1;
                }

            }
            var parentTarget = pUl.parent().prev().find('.checkBox');
            if (allCheckFlag==0) {
                if (state == "checkBox_che") {
                    this.swapClass(parentTarget, "checkBox_un", "checkBox_che");
                }
                this.parentsCheck(parentTarget.attr('id'), state);
            }
            else if (allCheckFlag == 1) {
                if (parentTarget.hasClass('checkBox_che')){
                    this.swapClass(parentTarget, "checkBox_che", "checkBox_un");
                }
                this.parentsCheck(parentTarget.attr('id'), "checkBox_un");
            }
        }
    },

    /*
    *checkBox 改变状态
    *复选框的具体方法,currentNode是当前有ul标签，
    *state为想要达到的状态(checkBox_che,或checkBox_un）
    *type为 1 只改变当前ul的checkBox 改变状态, 2 为 改变ul的父辈节点 的 checkBox 改变状态。2 比较难理解
    */
    changeCheckBox: function (oul, state, type) {

        //只有ul存在的时候给相应的checkBox 改变状态
        if ($(oul).hasClass("childrenExist")) {
            var checkBox = $(oul).prev().find("img.checkBox");
            var isNull = checkBox.attr("id");
            if (isNull != null) {
                var pState = checkBox.hasClass("checkBox_che") ? "checkBox_che" : "checkBox_un";
                if (type == 1) {
                    if (state == "checkBox_che")
                        this.swapClass(checkBox, "checkBox_un", "checkBox_che");
                    else
                        this.swapClass(checkBox, "checkBox_che", "checkBox_un");
                }

                    // type==2    判断子ul节点是否都处于选中或处于都没选中,以决定父辈节点的状态
                else if (type == 2) {
                    if (state == "checkBox_che")
                        this.swapClass(checkBox, "checkBox_un", "checkBox_che");
                    else
                        this.swapClass(checkBox, "checkBox_che", "checkBox_un");
                    var ulId = $(oul).attr("id");
                    //var childrenUl = $(oul).find("ul." + ulId);
                    //var l = childrenUl.length;
                    //if (l > 0) {
                    //    var ch = true;
                    //    for (var i = 0; i < l; i++) {
                    //        var childCheck = $(childrenUl[i]).prev().find("img.checkBox");
                    //        var childCheckState = childCheck.hasClass("checkBox_che") ? "checkBox_che" : "checkBox_un";
                    //        if (state == "checkBox_che" && childCheckState != "checkBox_che" || state == "checkBox_un" && childCheckState != "checkBox_un") {
                    //            ch = false;
                    //            break;
                    //        }
                    //    }
                    //    if (ch) {
                    //        if (state == "checkBox_che")
                    //            this.swapClass(checkBox, "checkBox_un", "checkBox_che");
                    //        else
                    //            this.swapClass(checkBox, "checkBox_che", "checkBox_un");
                    //    }
                    //    else {
                    //        var sga = checkBox.hasClass("checkBox_che");
                    //        if (checkBox.hasClass("checkBox_che"))
                    //            this.swapClass(checkBox, "checkBox_che", "checkBox_un");
                    //    }
                    //}
                }

                    // type==3    判断子leaf节点是否都处于选中或处于都没选中,以决定父辈节点的状态
                else {
                    var ulId = $(oul).attr("id");
                    var childrenImg = $(oul).find("img.layerState");
                    var l = childrenImg.length;
                    if (l > 0) {
                        var ch = true;
                        for (var i = 0; i < l; i++) {
                            var childLayer = $(childrenImg[i]);
                            var childLayerState = childLayer.hasClass("treeNode_show") ? "treeNode_show" : "treeNode_hide";
                            if (state == "treeNode_show" && childLayerState == "treeNode_hide" || state == "treeNode_hide" && childLayerState == "treeNode_show") {
                                ch = false;
                                break;
                            }
                        }
                        if (ch) {
                            if (state == "treeNode_show")
                                this.swapClass(checkBox, "checkBox_un", "checkBox_che");
                            else
                                this.swapClass(checkBox, "checkBox_che", "checkBox_un");
                        }
                        else {
                            if (checkBox.hasClass("checkBox_che"))
                                this.swapClass(checkBox, "checkBox_che", "checkBox_un");
                        }
                    }
                    else {

                    }
                }
                //var newStateClass = $(oul).prev().find("img.checkBox").attr("class");
                //var newStateArr = newStateClass.toString().split(' ');
                //var newState = newStateArr[2];
                //if (pState != newState) {
                //    checkBox.attr("src", this.imagesUrl + newState + ".png");
                //}
                return true;
            }
            else
                return false;
        }
        else
            return false;
    },

    /*
    *获得ul下所有leaf节点的value
    */
    getAllLeafValue: function (oul) {
        var allLeaf;
        if ($("#" + oul).length > 0) {
            allLeaf = $("#" + oul).find("label.treeNodeLeafPath");
        }
        else {
            var tempId = oul.replace("ul", "layerPath");
            allLeaf = $("#" + tempId);
        }
        var allLeafValue = [];
        var size = allLeaf.length;
        if (size > 0) {
            for (var i = 0; i < size; i++) {
                var path = allLeaf.eq(i).text();
                var textObj = allLeaf.eq(i).next().next();
                var tempObj = {
                    NodeId:textObj.attr('id').replace('RrTree_','').replace('-txt',''),
                    Name: textObj.attr("value"),
                    Path: path
                };
                allLeafValue.push(tempObj);
            }
        }
        return allLeafValue;
    },

    /*
    *后来添加
    *一开始 就展开根节点
    */
    expandRootFirst: function (rootId) {
        var ul = $("#RrTree_" + rootId + "-ul");
        this.createChildrenNodes(this, ul, rootId);  //获取一级子结点
        var et = $("#RrTree_" + rootId + "-txt").prev().prev();
        this.swapClass(et, "treeNode_" + this.theme + "_collapsed", "treeNode_" + this.theme + "_expanded");
    },
    
    /****2014.1.17加
    ** 取消所有选中节点
    ** 外部也可以使用
    */
    _cancelAllCheckedBoxCallBack:function(){
        var targetArr = $('#' + this.parentDivId).find('.checkBox');
        for (var i = 0; i < targetArr.length; i++) {
            var itemObj=$(targetArr.eq(i)[0]);
            if(itemObj.hasClass('checkBox_che')){
                this.swapClass(itemObj, 'checkBox_che', 'checkBox_un');
            }
        }
    },


    CLASS_NAME: "Rrteam.Control.TreeLayerManage"
})


/**********************
*treeNode类    treeNode的拖动，更改图层的显示顺序
*****************
*/

/*
*为全局变量Rrteam添加一个 NodeDrag属性
*/
Rrteam.Control.NodeDrag = OpenLayers.Class({

    //parentId
    parentId: "",

    //gdbps数组
    gdbps: [],

    //names数组
    names: [],

    //图片的url
    imagesUrl: '',

    /*
    *构造函数
    */
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
        var length = this.gdbps.length;
        if (length > 0) {
            var _html = this.createShowLayerTree();
            _html = _html.join("");
            var me = $("#" + this.parentId);
            me.html("");
            me.append(_html);
            me.append("<div id='" + this.parentId + "-dragDiv' style='width:255px; display:none; position:fixed; left:0;top:0; z-index:1000; border:1px solid black;background-color:#E1E1E1;'>fs</div>");
            this.initEvent(me);
        }
        else
            alert("gdbp数组为空！");
    },



    /*
    *创建已经显示的图层的树状
    */
    createShowLayerTree: function () {
        var ht = [];
        ht.push("<div id='", this.parentId, "-showedLayer'>");
        ht.push("<div id='", this.parentId, "-layerRoot'>");
        ht.push("<img class='treeNodeIcon treeNode_arrow_expanded' src='", this.imagesUrl, "space.gif'/>");
        ht.push("<span class='nodeText colorClass_0' title='已显示图层'>");
        ht.push("已显示图层");
        ht.push("</span>");
        ht.push("</div>");
        ht.push("<div id='", this.parentId, "-layers'>");
        for (var i = 0; i < this.gdbps.length; i++) {
            ht.push("<div id='", this.parentId, "-node-", i, "' class='", this.parentId, "-node'>");
            this.repeatCreatNode(ht, this.gdbps[i], this.names[i], i);
            ht.push("</div>");
        }
        ht.push("</div>");
        ht.push("</div>");
        return ht;
    },

    /*
    *创建图层的树节点
    */
    repeatCreatNode: function (ht, gdbpInfo, nameInfo, i) {
        ht.push("<img  class='imgInstance' src='", this.imagesUrl, "space.gif'/>");
        ht.push("<img  class='imgInstance' src='", this.imagesUrl, "space.gif'/>");
        ht.push("<img id='", this.parentId, "-leaf-", i, "' class='treeNodeIcon treeNode_leaf ", this.parentId, "-leaf' value='", gdbpInfo, "' src='", this.imagesUrl, "space.gif'/>");
        ht.push("<img class='noCursor' src='", this.imagesUrl, "space.gif'/>");
        ht.push("<span class='nodeText colorClass_1' style='cursor:default;' title='", nameInfo, "'>");
        ht.push(this.getTextSubString(nameInfo));
        ht.push("</span>");
        return ht;
    },

    /*
    *截取字符的长度
    */
    getTextSubString: function (txt) {
        var length = txt.length;
        if (length > 7)
            txt = txt.substring(0, 7);
        return txt;
    },

    /*
    *注册事件
    */
    initEvent: function (me) {
        var target = $(document);
        var temp = this;
        var _target = $("#" + this.parentId + "-layers").find("." + this.parentId + "-node");
        /*
        *拖动节点
        */
        _target.mousedown(function (e) {
            var et = e.target || e.srcElement;

            var _target = $(et);                        //鼠标按下的对象
            var divElement = _target.parent();         //鼠标按下的叶子所在的div
            if (_target.hasClass("treeNode_leaf") || _target.hasClass("nodeText")) {
                var tempNode = $("#" + temp.parentId + "-dragDiv");
                $("#" + temp.parentId + "-layers").append("<div id='biaogan' class='bg' style='width:253px;height:1px;display:none;background-color:red;'></div>");
                var biaogan = $("#biaogan");
                var etNodeId;
                if (!_target.attr("id"))
                    _target = _target.prev().prev();
                etNodeId = _target.attr("id").replace("leaf", "node");
                var etNode = $("#" + etNodeId);
                var isMove;

                //开始 拖动
                target.mousemove(function (ev) {
                    //target.css("cursor", "move");
                    isMove = temp.createBiaogan(ev, tempNode, divElement, etNode, biaogan);
                });

                //完成 拖动
                target.mouseup(function (ev) {
                    if (isMove) {
                        temp.nodeDragStop(divElement, biaogan);
                        isMove = false;
                    }
                    biaogan.remove();
                    tempNode.empty();
                    tempNode.hide();
                    //target.css("cursor", "default");
                    target.unbind('mousemove');   //解除target的move事件
                    target.unbind('mouseup');    //解除target的move事件
                });
            }
        });

        //节点的hover
        $(".nodeText").hover(function (e) {
            $(this).addClass("nodeTextHover");
        }, function () {
            $(this).removeClass("nodeTextHover");
        });
    },

    /*
    *获取鼠标的当前位置
    */
    getMousePositon: function (e) {
        return {
            x: e.pageX || e.clientX + document.body.srollLeft,
            y: e.pageY || e.clientY + document.body.scrollTop
        }
    },

    /*
    *获取元素位置
    */
    getElementPosition: function (el) {
        return {
            x: el.offsetParent ? el.offsetLeft + arguments.callee(el.offsetParent)['x'] : el.offsetLeft,
            y: el.offsetParent ? el.offsetTop + arguments.callee(el.offsetParent)['y'] : el.offsetTop
        }
    },

    //获取元素尺寸 
    getElementSize: function (el) {
        return {
            width: el.offsetWidth,
            height: el.offsetHeight
        }
    },

    /*
    * 判断标杆插入点并创建标杆  费劲
    */
    createBiaogan: function (ev, tempNode, divElement, etNode, biaogan) {
        var list = this.getNodePositon();
        var etNodeId = etNode.attr("id");
        tempNode.html($(divElement).clone());         //克隆一个移动对象，产生移动效果
        tempNode.show();
        var x = ev.pageX;
        var y = ev.pageY;
        var currentMouseP = this.getMousePositon(ev);   //获取鼠标的位置
        tempNode.css({ "left": x - 5 + "px", "top": y - 8 + "px" });
        var biaoganL = biaogan.length;
        //用鼠标的位置 判断标杆插入点
        for (var i = 0; i < list.length; i++) {
            //如果在节点的 头部到1/2 之间
            if (currentMouseP.x > list[i][0]['x'] && currentMouseP.x < list[i][0]['x'] + list[i][1]['width'] && currentMouseP.y > list[i][0]['y'] && currentMouseP.y < list[i][0]['y'] + list[i][1]['height'] / 2) {
                if (etNodeId != list[i].id) {
                    biaogan.show();
                    biaogan.insertBefore(list[i])
                    return true;
                }
            }
                //如果在节点的 1/2到1底部 之间
            else if (currentMouseP.x > list[i][0]['x'] && currentMouseP.x < list[i][0]['x'] + list[i][1]['width'] && currentMouseP.y > list[i][0]['y'] + list[i][1]['height'] / 2 && currentMouseP.y < list[i][0]['y'] + list[i][1]['height']) {
                if (etNodeId != list[i].id) {
                    biaogan.show();
                    var afd = $(list[i]).next();
                    biaogan.insertAfter(list[i]);
                    return true;
                }
            }
        }
    },
    /*
    *获取Node顺序
    */
    getNodePositon: function () {
        var nodeList = $("#" + this.parentId + "-layers").find("." + this.parentId + "-node");
        for (var i = 0; i < nodeList.length; i++) {
            nodeList[i][0] = this.getElementPosition(nodeList[i]);
            nodeList[i][1] = this.getElementSize(nodeList[i]);
        }
        return nodeList;
    },

    /*
    *完成拖动
    */
    nodeDragStop: function (obj1, obj2) {
        $("#" + this.parentId + "-layers").append("<div id='" + this.parentId + "-tempDiv1'></div><div id='" + this.parentId + "-tempDiv2'></div>");
        var $obj1 = $(obj1);
        var $obj2 = $(obj2);
        var temp1 = $("#" + this.parentId + "-tempDiv1");
        var temp2 = $("#" + this.parentId + "-tempDiv2");
        temp1.insertAfter($obj1);
        temp2.insertAfter($obj2);
        $obj2.insertBefore(temp1);
        $obj1.insertBefore(temp2);
        temp1.remove();
        temp2.remove();
    },

    CLASS_NAME: "Rrteam.Control.NodeDrag"
})