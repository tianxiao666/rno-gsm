var a;
var bscValCache=new Array();
var cellValCache=new Array();
$(document).ready(function() {

	$("#searchBtn").click(function(){
		/*alert($("#dateSelect").val());
		return;*/
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}
		a = "querySnfByPage";
		getSameNFCheck();
	});

	$("#exportBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}else if($("#isQuery").val()!='true') {
			showInfoInAndOut("info", "请先查询后导出！");
			return;
		}else {
			exportSameNFCheck();
		}
		
	});
	
	$("#calculateBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}
		a = "calculation";
		getSameNFCheck();
	});
	
	$("#exportCalBtn").click(function(){
		if($("#dateSelect").val()=='-1'||$("#dateSelect").val()==null){
			showInfoInAndOut("info", "请选择日期！");
			return;
		}else if($("#isCal").val()!='true') {
			showInfoInAndOut("info", "请先计算后导出！");
			return;
		}else {
			exportCalSameNFCheck();
		}
		
	})

	popUp();

	
})

function popUp(){

	var thisDom;
	
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
				url : 'getAllBsc',
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
	    
	    if(cellValCache==''){
	    	$.ajax({
				url : 'getAllCell',
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
function exportSameNFCheck() {
	$("#sameNFCheckForm").attr("action", "exportSnf");
	$("#sameNFCheckForm").attr("method", "post");
	$("#sameNFCheckForm").submit();
}

//ToEx按钮
function exportCalSameNFCheck() {
	$("#sameNFCheckForm").attr("action", "exportCalSnf");
	$("#sameNFCheckForm").attr("method", "post");
	$("#sameNFCheckForm").submit();
}

/**
 * 列表显示
 */
function showSameNFCheck(raw) {
	var data = eval("(" + raw + ")");
	$("#sameNFCheckTable").children().remove();
	$("#isQuery").val(data['queryFlag']==null?'false':'true');
	$("#isCal").val(data['calFlag']==null?'false':'true');
	if(data['data'].data.length != 0) {
		var optHtml = "<thead><tr><th>日期</th><th>BSC</th><th>CELL</th><th>CELLR_BSC</th><th>CELLR</th>" +
				"<th>CELL_DCHNO</th><th>CELLR_DCHNO</th><th>类型</th><th>距离</th></tr></thead><tbody>";
		for ( var i = 0; i < data['data'].data.length; i++) {
			var one = data['data'].data[i];
			optHtml += "<tr><td>"+one['日期']+"</td><td>"+one['BSC']+"</td><td>"+one['CELL']+"</td><td>"+
			          one['CELLR_BSC']+"</td><td>"+one['CELLR']+"</td><td>"+one['CELL_DCHNO']+"</td><td>"+
			          one['CELLR_DCHNO']+"</td><td>"+one['类型']+"</td><td>"+one['距离']+"</td></tr>";
		}
		optHtml += "</tbody>";
		//console.log(optHtml);
	    $("#loading").css("display", "none");
		$("#sameNFCheckTable").append(optHtml);
		
		// 设置隐藏的page信息
		setFormPageInfo("sameNFCheckForm", data['data']);

		// 设置分页面板
		setPageView(data['data'], "sameNFCheckDiv");
     }else{
    	 $("#loading").css("display", "none");
    	// 设置分页面板
 		setPageView(data['data'], "sameNFCheckDiv");
    	showInfoInAndOut("info", "没有找到对应的数据！");
     }
}

/**
 * 按条件查询
 */
function getSameNFCheck() {
	// 重置分页条件
	initFormPage('sameNFCheckForm');
	// 提交表单
	sumbitCondition();
}

/**
 * 提交表单
 */
function sumbitCondition() {
	$("#loading").show();
	$("#sameNFCheckForm").ajaxSubmit({
		url : a,
		dataType : 'text',
		type : 'post',
		success : function(raw) {
			  showSameNFCheck(raw);
	    },
	    error : function(){
	    	$("#loading").css("display", "none");
	    	$("#sameNFCheckTable").children().remove();
	    	initFormPage('sameNFCheckForm');
	    	showInfoInAndOut("info", "加载数据出错！");
	    }
	})
}