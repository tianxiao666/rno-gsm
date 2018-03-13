var cellValCache=new Array();
var bscValCache=new Array();
var dateValCache=new Array();
$(document).ready(function() {
	$("#searchBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}
		if($('input:checked').length!=0){
			$("#checkValue").val("cal");
		}
		getCapacity();
	});

	$("#exportBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}
		if($('input:checked').length!=0){
			$("#checkValue").val("cal");
		}
		$("#capacityForm").submit();
	});

	popUp();
	shouError();
	
})


function shouError() {
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
				url: 'capacityDate',
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
				url: 'capacityBsc',
				dataType: 'json',
				type: 'get',
				success: function (data) {
					$('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

					if (data.length != 0) {
						for (var i = 0; i < data.length; i++) {
							var one = data[i];
							bscValCache[i] = one;
							$('#search').append("<option>" + one + "</option>");
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
			if(bscVal[i]!=-1 && bscVal[i].trim() !='') {
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
				url: 'capacityCell',
				dataType: 'json',
				type: 'get',
				success: function (data) {
					$('#myModalLabel1').append("可选" + (data.length) + "个,双击可添加");

					if (data.length != 0) {
						for (var i = 0; i < data.length; i++) {
							var one = data[i];
							cellValCache[i] = one;
							$('#search').append("<option>" + one + "</option>");
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
			if(cellVal[i]!=-1 && cellVal[i].trim() != '') {
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
function showCapacity(raw) {
	var data = eval("(" + raw + ")");
	$("#capacityTable").children().remove();
	if(data['data'].length != 0) {
		if(data['calculate']=="cal"){
			var optHtml = "<thead><tr><th>BSC</th><th>CELL</th><th>平均峰值语音</th><th>平均峰值数据</th><th>平均峰值话务</th>" +
				"<th>空闲传输数</th><th>载波数</th><th>合理载波数</th><th>需求</th></thead><tbody>";
			for ( var i = 0; i < data['data'].length; i++) {
				var one = data['data'][i];
				optHtml += "<tr><td>"+one['BSC']+"</td><td>"+one['CELL']+"</td><td>"+one['平均峰值语音']+"</td><td>"+
					one['平均峰值数据']+"</td><td>"+one['平均峰值话务']+"</td><td>"+
					one['空闲传输数']+"</td><td>"+one['载波数']+"</td><td>"+erlang_b(one['平均峰值话务'])+"</td><td>"+
					requirement(one['载波数'],erlang_b(one['平均峰值话务']))+"</td></tr>";
			}
			optHtml += "</tbody>";
			//console.log(optHtml);
			$("#loading").css("display", "none");
			$("#capacityTable").append(optHtml);

			// 设置隐藏的page信息
			setFormPageInfo("capacityForm", data['page']);

			// 设置分页面板
			setPageView(data['page'], "capacityDiv");
		}else {
			var optHtml = "<thead><tr><th>BSC</th><th>CELL</th><th>平均峰值语音</th><th>平均峰值数据</th><th>平均峰值话务</th>" +
				"<th>载波数</th><th>合理载波数</th><th>需求</th></thead><tbody>";
			for ( var i = 0; i < data['data'].length; i++) {
				var one = data['data'][i];
				optHtml += "<tr><td>"+one['BSC']+"</td><td>"+one['CELL']+"</td><td>"+one['平均峰值语音']+"</td><td>"+
					one['平均峰值数据']+"</td><td>"+one['平均峰值话务']+"</td><td>"+
					one['载波数']+"</td><td>"+erlang_b(one['平均峰值话务'])+"</td><td>"+
					requirement(one['载波数'],erlang_b(one['平均峰值话务']))+"</td></tr>";
			}
			optHtml += "</tbody>";
			//console.log(optHtml);
			$("#loading").css("display", "none");
			$("#capacityTable").append(optHtml);

			// 设置隐藏的page信息
			setFormPageInfo("capacityForm", data['page']);

			// 设置分页面板
			setPageView(data['page'], "capacityDiv");
		}
     }else{
    	 $("#loading").css("display", "none");
    	// 设置分页面板
 		setPageView(data['page'], "capacityDiv");
    	showInfoInAndOut("info", "没有找到对应的数据！");
     }
}


//合理载波数
var erl = "0.02 0.223 0.602 1.092 1.657 2.276 2.935 3.627 4.345 5.084 5.842 6.615 7.402 8.2 9.01 9.828 10.656 11.491 12.333 13.182 14.036 14.895 15.761 16.631 17.505 18.383 19.265 20.15 21.039 21.932 22.827 23.725 24.626 25.529 26.435 27.343 28.254 29.166 30.081 30.997 31.916 32.836 33.758 34.682 35.607 36.534 37.462 38.392 39.323 40.255 41.1 42.12 43.06 44.0 44.94 45.88 46.82 47.76 48.7 49.64 50.59 51.53 52.48 53.43 54.38 55.33 56.27 57.23 58.18 59.13 60.08 61.04 61.99 62.94 63.9 64.86 65.81 66.77 67.73 68.69 69.65 70.61 71.57 72.53 73.49 74.45 75.42 76.38 77.34 78.31 79.27 80.24 81.2 82.17 83.13 84.1 85.07 86.04 87.0 87.97";
var erlang = erl.split(" ");
function erlang_b( b ) {
	var key=0;
	for(var i=0;i<erlang.length;i++){
		if(parseFloat(erlang[i])<parseFloat(b)){
			continue;
		}else {
			key=i+1;
			break;
		}
	}
	if(key==0){
		key=100;
	}
	var erlang_b=Math.ceil(key/8);
	return erlang_b;
}

//需求
function requirement(carriers,reacarrier) {
	var reacarriers=parseInt(reacarrier)
	if(carriers== reacarriers){
		return "合理配置";
	}else if(carriers<reacarriers){
		return "扩容"+(reacarriers-carriers)+"个载波";
	}else{
		return "减容"+(carriers-reacarriers)+"个载波";
	}
}

/**
 * 按条件查询干扰矩阵
 */
function getCapacity() {
	// 重置分页条件
	initFormPage('capacityForm');
	// 提交表单
	sumbitCondition();

}

/**
 * 提交表单
 */
function sumbitCondition() {
	$("#loading").show();
	$("#capacityForm").ajaxSubmit({
		url : 'queryCapacityByPage',
		dataType : 'text',
		type : 'post',
		success : function(raw) {
			  showCapacity(raw);
	    },
		error : function() {
			$("#loading").css("display", "none");
			showInfoInAndOut("info", "不存在当前表！");
			$("#capacityTable").children().remove();
		}
	})
}

