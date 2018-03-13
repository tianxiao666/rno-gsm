var dateValCache = new Array();
var bscValCache = new Array();
var cellValCache = new Array();
var RXQ = [1, 1, 1, 1, 1, 1, 0, 0];
$(document).ready(function () {

    $("#searchBtn").click(function () {
        if ($("#dateSelect").val() == '-1' || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        getMrr();
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

    popUp();

    $("#sureBtn").click(function () {
        for (var i = 0; i < 8; i++) {
            if (i < 6) {
                RXQ[i] = $("#RXQ" + i).val();
            } else {
                RXQ[i] = $("#RXQ" + i).val();
            }
        }
    });

    $("#undoBtn").click(function () {
        $.each(RXQ, function (n, one) {
            $("#RXQ" + n).val(one);
        });
        $("#setupSpan").html("MRR质量=(RxQ0*" + $("#RXQ0").val() + "+RxQ1*" + $("#RXQ1").val() +
            "+RxQ2*" + $("#RXQ2").val() + "+RxQ3*" + $("#RXQ3").val() + "+RxQ4*" + $("#RXQ4").val() +
            "+RxQ5*" + $("#RXQ5").val() + "+RxQ6*" + $("#RXQ6").val() + "+RxQ7*" + $("#RXQ7").val() +
            ")/(RxQ0+RxQ1+RxQ2+RxQ3+RxQ4+RxQ5+RxQ6+RxQ7)*100");
    });

    $(".table-display-inline").change(function () {
        for (var j = 0; j < 8; j++) {
            var value = $("#RXQ" + j).val();
            if (value == '' || isNaN(Number(value))) {
                if (j < 6) {
                    $("#RXQ" + j).val(1);
                } else {
                    $("#RXQ" + j).val(0);
                }
            } else if (value.indexOf(".") > -1 && value.substring(value.indexOf(".") + 1, value.length).length > 2) {
                $("#RXQ" + j).val(Number(value).toFixed(2));
            } else {
                $("#RXQ" + j).val(value);
            }
        }
        $("#setupSpan").html("MRR质量=(RxQ0*" + $("#RXQ0").val() + "+RxQ1*" + $("#RXQ1").val() +
            "+RxQ2*" + $("#RXQ2").val() + "+RxQ3*" + $("#RXQ3").val() + "+RxQ4*" + $("#RXQ4").val() +
            "+RxQ5*" + $("#RXQ5").val() + "+RxQ6*" + $("#RXQ6").val() + "+RxQ7*" + $("#RXQ7").val() +
            ")/(RxQ0+RxQ1+RxQ2+RxQ3+RxQ4+RxQ5+RxQ6+RxQ7)*100");
    });

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
                url: 'getMQAllDate',
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
                url: 'getMQAllBsc',
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
                url: 'getMQAllCell',
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
    for (var j = 0; j < 8; j++) {
        $("#rxq" + j).val($("#RXQ" + j).val());
    }
    $("#mrrForm").submit();
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

        optHtml += "</tr></thead><tbody>";//<th>图表</th>

        $.each(data.data, function (n, one) {
            optHtml += "<tr ondblclick='showChart(this)'>";
            $.each(one, function (k, v) {
                if (v != null) {
                    optHtml += "<td>" + v + "</td>";
                } else {
                    optHtml += "<td>" + '' + "</td>";
                }
            });
            optHtml += "</tr>";
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
    for (var j = 0; j < 8; j++) {
        $("#rxq" + j).val($("#RXQ" + j).val());
    }
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