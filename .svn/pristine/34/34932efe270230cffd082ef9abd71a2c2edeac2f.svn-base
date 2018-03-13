var cellValCache=new Array();
var bscValCache=new Array();
var dateValCache=new Array();
$(document).ready(function() {

	$("#searchBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}else if($("#cellSelect").val()=='-1'||$("#cellSelect").val()==null){
			showInfoInAndOut("info", "请选择小区！");
			return;
		}
		getNeigh();
	});

	$("#exportBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}else if($("#cellSelect").val()==='-1'||$("#cellSelect").val().trim()===""){
			showInfoInAndOut("info", "请选择小区！");
			return;
		}
		$("#neighForm").submit();
	});
	
	popUp();
	showError();
})

function showError() {
	if($("#error").val()=="error"){
		showInfoInAndOut("info", "不存在当前表！");
		$("#error").val("");
	}
}

function popUp(){

	var thisDom;
	//日期多选
	$("#dateBtn").click(function(){
		$('#myModalLabel1').empty();
		$('#search').empty();
		$("#search_to").empty();
		$('#match').val('');
		//$('#myModalLabel2').empty();
	    
	    $("#myModalLabel").text("选择日期");
	    thisDom = "dateSelect";

		if(dateValCache=='') {
			$.ajax({
				url: 'neighDate',
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
		}else {
			$.each(dateValCache,function(index, value){
				$('#search').append("<option>" + value + "</option>");
			})
			$('#myModalLabel1').append("可选"+(dateValCache.length)+"个,双击可添加");
		}

		var dateVal = $("#dateSelect").val().split(",");
		for ( var i = 0; i < dateVal.length; i++) {
			if(dateVal[i]!=-1) {
				$('#search_to').append("<option>" + dateVal[i] + "</option>");
			}
		}
		$('#myModalLabel2').html("已选"+($('#search_to option').length)+"个，双击可删除");

	});

	//bsc多选
	$("#bscButton").click(function(){
		$('#myModalLabel1').empty();
		$('#search').empty();
		$("#search_to").empty();
		//$('#myModalLabel2').empty();

		$("#myModalLabel").text("选择网元");
		thisDom = "bscSelect";

		if(bscValCache=='') {
			$.ajax({
				url : 'neighBsc',
				dataType : 'json',
				type : 'get',
				success : function(data) {
					$('#myModalLabel1').append("可选"+(data.length)+"个,双击可添加");
					if(data.length != 0) {
						for ( var i = 0; i < data.length; i++) {
							var one = data[i];
							$('#search').append("<option>" + one + "</option>");
							bscValCache[i] = one;
						}
					}
				}
			});
		}else {
			$.each(bscValCache,function(index, value){
				$('#search').append("<option>" + value + "</option>");
			})
			$('#myModalLabel1').append("可选"+(bscValCache.length)+"个,双击可添加");
		}

		var bscVal = $("#bscSelect").val().split(",");
		for ( var i = 0; i < bscVal.length; i++) {
			if(bscVal[i]!=-1 && bscVal[i].trim()!='') {
				$('#search_to').append("<option>" + bscVal[i] + "</option>");
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

		if(cellValCache=='') {
			$.ajax({
				url : 'neighCell',
				dataType : 'json',
				type : 'get',
				success : function(data) {
					$('#myModalLabel1').append("可选"+(data.length)+"个,双击可添加");
					if(data.length != 0) {
						for ( var i = 0; i < data.length; i++) {
							var one = data[i];
							$('#search').append("<option>" + one + "</option>");
							cellValCache[i] = one;
						}
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


	//确定按钮
	$('#ensure').click(function () {
		//$("#" + thisDom).children().remove();
		var html = "";
		$("#search_to option").each(function(index){
			if(index==0) {
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
		if(html.length==0){
			if($("#" + thisDom).val()!=-1){
				$("#" + thisDom + " option:selected").remove();
			}
			$("#" + thisDom + " option[value='-1']").attr("selected", "selected");
		}else{
			var arr = html.split(",");
			var flag = false;
			//console.log(arr.length);
			if(arr.length==1){
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


/**
 * 列表显示
 */
function showNeigh(raw) {
	var data = eval("(" + raw + ")");
	$("#neighTable").children().remove();
	if(data['data'].length != 0) {
		var optHtml = "<thead><tr><th>日期</th><th>BSC</th><th>CELL</th><th>CELLR</th><th>距离</th>" +
				"<th>测量比例</th><th>切换申请</th><th>切换成功</th></tr></thead><tbody>";
		for ( var i = 0; i < data['data'].length; i++) {
			var one = data['data'][i];
			optHtml += "<tr><td>"+one['日期']+"</td><td>"+one['BSC']+"</td><td>"+one['CELL']+"</td><td>"+
			          one['CELLR']+"</td><td>"+one['距离']+"</td><td>"+one['测量比例']+"</td><td>"+one['切换申请']+"</td><td>"+
			          one['切换成功']+"</td><td></tr>";
		}
		optHtml += "</tbody>";
		//console.log(optHtml);
	    $("#loading").css("display", "none");
		$("#neighTable").append(optHtml);
		
		// 设置隐藏的page信息
		setFormPageInfo("neighForm", data['page']);

		// 设置分页面板
		setPageView(data['page'], "neighDiv");
     }else{
    	 $("#loading").css("display", "none");
    	// 设置分页面板
 		setPageView(data['page'], "neighDiv");
    	showInfoInAndOut("info", "没有找到对应的数据！");
     }
}


function getNeigh() {
	// 重置分页条件
	initFormPage('neighForm');
	// 提交表单
	sumbitCondition();
}

/**
 * 提交表单
 */
function sumbitCondition() {
	$("#loading").show();
	$("#neighForm").ajaxSubmit({
		url : 'queryNeighByPage',
		dataType : 'text',
		type : 'post',
		success : function(raw) {
			  showNeigh(raw);
	    },
		error : function() {
			$("#loading").css("display", "none");
			showInfoInAndOut("info", "不存在当前表！");
			$("#capacityTable").children().remove();
		}
	})
}

