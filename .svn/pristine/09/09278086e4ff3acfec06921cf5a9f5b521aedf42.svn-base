var dateValCache = [];
var bscValCache = [];
var cellValCache = [];
$(document).ready(function () {
    $("#searchBtn").click(function () {
        if ($("#dateSelect option:selected").val() == -1 || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        if ($("#cellSelect option:selected").val() === "-1" || $("#cellSelect").val().trim() === "") {
            showInfoInAndOut("info", "请选择小区！");
            return;
        }
        $("#li-1").addClass("active");
        $("#tab-1").addClass("active");
        $("#li-2").removeClass("active");
        $("#tab-2").removeClass("active");
        $("#chart").children().remove();
        getNcs();
    });
    $("#exportBtn").click(function () {
        if ($("#dateSelect option:selected").val() == -1 || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        $("#ncsForm").submit();
    });

    popUp();
});

function popUp() {
    //日期多选
    $("#dateBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');

        $("#myModalLabel").text("选择日期");
        thisDom = "dateSelect";
        if (dateValCache == '') {
            $.ajax({
                url: 'date',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    $('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

                    if (data.length !== 0) {
                        for (var i = 0; i < data.length; i++) {
                            var one = data[i];
                            $('#search').append("<option>" + one + "</option>");
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

        if ($("#dateSelect").val() != null) {
            var dateVal = $("#dateSelect").val().split(",");
            for (var i = 0; i < dateVal.length; i++) {
                if (dateVal[i] != -1) {
                    $('#search_to').append("<option>" + dateVal[i] + "</option>");
                }
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

        $("#myModalLabel").text("选择网元");
        thisDom = "bscSelect";
        if (bscValCache == '') {
            $.ajax({
                url: 'bsc',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    $('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            var one = data[i];
                            $('#search').append("<option>" + one + "</option>");
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

        if ($("#bscSelect").val() != null) {
            var bscVal = $("#bscSelect").val().split(",");
            for (var i = 0; i < bscVal.length; i++) {
                if (bscVal[i] != -1 && cellVal[i].trim() != '') {
                    $('#search_to').append("<option>" + bscVal[i] + "</option>");
                }
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
                url: 'cell',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    $('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

                    if (data.length != 0) {
                        for (var i = 0; i < data.length; i++) {
                            var one = data[i];
                            $('#search').append("<option>" + one + "</option>");
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

        if ($("#cellSelect").val() != null) {
            var cellVal = $("#cellSelect").val().split(",");
            for (var i = 0; i < cellVal.length; i++) {
                if (cellVal[i] != -1 && cellVal[i].trim() != '') {
                    $('#search_to').append("<option>" + cellVal[i] + "</option>");
                }
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
        if (html.length === 0) {
            if ($("#" + thisDom).val() !== -1) {
                $("#" + thisDom + " option:selected").remove();
            }
            $("#" + thisDom + " option[value='-1']").attr("selected", "selected");
        } else {
            var arr = html.split(",");
            var flag = false;
            //console.log(arr.length);
            if (arr.length === 1) {
                $("#search option").each(function () {
                    if (html === $(this).val()) {
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
    });
}

function getNcs() {
    initFormPage('ncsForm');
    submitCondition();
}

function submitCondition() {
    $("#loading").show();
    $("#ncsForm").ajaxSubmit({
        url: 'byPage',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showNcs(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

function showNcs(raw) {
    var data = eval("(" + raw + ")");
    $("#ncsChartForm").children().remove();
    if (data['data'].length != 0) {
        var optHtml = "<table class='table table-hover' id='ncsTable'><thead><tr><th>日期</th><th>时间</th><th>CELL</th><th>操作</th>"
            + "</tr></thead><tbody>";
        var x = 0;
        for (var i = 0; i < data['data'].length; i++) {
            x++;
            var one = data['data'][i];
            optHtml += "<tr><td>" + one['日期'] + "</td><td>" + one['时间'] + "</td><td>" + one['CELL'] + "</td><td><a style='cursor: pointer' " +
                "id='toChart" + x + "'  onclick=viewChart(" + x + ")>查看图例</a></td></tr>";
        }
        optHtml += "</tbody></table><div id='ncsDiv'><nav aria-label='...'>" +
            "<ul class='pagination page-style' style='margin-top: -15px;'>" +
            "<li><a  disabled='true' style='cursor: default'>记录数：<span id='emTotalCnt'>0</span> 条</a></li>" +
            "<li><a  disabled='true' style='cursor: default'>共 <span id='emTotalPageCnt'>0</span>  页</a></li>" +
            "<li><a  ondragstart='return false' style='cursor: pointer' " +
            "onclick='showListViewByPage(\"first\",submitCondition,\"ncsForm\",\"ncsDiv\")'>首页</a></li>" +

            "<li><a  ondragstart='return false' style='cursor: pointer' " +
            "onclick='showListViewByPage(\"back\",submitCondition,\"ncsForm\",\"ncsDiv\")' aria-label='Previous'>" +
            "<span aria-hidden='true'>上一页</span></a></li>" +

            "<li><a disabled='true'>第  <input type='text' id='showCurrentPage' class='paging_input_text form-control' value='0'/> 页</a></li>" +
            "<li><a  ondragstart='return false' style='cursor: pointer'" +
            " onclick='showListViewByPage(\"num\",submitCondition,\"ncsForm\",\"ncsDiv\")'>GO</a></li>" +

            "<li><a  ondragstart='return false' style='cursor: pointer' " +
            "onclick='showListViewByPage(\"next\",submitCondition,\"ncsForm\",\"ncsDiv\")' aria-label='Next'>" +
            "<span aria-hidden='true'>下一页</span></a></li>" +

            "<li><a  ondragstart='return false' style='cursor: pointer' " +
            "onclick='showListViewByPage(\"last\",submitCondition,\"ncsForm\",\"ncsDiv\")'>末页</a></li>" +
            "</ul> </nav></div></div>";
        //console.log(optHtml);
        $("#loading").css("display", "none");
        $("#ncsChartForm").append(optHtml);

        // 设置隐藏的page信息
        setFormPageInfo("ncsForm", data['page']);
        // 设置分页面板
        setPageView(data['page'], "ncsDiv");
    } else {
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data['page'], "ncsDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

function viewChart(x) {

    var rowContent = $("#toChart" + x).parent().siblings();
    var dateCond = rowContent[0].innerHTML;
    var timeCond = rowContent[1].innerHTML;
    var cellCond = rowContent[2].innerHTML;

    $("#ncsChartForm").ajaxSubmit({
        url: 'queryChartData',
        dataType: 'text',
        data: {
            date: dateCond,
            time: timeCond,
            cell: cellCond
        },
        type: 'post',
        success: function (raw) {
            showNcsChart(raw, cellCond);
        },
        error: function () {
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "数据不存在！");
        }
    })
}

function showNcsChart(raw, cellCond) {
    var data = eval("(" + raw + ")");
    $("#li-1").removeClass("active");
    $("#tab-1").removeClass("active");
    $("#li-2").addClass("active");
    $("#tab-2").addClass("active");
    $("#chart").children().remove();

    if (data['data'].length != 0) {

        var sameFreq = [];
        var neighFreq = [];
        var spot;
        var bcchChart = [];
        var tchChart = [];
        var bcch = 0;
        var bcchVal;

        for (var i = 0; i < data['data'].length; i++) {
            var one = data['data'][i];
            spot = one['频点'];
            bcch = one['bcch'];
            bcch = parseInt(bcch);
            bcchVal = bcch.toString();

            var spotArr = spot.split(",");
            for (var sp = 0; sp < spotArr.length; sp++) {
                if (spotArr[sp] == bcch)
                    spotArr[sp] = 0;
            }

            //同频
            var same900 = [];
            var same1800 = [];
            $.each(one['datasm'], function (key, values) {
                if (bcch < 500) {
                    same900[key] = parseFloat(values).toFixed(2);
                } else {
                    same1800[key - 511] = parseFloat(values).toFixed(2);
                }
            });
            for (var i = 0; i < 96; i++) {
                if (same900[i] == null)
                    same900[i] = 0;
            }
            for (var i = 0; i < (637 - 511); i++) {
                if (same1800[i] == null)
                    same1800[i] = 0;
            }
            if (bcch > 500) {
                sameFreq = same1800;
            } else {
                sameFreq = same900;
            }

            //邻频
            var neigh900 = [];
            var neigh1800 = [];
            $.each(one['datasd'], function (key, values) {
                if (bcch < 500) {
                    neigh900[key] = parseFloat(values).toFixed(2);
                } else {
                    neigh1800[key - 511] = parseFloat(values).toFixed(2);
                }
            });
            for (var i = 0; i < 96; i++) {
                if (neigh900[i] == null) {
                    neigh900[i] = 0;
                }
            }
            for (var i = 0; i < (637 - 511); i++) {
                if (neigh1800[i] == null) {
                    neigh1800[i] = 0;
                }
            }
            if (bcch > 500) {
                neighFreq = neigh1800;
            } else {
                neighFreq = neigh900;
            }

            //bcch
            var bcch900Arr = [];
            var bcch1800Arr = []
            $.each(one['datasm'], function (key, values) {
                if (parseInt(key) == parseInt(bcch) && parseFloat(values) != 0) {
                    if (bcch < 500) {
                        bcch900Arr[key] = parseFloat(values).toFixed(2);
                        sameFreq[key] = parseFloat(values).toFixed(2) + "";
                    } else {
                        bcch1800Arr[key - 511] = parseFloat(values).toFixed(2);
                        sameFreq[key - 511] = parseFloat(values).toFixed(2) + "";
                    }
                }
            });
            for (var i = 0; i < 96; i++) {
                if (bcch900Arr[i] == null) {
                    bcch900Arr[i] = 0;
                }
            }
            for (var i = 0; i < (637 - 511); i++) {
                if (bcch1800Arr[i] == null) {
                    bcch1800Arr[i] = 0;
                }
            }
            if (bcch > 500) {
                bcchChart = bcch1800Arr;
            } else {
                bcchChart = bcch900Arr;
            }

            //TCH
            var tch900Arr = [];
            var tch1800Arr = [];
            $.each(one['datasm'], function (key, values) {
                for (var m = 0; m < spotArr.length; m++) {
                    if (parseInt(spotArr[m]) != 0 && parseInt(key) == parseInt(spotArr[m]) && parseFloat(values) != 0) {
                        if (bcch < 500) {
                            tch900Arr[key] = parseFloat(values).toFixed(2);
                            sameFreq[key] = parseFloat(values).toFixed(2) + "";
                        } else {
                            tch1800Arr[key - 511] = parseFloat(values).toFixed(2);
                            sameFreq[key - 511] = parseFloat(values).toFixed(2) + "";
                        }
                    }
                }
            });
            for (var i = 0; i < 96; i++) {
                if (tch900Arr[i] == null) {
                    tch900Arr[i] = 0;
                }
            }
            for (var i = 0; i < (637 - 511); i++) {
                if (tch1800Arr[i] == null) {
                    tch1800Arr[i] = 0;
                }
            }
            if (bcch > 500) {
                tchChart = tch1800Arr;
            } else {
                tchChart = tch900Arr;
            }
        }

        $("#loading").css("display", "none");

        var myChart = echarts.init(document.getElementById('chart'));
        var option;
        option = {
            title: {
                text: cellCond + ' 小区NCS测量干扰情况',
                textAlign: 'center',
                subtext: '频点=' + spot + '其中BCCH=' + bcchVal,
                textBaseLine: 'top',
                subtextStyle: {
                    fontWeight: 'normal',
                    fontSize: '15',
                    left: '40%',
                    color:'black'
                },
                padding: [10, 100],
                left: '40%',
                top: '5'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            legend: {
                data: ['同频', '邻频'],
                right: '20%',
                top: '25'
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: showLineXais(bcch),
                    axisTick: {
                        alignWithLabel: true,
                        interval: 0
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '同频',
                    type: 'bar',
                    animationDuration: 10,
                    stack: 'a',
                    z: 3,
                    data: sameFreq
                }, {
                    name: '邻频',
                    type: 'bar',
                    stack: 'a',
                    animationDuration: 1000,
                    data: neighFreq
                }, {
                    name: 'TCH',
                    type: 'bar',
                    z: 4,
                    data: tchChart
                }, {
                    name: 'BCCH',
                    type: 'bar',
                    z: 4,
                    barGap: '-100%',
                    data: bcchChart
                }
            ],
            color: ['#7EB0EE', '#c23531', '#7BEE10', '#ca8622']
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    } else {
        $("#loading").css("display", "none");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

function showLineXais(bcch) {
    //console.log(bcch);
    var saveSelect = [];
    if (bcch < 500) {
        for (var i = 0; i < 96; i++) {
            saveSelect[i] = i;
        }
    } else {
        var t = 0;
        for (var j = 511; j < 637; j++) {
            saveSelect[t] = j;
            t++;
        }
    }
    return saveSelect;
}


