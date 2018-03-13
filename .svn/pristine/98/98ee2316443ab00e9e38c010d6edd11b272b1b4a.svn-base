var dateValCache = new Array();
var bscValCache = new Array();
var cellValCache = new Array();
var date, time, bsc, cell, chgr;
var charts = new Array();
$(document).ready(function () {

    $("#searchBtn").click(function () {
        if ($("#dateSelect").val() == '-1' || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        getMrr();
        $("#chart1").children().remove();
        $("#chart2").children().remove();
        $("#chart3").children().remove();
        changeTab(1);
        $("#mrrDiv").css("display", "");
    });

    $("#exportBtn").click(function () {
        if ($("#dateSelect").val() == '-1' || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        exportMrr();
    });

    $("#deleteBtn").click(function () {
        if ($("#dateSelect").val() == '-1' || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        deleteMrr();
    });

    $("#li-1").click(function () {
        $("#tab-1").css("display", "");
        $("#mrrDiv").css("display", "");
    });

    $("#li-2").click(function () {
        changeTab(2);
    });

    $("#li-3").click(function () {
        changeTab(3);
    });

    $("#li-4").click(function () {
        changeTab(4);
    });

    popUp();

})

function popUp() {

    var thisDom;
    //日期多选
    $("#dateBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择日期");
        thisDom = "dateSelect";
        if (dateValCache == '') {
            $.ajax({
                url: 'getMOAllDate',
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
                    } else {

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

    //网元多选
    $("#bscBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择网元");
        thisDom = "bscSelect";

        if (bscValCache == '') {
            $.ajax({
                url: 'getMOAllBsc',
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
                    } else {

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
            if (bscVal[i] != -1 && bscVal[i].trim() != '') {
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
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择小区");
        thisDom = "cellSelect";

        if (cellValCache == '') {
            $.ajax({
                url: 'getMOAllCell',
                dataType: 'json',
                data: $("#dateSelect").val(),
                type: 'get',
                success: function (data) {
                    $('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            var one = data[i];
                            $('#search').append("<option>" + one + "</option>");
                            cellValCache[i] = one;
                        }
                    } else {

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
            if (cellVal[i] != -1 && cellVal[i].trim() != '') {
                $('#search_to').append("<option>" + cellVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

    });

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

//导出按钮
function exportMrr() {
    $("#mrrForm").submit();
}

//删除按钮
function deleteMrr() {
    $.ajax({
        url: 'deleteMrr',
        dataType: 'json',
        data: {
            dateSelect: $("#dateSelect").val()
        },
        type: 'get',
        success: function (data) {
            if (data >= 0) {
                showInfoInAndOut("success", "删除完成！");
                $("#mrrForm").attr("action", "mrrOriginalPage");
                $("#mrrForm").attr("method", "get");
                $("#mrrForm").submit();
            } else {
                showInfoInAndOut("info", "删除失败！");
            }
        }
    });
}

/**
 * 列表显示
 */
function showMrr(raw) {
    var data = eval("(" + raw + ")");
    $("#mrrTable").children().remove();
    if (data.data.length != 0) {
        var optHtml = "<thead><tr>";
        $.each(data.data, function (n, one) {
            if (n == 0) {
                $.each(one, function (k, v) {
                    optHtml += "<th>" + k + "</th>";
                })
            }
        });

        optHtml += "<th>操作</th></tr></thead><tbody>";//<th>图表</th>

        $.each(data.data, function (n, one) {
            optHtml += "<tr>";// ondblclick='showChart(this)'
            $.each(one, function (k, v) {
                if (v != null) {
                    optHtml += "<td>" + v + "</td>";
                } else {
                    optHtml += "<td>" + '' + "</td>";
                }
            });
            optHtml += "<td><a class='a-btn' onclick='showChart(this)'>查看图表</a></td></tr>";
        });

        optHtml += "</tbody>";
        //console.log(optHtml);
        $("#loading").css("display", "none");
        $("#mrrTable").append(optHtml);

        // 设置隐藏的page信息
        setFormPageInfo("mrrForm", data);

        // 设置分页面板
        setPageView(data, "mrrDiv");
    } else {
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data, "mrrDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

/**
 * 按条件查询干扰矩阵
 */
function getMrr() {
    // 重置分页条件
    initFormPage('mrrForm');
    // 提交表单
    sumbitCondition();
}

/**
 * 提交表单
 */
function sumbitCondition() {
    $("#loading").show();
    $("#mrrForm").ajaxSubmit({
        url: 'showTable',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showMrr(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            $("#mrrTable").children().remove();
            initFormPage('mrrForm');
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

//展示图表
function showChart(id) {
    date = $(id).parent().parent().find('td:eq(0)').text();
    time = $(id).parent().parent().find('td:eq(1)').text();
    bsc = $(id).parent().parent().find('td:eq(2)').text();
    cell = $(id).parent().parent().find('td:eq(3)').text();
    chgr = $(id).parent().parent().find('td:eq(4)').text();
    showLevel();
    showQuality();
    showTA();
}

//展示电平图表
function showLevel() {
    var x = [];
    for (var i = 0; i < 64; i++) {
        x[i] = i - 110;
    }
    var ulData = [], dlData = [];
    var ulAvg = [], dlAvg = [];
    var ul94 = [], dl94 = [];

    $.ajax({
        url: 'getLevel',
        dataType: 'json',
        async: false,
        data: {date: date, time: time, bsc: bsc, cell: cell, chgr: chgr},
        type: 'post',
        success: function (data) {
            if (data.length != 0) {
                var m = -1, n = -1, x = -1, y = -1;
                $.each(data[0], function (k, v) {
                    if (k.indexOf("RxLevUL") != -1) {
                        m++;
                        x++;
                        ulData[m] = v ? v : 0;
                        ulAvg[m] = v ? v * (-110 + m) : 0;
                        if (m > 15) {
                            ul94[x] = v ? v : 0;
                        }
                    }
                    if (k.indexOf("RxLevDL") != -1) {
                        n++;
                        y++;
                        dlData[n] = v ? v : 0;
                        dlAvg[n] = v ? v * (-110 + n) : 0;
                        if (n > 15) {
                            dl94[y] = v ? v : 0;
                        }
                    }
                });
            } else {
                showInfoInAndOut("info", "找不到相应数据！");
                return;
            }
        }
    });
    //console.log("x="+x.length);
    //console.log("ul="+ulData.length);
    //console.log("dl="+dlData.length);
    var domId = document.getElementById("chart1");
    var myChart = echarts.init(domId);
    charts[0] = myChart;
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: cell + '小区CHGR=' + chgr + '的电平情况，-94dbm上行覆盖率=' + (100 * ul94.sum() / (ulData.sum() + 0.00001)).toFixed(2)
            + '%，-94dbm下行覆盖率=' + (100 * dl94.sum() / (dlData.sum() + 0.00001)).toFixed(2) + '%，上行平均电平='
            + (ulAvg.sum() / (ulData.sum() + 0.00001)).toFixed(2) + 'dbm，下行平均电平='
            + (dlAvg.sum() / (dlData.sum() + 0.00001)).toFixed(2) + 'dbm',
            textStyle: {
                fontSize: 14,
                fontWeight: 'bold',
            },
            top: 20,
            left: '10%'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['RxlevUL', 'RxlevDL'],
            top: 20,
            right: '10%'
        },
        xAxis: {
            data: x,
            boundaryGap: false,
            axisTick: {
                interval: 0
            }
        },
        yAxis: {},
        series: [{
            name: 'RxlevUL',
            type: 'line',
            data: ulData
        },
            {
                name: 'RxlevDL',
                type: 'line',
                data: dlData
            },]
    };

    myChart.setOption(option);

    $("#li-1").removeClass("active");
    $("#li-2").addClass("active");
    $("#tab-1").css("display", "none");
    $("#tab-2").css("display", "");
    $("#tab-2").addClass("active");
    $("#mrrDiv").css("display", "none");
}

//展示质量图表
function showQuality() {
    var x = [];
    for (var i = 0; i < 8; i++) {
        x[i] = i;
    }
    var ulData = [], ul5Data = [];
    var dlData = [], dl5Data = [];

    $.ajax({
        url: 'getQuality',
        dataType: 'json',
        async: false,
        data: {date: date, time: time, bsc: bsc, cell: cell, chgr: chgr},
        type: 'post',
        success: function (data) {
            if (data.length != 0) {
                var m = -1, n = -1;
                $.each(data[0], function (k, v) {
                    if (k.indexOf("RxQualUL") != -1) {
                        m++;
                        ulData[m] = v ? v : 0;
                        if (m < 6) {
                            ul5Data[m] = v ? v : 0;
                        }
                    }
                    if (k.indexOf("RxQualDL") != -1) {
                        n++;
                        dlData[n] = v ? v : 0;
                        if (n < 6) {
                            dl5Data[n] = v ? v : 0;
                        }
                    }
                });
            } else {
                showInfoInAndOut("info", "找不到相应数据！");
                return;
            }
        }
    });
    //console.log("x="+x.length);
    //console.log("ul="+ulData.length);
    //console.log("dl="+dlData.length);
    var domId = document.getElementById("chart2");
    var myChart = echarts.init(domId);
    charts[1] = myChart;
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: cell + '小区CHGR=' + chgr + '的质量情况，0-5上行质量=' + (100 * ul5Data.sum() / (ulData.sum() + 0.00001)).toFixed(2)
            + '%，0-5下行质量=' + (100 * dl5Data.sum() / (dlData.sum() + 0.00001)).toFixed(2) + '%',
            textStyle: {
                fontSize: 14,
                fontWeight: 'bold',
            },
            top: 20,
            left: '10%'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['RxqualUL', 'RxqualDL'],
            top: 20,
            right: '10%'
        },
        xAxis: {
            data: x
        },
        yAxis: {},
        series: [{
            name: 'RxqualUL',
            type: 'bar',
            data: ulData
        },
            {
                name: 'RxqualDL',
                type: 'bar',
                data: dlData
            },]
    };

    myChart.setOption(option);
}

//展示TA图表
function showTA() {
    var x = [];
    for (var i = 0; i < 76; i++) {
        x[i] = "TA" + i;
    }
    var ta = [];
    var maxTA = 0;

    $.ajax({
        url: 'getTA',
        dataType: 'json',
        async: false,
        data: {date: date, time: time, bsc: bsc, cell: cell, chgr: chgr},
        type: 'post',
        success: function (data) {
            if (data.length != 0) {
                var m = -1;
                $.each(data[0], function (k, v) {
                    if (k.indexOf("TA") != -1) {
                        m++;
                        if (v != null) {
                            ta[m] = v;
                            if (v > 0) {
                                maxTA = m;
                            }
                        } else {
                            ta[m] = 0;
                        }
                    }
                });
            } else {
                showInfoInAndOut("info", "找不到相应数据！");
                return;
            }
        }
    });
    //console.log("x="+x.length);
    //console.log("ta="+ta.length);
    var domId = document.getElementById("chart3");
    var myChart = echarts.init(domId);
    charts[2] = myChart;
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: cell + '小区CHGR=' + chgr + "的TA分布，最大TA=" + maxTA,
            textStyle: {
                fontSize: 14,
                fontWeight: 'bold',
            },
            top: 20,
            left: '10%'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['TA'],
            top: 20,
            right: '10%'
        },
        xAxis: {
            type: 'category',
            data: x,
            axisTick: {
                alignWithLabel: true,
                interval: 0
            }
        },
        yAxis: {},
        series: [{
            name: 'TA',
            type: 'bar',
            data: ta
        }]
    };

    myChart.setOption(option);
}

//响应切换标签页
function changeTab(id) {
    $("#mrrDiv").css("display", "none");
    $("#li-" + id).siblings().removeClass("active");
    $("#li-" + id).addClass("active");
    $("#tab-" + id).siblings().css("display", "none");
    $("#tab-" + id).css("display", "");
    $("#tab-" + id).addClass("active");
}
