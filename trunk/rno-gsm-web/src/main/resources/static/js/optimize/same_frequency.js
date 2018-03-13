var flag;
var cellValCache=new Array();
var bscValCache=new Array();
var dateValCache=new Array();
$(document).ready(function() {

	$("#searchBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}
		flag=true;
		getFrequency();
	});

	$("#exportBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}
		$("#SearchE").val("search");
		$("#CaculateE").val("");
		$("#frequencyForm").submit();
	});

	$("#caculateBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}
		flag=false;
		calculateFrequency();
	});

	$("#cal_exportBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}
		$("#CaculateE").val("caculate");
		$("#SearchE").val("");
		$("#frequencyForm").submit();
	});

	popUp();
	
})

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
				url: 'frequencyDate',
				dataType: 'json',
				type: 'get',
				success: function (data) {
					$('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

					if (data.length != 0) {
						for (var i = 0; i < data.length; i++) {
							var one = data[i];
							dateValCache[i] = one;
							$('#search').append("<option>" + one + "</option>");
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
				url: 'frequencyBsc',
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
				url: 'frequencyCell',
				dataType: 'json',
				type: 'get',
				success: function (data) {
					$('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");
					if (data.length != 0) {
						for (var i = 0; i < data.length; i++) {
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
			if(cellVal[i]!=-1 && cellVal[i].trim() !='') {
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
function showFrequency(raw) {
	var data = eval("(" + raw + ")");
	$("#frequencyTable").children().remove();
	if(data['data'].length != 0) {
		var optHtml = "<thead><tr><th>日期</th><th>BSC</th><th>CELL</th><th>CELLR_BSC</th><th>CELLR</th>" +
				"<th>BSIC</th><th>BCCHNO</th><th>距离</th></tr></thead><tbody>";
		for ( var i = 0; i < data['data'].length; i++) {
			var one = data['data'][i];
			optHtml += "<tr><td>"+one['日期']+"</td><td>"+one['BSC']+"</td><td>"+one['CELL']+"</td><td>"+
			          one['CELLR_BSC']+"</td><td>"+one['CELLR']+"</td><td>"+one['BSIC']+"</td><td>"+one['BCCHNO']+"</td><td>"+
						window.parseFloat(one['距离']).toFixed(2)+"</td><td></tr>";
		}
		optHtml += "</tbody>";
		//console.log(optHtml);
	    $("#loading").css("display", "none");
		$("#frequencyTable").append(optHtml);
		
		// 设置隐藏的page信息
		setFormPageInfo("frequencyForm", data['page']);

		// 设置分页面板
		setPageView(data['page'], "frequencyDiv");
     }else{
    	 $("#loading").css("display", "none");
    	// 设置分页面板
 		setPageView(data['page'], "frequencyDiv");
    	showInfoInAndOut("info", "没有找到对应的数据！");
     }
}

function showFrequencys(raw) {
	var data = eval("(" + raw + ")");
	$("#frequencyTable").children().remove();
	if(data['datas'].length != 0) {
		var optHtml = "<thead><tr><th>日期</th><th>BSC</th><th>CELL</th><th>CELLR_BSC</th><th>CELLR</th>" +
			"<th>BSIC</th><th>BCCHNO</th><th>距离</th></tr></thead><tbody>";
		for ( var i = 0; i < data['datas'].length; i++) {
			var one = data['datas'][i];
			optHtml += "<tr><td>"+one['Date']+"</td><td>"+one['BSC']+"</td><td>"+one['CELL']+"</td><td>"+
				one['CELLR_BSC']+"</td><td>"+one['CELLR']+"</td><td>"+one['BSIC']+"</td><td>"+one['BCCHNO']+"</td><td>"+
				window.parseFloat(one['距离']).toFixed(2)+"</td><td></tr>";
		}
		optHtml += "</tbody>";
		//console.log(optHtml);
		$("#loading").css("display", "none");
		$("#frequencyTable").append(optHtml);

		// 设置隐藏的page信息
		setFormPageInfo("frequencyForm", data['pages']);

		// 设置分页面板
		setPageView(data['pages'], "frequencyDiv");
	}else{
		$("#loading").css("display", "none");
		// 设置分页面板
		setPageView(data['pages'], "frequencyDiv");
		showInfoInAndOut("info", "没有找到对应的数据！");
	}
}

function getFrequency() {
	// 重置分页条件
	initFormPage('frequencyForm');
	// 提交表单
	sumbitCondition();
}


function calculateFrequency() {
	// 重置分页条件
	initFormPage('frequencyForm');
	// 提交表单
	sumbitConditions();
}

/**
 * 提交表单
 */
function sumbitCondition() {
	$("#loading").show();
	$("#frequencyForm").ajaxSubmit({
		url : 'queryFrequencyByPage',
		dataType : 'text',
		type : 'post',
		success : function(raw) {
			  showFrequency(raw);
	    },
		error : function() {
			$("#loading").css("display", "none");
			showInfoInAndOut("info", "不存在当前表！");
			$("#capacityTable").children().remove();
		}
	})
}

function sumbitConditions(){
	$("#loading").show();
	$("#frequencyForm").ajaxSubmit({
		url : 'calculateFrequencyByPage',
		dataType : 'text',
		type : 'post',
		success : function(raw) {
			showFrequencys(raw);
		},
		error : function() {
			$("#loading").css("display", "none");
			showInfoInAndOut("info", "不存在当前表！");
			$("#capacityTable").children().remove();
		}
	})
}



/**
 * 分页跳转的响应
 * 
 * @param dir
 * @param action（方法名）
 * @param formId
 * @param divId
 */
function showListViewByPage(dir, action, formId, divId) {
	var form = $("#" + formId);
	var div = $("#" + divId);
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
		}
	} else if (dir === "num") {
		var userinput = $(div).find("#showCurrentPage").val();
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
		if(flag==true){
			action();
		}else{
			sumbitConditions()
		}
	}
}


