var dateValCache=new Array();
var bscValCache=new Array();
var cellValCache=new Array();
$(document).ready(function() {

	$("#searchBtn").click(function(){
		/*alert($("#dateSelect").val());
		return;*/
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}else if($("#templateSelect").val()=='-1'||$("#templateSelect").val()==null){
			showInfoInAndOut("info", "请选择模板！");
			return;
		}
		getTrafficQuery();
	});

	$("#exportBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}else if($("#templateSelect").val()=='-1'||$("#templateSelect").val()==null){
			showInfoInAndOut("info", "请选择模板！");
			return;
		}
		exportMot();
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
	    if(dateValCache==''){
	    	$.ajax({
				url : 'getTQAllDate',
				dataType : 'json',
				type : 'get',
				success : function(data) {
					$('#myModalLabel1').append("可选"+(data.length)+"个,双击可添加");
					if(data.length != 0) {
						for ( var i = 0; i < data.length; i++) {
							var one = data[i];
							$('#search').append("<option>" + one + "</option>");
							dateValCache[i] = one;
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
		for ( var i = 0; i < dateVal.length; i++) {
			if(dateVal[i]!=-1) {
				$('#search_to').append("<option>" + dateVal[i] + "</option>");
			}
		}
		$('#myModalLabel2').html("已选"+($('#search_to option').length)+"个，双击可删除");
		
	});
	
	//时间多选
	$("#timeBtn").click(function(){
		$('#myModalLabel1').empty();
		$('#search').empty();
		$("#search_to").empty();
		$('#match').val('');
		//$('#myModalLabel2').empty();
	   
	    $("#myModalLabel").text("选择时间");
	    thisDom = "timeSelect";
	 
    	$('#search').append('<option value="0000:0100">0000:0100</option>');
    	$('#search').append('<option value="0100:0200">0100:0200</option>');
    	$('#search').append('<option value="0200:0300">0200:0300</option>');
    	$('#search').append('<option value="0300:0400">0300:0400</option>');
    	$('#search').append('<option value="0400:0500">0400:0500</option>');
    	$('#search').append('<option value="0500:0600">0500:0600</option>');
    	$('#search').append('<option value="0600:0700">0600:0700</option>');
    	$('#search').append('<option value="0700:0800">0700:0800</option>');
    	$('#search').append('<option value="0800:0900">0800:0900</option>');
    	$('#search').append('<option value="0900:1000">0900:1000</option>');
    	$('#search').append('<option value="1000:1100">1000:1100</option>');
    	$('#search').append('<option value="1100:1200">1100:1200</option>');
    	$('#search').append('<option value="1200:1300">1200:1300</option>');
    	$('#search').append('<option value="1300:1400">1300:1400</option>');
    	$('#search').append('<option value="1400:1500">1400:1500</option>');
    	$('#search').append('<option value="1500:1600">1500:1600</option>');
    	$('#search').append('<option value="1600:1700">1600:1700</option>');
    	$('#search').append('<option value="1700:1800">1700:1800</option>');
    	$('#search').append('<option value="1800:1900">1800:1900</option>');
    	$('#search').append('<option value="1900:2000">1900:2000</option>');
    	$('#search').append('<option value="2000:2100">2000:2100</option>');
    	$('#search').append('<option value="2100:2200">2100:2200</option>');
    	$('#search').append('<option value="2200:2300">2200:2300</option>');
    	$('#search').append('<option value="2300:0000">2300:0000</option>');
    	
    	$('#myModalLabel1').append("可选"+($('#search option').length)+"个,双击可添加");
    	
    	var timeVal = $("#timeSelect").val().split(",");
		for ( var i = 0; i < timeVal.length; i++) {
			if(timeVal[i]!=-1) {
			    $('#search_to').append("<option>" + timeVal[i] + "</option>");
			}
		}
		$('#myModalLabel2').html("已选"+($('#search_to option').length)+"个，双击可删除");
	
	});
	
	//网元多选
	$("#bscBtn").click(function(){
		$('#myModalLabel1').empty();
		$('#search').empty();
		$("#search_to").empty();
		$('#match').val('');
		//$('#myModalLabel2').empty();
	   
	    $("#myModalLabel").text("选择网元");
	    thisDom = "bscSelect";
	    
	    if(bscValCache==''){
	    	$.ajax({
				url : 'getTQAllBsc',
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
			if(bscVal[i]!=-1 &&bscVal[i].trim() !='') {
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
	    
	    if(cellValCache==''){
	    	$.ajax({
				url : 'getTQAllCell',
				dataType : 'json',
				data : $("#dateSelect").val(),
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
	
	//指标多选
	$("#indexBtn").click(function(){
		$('#myModalLabel1').empty();
		$('#search').empty();
		$("#search_to").empty();
		$('#match').val('');
		//$('#myModalLabel2').empty();
	   
	    $("#myModalLabel").text("选择指标");
	    thisDom = "indexSelect";
	    
	    $("#indexSelect option").each(function(index){
	    	if($(this).val()!=-1 && !$(this).attr("selected")) {
	    		$('#search').append("<option>" + $(this).val() + "</option>");
	    	}
	    });
	    
    	$('#myModalLabel1').append("可选"+($("#indexSelect option").length-1)+"个,双击可添加");	    
	    
	    var indexVal = $("#indexSelect").val().split(",");
		for ( var i = 0; i < indexVal.length; i++) {
			if(indexVal[i]!=-1) {
			    $('#search_to').append("<option>" + indexVal[i] + "</option>");
			}
		}
		$('#myModalLabel2').html("已选"+($('#search_to option').length)+"个，双击可删除");
	    
	});
	
	//模板指标联动
	$("#templateSelect").change(function(){
		//alert($("#templateSelect option:selected").text());
		$.ajax({
			url : 'getIndexByTemplate',
			dataType : 'json',
			data : {
				template : $("#templateSelect option:selected").text()
			},
			type : 'get',
			success : function(data) {
				if(data.length != 0) {
					$("#indexSelect").empty();
					$('#indexSelect').append("<option value='-1'>" + '' + "</option>");
					for ( var i = 0; i < data.length; i++) {
						var one = data[i];
						$('#indexSelect').append("<option value='" + one + "'>" + one + "</option>");
					}
				}
			}
		});
	});

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


//导出按钮
function exportMot() {
	$("#trafficQueryForm").submit();
}

/**
 * 列表显示
 */
function showTrafficQuery(raw) {
	var data = eval("(" + raw + ")");
	$("#trafficQueryTable").children().remove();
	$("#table-div").removeClass("div-larger");
	if(data.data.length != 0) {
		var optHtml = "<thead><tr>";
		$.each(data.data, function(n, one) {
            if(n==0){
                $.each(one, function(k, v) {
                    optHtml += "<th>" + k + "</th>";
                })
            }
        });

        optHtml += "</tr></thead><tbody>";

        $.each(data.data, function(n, one) {
            optHtml += "<tr>";
            $.each(one, function(k, v) {
            	if(v!=null){
            		optHtml += "<td>" + v + "</td>";
            	}else{
            		optHtml += "<td>" + '' + "</td>";
            	}
            });
            optHtml += "</tr>";
        });
        
		optHtml += "</tbody>";
		//console.log(optHtml);
	    $("#loading").css("display", "none");
	    //$("#table-div").addClass("div-larger");
		$("#trafficQueryTable").append(optHtml);
		
		// 设置隐藏的page信息
		setFormPageInfo("trafficQueryForm", data);

		// 设置分页面板
		setPageView(data, "trafficQueryDiv");
     }else{
    	 $("#loading").css("display", "none");
    	// 设置分页面板
 		setPageView(data, "trafficQueryDiv");
    	showInfoInAndOut("info", "没有找到对应的数据！");
     }
}

/**
 * 按条件查询干扰矩阵
 */
function getTrafficQuery() {
	// 重置分页条件
	initFormPage('trafficQueryForm');
	// 提交表单
	sumbitCondition();
}

/**
 * 提交表单
 */
function sumbitCondition() {
	$("#loading").show();
	$("#trafficQueryForm").ajaxSubmit({
		url : 'showTable',
		dataType : 'text',
		type : 'post',
		success : function(raw) {
			  showTrafficQuery(raw);
	    },
	    error : function() {
	    	$("#loading").css("display", "none");
	    	$("#trafficQueryTable").children().remove();
	    	initFormPage('trafficQueryForm');
	    	showInfoInAndOut("info", "不存在当前表！");
	    }
	})
}

