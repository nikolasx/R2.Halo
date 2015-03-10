/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="customhelp.js" />

$(function () {
    var role = getSysUserRole();
    if (role == "0") {
        getUserList('', '0', '');
        getRegionLst('0', '', 'suoshuqu');
        AddRole('0','quanxian')
    }
    else {
        var cookieInfo = getCookie("JinanDisasterUserInfo");
        if (cookieInfo.split('$').length == 5) {
          var   userName = cookieInfo.split('$')[0];
          //var   role = cookieInfo.split('$')[3];
          var   region = cookieInfo.split('$')[1];
          getUserList(userName, role, region);
          getRegionLst(role, region, 'suoshuqu');
          AddRole(role, 'quanxian')
        }
        
    }
    changetableclick();
    validate();
    $("#adduserbtn").click(CreateUser);
    $("#closebtn").click(closeDialog)

})
//tab切换
function changetableclick() {
    $(".litab").click(function () {
        var index = $(".litab").index($(this));
        $(".tab").eq(index).css("display", "block").siblings().css("display", "none");
        if (!$(this).hasClass("litabcurrent")) {
            $(this).addClass("litabcurrent").siblings().removeClass("litabcurrent");
        }
    })
}
//添加用户
function CreateUser() {
    var usr = $('#usrCreate input').eq(0).val();
    var pwd = $('#usrCreate input').eq(1).val();
    var confirmPwd = $('#usrCreate input').eq(2).val();
    var realusr = $('#usrCreate input').eq(3).val();
    var region = $('#usrCreate select').eq(0).val();
    var role = $('#usrCreate select').eq(1).val();
    var valid = new ValidatePwd('#usrCreate input:eq(1)', '#usrCreate input:eq(2)');
    valid._init();

    if (!valid.checkone()) {
        return;
    } else if (!valid.checktwo()) {
        return;
    }

    if ($.trim(usr) != '' && $.trim(pwd) != '' && $.trim(region) != '' && $.trim(realusr) != '') {
        $.post(baseUrl + 'Home/CreateUser', { name: usr, pwd: pwd, realName: realusr, region: region, role: role }, function (data) {
            if (data == 'success') {
                alert('用户创建成功');
            }
            else {
                alert(data);
            }
        });
    }
    else {
        alert('用户信息输入不完整');
    }

}

//验证信息
function validate() {
    //创建用户验证
    $('#usrCreate input').eq(0).blur(function () {
        var val = $(this).val();
        var validate = $(this).parent().next().find('label');
        if ($.trim(val) == '') {
            validate.css('color', 'red').text('用户名不能为空');
        }
        else {
            validate.text('');
        }
    });
    $('#usrCreate input').eq(3).blur(function () {
        var val = $(this).val();
        var validate = $(this).parent().next().find('label');
        if ($.trim(val) == '') {
            validate.css('color', 'red').text('姓名不能为空');
        }
        else {
            validate.text('');
        }
    });
    //验证密码
    var valid = new ValidatePwd('#usrCreate input:eq(1)', '#usrCreate input:eq(2)');
    valid._init();
    //验证power输入
    $('#usrCreate select').blur(function () {
        var val = $(this).val();
        var validate = $(this).parent().next().find('label');
        if ($.trim(val) == '') {
            validate.css('color', 'red').text('不能为空');
        }
        else {
            validate.text('');
        }
    });
}

//删除用户
function delUser(userid) {
    var r = confirm('确定删除此用户吗？');
    if (r) {
        $.post(baseUrl + 'Home/DelUserSubmit', { "id": userid }, function (data) {
            if ($.trim(data) == 'success') {
                alert('删除成功');
                user_list_query();
            }
            else {
                alert(data);
            }
        });
    }
}

//编辑更新用户
function editUser(_recid) {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].UserId == _recid) {
            $(".dialogmode").css("display", "block");
            //        debugger
            $('#usrEdit input').eq(0).val(userList[i].UserName);
            $('#usrEdit input').eq(1).val(userList[i].Password);
            $('#usrEdit input').eq(2).val(userList[i].Password);
            $('#usrEdit input').eq(3).val(userList[i].RealName);
            $('#usrEdit input').eq(0).parent().next().find('label').text('');
            $('#usrEdit input').eq(1).parent().next().find('label').text('');
            $('#usrEdit input').eq(2).parent().next().find('label').text('');
            //                        $('#usrEdit .suoshuqu').find("option[value=210285]").attr("selected", true);
            $('#usrEdit .suoshuqu').val(userList[i].RegionCode);
            $('#usrEdit .quanxian').val(userList[i].Role);
            var btnClick = function () {
                var user = $.trim($('#usrEdit input').eq(0).val());
                var pwd = $.trim($('#usrEdit input').eq(1).val());
                var confirmPwd = $.trim($('#usrEdit input').eq(2).val());
                var realname = $.trim($('#usrEdit input').eq(3).val());
                //验证密码
                var valid = new ValidatePwd('#usrEdit input:eq(1)', '#usrEdit input:eq(2)');
                valid._init();
                if (!valid.checkone()) {
                    return;
                } else if (!valid.checktwo()) {
                    return;
                }
                var power = $.trim($('#usrEdit select').eq(0).val());
                var role = $.trim($('#usrEdit select').eq(1).val());
                
                if (user != '' && pwd != '' && power != '' && role != '' && realname != '') {
                    if (user == userList[i].user && pwd == userList[i].pwd && power == userList[i].power && role == userList[i].role && realname == userList[i].realName) {
                        alert('用户信息没有修改');
                    }
                    else {
                        $.post(baseUrl + 'Home/EditUserSubmit', { id: _recid, userName: user, pwd: pwd, realName: realname, region: power, role: role }, function (data) {
                            if ($.trim(data) == 'success') {
                                alert('修改成功');
                                user_list_query();
                            }
                            else {
                                alert(data);
                            }
                        });
                    }
                }
                else {
                    alert('请输入完整的用户信息');
                }

            };
            $('#modifyUsr').unbind("click").removeAttr("onclick").click(btnClick);
            break;
        }
    }

}

//关闭更新对话框
function closeDialog() {
    $(".dialogmode").css("display", "none");
}
//查询
function user_list_query() {
    var user = $('#tabshow input').eq(0).val();
    var region = $('#tabshow select').val();
    getUserList(user, getSysUserRole(), region);
}