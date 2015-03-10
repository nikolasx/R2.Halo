/// <reference path="../Libs/jquery-1.7.1.min.js" />
/// <reference path="customhelp.js" />

var validPwd = new ValidatePwd('#pwd', '#pwd2');
$(function () {
    
    validPwd._init();
    $("#midifyok").click(submitto);
    $("#modifycancle").click(cancelOperate);

})

function submitto() {
    if (validPwd.checkone() && validPwd.checktwo()) {
        var user = $('#user').val();
        var pwd = $('#pwd2').val();
        $.post(baseUrl + 'Home/ModifyPwdRst', { user: user, pwd: pwd }, function (data) {
            if (data == 'success') {
                confirm('密码修改成功！');
                //                        location.href = baseUrl + '?userName=' + $('#user').val();
            }
            else {
                alert(data);
            }
        });
    }
    return false;
}

function cancelOperate() {
    $('#pwd').val('');
    $('#pwd2').val('');
}
