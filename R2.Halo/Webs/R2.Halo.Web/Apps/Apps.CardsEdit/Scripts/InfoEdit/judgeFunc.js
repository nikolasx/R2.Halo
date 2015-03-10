//对ckeckbox打√或者对多选一（至少有三个）的radio打√
function judgeCheckboxAndRadio(conArray, idArray, dbStr) {
    if (dbStr == "" || dbStr == null || dbStr == undefined) {
        return;
    }
    for (var i = 0; i < conArray.length; i++) {
        if (dbStr.indexOf(conArray[i])>-1) {
            $("#" + idArray[i]).attr({ checked: 'checked' });
        }
    }
}
//对二选一的radio打√
function judgeRadio(idArray, dbStr) {
    if (dbStr) {
        $("#" + idArray[0]).attr({ checked: 'checked' });
    } else {
        $("#" + idArray[1]).attr({ checked: 'checked' });
    }
}
//对"有"、"无"(True False)的radio打√
function judgeTrueOrFalseRadio(idArray, dbStr) {
    if (dbStr=="True") {
        $("#" + idArray[0]).attr({ checked: 'checked' });
    } else {
        $("#" + idArray[1]).attr({ checked: 'checked' });
    }
}
//针对"地震烈程度"的radio打√
function judgeDzlcdRadio(conArray, idArray, dbStr) {
for (var i = 0; i < conArray.length; i++) {
    if (dbStr==conArray[i]) {
        $("#" + idArray[i]).attr({ checked: 'checked' });
    }
}
}

//针对稳定性对checkbox打√
function judgeWDXCheckbox(conArray, idArray, dbStr) {
    for (var i = 0; i < conArray.length - 1; i++) {
        if (dbStr.indexOf(conArray[i])>=0) {
            $("#" + idArray[i]).attr({ checked: 'checked' });
        }
    }
    if (dbStr.indexOf("较差") >= 0 || dbStr.indexOf(conArray[conArray.length - 1])>=0) {
        $("#" + idArray[idArray.length - 1]).attr({ checked: 'checked' });
    }
}
//判断输入的是否是合法的数字
function checkInputNumber(inputNub) {
    var inputvalue = $(inputNub).val();
    var numberchar = $(inputNub).val().replace(/[^0-9]/g, "");
    if (inputvalue.length == numberchar.length && inputvalue.length > 0) {
        return true;
    } else {
        return false;
    }
}