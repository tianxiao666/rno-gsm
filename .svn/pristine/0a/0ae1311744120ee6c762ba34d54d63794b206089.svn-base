var cellValCache = new Array();
var bscValCache = new Array();
var dateValCache = new Array();

$(document).ready(function () {

    popUp();

    $("#searchBtn").click(function () {
        if ($("#dateSelect").val() == '-1' || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        } else if ($("#cellSelect").val() === '-1' || $("#cellSelect").val().trim() ==="") {
            showInfoInAndOut("info", "请选择小区！");
            return;
        }
        getFAS();
    });

    $("#exportBtn").click(function () {
        if ($("#cellSelect").val() == '-1' || $("#cellSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        } else if ($("#cellSelect").val() == '-1' || $("#cellSelect").val() == null) {
            showInfoInAndOut("info", "请选择小区！");
            return;
        }
        exportFAS();
    });

    showError();
})

function showError() {
    if ($("#error").val() == "error") {
        showInfoInAndOut("info", "不存在当前表！");
        $("#error").val("");
    }
}

function popUp() {
    var thisDom;
    //日期多选
    $("#dateButton").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');

        $("#myModalLabel").text("选择日期");
        thisDom = "dateSelect";

        if (dateValCache == '') {
            $.ajax({
                url: 'fasDate',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    $('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            var one = data[i];
                            $('#search').append("<option>" + one + "</option>");
                            dateValCache[i] = one;
                        }
                    }
                }
            });
        } else {
            $.each(dateValCache, function (index, value) {
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选" + (dateValCache.length) + "个,双击可添加");
        }

        var dateVal = $("#dateSelect").val().split(",");
        for (var i = 0; i < dateVal.length; i++) {
            if (dateVal[i] != -1) {
                $('#search_to').append("<option>" + dateVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

    });

    //bsc多选
    $("#bscButton").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $("#myModalLabel").text("选择网元");
        thisDom = "bscSelect";

        if (bscValCache == '') {
            $.ajax({
                url: 'fasBsc',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    $('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            var one = data[i];
                            $('#search').append("<option>" + one + "</option>");
                            bscValCache[i] = one;
                        }
                    }
                }
            });
        } else {
            $.each(bscValCache, function (index, value) {
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选" + (bscValCache.length) + "个,双击可添加");
        }

        var bscVal = $("#bscSelect").val().split(",");
        for (var i = 0; i < bscVal.length; i++) {
            if (bscVal[i] != -1 &&bscVal[i].trim() != "") {
                $('#search_to').append("<option>" + bscVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

    });

    //小区多选
    $("#cellBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');

        $("#myModalLabel").text("选择小区");
        thisDom = "cellSelect";

        if (cellValCache == '') {
            $.ajax({
                url: 'fasCell',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    $('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            var one = data[i];
                            $('#search').append("<option>" + one + "</option>");
                            cellValCache[i] = one;
                        }
                    }
                }
            });
        } else {
            $.each(cellValCache, function (index, value) {
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选" + (cellValCache.length) + "个,双击可添加");
        }

        var cellVal = $("#cellSelect").val().split(",");
        for (var i = 0; i < cellVal.length; i++) {
            if (cellVal[i] != -1 && cellVal[i].trim() !="") {
                $('#search_to').append("<option>" + cellVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

    });

    //确定按钮
    $('#ensure').click(function () {
        //$("#" + thisDom).children().remove();
        var html = "";
        $("#search_to option").each(function (index) {
            if (index == 0) {
                html += $(this).val();
            } else {
                html += "," + $(this).val();
            }
        });

        if(thisDom=="cellSelect" || thisDom == "bscSelect"){
            $("#"+thisDom).val(html);
            $('#myModal').modal('hide');
            return;
        }

        $("#" + thisDom + " option[style='display:none']").remove();
        //console.log("html="+html+","+html.length+","+"".length);
        if (html.length == 0) {
            if ($("#" + thisDom).val() != -1) {
                $("#" + thisDom + " option:selected").remove();
            }
            $("#" + thisDom + " option[value='-1']").attr("selected", "selected");
        } else {
            var arr = html.split(",");
            var flag = false;
            //console.log(arr.length);
            if (arr.length == 1) {
                $("#search option").each(function () {
                    if (html == $(this).val()) {
                        $("#" + thisDom + " option[value='" + $(this).val() + "']").attr("selected", "selected");
                        flag = true;
                    }
                    //console.log($("#" + thisDom).val());
                })
            } else {
                $("#" + thisDom).prepend("<option selected='selected' style='display:none'>" + html + "</option>");
            }
            if (flag) {
                $("#" + thisDom).prepend("<option selected='selected' style='display:none'>" + html + "</option>");
            }
        }
        $('#myModal').modal('hide');
    })
}

/**
 * 按条件查询显示
 */
function getFAS() {
    // 重置分页条件
    initFormPage('fasForm');
    //重置tab
    document.getElementById('li-1').className = "active";
    document.getElementById('tab-1').className = "tab-pane active";
    document.getElementById('li-2').className = "";
    document.getElementById('tab-2').className = "tab-pane";
    // 提交表单
    sumbitCondition();
}

function sumbitCondition() {
    $("#loading").show();
    $("#fasForm").ajaxSubmit({
        url: 'queryFAS',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showFAS(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            $("#fasTable").children().remove();
            initFormPage('fasForm');
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}


/**
 * 按条件导出结果
 */
function exportFAS() {
    $("#fasForm").submit();
}

/*
 * 数据显示
 * */
function showFAS(raw) {
    $("#FASchart").children().remove();
    var data = eval("(" + raw + ")");
    $("#fasTable").children().remove();
    if (data['data'].length != 0) {
        $("#loading").css("display", "none");
        var optHtml = "<thead><tr><th>日期</th><th>时间</th><th>CELL</th><th>操作</th></thead><tbody>";
        for (var i = 0; i < data['data'].length; i++) {
            var one = data['data'][i];
            optHtml += "<tr><td id=" + "date" + i + ">" + one['日期'] + "</td><td id=" + "time" + i + ">" + one['时间'] + "</td><td id=" + "cell" + i + ">" + one['CELL'] + "</td><td>" + '<a href="JavaScript:void(0)" onclick="showChart(' + i + ')">查看图例</a>' + "</td></tr>";
        }
        optHtml += "</tbody>";
        //console.log(optHtml);
        $("#fasTable").append(optHtml);
        // 设置隐藏的page信息
        setFormPageInfo("fasForm", data['page']);
        // 设置分页面板
        setPageView(data['page'], "fasDiv");
    } else {
        $("#loading").css("display", "none");
        setPageView(data['page'], "fasDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

//提交图例请求
function showChart(index) {
    var date = document.getElementById("date" + index).innerText;
    var time = document.getElementById("time" + index).innerText;
    var cell = document.getElementById("cell" + index).innerText;
    var titlePart = cell + "小区FAS测量干扰情况,"
    $.ajax({
        type: "POST",
        data: {date: date, time: time, cell: cell},
        url: 'getChart',
        success: function (raw) {
            $("#FASchart").children().remove();
            //关闭tab-1打开tab-2
            document.getElementById('li-1').className = "";
            document.getElementById('tab-1').className = "tab-pane";
            document.getElementById('li-2').className = "active";
            document.getElementById('tab-2').className = "tab-pane active";
            showFASEchart(raw, titlePart);
        }
    })
}

/**
 * 图表显示
 */
function showFASEchart(raw, titlePart) {
    var data = raw;
    if (data['chartA'].length != 0 || data['chartB'].length != 0) {
        var myChart = echarts.init(document.getElementById('FASchart'));
        console.log(data);
        var option;
        option = {
            title: {
                text: titlePart + getTitlePart(data),
                textStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                },
                top: 20,
                left: '10%'
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'line' | 'shadow '// 默认为直线line，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['AVPERCENTILE', 'AVMEDIAN'],
                top: 20,
                right: '10%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: showLineXais(),
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    position: 'left'
                },
                {
                    type: 'value',
                    min: 0,
                    position: 'right'
                }
            ],
            series: [
                {
                    name: 'AVPERCENTILE',
                    type: 'bar',
                    barGap: '-100%',
                    yAxis: 1,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#6495ED'
                            }, {
                                offset: 1,
                                color: '#87CEEB'
                            }]),
                        }
                    },
                    data: avpercentitle(data)
                },
                {
                    name: 'TCH',
                    type: 'bar',
                    yAxis: 1,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#76EE00'
                            }, {
                                offset: 1,
                                color: '#B4EEB4'
                            }]),
                        }
                    },
                    data: tchData(data)
                },
                {
                    name: 'BCCH',
                    type: 'bar',
                    yAxis: 1,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#EE2C2C'
                            }, {
                                offset: 1,
                                color: '#E9967A'
                            }]),
                        }
                    },
                    data: bcchData(data)
                },
                {
                    name: 'AVMEDIAN',
                    type: 'line',
                    yAxisIndex: 1,
                    itemStyle: {normal: {color: '#8A2BE2'}},
                    data: avmedianData(data)
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    } else {
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

//获取折线图的x轴数据
function showLineXais() {
    var saveSelect = new Array();
    for (var i = 0; i < 95; i++) {
        saveSelect[i] = i + 1;
    }
    return saveSelect;
}

//获取titles部分数据
function getTitlePart(data) {
    var array = new Array;
    var bcch;
    for (var i = 0; i < data['chartB'].length; i++) {
        var one = data['chartB'][i];
        if (one['dchno'].indexOf("&") != -1) {
            var tmp = one['dchno'].split("&")
            for (var t = 0; t < tmp.length; t++) {
                array.push(tmp[t]);
            }
        } else {
            array.push(one['dchno'])
        }
        bcch = one['bcchno'];
    }
    array.sort();
    var title = "频点=";
    for (var j = 0; j < array.length; j++) {
        title += array[j];
        if (j < array.length - 1) {
            title += ","
        }
    }
    title += ",其中bcch=" + bcch
    return title;
}

//AVMEDIAN数据
function avmedianData(data) {
    var avmedian = new Array;
    for (var i = 0; i < data['chartA'].length; i++) {
        var one = data['chartA'][i];
        avmedian.push(one['AVMEDIAN']);
    }
    return avmedian;
}

//获取avpercentitle数据
function avpercentitle(data) {
    var avpercentitle = new Array;
    for (var i = 0; i < data['chartA'].length; i++) {
        var one = data['chartA'][i];
        avpercentitle.push(one['AVPERCENTILE']);
    }
    return avpercentitle;
}
//获取dch数据
function tchData(data) {
    var tch = new Array;
    var bcchno;
    var array = new Array;
    var tchArray = new Array;
    for (var i = 0; i < data['chartB'].length; i++) {
        var one = data['chartB'][i];
        if (one['dchno'].indexOf("&") != -1) {
            var tmp = one['dchno'].split("&")
            for (var t = 0; t < tmp.length; t++) {
                array.push(tmp[t]);
            }
        } else {
            array.push(one['dchno']);
        }
        bcchno = one['bcchno'];
    }
    for (var j = 0; j < array.length; j++) {
        if (array[j] != bcchno) {
            tch.push(array[j]);
        }
    }
    for (var k = 1; k < 96; k++) {
        for (var h = 0; h < tch.length; h++) {
            if (k == tch[h]) {
                var one = data['chartA'][k - 1];
                tchArray[k - 1] = one['AVPERCENTILE'];
            }
        }
    }
    for (var t = 0; t < 95; t++) {
        if (tchArray[t] == null) {
            tchArray[t] = 0;
        }
    }
    return tchArray;
}
//获取bcch数据
function bcchData(data) {
    var bcchno = data['chartB'][0]['bcchno'];
    var bcchArray = new Array;
    for (var k = 1; k < 96; k++) {
        if (k == bcchno) {
            var one = data['chartA'][k - 1];
            bcchArray[k - 1] = one['AVPERCENTILE'];
        }

    }
    for (var t = 0; t < 95; t++) {
        if (bcchArray[t] == null) {
            bcchArray[t] = 0;
        }
    }
    return bcchArray;
}
