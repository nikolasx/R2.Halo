
$(function () {
    $(".BIT_left_cell:eq(0)").trigger("click");
    tableSwitchReg();
    initGroundSubsideShow();
})
function tableSwitchReg() {
    $(".BIT_left_cell:eq(0)").css({ "background-color": "#ffffff", "border-right": "1px solid transparent" });
    $(".BIT_left_cell").click(function () {
        var index = $(".BIT_left_cell").index($(this));
        $(".BIT_left_cell:eq(" + index + ")").css({ "background-color": "#ffffff", "border-right": "1px solid transparent" })
            .siblings(".BIT_left_cell").css({ "background-color": "#F4F8FB", "border-right": "1px solid #CAD8E4" });
        $(".BIT_right_table:eq(" + index + ")").css("display", "block").siblings(".BIT_right_table").css("display", "none");
    });
}
function initGroundSubsideShow() {
    $("input[type=text]").remove();
    $("#BIT_right div").css("text-align", "center");
    var tybh = $("#dmtxTybh").text();
    $("input").attr("disabled", "disabled");
    $.post(baseUrl + "QueryGroundSubside/GetGroundSubsideById", { "id": tybh }, function(data) {
        if (data == "fail") {
            return false;
        }
        var obj = eval("(" + data + ")");

        $("#uNubDmtx").text(tybh);
        var num = tybh.substring(0, 6);
        for (var i = 0; i < $("#countyDmtxInput").children("option").length; i++) {
            if (num == $("#countyDmtxInput").children("option").eq(i).val()) {
                $("#countyDmtxInput").children("option").eq(i).attr("selected", "selected");
            }
        }
        $("#nameDmtx").text(obj.名称);
        $("#fNubDmtx").text(obj.野外编号);
        $("#rNubDmtx").text(obj.室内编号);
        $("#xCoordinateDmtx").text(obj.X坐标);
        $("#yCoordinateDmtx").text(obj.Y坐标);
        $("#combDmtx").text(obj.标高);
        //        $("#longitudeDmtxInputUP").val(obj.经度);
        //        $("#latitudeDmtxInputUP").val(obj.纬度);
        //经度
        $("#longitudeDmtx").text(obj.经度);
        $("#latitudeDmtx").text(obj.纬度);

        $("#locationDmtx").text(obj.地理位置);
        $("#dfkenghaoOnedmtx").text(obj.单体陷坑坑号1);
        //        $("#dfxingzhuangOnedmtxInputUP").val(obj.单体陷坑形状1);
        if (obj.单体陷坑形状1 != null) {
            $("#dfxingzhuangOnedmtx input[type=radio]").each(function() {
                if (obj.单体陷坑形状1 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        $("#dfkkgmOnedmtx").text(obj.单体陷坑坑口规模1);
        $("#dfshenduOnedmtx").text(obj.单体陷坑深度1);
        $("#dfbxmjOnedmtx").text(obj.单体陷坑变形面积1);
        $("#dfgmdjOnedmtx").text(obj.单体陷坑规模等级1);
        $("#dfczfxOnedmtx").text(obj.单体陷坑长轴方向1);
        $("#dfcsswsOnedmtx").text(obj.单体陷坑充水水位深1);
        $("#dfswbdOnedmtx").text(obj.单体陷坑水位变动1);
        $("#dffssjOnedmtx").text(obj.单体陷坑发生时间1);
        //        $("#dffzbhOnedmtxInputUP").val(obj.单体陷坑发展变化1);
        if (obj.单体陷坑发展变化1 != null) {
            $("#dffzbhOnedmtx input[type=radio]").each(function() {
                if (obj.单体陷坑发展变化1 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        $("#dfkenghaoTwodmtx").text(obj.单体陷坑坑号2);
        //        $("#dfxingzhuangTwodmtxInputUP").val(obj.单体陷坑形状2);
        if (obj.单体陷坑形状2 != null) {
            $("#dfxingzhuangTwodmtx input[type=radio]").each(function() {
                if (obj.单体陷坑形状2 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        $("#dfkkgmTwodmtx").text(obj.单体陷坑坑口规模2);
        $("#dfshenduTwodmtx").text(obj.单体陷坑深度2);
        $("#dfbxmjTwodmtx").text(obj.单体陷坑变形面积2);
        $("#dfgmdjTwodmtx").text(obj.单体陷坑规模等级2);
        $("#dfczfxTwodmtx").text(obj.单体陷坑长轴方向2);
        $("#dfcsswsTwodmtx").text(obj.单体陷坑充水水位深2);
        $("#dfswbdTwodmtx").text(obj.单体陷坑水位变动2);
        $("#dffssjTwodmtx").text(obj.单体陷坑发生时间2);
        //        $("#dffzbhTwodmtxInputUP").val(obj.单体陷坑发展变化2);
        if (obj.单体陷坑发展变化2 != null) {
            $("#dffzbhTwodmtx input[type=radio]").each(function() {
                if (obj.单体陷坑发展变化2 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        $("#dfkenghaoThreedmtx").text(obj.单体陷坑坑号3);
        //        $("#dfxingzhuangThreedmtxInputUP").val(obj.单体陷坑形状3);
        if (obj.单体陷坑形状3 != null) {
            $("#dfxingzhuangThreedmtx input[type=radio]").each(function() {
                if (obj.单体陷坑形状3 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        $("#dfkkgmThreedmtx").text(obj.单体陷坑坑口规模3);
        $("#dfshenduThreedmtx").text(obj.单体陷坑深度3);
        $("#dfbxmjThreedmtx").text(obj.单体陷坑变形面积3);
        $("#dfgmdjThreedmtx").text(obj.单体陷坑规模等级3);
        $("#dfczfxThreedmtx").text(obj.单体陷坑长轴方向3);
        $("#dfcsswsThreedmtx").text(obj.单体陷坑充水水位深3);
        $("#dfswbdThreedmtx").text(obj.单体陷坑水位变动3);
        $("#dffssjThreedmtx").text(obj.单体陷坑发生时间3);
        //        $("#dffzbhThreedmtxInputUP").val(obj.单体陷坑发展变化3);
        if (obj.单体陷坑发展变化3 != null) {
            $("#dffzbhThreedmtx input[type=radio]").each(function() {
                if (obj.单体陷坑发展变化3 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#xkqtksDmtx").text(obj.陷坑坑数);
        $("#qffbmjdmtx").text(obj.陷坑分布面积);
        //        $("#qfplxsdmtxInputUP").val(obj.排列形式);
        if (obj.排列形式 != null) {
            $("#qfplxsdmtx input[type=radio]").each(function() {
                if (obj.排列形式 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }

        $("#qfclfxdmtx").text(obj.长列方向);
        $("#qfzxkkkjdmtx").text(obj.最小陷坑口径);
        $("#qfzdkkkjdmtx").text(obj.最大陷坑口径);
        $("#qfkdzxsddmtx").text(obj.最小陷坑深度);
        $("#qfkdzdsddmtx").text(obj.最大陷坑深度);
        $("#qfsfsjdmtx").text(obj.始发时间);
        $("#qfsfkssjdmtx").text(obj.盛发开始时间);
        $("#qfsfjzsjdmtx").text(obj.盛发截止时间);
        $("#qftzsjdmtx").text(obj.停止时间);
        if (obj.尚在发展 != null) {
            $("#qfszfzdmtx input[type=radio]").each(function() {
                if (obj.尚在发展 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#dfbslffhOnedmtx").text(obj.单缝缝号1);
        $("#dfbslfxOnetdmtx").text(obj.单缝形态1);
        $("#dfbslfysfxOnedmtx").text(obj.单缝延伸方向1);
        $("#dfbslfqxOnedmtx").text(obj.单缝倾向1);
        $("#dfbslfqjOnedmtx").text(obj.单缝倾角1);
        $("#dfbslfcdOnedmtx").text(obj.单缝长度1);
        $("#dfbslfkdOnedmtx").text(obj.单缝宽度1);
        $("#dfbslfsdonedmtx").text(obj.单缝深度1);
        $("#dfbslfxzOnedmtx").text(obj.单缝性质1);
        $("#dfbslffhTwodmtx").text(obj.单缝缝号2);
        $("#dfbslfxtTwodmtx").text(obj.单缝形态2);
        $("#dfbslfysfxTwodmtx").text(obj.单缝延伸方向2);
        $("#dfbslfqxTwodmtx").text(obj.单缝倾向2);
        $("#dfbslfqjTwodmtx").text(obj.单缝倾角2);
        $("#dfbslfcdTwodmtx").text(obj.单缝长度2);
        $("#dfbslfkdTwodmtx").text(obj.单缝宽度2);
        $("#dfbslfsdTwodmtx").text(obj.单缝深度2);
        $("#dfbslfxzTwodmtx").text(obj.单缝性质2);
        $("#dfbslffhThreedmtx").text(obj.单缝缝号3);
        $("#dfbslfxtThreedmtx").text(obj.单缝形态3);
        $("#dfbslfysfxThreedmtx").text(obj.单缝延伸方向3);
        $("#dfbslfqxThreedmtx").text(obj.单缝倾向3);
        $("#dfbslfqjThreedmtx").text(obj.单缝倾角3);
        $("#dfbslfcdThreedmtx").text(obj.单缝长度3);
        $("#dfbslfkdThreedmtx").text(obj.单缝宽度3);
        $("#dfbslfsdThreedmtx").text(obj.单缝深度3);
        $("#dfbslfxzThreedmtx").text(obj.单缝性质3);
        $("#qffs").text(obj.缝数);
        $("#qffbmj").text(obj.裂缝分布面积);
        $("#qfjj").text(obj.裂缝间距);
        $("#qfplxs").text(obj.裂缝排列形式);
        if (obj.裂缝排列形式 != null) {
            $("#qfplxs input[type=radio]").each(function() {
                if (obj.裂缝排列形式 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });
        }
        $("#qfczqx").text(obj.裂缝倾向);
        $("#qfczqj").text(obj.裂缝倾角);
        $("#qfzdcdz").text(obj.裂缝长max);
        $("#qfzxcdz").text(obj.裂缝长min);
        $("#qfzdkdz").text(obj.裂缝宽max);
        $("#qfzxkdz").text(obj.裂缝宽min);
        $("#qfzdsdz").text(obj.裂缝深max);
        $("#qfzxsdz").text(obj.裂缝深min);
        //成因类型: $("#dmtxcylxUP input[type=radio]:checked").val(),
        if (obj.成因类型 != null) {
            $("#dmtxcylx input[type=radio]").each(function() {
                if (obj.成因类型 == $(this).val()) {
                    $(this).attr("checked", true);
                }
            });

        }

        $("#damageFormDmtx").text(obj.毁坏田地),
            $("#damageHouseDmtx").text(obj.毁坏房屋),
            $("#jamTrafficTimeDmtx").text(obj.阻断交通时间),
            $("#buryregionGoodsDmtx").text(obj.掩埋地面物资);
        $("#dieNumDmtx").text(obj.死亡人口);
        $("#directLossDmtx").text(obj.直接损失);
        //        $("#damageClassDmtxInputUP").text(obj.灾情等级);
        $("#xzxkgsDmtx").text(obj.新增陷坑);
        $("#kdxqmjDmtz").text(obj.扩大陷区);
        $("#htmsDmtx").text(obj.潜在毁田);
        $("#hfjsDmtx").text(obj.潜在毁房);
        $("#cxxxqcsDmtx").text(obj.出现新陷区);
        $("#mjDmtx").text(obj.新陷区面积);
        $("#dlxssDmtx").text(obj.断路);
        $("#otherwhDmtx").text(obj.其他危害);
        $("#wxrkDmtx").text(obj.威胁人口);
        $("#wxccDmtx").text(obj.威胁财产);
        //        $("#dangerClassDmtxInputUP").val(obj.险情等级);
        if (obj.灾情等级 != null) {
            $("#damageClassDmtx input[type=radio]").each(function() {
                if (obj.灾情等级.indexOf($(this).val()) >= 0)
                    $(this).attr("checked", true);
            });
        }
        if (obj.险情等级 != null) {
            $("#dangerClassDmtx input[type=radio]").each(function() {
                if (obj.险情等级.indexOf($(this).val()) >= 0)
                    $(this).attr("checked", true);
            });
        }

        //隐患点: $("#dangerpointerDmtxUP input[type=radio]:checked").val(),
        $("#dangerpointerDmtx input[type=radio]").each(function() {
            if ($(this).val() == "true" && obj.隐患点) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.隐患点) {
                $(this).attr("checked", true);
            }
        });
        //防灾预案: $("#pdPlanDmtxUP input[type=radio]:checked").val(),
        $("#pdPlanDmtx input[type=radio]").each(function() {
            if ($(this).val() == "true" && obj.防灾预案) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.防灾预案) {
                $(this).attr("checked", true);
            }
        });
        //多媒体: $("#mediaDmtxUP input[type=radio]:checked").val(),
        $("#mediaDmtx input[type=radio]").each(function() {
            if ($(this).val() == "true" && obj.多媒体) {
                $(this).attr("checked", true);
            } else if ($(this).val() == "false" && !obj.多媒体) {
                $(this).attr("checked", true);
            }
        });
        $("#precsandEffectDmtx").text(obj.防治措施);
        $("#preAdviceDmtx").text(obj.防治建议);
        $("#gmPersonDmtx").text(obj.群测人员);
        $("#vHeadDmtx").text(obj.村长);
        $("#phoneDmtx").text(obj.电话);
        $("#investiPersonDmtx").text(obj.调查负责人);
        $("#fillerDmtx").text(obj.填表人);
        $("#auditDmtx").text(obj.审核人);
        $("#investiUnitDmtx").text(obj.调查单位);
        $("#dateDmtx").text(obj.填表日期);
        $("#qfjbzx").text(obj.阶步指向);
        $("#collapseSit").text(obj.地面塌陷情况); ////////////////////////////
        $("#provinceDmtx").text(obj.省名);
        //        $("#countyDmtxInputUP").text(obj.县名);
        $("#streetDmtx").text(obj.街道);
        //统一编号
        $("#uNubFastenDmtx").text(obj.统一编号.substring(0, 8));
        $("#uNubAgileDmtx").text(obj.统一编号.substring(8, obj.统一编号.length));

        //地下水源枯竭
        if (obj.地下水源枯竭 != null) {
            if (obj.地下水源枯竭.indexOf("河水流量减少") >= 0) $("#rainFlowDecreaseDmtx").attr("checked", true);
            if (obj.地下水源枯竭.indexOf("断流") >= 0) $("#cutoffDmtxCon").attr("checked", true);
            if (obj.地下水源枯竭.indexOf("井泉水流量减少") >= 0) $("#springDecreaseDmtxCon").attr("checked", true);
            if (obj.地下水源枯竭.indexOf("水位降低") >= 0) $("#waterLevelDecreaseDmtxCon").attr("checked", true);
            if (obj.地下水源枯竭.indexOf("干枯") >= 0) $("#driedup").attr("checked", true);
        }

        //地下水井突水
        if (obj.地下水井突水 != null) {
            if (obj.地下水井突水.indexOf("水量增大") >= 0) $("#waterIncreaseDmtx").attr("checked", true);
            if (obj.地下水井突水.indexOf("成灾，损失") >= 0) $("#disasterOrLossDmtx").attr("checked", true);
            if (obj.地下水井突水.indexOf("淹井损失") >= 0) $("#yanjingLossDmtx").attr("checked", true);
        }
        //塌陷区地貌特征
        if (obj.塌陷区地貌特征 != null) {
            $("#landformFeatureDmtx input[type=checkbox]").each(function() {
                if (obj.塌陷区地貌特征.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }

        //阻断交通
        if (obj.阻断交通 != null) {
            $("#jamTrafficDmtx input[type=checkbox]").each(function() {
                if (obj.阻断交通.indexOf($(this).val()) >= 0) {
                    $(this).attr("checked", true);
                }
            });
        }

        /*
        *地面塌陷成因类型条件
        */
        //冒顶型塌陷
        if ($("#mdxtxdmtx")[0].checked) {
            $("#mdtxtcsdDmtx").text(obj.冒顶塌陷土层时代);
            $("#mdtxtctxDmtx").text(obj.冒顶塌陷土层土性);
            $("#mdtxtchdDmtx").text(obj.冒顶塌陷土层厚度);
            $("#mdtxycsdDmtx").text(obj.冒顶塌陷岩层时代);
            $("#mdtxycyxDmtx").text(obj.冒顶塌陷岩层岩性);
            $("#mdtxychdDmtx").text(obj.冒顶塌陷岩层厚度);
            $("#mdtxdxswmsDmtx").text(obj.冒顶塌陷地下水位埋深);
            $("#mdtxkchdDmtx").text(obj.冒顶塌陷矿层厚度);
            $("#mdtxkcsjDmtx").text(obj.冒顶塌陷开采时间);
            $("#mdtxkcsdDmtx").text(obj.冒顶塌陷开采厚度);
            $("#mdtxkcaihdDmtx").text(obj.冒顶塌陷开采深度);
            $("#mdtxkcffDmtx").text(obj.冒顶塌陷开采方法);
            $("#mdtxgzmtjsdDmtx").text(obj.冒顶塌陷工作面推进速度);
            $("#mdtxcclDmtx").text(obj.冒顶塌陷采出量);
            $("#mdtxdbglffDmtx").text(obj.冒顶塌陷顶板管理方法);
            //$("#mdtxcfcdUP input[type=radio]:checked").val(obj.冒顶塌陷重复采动);
            $("#mdtxcfcd input[type=radio]").each(function() {
                if ($(this).val() == "true" && obj.冒顶塌陷重复采动) {
                    $(this).attr("checked", true);
                } else if ($(this).val() == "false" && !obj.冒顶塌陷重复采动) {
                    $(this).attr("checked", true);
                }
            });


            $("#mdtxckqxtDmtx").text(obj.冒顶塌陷采空区形态);
            $("#mdtxckqgmDmtx").text(obj.冒顶塌陷采空区规模);
            //冒顶塌陷诱发动力因素
            if (obj.冒顶塌陷诱发动力因素 != null) {
                $("#mdtxYouFaYinSu input[type=checkbox]").each(function() {
                    if (obj.冒顶塌陷诱发动力因素.indexOf($(this).val()) >= 0) {
                        $(this).attr("checked", true);
                    }
                });
            }

        }

        //岩溶型塌陷
        if ($("#yrxtxdmtx")[0].checked) {
            $("#yrtxdcsdDmtx").text(obj.岩溶塌陷地层时代);
            $("#yrtxdcyxDmtx").text(obj.岩溶塌陷地层岩性);
            $("#yrtxycqxDmtx").text(obj.岩溶塌陷岩层倾向);
            $("#yrtxycqjDmtx").text(obj.岩溶塌陷岩层倾角);
            $("#yrtxdlqkDmtx").text(obj.岩溶塌陷断裂情况);
            $("#yrtxrdfyqkDmtx").text(obj.岩溶塌陷溶洞发育情况);
            //岩溶塌陷岩层发育程度 $("#rybtycfycdUP input[type=radio]:checked").val();
            if (obj.岩溶塌陷岩层发育程度 != null) {
                $("#rybtycfycd input[type=radio]").each(function() {
                    if (obj.岩溶塌陷岩层发育程度 == $(this).val()) {
                        $(this).attr("checked", true);
                    }
                });
            }
            $("#yrtxtdrdmsDmtx").text(obj.岩溶塌陷塌顶溶洞埋深);
            $("#yrtxdxswmsDmtx").text(obj.岩溶塌陷地下水位埋深);
            //岩溶塌陷诱发动力因素
            if (obj.岩溶塌陷诱发动力因素 != null) {
                $("#rytxyfdlys input[type=checkbox]").each(function() {
                    if (obj.岩溶塌陷诱发动力因素.indexOf($(this).val()) >= 0) {
                        $(this).attr("checked", true);
                    }
                });
            }
        }

        //土洞型塌陷
        if ($("#tdxtxdmtx")[0].checked) {
            $("#tdtxdctxDmtx").text(obj.土洞塌陷单层土性);
            $("#tdtxdcthDmtx").text(obj.土洞塌陷单层土厚);
            $("#tdtxscsbtxDmtx").text(obj.土洞塌陷双层上部土性);
            $("#tdtxscsbthDmtx").text(obj.土洞塌陷双层上部土厚);
            $("#tdtxscxbtxDmtx").text(obj.土洞塌陷双层下部土性);
            $("#tdtxscxbthDmtx").text(obj.土洞塌陷双层下部土厚);
            $("#tdtxxfjysdDmtx").text(obj.土洞塌陷下伏基岩时代);
            $("#tdtxxfjyyxDmtx").text(obj.土洞塌陷下伏基岩岩性);
            $("#tdtxdxswmsDmtx").text(obj.土洞塌陷地下水位埋深);
            $("#jwtxqfxDmtx").text(obj.井位塌陷区方向);
            $("#jwtxqjlDmtx").text(obj.井位塌陷区距离);
            $("#jwtxqcsjsDmtx").text(obj.井位塌陷区抽水降深);
            $("#jhswtxqrcslDmtx").text(obj.井位塌陷区日出水量);
            $("#jhswtxqfxDmtx").text(obj.江河水位塌陷区方向);
            $("#jhswtxqjlDmtx").text(obj.江河水位塌陷区距离);
            $("#jhswtxqswbfDmtx").text(obj.江河水位塌陷区水位变幅);
            //江河水位塌陷区变化类型 = $("#jhswtxqbhlxDmtxUP input[type=radio]:checked").val();
            if (obj.江河水位塌陷区变化类型 != null) {
                $("#jhswtxqbhlxDmtx input[type=radio]").each(function() {
                    if (obj.江河水位塌陷区变化类型 == $(this).val()) {
                        $(this).attr("checked", true);
                    }
                });
            }
            //土洞塌陷诱发动力因素
            if (obj.土洞塌陷诱发动力因素 != null) {
                $("#tddlYouFaYinSu input[type=checkbox]").each(function() {
                    if (obj.土洞塌陷诱发动力因素.indexOf($(this).val()) >= 0) {
                        $(this).attr("checked", true);
                    }
                });
            }
        }
        $("input").each(function() {
            if ($(this).attr("checked") == "checked") {

            } else {
                $(this).next("label").css("color", "#999");
            }
        })

        var planImg = [];
        var profileImg = [];
        var baseImg = [];
        var videoArrs = [];
        var ImgsIds = obj.IDs;
        var IdsArr = null;
        var PathsArr = null;
        var TypesArr = null;
        if (ImgsIds != null && ImgsIds != "") {
            IdsArr = ImgsIds.split('&');
            PathsArr = obj.DiskPaths.split('&');
            TypesArr = obj.DisaIdNums.split('&');
            for (var j = 0; j < IdsArr.length; j++) {
                var img = {};
                img.ID = IdsArr[j];
                img.DisaId = obj.统一编号;
                img.DisaIdNum = TypesArr[j];
                img.DiskPath = PathsArr[j];
                if (img.DisaIdNum == "1") {
                    planImg.push(img);
                } else if (img.DisaIdNum == "2") {
                    profileImg.push(img);
                } else if (img.DisaIdNum == "3") {
                    baseImg.push(img);
                } else if (img.DisaIdNum == "4") {
                    videoArrs.push(img);
                }
            }
        }
        UpDataPicFun("planDmtx", planImg);
        UpDataPicFun("profileDmtx", profileImg);
        UpDataPicFun("dmtx_BaseImg", baseImg);
        UpBaseVideoFun("dmtx_Videos", "视频", obj.统一编号, false, videoArrs);
    });
}