$(document).ready(function() {

    $("#searchBtn").click(function(){
        getFreqMode();
    });
    $("#exportBtn").click(function () {
        if($("#freqModeTable").children().html()==undefined||$("#freqModeTable").children().html()==null){
            showInfoInAndOut("info","请查询并有结果再导出！");
        }else {
            $("#freqModeForm").submit();
        }
    });
});

function getFreqMode() {
    initFormPage("freqModeForm");
    submitCondition();
}

function submitCondition() {
    $("#loading").show();
    $("#freqModeForm").ajaxSubmit({
        url : 'byPage',
        dataType : 'text',
        type : 'post',
        success : function(raw) {
            showFreqMode(raw);
        },
        error : function(){
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

function showFreqMode(raw) {
    var data = eval("(" + raw + ")");
    $("#freqModeTable").children().remove();
    if(data['data'].length != 0) {
        var optHtml = "<thead><tr><th>名称</th><th>频段</th><th>BCCH</th><th>TCH</th><th>EGSM</th></tr></thead><tbody>";
        for ( var i = 0; i < data['data'].length; i++) {
            var one = data['data'][i];
            optHtml += "<tr><td>"+one['名称']+"</td><td>"+one['频段']+"</td><td>"+one['BCCH']+"</td><td>"+one['TCH']+"</td><td>"
            +one['EGSM'] +"</td></tr>";
        }
        optHtml += "</tbody>";
        //console.log(optHtml);
        $("#loading").css("display", "none");;
        $("#freqModeTable").append(optHtml);

        // 设置隐藏的page信息
        setFormPageInfo("freqModeForm", data['page']);
        // 设置分页面板
        setPageView(data['page'], "freqModeDiv");
    }else{
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data['page'], "freqModeDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }

}

