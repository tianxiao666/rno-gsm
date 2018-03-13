var dateValCache=[];
var indicatorValCache=[];
$(document).ready(function() {
    $("#searchBtn").click(function () {
        if ($("#dateSelect option:selected").val() == -1 || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        getWorkOrderStatistic();
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
        if(dateValCache=='') {
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
        }else{
            $.each(dateValCache,function(index, value){
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选"+(dateValCache.length)+"个,双击可添加");
        }

        var dateVal = $("#dateSelect").val().split(",");
        for ( var i = 0; i <dateVal.length; i++) {
            if(dateVal[i]!=-1) {
                $('#search_to').append("<option>" + dateVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选"+($('#search_to option').length)+"个，双击可删除");

    });
    //代维多选
    $("#maintainBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择代维");
        thisDom = "maintainSelect";
        $.ajax({
            url: 'maintain',
            dataType: 'json',
            type: 'get',
            success: function (data) {
                $('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");
                if (data.length != 0) {

                    for (var i = 0; i < data.length; i++) {
                        var one = data[i];
                        if(one.trim()!=''){

                            $('#search').append("<option>" + one + "</option>");
                        }
                    }
                } else {

                }
            }
        });
        var maintainVal = $("#maintainSelect").val().split(",");
        for ( var i = 0; i <maintainVal.length; i++) {
            if(maintainVal[i]!=-1) {
                $('#search_to').append("<option>" + maintainVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选"+($('#search_to option').length)+"个，双击可删除");
    });

    //工单状态多选
    $("#statusBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择工单状态");
        thisDom = "statusSelect";

        $('#search').append('<option value="受理中">受理中</option>');
        $('#search').append('<option value="完结">完结</option>');
        $('#search').append('<option value="超时">超时</option>');
        $('#search').append('<option value="挂起">挂起</option>');
        $('#search').append(' <option value="已退回">已退回</option>');


        $('#myModalLabel1').append("可选" + ($('#search option').length) + "个,双击可添加");

        var maintainVal = $("#statusSelect").val().split(",");
        for (var i = 0; i < maintainVal.length; i++) {
            if (maintainVal[i] != -1) {
                $('#search_to').append("<option>" + maintainVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

    });

    //指标多选
    $("#indicatorBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择工单类型");
        thisDom = "indicatorSelect";

        if(indicatorValCache=='') {
            $.ajax({
                url: 'indicator',
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
            $.each(indicatorValCache,function(index, value){
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选"+(indicatorValCache.length)+"个,双击可添加");
        }

        var indicatorVal = $("#indicatorSelect").val().split(",");
        for ( var i = 0; i <indicatorVal.length; i++) {
            if(indicatorVal[i]!=-1) {
                $('#search_to').append("<option>" + indicatorVal[i] + "</option>");
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

function getWorkOrderStatistic() {
    $("#loading").show();
    initFormPage("workOrderStatisticForm");
    submitCondition();

}

function submitCondition() {
    $("#workOrderStatisticForm").ajaxSubmit({
        url: 'workOrderStatistic',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showWorkOrderStatistic(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "不存在当前表！");
        }

    })
}

function showWorkOrderStatistic(raw){
    $("#statisticTable").children().remove();
    if(raw==""){
        $("#loading").css("display", "none");
        showInfoInAndOut("info", "对应表不存在！");
        return;
    }
    var data = eval("(" + raw + ")");
    if(data['data'].length!=0){
        var optHtml = "<thead><tr><th>县区</th><th>代维</th><th>工单类型</th><th>工单状态</th><th>数量</th><th>该工单类型总数</th><th>占比</th>"
            + "</tr></thead><tbody>";
        for(var i = 0 ; i <data['data'].length;i++){
            var one=data['data'][i];
            optHtml += "<tr><td>"+one['县区']+"</td><td>"+one['代维']+"</td><td>"+
                one['工单类型']+"</td><td>"+one['工单状态']+"</td><td>"+one['数量']+"</td><td>"+one['总数']+"</td><td>";
            if(one['占比']==='0.00%'){
                optHtml += one['占比']+"</td></tr>";
            }else{
                var rate=parseFloat(one['占比']*100).toFixed(2)+"%";
                optHtml += rate +"</td></tr>";
            }
        }
        optHtml += "</tbody>";
        $("#loading").css("display", "none");
        $("#statisticTable").append(optHtml);

        // 设置隐藏的page信息
        setFormPageInfo("workOrderStatisticForm", data['page']);
        // 设置分页面板
        setPageView(data['page'], "statisticDiv");
    }else{
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data['page'], "statisticDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }

}