var dateValCache=[];
var indicatorValCache=[];
var cellValCache=[];
$(document).ready(function () {

    //所有用户查询工单
    $("#searchBtn").click(function () {
        if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
       getWorkOrder();
    });

    //导出工单
    $("#exportBtn").click(function () {
        if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        exportWorkOrder();
    });

    //统计工单
    $("#evaluateData").click(function () {
        $("#collapseExample").collapse('hide');
        if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        $("#loading").show();
       $("#workOrderClosedCycleForm").ajaxSubmit({
           url:'getEvaluateData',
           type:'post',
           dataType:'json',
           success:function (data) {
               $("#loading").css("display","none");
               showEvaluateData(data);
           },
           error:function () {
               $("#loading").css("display","none");
               showInfoInAndOut("info","获取统计信息失败！");
           }
       })
    });

    //普通用户处理工单
    $("#updateOrderBtn").click(function () {
        updateWorkOrder();
    });

    //普通用户申请挂起
    $("#applyForHangUp").click(function () {
        hangUp();
    });

    //普通用户申请撤销挂起
    $("#cancelHangUp").click(function () {
        cancelHangUp();
    });

    //管理员确认，处理工单状态
    $("#ensureOrder").click(function () {
        submitAdminSuggestion();
    });

    //管理员同意挂起
    $("#agreeHangUp").click(function () {
        var orderHangUp=$("#orderManId").val();
        var statusHangUp="已挂起";
        var handler=$("#orderManHandler").val().trim();
        var handleMethod=$("#handleManMethod").val().trim();
        var status=$("#orderManStatus").val();
        var admin=$("#orderManAdmin").val().trim();
        if(handler==='' || handleMethod==='' || admin===''){
            showInfoInAndOut("info","请等待处理人处理工单！");
            return;
        }
        if(status==='完结'){
            showInfoInAndOut("info","同意挂起时请勿修改工单状态！");
            return;
        }
        $("#updateManageWorkOrder").ajaxSubmit({
            url:'updateWorkOrderStatusByIdByAdmin',
            dataType:'text',
            data:{
                order:orderHangUp,
                status:statusHangUp,
                handler:handler
            },
            type:'post',
            success: function () {
                $("#showManageDetail").modal('hide');
                showInfoInAndOut("info","工单已挂起！");
                getWorkOrder();
            },
            error:function () {
                $("#showManageDetail").modal('hide');
                showInfoInAndOut("info","工单挂起失败！");
            }
        })
    });
    //拒绝挂起
    $("#refuseHangUp").click(function () {
        var orderHangUp=$("#orderManId").val();
        var statusHangUp="完结";
        var handler=$("#orderManHandler").val().trim();
        var handleMethod=$("#handleManMethod").val().trim();
        var admin=$("#orderManAdmin").val().trim();
        if(handler==='' || handleMethod==='' || admin===''){
            showInfoInAndOut("info","请等待处理人处理工单！");
            return;
        }
        $("#updateManageWorkOrder").ajaxSubmit({
            url:'updateWorkOrderStatusByIdByAdmin',
            dataType:'text',
            data:{
                order:orderHangUp,
                status:statusHangUp,
                handler:handler
            },
            type:'post',
            success: function () {
                $("#showManageDetail").modal('hide');
                showInfoInAndOut("info","工单挂起已拒绝，工单完结！");
                getWorkOrder();
            },
            error:function () {
                $("#showManageDetail").modal('hide');
                showInfoInAndOut("info","工单拒绝挂起失败！");
            }
        })
    });

    //管理员同意撤销挂起
    $("#agreeCancelHangUp").click(function () {
        var orderAgreeCancel=$("#orderManId").val();
        var statusAgreeCancel="完结";
        var handler=$("#orderManHandler").val().trim();
        var handleMethod=$("#handleManMethod").val().trim();
        var admin=$("#orderManAdmin").val().trim();
        if(handler==='' || handleMethod ==='' || admin===''){
            showInfoInAndOut("info","请等待处理人处理工单！");
            return;
        }
        $("#updateManageWorkOrder").ajaxSubmit({
            url:'updateWorkOrderStatusByIdByAdmin',
            dataType:'text',
            data:{
                order:orderAgreeCancel,
                status:statusAgreeCancel,
                handler:handler
            },
            type:'post',
            success: function () {
                $("#showManageDetail").modal('hide');
                showInfoInAndOut("info","同意撤销挂起成功,工单完结！");
                getWorkOrder();
            },
            error:function () {
                $("#showManageDetail").modal('hide');
                showInfoInAndOut("info","同意撤销挂起失败！");
            }
        })
    });

    //管理员退单
    $("#giveBack").click(function () {
        var orderGiveBack=$("#orderManId").val();
        var handleCount=$("#orderManHandleCount").val().trim();
        var statusGiveBack="已退回";
        var handler=$("#orderManHandler").val().trim();
        var handleMethod=$("#handleManMethod").val().trim();
        var admin=$("#orderManAdmin").val().trim();
        if(handler===''|| handleMethod==='' || admin===''){
            showInfoInAndOut("info","请等待处理人处理工单！");
            return;
        }
        var modifyStatus=$("#orderManStatus").val().trim();
        if(modifyStatus=='完结'){
            showInfoInAndOut("info","退单时请勿修改工单状态！");
            return;
        }
        $("#updateManageWorkOrder").ajaxSubmit({
            url:'giveBackOrder',
            dataType:'text',
            data:{
                order:orderGiveBack,
                status:statusGiveBack,
                handler:handler,
                handleCount:handleCount
            },
            type:'post',
            success: function () {
                $("#showManageDetail").modal('hide');
                showInfoInAndOut("info","退单成功！");
                getWorkOrder();
            },
            error:function () {
                $("#showManageDetail").modal('hide');
                showInfoInAndOut("info","退单失败！");
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
    //小区多选
    $("#cellBtn").click(function(){
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择小区");
        thisDom = "cellSelect";

        if(cellValCache==''){
            $.ajax({
                url : 'cell',
                dataType : 'json',
                data : {date:$("#dateSelect").val()},
                type : 'get',
                success : function(data) {
                    $('#myModalLabel1').append("可选"+(data.length)+"个,双击可添加");

                    if(data.length != 0) {
                        for ( var i = 0; i < data.length; i++) {
                            var one = data[i];
                            $('#search').append("<option>" + one + "</option>");
                            cellValCache[i] = one;
                        }
                    } else {

                    }
                }
            });
        }else{
            $.each(cellValCache,function(index, value){
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选"+(cellValCache.length)+"个,双击可添加");
        }


        var cellVal = $("#cellSelect").val().split(",");
        for ( var i = 0; i < cellVal.length; i++) {
            if(cellVal[i]!=-1 && cellVal[i].trim()!='') {
                $('#search_to').append("<option>" + cellVal[i] + "</option>");
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

function getWorkOrder() {
    initFormPage("workOrderClosedCycleForm");
    submitCondition();
}

function exportWorkOrder() {
    $("#workOrderClosedCycleForm").submit();
}

//管理员确认反馈意见，修改工单状态
function submitAdminSuggestion() {
    var order=$("#orderManId").val();
    var handler=$("#orderManHandler").val().trim();
    var status=$("#orderManStatus").val().trim();
    var handleMethod=$("#handleManMethod").val().trim();
    var admin=$("#orderManAdmin").val().trim();
    if(handler=='' || handleMethod=='' || admin===''){
        showInfoInAndOut("info","请等待处理人处理工单！");
        return;
    }
    if(status=='' || status=='-1'){
        showInfoInAndOut("info","请修改工单状态！");
        return;
    }
    $("#updateManageWorkOrder").ajaxSubmit({
        url:'updateWorkOrderStatusByIdByAdmin',
        dataType:'text',
        data:{
            order:order,
            status:status,
            handler:handler
        },
        type:'post',
        success: function () {
            $("#showManageDetail").modal('hide');
            showInfoInAndOut("info","处理成功！");
            getWorkOrder();
        },
        error:function () {
            $("#showManageDetail").modal('hide');
            showInfoInAndOut("info","处理失败！");
        }
    })
}

//普通用户提交反馈
function updateWorkOrder() {
    var order = $("#orderId").val();
    var date=$("#orderDate").val();
    var handler= $("#orderHandler").val().trim();
    var handleMethod = $("#handleMethod").val().trim();
    var handleResult = $("#orderHandleRult").val().trim();
    var handleCount=$("#orderHandleCount").val().trim();
    var status=$("#orderStatus").val().trim();
    var admin=$("#orderAdmin").val().trim();
    if(handleMethod.trim()==="" ){
        showInfoInAndOut("info","请填写处理方法！");
        return;
    }
    if(handleResult.trim() ==="" || handleResult.trim()==="-1"){
        showInfoInAndOut("info","请选择处理结果！");
        return;
    }
    if(handleResult.trim()==="待处理"){
        showInfoInAndOut("info","请修改处理结果状态！");
        return;
    }
    if(admin.trim()==="" || admin.trim()==="-1"){
        showInfoInAndOut("info","请指定负责人！");
        return;
    }
    if(status.trim()==="已退回" || status.trim() ==="受理中"){
        status="待审核";
    }
    $("#updateWorkOrder").ajaxSubmit({
        url:'updateWorkOrderById',
        dataType: 'text',
        data: {
            order:order,
            date:date,
            handler:handler,
            handleMethod:handleMethod,
            handleResult:handleResult,
            handleCount:handleCount,
            status:status,
            admin:admin
        },
        type: 'post',
        success: function () {
            $("#showDetail").modal('hide');
            showInfoInAndOut("info","提交反馈成功！");
            getWorkOrder();
        },
        error: function () {
            $("#showDetail").modal('hide');
            showInfoInAndOut("info","提交反馈失败！");
        }
    })
}

//普通用户工单挂起申请
function hangUp() {
    var order = $("#orderId").val().trim();
    var date=$("#orderDate").val();
    var handler= $("#orderHandler").val().trim();
    var handleMethod = $("#handleMethod").val().trim();
    var handleResult=$("#orderHandleRult").val().trim();
    var admin=$("#orderAdmin").val().trim();
    var status = "申请挂起";
    if(handleMethod.trim()===""){
        showInfoInAndOut("info","请填写处理方法！");
        return;
    }
    if(handleResult.trim()==='-1'||handleResult.trim()===''){
        showInfoInAndOut("info","请选择处理结果！");
        return;
    }

    if(handleResult.trim()==="待处理"){
        showInfoInAndOut("info","请修改处理结果状态！");
        return;
    }

    if(admin.trim()==="" || admin.trim()==="-1"){
        showInfoInAndOut("info","请指定负责人！");
        return;
    }
    $("#workOrderClosedCycleForm").ajaxSubmit({
        url:'hangUp',
        dataType: 'text',
        data:{
            order:order,
            date:date,
            handler:handler,
            handleMethod:handleMethod,
            handleResult:handleResult,
            status:status,
            admin:admin
        },
        type: 'post',
        success:function () {
            $("#showDetail").modal('hide');
            showInfoInAndOut("info","申请挂起已发起！");
            getWorkOrder();
        },
        error:function () {
            $("#showDetail").modal('hide');
            showInfoInAndOut("info","申请挂起失败！");
        }
    })
}

//普通用户申请撤销挂起
function cancelHangUp() {
    var orderCancelHangUp=$("#orderId").val().trim();
    var date=$("#orderDate").val().trim();
    var handler= $("#orderHandler").val().trim();
    var handleMethod = $("#handleMethod").val().trim();
    var handleResult =$("#orderHandleRult").val().trim();
    var statusCancelHangUp="申请撤销挂起";
    var admin=$("#orderAdmin").val();
    if(handleMethod.trim()==="" ){
        showInfoInAndOut("info","请填写处理方法！");
        return;
    }
    if( handleResult.trim() ==="" || handleResult.trim() ==="-1"){
        showInfoInAndOut("info","请选择处理结果！");
        return;
    }
    if(handleResult.trim()==="待处理"){
        showInfoInAndOut("info","请修改处理结果！");
        return;
    }
    if(admin.trim()==="" || admin.trim()==="-1"){
        showInfoInAndOut("info","请指定负责人！");
        return;
    }
    $("#workOrderClosedCycleForm").ajaxSubmit({
        url:'hangUp',
        dataType:'text',
        data:{
            order:orderCancelHangUp,
            date:date,
            handler:handler,
            handleMethod:handleMethod,
            handleResult:handleResult,
            status:statusCancelHangUp,
            admin:admin
        },
        type:'post',
        success: function () {
            $("#showDetail").modal('hide');
            showInfoInAndOut("info","申请撤销挂起成功！");
            getWorkOrder();
        },
        error:function () {
            $("#showDetail").modal('hide');
            showInfoInAndOut("info","申请撤销挂起失败！");
        }
    })
}

function submitCondition() {
    $("#loading").show();
    $("#workOrderClosedCycleForm").ajaxSubmit({
        url: 'workOrderCycleByPage',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showWorkOrder(raw);
            showAdminWorkOrder(raw)
        },
        error: function () {
            $("#loading").css("display", "none");
            $("#cycleTable").children().remove();
            $("#cycleAdminTable").children().remove();
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

//管理员表格
function showAdminWorkOrder(raw) {
    $("#loading").css("display", "none");
    if(raw==""){
        showInfoInAndOut("info", "对应表不存在！");
        return;
    }
    var data = eval("(" + raw + ")");
    $("#cycleAdminTable").children().remove();

    if (data['data'].length !== 0) {
        var optHtml = "<thead><tr><th>工单</th><th>日期</th><th>BSC</th><th>CELL</th><th>中文名</th><th>县区</th><th>代维</th>"+
            "<th>覆盖场景</th><th>是否VIP小区</th><th>指标名</th><th>指标值</th><th>当天出现次数</th><th>处理人</th><th>处理方法" +
            "</th><th>处理结果</th><th>退单次数</th><th>工单状态</th><th>负责人</th><th>管理</th></tr></thead><tbody>";
        var x = 0;
        for(var i=0;i<data['data'].length;i++){
            x++;
            var one=data['data'][i];
            var handler=one['处理人'];
            var handleMethod=one['处理方法'];
            var bsHandler=one['review处理人'];
            var bsHandleMethod=one['review处理方法'];
            var handlerShow="";
            var handleMethodShow="";
            if(bsHandler.trim().length>0 ){
                handlerShow=bsHandler;
            }
            if(bsHandler.trim().length===0&&handler.trim().length>0){
                handlerShow=handler;
            }
            if(bsHandleMethod.trim().length>0){
                handleMethodShow=bsHandleMethod;
            }
            if(bsHandleMethod.trim().length===0&&handleMethod.trim().length>0){
                handleMethodShow=handleMethod;
            }
            var treatResult=one['处理结果'];
            if(treatResult.trim().length===0){
                treatResult="待处理";
            }
            var status=one['工单状态'];
            if(status.trim().length===0){
                status="受理中";
            }
            var treatCount=one['处理次数'];
            if(treatCount.trim().length===0){
                treatCount='0';
            }
            optHtml += "<tr><td style='white-space:pre-wrap;min-width: 200px'>"+one['工单']+"</td><td>" + one['日期'] + "</td><td>" + one['BSC'] +
                "</td><td>" + one['CELL'] + "</td><td  style='white-space:pre-wrap;min-width: 120px'>" + one['中文名'] +
                "</td><td>" + one['县区'] + "</td><td>" + one['代维'] +
                "</td><td>" + one['覆盖场景'] + "</td><td>" + one['是否VIP小区'] +
                "</td><td>" + one['指标名'] + "</td><td>" + one['指标值'] +
                "</td><td>" + one['当天出现的次数'] + "</td><td>" + handlerShow+
                "</td><td style='white-space:pre-wrap;min-width:200px;'>"+handleMethodShow+"</td><td>"+treatResult+"</td><td>"+treatCount+
                "</td><td>"+status+"</td><td>"+one['管理员']+
                "</td><td><a style='cursor: pointer' class='btn btn-success' " +
                "id='manageHandle" + x + "' href='#showManageDetail' data-toggle='modal' onclick='showAdminWorkOrderDetail("+x+")'>管理</a></td>" +
                "</tr>";
        }
        optHtml += "</tbody>";
        $("#loading").css("display", "none");
        $("#cycleAdminTable").append(optHtml);

        setFormPageInfo("workOrderClosedCycleForm",data['page']);
        setPageView(data['page'],"cycleAdminDiv");
    }else{
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data['page'], "cycleAdminDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

//普通用户表格
function showWorkOrder(raw) {
    $("#loading").css("display", "none");
    if(raw==""){
        showInfoInAndOut("info", "对应表不存在！");
        return;
    }
    var data = eval("(" + raw + ")");
    $("#cycleTable").children().remove();

    if (data['data'].length !== 0) {
        var optHtml = "<thead><tr><th>工单</th><th>日期</th><th>BSC</th><th>CELL</th><th>中文名</th><th>县区</th><th>代维</th>"+
            "<th>覆盖场景</th><th>是否VIP小区</th><th>指标名</th><th>指标值</th><th>当天出现次数</th><th>处理人</th><th>处理方法" +
            "</th><th>处理结果</th><th>退单次数</th><th>工单状态</th><th>负责人</th><th>操作</th></tr></thead><tbody>";

        var x = 0;
        for(var i=0;i<data['data'].length;i++){
            x++;
            var one=data['data'][i];
            var handler=one['处理人'];
            var handleMethod=one['处理方法'];
            var bsHandler=one['review处理人'];
            var bsHandleMethod=one['review处理方法'];
            var handlerShow="";
            var handleMethodShow="";
            if(bsHandler.trim().length>0 ){
                handlerShow=bsHandler;
            }
            if(bsHandler.trim().length===0&&handler.trim().length>0){
                handlerShow=handler;
            }
            if(bsHandleMethod.trim().length>0){
                handleMethodShow=bsHandleMethod;
            }
            if(bsHandleMethod.trim().length===0&&handleMethod.trim().length>0){
                handleMethodShow=handleMethod;
            }
            var treatResult=one['处理结果'];
            if(treatResult.trim().length===0){
                treatResult="待处理";
            }
            var status=one['工单状态'];
            if(status.trim().length===0){
                status="受理中";
            }
            var treatCount=one['处理次数'];
            if(treatCount.trim().length===0){
                treatCount='0';
            }
            optHtml += "<tr><td style='white-space:pre-wrap;min-width: 200px'>"+one['工单']+"</td><td>" + one['日期'] + "</td><td>" + one['BSC'] +
            "</td><td>" + one['CELL'] + "</td><td style='white-space:pre-wrap;min-width: 120px'>" + one['中文名'] +
            "</td><td>" + one['县区'] + "</td><td>" + one['代维'] +
            "</td><td>" + one['覆盖场景'] + "</td><td>" + one['是否VIP小区'] +
            "</td><td>" + one['指标名'] + "</td><td>" + one['指标值'] +
            "</td><td>" + one['当天出现的次数'] + "</td><td>" + handlerShow+
            "</td><td style='white-space:pre-wrap;min-width:200px;'>"+handleMethodShow+"</td><td>"+treatResult+"</td><td>"+treatCount+
                "</td><td>"+status+"</td><td>"+one['管理员']+
            "</td><td><a style='cursor: pointer' class='btn btn-success' " +
            "id='updateHandle" + x + "' href='#showDetail' data-toggle='modal' onclick='showWorkOrderDetail("+x+")'>处理</a></td>" +
                "</tr>";
        }
        optHtml += "</tbody>";
        $("#loading").css("display", "none");
        $("#cycleTable").append(optHtml);

        setFormPageInfo("workOrderClosedCycleForm",data['page']);
        setPageView(data['page'],"cycleDiv");
    }else{
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data['page'], "cycleDiv");
        if($("#cellSelect").val().trim()==''){
            showInfoInAndOut("info", "没有找到对应的数据！");
        }else{
            showInfoInAndOut("info", "该小区不在您的负责范围！");
        }
    }
}

//管理员管理工单模态框
function showAdminWorkOrderDetail(x) {

    var handleResultArr=[];
    var statusArr=[];
    $("#orderManHandleRult").empty();
    $("#orderManStatus").empty();
    $("#orderManHandler").empty();

    var rowContent = $("#manageHandle" + x).parent().siblings();
    var workOrderNum = rowContent[0].innerHTML;
    $("#orderManId").val(workOrderNum);

    var date = rowContent[1].innerHTML;
    $("#orderManDate").val(date);

    var bsc = rowContent[2].innerHTML;
    $("#orderManBsc").val(bsc);

    var cell = rowContent[3].innerHTML;
    $("#orderManCell").val(cell);

    var chinese = rowContent[4].innerHTML;
    $("#orderManChinese").val(chinese);

    var county = rowContent[5].innerHTML;

    var maintain = rowContent[6].innerHTML;
    $("#orderManMaintain").val(maintain);

    var coverScene = rowContent[7].innerHTML;
    var vip = rowContent[8].innerHTML;

    var indexName = rowContent[9].innerHTML;
    $("#orderManIndexName").val(indexName);

    var indexValue = rowContent[10].innerHTML;
    $("#orderManIndexValue").val(indexValue);

    var times = rowContent[11].innerHTML;

    var user = rowContent[12].innerHTML;
    $('#orderManHandler').val(user);
   /* $.ajax({
        url:'getNormalUser',
        dataType:'json',
        type:'get',
        success:function (data) {
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var one = data[i];
                    if(one.trim()===user.trim()){
                        $('#orderManHandler').append("<option selected>" + one + "</option>");
                    }else{
                        $('#orderManHandler').append("<option>" + one + "</option>");
                    }
                }
            }
        }
    });
*/
    var handleMethod = rowContent[13].innerHTML;
    $("#handleManMethod").val(handleMethod);

    var handleResult=rowContent[14].innerHTML.trim()===''?'待处理':rowContent[14].innerHTML.trim();
    $("#orderManHandleRult").append("<option selected>"+handleResult+"</option>");

    var handleCount=rowContent[15].innerHTML.trim()===''?'0':rowContent[15].innerHTML.trim();
    $("#orderManHandleCount").val(handleCount);

    var status=rowContent[16].innerHTML.trim()==''?'受理中':rowContent[16].innerHTML.trim();
    $("#orderManStatusCurrent").val(status);
    var admin=rowContent[17].innerHTML;
    $("#orderManAdmin").val(admin);

    $("#orderManStatus").append("<option value='-1' selected></option>");
    $("#orderManStatus").append("<option>完结</option>");

    if(status.trim()=='申请挂起'){
        $("#agreeHangUp").attr("style","display:inline-block");
        $("#refuseHangUp").attr("style","display:inline-block");
        $("#orderManStatus").empty();
    }else{
        $("#agreeHangUp").attr("style","display:none");
        $("#refuseHangUp").attr("style","display:none");
    }
    if(status.trim()=='申请撤销挂起'){
        $("#agreeCancelHangUp").attr("style","display:inline-block;width: 105px");
        $("#orderManStatus").empty();
    }else{
        $("#agreeCancelHangUp").attr("style","display:none");
    }
    if(status.trim()!='已退回'&&status.trim()!='完结' && admin.trim() !=''
        && status.trim()!='申请挂起' && status.trim() !='申请撤销挂起' && status.trim() !='已挂起'
        && parseInt(handleCount)<=2
    ){
        $("#giveBack").attr("style",'display:inline-block;width: 105px');
    }else{
        $("#giveBack").attr("style","display:none");
    }
    if(status.trim()=='完结'|| status.trim() =='已挂起'||status.trim()=='申请挂起'
        ||status.trim()=='申请撤销挂起'){
        $("#ensureOrder").attr("style","display:none");
        $("#orderManStatus").empty();
    }else{
        $("#ensureOrder").attr("style","display:inline-block");
    }


}

//普通用户处理工单模态框
function showWorkOrderDetail(x) {
    var handleResultArr=[];
    var statusArr=[];
    $("#orderHandleRult").empty();
    $("#orderAdmin").empty();
    $("#orderStatus").empty();
    var rowContent = $("#updateHandle" + x).parent().siblings();
    var workOrderNum = rowContent[0].innerHTML;
    $("#orderId").val(workOrderNum);

    var date = rowContent[1].innerHTML;
    $("#orderDate").val(date);

    var bsc = rowContent[2].innerHTML;
    $("#orderBsc").val(bsc);

    var cell = rowContent[3].innerHTML;
    $("#orderCell").val(cell);

    var chinese = rowContent[4].innerHTML;
    $("#orderChinese").val(chinese);

    var county = rowContent[5].innerHTML;

    var maintain = rowContent[6].innerHTML;
    $("#orderMaintain").val(maintain);

    var coverScene = rowContent[7].innerHTML;
    var vip = rowContent[8].innerHTML;

    var indexName = rowContent[9].innerHTML;
    $("#orderIndexName").val(indexName);

    var indexValue = rowContent[10].innerHTML;
    $("#orderIndexValue").val(indexValue);

    var times = rowContent[11].innerHTML;

    var handler = rowContent[12].innerHTML;
    $("#orderHandler").val(handler);

    var handleMethod = rowContent[13].innerHTML;
    $("#handleMethod").val(handleMethod);

    var handleResult=rowContent[14].innerHTML;
    handleResultArr=["待处理","正在处理","已完成"];
    $("#orderHandleRult").append("<option value='-1' selected></option>");
    for(var j = 0;j<handleResultArr.length;j++){
        if(handleResultArr[j]===handleResult){
            $("#orderHandleRult").append("<option selected>"+handleResult+"</option>");
        }else{
            $("#orderHandleRult").append("<option>"+handleResultArr[j]+"</option>");
        }
    }

    var handleCount=rowContent[15].innerHTML.trim()==''?'0':rowContent[15].innerHTML.trim();
    $("#orderHandleCount").val(handleCount);

    var status=rowContent[16].innerHTML.trim()==''?'受理中':rowContent[16].innerHTML.trim();
    if(status.trim()=='待审核'||status.trim()=='受理中'|| status.trim()=='已退回'|| status.trim()=='超时'){
        $("#applyForHangUp").attr("style","display:inline-block");
    }else{
        $("#applyForHangUp").attr("style","display:none");
    }

    if(status.trim()=='已挂起'){
        $("#cancelHangUp").attr("style","display:inline-block;width: 105px");
    }else{
        $("#cancelHangUp").attr("style","display:none");
    }

    if((status.trim()=='完结' || status.trim()=='申请挂起'
        || status.trim()=='已挂起' || status.trim()=='申请撤销挂起')||parseInt(handleCount)>2 ){
        $("#updateOrderBtn").attr("style","display:none");
    }else{
        $("#updateOrderBtn").attr("style","inline-block");
    }

    $("#orderStatus").append("<option selected>"+status+"</option>");

    var admin=rowContent[17].innerHTML;
    //console.log(admin);
    $('#orderAdmin').append("<option selected value='-1'></option>");
    $.ajax({
        url:'getAdministrator',
        dataType:'json',
        type:'get',
        success:function (data) {
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    var one = data[i];
                    if(one.trim()===admin.trim()){
                        $('#orderAdmin').append("<option selected>" + one + "</option>");
                    }else{
                        $('#orderAdmin').append("<option>" + one + "</option>");
                    }
                }
            }
        }
    });
}

//统计信息
function  showEvaluateData(one) {

    $("#allTable").children().remove();
    $("#finishedTable").children().remove();
    $("#overTimeTable").children().remove();

    for(var j=0;j<one['indicatorStatistic'].length;j++){
        var oneIndicator=one['indicatorStatistic'][j];
        $("#allTable").append("<td>"+oneIndicator+"(<span>"+one['a'+j]+"</span>)</td>");
        $("#finishedTable").append("<td>"+oneIndicator+"(<span>"+one['f'+j]+"</span>)</td>");
        $("#overTimeTable").append("<td>"+oneIndicator+"(<span>"+one['o'+j]+"</span>)</td>");
    }
    $("#collapseExample").collapse('toggle');
}