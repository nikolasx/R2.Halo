
/*-------------------------toolbar类----------------------------*/
R2.Control.Ulselect = OpenLayers.Class({
    /*----------------------------属性---------------------*/

    insertId: "",  //要插入的父节点id

    parentId: "",  //插件本身的父节点

    //firstText:false,  //传入的select初始显示的值,默认显示第一项

    optionText: "",  //传入的select选项text

    optionValue: false,  //传入的select选项value

    parentWidth: "",  //自定义select宽

    parentHeight: "",  //自定义select高

    spanbg: "",  //自定义select右侧下拉按纽背景

    border: "",  //自定义border

    zindex:"",  //自定义层级

    initialize: function (insertId, parentId, option) {
        this.id = insertId;
        this.parentId = parentId;
        OpenLayers.Util.extend(this, option);
        this.initNode();
        $("#" + insertId).append(this.parentNode);
        this.registEvent();
    },
    //创建select父元素parentNode，第一个子元素firstNode及选项子元素childrenNode
    initNode: function () {
        var obj = this;
        obj.parentNode = $('<ul></ul>');
        obj.parentNode.attr("class", obj.parentId + "_ul");
        obj.parentNode.attr("id", obj.parentId);
        obj.parentNode.css({ "list-style": "none","color":"#555", "width": obj.parentWidth, "padding": 0, "height": obj.parentHeight, "font-size": "12px", "text-indent": "8px", "line-height": obj.parentHeight, "border": obj.border, "cursor": "pointer", "background": "#fff","position":"absolute" ,"z-index":obj.zindex});
        obj.firstNode = $('<span></span>');
        obj.firstNode.attr("class", obj.parentId + "_span");
        obj.firstNode.css({ "width": obj.parentWidth, "height": obj.parentHeight, "margin-left": "-1px", "border-bottom": obj.border, "display": "block", "float": "left", "background": obj.spanbg+"no-repeat right center", "cursor": "pointer" });
        obj.parentNode.append(obj.firstNode);
        for (var i = 0; i < obj.optionText.length; i++) {
            obj.childrenNode = $('<li></li>');
            if (obj.optionValue != false) {
                obj.childrenNode.attr("name", obj.optionValue[i]);
            } else {
                obj.childrenNode.attr("name", "");
            }
            obj.childrenNode.attr("class", obj.parentId + "_li");
            obj.childrenNode.css({ "width": obj.parentWidth, "height": obj.parentHeight,"margin-left":"-1px", "float": "left", "cursor": "pointer", "background":"#fff", "border-left": obj.border, "border-right": obj.border });
            obj.childrenNode.text(obj.optionText[i]);
            obj.parentNode.append(obj.childrenNode);
            if (i == obj.optionText.length-1) {
                obj.childrenNode.css({ "border-bottom": obj.border });
            }
        }
    },
    //注册事件
    registEvent: function () {

        var obj = this;

        $("." + this.parentId + "_li").hide();
        $("." + this.parentId + "_span").text(this.optionText[0]);
        $("." + obj.parentId + "_span").attr("name",obj.optionValue[0]);

        $("." + this.parentId+"_span").click(function () {
            $("." + obj.parentId + "_li").show();
        })
        $("#" + this.parentId).mouseleave(function () {
            $("." + obj.parentId + "_li").hide();
        })
        $("." + this.parentId + "_li").hover(function () {
            $(this).css("background", "#ececec");
        }, function () {
            $(this).css("background", "#fff");
        })

        $("." + obj.parentId + "_li").click(function () {
            $("." + obj.parentId + "_span").text($(this).text());
            var vvv=$(this).attr("name");
            $("." + obj.parentId + "_span").attr("name",vvv);
            $("." + obj.parentId + "_li").hide();
        })
    },

    //回调函数,返回select框中的值
    returnAllValues: function () {
        if (this.optionValue != false) {
            return $("." + this.parentId + "_span").attr("name");
        } else {
            return $("." + this.parentId + "_span").text();
        }
    },

    CLASS_NAME: "Rrteam.Control.Ulselect"
})