

//新密码验证控件 参数为input的密码框选择器
function ValidatePwd(sel, sel_next) {
    this.pwd = sel;
    this.pwdnext = sel_next;
    this._init = function () {
        $(this.pwd).blur(this.checkone);
        $(this.pwdnext).blur(this.checktwo);
    };
    this.checkone = function () {
        var inputVal = $(sel).val();
        var vali = $(sel).parent().next().find('label').last();
        var vali2 = $(sel_next).parent().next().find('label').last();
        if ($.trim(inputVal) == '') {
            vali.css('color', 'red').text('密码不能空');
            vali2.text('');
        }
        else {
            vali.text('');
            return true;
        }
        return false;
    };
    this.checktwo = function () {
        var first = $(sel).val();
        var second = $(sel_next).val();
        var vali2 = $(sel_next).parent().next().find('label').last();
        if ($.trim(first) != '') {
            if (first != second) {
                vali2.css('color', 'red').text('两次密码须相同');
            }
            else {
                vali2.text('');
                return true;
            }
        }
        return false;
    };
}


function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
//读取cookies
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}
//删除cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=;expires=" + exp.toGMTString();
}

//获取用户权限
function getSysUserRole() {
    var cookieInfo = getCookie("JinanDisasterUserInfo");
    if (cookieInfo != null) {
        if (cookieInfo.split('$').length == 5) {
            return cookieInfo.split('$')[3];
        }
        return "";
    }
    return "";
}

//根据指定检索条件检索数据列表
function getUserList(user, role, region) {
    var items = [];
    $.post(baseUrl + 'Home/GetUserList', { "user": user, "role": role, "region": region }, function (data) {
        var count = data.length;
        userList = [];
        $.each(data, function (index, obj) {

            userList.push(obj); //放入数组，方便分页
            //首次加载
            var links = '<td><a href="javascript:editUser(' + obj.UserId + ');" style="padding-right: 10px;color: #0066cc">编辑</a><a href="javascript:delUser(' + obj.UserId + ');" style="padding-left: 10px;color: #a50909">删除</a></td>';
            items.push('<tr><td>'+(index+1)+'</td><td>' + obj.UserName + '</td><td>******</td><td>' + obj.RealName + '</td><td>' + GetRegion(obj.RegionCode) + '</td><td>' + GetRole(obj.Role) + '</td>' + links + '</tr>');
        });
        $('#tableshowdata tr:gt(0)').remove();
        $('#tableshowdata').append(items.join(''));
        $('#tableshowdata tr:odd').addClass("oddtr_color")
    });
}

//power为枚举字符串,seletor为select标签的选择器
function getRegionLst(role, region, selector) {
    $.post(baseUrl + 'Home/GetPowerList', { "role": role, "region": region }, function (array) {
        var optionsHtml = '';
        $.each(array, function (index, item) {
            optionsHtml += '<option value=' + item.regionId + '>' + item.regionName + '</option>';
        });
        $(selector).find('option:gt(0)').remove();
        if (array.length > 1)
            $("." + selector).append("<option value=''></option>" + optionsHtml);
        else
            $("." + selector).append(optionsHtml);
    });
};

function GetRegion(value) {
    var regionName = "";
    switch (value) {
        case "370101":
            regionName = "市辖区";
            break;
        case "370102":
            regionName = "历下区";
            break;
        case "370103":
            regionName = "市中区";
            break;
        case "370104":
            regionName = "槐荫区";
            break;
        case "370105":
            regionName = "天桥区";
            break;
        case "370112":
            regionName = "历城区";
            break;
        case "370113":
            regionName = "长清区";
            break;
        case "370124":
            regionName = "平阴县";
            break;
        case "370125":
            regionName = "济阳县";
            break;
        case "370126":
            regionName = "商河县";
            break;
        case "370181":
            regionName = "章丘市";
            break;
        case "370188":
            regionName = "高新区";
            break;
    }
    return regionName;
}

function GetRole(value) {
    var RoleName = "";
    switch (value) {
        case 0:
            RoleName = "超级管理员";
            break;
        case 1:
            RoleName = "区县管理员";
            break;
        case 2:
            RoleName = "普通用户";
            break;
    }
    return RoleName;
}

function AddRole(role, selector) {
    var array = [];
    var optionsHtml = '';
    if (role == "0") {
        optionsHtml += '<option value=""></option>';
        optionsHtml += '<option value=' + 1 + '>' + GetRole(1) + '</option>';
        optionsHtml += '<option value=' + 2 + '>' + GetRole(2) + '</option>';
    }
    else if (role == "1") {
        optionsHtml += '<option value=' + 2 + '>' + GetRole(2) + '</option>';
    }
    $(selector).find('option:gt(0)').remove();
    $("." + selector).append(optionsHtml);
}