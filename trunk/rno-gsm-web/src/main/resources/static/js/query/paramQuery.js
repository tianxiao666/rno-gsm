var dateValCache = [];
var orderValCache = [];
var bscValCache = [];
var cellValCache = [];
$(document).ready(function () {
    $("#searchBtn").click(function () {
        $("#ul-tab").children().remove();
        $(".tab-content").children().remove();
        $("#saveDate").val($("#dateSelect").val());
        $("#saveOrder").val($("#orderSelect").val());
        $("#saveBsc").val($("#bscSelect").val());
        $("#saveCell").val($("#cellSelect").val());
        if ($("#dateSelect option:selected").val() == -1 || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        if ($("#orderSelect option:selected").val() == -1 || $("#orderSelect").val() == null) {
            showInfoInAndOut("info", "请选择指令！");
            return;
        }
        getParams();
    });

    $("#exportBtn").click(function () {
        if ($("#ul-tab").children().length == 0 || $("#ul-tab").children().html() == undefined) {
            showInfoInAndOut("info", "请先查询后再导出！");
            return;
        }
        exportParams();
    });

    $("#orderGotoSelect").change(function () {

        if ($("#ul-tab").children().length == 0 || $("#ul-tab").children().html() == undefined) {
            showInfoInAndOut("info", "请确认已查询到所需参数！");
            return;
        }
        var orderCond = "";
        $("ul li").each(function () {
            if ($(this).children().find("label").html() != undefined) {
                orderCond += $(this).children().find("label").html() + ",";
            }
        })
        //console.log(orderCond);
        if (orderCond.split(",").indexOf($("#orderGotoSelect").val()) <= -1) {
            showInfoInAndOut("info", "该指令未选定或无查询结果！");
        }

        $("ul li").each(function () {
            if ($(this).children().find("label").html() == $("#orderGotoSelect").val()) {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                var liId = $(this).attr("id");
                //window.parent.$("#wrapper").css("padding-top",50*n+"px");
                //var contWindow=window.parent.$("#iframe_tab_22").contentWindow;
                //var url="paramsQuery/paramsQueryPage";

                window.location.href = "#" + liId;
                // $("iframe").contentWindow.scrollTo(0,0);
                var index = liId.substring(2);
                $("#tab-" + index).addClass("active");
                $("#tab-" + index).siblings().removeClass("active");
                window.location.href = "#";

            }
        })

    });

    popUp();
});


function popUp() {
    var thisDom;
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

    //指令多选
    $("#orderBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');

        $("#myModalLabel").text("选择指令");
        thisDom = "orderSelect";
        if (orderValCache == '') {
            $.ajax({
                url: 'order',
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
            $.each(orderValCache, function (index, value) {
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选" + (orderValCache.length) + "个,双击可添加");
        }

        if ($("#orderSelect").val() != null) {
            var orderVal = $("#orderSelect").val().split(",");
            for (var i = 0; i < orderVal.length; i++) {
                if (orderVal[i] != -1) {
                    $('#search_to').append("<option>" + orderVal[i] + "</option>");
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
                if (bscVal[i] != -1 && bscVal[i].trim()!='') {
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
                if (cellVal[i] != -1 && cellVal[i].trim()!='') {
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

function getParams() {
    // 重置分页条件
    initFormPage('paramsForm');
    // 提交表单
    submitCondition();
}

function exportParams() {
    var ulTabContent = "";
    var arrOrder = [];
    $("ul li").each(function () {
        if ($(this).children().find("label").html() != undefined) {
            ulTabContent += $(this).children().find("label").html() + ",";
        }
    });
    arrOrder = ulTabContent.split(",");
    var cond = arrOrder.toString();
    $("#exportCond").val(cond);
    $("#paramsForm").submit();
}

function submitCondition() {
    $("#loading").show();
    $("#paramsForm").ajaxSubmit({
        url: 'queryParamsByPage',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showTableData(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

function showTableData(raw) {
    $("#loading").css("display", "none");
    var data = eval("(" + raw + ")");
    var i = 0, j = 0, condIndex = 0;
    $.each(data, function (key, value) {
        i++;
        if ((i + 2) % 3 == 0) {
            condIndex = value;
        } else if ((i + 1) % 3 == 0) {
            //console.log(value);
            if (value != '') {
                j++;
                $("#ul-tab").append("<li" + (j == 1 ? " class='active'" : "") + " id='li" + condIndex + "'>" +
                    "<a ondragstart='return false' href='#tab-" + condIndex + "'  data-toggle='tab'>" + "<label>" + key + "</label></a>" +
                    "</li>");

                var optHtml = " <div class='tab-pane" + (j == 1 ? " active'" : "'") + " id='tab-" + condIndex + "' style='margin-top: 20px'>" +
                    "<div class='bs-example' data-example-id='striped-table' style='border:none' id='bs-example-" + condIndex + "'>" +
                    "<form id='paramsForm" + condIndex + "'>" +
                    "<input type='hidden' id='hiddenPageSize' name='hiddenPageSize' value='25' />" +
                    "<input type='hidden' id='hiddenCurrentPage' name='hiddenCurrentPage' value='1' />" +
                    "<input type='hidden' id='hiddenTotalPageCnt' name='hiddenTotalPageCnt' />" +
                    "<input type='hidden' id='hiddenTotalCnt' name='hiddenTotalCnt' />" +
                    "<table id='table" + condIndex + "' class='table table-hover' ><thead><tr>";

                $.each(value, function (n, one) {
                    if (n == 0) {
                        $.each(one, function (k, v) {
                            optHtml += "<th>" + k + "</th>";
                        })
                    }
                });

                optHtml += "</tr></thead><tbody>";

                $.each(value, function (n, one) {
                    optHtml += "<tr>";
                    $.each(one, function (k, v) {
                        optHtml += "<td>" + v + "</td>";
                    });
                    optHtml += "</tr>";
                });

                optHtml += "</tr></tbody></table></form></div><div id='pageDiv" + condIndex + "'><nav aria-label='...'>" +
                    "<ul class='pagination page-style' style='margin-top: -15px;'>" +
                    "<li><a  disabled='true' style='cursor: default'>记录数：<span id='emTotalCnt" + condIndex + "'>0</span> 条</a></li>" +
                    "<li><a  disabled='true' style='cursor: default'>共 <span id='emTotalPageCnt" + condIndex + "'>0</span>  页</a></li>" +
                    "<li><a  ondragstart='return false' style='cursor: pointer' " +
                    "onclick='showListViewByPage(\"first\",getDataByPageNum,\"paramsForm\"," + condIndex + ",\"pageDiv\")'>首页</a></li>" +

                    "<li><a  ondragstart='return false' style='cursor: pointer' " +
                    "onclick='showListViewByPage(\"back\",getDataByPageNum,\"paramsForm\"," + condIndex + ",\"pageDiv\")' aria-label='Previous'>" +
                    "<span aria-hidden='true'>上一页</span></a></li>" +

                    "<li><a disabled='true'>第  <input type='text' id='showCurrentPage" + condIndex + "' class='paging_input_text form-control' value='0'/> 页</a></li>" +
                    "<li><a  ondragstart='return false' style='cursor: pointer'" +
                    " onclick='showListViewByPage(\"num\",getDataByPageNum,\"paramsForm\"," + condIndex + ",\"pageDiv\")'>GO</a></li>" +

                    "<li><a  ondragstart='return false' style='cursor: pointer' " +
                    "onclick='showListViewByPage(\"next\",getDataByPageNum,\"paramsForm\"," + condIndex + ",\"pageDiv\")' aria-label='Next'>" +
                    "<span aria-hidden='true'>下一页</span></a></li>" +

                    "<li><a  ondragstart='return false' style='cursor: pointer' " +
                    "onclick='showListViewByPage(\"last\",getDataByPageNum,\"paramsForm\"," + condIndex + ",\"pageDiv\")'>末页</a></li>" +
                    "</ul> </nav></div></div>";
                //console.log(optHtml);
                $(".tab-content").append(optHtml);

            }
        } else {
            if (value.totalPageCnt != 0) {
                // 设置隐藏的page信息
                setFormPageInfo("paramsForm" + condIndex, value);
                // 设置分页面板
                setPageView(value, condIndex);
            }
        }

    })
    if ($("#ul-tab").children().length == 0 || $("#ul-tab").children().html() == undefined) {
        showInfoInAndOut("info", "抱歉，无查询结果！")
    }

}

// 设置隐藏的page信息
function setFormPageInfo(formId, page) {
    if (formId == null || formId == undefined) {
        return;
    }
    var form = $("#" + formId);
    if (!form) {
        return;
    }

    //form.find("#hiddenPageSize").val(page.pageSize);
    //form.find("#hiddenPageSize").val($("#linage").val());
    if (page != undefined && page != null) {
        form.find("#hiddenCurrentPage").val(new Number(page.currentPage));
        form.find("#hiddenTotalPageCnt").val(page.totalPageCnt);
        form.find("#hiddenTotalCnt").val(page.totalCnt);
    }
}

function setPageView(page, id) {

    if (page != undefined && page != null) {
        var currentPage = page.currentPage ? page.currentPage : 1;
        var totalPageCnt = page.totalPageCnt ? page.totalPageCnt : 0;
        var totalCnt = page.totalCnt ? page.totalCnt : 0;
        // 设置到面板上
        $("#emTotalCnt" + id).html(totalCnt);
        $("#showCurrentPage" + id).val(currentPage);
        $("#emTotalPageCnt" + id).html(totalPageCnt);
    }
}

function showListViewByPage(dir, action, formId, condIndex, divId) {

    var form = $("#" + formId + condIndex);
    var div = $("#" + divId + condIndex);
    // alert(form.find("#hiddenPageSize").val());
    //var pageSize = new Number(form.find("#hiddenPageSize").val());
    var currentPage = new Number(form.find("#hiddenCurrentPage").val());
    var totalPageCnt = new Number(form.find("#hiddenTotalPageCnt").val());
    var totalCnt = new Number(form.find("#hiddenTotalCnt").val());

    // console.log("pagesize="+pageSize+",currentPage="+currentPage+",totalPageCnt="+totalPageCnt+",totalCnt="+totalCnt);
    if (dir === "first") {
        if (currentPage <= 1) {
            return;
        } else {
            $(form).find("#hiddenCurrentPage").val("1");
        }
    } else if (dir === "last") {
        if (currentPage >= totalPageCnt) {
            return;
        } else {
            $(form).find("#hiddenCurrentPage").val(totalPageCnt);
        }

    } else if (dir === "back") {
        if (currentPage <= 1) {
            return;
        } else {
            $(form).find("#hiddenCurrentPage").val(currentPage - 1);
        }
    } else if (dir === "next") {

        if (currentPage >= totalPageCnt) {
            return;
        } else {
            $(form).find("#hiddenCurrentPage").val(currentPage + 1);
            $(form).find("#showCurrentPage" + condIndex).val(currentPage + 1);
        }

    } else if (dir === "num") {
        var userinput = new Number($(div).find("#showCurrentPage" + condIndex).val());
        //alert(userinput);
        if (isNaN(userinput)) {
            showInfoInAndOut("info", "请输入数字！")
            //return;
        }
        if (userinput > totalPageCnt || userinput < 1) {
            showInfoInAndOut("info", "输入页面范围不在范围内！");
            return;
        }
        var reg = /^[1-9][0-9]*$/;
        if (!reg.test(userinput)) {
            showInfoInAndOut("info", "请输入正确的页码！");
            return;
        }
        $(form).find("#hiddenCurrentPage").val(userinput);
    } else {
        return;
    }
    // 获取资源
    if (typeof action == "function") {
        action(formId + condIndex);
    }

}

function showOneTableData(raw) {
    var data = eval("(" + raw + ")");
    console.log(data['index']);
    $("#table" + data['index']).children().remove();
    if (data['data'].length != 0) {
        var optHtml = "<thead><tr>";

        $.each(data['data'], function (n, one) {
            if (n == 0) {
                $.each(one, function (k, v) {
                    optHtml += "<th>" + k + "</th>";
                })
            }
        });

        optHtml += "</tr></thead><tbody>";

        $.each(data['data'], function (n, one) {
            optHtml += "<tr>";
            $.each(one, function (k, v) {
                optHtml += "<td>" + v + "</td>";
            });
            optHtml += "</tr>";
        });

        optHtml += "</tr></tbody>";
        // console.log(optHtml);
        $("#loading").css("display", "none");
        $("#table" + data['index']).append(optHtml);

        // 设置隐藏的page信息
        setFormPageInfo("paramsForm" + data['index'], data['page']);
        // 设置分页面板
        setPageView(data['page'], data['index']);
    }
}

function getDataByPageNum(formId) {
    $("#saveOrder").val($("#li"+formId.substr(10)+" a").find("label").html());
    $("#loading").show();

    $("#" + formId).ajaxSubmit({
        url: formId,
        data: {
            date: $("#saveDate").val(),
            order: $("#saveOrder").val(),
            bsc: $("#saveBsc").val(),
            cell: $("#saveCell").val()
        },
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showOneTableData(raw);
        }
    })
}