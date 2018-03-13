var bscValCache=new Array();
$(document).ready(function() {
    $("#searchBtn").click(function(){
        $("#ul-tab").children().remove();
        $(".tab-content").children().remove();
        $("#saveBsc").val($("#bscSelect").val());
        $("#saveTopX").val($("#topxSelect").val());
        $("#saveSts").val($("#sts60").val());
        getIndexMonitor();
    });

    $("#exportBtn").click(function () {
        if($("#ul-tab").children().length==0||$("#ul-tab").children().html()==undefined){
            showInfoInAndOut("info","请先查询后再导出！");
            return;
        }
        exportMonitorIndex();
    });

    popUp();
});

function exportMonitorIndex() {
    var ulTabContent="";
    var arr=[];
    $("#ul-tab").each(function () {
        ulTabContent +=$(this).children().text().split(",");
    });
    if(ulTabContent.indexOf("掉话")>-1){
        arr.push("掉话");
    }
    if(ulTabContent.indexOf("ICM")>-1){
        arr.push("ICM");
    }
    if(ulTabContent.indexOf("S掉话")>-1){
        arr.push("S掉话");
    }
    if(ulTabContent.indexOf("无线接入性")>-1){
        arr.push("无线接入性");
    }
    if(ulTabContent.indexOf("信道完好率")>-1){
        arr.push("信道完好率");
    }
    if(ulTabContent.indexOf("0话务")>-1){
        arr.push("0话务");
    }
    if(ulTabContent.indexOf("0流量")>-1){
        arr.push("0流量");
    }
    if(ulTabContent.indexOf("切入")>-1){
        arr.push("切入");
    }
    if(ulTabContent.indexOf("切出")>-1){
        arr.push("切出");
    }
    if(ulTabContent.indexOf("SQI")>-1){
        arr.push("SQI");
    }
    if(ulTabContent.indexOf("语音质量")>-1){
        arr.push("语音质量");
    }
    if(ulTabContent.indexOf("S拥塞")>-1){
        arr.push("S拥塞");
    }
    if(ulTabContent.indexOf("拥塞")>-1){
        arr.push("拥塞");
    }
    if(ulTabContent.indexOf("TBF")>-1){
        arr.push("TBF");
    }
    if(ulTabContent.indexOf("传输断链")>-1){
        arr.push("传输断链");
    }
    if(ulTabContent.indexOf("误码滑码")>-1){
        arr.push("误码滑码");
    }
    if(ulTabContent.indexOf("倒站BCCH=0")>-1){
        arr.push("倒站BCCH=0");
    }
    if(ulTabContent.indexOf("A1A2")>-1){
        arr.push("A1A2");
    }
    if(ulTabContent.indexOf("RXMFP")>-1){
        arr.push("RXMFP");
    }
    if(ulTabContent.indexOf("寻呼拥塞")>-1){
        arr.push("寻呼拥塞");
    }
    var cond=arr.toString();
    $("#exportCond").val(cond);
    $("#indexMonitorForm").submit();
}

function popUp() {
    var thisDom;
    //网元多选
    $("#bscBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');

        $("#myModalLabel").text("选择网元");
        thisDom = "bscSelect";
        if(bscValCache=='') {
            $.ajax({
                url: 'indexMonitorBsc',
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
        }else{
            $.each(bscValCache,function(index, value){
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选"+(bscValCache.length)+"个,双击可添加");
        }

        var bscVal = $("#bscSelect").val().split(",");
        for ( var i = 0; i < bscVal.length; i++) {
            if(bscVal[i]!=-1 && bscVal[i].trim() !='') {
                $('#search_to').append("<option>" + bscVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选"+($('#search_to option').length)+"个，双击可删除");

    });
    //确定按钮
    $('#ensure').click(function () {
        //$("#" + thisDom).children().remove();
        var html = "";
        $("#search_to option").each(function(index){
            if(index===0) {
                html += $(this).val();
            }else {
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
        if(html.length===0){
            if($("#" + thisDom).val()!==-1){
                $("#" + thisDom + " option:selected").remove();
            }
            $("#" + thisDom + " option[value='-1']").attr("selected", "selected");
        }else{
            var arr = html.split(",");
            var flag = false;
            //console.log(arr.length);
            if(arr.length===1){
                $("#search option").each(function(){
                    if(html==$(this).val()){
                        $("#" + thisDom + " option[value='" + $(this).val() + "']").attr("selected", "selected");
                        flag = true;
                    }
                    //console.log($("#" + thisDom).val());
                })
            }else{
                $("#" + thisDom).prepend("<option selected='selected' style='display:none'>"+ html + "</option>");
            }
            if(flag){
                $("#" + thisDom).prepend("<option selected='selected' style='display:none'>"+ html + "</option>");
            }
        }
        $('#myModal').modal('hide');
    })
    
}

function getIndexMonitor() {
    // 重置分页条件
    initFormPage('indexMonitorForm');
    // 提交表单
    sumbitCondition();
}

function sumbitCondition() {
    $("#loading").show();
    $("#indexMonitorForm").ajaxSubmit({
        url : 'queryIndexMonitorByPage',
        dataType : 'text',
        type : 'post',
        success : function(raw) {
            showTableData(raw);
        },
        error : function(){
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

function showTableData(raw) {
    if(raw==""){
        showInfoInAndOut("info","不存在当前表！")
    }
    $("#loading").css("display", "none");
    var data = eval("(" + raw + ")");
    var i = 0, j = 0, condIndex = 0;
    $.each(data, function(key, value) {
        i++;
        if((i+2) % 3 ==0) {
            condIndex = value;
        }else if((i+1) % 3 ==0) {
            if(value!=''){
                j++;
                $("#ul-tab").append("<li"+ (j==1?" class='active'":"") + " id='li" + condIndex + "'>" +
                    "<a href='#tab-" + condIndex + "' data-toggle='tab'>" + "<label>" + key + "</label></a>" +
                    "</li>");

                var optHtml = " <div class='tab-pane"+ (j==1?" active'":"'") + " id='tab-" + condIndex + "' style='margin-top: 20px'>"+
                    "<div class='bs-example' data-example-id='striped-table' id='bs-example-" + condIndex + "'>" +
                    "<form id='indexMonitorForm"+ condIndex +"'>"+
                    "<input type='hidden' id='hiddenPageSize' name='hiddenPageSize' value='25' />"+
                    "<input type='hidden' id='hiddenCurrentPage' name='hiddenCurrentPage' value='1' />"+
                    "<input type='hidden' id='hiddenTotalPageCnt' name='hiddenTotalPageCnt' />"+
                    "<input type='hidden' id='hiddenTotalCnt' name='hiddenTotalCnt' />"+
                    "<table id='table" + condIndex + "' class='table table-hover'><thead><tr>";

                $.each(value, function(n, one) {
                    if(n==0){
                        $.each(one, function(k, v) {
                            optHtml += "<th>" + k + "</th>";
                        })
                    }
                });

                optHtml += "</tr></thead><tbody>";

                $.each(value, function(n, one) {
                    optHtml += "<tr>";
                    $.each(one, function(k, v) {
                        if(v.toString()=="nulled"){
                            optHtml += "<td>" +" " + "</td>";
                        }else {
                            optHtml += "<td>" + v + "</td>";
                        }
                    });
                    optHtml += "</tr>";
                });

                optHtml += "</tr></tbody></table></form></div><div id='pageDiv"+condIndex+"'><nav aria-label='...'>"+
                    "<ul class='pagination page-style' style='margin-top: -15px;'>"+
                    "<li><a  disabled='true' style='cursor: default'>记录数：<span id='emTotalCnt"+condIndex+"'>0</span> 条</a></li>"+
                    "<li><a  disabled='true' style='cursor: default'>共 <span id='emTotalPageCnt"+condIndex+"'>0</span>  页</a></li>"+
                    "<li><a  ondragstart='return false' style='cursor: pointer' " +
                    "onclick='showListViewByPage(\"first\",getDataByPageNum,\"indexMonitorForm\","+condIndex+",\"pageDiv\")'>首页</a></li>"+

                    "<li><a  ondragstart='return false' style='cursor: pointer' " +
                    "onclick='showListViewByPage(\"back\",getDataByPageNum,\"indexMonitorForm\","+condIndex+",\"pageDiv\")' aria-label='Previous'>"+
                    "<span aria-hidden='true'>上一页</span></a></li>"+

                    "<li><a disabled='true'>第  <input type='text' id='showCurrentPage"+condIndex+"' class='paging_input_text form-control' value='0'/> 页</a></li>"+
                    "<li><a  ondragstart='return false' style='cursor: pointer'" +
                    " onclick='showListViewByPage(\"num\",getDataByPageNum,\"indexMonitorForm\","+condIndex+",\"pageDiv\")'>GO</a></li>"+

                    "<li><a  ondragstart='return false' style='cursor: pointer' " +
                    "onclick='showListViewByPage(\"next\",getDataByPageNum,\"indexMonitorForm\","+condIndex+",\"pageDiv\")' aria-label='Next'>"+
                    "<span aria-hidden='true'>下一页</span></a></li>"+

                    "<li><a  ondragstart='return false' style='cursor: pointer' " +
                    "onclick='showListViewByPage(\"last\",getDataByPageNum,\"indexMonitorForm\","+condIndex+",\"pageDiv\")'>末页</a></li>"+
                    "</ul> </nav></div></div>";
                //console.log(optHtml);
                $(".tab-content").append(optHtml);
            }
        }else{
            if(value.totalPageCnt!=0){
                // 设置隐藏的page信息
                setFormPageInfo("indexMonitorForm"+condIndex, value);
                // 设置分页面板
                setPageView(value, condIndex);
            }
        }
    });

    changeColor();

    if($("#ul-tab").children().length==0||$("#ul-tab").children().html()==undefined){
        showInfoInAndOut("info","抱歉，无计算结果！")
    }
}

/**
 * 分页跳转的响应
 * @param dir（操作）
 * @param action（方法名）
 * @param formId（用第几个form提交）
 * @param condIndex(第几张表翻页)
 * @param divId（翻页按钮所属div）
 */
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
            $(form).find("#showCurrentPage"+condIndex).val(currentPage + 1);
        }

    } else if (dir === "num") {
        var userinput = new Number($(div).find("#showCurrentPage"+condIndex).val());
        //alert(userinput);
        if (isNaN(userinput)) {
            showInfoInAndOut("info", "请输入数字！");
            //return;
        }
        if (userinput > totalPageCnt || userinput < 1) {
            showInfoInAndOut("info", "输入页面范围不在范围内！");
            return;
        }
        var reg = /^[1-9][0-9]*$/;
        if(!reg.test(userinput)){
            showInfoInAndOut("info", "请输入正确的页码！");
            return;
        }
        $(form).find("#hiddenCurrentPage").val(userinput);
    } else {
        return;
    }
    /*$("#esecNoTable").children().remove();
     $("#tabs-1").addClass("active");
     $("#tabs-1").siblings().removeClass("active");*/
    // 获取资源
    if (typeof action == "function") {
        action(formId+condIndex);
    }

}

function getDataByPageNum(formId) {

    $("#loading").show();
    $("#saveOrder").val($("#li"+formId.substr(16)+" a").find("label").html());
    //initFormPage(formId);
    $("#"+formId).ajaxSubmit({
        url : formId,
        data : {
            bsc  : $("#saveBsc").val(),
            topX : $("#saveTopX").val(),
            sts  : $("#saveSts").val(),
            order: $("#saveOrder").val()
        },
        dataType : 'text',
        type : 'post',
        success : function(raw) {
            showOneTableData(raw);
        }
    })
}

function showOneTableData(raw) {
    var data = eval("(" + raw + ")");
    $("#table"+data['index']).children().remove();
    if(data['data'].length!=0){
        var optHtml = "<thead><tr>";

        $.each(data['data'], function(n, one) {
            if(n==0){
                $.each(one, function(k, v) {
                    optHtml += "<th>" + k + "</th>";
                })
            }
        });

        optHtml += "</tr></thead><tbody>";

        $.each(data['data'], function(n, one) {
            optHtml += "<tr>";
            $.each(one, function(k, v) {
                if(v.toString()=="nulled"){
                    optHtml += "<td>" + " " + "</td>";
                }else {
                    optHtml += "<td>" + v + "</td>";
                }
            });
            optHtml += "</tr>";
        });

        optHtml += "</tr></tbody>";
        // console.log(optHtml);
        $("#loading").css("display", "none");
        $("#table"+data['index']).append(optHtml);
        changeColor();
        // 设置隐藏的page信息
        setFormPageInfo("indexMonitorForm"+data['index'], data['page']);
        // 设置分页面板
        setPageView(data['page'], data['index']);
    }
}

// 初始化form下的page信息
function initFormPage(formId) {
    var form = $("#" + formId);
    if (!form) {
        return;
    }
    //form.find("#hiddenPageSize").val(25);
    //form.find("#hiddenPageSize").val($("#linage").val());
    form.find("#hiddenCurrentPage").val(1);
    form.find("#hiddenTotalPageCnt").val(-1);
    form.find("#hiddenTotalCnt").val(-1);
}

// 设置隐藏的page信息
function setFormPageInfo(formId, page) {
    if (formId == null || formId == undefined ) {
        return;
    }
    var form = $("#" + formId);
    if (!form) {
        return;
    }

    //form.find("#hiddenPageSize").val(page.pageSize);
    //form.find("#hiddenPageSize").val($("#linage").val());
    if(page != undefined && page != null){
        form.find("#hiddenCurrentPage").val(new Number(page.currentPage));
        form.find("#hiddenTotalPageCnt").val(page.totalPageCnt);
        form.find("#hiddenTotalCnt").val(page.totalCnt);
    }
}

function setPageView(page,id) {

    if(page !=undefined && page !=null){
        var currentPage = page.currentPage ? page.currentPage : 1;
        var totalPageCnt = page.totalPageCnt ? page.totalPageCnt : 0;
        var totalCnt = page.totalCnt ? page.totalCnt : 0;
        // 设置到面板上
        $("#emTotalCnt" + id).html(totalCnt);
        $("#showCurrentPage" + id).val(currentPage);
        $("#emTotalPageCnt"+ id).html(totalPageCnt);
    }
}

function changeColor() {
    //ICM
    var tableId=document.getElementById("table3");
    for(var i=1;i<tableId.rows.length;i++){
        if(parseFloat(tableId.rows[i].cells[9].innerHTML)>50){
            tableId.rows[i].cells[9].setAttribute("style","background:red;color:white");
        }
    }
    //S掉话
    var table5=document.getElementById("table5");
    for(var i=1;i<table5.rows.length;i++){
        if(parseFloat(table5.rows[i].cells[9].innerHTML)>100){
            table5.rows[i].cells[9].setAttribute("style","background:red;color:white");
        }
    }
    //SQI
    var table12=document.getElementById("table12");
    for(var i=1;i<table12.rows.length;i++){
        if(parseFloat(table12.rows[i].cells[9].innerHTML)<95)
        table12.rows[i].cells[9].setAttribute("style","background:yellow");
    }
    //无线接入性
    var table6=document.getElementById("table6");
    for(var i=1;i<table6.rows.length;i++){
        if(parseFloat(table6.rows[i].cells[15].innerHTML)<95){
            table6.rows[i].cells[15].setAttribute("style","background:yellow");
        }
    }
    //信道完好率
    var table7=document.getElementById("table7");
    for(var i=1;i<table7.rows.length;i++){
        if(parseFloat(table7.rows[i].cells[12].innerHTML)<50){
            table7.rows[i].cells[12].setAttribute("style","background:yellow");
        }
    }
//切入
    var table10=document.getElementById("table10");
    for(var i=1;i<table10.rows.length;i++){
        if(parseFloat(table10.rows[i].cells[9].innerHTML)<95){
            table10.rows[i].cells[9].setAttribute("style","background:red;color:white");
        }
    }
//切出
    var table11=document.getElementById("table11");
    for(var i=1;i<table11.rows.length;i++){
        if(parseFloat(table11.rows[i].cells[9].innerHTML)<95){
            table11.rows[i].cells[9].setAttribute("style","background:red;color:white");
        }
    }
}