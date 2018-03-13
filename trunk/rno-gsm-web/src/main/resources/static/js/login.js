$(document).ready(function () {
    $('#verifyCodeForm').on('submit',function (e) {
        e.preventDefault();
    });

    $('#submitBtn').click(function () {
        if($("#vrifyCode").val() ===null || $("#vrifyCode").val() ===""){
            showInfoInAndOut("info","请输入验证码！");
            return;
        }

        var result;
        $.ajax({
            type: "get",
            url:"imgvrifyControllerDefaultKaptcha",
            data:$('#verifyCodeForm').serialize(),// 你的formid
            async: false,
            success: function(data) {
                result=data;
            }
        });
        if(result==true){
            $("#loginForm").submit();
        }else{
            var loginStatusTip=document.getElementById("LoginStatusTip");
            loginStatusTip.style.display="block";
            loginStatusTip.style.color="#ff0000";
            loginStatusTip.innerText="验证码错误！";
            var imgVerifyCode=document.getElementById("imgVerifyCode");
            imgVerifyCode.src="defaultKaptcha";
        }
    });
});

window.onload=function(){
    var err=window.location.search;
    if(err.indexOf("error")>0){
        var loginStatusTip=document.getElementById("LoginStatusTip");
        loginStatusTip.style.display="block";
        loginStatusTip.style.color="#ff0000";
        loginStatusTip.innerText="账号密码错误!";
    }
};

function showInfoInAndOut(div, info) {
    $("#" + div).html(info);
    $("#" + div).fadeIn(2000);
    setTimeout("$('#" + div + "').fadeOut(2000)", 1000);
}

