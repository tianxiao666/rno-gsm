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

$$("#cancelButton").on('click',function (event) {
    event.preventDefault();
   myApp.closeModal();

});


$$('.ac-1').on('click', function () {
    var buttons = [
        {
            text: '<a class="external" href="/logout">登出</a>',
            color: 'red',
            bold : true,
        },
        {
            text: '取消',
            bold: true,
            onClick:function () {
                myApp.closeModal();
            }
        }
    ];
    myApp.actions(buttons);
});


document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
// 获取当前view
    var currentView=myApp.getCurrentView();
    if(currentView.history.length>1){
        currentView.router.back({});//非首页返回上一级
    }
    else{
        navigator.app.exitApp();//首页点返回键退出应用
    }
}


