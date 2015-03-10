$(function () {
    $(window).load(function () {
        init();
    });
    var flag = 0;//标记选项卡的切换
    var temp = 1;//标记柱状图、饼图的切换
    /*点击按市县统计时的事件*/
    $("#shixian").click(function () {
        flag = 0;
        $("#shixian").removeClass("unselected").addClass("selected");
        $("#zaihai").removeClass("selected").addClass("unselected");
        $("#List_xian").attr("disabled", false);
        $("#List_xian option").eq(0).attr("selected", true);
        init();
    });
    /*点击按灾害统计时的事件*/
    $("#zaihai").click(function () {
        flag = 1;
        $("#zaihai").removeClass("unselected").addClass("selected");
        $("#shixian").removeClass("selected").addClass("unselected");
        $("[name=statisName]:checkbox").attr("disabled", false);
        $("#List_xian").attr("disabled", true);
        $("#List_xian option").eq(0).attr("selected", true);
        init();
    });
    $("#statis_submit").click(function () {
        init();
    });
    $("#img_zzt").click(function () {
        temp = 0;
        init();
    });
    $("#img_bzt").click(function () {
        temp = 1;
        init();
    });
    var quxianName = ["市辖区","高新区", "历下区", "市中区", "槐荫区", "天桥区", "历城区", "长清区", "平阴县", "济阳县", "商河县", "章丘市"];
    var quxian = ["370101", "370188","370102", "370103", "370104", "370105", "370112", "370113", "370124", "370125", "370126", "370181"];
    function init() {
        var xianName = $("#List_xian option:selected").val();
        var xianName_str = quxian.join(",");
        var zhName = new Array();
        var zhName_str = "";
        $("[name=statisName]:checkbox:checked").each(function () {
            var str = $(this).val();
            zhName.push(str);
        });
        zhName_str = zhName.join(",");
        if (flag == 0&&xianName != "") {
            postXianName(xianName, zhName_str, zhName);
        }
        else {
            postXianName(xianName_str, zhName_str, zhName);
        }
    }
    /*发送post请求*/
    function postXianName(xianName_str, zhName_str, zhName) {
        $.post(baseUrl + "DisasterStatistic/GetCountByCodeType", {
            regionCode: xianName_str,
            disaType: zhName_str
        }, function (data) {
            var d = [];
            if (flag == 0) {
                if (data.length == 1) {
                    d = data[0].list;
                }
                else {
                    for (i = 0; i < data[0].list.length; i++) {
                        d[i] = 0;
                        for (j = 0; j < data.length; j++)
                            d[i] += data[j].list[i];
                    }
                }
                if (temp == 0) {     
                    creatColumn_quxian(d, zhName);
                }
                else {
                    creatPie_quxian(d, zhName);
                }
            }
            else {
                if (temp == 0) {
                    for (i = 0; i < data[0].list.length; i++)
                    {
                        d[i]=new Array();
                        for (j = 0; j < data.length; j++)
                        {
                            d[i].push(data[j].list[i]);
                        }
                    }
                    createColumn_zhlx(quxianName, zhName, d);
                }
                else {
                    for (i = 0; i < data.length; i++)
                    {
                        d[i] = 0;
                        for (j = 0; j < data[i].list.length; j++)
                            d[i] += data[i].list[j];
                    }
                    creatPie_quxian(d, quxianName);
                }
            }
        });
    }
    /*按市县统计时，初始化柱状图数据*/
    function initColumn_quxian(data, name) {
        var str = "";
        var color = ['#4690B2', '#0E63BA', '#187BCF', '#217D91', '#304894', '#322487', '#286692'];
        for (i = 0; i < name.length; i++) {
            str += "{name: '" + name[i] + "', y: " + data[i] + ", color: '" + color[i] + "'},";
        }
        var str3 = "[" + str + "]";
        var data_all = eval('(' + str3 + ')');
        return data_all;
    }
    /*按市县统计时，初始化饼图数据*/
    function initPie_quxian(data, name) {
        var str_pie = "";
        var zhd_color = ['#4690B2', '#0E63BA', '#187BCF', '#217D91', '#304894', '#322487', '#286692', '#67B2F2', '#4855AF', '#815FDB', '#5AB4E0'];
        for (i = 0; i < name.length; i++) {
            str_pie += "{name: '" + name[i] + "', y: " + data[i] + ", color: '" + zhd_color[i] + "'},";
        }
        var str1 = "[" + str_pie + "]";
        var data_pie = eval('(' + str1 + ')');
        return data_pie;
    }
    /*按灾害类型统计时，初始化柱状图数据*/
    function initColumn_zhlx(zhlx, data) {
        var str = "";
        var ld_color = ['#4690B2', '#0E63BA', '#187BCF', '#217D91', '#304894', '#322487', '#286692'];
        for (i = 0; i < zhlx.length; i++) {
            str += "{name: '" + zhlx[i] + "',data: [" + data[i] + "], color: '" + ld_color[i] + "'},";
        }
        var str2 = "[" + str + "]";
        var data_ld = eval('(' + str2 + ')');
        return data_ld;
    }
    /*按市县统计时，创建柱状图*/
    function creatColumn_quxian(data, name) {
        var data_all = initColumn_quxian(data, name);
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'statistic',
                backgroundColor: '#F5F5F5',
                plotBackgroundColor: '#F5F5F5',
                type: 'column'
            },
            title: {
                text: '济南市地质灾害数据统计',
                style: {
                    color: '#3e576f',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    shadow: false
                }
            },
            xAxis: {
                categories: name,
                tickLength: 0,
                lineColor: '#5F4E66',
                lineWidth: 2
            },
            yAxis: {
                min: 0,
                max: 130,
                title: {
                    text: '(个)',
                    align: 'high',
                    rotation: 0,
                    offset: 0,
                    y: -7,
                    style: {
                        color: '#262626',
                        fontSize: '11px',
                        fontWeight: 'normal'
                    }
                },
                tickPositions: [0, 50, 100],
                lineColor: '#5F4E66',
                lineWidth: 2,
                endOnTick: false
            },
            legend: {
                enabled: false
            },
            tooltip: {         //提示工具的样式
                formatter: function () {
                    return '<b>' + this.point.name + ':' + this.point.y + '个';
                }
            },
            series: [{
                type: 'column',
                data: data_all
            }]
        });
    }
    /*按市县、灾害类型统计时，创建饼图*/
    function creatPie_quxian(data, name) {
        var data_zhlxpie = initPie_quxian(data, name);
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'statistic',
                plotBackgroundColor: '#F5F5F5',         //绘图区背景色
                plotBorderWidth: null,
                backgroundColor: '#F5F5F5',
                plotShadow: false
            },
            title: {
                text: '济南市地质灾害数据统计',
                style: {
                    color: '#3e576f',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }
            },
            tooltip: {         //提示工具的样式
                formatter: function () {
                    return '<b>' + this.point.name + '</b>: ' + this.percentage.toFixed(1) + ' %';
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function () {
                            return '<b>' + this.point.name + ':' + this.point.y + '个受灾点，占</b>: ' + this.percentage.toFixed(1) + ' %';
                        }
                    },
                    showInLegend: true
                }
            },
            legend: {
                backgroundColor: '#E7E7E7',
                borderColor: '#E7E7E7',
                borderRadius: 0,
                enabled: true,
                verticalAlign: 'top',
                y: 50,
                padding: 8,
                symbolWidth: 20
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: data_zhlxpie
            }]
        });
    }
    /*按灾害类型统计时，创建柱状图*/
    function createColumn_zhlx(name, zhlx, data) {
        var data_zhlx = initColumn_zhlx(zhlx, data);
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'statistic',
                type: 'column',
                backgroundColor: '#F5F5F5',
                plotBackgroundColor: '#F5F5F5'
            },
            title: {
                text: '济南市地质灾害数据统计',
                style: {
                    color: '#3e576f',
                    //color:'#fff400',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }
            },
            xAxis: {
                categories: name,
                tickLength: 0,
                lineColor: '#5F4E66',
                lineWidth: 2
            },
            yAxis: {
                min: 0,
                max: 130,
                title: {
                    text: '(个)',
                    align: 'high',
                    rotation: 0,
                    offset: 0,
                    y: -7,
                    style: {
                        color: '#262626',
                        fontSize: '11px',
                        fontWeight: 'normal'
                    }
                },
                tickPositions: [0, 50, 100], // 定义轴刻度
                lineColor: '#5F4E66',
                lineWidth: 2,
                maxPadding: 1,
                tickPixelInterval: 100,
                endOnTick: false
            },
            legend: {
                backgroundColor: '#E7E7E7',
                borderColor: '#E7E7E7',
                borderRadius: 0,
                verticalAlign: 'top',
                y: 50,
                floating: true,
                padding: 8,
                symbolWidth: 20
            },
            tooltip: {
                formatter: function () {
                    return '' + this.series.name + ': ' + this.y + '个';
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    shadow: false
                }
            },
            series: data_zhlx
        });
    }
   
});
