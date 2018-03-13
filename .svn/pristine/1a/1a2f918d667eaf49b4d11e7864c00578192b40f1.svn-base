var cellValCache=new Array();
$(document).ready(function() {

	bindEvent();
	
	popUp();
	
})

function bindEvent(){
	
	$("#cellClearBtn").click(function(){
		$("#cell").val('');
	});
	
	$("#bsicClearBtn").click(function(){
		$("#bsic").val('');
	});
	
	$("#cellImportBtn").click(function(){
		$("#cellFile").trigger("click");
	});
	
	$('#cellFile').bind('change', function() {
	    if(!$("#cellFile").val().toUpperCase().endsWith(".TXT")){
			showInfoInAndOut('info', '请使用.txt文件!');
			return;
		}else{
			$("#cellFileForm").ajaxSubmit({
		        url : 'importCellFileForBsicAna',
		        dataType : 'text',
		        type : 'post',
		        success : function(data) {
		        	if(data=="false"){
						showInfoInAndOut('info', '文件内容格式不对!');
					}else{
						$("#cell").val(data);
					}
		        }
		    })
		}
	});
	
	$("#bsicImportBtn").click(function(){
		$("#bsicFile").trigger("click");
	});
	
	$('#bsicFile').bind('change', function() {
		if(!$("#bsicFile").val().toUpperCase().endsWith(".TXT")){
			showInfoInAndOut('info', '请使用.txt文件!');
			return;
		}else {
			$("#bsicFileForm").ajaxSubmit({
		        url : 'importBsicFileForBsicAna',
		        dataType : 'text',
		        type : 'post',
		        success : function(data) {
		        	if(data=="false"){
						showInfoInAndOut('info', '文件内容格式不对!');
					}else{
						$("#bsic").val(data);
					}
		        }
		    })
		}
	});
	
	$("#calBtn").click(function(){
		if($("#cell").val()==''){
			showInfoInAndOut("info", "请填写小区！");
			return;
		}
		getBsic();
	})
	
	$("#exportBtn").click(function(){
		if($("#cell").val()==''){
			showInfoInAndOut("info", "请填写小区！");
			return;
		}else if($("#bsicTable").html()=='') {
			showInfoInAndOut("info", "请先计算后导出！");
			return;
		}
		$("#bsicForm").submit();
	})
}

function popUp(){

	var thisDom;
	// 小区多选
	$("#cellMultiBtn").click(function(){
		$('#myModalLabel1').empty();
		$('#search').empty();
		$("#search_to").empty();
		$('#match').val('');
		// $('#myModalLabel2').empty();
	    
	    $("#myModalLabel").text("选择小区");
	    thisDom = "cell";
	    
	    if(cellValCache==''){
	    	$.ajax({
				url : 'cellForBsicAna',
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
		
		
		var cellVal = $("#cell").val().split(",");
		for ( var i = 0; i < cellVal.length; i++) {
			if(cellVal[i]!='') {
				$('#search_to').append("<option>" + cellVal[i] + "</option>");
			}
		}
		$('#myModalLabel2').html("已选"+($('#search_to option').length)+"个，双击可删除");
		
	});
	
	//bsic多选
	$("#bsicMultiBtn").click(function(){
		$('#myModalLabel1').empty();
		$('#search').empty();
		$("#search_to").empty();
		$('#match').val('');
		//$('#myModalLabel2').empty();
	   
	    $("#myModalLabel").text("选择BSIC");
	    thisDom = "bsic";
	    
	    for ( var i = 0; i < 8; i++) {
			for(var j = 0 ; j < 8; j++) {
				$('#search').append("<option>" + i + '' + j + "</option>");
			}
		}
	    $('#myModalLabel1').append("可选"+($("#search option").length)+"个,双击可添加");
	    var cellVal = $("#bsic").val().split(",");
		for ( var i = 0; i < cellVal.length; i++) {
			if(cellVal[i]!='') {
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
        };
        //alert("html="+html+","+html.length+","+"".length);
        $("#" + thisDom).val(html);
        
        $('#myModal').modal('hide');
    })

}

/**
 * 列表显示
 */
function showBsic(raw) {
	var data = eval("(" + raw + ")");
	$("#bsicTable").children().remove();
	if(data['data'].length != 0) {
		var optHtml = "<thead><tr><th>日期</th><th>CELL</th><th>BSIC</th></tr></thead><tbody>";
		for ( var i = 0; i < data['data'].length; i++) {
			var one = data['data'][i];
			optHtml += "<tr><td>"+one['日期']+"</td><td>"+one['CELL']+"</td><td>"+one['BSIC']+"</td></tr>";
		}
		optHtml += "</tbody>";
		//console.log(optHtml);
	    $("#loading").css("display", "none");
		$("#bsicTable").append(optHtml);
		
		// 设置隐藏的page信息
		setFormPageInfo("bsicForm", data['page']);

		// 设置分页面板
		setPageView(data['page'], "bsicDiv");
     }else{
    	 $("#loading").css("display", "none");
    	// 设置分页面板
 		setPageView(data['page'], "bsicDiv");
    	showInfoInAndOut("info", "没有找到对应的数据！");
     }
}

/**
 * 按条件查询干扰矩阵
 */
function getBsic() {
	// 重置分页条件
	initFormPage('bsicForm');
	// 提交表单
	sumbitCondition();
}

/**
 * 提交表单
 */
function sumbitCondition() {
	$("#loading").html("正在计算...");
	$("#loading").show();
	$("#bsicForm").ajaxSubmit({
		url : 'calForBsic',
		dataType : 'text',
		type : 'post',
		success : function(raw) {
			  showBsic(raw);
	    },
	    error : function(){
	    	$("#loading").css("display", "none");
	    	$("#bsicTable").children().remove();
	    	initFormPage('bsicForm');
	    	showInfoInAndOut("info","计算有误");
	    }
	})
}

/**
 * 提交表单
 */
function sumbitCondition1(){
	$("#loading").html("正在加载...");
	$("#loading").show();
	$("#bsicForm").ajaxSubmit({
		url : 'calForBsicForPage',
		dataType : 'text',
		type : 'post',
		success : function(raw) {
			  showBsic(raw);
	    },
	    error : function(){
	    	$("#loading").css("display", "none");
	    	$("#bsicTable").children().remove();
	    	initFormPage('bsicForm');
	    	showInfoInAndOut("info","计算有误");
	    }
	})
}