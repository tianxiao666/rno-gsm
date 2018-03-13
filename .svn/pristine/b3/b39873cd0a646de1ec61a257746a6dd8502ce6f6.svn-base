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

var username=document.getElementById("username");
var password=document.getElementById("password");
var lStroage=window.localStorage;

window.onload=function(){
    var err=window.location.search;
    if(err.indexOf("error")>0){
        var loginStatusTip=document.getElementById("LoginStatusTip");
        loginStatusTip.style.visibility="visible";
        loginStatusTip.innerText="账号密码错误!";
    }
    var rememberCheckBox=document.getElementById("RememberMeCheckBox");
    if(lStroage.isStroage=="yes"){
        rememberCheckBox.checked=true;
        username.value=lStroage.username;
        password.value=lStroage.password;
    }else if(lStroage.isStroage=="no"){
        rememberCheckBox.checked=false;
        username.value="";
        password.value="";
    }
}

//显示或隐藏密码的按钮的控制
$$('#btn_PassWord_Seeable').on('click', function() {
    var seeAbleIcon = document.getElementById("Password_Seeable_Icon");
    var classname=seeAbleIcon.className;
    if(classname.toString()=="glyphicon glyphicon-eye-open"){
        seeAbleIcon.className='glyphicon glyphicon-eye-close';
        password.setAttribute("type","password");
    }else {
        seeAbleIcon.className='glyphicon glyphicon-eye-open';
        password.setAttribute("type","text");
    }
});

$$('#verifyCodeForm').on('submit',function (e) {
    e.preventDefault();
})

$$('#submitBtn').on('click',function () {

    var formData = myApp.formToJSON('#verifyCodeForm');
    var result = returnData('imgvrifyControllerDefaultKaptcha',formData);
    if(result){
        var rememberCheckBox=document.getElementById("RememberMeCheckBox");
        if(rememberCheckBox.checked){
            lStroage["isStroage"]="yes";
            lStroage["username"]=username.value;
            lStroage["password"]=password.value;
        }else{
            lStroage["isStroage"]="no";
            lStroage["username"]="";
            lStroage["password"]="";
        }
        $$('#loginForm').submit();
    }else{
        var loginStatusTip=document.getElementById("LoginStatusTip");
        loginStatusTip.style.visibility="visible";
        loginStatusTip.innerText="验证码错误！";
        var imgVerifyCode=document.getElementById("imgVerifyCode");
        imgVerifyCode.src="/defaultKaptcha";
        $$('#vrifyCode').val("");
        $$('#vrifyCode').focus();
    }
});

function returnData(data_url, formData) {
    var ajaxData;
    $$.ajax({
        dataType : 'json',
        data : formData,
        /* processData: true, */
        url : data_url,
        async : false,
        type : 'get',
        ifModified : true,
        success : function(data, textStatus, jqXHR) {
            myApp.hidePreloader();
            ajaxData = data;
        }
    });
    return ajaxData;
}
