// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
    template7Pages : true,
    precompileTemplates : true,
    animateNavBackIcon:true
});

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar : true,
    domCache : true
});

$$('#workOrderBatchBtn').on('submit', function(event) {
    event.preventDefault();
    $$('#orderBatchForm').submit();
});

$$('#workOrderBatchBtn').on('click', function() {
    var path=$$('#file').val();
    console.log(path);
    if(path.substring(path.length-3) !=='xls' && path.substring(path.length-4) !=='xlsx'){
        myApp.alert('','请上传Excel格式的工单处理文件');
        return;
    }
    $$(this).attr("disabled","true");
    $$('#orderBatchForm').submit();
    setTimeout("$$('#workOrderBatchBtn').removeAttr('disabled')",3000);
});
