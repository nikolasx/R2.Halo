
Zondy.Map.TileLayerForMetro = OpenLayers.Class(OpenLayers.Layer.Grid, Zondy.Service.HttpRequest, {

    /**
    * APIProperty: serviceVersion
    * {String}
    */
    serviceVersion: "1.0.0",

    /*
    *地图本地地址
    */
    baseUrl: "",

    /**
    * APIProperty: isBaseLayer
    * {Boolean}
    */
    isBaseLayer: true,

    /**
    * APIProperty: tileOrigin
    * {<OpenLayers.LonLat>}
    */
    tileOrigin: null,

    /**
    * APIProperty: serverResolutions
    * {Array} A list of all resolutions available on the server.  Only set this 
    *     property if the map resolutions differs from the server.
    */
    serverResolutions: null,

    /**
    * APIProperty: zoomOffset
    * {Number} If your cache has more zoom levels than you want to provide
    *     access to with this layer, supply a zoomOffset.  This zoom offset
    *     is added to the current map zoom level to determine the level
    *     for a requested tile.  For example, if you supply a zoomOffset
    *     of 3, when the map is at the zoom 0, tiles will be requested from
    *     level 3 of your cache.  Default is 0 (assumes cache level and map
    *     zoom are equivalent).  Using <zoomOffset> is an alternative to
    *     setting <serverResolutions> if you only want to expose a subset
    *     of the server resolutions.
    */
    zoomOffset: 0,

    /// <summary>瓦片缓存名</summary>
    hdfName: null,

    /// <summary>是否压缩瓦片</summary>
    compress: false,

    /// <summary>压缩比例</summary>
    rate: 1.0,


    initialize: function (name, hdfName, options) {
        /// <summary>构造函数</summary>
        /// <param name="name" type="String">图层的显示名称</param>
        /// <param name="hdfName" type="String">hdf名</param>
        /// <param name="options" type="Object">属性赋值键值对</param>
        var newArguments = [];

        this.hdfName = hdfName;
        newArguments.push(name, null, {}, options);
        OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);

        if (this.baseUrl == null)
            this.baseUrl = "igs/rest/mrms";
    },

    destroy: function () {
        /// <summary>销毁此图层</summary>
        // for now, nothing special to do here. 
        OpenLayers.Layer.Grid.prototype.destroy.apply(this, arguments);
    },


    clone: function (obj) {
        /// <summary>克隆此图层</summary>
        if (obj == null) {
            obj = new Zondy.Map.TileLayerForMetro(this.name,
                                           this.hdf,
                                           this.getOptions());
        }

        //get all additions from superclasses
        obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);

        // copy/set any non-init, non-simple values here

        return obj;
    },


    getURL: function (bounds) {
        bounds = this.adjustBounds(bounds);
        var res = this.map.getResolution();
        var x = Math.round((bounds.left - this.tileOrigin.lon) / (res * this.tileSize.w));
        var y = Math.round((bounds.bottom - this.tileOrigin.lat) / (res * this.tileSize.h)); //默认按左下角为原点计算
        if (y < 0)//如果是左上角是原点
            y = Math.round((this.tileOrigin.lat - bounds.top) / (res * this.tileSize.h));
        var z = this.getZoomForResolution(res, true) + this.zoomOffset;
        var url = this.baseUrl + z + "/Row" + y + "/" + y + "_" + x + ".png";
        if (url instanceof Array) {
            url = this.selectUrl(path, url);
        }
        //url = "ms-appdata:///local/0.png";

        //url = "ms-appdata:///local/map/IMG0/Row0/0_0.JPG";
        // url = "ms-appdata:///local/map/IMG0/Row0/1.JPG";
        return url;
    },

    setMap: function (map) {
        OpenLayers.Layer.Grid.prototype.setMap.apply(this, arguments);
        if (!this.tileOrigin) {
            this.tileOrigin = new OpenLayers.LonLat(this.map.maxExtent.left,
                                                this.map.maxExtent.bottom);
        }
    },

    CLASS_NAME: "OpenLayers.Layer.TileLayer"
});