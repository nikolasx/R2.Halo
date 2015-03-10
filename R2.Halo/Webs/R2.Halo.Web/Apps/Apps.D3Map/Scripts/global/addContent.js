$(function () {
    //clickEvtReg();
    //$(".ui_Content").html(quickFun.html);
    //quickFun.init();

    (function () {

        //if (fullMap.getLayersByName('markers').length > 0) {
        //    var arr = [];
        //    arr = fullMap.getLayersByName('markers')[0].markers;
        //    fullMap.getLayersByName('markers')[0].clearMarkers(arr);
        //}
        //if (fullMap.getControlsBy("id", "drc_rect").length > 0) {
        //    if (fullMap.getControlsBy("id", "drc_rect")[0].active) {
        //        fullMap.getControlsBy("id", "drc_rect")[0].deactivate();
        //    }
        //}
        //if (fullMap.getControlsBy("id", "drc_circle").length > 0) {
        //    if (fullMap.getControlsBy("id", "drc_circle")[0].active) {
        //        fullMap.getControlsBy("id", "drc_circle")[0].deactivate();
        //    }
        //}


        ////进入灾点查询功能，如果有气象站点的画feature事件存在，则对其进行反激活
        //if (fullMap.getControl("drc_polygon").active == true) {
        //    fullMap.getControl("drc_polygon").deactivate();
        //}
        //if (fullMap.getControl("drc_circle").active == true) {
        //    fullMap.getControl("drc_circle").deactivate();
        //}
        //if (fullMap.getControl("drc_rect").active == true) {
        //    fullMap.getControl("drc_rect").deactivate();
        //}

        CreateContent(disasterQuery);

    })();
});





//点击某一菜单改变下方内容
function CreateContent(obj) {
    $(".ui_Content").animate({ "left": "-380px", "opacity": "0" }, function () {
        $(".ui_Content").empty();
        $(".ui_Content").html(obj.html);
        $(".ui_Content").animate({ "left": "0", "opacity": "1" }, function () {
            obj.init();
        });
    })
}

