$(document).ready(function () {
    $("#calculateBtn").click(function () {
        if ($("#dateSelect option:selected").val() == -1 || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        getSpotInterModulation();
    });
    $("#exportBtn").click(function () {
        if ($("#dateSelect option:selected").val() == -1 || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        if ($("#spotInterModulationTable").is(":empty")) {
            showInfoInAndOut("info", "请先计算后再导出！");
            return;
        }
        exportSpotInterModulation();
    })
    popUp();
})

function showInfoInAndOut(div, info) {
    $("#" + div).html(info);
    $("#" + div).fadeIn(2000);
    setTimeout("$('#" + div + "').fadeOut(2000)", 1000);
}

function popUp() {

    var thisDom;

    //网元多选
    $("#bscButton").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择网元");
        thisDom = "bscSelect";

        $.ajax({
            url: 'spotInterModulationBsc',
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

        var bscVal = $("#bscSelect").val().split(",");
        for (var i = 0; i < bscVal.length; i++) {
            if (bscVal[i] != -1 && bscVal[i].trim() != '') {
                $('#search_to').append("<option>" + bscVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

    });


    //小区多选
    $("#cellButton").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择小区");
        thisDom = "cellSelect";

        $.ajax({
            url: 'spotInterModulationCell',
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

function getSpotInterModulation() {
    // 重置分页条件
    initFormPage('spotInterModulationForm');
    // 提交表单
    sumbitCondition();
}
/**
 * 提交表单
 */
function sumbitCondition() {
    $("#loading").show();
    $("#spotInterModulationForm").ajaxSubmit({
        url: 'calculateSpotInterModulation',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showSpotInterModulation(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "加载数据出错！");
        }
    })
}

function sumbitCondition2() {
    $("#loading").show();
    $("#spotInterModulationForm").ajaxSubmit({
        url: 'calculateSpotInterModulation',
        dataType: 'text',
        type: 'post',
        data: {date: $("#dateSelect").val(), flag: "flag"},
        success: function (raw) {
            showSpotInterModulation(raw);
        }
    })
}

/**
 * 列表显示
 */
function showSpotInterModulation(raw) {
    var data = eval("(" + raw + ")");
    $("#spotInterModulationTable").children().remove();
    if (data['oneResult'] != null && data['oneResult'].length != 0) {
        var optHtml = "<thead><tr><th>日期</th><th>网元</th><th>小区</th><th>频点1</th><th>频点2</th>" +
            "<th>受扰频点</th><th>干扰类型</th></tr></thead><tbody>";
        for (var i = 0; i < data['oneResult'].length; i++) {
            var one = data['oneResult'][i];
            optHtml += "<tr><td>" + one['日期'] + "</td><td>" + one['网元'] + "</td><td>" + one['小区'] + "</td><td>" +
                one['频点1'] + "</td><td>" + one['频点2'] + "</td><td>" + one['受扰频点'] + "</td><td>" + one['干扰类型'] + "</td></tr>";
        }
        optHtml += "</tbody>";
        //console.log(optHtml);
        $("#loading").css("display", "none");
        $("#spotInterModulationTable").append(optHtml);

        // 设置隐藏的page信息
        setFormPageInfo("spotInterModulationForm", data['page']);
        // 设置分页面板
        setPageView(data['page'], "spotInterModulationDiv");
    } else {
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data['page'], "spotInterModulationDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

function exportSpotInterModulation() {
    var date = $("#dateSelect").val();
    var bsc = $("#bscSelect").val();
    var cell = $("#cellSelect").val();
    if (date == '-1' || date == null) {
        showInfoInAndOut("info", "请选择日期！");
        return;
    }
    var url = "exportSpotInterModulationData";
    $("#loading").show();
    $.post(
        url,
        {date: date, bsc: bsc, cell: cell})
        .done(function () {
            location.href = "exportSpotInterModulation",
                $("#loading").css("display", "none");
        });
}