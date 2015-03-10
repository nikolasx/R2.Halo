//全局使用的“类型”，用来判断某个值是否符合某条规则（如是否是纯数字、是否包含特殊字符等等等等）
//ZHAOs 2014年3月5日15:05:09
R2.Business.IsLegal = OpenLayers.Class({
    value: "",
    n: 0,
    valueArr: null,
    titleArr:null,
    initialize: function (option) {
        OpenLayers.Util.extend(this, option);
    },
    //一个字符串是否是int类型（>=0即可，但首位不能为0）
    isInt: function () {
        var regExp = /^[1-9]+[0-9]*$/;
        return regExp.test(this.value);
    },
    //一个字符串是否为纯数字(至少出现一次，符合条件返回true，否则返回false)
    isAllNumber:function(){
        var regExp = /^[0-9]+$/;
        return regExp.test(this.value);
    },
    //一个字符串是否为纯英文字母(至少出现一次，符合条件返回true，否则返回false)
    isAllChar: function () {
        var regExp = /^[a-zA-Z]+$/;
        return regExp.test(this.value);
    },
    //一个字符串是否为n位纯数字(符合条件返回true，否则返回false)
    has_n_Number: function () {        
        var regExp = new RegExp("^([0-9]){" + this.n +"}$");
        return regExp.test(this.value);
    }, 
    //一个字符串是否为n位纯英文字母
    has_n_Char:function(){
        var regExp = new RegExp("^([a-zA-Z]){" + this.n + "}$");
        return regExp.test(this.value);    
    },
    //一个字符串是否为小数形式（float，double，real之类，可有小数点或无小数点,不能开头为0且无小数点）
    isFloat: function () {
        var regExp = /^[0-9]+\.?[\d]*$/;
        return regExp.test(this.value);
    },
    //一个字符串是否满足经度形式（形如123-45-56.78）
    isLon: function () {
        if (this.value == undefined || this.value == "" || this.value == "--") {
            return false;
        }
        var regExp = /^\d{1,3}-\d{1,2}-\d{1,}\.?\d*$/;
        if (regExp.test(this.value) == false) {
            return false;
        }
        else {
            var lon0 = parseInt(this.value.split('-')[0]);
            var lon1 = parseInt(this.value.split('-')[1]);
            var lon2 = parseFloat(this.value.split('-')[2]);
            if (!(lon0 >= 0 && lon0 <= 180 && lon1 >= 0 && lon1 < 60 && lon2 >= 0 && lon2 < 60)) {
                return false;
            }
        }
        return true;
    },
    //一个字符串是否满足纬度形式（形如76-45-56.78）
    isLat: function () {
        if (this.value == undefined || this.value == "" || this.value=="--") {
            return false;
        }
        var regExp = /^\d{1,2}-\d{1,2}-\d{1,}\.?\d*$/;
        if (regExp.test(this.value) == false) {
            return false;
        }
        else {
            var lon0 = parseInt(this.value.split('-')[0]);
            var lon1 = parseInt(this.value.split('-')[1]);
            var lon2 = parseFloat(this.value.split('-')[2]);
            if (!(lon0 >= 0 && lon0 <= 90 && lon1 >= 0 && lon1 < 60 && lon2 >= 0 && lon2 < 60)) {
                return false;
            }
        }
        return true;
    },



    //一个字符串数组是否都为纯int形式
    isIntForArr: function () {
        var tempObj = this;
        var a = this.valueArr;
        var b = this.titleArr;
        if (a.length != b.length) {
            alert("数组出错！");
            return false;
        }
        var length = a.length;
        for (var i = 0; i < length; i++) {
            tempObj.value = a[i];
            if (a[i] != undefined && a[i] != "" && tempObj.isInt() == false) {
                alert(b[i] + " 的格式错误，请重新填写或不填");
                return false;
            }
        }
        return true;
    },

    //一个字符串数组是否都为纯数字形式(只要每位都是数字，0可以在任何位置)
    isAllNumberForArr: function () {
        var tempObj = this;
        var a = this.valueArr;
        var b = this.titleArr;
        if (a.length != b.length) {
            alert("数组出错！");
            return false;
        }
        var length = a.length;
        for (var i = 0; i < length; i++) {
            tempObj.value = a[i];
            if (a[i] != undefined && a[i] != "" && tempObj.isAllNumber() == false) {
                alert(b[i] + " 的格式错误，请重新填写或不填");
                return false;
            }
        }
        return true;
    },
    //一个字符串数组是否都为小数形式(对于数组中每一个元素都有如下要求：至少出现一次数字，可为整数形式或者小数形式，符合条件返回true，否则返回false)
    isAllFloatForArr: function () {
        var tempObj = this;
        var a = this.valueArr;
        var b = this.titleArr;
        if (a.length != b.length) {
            alert("数组出错！");
            return false;
        }
        var length = a.length;
        for (var i = 0; i < length; i++) {
            tempObj.value = a[i];
            if (a[i] != undefined && a[i] != "" && tempObj.isFloat() == false) {
                alert(b[i] + " 的格式错误，请重新填写或不填");
                return false;
            }
        }
        return true;
    },
    //一个字符串数组是否为空(Null)
    isAllNullForArr: function () {
        var tempObj = this;
        var a = this.valueArr;
        var b = this.titleArr;
        if (a.length != b.length) {
            alert("数组出错！");
            return false;
        }
        var length = a.length;
        for (var i = 0; i < length; i++) {
            tempObj.value = a[i];
            if (a[i] == undefined || a[i] == "" || a[i]==null) {
                alert("‘"+b[i]+"’" + "的格式错误，不允许为空，必须填写！");
                return false;
            }
        }
        return true;
    },
   

    CLASS_NANE:"IS_LEGAL"    
});

/*
        示例用法
        var test = new R2.Business.IsLegal({"value":"0000","n":6});
        var ans = test.has_n_Number();
        alert(ans);

*/