var a;
var dateValCache = new Array();
var bscValCache = new Array();
$(document).ready(function () {

    $("#searchBtn").click(function () {
        if ($("#dateSelect option:selected").val() == -1 || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        if ($("#bscSelect option:selected").val() == -1 || $("#bscSelect").val().trim() == "") {
            showInfoInAndOut("info", "请选择网元！");
            return;
        }
        a = "queryStructureIndexByPage";
        getStructureIndex();
    });

    popUp();

    exportStructureIndex();
});

function popUp() {

    var thisDom;
    //日期多选
    $("#dateButton").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择日期");
        thisDom = "dateSelect";
        if (dateValCache == '') {
            $.ajax({
                url: 'ncsDate',
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
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择网元");
        thisDom = "bscSelect";
        if (bscValCache == '') {
            $.ajax({
                url: 'ncsBsc',
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
            $('#myModalLabel1').append("可选" + (cellValCache.length) + "个,双击可添加");
        }


        var bscVal = $("#bscSelect").val().split(",");
        for (var i = 0; i < bscVal.length; i++) {
            if (bscVal[i] != -1 && bscVal[i].trim() != '') {
                $('#search_to').append("<option>" + bscVal[i] + "</option>");
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

function getStructureIndex() {
    // 重置分页条件
    initFormPage("structureIndexForm");
    // 提交表单
    sumbitCondition();
}

/**
 * 提交表单
 */
function sumbitCondition() {
    $("#loading").show();
    $("#structureIndexForm").ajaxSubmit({
        url: a,
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showStructureIndex(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

/**
 * 列表显示
 */
function showStructureIndex(raw) {
    var data = eval("(" + raw + ")");
    $("#strucIndexTable").children().remove();
    if (data['data'].length != 0) {
        var optHtml = "<thead><tr><th>BSC</th><th>CELL</th><th>CELL Type</th><th>结构指数</th><th>重叠覆盖系数</th><th>冗余覆盖系数</th>"
            + "</tr></thead><tbody>";
        for (var i = 0; i < data['data'].length; i++) {
            var one = data['data'][i];
            optHtml += "<tr><td>" + one['BSC'] + "</td><td>" + one['CELL'] + "</td><td>" + one['CELLtype'] + "</td><td>" +
                Number(one['结构指数']).toFixed(2) + "</td><td>" + Number(one['重叠覆盖系数']).toFixed(2) + "</td><td>" + Number(one['冗余覆盖系数']).toFixed(2) + "</td></tr>";
        }
        optHtml += "</tbody>";
        //console.log(optHtml);
        $("#loading").css("display", "none");
        ;
        $("#strucIndexTable").append(optHtml);

        // 设置隐藏的page信息
        setFormPageInfo("structureIndexForm", data['page']);
        // 设置分页面板
        setPageView(data['page'], "interMartixPageDiv");
    } else {
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data['page'], "structureIndexDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

/*
 * 导出excel
 * */
function exportStructureIndex() {
    $("#exportBtn").click(function () {
        if ($("#dateSelect option:selected").val() == -1 || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        if ($("#bscSelect option:selected").val() == -1 || $("#bscSelect").val() == null) {
            showInfoInAndOut("info", "请选择网元！");
            return;
        }
        exportStruc();
    })
}

function exportStruc() {
    var date = $("#dateSelect").val();
    var bsc = $("#bscSelect").val();
    var gsm900 = $("#gsm900Select").val();
    var gsm1800 = $("#gsm1800Select").val();
    location.href = "exportStructureIndex?date=" + date + "&&bsc=" + bsc + "&&gsm900=" + gsm900 + "&&gsm1800=" + gsm1800;
}