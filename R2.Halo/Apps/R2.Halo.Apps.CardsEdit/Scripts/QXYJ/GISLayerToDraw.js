/// <reference path="../Libs/OpenLayers.js" />

Zondy.Service.getLayerFeatures = OpenLayers.Class(Zondy.Service.EditServiceBase, {

    /// <summary>添加要素到图层</summary>
    gdbpLayer: null,
    IncludeGeometry: true,
    IncludeWebGraphic: true,
    IncludeAttribute: true,
    startValue:0,
    initialize: function (gdbp,stratValue, options) {
        /// <summary>构造函数</summary>
        /// <param name="docName" type="String">文档名称</param>
        /// <param name="layerIndex" type="Interger">图层序号</param>
        /// <param name="options" type="Object">属性赋值对象</param>
       //var url = "http://" + gisIp + ":" + gisPort + "/igs/rest/mrfs/layer/query?gdbp=" + gdb + "&f=json" +
       //         "&structs={IncludeGeometry:true,IncludeWebGraphic:true,IncludeAttribute:true}&pageCount=1000";
        $.extend(this, options);
        this.gdbp = gdbp;
        this.startValue = stratValue;
        this.partUrl = "layer";
        Zondy.Service.EditServiceBase.prototype.initialize.apply(this);
    },

    getfeatures: function (onSuccess) {
        /// <summary>添加一组要素</summary>
        /// <param name="features" type="{Zondy.Object.FeatureSet}">添加一组要素</param>
        /// <param name="onSuccess" type="{Function}">添加成功后的回调函数</param>
        this.partUrl += "/query";
        var vzhi = encodeURI("起始值>="+this.startValue)
        var url = this.getFullUrl() + "?f=" + this.resultFormat + "&gdbp=" + this.gdbp +
            "&structs={IncludeGeometry:true,IncludeWebGraphic:true,IncludeAttribute:true}&where="+vzhi+"&pageCount=1000&guid=" + Zondy.Util.newGuid();;
        this.ajax(url,null, onSuccess, "GET");
    }
});