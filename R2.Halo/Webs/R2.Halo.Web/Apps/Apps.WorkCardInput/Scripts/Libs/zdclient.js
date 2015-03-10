
/*---------------------------------------------------------GlobalDefine.js---------------------------------------------------------*/

//***************************************************************
// written by leilei @2011-12
// This client is used for warpping REST services from IGServer
//***************************************************************
window.Zondy = {};


Zondy.Map = OpenLayers.Class(Zondy, {
});

Zondy.Service = OpenLayers.Class(Zondy, {
});

Zondy.Service.Catalog = OpenLayers.Class(Zondy.Service, {
});

Zondy.Object = OpenLayers.Class(Zondy, {
});

Zondy.Format = OpenLayers.Class(Zondy, {
});

Zondy.Util = OpenLayers.Class(Zondy, {
});

Zondy.Control = OpenLayers.Class(Zondy, {
});



Zondy.Util.Hashtable = OpenLayers.Class({
    items: new Array,
    itemsCount: 0,

    initialize: function () {
    },

    add: function (key, value) {
        if (!this.containsKey(key)) {
            this.items[key] = value;
            this.itemsCount++;
        }
        else
            throw "key '" + key + "'已经存在"
    },

    get: function (key) {
        if (this.containsKey(key))
            return this.items[key];
        else
            return null;
    },

    remove: function (key) {
        if (this.containsKey(key)) {
            delete this.items[key];
            this.itemsCount--;
        }
        else
            throw "key '" + key + "' does not exists."
    },

    containsKey: function (key) {
        return typeof (this.items[key]) != "undefined";
    },

    containsValue: function containsValue(value) {
        for (var item in this.items) {
            if (this.items[item] == value)
                return true;
        }
        return false;
    },
    contains: function (keyOrValue) {
        return this.containsKey(keyOrValue) || this.containsValue(keyOrValue);
    },

    clear: function () {
        this.items = new Array();
        itemsCount = 0;
    },

    size: function () {
        return this.itemsCount;

    },

    isEmpty: function () {
        return this.size() == 0;
    }
});



/**全局变量定义******/
// {Zondy.Util.HashTable}
Zondy.ATT_STURCT_CACHE = new Zondy.Util.Hashtable();


/**********************************************************常量(枚举)定义************************************************/
Zondy.Enum = {};
Zondy.Enum.FeatureType = {};
Zondy.Enum.FeatureType.Unknown = 0;
Zondy.Enum.FeatureType.Pnt = 1;
Zondy.Enum.FeatureType.Lin = 2;
Zondy.Enum.FeatureType.Reg = 3;

/// <summary>线的动态注记的线方位类型</summary>
Zondy.Enum.LabelLinType = {};

/// <summary>弯曲注记</summary>
Zondy.Enum.LabelLinType.Curved = 0;

/// <summary>笔直注记</summary>
Zondy.Enum.LabelLinType.Forward = 1;

/// <summary>水平注记</summary>
Zondy.Enum.LabelLinType.Horizontal = 2;

/// <summary>正交注记</summary>
Zondy.Enum.LabelLinType.Tangent = 3;

/// <summary>区的动态注记的区方位类型</summary>
Zondy.Enum.LabelRegType = {};
/// <summary>沿骨架线弯曲注记</summary>
Zondy.Enum.LabelRegType.Curved = 0;
/// <summary>沿骨架线笔直注记</summary>
Zondy.Enum.LabelRegType.Forward = 1;
/// <summary>水平注记</summary>
Zondy.Enum.LabelRegType.Horizontal = 2;
/// <summary>边界线注记</summary>
Zondy.Enum.LabelRegType.Boundray = 3;
/// <summary>区域外注记</summary>
Zondy.Enum.LabelRegType.Outside = 4;

/// <summary>点的动态注记的方位类型</summary>
Zondy.Enum.LabelPntType = {};
/// <summary>任意方位</summary>
Zondy.Enum.LabelPntType.PntAnyDir = 0;
/// <summary>八方位</summary>
Zondy.Enum.LabelPntType.PntEightDir = 1;
/// <summary>压点</summary>
Zondy.Enum.LabelPntType.PntOnFea = 2;

/// <summary>线重复注记策略</summary>
Zondy.Enum.RepeatType = {};

/// <summary>自动重复注记（当线长度超过注记长度的2倍时重复注记，否则不重复注记）</summary>
Zondy.Enum.RepeatType.Auto = 0;

/// <summary>从不重复注记</summary>
Zondy.Enum.RepeatType.NoRep = 1;

/// <summary>分段注记</summary>
Zondy.Enum.RepeatType.OnStep = 2;

/// <summary> 注记分布的策略</summary>
Zondy.Enum.LabelSpreadType = {};
/// <summary>自动分布策略（全是数字或字符采用集中注记方式，注记中带有汉字采用分散分布注记）</summary>
Zondy.Enum.LabelSpreadType.AutoSpread = 0;
/// <summary>字符集中分布</summary>
Zondy.Enum.LabelSpreadType.Centralization = 1;
/// <summary>字符分散分布</summary>
Zondy.Enum.LabelSpreadType.Decentralization = 2;

/// <summary>偏离线约束</summary>
Zondy.Enum.LineConstrain = {};

/// <summary>注记在线的左边</summary>
Zondy.Enum.LineConstrain.Left = 0;

/// <summary>注记在线的右边</summary>
Zondy.Enum.LineConstrain.Right = 1;

/// <summary>注记在线的上方</summary>
Zondy.Enum.LineConstrain.Above = 2;

/// <summary>注记在线的下方</summary>
Zondy.Enum.LineConstrain.Below = 3;

/// <summary>注记在线的两边</summary>
Zondy.Enum.LineConstrain.Both = 4;

/// <summary>没有约束</summary>
Zondy.Enum.LineConstrain.NoRes = 5;

/// <summary>点八方位注记类型</summary>
Zondy.Enum.EightDirType = {};
/// <summary>东</summary>
Zondy.Enum.EightDirType.East = 0;
/// <summary>北</summary>
Zondy.Enum.EightDirType.North = 1;
/// <summary>东北</summary>
Zondy.Enum.EightDirType.NorthEast = 2;
/// <summary>西北</summary>
Zondy.Enum.EightDirType.NorthWest = 3;
/// <summary>南</summary>
Zondy.Enum.EightDirType.South = 4;
/// <summary>东南</summary>
Zondy.Enum.EightDirType.SouthEast = 5;
/// <summary>西南</summary>
Zondy.Enum.EightDirType.SouthWest = 6;
/// <summary>西</summary>
Zondy.Enum.EightDirType.West = 7;
/// <summary>无方位</summary>
Zondy.Enum.EightDirType.NoDir = 8;

/// <summary>是否显示弧段</summary>
Zondy.Enum.ISShowArc = {};

/// <summary>只显示填充区域</summary>
Zondy.Enum.ISShowArc.Reg = 0;

/// <summary>只显示弧段</summary>
Zondy.Enum.ISShowArc.Arc = 1;

/// <summary>两者都显示</summary>
Zondy.Enum.ISShowArc.All = 2;

//Zondy.Enum.TileOriginDir = {};
//Zondy.Enum.TileOriginDir.LeftBottom = "LeftBottom";
//Zondy.Enum.TileOriginDir.LeftTop = "LeftTop";
//Zondy.Enum.TileOriginDir.RightBottom = "RightBottom";
//Zondy.Enum.TileOriginDir.RightTop = "RightTop";

//Zondy.Enum.TileType = {};
//Zondy.Enum.TileType.MapGIS = 0;
//Zondy.Enum.TileType.TianDiTu = 1;

Zondy.Enum.TianDiTu = {};
Zondy.Enum.TianDiTu.Vecotr = 0;
Zondy.Enum.TianDiTu.Raster = 1;
Zondy.Enum.TianDiTu.Annotation = 2;


//扩展jQuery对json字符串的转换 
jQuery.extend({
    /** * @see 将json字符串转换为对象 * @param json字符串 * @return 返回object,array,string等对象 */
    evalJSON: function (strJson) {
        return eval("(" + strJson + ")");
    }
});

jQuery.extend({
    /// <summary>将javascript数据类型转换为json字符串</summary>
    /// <param name="object" type="{Object}">待转换对象,支持object,array,string,function,number,boolean,regexp</param>
    /// <param name="exclude" type="{Array}">要排除的属性名称数组，在次数组里的属性将不会被加入到json字符串中</param>
    /// <param name="splitor" type="String">指明属性间用什么符号分割，默认为‘，’</param>
    /// <param name="containQuot" type="Bool">属性名和属性值是否包含引号，如果为false，那么即使是字符串也不会被引号包裹</param>
    toJSON: function (object, exclude, splitor, containQuot) {
        if (object == null)
            return null;
        var type = typeof object;
        if ('object' == type) {
            if (Array == object.constructor) type = 'array';
            else if (RegExp == object.constructor) type = 'regexp';
            else type = 'object';
        }
        switch (type) {
            case 'undefined':
            case 'unknown':
                return;
                break;
            case 'function':
                return;
            case 'boolean':
            case 'regexp':
                return object.toString();
                break;
            case 'number':
                return isFinite(object) ? object.toString() : 'null';
                break;
            case 'string':
                if (containQuot || containQuot == undefined) {
                    return '"' + object.replace(/(\\|\")/g, "\\$1").replace(/\n|\r|\t/g, function () {
                        var a = arguments[0];
                        return (a == '\n') ? '\\n' : (a == '\r') ? '\\r' : (a == '\t') ? '\\t' : ""
                    }) + '"';
                }
                else {
                    return object;
                }
                break;
            case 'object':
                if (object === null) return 'null';
                var results = [];
                for (var property in object) {
                    if (exclude != undefined | exclude != null) {
                        if ($.inArray(property, exclude) > -1)
                            continue;
                    }
                    var value = jQuery.toJSON(object[property], null, null, containQuot);
                    if (value !== undefined) results.push(jQuery.toJSON(property, null, null, containQuot) + ':' + value);
                }
                if (splitor != undefined) {
                    return '{' + results.join(splitor) + '}';
                }
                else {
                    return '{' + results.join(',') + '}';
                }
                break;
            case 'array':
                var results = [];
                for (var i = 0; i < object.length; i++) {
                    var value = jQuery.toJSON(object[i], null, null, containQuot);
                    if (value !== undefined) {
                        if (value == null) {
                            value = 'null';
                        }
                        results.push(value);
                    }
                }
                return '[' + results.join(',') + ']';
                break;
        }
    }
});


//***********************************************Helper 方法************************************************
Zondy.Util.getTopAnalysisResult = function (enumNum) {
    /// <summary>解析拓扑分析的服务器REST返回结果，以更友好的形式返回给客户端</summary>
    switch (enumNum) {
        case 0:
            return "Intersect";
        case 1:
            return "Disjoin";
        case 2:
            return "Include";
        case 3:
            return "Adjacent";
        default:
            return "Unknown";
    }
}

Zondy.Util.newGuid = function () {
    /// <summary>生成一个guid</summary>
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}

Zondy.Util.objectDeleteUnuseful = function (obj, array) {
    /// <summary>删除对象的指定属性</summary>
    /// <param name="obj" type="Object">操作对象</param>
    /// <param name="array" type="String in an Array">需要删除的属性名称</param>
    $.each(array, function (i, value) {
        delete obj[value];
    });
    return obj;
}

Zondy.Util.toUrlParameters = function (obj) {
    if (obj) {
        var rltStr = '';
        $.each(obj, function (key, value) {
            rltStr = rltStr + '&' + key + '=' + value;
        });
        rltStr = rltStr.substring(1, rltStr.length);
        return rltStr;
    }
    else {
        return '';
    }
}
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------HttpRequest.js---------------------------------------------------------*/
Zondy.Service.HttpRequest = OpenLayers.Class({
    /**
    * 查询服务器地址
    * {String}
    */
    ip: "localhost",

    /**
    * 查询服务器端口
    * {String}
    */
    port: "6163",

    /**
    * 查询服务的基地址
    * {String}
    */
    baseUrl: null,

    partUrl: null,

    initialize: function () {
    },

    /**
    * 查询函数，用于向REST服务发送请求,Get方式发送
    * onSuccess(required): 查询成功的回调，此函数接将接受要素类 - {Function}
    */
    ajax: function (restUrl, dataObject, onSuccess, type, contentType, resultFormat) {
        /// <summary>ajax调用REST服务</summary>
        /// <param name="restUrl" type="String">REST服务地址</param>
        /// <param name="dataObject" type="Object">服务器发送的数据，如果为Get则该参数为参数对象</param>
        /// <param name="onSuccess" type="Function">回调函数</param>
        /// <param name="type" type="{String}">请求类型"Get","Post"</param>
        /// <param name="contentType" type="String">get方式默认为‘application/x-www-form-urlencoded’，post默认为text/plain</param>
        /// <param name="resultFormat" type="String">回调结果的包装形式，取值为'json','xml','kml','gml',georss'，默认为‘json’，对于resultFormat参数为xml，kml，
        ///   gml或者georss格式的类xml类型将以text文本返回，如需要可以调用$.parseXML(text)得到其xml包装</param>
        if (restUrl == null) {
            restUrl = "http://" + this.ip + ":" + this.port + "/" + this.baseUrl + "/" + this.partUrl;
        }
        $.support.cors = true;
        var thisObj = this;
        if (type == undefined) {
            type = "GET";
        }

        if (type.toUpperCase() == "POST") {
            if (typeof (dataObject) === "object") {
                var jsonStr = $.toJSON(dataObject);
                dataObject = jsonStr;
            }
        }
        if (contentType == undefined || contentType == null) {
            if (dataObject != null && type.toUpperCase() == "POST")
                contentType = "text/plain";
            else {
                contentType = 'application/x-www-form-urlencoded';
            }
        }

        var dataType = this.analysisResultType(resultFormat);

        if (OpenLayers.ProxyHost != "") {
            this.ajaxForProxy(restUrl, dataObject, onSuccess, type, contentType, dataType);
        }
        else {
            this.ajaxNormal(restUrl, dataObject, onSuccess, type, contentType, dataType);
        }
    },

    analysisCrossDomain: function (url) {
        if (url.indexOf('http') < 0 && url.indexOf('https') < 0) {
            return false;
        }
        else {
            var domainHost = window.location.protocol + '://' + window.location.host;
            if (url.indexOf(domainHost) == 0) {
                return false;
            }
        }
        return true;
    },

    analysisResultType: function (requestFormat) {
        if (!requestFormat)
            return "json";
        if (requestFormat != "json")
            return "text";
        return requestFormat;
    },

    ajaxForProxy: function (restUrl, dataObject, onSuccess, type, contentType, dataType) {
        /// <summary>通过代理服务调用IGServer</summary>
        var reUrl = OpenLayers.ProxyHost;
        if (type.toUpperCase() == "GET") {
            dataObject = { 'url': restUrl + "?" + Zondy.Util.toUrlParameters(dataObject) };
        }
        else {
            reUrl += '?url=' + encodeURIComponent(restUrl);
        }
        var thisObj = this;
        var ajaxParam = {
            type: type,
            url: reUrl,
            dataType: dataType,
            data: dataObject,
            context: thisObj,
            contentType: contentType,

            success: function (jsonObj, status, xrequest) {
                onSuccess.call(this, jsonObj);
            },
            error: function (s) {
                alert("请求失败，请检查参数");
            }
        }
        $.ajax(ajaxParam);
    },


    ajaxNormal: function (restUrl, dataObject, onSuccess, type, contentType, dataType) {
        /// <summary>不经过代理服务，直接调用REST服务</summary>
        var thisObj = this;
        var crossDomain = this.analysisCrossDomain(restUrl);
        if ($.browser.msie && window.XDomainRequest && crossDomain) {
            // window.XDomainRequest 要求服务器输出header信息，所以如果不是跨域的请求即使是IE也不要使用XDomainRequest
            this.ajaxForIE(restUrl, dataObject, onSuccess, type, thisObj, dataType);
        }
        else {
            if (dataObject) {
                dataObject.gdbp = decodeURI(dataObject.gdbp); //MR修改，为解决Chrome请求参数失败
            }
            var ajaxParam = {
                type: type,
                url: restUrl,
                dataType: dataType,
                data: dataObject,
                context: thisObj,
                contentType: contentType,

                success: function (jsonObj, status, xrequest) {
                    onSuccess.call(this, jsonObj);
                },
                error: function (s) {
                    alert("请求失败，请检查参数");
                }
            }
            $.ajax(ajaxParam);
        }
    },

    ajaxForIE: function (url, data, callback, type, context, resultFormat) {
        /// <summary>IE实现跨域，只支持IE8.0beta版本以上的浏览器，8.0以下版本无法实现跨域</summary>
        var xdr = new XDomainRequest();
        if (type.toUpperCase() == "GET") {
            var params = '';
            if (data) {
                for (key in data) {
                    params = params + '&' + key + '=' + data[key];
                }
                params = params.substring(1, params.length);
                if (url.contains('?'))
                    url += params;
                else
                    url = url + "?" + params;
            }
            url = decodeURI(url);
            url = encodeURI(url);
            xdr.open('get', url);
            xdr.onload = function () {

                var rlt;
                if (resultFormat != "text") {
                    rlt = $.parseJSON(this.responseText);
                }
                else
                    rlt = this.responseText;
                callback.call(context, rlt);
            };
            xdr.send();
        }
        if (type.toUpperCase() == "POST") {
            url = decodeURI(url);
            url = encodeURI(url);
            xdr.open("post", url);
            xdr.send(data);
            xdr.onload = function () {
                callback(xdr.responseText, 'success');
            };
        }
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------DocLayer.js---------------------------------------------------------*/



Zondy.Service.DocLayer = OpenLayers.Class({
    /**
    *  地图文档名
    * {String}
    */
    mapName: null,

    /**
    *  地图图层序号
    * {Interger}
    */
    layerIndex: null,

    /**
    *  地图序号
    * {Interger}
    */
    mapIndex: 0,

    initialize: function () {
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Doc.js---------------------------------------------------------*/
Zondy.Map.Doc = OpenLayers.Class(OpenLayers.Layer.Grid, Zondy.Service.HttpRequest, {
    /// <summary>用于显示一个地图文档的图像</summary>

    /// <summary>当重叠层与基础层的空间参考系不一致时,可设置其与基础层一致
    ///     {Boolean} Try to reproject this layer if its coordinate reference system
    ///     is different than that of the base layer.  Default is false.  
    ///     Set this in the layer options.   
    /// </summary>
    reproject: false,

    isBaseLayer: true,

    /// <summary>
    ///     {Boolean} Should the BBOX commas be encoded? The WMS spec says 'no', 
    ///     but some services want it that way. Default false.
    /// </summary>
    encodeBBOX: false,

    /// <summary>文档名称</summary>
    docName: null,

    /// <summary>图像类型:jpg,png,gif</summary>
    f: "png",

    /// <summary>
    ///     指示需要显示的地图图层号
    ///     show,hide,include,exclude 4种形式
    ///     eg:  'layers=show:1,2,3','layers=include:4,5,7'
    /// </summary>
    layers: null,

    /// <summary>
    ///     用户指定的图层过滤条件，它由多个键值对组成，值为您所要设定的过滤条件。
    ///     eg：'filters=1:ID>4,3:ID>1'
    ///     中文请使用UTF-8编码后再传入参数
    ///     javascitpt中请使用encodeURI（）函数编码后再代入filters参数中
    ///     注意，在此函数中“：”和“，”是保留字符，用于表示键值对概念和分隔不同图层的条件，请不要将这2个字符用于自定义条件中
    /// </summary>
    filters: null,


    /// <summary>
    ///     显示参数
    ///     Zondy.Object.CDisplayStyle
    /// </summary>
    style: null,

    /// <summary>
    ///     动态投影参数,设置地图文档在服务器端重新投影所需的空间参考系对象
    ///     Zondy.Object.CGetImageBySRSID
    /// </summary>
    proj: null,

    /// <summary>是否使用动态裁图</summary>
    cache: false,

    /// <summary>是否重新裁图</summary>
    update: false,

    /// <summary>动态裁图范围,OpenLayers.Bounds，如果null，默认取map最大范围</summary>
    cacheBox: null,

    /// <summary></summary>
    p_cacheOrigin: null,

    /// <summary>裁图宽度</summary>
    cacheWidth: 256,

    /// <summary>裁图高度</summary>
    cacheHeight: 256,

    /// <summary>客户端标识，用以服务器缓存地图,此属性不应作为公有属性</summary>
    guid: null,


    initialize: function (name, docName, options) {
        /// <summary>构造函数</summary>
        /// <param name="name" type="String">此地图文档控件的显示名称</param>
        /// <param name="docName" type="String">地图文档名</param>
        /// <param name="options" type="String">其他属性键值对</param>


        var newArguments = [];
        if (this.baseUrl == null)
            this.baseUrl = "igs/rest/mrms";
        if (this.partUrl == null)
            this.partUrl = "docs";
        OpenLayers.Util.extend(this, options);
        var url = "http://" + this.ip + ":" + this.port + "/" + this.baseUrl + "/" + this.partUrl + "/" + docName;
        var params = {};



        newArguments.push(name, url, params, {});
        OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
        if (options != null) {
            if (options.isBaseLayer == false) {
                this.isBaseLayer = false;
            }
        }

        if (this.guid == null) {
            this.guid = Zondy.Util.newGuid();
        }

        if (!this.cache) {
            this.singleTile = true;
        }
    },

    setDocUniqueName: function (guid) {
        /// <summary>设置文档在服务器的名称</summary>
        /// <param name="guid" type="String">唯一文档名称</param>
        this.guid = guid;
    },


    getDocUniqueName: function () {
        /// <summary>获取文档在服务器的名称</summary>
        return this.guid;
    },


    destroy: function () {
        // for now, nothing special to do here. 
        OpenLayers.Layer.Grid.prototype.destroy.apply(this, arguments);
    },


    clone: function (obj) {

        if (obj == null) {
            obj = new OpenLayers.Layer.WMS(this.name,
                                           this.url,
                                           this.params,
                                           this.getOptions());
        }

        //get all additions from superclasses
        obj = OpenLayers.Layer.Grid.prototype.clone.apply(this, [obj]);

        // copy/set any non-init, non-simple values here

        return obj;
    },

    reverseAxisOrder: function () {
        return (parseFloat(this.params.VERSION) >= 1.3 &&
            !!this.yx[this.map.getProjectionObject().getCode()]);
    },

    getURL: function (bounds) {
        var newParams = {};
        newParams.f = this.f;
        newParams.cache = this.cache;

        bounds = this.adjustBounds(bounds);

        if (this.cache) {
            if (this.cacheBox == null) {
                this.cacheBox = this.map.maxExtent;
            }


            if (this.p_cacheOrigin == null) {
                this.p_cacheOrigin = new OpenLayers.LonLat(this.cacheBox.left, this.cacheBox.bottom);
            }
            var res = this.map.getResolution();
            newParams.col = Math.round((bounds.left - this.p_cacheOrigin.lon) / (res * this.tileSize.w));
            newParams.row = Math.round((bounds.bottom - this.p_cacheOrigin.lat) / (res * this.tileSize.h)); //默认按左下角为原点计算
            newParams.level = this.getZoomForResolution(res, true);

            newParams.w = this.cacheWidth;
            newParams.h = this.cacheHeight;
            newParams.bbox = this.map.maxExtent.toString();
            newParams.update = this.update;
        }
        else {

            var imageSize = this.getImageSize();

            var reverseAxisOrder = this.reverseAxisOrder();
            newParams.bbox = this.encodeBBOX ?
            bounds.toBBOX(null, reverseAxisOrder) :
            bounds.toArray(reverseAxisOrder);

            newParams.w = imageSize.w;
            newParams.h = imageSize.h;
            newParams.filters = this.filters;
            newParams.layers = this.layers;
            newParams.style = $.toJSON(this.style);
            newParams.proj = $.toJSON(this.proj);
            newParams.guid = this.guid;
        }
        var requestString = this.getFullRequestString(newParams);
        return requestString;
    },

    mergeNewParams: function (newParams) {
        var upperParams = OpenLayers.Util.upperCaseObject(newParams);
        var newArguments = [upperParams];
        return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,
                                                             newArguments);
    },

    getFullRequestString: function (newParams, altUrl) {

        if (typeof this.params.TRANSPARENT == "boolean") {
            newParams.TRANSPARENT = this.params.TRANSPARENT ? "TRUE" : "FALSE";
        }

        return OpenLayers.Layer.Grid.prototype.getFullRequestString.apply(
                                                    this, arguments);
    },

    CLASS_NAME: "Zondy.Map.Doc"
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------TileLayer.js---------------------------------------------------------*/

Zondy.Map.TileLayer = OpenLayers.Class(OpenLayers.Layer.Grid, Zondy.Service.HttpRequest, {

    /**
    * APIProperty: serviceVersion
    * {String}
    */
    serviceVersion: "1.0.0",

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
            obj = new Zondy.Map.TileLayer(this.name,
                                           this.hdfName,
                                           this.url,
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
        var path = "/" + this.hdfName + "/" + z + "/" + y + "/" + x;

        var url = "http://" + this.ip + ":" + this.port + "/" + this.baseUrl + "/" + "tile";
        if (url instanceof Array) {
            url = this.selectUrl(path, url);
        }
        return url + path;
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

/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------TianDiTu.js---------------------------------------------------------*/

Zondy.Map.TianDiTu = OpenLayers.Class(OpenLayers.Layer.Grid, {

    /**
    * APIProperty: serviceVersion
    * {String}
    */
    serviceVersion: "1.0.0",

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

    layerType: Zondy.Enum.TianDiTu.Vecotr,

    url: "http://tile0.tianditu.com/DataServer",


    initialize: function (name, options) {
        /// <summary>构造函数</summary>
        /// <param name="name" type="String">地图在浏览器上的显示名称</param>
        $.extend(this, options);
        var url = this.url;
        var newArguments = [];
        newArguments.push(name, url, {}, {});
        OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);
    },

    destroy: function () {
        /// <summary>销毁此图层</summary>
        // for now, nothing special to do here. 
        OpenLayers.Layer.Grid.prototype.destroy.apply(this, arguments);
    },


    clone: function (obj) {
        /// <summary>克隆此图层</summary>
        if (obj == null) {
            obj = new OpenLayers.Layer.TileLayer(this.name,
                                           this.url,
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
        var y = Math.round((this.tileOrigin.lat - bounds.top) / (res * this.tileSize.h));

        if (y < 0)
            y = Math.abs(y);
        var z = this.serverResolutions != null ?
            OpenLayers.Util.indexOf(this.serverResolutions, res) :
            this.map.getZoom() + this.zoomOffset;
        return this.getTiandiUrl(this.layerType, x, y, z);
    },

    getTiandiUrl: function (type, col, row, lvl) {
        var dataType = ""
        switch (type) {
            case 0: //天地图矢量数据
                dataType = "A0512_EMap"; //A0512_EMap
                if (lvl >= 2 && lvl <= 10) {
                    dataType = "A0512_EMap";
                }
                if (lvl > 10 && lvl <= 12) {
                    dataType = "B0627_EMap1112";
                }
                if (lvl > 12 && lvl <= 18) {
                    dataType = "siwei0608";
                }
                break;
            case 1: //天地图影像数据
                dataType = "sbsm0210";
                if (lvl == 11) {
                    dataType = "e11";
                }
                if (lvl == 12) {
                    dataType = "e12";
                }
                if (lvl == 13) {
                    dataType = "e13";
                }
                if (lvl == 14) {
                    dataType = "eastdawnall";
                }
                if (lvl >= 15 && lvl <= 18) {
                    dataType = "sbsm1518";
                }
                break;
            case 2: //天地图地名数据
                dataType = "A0610_ImgAnno";
                if (lvl >= 11 && lvl <= 14) {
                    dataType = "B0530_eImgAnno";
                }
                else if (lvl >= 15 && lvl <= 18) {
                    dataType = "siweiAnno68";
                }
                break;
        }
        var tileUrl = "";
        tileUrl = this.url;
        tileUrl += "?T=";
        tileUrl += dataType;
        tileUrl += "&X=" + col + "&Y=" + row + "&L=" + lvl;
        //tileUrl = "http://tile0.tianditu.com/DataServer?T=A0512_EMap&X=208&Y=40&L=8";
        return tileUrl;
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

/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------AnyLine.js---------------------------------------------------------*/

Zondy.Object.AnyLine = OpenLayers.Class({

    /// <summary>{Array},一组{Zondy.Object.Arc}类型</summary>
    Arcs: null,

    initialize: function (elements) {
        /// <summary>构造函数</summary>
        /// <param name="elements" type="Array,Zondy.Object.Arc 或者 Zondy.Object.Point in an Array">一组Zondy.Object.Arc，用以描述弧段</param>
        if (elements && elements.length != 0) {
            if (elements[0] instanceof Zondy.Object.Arc)
                this.Arcs = elements;
            if (elements[0] instanceof Zondy.Object.Point2D) {
                // 传入点数组则构建一个值包含一个arc的anyline
                this.Arcs = [(new Zondy.Object.Arc(elements))];
            }
        }
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Arc.js---------------------------------------------------------*/


Zondy.Object.Arc = OpenLayers.Class({
    /// <summary>描述一个弧段</summary>

    /// <summary>表示一个弧段的ID编号，不需要为其赋值</summary>
    ArcID: 0,

    /// <summary>{Array},一组{Zondy.Object.Point2D}类型</summary>
    Dots: null,

    initialize: function (dots) {
        /// <summary>构造函数</summary>
        /// <param name="dots" type="Array,Zondy.Object.Point2D in an Array">一组点用以构造弧段</param>
        this.Dots = dots;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------FeatureGraphicBase.js---------------------------------------------------------*/
Zondy.Object.FeatureGraphicBase = OpenLayers.Class({

    GID: 0,

    initialize: function () {
    },

    setGID: function (id) {
        /// <summary>设置此类的id</summary>
        /// <param name="id" type="Interger">id号</param>
        this.GID = id;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------GLine.js---------------------------------------------------------*/
Zondy.Object.GLine = OpenLayers.Class(Zondy.Object.FeatureGraphicBase, {

    /// <summary>{Zondy.Object.AnyLine}类型</summary>
    Line: null,

    initialize: function (line) {
        /// <summary>构造函数</summary>
        /// <param name="line" type="Zondy.Object.AnyLine">构造GLine的参数</param>
        /// <param name="gid" type="Interger">该线条的要素编号</param>
        this.Line = line;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------GRegion.js---------------------------------------------------------*/
Zondy.Object.GRegion = OpenLayers.Class(Zondy.Object.FeatureGraphicBase, {

    /// <summary>Array,Zondy.Object.AnyLine in an Array</summary>
    Rings: null,

    initialize: function (elements) {
        /// <summary>构造函数</summary>
        /// <param name="elements" type="Array,Zondy.Object.AnyLine 或者 Zondy.Object.Point in an Array">一组AnyLine</param>
        if (elements && elements.length != 0) {
            if (elements[0] instanceof Zondy.Object.AnyLine)
                this.Rings = elements;
            if (elements[0] instanceof Zondy.Object.Point2D) {
                // 传入点数组则构建一个仅包含一个anyline的gregion，同时这个gregion也只包含一个arc
                this.Rings = [(new Zondy.Object.AnyLine(elements))];
            }
        }
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CAttDataRow.js---------------------------------------------------------*/


Zondy.Object.CAttDataRow = OpenLayers.Class({


    FID: 0,

    Values: null,

    initialize: function (values, fid) {
        /// <summary>构造函数</summary>
        /// <param name="values" type="Array,String in an Array">属性数据</param>
        /// <param name="fid" type="Interger">要素的ID</param>
        this.FID = fid;
        this.Values = values;
    }
}
);
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CAttStruct.js---------------------------------------------------------*/


Zondy.Object.CAttStruct = OpenLayers.Class({


    /// <summary>
    /// 属性名
    /// Array,String in an Array
    ///</summary>
    FldName: null,

    /// <summary>
    /// 属性个数
    /// Interger
    ///</summary>
    FldNumber: 0,


    /// <summary>
    /// 属性类型数组
    /// Array,String in an Array
    /// Type: string,boolean,double,integer,long,short,datetime,time,stamp
    ///</summary>
    FldType: null,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性字段赋值对象/param>
        $.extend(this, options); //扩展属性的函数
    }
}
);
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CLineInfo.js---------------------------------------------------------*/

Zondy.Object.CLineInfo = OpenLayers.Class({

    /// <summary>定义线要素的相关参数</summary>

    /// <summary>线颜色</summary>
    Color: 1,

    /// <summary>线型ID</summary>
    LinStyleID: 1,

    /// <summary>辅助线型ID</summary>
    LinStyleID2: 0,

    /// <summary>线宽度</summary>
    LinWidth: 1,

    /// <summary>x比例系数</summary>
    Xscale: 1,

    /// <summary>y比例系数</summary>
    Yscale: 1,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>

        OpenLayers.Util.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CPointInfo.js---------------------------------------------------------*/

Zondy.Object.CPointInfo = OpenLayers.Class({
    /// <summary>定义点要素的相关参数</summary>

    /// <summary>子图角度</summary>
    Angle: 1,

    /// <summary>子图颜色</summary>
    Color: 1,

    /// <summary>子图高度</summary>
    SymHeight: 1,

    /// <summary>子图ID</summary>
    SymID: 1,

    /// <summary>子图宽度</summary>
    SymWidth: 1,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>

        OpenLayers.Util.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CRegionInfo.js---------------------------------------------------------*/

Zondy.Object.CRegionInfo = OpenLayers.Class({
    /// <summary>定义线要素的相关参数</summary>

    /// <summary>结束填充色</summary>
    EndColor: 1,

    /// <summary>填充颜色</summary>
    FillColor: 1,

    /// <summary>填充模式</summary>
    FillMode: 0,

    /// <summary>填充图案笔宽</summary>
    OutPenWidth: 1,

    /// <summary>填充图案角度</summary>
    PatAngle: 1,

    /// <summary>填充图案颜色</summary>
    PatColor: 1,

    /// <summary>填充图案高度</summary>
    PatHeight: 1,

    /// <summary>填充图案ID</summary>
    PatID: 1,

    /// <summary>填充图案宽度</summary>
    PatWidth: 1,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>

        OpenLayers.Util.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CGDBInfo.js---------------------------------------------------------*/


Zondy.Object.CGDBInfo = OpenLayers.Class({
    /// <summary>表示一个GDB的相关信息</summary>

    GDBName: null, //数据库名称
    GDBSvrName: null, //数据源名称
    Password: null, //除MapGISLocal数据源，其它的都设置
    User: null, //除MapGISLocal数据源，其它的都设置

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性字段赋值对象/param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CGetImageBySRSID.js---------------------------------------------------------*/

Zondy.Object.CGetImageBySRSID = OpenLayers.Class({
    /// <summary>取图投影参数信息</summary>

    /// <summary>Zondy.Object.CGDBInfo</summary>
    GdbInfo: null,

    /// <summary>投影参数ID</summary>
    SRSID: -1,

    initialize: function (srsID, gdbInfo) {
        /// <summary>构造函数</summary>
        /// <param name="srsID" type="Interger">投影ID</param>
        /// <param name="gdbInfo" type="Zondy.Object.CGDBInfo">投影系数的GDB信息</param>
        this.GdbInfo = gdbInfo;
        this.SRSID = srsID;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------DynShowStyle.js---------------------------------------------------------*/

Zondy.Object.DynShowStyle = OpenLayers.Class({

    /// <summary>透明度</summary>
    Alpha: 0,

    /// <summary>是否使用错误处理符号</summary>
    BugSpare: false,

    /// <summary>是否自绘驱动</summary>
    CustomRender: false,

    /// <summary>
    /// String
    /// 自绘驱动路径设置
    /// </summary>
    CustomRenderPath: null,

    /// <summary>显示的线方向线符号(只适用于其颜色)</summary>
    DirectionLineClr: 0,

    /// <summary>是否动态注记</summary>
    DynNoteFlag: false,


    /// <summary>
    ///  动态注记参数
    /// Zondy.Object.CDynNoteInfo
    /// </summary>
    DynNoteInfo: null,

    /// <summary>
    ///  Zondy.Enum.ISShowArc,枚举类型
    ///   是否显示填充区域的弧段
    /// </summary>
    IsShowArc: 0,

    /// <summary>是否显示线方向</summary>
    ISShowLineDirection: false,

    /// <summary>
    ///  显示的弧段样式(只适用于其颜色)
    /// Zondy.Object.CLineInfo
    /// </summary>
    LineInfo: null,

    /// <summary>最大显示比率</summary>
    MaxScale: 0.00,

    /// <summary>最小显示比率</summary>
    MinScale: 0.00,

    /// <summary>显示坐标点</summary>
    ShowCoordPnt: false,

    /// <summary>
    /// Zondy.Object.CLineInfo
    ///  错误处理线符号
    ///</summary>
    SpareLineInfo: null,


    /// <summary>
    ///  错误处理点符号
    ///  Zondy.Object.CPointInfo
    /// </summary>
    SparePointInfo: null,



    /// <summary>
    ///  错误处理区符号
    /// Zondy.Object.CRegionInfo
    ///</summary>
    SpareRegInfo: null,

    /// <summary>符号显示比例</summary>
    SymbleScale: 0.00,


    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------LabelLinInfo.js---------------------------------------------------------*/


Zondy.Object.LabelLinInfo = OpenLayers.Class({

    /// <summary> 不完全注记</summary>
    ClientOutLabel: false,

    /// <summary>偏离线约束 偏移线的距离</summary>
    DistFromLine: 0.00,

    /// <summary>Zondy.Enum.LineConstrain,枚举类型,偏离线约束</summary>
    FromLineConstrain: 0,

    /// <summary>线重复注记 每段的长度</summary>
    Interval: 0.00,

    /// <summary>Zondy.Enum.LabelLinType,枚举类型, 线方位</summary>
    LinType: 0,

    /// <summary>Zondy.Enum.RepeatType,枚举类型,线重复注记策略</summary>
    Repeat: 0,

    /// <summary>Zondy.Enum.LabelSpreadType,枚举类型,注记分布的策略</summary>
    SpreadType: null,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------LabelPntInfo.js---------------------------------------------------------*/



Zondy.Object.LabelPntInfo = OpenLayers.Class({
    /// <summary>点任意方位的角度值，Array,Double in an Array</summary>
    Ang: null,

    /// <summary>不完全注记</summary>
    ClientOutLabel: false,

    /// <summary>偏移距离，单位为像素</summary>
    Distance: 0.00,

    /// <summary>点八方位注记类型，Array,Zondy.Enum.EightDirType in an Array</summary>
    EightDirLableType: null,

    /// <summary>点方位，Zondy.Enum.LabelPntType</summary>
    PntType: 0,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------LabelRegInfo.js---------------------------------------------------------*/


Zondy.Object.LabelRegInfo = OpenLayers.Class({
    /// <summary>区方位属性</summary>

    /// <summary>不完全注记</summary>
    ClientOutLabel: false,

    /// <summary>
    ///是否尝试水平注记微小区
    /// short
    ///</summary>
    LabelMiniRegion: 0,

    /// <summary>
    ///  自适应策略 区内不能注记时，是否可以注记在外部
    ///  short
    /// </summary>
    MayPlaceOutside: 0,

    /// <summary>
    ///  微小区最大面积
    ///  short
    /// </summary>
    MiniRegionArea: 0,

    /// <summary>区域外注记时，注记偏移的距离</summary>
    Offset: 0.00,

    /// <summary>区方位，Zondy.Enum.LabelRegType,枚举类型</summary>
    RegType: 0,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CDisplayStyle.js---------------------------------------------------------*/


Zondy.Object.CDisplayStyle = OpenLayers.Class({
    /// <summary>地图显示参数</summary>

    /// <summary>注记符号大小固定</summary>
    AnnSizeFixed: false,

    /// <summary>图像质量</summary>可选值为：1（低）、2（中）、3（高）
    DriverQuality: 0,

    /// <summary>是否动态投影</summary>
    DynProjFlag: false,

    /// <summary>符号是否跟随显示放大（该属性已过时，请使用各个要素类的大小固定及线宽固定）</summary>
    FollowScale: false,

    /// <summary>线状符号线宽固定</summary>
    LinPenWidFixed: false,

    /// <summary>线状符号大小固定</summary>
    LinSizeFixed: false,

    /// <summary>点状符号线宽固定</summary>
    PntPenWidFixed: false,

    /// <summary>点状符号大小固定</summary>
    PntSizeFixed: false,

    /// <summary>填充符号线宽固定</summary>
    RegPenWidFixed: false,

    /// <summary> 填充符号大小固定</summary>
    RegSizeFixed: false,

    /// <summary>显示坐标点</summary>
    ShowCoordPnt: false,

    /// <summary>显示元素的外包矩形</summary>
    ShowElemRect: false,

    /// <summary>
    ///     图层显示参数
    ///     Array,Zondy.Object.DynShowStyle in Array
    /// </summary>
    ShowStyle: null,

    /// <summary>是否进行还原显示</summary>
    SymbleShow: true,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性字段赋值对象/param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CDynNoteInfo.js---------------------------------------------------------*/

Zondy.Object.CDynNoteInfo = OpenLayers.Class({

    /// <summary>动态注记字符串角度</summary>
    Angle: 0.00,

    /// <summary>背景颜色</summary>取值请参照MapGIS颜色库中颜色编号
    Backclr: 0,

    /// <summary>轮廓宽度</summary>
    Backexp: 0.00,

    /// <summary>加粗</summary>
    Bold: 0,

    /// <summary>注记字段名称</summary>
    FieldName: null,

    /// <summary>字体角度</summary>
    FontAngle: 0.00,

    /// <summary>注记颜色</summary>
    FontColor: 0,

    /// <summary>注记大小</summary>
    FontSize: 0,

    /// <summary>注记字体</summary>
    FontStyle: 0,

    /// <summary>中文字体</summary>
    Ifnt: 0,

    /// <summary>字形</summary>
    Ifnx: 0,

    /// <summary>是否填充背景</summary>
    IsFilled: false,

    /// <summary>是否水平显示</summary>
    IsHzpl: false,

    /// <summary>覆盖方式（表明透明还是覆盖）</summary>
    IsOvprnt: false,

    /// <summary>Description</summary>
    LabelLevel: 0,

    /// <summary>
    ///   Zondy.Object.DynNoteLableType
    /// </summary>
    LableType: null,

    /// <summary> x方向的偏移</summary>
    Offsetx: 0.00,

    /// <summary>y方向的偏移</summary>
    Offsety: 0.00,

    /// <summary>字间距</summary>
    Space: 0.00,

    /// <summary>删除线</summary>
    StrikeThrough: 0,

    /// <summary>下划线</summary>
    UnderLine: 0,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性字段赋值对象/param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------WebGraphicsInfo.js---------------------------------------------------------*/


Zondy.Object.WebGraphicsInfo = OpenLayers.Class({
    /// <summary>定义要素的图形参数</summary>


    /// <summary>枚举类型，取值范围： 1（PntInfo）,2（LinInfo）,3（RegInfo）</summary>
    InfoType: 0,

    /// <summary>线信息对象,Zondy.Object.CLineInfo类型</summary>
    LinInfo: null,

    /// <summary>点信息对象,Zondy.Object.CPointInfo类型</summary>
    PntInfo: null,

    /// <summary>区信息对象,Zondy.Object.CRegionInfo类型</summary>
    RegInfo: null,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性赋值键值对</param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------FeatureGeometry.js---------------------------------------------------------*/

Zondy.Object.FeatureGeometry = OpenLayers.Class({

    /*
    *Array类型
    *一组Zondy.Object.GLine对象in Array
    */
    LinGeom: null,

    /*
    *Array类型
    *一组Zondy.Object.GPoint 对象in Array
    */
    PntGeom: null,

    /*
    *Array类型
    *一组Zondy.Object.GRegion 对象in Array
    */
    RegGeom: null,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>
        $.extend(this, options);
    },

    setLine: function (lines) {
        /// <param name="lines" type="Zondy.Object.GLine in Array">线参数设置</param>
        this.LinGeom = lines;
    },
    setPntGeom: function (pnts) {
        /// <param name="pnts" type="Zondy.Object.GPoint in Array">点参数设置</param>
        this.PntGeom = pnts;
    },
    setRegGeom: function (Regs) {
        /// <param name="Regs" type="Zondy.Object.GRegion in Array">区参数设置</param>
        this.RegGeom = Regs;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Tangram.js---------------------------------------------------------*/


Zondy.Object.Tangram = OpenLayers.Class({

    setByOL: function (openlayersObj) {
        /// <summary> * 实现将openlayers的geomerty转换为zondy类型
        ///此方法由子类实现</summary>
        return null;
    },

    toString: function () {
        return "";
    },

    getGeometryType: function () {
        /// <summary>获取几何类型名称,由子类实现</summary>
        return;
    }
});






/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Point2D.js---------------------------------------------------------*/
Zondy.Object.Point2D = OpenLayers.Class(Zondy.Object.Tangram, {

    /// <summary>x轴坐标</summary>
    x: null,

    /// <summary>y轴坐标</summary>
    y: null,


    setByOL: function (point) {
        /// <summary>通过传入Openlayers的OpenLayers.Geometry.Point类型来设置参数</summary>
        /// <param name="point" type="OpenLayers.Geometry.Point">Openlayers定义的点类型</param>
        this.x = point.x;
        this.y = point.y;

    },

    toString: function () {
        /// <summary>返回一个以字符串形式表示的点</summary>
        if (this.x == null || this.y == null)
            return "";
        var str = this.x + ',' + this.y;
        return str;
    },

    getGeometryType: function () {
        /// <summary>获取几何类型名称</summary>
        return "Point2D";
    },


    initialize: function (x, y) {
        /// <summary>构造函数</summary>
        /// <param name="x" type="Double">x轴坐标</param>
        /// <param name="y" type="Double">y轴坐标</param>
        this.x = x;
        this.y = y;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------PointForQuery.js---------------------------------------------------------*/
Zondy.Object.PointForQuery = OpenLayers.Class(Zondy.Object.Point2D, {

    initialize: function (x, y) {
        /// <summary>构造函数</summary>
        /// <param name="x" type="Double">x轴坐标</param>
        /// <param name="y" type="Double">y轴坐标</param>
        Zondy.Object.Point2D.prototype.initialize.apply(this, arguments);
    },

    /// <summary>设置点的搜索半径</summary>
    nearDis: 0.0,

    getGeometryType: function () {
        /// <summary>获取几何类型名称</summary>
        return "Point";
    },

    toString: function () {
        var str = Zondy.Object.Point2D.prototype.toString.apply(this);
        return str + ";" + this.nearDis;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Rectangle.js---------------------------------------------------------*/
Zondy.Object.Rectangle = OpenLayers.Class(Zondy.Object.Tangram, {
    /// <summary>表示一个矩形</summary>

    xmin: 0.0,

    xmax: 0.0,

    ymin: 0.0,

    ymax: 0.0,

    setByOL: function (openlayersRect) {
        /// <summary>使用一个由Openlayers定义的矩形来构造本对象</summary>
        /// <param name="openlayersRect" type="OpenLayers.Geometry.Polygon">由OpenLayers定义的矩形对象</param>
        this.xmin = openlayersRect.components[0].components[3].x;
        this.ymin = openlayersRect.components[0].components[3].y;
        this.xmax = openlayersRect.components[0].components[1].x;
        this.ymax = openlayersRect.components[0].components[1].y;
    },

    toString: function () {
        /// <summary>返回一个字符串来表示此矩形</summary>
        return "" + this.xmin + ',' + this.ymin + ',' + this.xmax + ',' + this.ymax;
    },

    getGeometryType: function () {
        /// <summary>获取几何类型名称</summary>
        return "Rect";
    },

    convertToBound: function () {
        /// <summary>将本对象转换为一个OpenLayers.Bound对象</summary>
        /// <returns type="OpenLayers.Bound" />
        bounds = new OpenLayers.Bounds(this.xmin, this.ymin, this.ymax, this.xmax);
        return bounds;
    },

    initialize: function (argument1, argument2, argument3, argument4) {
        /// <summary>构造函数</summary>
        /// <param name="argument1" type="String">接受一个形如：xmin,ymin,xmax,ymax的字符串，也可以接受4个float类型的变量来初始化此对象</param>

        if (arguments.length == 1) {
            this.xmin = OpenLayers.Util.toFloat(argument1.split(",")[0]);
            this.ymin = OpenLayers.Util.toFloat(argument1.split(",")[1]);
            this.xmax = OpenLayers.Util.toFloat(argument1.split(",")[2]);
            this.ymax = OpenLayers.Util.toFloat(argument1.split(",")[3]);

        }
        if (arguments.length == 4) {
            this.xmin = argument1;
            this.ymin = argument2;
            this.xmax = argument3;
            this.ymax = argument4;
        }
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Feature.js---------------------------------------------------------*/



Zondy.Object.Feature = OpenLayers.Class({
    /// <summary>表示一个要素类</summary>


    /// <summary>
    ///  属性值
    ///  Array,String in an Array
    /// </summary>
    AttValue: null,

    /// <summary>
    /// 要素id号
    /// Interger
    /// </summary>
    FID: 0,


    /// <summary>
    /// 要素的外包矩形
    /// Zondy.Object.Rectangle
    ///</summary>
    bound: null,

    /// <summary>
    ///  要素的几何图形描述
    ///  Zondy.Object.FeatureGeometry
    /// </summary>
    fGeom: null,


    /// <summary>
    ///  要素几何类型
    ///  Zondy.Enum.FeatureType类型，取值范围：1（Pnt）、2（Lin）、3（Reg）
    /// </summary>
    ftype: 0,


    /// <summary>
    ///  几何图形参数
    ///  Zondy.Object.WebGraphicsInfo
    /// </summary>
    GraphicInfo: null,

    initialize: function (feature) {
        /// <summary>构造函数</summary>
        /// <param name="name" type="Object">一个包含feature数据的对象</param>
        $.extend(this, feature);
    },



    getAttValue: function (attKey) {
        /// <summary>获取当前要素的属性值</summary>
        /// <param name="attKey" type="Interger">属性字段关键字或者属性序号</param>
        /// <returns type="String" />
        if (this.AttValue === null)
            return null;
        var attLength = this.AttValue.length;

        if (typeof (attKey) == 'number') {
            if (attKey >= attLength)
                return null;
            return this.AttValue[attKey];
        }
    },

    getGraphicInfo: function () {
        /// <summary>获取当前要素的几何图形参数</summary>
        /// <returns type="Zondy.Object.WebGraphicsInfo" />
        if (this.GraphicInfo === null) {
            return null;
        }
        else {
            return new Zondy.Object.WebGraphicsInfo(this.GraphicInfo);
        }
    },

    getAttValueArray: function () {
        /// <summary>获取当前要素的所有字段属性值</summary>
        /// <returns type="Array contains String" />
        return this.AttValue;
    },
    getRectBound: function () {
        /// <summary>获取当前要素的外包矩形</summary>
        /// <returns type="Zondy.Object.Rectangle" />
        var bound = this.bound;
        if (bound != null) {
            return new Zondy.Object.Rectangle(bound);
        }
        else
            return bound;
    },

    getGeometry: function () {
        /// <summary>获取当前要素的几何描述</summary>
        /// <returns type="String" />
    },

    getFID: function () {
        /// <summary>获取当前要素的FID</summary>
        /// <returns type="Interger" />
        return this.FID;
    },

    setAttValues: function (values) {
        /// <summary>设置当前要素的所有属性值</summary>
        /// <param name="values" type="Array / Object">属性值数组 /或者属性键值对</param>
        this.AttValue = values;
    },

    setBound: function (bound) {
        /// <summary>设置当前要素的外包矩形</summary>
        /// <param name="bound" type="String:'xmin,ymin,xmax,ymax' | Zondy.Object.Rectangle
        ///  | {OpenLayers.Geometry.Rectangle}">外包矩形描述，可以是字符串，zondy矩形或者openlayers矩形</param>
        var rect = null;
        if (typeof (bound) == "string") {
            rect = new Zondy.Object.Rectangle(bound);
        }
        if (bound instanceof String) {
            rect = new Zondy.Object.Rectangle(bound);
        }
        if (bound instanceof Zondy.Object.Rectangle) {
            rect = bound;
        }
        if (bound instanceof OpenLayers.Geometry.Rectangle) {
            rect = new Zondy.Object.Rectangle();
            rect.setByOL(bound);
        }
        this.bound = rect;
    },

    setFID: function (fid) {
        /// <summary>设置当前要素的FID</summary>
        /// <param name="fid" type="Interger">要素id号</param>
        this.FID = fid;
    },

    setFType: function (type) {
        /// <summary>设置几何图形的类型</summary>
        /// <param name="type" type="Zondy.Enum.FeatureType">几何类型</param>
        this.ftype = type;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------FeatureSet.js---------------------------------------------------------*/

/// <reference path="../../jquery-1.4.4.min.js" />


Zondy.Object.FeatureSet = OpenLayers.Class({
    /// <summary> 
    /// 简单要素类集合，用于相关要素操作
    /// @requires Feature.js
    ///</summary>

    /*********************************************Private*******************************/

    /******************************************** Public********************************
    /**
    * 属性结构
    * {Array}
    * {Zondy.Object.CAttStruct}
    */
    AttStruct: null,

    /**
    * 要素数组
    * {Array}
    * {Zondy.Object.Feature} in Array
    */
    SFEleArray: new Array(),

    /// <summary>{Interger},一次查询的总要素个数，仅在做要素查询时有意义
    ///   ReadOnly
    /// </summary>
    TotalCount: 0,


    initialize: function () {
    },


    clear: function () {
        /// <summary>还原主参数为默认值</summary>
        this.AttStruct = null;
        this.SFEleArray = new Array();
    },

    addFeature: function (features) {
        /// <summary>添加一组或者一个要素</summary>
        /// <param name="name" type="{Array} | {Zondy.Object.Feature} | {Object}（代表Feature的属性键值对）">一组要素，或者一个要素</param>
        if (features instanceof Array) {
            this.SFEleArray.concat(features);
        }
        else {
            this.SFEleArray.push(features);
        }
    },


    getFeaturesLength: function () {
        /// <summary>获取要素集要素的记录条数</summary>
        /// <returns type="Integer" />
        if (this.SFEleArray instanceof Array) {
            return this.SFEleArray.length;
        }
        else {
            return 0;
        }
    },

    getFeatureByIndex: function (i) {
        /// <summary>获取指定要素类</summary>
        /// <returns type="{Zondy.Object.Feature}" />
        if (i >= this.getFeaturesLength()) {
            return null;
        }
        else {
            var feature = this.SFEleArray[i];
            if (feature instanceof Zondy.Object.Feature)
                return feature;
            else {
                return new Zondy.Object.Feature(this.SFEleArray[i]);
            }
        }
    },

    getAttType: function (attKey) {
        /// <summary>获取某属性字段的类型</summary>
        /// <param name="attkey" type="String">属性字段关键字，可以是{String}字段名，可以是序号{Interger}</param>
        /// <returns type="String" />
        var index;
        if (this.AttStruct == null)
            return null;
        if (typeof (attKey) == 'number')
            index = attKey;
        else
            index = this.getAttIndexByAttName(attKey);
        if (index == null)
            return null;
        else
            return this.AttStruct.FldType[index];
    },

    getAttIndexByAttName: function (name) {
        /// <summary>通过属性的名称获取属性的序号</summary>
        /// <param name="name" type="String">属性名</param>
        /// <returns type="Interger" />
        if (this.AttStruct == null)
            return null;
        if (this.AttStruct.FldName == null)
            return null;
        var length = this.AttStruct.FldName.length;
        for (var i = 0; i < length; i++) {
            if (this.AttStruct.FldName[i] == name)
                return i;
        }
        return null;
    },

    getAttNameByIndex: function (index) {
        /// <summary>通过属性的序号获取属性名称</summary>
        /// <param name="index" type="Interger">属性序号</param>
        /// <returns type="String" />
        if (this.AttStruct == null)
            return null;
        if (this.AttStruct.FldName == null)
            return null;
        if (this.AttStruct.FldName.length <= index)
            return null;
        return this.AttStruct.FldName[index];
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------GPoint.js---------------------------------------------------------*/
Zondy.Object.GPoint = OpenLayers.Class(Zondy.Object.FeatureGraphicBase, {

    /// <summary>Zondy.Object.Point2D</summary>
    Dot: null,

    initialize: function (x, y) {
        /// <summary>构造函数</summary>
        /// <param name="x" type="Float">圆心x坐标</param>
        /// <param name="y" type="Float">圆心y坐标</param>
        this.Dot = new Zondy.Object.Point2D(x, y);
    },

    setDot: function (pnt) {
        /// <summary>设置圆心点</summary>
        /// <param name="pnt" type="Zondy.Object.Point2D">圆心</param>
        this.Dot = pnt;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Circle.js---------------------------------------------------------*/


Zondy.Object.Circle = OpenLayers.Class(Zondy.Object.Tangram, {
    /// <summary>表示一个圆</summary>

    /// <summary>
    ///  圆心点
    ///  Zondy.Object.Point2D
    /// </summary>
    point: null,

    /// <summary>
    ///  半径
    ///  Float
    /// </summary>
    radious: null,

    setByOL: function (openlayersCircle) {
        /// <summary>通过传入Openlayers的OpenLayers.Geometry类型来设置参数</summary>
        /// <param name="openlayersCircle" type="由Openlayers定义的圆类型">Description</param>
        var geoObj = openlayersCircle.components;
        var linearRing = new OpenLayers.Geometry.LinearRing(geoObj[0].components);
        //圆心
        var centerPoint = linearRing.getCentroid();
        //圆半径
        var radious = Math.abs(geoObj[0].components[0].x - centerPoint.x);
        this.point = new Zondy.Object.Point2D(centerPoint.x, centerPoint.y);
        this.radious = radious;
    },

    toString: function () {
        /// <summary>返回一个字符串来表示此圆</summary>
        if (this.point == null || this.radious == null)
            return "";
        return this.point.x + ',' + this.point.y + ',' + this.radious;
    },

    getGeometryType: function () {
        /// <summary>获取几何类型名称</summary>
        return "Circle";
    },

    initialize: function (point, radious) {
        /// <summary>构造函数</summary>
        /// <param name="point" type="Zondy.Object.Point2D">圆心点</param>
        /// <param name="radious" type="Float">半径</param>
        this.point = point;
        this.radious = radious;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Polygon.js---------------------------------------------------------*/
Zondy.Object.Polygon = OpenLayers.Class(Zondy.Object.Tangram, {

    /// <summary>Array ,Zondy.Object.Point2D in an Array</summary>
    pointArr: null,

    setByOL: function (openlayersPoly) {
        /// <summary> 通过传入Openlayers的OpenLayers.Geometry类型来设置参数</summary>
        /// <param name="openlayersPoly" type="OpenLayers.Geometry">由Openlayers定义的多边形</param>
        var len = openlayersPoly.components[0].components.length;
        var i;
        for (i = 0; i < len; i++) {
            this.pointArr[i] = new Zondy.Object.Point2D(openlayersPoly.components[0].components[i].x, openlayersPoly.components[0].components[i].y);
        }
    },

    toString: function () {
        /// <summary>返回一个字符串来表示该多边形</summary>
        if (this.pointArr == null || this.pointArr.length == 0)
            return "";
        var i;
        var str = "";
        for (i = 0; i < this.pointArr.length; i++) {
            str += this.pointArr[i].x + ',' + this.pointArr[i].y + ',';
        }
        return str.substring(0, str.length - 1);

    },

    getGeometryType: function () {
        /// <summary>获取几何类型名称</summary>
        return "Polygon";
    },

    initialize: function (pointArr) {
        /// <summary>构造函数</summary>
        /// <param name="pointArr" type="Array,Zondy.Object.Point2D in an Array">一组点类型</param>
        this.pointArr = new Array();
        if (pointArr != undefined) {
            this.pointArr = pointArr;
        }
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------PolyLine.js---------------------------------------------------------*/
Zondy.Object.PolyLine = OpenLayers.Class(Zondy.Object.Tangram, {

    /// <summary>Array ,Zondy.Object.Point2D in an Array</summary>
    pointArr: null,

    setByOL: function (openlayersLine) {
        /// <summary> 通过传入Openlayers的OpenLayers.Geometry类型来设置参数</summary>
        /// <param name="openlayersPoly" type="OpenLayers.Geometry">由Openlayers定义的折线</param>
        var len = openlayersLine.components.length;
        var i;
        for (i = 0; i < len; i++) {
            this.pointArr[i] = new Zondy.Object.Point2D(openlayersLine.components[i].x, openlayersLine.components[i].y);
        }
    },

    toString: function () {
        /// <summary>返回一个字符串来表示该折线</summary>
        if (this.pointArr == null || this.pointArr.length == 0)
            return "";
        var i;
        var str = "";
        for (i = 0; i < this.pointArr.length; i++) {
            str += this.pointArr[i].x + ',' + this.pointArr[i].y + ",";
        }
        return str.substring(0, str.length - 1);
    },

    getGeometryType: function () {
        /// <summary>获取几何类型名称</summary>
        return "Line";
    },


    initialize: function (pointArr) {
        /// <summary>构造函数</summary>
        /// <param name="pointArr" type="Array,Zondy.Object.Point2D in an Array">一组点类型</param>
        this.pointArr = new Array();
        if (pointArr != undefined) {
            this.pointArr = pointArr;
        }
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------PolyLineForQuery.js---------------------------------------------------------*/
Zondy.Object.PolyLineForQuery = OpenLayers.Class(Zondy.Object.PolyLine, {

    initialize: function (pntArray) {
        /// <summary>构造函数</summary>
        /// <param name="pntArray" type="Array">一组 Zondy.Object.Point2D类型的对象</param>
        Zondy.Object.PolyLine.prototype.initialize.apply(this, arguments);
    },

    /// <summary>设置点的搜索半径</summary>
    nearDis: 0.0,

    toString: function () {
        var str = Zondy.Object.PolyLine.prototype.toString.apply(this);
        return str + ";" + this.nearDis;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------AnalysisBase.js---------------------------------------------------------*/

Zondy.Service.AnalysisBase = OpenLayers.Class(Zondy.Service.HttpRequest, {

    /// <summary>分析服务基类</summary>

    /// <summary>工作流ID号,Interger</summary>
    flowID: null,

    initialize: function () {
    },

    execute: function (onSuccess, way, isAsy, f) {
        /// <summary>执行分析语句</summary>
        /// <param name="onSuccess" type="{Function}">必要参数，执行成功后的回调函数</param>
        /// <param name="way" type="{String}">
        ///     'POST' or 'GET'，默认为'Get',当所需要发送的数据量比较大时，请选择'Post',否则可能会执行失败
        ///</param>
        /// <param name="isAsy" type="{Boolean}">是否异步执行，默认为false</param>
        /// <param name="f" type="{String}">'json' or 'xml' 指明执行返回结果的格式</param>
        var data = {};
        if (way === undefined)
            way = "get";

        if (f == undefined)
        //  如果f 未定义，或者f为非法字符串时，默认为json
            f = "json";
        else {
            if (f.toLowerCase() != 'xml')
                f = 'json';
        }
        if (isAsy == undefined) {
            isAsy = false;
        }

        if (this.partUrl == null)
            this.partUrl = "execute/" + this.flowID;
        if (this.baseUrl == null)
            this.baseUrl = "igs/rest/mrfws";

        if (way.toLowerCase() == "get") {
            data.f = f;
            data.isAsy = isAsy;
            var jsonStr = $.toJSON(this, ['port', 'ip', 'baseUrl', 'partUrl'], ';', false);
            data.paraValues = jsonStr.substring(1, jsonStr.length - 1);
        }

        if (way.toLowerCase() == "post") {
            this.partUrl += "?isAsy=" + isAsy.toString() + "&f=" + f;
            var jsonStr = $.toJSON(this, ['port', 'ip', 'baseUrl', 'partUrl'], ',');
            var obj = $.parseJSON(jsonStr);
            var keyValue = {};
            var keyValueArray = new Array();
            for (o in obj) {
                keyValue.Key = o;
                keyValue.Key = obj[o].toString();
                keyValueArray.push(keyValue);
            }
            data = $.toJSON(keyValueArray);
        }



        this.ajax(null, data, onSuccess, way, null, f);
    }
})
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ClassBufferBase.js---------------------------------------------------------*/


Zondy.Service.ClassBufferBase = OpenLayers.Class(Zondy.Service.AnalysisBase, {
    /// <summary>类缓冲分析基类</summary>

    srcInfo: null,
    desInfo: null,
    idstr: "1,2,3,4,5",
    angleType: 0,
    isDissolve: true,
    isDynPrj: false,


    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        $.extend(this, parameters, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ClassBufferByMultiplyRing.js---------------------------------------------------------*/


Zondy.Service.ClassBufferByMultiplyRing = OpenLayers.Class(Zondy.Service.ClassBufferBase, {

    /// <summary>类裁剪分析（多圈）</summary>

    radiusStr: "2,4,8,10",

    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600232";
        Zondy.Service.ClassBufferBase.prototype.initialize.apply(this, arguments);
    }
});







/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ClassBufferBySingleRing.js---------------------------------------------------------*/


Zondy.Service.ClassBufferBySingleRing = OpenLayers.Class(Zondy.Service.ClassBufferBase, {

    /// <summary>类裁剪分析（单圈）</summary>

    leftRad: 5,
    rightRad: 5,
    isByAtt: false,
    fldName: null,
    dynPrjRad: 0,

    initialize: function (parameters, property) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600231";
        Zondy.Service.ClassBufferBase.prototype.initialize.apply(this, arguments);
    }
});







/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ClipBase.js---------------------------------------------------------*/


Zondy.Service.ClipBase = OpenLayers.Class(Zondy.Service.AnalysisBase, {
    /// <summary>裁剪分析基类分析类</summary>

    desInfo: null,
    attOptType: 1,
    infoOptType: 1,
    overType: 3,
    tolerance: 0.0001,
    isCleanNode: false,
    isLabelPnt: false,
    isValidReg: false,


    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        $.extend(this, parameters, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ClipByCircle.js---------------------------------------------------------*/


Zondy.Service.ClipByCircle = OpenLayers.Class(Zondy.Service.ClipBase, {

    /// <summary>圆裁剪类</summary>
    //圆点坐标，string：x,y
    srcInfo: null,
    center: null,
    //半径长度float
    radius: null,
    step: 0.001,

    initialize: function (parameters, property) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600229";
        Zondy.Service.ClipBase.prototype.initialize.apply(this, arguments);
    }
});







/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ClipByLayer.js---------------------------------------------------------*/


Zondy.Service.ClipByLayer = OpenLayers.Class(Zondy.Service.ClipBase, {

    /// <summary>图层裁剪类</summary>
    srcInfo1: null,
    srcInfo2: null,

    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600230";
        Zondy.Service.ClipBase.prototype.initialize.apply(this, arguments);
    }
});







/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ClipByPolygon.js---------------------------------------------------------*/


Zondy.Service.ClipByPolygon = OpenLayers.Class(Zondy.Service.ClipBase, {
    /// <summary>多边形裁剪类</summary>

    // strPos为STRING格式，内容是多边形几个点坐标：x1,y1,x2,y2....
    srcInfo: null,
    strPos: null,


    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600228";
        Zondy.Service.ClipBase.prototype.initialize.apply(this, arguments);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------FeatureBuffBase.js---------------------------------------------------------*/


Zondy.Service.FeatureBuffBase = OpenLayers.Class(Zondy.Service.AnalysisBase, {
    /// <summary>要素缓冲分析基类</summary>

    sfGeometryXML: null, //注意:需要修改为将FeatureGeometry[]数组序列化为字符串
    attStrctXML: null, //注意:需要修改为CAttStruct数组序列化为字符串
    attRowsXML: null, //注意:需要修改为将CAttDataRow[]数组序列化为字符串
    traceRadius: 0.0001,
    resultName: null,
    inFormat: "json",

    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        $.extend(this, parameters, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------FeatureBuffByMultiplyRing.js---------------------------------------------------------*/


Zondy.Service.FeatureBuffByMultiplyRing = OpenLayers.Class(Zondy.Service.FeatureBuffBase, {
    /// <summary>要素缓冲区分析（多圈）</summary>

    radiusStr: "0.003,0.002,0.001",


    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600239";
        Zondy.Service.FeatureBuffBase.prototype.initialize.apply(this, arguments);
    }
});







/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------FeatureBuffBySingleRing.js---------------------------------------------------------*/


Zondy.Service.FeatureBuffBySingleRing = OpenLayers.Class(Zondy.Service.FeatureBuffBase, {
    /// <summary>要素缓冲区分析（单圈）</summary>


    leftRad: 0.001,
    rightRad: 0.001,

    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600238";

        Zondy.Service.FeatureBuffBase.prototype.initialize.apply(this, arguments);
    }
});







/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------GeometryAnalysisBase.js---------------------------------------------------------*/




Zondy.Service.GeometryAnalysisBase = OpenLayers.Class(Zondy.Service.HttpRequest, {
    /// <summary>几何分析基类</summary>

    resultFormat: "json",
    initialize: function () {
        /// <summary>构造函数</summary>
        if (this.baseUrl == null) {
            this.baseUrl = "igs/rest/mrgs/geomservice";
        }
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CalServiceBase.js---------------------------------------------------------*/


Zondy.Service.CalServiceBase = OpenLayers.Class(Zondy.Service.GeometryAnalysisBase, {
    /// <summary>测量服务基类</summary>

    /// <summary>{Array},一组{Zondy.Object.Point2D}类型</summary>
    dots: null,

    /// <summary>{Zondy.Service.CProjectParam}类型</summary>
    projectInfo: null,

    /// <summary>{Zondy.Service.CProjectBySRSID}</summary>
    projectInfoBySRSID: null,

    initialize: function (obj, options) {
        /// <summary>构造函数</summary>
        /// <param name="obj" type="Array,Zondy.Object.Point2D in an Array">需要计算的点数组,数组类型为Zondy.Object.Point2D</param>

        this.dots = obj;
        $.extend(this, options);
        Zondy.Service.GeometryAnalysisBase.prototype.initialize.apply(this);
    },

    execute: function (projParam, onSuccess) {
        /// <summary>通过传入投影参数或者通过传入SRSID参数进行计算</summary>
        /// <param name="projParam" type="Zondy.Service.CProjectParam | Zondy.Service.CProjectBySRSID（建议普通用户采用此类直接获取MapGIS GDB 已经提供的空间参考系）">投影参数</param>
        /// <param name="onSuccess" type="Function">执行成功后的回调函数</param>
        if (projParam instanceof Zondy.Service.CProjectParam) {
            this.projectInfo = projParam;
        }
        if (projParam instanceof Zondy.Service.CProjectBySRSID) {
            this.projectInfoBySrsID = projParam;
        }
        var postObj = {};
        postObj.Dots = this.dots;
        postObj.ProjectInfo = this.projectInfo;
        postObj.ProjectInfoBySrsID = this.projectInfoBySrsID;
        var postString = $.toJSON(postObj);
        this.ajax(null, postObj, onSuccess, "POST");
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CProjectBySRSID.js---------------------------------------------------------*/




Zondy.Service.CProjectBySRSID = OpenLayers.Class({
    /// <summary>用于进行SRSID投影的参数类/summary>

    DesSrsID: null,
    GdbInfo: null,

    initialize: function (desSrsID, gdbInfo) {
        /// <summary>构造函数</summary>
        /// <param name="desSrsID" type="{Interger}">目标SRSID号</param>
        /// <param name="gdbInfo" type="{Zondy.Object.CGDBInfo}">关于SRSID的GDB信息</param>
        this.DesSrsID = desSrsID;
        this.GdbInfo = gdbInfo;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CProjectParam.js---------------------------------------------------------*/


Zondy.Service.CProjectParam = OpenLayers.Class({
    /// <summary>投影转换空间参数类</summary>

    /// <summary>{Interger},角度单位</summary>
    ProjAngleUnit: 0,

    /// <summary>{Double},投影原点纬度</summary>
    ProjLat: 0.00,

    /// <summary>{Double},第一标准维度</summary>
    ProjLat1: 0.00,

    /// <summary>{Double},第二标准维度</summary>
    ProjLat2: 0.00,

    /// <summary>{Double}，中央子午线经度</summary>
    ProjLon: 0.00,

    /// <summary>{Double}，水平比例尺</summary>
    ProjRate: 0.00,

    /// <summary>{Interger}，坐标系类型</summary>
    ProjType: 0,

    /// <summary>{Interger}，投影类型</summary>
    ProjTypeID: 0,

    /// <summary>{Interger}，长度单位</summary>
    ProjUnit: 0,

    /// <summary>{Short}，投影带号</summary>
    ProjZoneNO: 0,

    /// <summary>{Short}，投影分带类型</summary>
    ProjZoneType: 0,

    /// <summary>{Interger}，椭球体参数</summary>
    SphereID: 0,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CProjectDots.js---------------------------------------------------------*/


Zondy.Service.CProjectDots = OpenLayers.Class({
    /// <summary>作为MRGS的投影服务Post参数</summary>

    /// <summary>目标投影参数，Zondy.Service.CProjectParam 类型</summary>
    DesProjParm: null,

    /// <summary>源投影参数，Zondy.Service.CProjectParam 类型</summary>
    SrcProjParam: null,

    /// <summary>需要转换的点坐标,Zondy.Object.Point2D in an Array</summary>
    InputDots: null,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性键值对</param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CalPolyLineLength.js---------------------------------------------------------*/


Zondy.Service.CalPolyLineLength = OpenLayers.Class(Zondy.Service.CalServiceBase, {
    /// <summary>折线长度计算服务</summary>


    initialize: function (obj, options) {
        /// <summary>构造函数</summary>
        /// <param name="obj" type="Array">需要计算的点数组,数组类型为Zondy.Object.Point2D</param>
        /// <param name="options" type="Object">为其他属性赋值的键值对</param>
        this.partUrl = "calLength?f=" + this.resultFormat;
        Zondy.Service.CalServiceBase.prototype.initialize.apply(this, arguments);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CalArea.js---------------------------------------------------------*/



Zondy.Service.CalArea = OpenLayers.Class(Zondy.Service.CalServiceBase, {
    /// <summary>计算面积服务</summary>

    initialize: function (obj, options) {
        /// <summary>构造函数</summary>
        /// <param name="obj" type="Array,Zondy.Object.Point2D in an Array">需要计算的点数组,数组类型为Zondy.Object.Point2D</param>
        /// <param name="options" type="Object">为属性赋值的键值对</param>
        this.partUrl = "calArea?f=" + this.resultFormat;
        Zondy.Service.CalServiceBase.prototype.initialize.apply(this, arguments);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ProjectDots.js---------------------------------------------------------*/


Zondy.Service.ProjectDots = OpenLayers.Class(Zondy.Service.GeometryAnalysisBase, {
    /// <summary>通过MRGS服务进行投影转换</summary>

    initialize: function () {
        /// <summary>构造函数</summary>
        Zondy.Service.GeometryAnalysisBase.prototype.initialize.apply(this);
    },

    execute: function (projectParam, onSuccess) {
        /// <summary>执行拓扑分析</summary>
        /// <param name="projectParam" type="Zondy.Service.CProjectDots">投影参数</param>
        /// <param name="onSuccess" type="Function">执行成功后的回调函数</param>

        this.partUrl = "projectdots?f=" + this.resultFormat;
        var postString = $.toJSON(projectParam);
        this.ajax(null, postString, onSuccess, "POST");
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------TopAnalysis.js---------------------------------------------------------*/


Zondy.Service.TopAnalysis = OpenLayers.Class(Zondy.Service.GeometryAnalysisBase, {
    /// <summary>拓扑分析类,您只应该对pnt,line,reg3个属性中的一个赋值</summary>

    pnt: null,
    line: null,
    reg: null,

    /// <summary>分析半径</summary>
    nearDis: 0.01,

    /// <summary>相对对象</summary>
    relativeObj: null,
    p_onSuccess: null,

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性赋值键值对</param>
        $.extend(this, options);
        Zondy.Service.GeometryAnalysisBase.prototype.initialize.apply(this);
    },

    setPnt: function (pnt) {
        /// <summary>设置点类型</summary>
        /// <param name="pnt" type="Zondy.Object.GPoint">需要设置的点类型</param>
        this.pnt = pnt;
    },

    setLine: function (line) {
        /// <summary>设置线类型</summary>
        /// <param name="line" type="Zondy.Object.GLine">需要设置的线类型</param>
        this.line = line;
    },

    setReg: function (reg) {
        /// <summary>设置区类型</summary>
        /// <param name="reg" type="Zondy.Object.GRegion">需要设置的区类型</param>
        this.reg = reg;
    },

    setRelativeObj: function (obj) {
        /// <summary>设置拓扑分析的相对参照物</summary>
        /// <param name="obj" type="Zondy.Object.GRegion">相对参照物</param>
        this.relativeObj = obj;
    },

    execute: function (onSuccess) {
        /// <summary>执行拓扑分析</summary>
        /// <param name="onSuccess" type="Function">执行成功后的回调函数</param>
        this.p_onSuccess = onSuccess;
        var postObj = {};
        postObj.NearDis = this.nearDis;
        postObj.Pnt = this.pnt;
        postObj.Line = this.line;
        postObj.Reg = this.reg;
        postObj.RelativeObj = this.relativeObj;
        this.partUrl = "topanalysis?f=" + this.resultFormat;
        var postString = $.toJSON(postObj);
        this.ajax(null, postString, this.onGetRltSuccess, "POST");
    },

    onGetRltSuccess: function (enumNum) {
        var rlt = Zondy.Util.getTopAnalysisResult(enumNum);
        this.p_onSuccess(rlt);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------NetAnalysis.js---------------------------------------------------------*/


Zondy.Service.NetAnalysis = OpenLayers.Class(Zondy.Service.AnalysisBase, {
    /// <summary>路径分析类</summary>

    netClsUrl: null,
    flagPosStr: null,
    analyTp: 'UserMode',
    weight: ',Weight1,Weight1',
    outFormat: 'JSON',
    elementType: 2,
    nearDis: 0.001,
    barrierPosStr: null,


    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600233";
        $.extend(this, parameters, options);

    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------OverlayBase.js---------------------------------------------------------*/


Zondy.Service.OverlayBase = OpenLayers.Class(Zondy.Service.AnalysisBase, {
    /// <summary>叠加分析类</summary>

    srcInfo1: null,
    desInfo: null,
    attOptType: 1,
    infoOptType: 1,
    overType: 1,
    isCleanNode: false,
    isLabelPnt: false,
    isValidReg: false,
    isReCalculate: true,
    radius: 0.001,

    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        $.extend(this, parameters, options);

    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------OverlayByLayer.js---------------------------------------------------------*/


Zondy.Service.OverlayByLayer = OpenLayers.Class(Zondy.Service.OverlayBase, {
    /// <summary>叠加分析类</summary>

    srcInfo2: null,

    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600227";
        Zondy.Service.OverlayBase.prototype.initialize.apply(this, arguments);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------OverlayByPolygon.js---------------------------------------------------------*/

Zondy.Service.OverlayByPolygon = OpenLayers.Class(Zondy.Service.OverlayBase, {
    /// <summary>叠加分析类</summary>

    /// <summary>Zondy.Object.GRegion的json或者xml序列化形式</summary>
    strGRegionXML: null,
    inFormat: "json",

    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600237";
        Zondy.Service.OverlayBase.prototype.initialize.apply(this, arguments);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ProjectBase.js---------------------------------------------------------*/


Zondy.Service.ProjectBase = OpenLayers.Class(Zondy.Service.AnalysisBase, {
    /// <summary>投影基类</summary>

    clsName: null,
    desClsName: null,


    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        $.extend(this, parameters, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ProjectByLayer.js---------------------------------------------------------*/


Zondy.Service.ProjectByLayer = OpenLayers.Class(Zondy.Service.ProjectBase, {
    /// <summary>根据投影参数投影类，生成目的类</summary>


    projTypeID: 5,
    sphereType: 2,
    projAngleUnit: 4,
    projType: 3,
    projZoneType: 1,
    projZoneNO: 20,
    projLon: 1170000,
    projLat: 0,
    projLat1: 0,
    projLat2: 0,
    projUnit: 2,
    projRate: 1,
    x: 0,
    y: 0,



    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600235";
        Zondy.Service.ProjectBase.prototype.initialize.apply(this, arguments);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------ProjectBySRID.js---------------------------------------------------------*/


Zondy.Service.ProjectBySRID = OpenLayers.Class(Zondy.Service.ProjectBase, {
    /// <summary>根据参照系ID投影类，生成目的类</summary>
    srID: 32,

    initialize: function (parameters, options) {
        /// <summary>构造函数</summary>
        /// <param name="parameters" type="Object">分析相关必要参数</param>
        /// <param name="options" type="Object">其他参数键值对</param>
        this.flowID = "600234";
        Zondy.Service.ProjectBase.prototype.initialize.apply(this, arguments);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CatalogServiceBase.js---------------------------------------------------------*/

Zondy.Service.Catalog.CatalogServiceBase = OpenLayers.Class(Zondy.Service.HttpRequest, {

    resultFormat: "json",

    initialize: function () {
        /// <summary>构造函数</summary>
        if (this.baseUrl == null) {
            this.baseUrl = "igs/rest/mrcs";
        }
    }
});

/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------IncludeStruct.js---------------------------------------------------------*/
Zondy.Service.Catalog.IncludeStruct = OpenLayers.Class({

    includeDetails: true,
    includeSubs: true,

    initialize: function (details, subs) {
        /// <summary>构造函数</summary>
        /// <param name="details" type="Boolean">是否包含细节内容</param>
        /// <param name="subs" type="Boolean">是否包含子项</param>
        if (details instanceof Boolean)
            this.includeDetails = details;
        if (subs instanceof Boolean)
            this.includeSubs = subs;
    },

    toJSON: function () {
        /// <summary>返回次类的JSON字符串</summary>
        return $.toJSON(this);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------MapDoc.js---------------------------------------------------------*/


Zondy.Service.Catalog.MapDoc = OpenLayers.Class(Zondy.Service.Catalog.CatalogServiceBase, {

    docName: null,
    mapIndex: 0,
    layerID: 0,

    setDocName: function (docName) {
        /// <summary>设置文档名称</summary>
        /// <param name="docName" type="String">文档名称</param>
        this.docName = docName;
    },

    setMapIndex: function (index) {
        /// <summary>设置地图序号</summary>
        /// <param name="index" type="Interger">地图在文档下得序号</param>
        this.mapIndex = index;
    },

    setLayerID: function (index) {
        /// <summary>设置图层序号</summary>
        /// <param name="index" type="Interger">图层在地图下得序号</param>
        this.layerID = index;
    },

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性赋值对象</param>
        $.extend(this, options);
        Zondy.Service.Catalog.CatalogServiceBase.prototype.initialize.apply(this);
    },

    getMapDocList: function (onSuccess) {
        /// <summary>获取服务器地图文档列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "docs?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },

    getMapDocInfo: function (onSuccess, details, sub) {
        /// <summary>获取指定地图文档的相关信息</summary>
        /// <param name="details" type="Boolean">返回结果是否包含细节内容</param>
        /// <param name="sub" type="Boolean">返回结果是否包含子项</param>
        this.partUrl = "docs/" + this.docName + "?f=" + this.resultFormat;
        var includeObj = new Zondy.Service.Catalog.IncludeStruct(details, sub);
        this.partUrl += "&include=" + includeObj.toJSON();
        this.ajax(null, null, onSuccess);
    },

    getMapInfo: function (onSuccess, details, sub) {
        /// <summary>获取指定地图的相关信息</summary>
        /// <param name="details" type="Boolean">返回结果是否包含细节内容</param>
        /// <param name="sub" type="Boolean">返回结果是否包含子项</param>
        this.partUrl = "docs/" + this.docName + "/" + this.mapIndex + "?f=" + this.resultFormat;
        var includeObj = new Zondy.Service.Catalog.IncludeStruct(details, sub);
        this.partUrl += "&include=" + includeObj.toJSON();
        this.ajax(null, null, onSuccess);
    },

    getLayersInfo: function (onSuccess) {
        /// <summary>获取某地图下所有图层的图层信息</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "docs/" + this.docName + "/" + this.mapIndex + "/layers?f=" + this.resultFormat;

        this.ajax(null, null, onSuccess);
    },

    getLayerInfo: function (onSuccess) {
        /// <summary>获取指定地图图层的相关信息</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "docs/" + this.docName + "/" + this.mapIndex + "/" + this.layerID + "?f=" + this.resultFormat;

        this.ajax(null, null, onSuccess);
    },

    deleteLayer: function (onSuccess) {
        /// <summary>删除地图图层（GET）</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "docs/" + this.docName + "/" + this.mapIndex + "/layers/delete?f=" + this.resultFormat + "&layerIDs=" + this.layerID;

        this.ajax(null, null, onSuccess);
    },

    addLayer: function (addLayerInfos, onSuccess) {
        /// <summary>添加地图图层（POST）</summary>
        /// <param name="addLayerInfo" type="Array,Zondy.Service.Catalog.CAddMapLayerInfo in an Array">需要添加的图层</param>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "docs/" + this.docName + "/" + this.mapIndex + "/layers/add?f=" + this.resultFormat;

        this.ajax(null, addLayerInfos, onSuccess, "POST");
    },

    createDoc: function (addDocInfo, onSuccess) {
        /// <summary>创建文档（POST）</summary>
        /// <param name="addDocInfo" type="Zondy.Service.Catalog.CAddDocInfo">需要创建的文档信息</param>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "docs/" + "/create?f=" + this.resultFormat;
        this.ajax(null, addDocInfo, onSuccess, "POST");
    },

    changeIndex: function (newIndexArray, onSuccess) {
        /// <summary>更改图层顺序（POST）</summary>
        /// <param name="newIndexArray" type="Array,Interger in an Array">新图层的序号顺序数组</param>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "docs/" + this.docName + "/" + this.mapIndex + "/layers/index?f=" + this.resultFormat;
        this.ajax(null, newIndexArray, onSuccess, "POST");
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Layer.js---------------------------------------------------------*/
Zondy.Map.Layer = OpenLayers.Class(OpenLayers.Layer.Grid, Zondy.Service.HttpRequest, {

    // An Array of String,一组需要叠加显示的图层gdbp
    gdbps: null,
    f: 'png',
    style: null,
    //    {
    //    SymbleShow:true
    //    },
    filters: null,
    singleTile: true,

    //如果客户端不传入Guid则，服务器会为每一个Html页内的所有图层创建一个Guid；那么
    //如果在一个Html页内有多个Layer图层，则需要为每个图层附带一个GUid，否则服务器将
    //给这个页面的所有Layer附加同一个Guid，这会导致服务器出图时一些不可预料的情况
    turnOnGuid:false,
    guid: null,
    initialize: function (name, gdbps, options) {
        this.gdbps = gdbps;
        if (this.baseUrl == null)
            this.baseUrl = "igs/rest/mrms";
        if (this.partUrl == null)
            this.partUrl = "layers";
        OpenLayers.Util.extend(this, options);
        var url = "http://" + this.ip + ":" + this.port + "/" + this.baseUrl + "/" + this.partUrl;

        var newArguments = [];
        var params = {};
        newArguments.push(name, url, params, {});
        OpenLayers.Layer.Grid.prototype.initialize.apply(this, newArguments);

        if (this.turnOnGuid) {
            //如果开启Guid则会为一个Layer创建一个Guid
            this.guid = Zondy.Util.newGuid();
        }
    },

    getURL: function (bounds) {
        bounds = this.adjustBounds(bounds);
        var params = {};
        var imgSize = this.getImageSize();
        params.bbox = this.encodeBBOX ?
            bounds.toBBOX(null) :
            bounds.toArray();
        params.w = imgSize.w;
        params.h = imgSize.h;
        //params.style = this.style;

        //为图层的还原显示 周立博加，从这里开始
        this.style = new Array();
        var styleObj = new Zondy.Object.CDisplayStyle();
        styleObj.SymbleShow = true;
        styleObj.ShowStyle = new Array();
        var obj1 = new Zondy.Object.DynShowStyle();
        styleObj.ShowStyle.push(obj1);
        this.style.push(styleObj);
        params.style = $.toJSON(this.style);
        //到这里结束

        params.filters = this.filters;
        if (this.turnOnGuid) {
            params.guid = this.guid;
        }

        var gdbpStr = '';
        $.each(this.gdbps, function (i, value) {
            gdbpStr += (',' + value);
        });
        params.gdbps = gdbpStr.substring(1, gdbpStr.length);
        return this.getFullRequestString(params);
    }
});

/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------EditServiceBase.js---------------------------------------------------------*/


Zondy.Service.EditServiceBase = OpenLayers.Class(Zondy.Service.HttpRequest, {

    /// <summary>用于添加要素的服务基类</summary>

    resultFormat: "json",

    initialize: function () {
        this.baseUrl = "igs/rest/mrfs";
    },

    getFullUrl: function () {
        /// <summary>获取完整服务的URL</summary>

        var s = "http://" + this.ip + ":" + this.port + "/" + this.baseUrl + "/" + this.partUrl;
        return s;
    },

    getBaseUrl: function () {
        var s = "http://" + this.ip + ":" + this.port + "/" + this.baseUrl + "/";
        return s;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------EditDocFeature.js---------------------------------------------------------*/
Zondy.Service.EditDocFeature = OpenLayers.Class(Zondy.Service.EditServiceBase, Zondy.Service.DocLayer, {

    /// <summary>添加要素到文档服务</summary>

    initialize: function (docName, layerIndex, options) {
        /// <summary>构造函数</summary>
        /// <param name="docName" type="String">文档名称</param>
        /// <param name="layerIndex" type="Interger">图层序号</param>
        /// <param name="options" type="Object">属性赋值对象</param>
        $.extend(this, options);
        this.docName = docName;
        this.layerIndex = layerIndex;
        this.partUrl = "docs/" + this.docName + "/" + this.mapIndex.toString() + "/" + this.layerIndex.toString();
        Zondy.Service.EditServiceBase.prototype.initialize.apply(this);
    },

    add: function (features, onSuccess) {
        /// <summary>添加一组要素</summary>
        /// <param name="features" type="{Zondy.Object.FeatureSet}">添加一组要素</param>
        /// <param name="onSuccess" type="{Function}">添加成功后的回调函数</param>
        this.partUrl += "/addFeatures";
        var url = this.getFullUrl() + "?f=" + this.resultFormat;
        this.ajax(url, features, onSuccess, "POST");
    },

    update: function (features, onSuccess) {
        /// <summary>更新一组要素</summary>
        /// <param name="features"  type="{Zondy.Object.FeatureSet}">更新一组要素</param>
        /// <param name="onSuccess" type="{Function}">更新成功后的回调函数</param>

        this.partUrl += "/updateFeatures";
        var url = this.getFullUrl() + "?f=" + this.resultFormat;
        this.ajax(url, features, onSuccess, "POST");
    },

    deletes: function (featureIds, onSuccess) {
        /// <summary>删除一组要素</summary>
        /// <param name="featureIds"  type="{String}">删除一组要素，多个要素间用','分割</param>
        /// <param name="onSuccess" type="{Function}">删除成功后的回调函数</param>

        this.partUrl += "/deleteFeatures";
        var url = this.getFullUrl() + "?f=" + this.resultFormat + "&objectIds=" + featureIds;
        this.ajax(url, null, onSuccess, "POST");
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------EditLayerFeature.js---------------------------------------------------------*/
Zondy.Service.EditLayerFeature = OpenLayers.Class(Zondy.Service.EditServiceBase, {

    /// <summary>添加要素到图层</summary>
    gdbp: null,

    initialize: function (gdbp, options) {
        /// <summary>构造函数</summary>
        /// <param name="docName" type="String">文档名称</param>
        /// <param name="layerIndex" type="Interger">图层序号</param>
        /// <param name="options" type="Object">属性赋值对象</param>
        $.extend(this, options);
        this.gdbp = gdbp;
        this.partUrl = "layer";
        Zondy.Service.EditServiceBase.prototype.initialize.apply(this);
    },

    add: function (features, onSuccess) {
        /// <summary>添加一组要素</summary>
        /// <param name="features" type="{Zondy.Object.FeatureSet}">添加一组要素</param>
        /// <param name="onSuccess" type="{Function}">添加成功后的回调函数</param>
        this.partUrl += "/addFeatures";
        var url = this.getFullUrl() + "?f=" + this.resultFormat + "&gdbp=" + this.gdbp;
        this.ajax(url, features, onSuccess, "POST");
    },

    update: function (features, onSuccess) {
        /// <summary>更新一组要素</summary>
        /// <param name="features"  type="{Zondy.Object.FeatureSet}">更新一组要素</param>
        /// <param name="onSuccess" type="{Function}">更新成功后的回调函数</param>

        this.partUrl += "/updateFeatures";
        var url = this.getFullUrl() + "?f=" + this.resultFormat + "&gdbp=" + this.gdbp;
        this.ajax(url, features, onSuccess, "POST");
    },

    deletes: function (featureIds, onSuccess) {
        /// <summary>删除一组要素</summary>
        /// <param name="featureIds"  type="{String}">删除一组要素，多个要素间用','分割</param>
        /// <param name="onSuccess" type="{Function}">删除成功后的回调函数</param>

        this.partUrl += "/deleteFeatures";
        var url = this.getFullUrl() + "?f=" + this.resultFormat + "&objectIds=" + featureIds + "&gdbp=" + this.gdbp;
        this.ajax(url, null, onSuccess, "POST");
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------VectorLayer.js---------------------------------------------------------*/

Zondy.Service.Catalog.VectorLayer = OpenLayers.Class(Zondy.Service.Catalog.CatalogServiceBase, {

    serverName: "MapGISLocal",
    gdbName: null,
    dsName: null,

    setServerName: function (serverName) {
        /// <summary>设置GDBServer的名称，默认为MapGISLocal</summary>
        /// <param name="serverName" type="String">GDBServer 名称</param>
        this.serverName = serverName;

    },

    setGdbName: function (gdbName) {
        /// <summary>设置GDB名称</summary>
        /// <param name="gdbName" type="String">GDB名称</param>
        this.gdbName = gdbName;
    },

    setDsName: function (dsName) {
        /// <summary>设置要素集名称</summary>
        /// <param name="dsName" type="String">要素集名称</param>
        this.dsName = dsName;
    },

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性赋值对象</param>
        OpenLayers.Util.extend(this, options);
        Zondy.Service.Catalog.CatalogServiceBase.prototype.initialize.apply(this);
    },

    createLayer: function (options, onSuccess) {
        /// <summary>options 创建图层的参数</summary>
        /// featureType,layerName,geoType,srefName,cattStruct
        var featureType = options.featureType ? options.featureType : "SFeatureCls";
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + featureType +
                "/" + options.layerName + "/create?geoType=" + options.geoType + "&srefName=" + options.srefName +
                "&dsName=" + this.dsName + "&f=" + this.resultFormat;
        this.ajax(null, options.cattStruct, onSuccess, 'post');
    },

    getServerList: function (onSuccess) {
        /// <summary>获取数据源列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getServerGDBList: function (onSuccess) {
        /// <summary>获取数据源GDB列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },

    getSfclsList: function (onSuccess) {
        /// <summary>获取GDB下所有简单要素类列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/sfcls?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },

    getFclsList: function (onSuccess) {
        /// <summary>获取GDB下所有要素类列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/fcls?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getAclsList: function (onSuccess) {
        /// <summary>获取GDB下所有注记类列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/acls?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getNclsList: function (onSuccess) {
        /// <summary>获取GDB下所有网络类列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/ncls?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getDsSfclsList: function (onSuccess) {
        /// <summary>获取GDB下指定要素集内所有简单要素类列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + this.dsName + "/sfcls?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getDsAclsList: function (onSuccess) {
        /// <summary>获取GDB下指定要素集内所有注记类列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + this.dsName + "/acls?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getDsOclsList: function (onSuccess) {

        /// <summary>获取GDB下指定要素集内所有对象类列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + this.dsName + "/ocls?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getDsNclsList: function (onSuccess) {
        /// <summary>获取GDB下指定要素集内所有网络类列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + this.dsName + "/ncls?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getDsRdsList: function (onSuccess) {
        /// <summary>获取GDB下指定栅格数据集内所有栅格数据集列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + this.dsName + "/rds?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getDsRcsList: function (onSuccess) {
        /// <summary>获取GDB下指定要素集内所有栅格目录列表</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + this.dsName + "/rcs?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getLayerList: function (onSuccess, clsType) {
        /// <summary>通过传入的参数选择获取GDB下面的哪一类</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        /// <param name="clsType" type="String">值为"sfcls","fcls","acls","ncls"，分别为GDB下简单要素类，要素类，注记类或网络类</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + clsType + "?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    },
    getLayerListInDS: function (onSuccess, clsType) {
        /// <summary>通过传入的参数选择获取GDB下面指定要素集下的哪一类</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        /// <param name="clsType" type="String">值为"sfcls","fcls","acls","ncls"，"ocls","rdc","rcs"
        ///分别为要素集下简单要素类，要素类，注记类,网络类,对象类，栅格数据集，栅格目录</param>
        this.partUrl = "datasource/" + this.serverName + "/" + this.gdbName + "/" + this.dsName + "/" + clsType + "?f=" + this.resultFormat;
        this.ajax(null, null, onSuccess);
    }

});


/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------QueryServiceBase.js---------------------------------------------------------*/


Zondy.Service.QueryServiceBase = OpenLayers.Class(Zondy.Service.HttpRequest, {

    /************************************private**************************************/
    resultCallBack: null,


    /**
    * 处理查询结果，并调用用户回调将结果返回给用户
    * Private, 本方法私有
    */
    processResult: function (jsonObj) {
        var rltObj = new Zondy.Object.FeatureSet();
        $.extend(rltObj, jsonObj);
        this.resultCallBack(rltObj);
    },


    /***********************************public*********************************************/

    /**
    *  用于查询的参数类
    *  {Zondy.Service.QueryParameter}
    */
    queryParam: null,

    initialize: function () {
        /// <summary>构造函数</summary>
        this.baseUrl = "igs/rest/mrfs/";
    },

    query: function (onSuccess) {
        /// <summary>查询函数，向服务器发送请求</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        if (this.queryParam == null) {
            return;
        }
        var fullRestUrl = "";

        if (this.queryParam instanceof Zondy.Service.QueryParameter) {
            // 如果是属于几何查询类
            fullRestUrl = "http://" + this.ip + ":" + this.port + "/" + this.baseUrl
             + this.partUrl;
        }
        else {
            return;
        }
        var dataObject = this.queryParam.getParameterObject();
        this.restQuery(fullRestUrl, dataObject, onSuccess);
    },

    restQuery: function (restUrl, dataObject, onSuccess) {
        this.resultCallBack = onSuccess;
        this.ajax(restUrl, dataObject, this.processResult, "GET", null, dataObject.f);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------QueryFeatureStruct.js---------------------------------------------------------*/


Zondy.Service.QueryFeatureStruct = OpenLayers.Class({

    /**
    *  是否包含属性值
    *  {Bool}
    **/
    IncludeAttribute: true,

    /**
    *  是否包含几何图形信息
    *  {Bool}
    **/
    IncludeGeometry: false,

    /**
    *  是否包含图形参数
    *  {Bool}
    **/
    IncludeWebGraphic: false,

    toJSON: function () {
        /// <summary>获取此类的json形式的字符串</summary>
        return $.toJSON(this);
    },

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性赋值对象</param>
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------QueryParameterBase.js---------------------------------------------------------*/


Zondy.Service.QueryParameterBase = OpenLayers.Class({

    /// <summary>用于查询的几何描述
    /// {Zondy.Object.Tangram}
    /// </summary>
    geometry: null,

    /// <summary>
    /// 条件查询的SQL语句,如果为空，则表示为单一的几何查询；
    ///  如果取值，表示为几何和条件混合查询
    ///  {String}
    ///</summary>
    where: null,

    /// <summary>几何查询的规则
    ///{Zondy.Service.QueryFeatureRule}
    ///</summary>
    rule: null,

    /// <summary>
    ///     需要查询的要素OID号，多个间用‘，’分隔
    ///     如果此参数有值，查询将默认转化为使用要素ID查询，而忽略条件查询
    ///</summary>
    objectIds: null,


    /**
    * 分页号
    * {Interger}
    */
    pageIndex: 0,

    /**
    * 每页记录数
    * {Interger}
    */
    recordNumber: 20,

    /**
    * 查询结果的序列化形式(json（默认值）|xml|kml|gml|georss，对于xml，kml，gml或者georss格式的类xml类型将以text文本返回，如需要可调用$.parseXML(text)得到其xml包装)
    * {String}
    */
    resultFormat: "json",

    /**
    * 指定查询返回结果所包含的要素信息
    * {Zondy.Service.QueryFeatureStruct}
    */
    struct: null,

    initialize: function () {
        /// <summary>构造函数</summary>
        if (this.struct == null) {
            this.struct = new Zondy.Service.QueryFeatureStruct();
        }
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------QueryFeatureRule.js---------------------------------------------------------*/


Zondy.Service.QueryFeatureRule = OpenLayers.Class({

    /**
    *  是否仅比较要素的外包矩形，来判定是否与几何约束图形有交集
    *  {Bool}
    **/
    CompareRectOnly: false,

    /**
    *  是否将要素的可见性计算在内
    *  {Bool}
    **/
    EnableDisplayCondition: false,

    /**
    *  是否完全包含
    *  {Bool}
    **/
    MustInside: false,

    /**
    *  是否相交
    *  {Bool}
    **/
    Intersect: false,

    toJSON: function () {
        /// <summary>获取此类的json形式的字符串</summary>
        return $.toJSON(this);
    },

    initialize: function (options) {
        /// <summary>构造函数</summary>
        /// <param name="options" type="Object">属性赋值对象</param>
        $.extend(this, options);
    }

});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------QueryDocFeature.js---------------------------------------------------------*/


Zondy.Service.QueryDocFeature = OpenLayers.Class(Zondy.Service.QueryServiceBase, Zondy.Service.DocLayer, {

    onSuccess: null,


    initialize: function (queryParam, docName, layerIndex, options) {
        /// <summary>构造函数</summary>
        /// <param name="queryParam" type="Zondy.Service.QueryGeometryParameter">几何查询的参数类</param>
        /// <param name="docName" type="String">文档名称</param>
        /// <param name="layerIndex" type="Interger">图层序号</param>
        /// <param name="options" type="Object">属性赋值对象</param>
        $.extend(this, options);

        this.queryParam = queryParam;
        this.mapName = docName;
        this.layerIndex = layerIndex;
        this.partUrl = "docs/" + this.mapName + "/" + this.mapIndex.toString() + "/" + this.layerIndex + "/query";
        Zondy.Service.QueryServiceBase.prototype.initialize.apply(this);
    },


    query: function (onSuccess) {
        /// <summary>查询函数，向服务器发送请求</summary>
        /// <param name="onSuccess" type="Function">回调函数</param>
        if (this.queryParam == null) {
            return;
        }
        var fullRestUrl = "";

        if (this.queryParam instanceof Zondy.Service.QueryParameter) {
            // 如果是属于几何查询类
            fullRestUrl = "http://" + this.ip + ":" + this.port + "/" + this.baseUrl
             + this.partUrl;
        }
        else {
            return;
        }
        var dataObject = this.queryParam.getParameterObject();
        this.restQuery(fullRestUrl, dataObject, onSuccess);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------QueryLayerFeature.js---------------------------------------------------------*/


Zondy.Service.QueryLayerFeature = OpenLayers.Class(Zondy.Service.QueryServiceBase, {
    initialize: function (queryParam, options) {
        /// <summary>构造函数</summary>
        /// <param name="queryParam" type="Zondy.Service.QueryGeometryParameter">几何查询的参数类</param>
        /// <param name="options" type="Object">属性赋值对象</param>
        $.extend(this, options);

        this.queryParam = queryParam;
        this.partUrl = "layer/query";
        Zondy.Service.QueryServiceBase.prototype.initialize.apply(this);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------QueryParameter.js---------------------------------------------------------*/

/**
* Class: OpenLayers.Geometry.Polygon 
* Polygon is a collection of Geometry.LinearRings. 
* 
* Inherits from:
*  - <Zondy.Service.QueryParameterBase> 
*  
*/
Zondy.Service.QueryParameter = OpenLayers.Class(Zondy.Service.QueryParameterBase, {

    getParameterURL: function () {
        /// <summary>获取相关参数的REST-URL表示形式</summary>
        var paramUrl = "";
        paramUrl = "geometry=" + this.geometry.toString();
        paramUrl += "&geometryType=" + this.geometry.getGeometryType();
        paramUrl += "&page=" + this.pageIndex.toString();
        paramUrl += "&pageCount=" + this.recordNumber.toString();
        paramUrl += "&f=" + this.resultFormat;
        if (this.struct != null)
            paramUrl += "&structs=" + $.toJSON(this.struct);
        if (this.where != null)
            paramUrl += "&where=" + this.where;
        if (this.rule != null)
            paramUrl += "&rule=" + $.toJSON(this.rule);
        if (this.objectIds != null)
            paramUrl += "&objectIds=" + this.objectIds;
        return paramUrl;
    },

    getParameterObject: function () {
        /// <summary>获取相关参数的Object形式,私有方法</summary>
        var obj = {};
        obj.f = this.resultFormat;
        if (this.struct != null) {
            obj.structs = this.struct.toJSON();
        }

        if (this.objectIds != null) {

            obj.objectIds = this.objectIds;
            return obj;
        };

        obj.page = this.pageIndex.toString();
        obj.pageCount = this.recordNumber.toString();

        if (this.geometry != null) {
            obj.geometry = this.geometry.toString();
            obj.geometryType = this.geometry.getGeometryType();
        }


        if (this.where != null)
            obj.where = this.where;
        if (this.rule != null)
            obj.rule = this.rule.toJSON();
        return obj;
    },

    initialize: function (options) {
        /// <summary>构造函数</summary>
        this.struct = new Zondy.Service.QueryFeatureStruct();
        OpenLayers.Util.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------QueryByLayerParameter.js---------------------------------------------------------*/

/**
* Class: OpenLayers.Geometry.Polygon 
* Polygon is a collection of Geometry.LinearRings. 
* 
* Inherits from:
*  - <Zondy.Service.QueryParameterBase> 
*  
*/
Zondy.Service.QueryByLayerParameter = OpenLayers.Class(Zondy.Service.QueryParameter, {

    gdbp: null,

    getParameterURL: function () {
        /// <summary>获取相关参数的REST-URL表示形式</summary>
        var paramUrl = Zondy.Service.QueryParameter.prototype.getParameterURL.apply(this);
        return paramUrl + "&gdbp=" + this.gdbp;
    },

    getParameterObject: function () {
        /// <summary>获取相关参数的Object形式,私有方法</summary>
        var obj = Zondy.Service.QueryParameter.prototype.getParameterObject.apply(this);
        obj.gdbp = this.gdbp;
        return obj;
    },

    initialize: function (gdbp, options) {
        /// <summary>构造函数</summary>
        /// <param name="gdbp" type="String">被查询的图层的gdbp</param>
        /// <param name="options" type="Object">对象属性键值对</param>
        this.struct = new Zondy.Service.QueryFeatureStruct();
        this.gdbp = encodeURI(gdbp);
        OpenLayers.Util.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CAddMapLayerInfo.js---------------------------------------------------------*/


Zondy.Service.Catalog.CAddMapLayerInfo = OpenLayers.Class({

    Index: 0,
    LayerName: null,
    GDBP: null,

    initialize: function (layerName, index, gdbp) {
        /// <summary>构造函数</summary>
        /// <param name="layerName" type="String">图层名称</param>
        /// <param name="index" type="Interger">图层在地图或者组下的序号</param>
        /// <param name="gdbp" type="String">图层的gdbp</param>
        this.Index = index;
        this.LayerName = layerName;
        this.GDBP = gdbp;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CAddMapGroupInfo.js---------------------------------------------------------*/


Zondy.Service.Catalog.CAddMapGroupInfo = OpenLayers.Class({

    GroupName: null,
    Index: 0,
    AddMapLayerInfos: null,

    initialize: function (groupName, index, mapLayerInfo) {
        /// <summary>构造函数</summary>
        /// <param name="groupName" type="String">组名称</param>
        /// <param name="index" type="Interger">组在文档或者地图下的序号</param>
        /// <param name="mapLayerInfo" type="Array,Zondy.Service.Catalog.AddMapLayerInfo in an Array">图层信息</param>
        this.GroupName = groupName;
        this.Index = index;
        this.AddMapLayerInfos = mapLayerInfo;
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CAddMapInfo.js---------------------------------------------------------*/


Zondy.Service.Catalog.CAddMapInfo = OpenLayers.Class({


    /// <summary>地图名称</summary>
    MapName: null,

    /// <summary>地图在文档下的序号</summary>
    Index: 0,

    /// <summary>Array,Zondy.Service.Catalog.CAddMapLayerInfo in an Array，地图下的图层信息</summary>
    LayerInfos: null,

    /// <summary>Array,Zondy.Service.Catalog.CAddMapGroupInfo in an Array，地图下的组信息</summary>
    GroupInfos: null,

    initialize: function (mapName, layerInfos, options) {
        /// <summary>构造函数</summary>
        /// <param name="mapName" type="String">地图名称</param>
        /// <param name="layerInfos" type="Zondy.Service.Catalog.AddMapLayerInfo in an Array">地图下的图层信息</param>
        /// <param name="options" type="Object">属性对象</param>

        this.MapName = mapName;
        this.LayerInfos = layerInfos;
        $.extend(this, options);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------CAddDocInfo.js---------------------------------------------------------*/



Zondy.Service.Catalog.CAddDocInfo = OpenLayers.Class({
    /// <summary>用于创建一个地图文档</summary>

    /// <summary>是否在服务器文档列表里创建此文档结点</summary>
    CreatFolderNode: false,

    /// <summary>文档名称</summary>
    DocName: null,

    /// <summary>是否创建永久性地图文档，否则为临时性文档</summary>
    IsRelease: false,

    ///<summary>
    ///  地图文档下得地图信息
    ///  Array
    ///  A list of Zondy.Service.Catalog.AddMapInfo in an Array
    /// </summary>
    AddMapInfos: null,

    initialize: function (docName, mapInfos, options) {
        /// <summary>构造函数</summary>
        /// <param name="docName" type="String">需要创建的地图文档名</param>
        /// <param name="mapInfos" type="Array,Zondy.Service.Catalog.AddMapInfo in an Array">文档下的地图信息</param>
        /// <param name="options" type="Object">为此类的个属性赋值的对象</param>

        this.DocName = docName;
        this.AddMapInfos = mapInfos;
        $.extend(this, options);
    }
});

/*----------------------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------------------------PolygonJSON.js---------------------------------------------------------*/
Zondy.Format.PolygonJSON = OpenLayers.Class(OpenLayers.Format.JSON, {
    /**
    Deserialize  a MapGIS Features , and Return an array of OpenLayers.Feature.Vector

    *
    * Parameters:
    * json-{String} | {Object},needs a Zondy.Object.FeatureSet format Javascript object.
    **/
    read: function (json, options) {
        var results = null;
        var obj = null;
        if (typeof json === 'string') {
            obj = OpenLayers.Format.JSON.prototype.read.apply(this,
                                                              [json]);
        } else {
            obj = json;
        }
        if (!obj) {
            OpenLayers.Console.error("Bad JSON:" + json);
        }
        return this.parseVectors(obj);
    },

    /*
    *   Parameters:
    *   obj: {Object},an object stand for Zondy.IGServer.WebService.REST.IGS.ExtendBaselibClass.SFeatureElementSet
    */
    parseVectors: function (zfeatureset) {
        // an array of OpenLayers.Feature.Vector
        var results = [];
        var vectorLength;
        if (!zfeatureset)
            return null;
        if (!zfeatureset.SFEleArray)
            return null;
        vectorLength = zfeatureset.SFEleArray.length;
        for (var i = 0; i < vectorLength; i++) {
            var zfeature = zfeatureset.SFEleArray[i];
            var attribute = this.parseAttribute(zfeatureset.AttStruct, zfeature.AttValue);
            var geometry = this.parseGeometry(zfeature.fGeom, zfeature.ftype);
            var vector = new OpenLayers.Feature.Vector(geometry, attribute, null);
            vector.fid = zfeature.FID.toString();
            vector.bounds = this.parseBound(zfeature.bound);
            results[i] = vector;
        }
        return results;
    },

    parseBound: function (zBound) {
        if (!zBound)
            return null;
        var result = new OpenLayers.Bounds(zBound.xmin, zBound.ymin, zBound.xmax, zBound.ymax);
        return result;
    },

    /*
    *  get the attribute object of the vector
    *   parameters :
    *   attstruct: {Object}, an object of Mapgis7.WebService.BasLib.GLine.AttStruct
    *   attvalue: {Array}
    */
    parseAttribute: function (attstruct, attvalue) {
        var attributes = {};
        var structLength;
        var valueLength;

        if (!attstruct && !attvalue)
            return null;
        structLength = attstruct.FldName.length;
        valueLength = attvalue.length;
        if (structLength != valueLength)
            return null;
        else {
            for (var i = 0; i < structLength; i++) {
                attributes[attstruct.FldName[i]] = attvalue[i];
            }
            return attributes;
        }
    },

    /*
    *   obj: {Object} an Object that response for mapgis  feature fGeom attribute
    */
    parseGeometry: function (fGeom, type) {
        var result;
        switch (type) {
            case 1:
                result = null;
                break;
            case 2:
                // if the obj is type of Line
                result = this.parseGLine(fGeom.LinGeom);
                break;
            case 3:
                // if the obj is type of Region
                result = this.parseGRegion(fGeom.RegGeom);
                break;
        }
        return result;
    },

    /*
    *   多个GRegion对应的是OpenLayers中的MulityplyPolygon,这里我们只取第一个GRegion
    */
    parseGRegion: function (gRegions) {
        /// <param name="gRegions" type="{Array}">an array of Mapgis7.WebService.BasLib.GRegion</param>
        var gRegionsLength;
        var results = [];
        var specifiedGRegion;
        if (!gRegions)
            return null;
        gRegionsLength = gRegions.length;
        if (gRegionsLength === 0)
            return null;
        specifiedGRegion = gRegions[0];
        if (!specifiedGRegion)
            return null;
        var specifiedGRegionLength = specifiedGRegion.Rings.length;
        for (var i = 0; i < specifiedGRegionLength; i++) {
            var zondyAnyLine = specifiedGRegion.Rings[i];
            var points = [];
            var zondyDots = zondyAnyLine.Arcs[0].Dots;
            var zondyDotsLength = zondyDots.length;
            for (var i = 0; i < zondyDotsLength; i++) {
                var point = new OpenLayers.Geometry.Point(zondyDots[i].x, zondyDots[i].y);
                points[i] = point;
            }
            results[i] = new OpenLayers.Geometry.LinearRing(points);
        }
        return new OpenLayers.Geometry.Polygon(results);
    },

    /*
    *  
    */
    parseGLine: function (glines) {
        /// <param name="glines" type="{Array}">an array of Mapgis7.WebService.BasLib.GLine</param>
        var glinesLength;
        var results = []; // an array of OpenLayers.Geometry.LinearRing;
        if (!glines)
            return null;
        glinesLength = glines.length;
        if (glinesLength === 0)
            return null;
        for (var i = 0; i < glinesLength; i++) {
            var points = [];
            var zondyDots = glines[i].Line.Arcs[0].Dots;
            var zondyDotsLength = zondyDots.length;
            for (var j = 0; j < zondyDotsLength; j++) {
                var point = new OpenLayers.Geometry.Point(zondyDots[j].x, zondyDots[j].y);
                points[j] = point;
            }
            results[i] = new OpenLayers.Geometry.LinearRing(points);
        }
        return new OpenLayers.Geometry.Polygon(results);
    }
});
/*----------------------------------------------------------------------------------------------------------------------------*/
