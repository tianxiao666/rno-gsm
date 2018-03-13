$(document).ready(function () {
    $("#workOrderBatchBtn").click(function(){
        var path=$("#file").val().trim();
        console.log(path.substring(path.length-3));
        if(path==""){
            showInfoInAndOut("info","请先上传文件!");
            return false;
        }
        if(path.substring(path.length-3) !="xls" && path.substring(path.length-4) !="xlsx"){
            showInfoInAndOut("info","请上传Excel格式文件");
            return false;
        }
        $(this).attr("disabled","true");
        $('#orderBatchForm').submit();
        setTimeout("$('#workOrderBatchBtn').removeAttr('disabled')",3000);

    });
})
