
var bscValCache = new Array();
$(document).ready(function () {

    popUp();

    $("#searchBtn").click(function () {
        if ($("#dateSelect").val() == '-1' || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        getFrequencyReuse();
    });

    $("#exportBtn").click(function () {
        if ($("#dateSelect").val() == '-1' || $("#dateSelect").val() == null) {
            showInfoInAndOut("info", "请选择日期！");
            return;
        }
        exportFrequencyReuse();
    });

})

function popUp() {
    var thisDom;
    //bsc多选
    $("#bscButton").click(function () {
        $('#myModalLabel1').empty();
        $('#search').empty();
        $("#search_to").empty();
        $("#myModalLabel").text("选择网元");
        thisDom = "bscSelect";

        if (bscValCache == '') {
            $.ajax({
                url: 'frequencyReuseBsc',
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
            if (bscVal[i] != -1 && bscVal[i].trim() !='') {
                $('#search_to').append("<option>" + bscVal[i] + "</option>");
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
function showFrequencyReuse(raw) {
    $("#chart").children().remove();
    var data = eval("(" + raw + ")");
    $("#loading").css("display", "none");
    if (data['data'].length != 0) {
        var myChart = echarts.init(document.getElementById('FRchart'));
        var option;
        var FRkey = $('input:radio:checked').val();
        option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:[FRkey+"_BCCH",FRkey+"_TCH"]
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    axisLabel :{
                        rotate: -35
                    },
                    data : showLineXais(FRkey)
                }
            ],
            grid: {
                x: 40,
                x2: 12,
                y2: 140,
            },
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [{name:FRkey+"_BCCH",
                        type:'bar',
                        data:dataLine(data, FRkey)[1]
                        },{
                        name:FRkey+"_TCH",
                        type:'bar',
                        data:dataLine(data, FRkey)[0]
                        }
                      ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    } else {
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}


/**
 * 按条件查询显示
 */
function getFrequencyReuse() {
    $("#loading").show();
    $("#frequencyReuseForm").ajaxSubmit({
        url: 'queryfrequencyReuse',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showFrequencyReuse(raw);
        }
    })
}
/**
 * 按条件导出结果
 */
function exportFrequencyReuse() {
    $("#frequencyReuseForm").submit();
}

//获取折线图的x轴数据
function showLineXais(FRkey) {
    var saveSelect = new Array();
    if(FRkey=="GSM900"){
        for(var i=0;i<96;i++){
            saveSelect[i] = i;
        }
    }else {
        var t = 0;
        for(var j=511;j<637;j++){
            saveSelect[t] = j;
            t++;
        }
    }
    return saveSelect ;
}

function dataLine(data, FRkey) {
    var yString = new Array;
    var dch_900 =  new Array;
    var bcch_900 = new Array;
    var dch_1800 =  new Array;
    var bcch_1800 = new Array;
    for (var j = 0; j < data['data'].length; j++) {
        var one = data['data'][j];
        if(one['type']=="dch"){
            for(var k in one){  //通过定义一个局部变量k遍历获取到了map中所有的key值
                if(k!="type"){
                    if(k<96){
                        dch_900[k] = one[k];
                    }else if(k>510&&k<637){
                        dch_1800[k-511] = one[k];
                    }
                }
            }
        }
        if(one['type']=="bcch"){
            for(var k in one){
                if(k!="type"){
                    if(k<96){
                        bcch_900[k] = one[k];
                    }else if(k>510&&k<637){
                        bcch_1800[k-511] = one[k];
                    }
                }
            }
        }
    }

    //图表数据为空时置零
    for(var i=0;i<96;i++){
        if(dch_900[i]==null){
            dch_900[i] = 0;
        }
        if(bcch_900[i]==null){
            bcch_900[i] = 0;
        }
    }
    for(var i=0;i<(637-511);i++){
        if(dch_1800[i]==null){
            dch_1800[i] = 0;
        }
        if(bcch_1800[i]==null){
            bcch_1800[i] = 0;
        }
    }

    if(FRkey=="GSM900"){
        yString.push(dch_900);
        yString.push(bcch_900);
    }else{
        yString.push(dch_1800);
        yString.push(bcch_1800);
    }
    return yString;
}
