/// <reference path="Libs/jquery-1.7.1.min.js" />

//快捷菜单
var quickFun = {
    html:'<div class="ui_conTitle">'+
                    '<div class="ctitle_icon"></div>'+
                    '<div class="ctitle_txt">快捷操作</div>'+
                '</div>'+
                '<div class="quickArea">'+
                    '<div class="quickLeft">' +
                        '<div class="quickbg"></div>' +
                        '<div class="quickNav">'+
                            '<div class="quickMenu"><span></span></div>' +
                            '<div class="quickMenu"><span></span></div>' +
                            '<div class="quickMenu"><span></span></div>' +
                            '<div class="quickMenu"><span></span></div>' +
                        '</div>'+
                    '</div>' +
                    '<div class="quickRight"></div>' +
                '</div>',
    init: function () {
        var obj = this;
        $(".quickMenu").mouseover(function () {
            var index = $(".quickMenu").index($(this));
            $(".quickMenu").css({ "background": "#ebebeb", "border-right": "1px solid #c0c0c0" });
            $(this).css({ "background": "#ffffff", "border-right": "1px solid #ffffff" });
            for (var j = 0; j < $(".quickMenu").length; j++) {
                $(".quickMenu").eq(j).find("span").css({ "background-position": "-" + j * 50 + "px -46px" });
            }
            $(this).find("span").css({ "background-position": "-" + index * 50 + "px -1px;" });
            if (index == 2) {
                $(".quickRight").html(obj.forecast());
            }
        });

        $(".quickMenu").eq(2).trigger("mouseover");

    },
    //天气预报
    forecast: function () {
        var str = '<div class="quick_time">2014/02/18—2014/02/19</div>' +
            '<div class="quick_title"><div class="quick_icon">1</div><div class="quick_name">气象预报</div></div>' +
            '<div class="quick_region">' +
                '<div class="quick_regionicon"></div>' +
                '<div class="quick_regiontime">18日18：00-23：00</div>' +
                '<div class="quick_regiontext">' +
                    '<div class="quick_text quick_text1">晴 -2°~0°</div>' +
                    '<div class="quick_text quick_text2">微风</div>' +
                '</div>' +
            '</div>'+
            '<div class="quick_region">' +
                '<div class="quick_regionicon" style="background-position:-20px 0"></div>' +
                '<div class="quick_regiontime">19日00：00-05：00</div>' +
                '<div class="quick_regiontext">' +
                    '<div class="quick_text quick_text1">多云 -2°~0°</div>' +
                    '<div class="quick_text quick_text2">微风</div>' +
                '</div>' +
            '</div>'+
            '<div class="quick_region">' +
                '<div class="quick_regionicon" style="background-position:-40px 0"></div>' +
                '<div class="quick_regiontime">19日05：00-09：00</div>' +
                '<div class="quick_regiontext">' +
                    '<div class="quick_text quick_text1">晴 -2°~0°</div>' +
                    '<div class="quick_text quick_text2">微风</div>' +
                '</div>' +
            '</div>'+
            '<div class="quick_region">' +
                '<div class="quick_regionicon" style="background-position:-40px 0"></div>' +
                '<div class="quick_regiontime">19日09：00-12：00</div>' +
                '<div class="quick_regiontext">' +
                    '<div class="quick_text quick_text1">晴 -2°~0°</div>' +
                    '<div class="quick_text quick_text2">微风</div>' +
                '</div>' +
            '</div>';
        return str;
    },

};
