var cellValCache = new Array();
var bscValCache = new Array();
var dateValCache = new Array();
$(document).ready(function () {
    popUp();
    $("#searchBtn").click(function () {
        if ($("#dateSelect").val() == '-1' || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        getIndicator();
    });
})

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
                url: 'indicatorDate',
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
        } else {
            $.each(dateValCache, function (index, value) {
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选" + (dateValCache.length) + "个,双击可添加");
        }

        var dateVal = $("#dateSelect").val().split(",");
        for (var i = 0; i < dateVal.length; i++) {
            if (dateVal[i] != -1) {
                $('#search_to').append("<option>" + dateVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

    });

    //时间多选
    $("#timeBtn").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $('#match').val('');

        $("#myModalLabel").text("选择时间");
        thisDom = "timeSelect";

        var timeVals = $('#timeSelect option');
        for (var i = 1; i < timeVals.length; i++) {
            $('#search').append("<option>" + timeVals[i].text + "</option>");
        }
        $('#myModalLabel1').append("可选" + (search.length) + "个,双击可添加");

        var timeVal = $("#timeSelect").val().split(",");
        for (var i = 0; i < timeVal.length; i++) {
            if (timeVal[i] != -1) {
                $('#search_to').append("<option>" + timeVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

    });

    //bsc多选
    $("#bscButton").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        //$('#myModalLabel2').empty();

        $("#myModalLabel").text("选择网元");
        thisDom = "bscSelect";

        if (bscValCache == '') {
            $.ajax({
                url: 'indicatorBsc',
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
        } else {
            $.each(bscValCache, function (index, value) {
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选" + (bscValCache.length) + "个,双击可添加");
        }

        var bscVal = $("#bscSelect").val().split(",");
        for (var i = 0; i < bscVal.length; i++) {
            if (bscVal[i] != -1 && bscVal[i].trim()!='') {
                $('#search_to').append("<option>" + bscVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

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
                url: 'indicatorCell',
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
        } else {
            $.each(cellValCache, function (index, value) {
                $('#search').append("<option>" + value + "</option>");
            })
            $('#myModalLabel1').append("可选" + (cellValCache.length) + "个,双击可添加");
        }

        var cellVal = $("#cellSelect").val().split(",");
        for (var i = 0; i < cellVal.length; i++) {
            if (cellVal[i] != -1 && cellVal[i]!='') {
                $('#search_to').append("<option>" + cellVal[i] + "</option>");
            }
        }
        $('#myModalLabel2').html("已选" + ($('#search_to option').length) + "个，双击可删除");

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
 * 图表显示
 */
function showIndicator(raw) {
    var selectFlag ;
    var dateFlag = false;
    var data = eval("(" + raw + ")");
    $("#indicatorTable").children().remove();
    var line3 = $("#templateSelect").val();
    if ($("#axisSelect").val() == "按网元") {
        selectFlag = "BSC";
    } else if ($("#axisSelect").val() == "按小区") {
        selectFlag = "ObjectID";
    } else if ($("#axisSelect").val() == "按时间") {
        selectFlag = "Time";
    } else {
        selectFlag = "Date";
        dateFlag = true;
    }
    showChar(data, line3, selectFlag,dateFlag);
}


/**
 * 按条件查询显示
 */
function getIndicator() {
    if ("按网元" == $("#axisSelect").val()) {
        var bscS = $("#bscSelect").val().split(",");
        if ($("#bscSelect").val() == '-1' || $("#bscSelect").val() == null) {
            showInfoInAndOut("info", "请选择网元！");
            return;
        } else if (bscS.length > 5) {
            showInfoInAndOut("info", "最大只能选择5个网元！");
            return;
        }
    }
    if ("按小区" == $("#axisSelect").val()) {
        var cellS = $("#cellSelect").val().split(",");
        if ($("#cellSelect").val() == '-1' || $("#cellSelect").val() == null) {
            showInfoInAndOut("info", "请选择小区！");
            return;
        } else if (cellS.length > 5) {
            showInfoInAndOut("info", "最大只能选择5个小区！");
            return;
        }
    }
    if ("按时间" == $("#axisSelect").val()) {
        var timeS = $("#timeSelect").val().split(",");
        if ($("#timeSelect").val() == '-1' || $("#timeSelect").val() == null) {
            showInfoInAndOut("info", "请选择时间！");
            return;
        }
    }
    $("#loading").show();
    $("#indicatorForm").ajaxSubmit({
        url: 'queryIndicator',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showIndicator(raw);
        }
    })
}

function showChar(data, line3, selectFlag,dateFlag) {
    $("#chart").children().remove();
    if (data['data'].length != 0) {
        $("#loading").css("display", "none");
        if (data['errorE']) {
            for (var i = 0; i < data['errorE'].length; i++) {
                var one = data['errorE'][i];
                /*alert(JSON.stringify(one));*/
                showInfoInAndOut("info", one['message']);
            }
        }
        var myChart = echarts.init(document.getElementById('chart'));
        var option;
        var radioSelect;
        if ($('input:radio:checked').val() == "线图") {
            radioSelect = true;
        }
        if ($('input:radio:checked').val() == "柱图") {
            radioSelect = false;
        }
        option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:$("#dateSelect").val().split(",")
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : showLineXais(selectFlag)
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : showLine(data,line3,radioSelect,dateFlag,selectFlag)
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    } else {
        $("#loading").css("display", "none");
        if (data['errorE']) {
            for (var i = 0; i < data['errorE'].length; i++) {
                var one = data['errorE'][i];
                /*alert(JSON.stringify(one));*/
                showInfoInAndOut("info", one['message']);
            }
        } else {
            showInfoInAndOut("info", "没有找到对应的数据！");
        }
    }
}

//获取折线图的x轴数据
function showLineXais(selectFlag) {
    var strSelect;
    var saveSelect = new Array();
    if(selectFlag=="Date"){
        strSelect = $("#dateSelect").val();
    }else if(selectFlag=="Time"){
        strSelect = $("#timeSelect").val();
    }else if(selectFlag=="BSC"){
        strSelect = $("#bscSelect").val();
    }else if(selectFlag=="ObjectID"){
        strSelect = $("#cellSelect").val();
    }
    return strSelect.split(",").sort() ;
}

//获取折线图的y轴数据
function  showLine(data,line3,radioSelect,dateFlag,selectFlag) {
    var lineData = "[";
    var lineString = "";
    var typeValue ;
    if(radioSelect==true){
        typeValue = "'line'";
    }else {
        var size = new Array;
        if(selectFlag=="Date"){
            size = $("#dateSelect").val().split(",");
            if(size.length<6){
                typeValue = "'bar'"+",barWidth:30";
            }else {
                typeValue = "'bar'";
            }
        }else if(selectFlag=="Time"){
            size = $("#timeSelect").val().split(",");
            if(size.length<6){
                typeValue = "'bar'"+",barWidth:30";
            }else {
                typeValue = "'bar'";
            }
        }else if(selectFlag=="BSC"){
            size = $("#bscSelect").val().split(",");
            if(size.length<6){
                typeValue = "'bar'"+",barWidth:30";
            }else {
                typeValue = "'bar'";
            }
        }else if(selectFlag=="ObjectID"){
            size = $("#cellSelect").val().split(",");
            if(size.length<6){
                typeValue = "'bar'"+",barWidth:30";
            }else {
                typeValue = "'bar'";
            }
        }
    }
    var dataGet = dataLine(data, line3,selectFlag,dateFlag).split(";");
    if(dateFlag==true){
        lineString += "{";
        lineString += "name:'";
        lineString += "value";
        lineString += "',"+" \n ";
        lineString += "type:"+typeValue+","+" \n ";
        lineString += "data:"+dataGet+" \n ";
        lineString += "}";
    }else {
        var dateGet = $("#dateSelect").val().split(",").sort();
        for(var i=0;i<dataGet.length;i++){
            lineString += "{";
            lineString += "name:'";
            lineString += dateGet[i];
            lineString += "',"+" \n ";
            lineString += "type:"+typeValue+","+" \n ";
            lineString += "data:["+dataGet[i].replace(/\[|]/g,'')+" \n ";
            lineString += "]}";
            if (dataGet.length>1 && i<(dataGet.length-1)) {
                lineString += ",";
            }
        }
    }
    lineData += lineString;
    lineData += "]";
    return eval('(' + lineData + ')');
}
function dataLine(data, line3,selectFlag,dateFlag) {
    var dataString = "[";
    var dateValue = $("#dateSelect").val().split(",").sort();
    var selectArray = showLineXais(selectFlag);
    var timeFlage;
    for(var i=0;i<dateValue.length;i++){
        var dataArray = new Array;
        for (var j = 0; j < data['data'].length; j++) {
            var one = data['data'][j];
            if (one['time'] == dateValue[i]) {
                for(var k=0;k<selectArray.length;k++){
                    if(selectFlag=="Time"){
                        timeFlage = selectArray[k].substr(0, 2);
                    }else {
                        timeFlage = selectArray[k]
                    }
                    if(one[selectFlag]==timeFlage) {
                        if(dateFlag==true){
                            dataArray[0] = one[line3];
                        }else {
                            dataArray[k] = one[line3];
                        }
                        break;
                    }else {
                        continue;
                    }
                }
            }
        }
        if(dateFlag==false){
            for(var s=0;s<selectArray.length;s++){
                if(dataArray[s]==null){
                    dataArray[s] = 0;
                }
            }
        }else {
            if(dataArray[0]==null){
                dataArray[0] = 0;
            }
        }
        dataString += dataArray;
        if (dateValue.length>1 && i<(dateValue.length-1)) {
            dataString += ";";
        }
    }
    dataString += "]";
    return dataString;
}
