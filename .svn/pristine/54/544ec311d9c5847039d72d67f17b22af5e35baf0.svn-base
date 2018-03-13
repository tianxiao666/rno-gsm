$(document).ready(function () {
    //初始化页面即可翻页
    initByPage();
    //查询用户
    $('#searchBtn').click(function () {
        if(!(/[\u4e00-\u9fa5]/).test($("#searchByChineseName").val().trim())
            && $("#searchByChineseName").val().trim()!==""){
            showInfoInAndOut("info","请输入汉字！");
            txt = $("#searchByChineseName");
            txt.value="";
            txt.focus();
            return;
        }
        //debugger;
        initFormPage("userForm");
        submitCondition();

    });


    // 修改用户
    $('#userTable').on('click','.btn-info',function () {
        var id = $(this).val();
        $('#updateUserId').val(id);
        var url = "users/" + id;
        $.get(url, function (data) {
            $('#updateUsername').val(data.username);
            $("#updatePassword").val('');
            $("#updateChineseName").val(data.chineseName);
            $("#updateEmail").val(data.email);
            var district=data.district;
            if(district.indexOf("，")>0){
                district=district.replace("，",",");
            }
            $('#updateDistrict').val(district);
            $('#updateUnit').val(data.unit);
            $("#updateEnabled").val(data.enabled);

            $.get(url + "/auth", function (auth) {
                $("#updateRole").val(auth.authority);
            });
        });
    });

    // 删除用户
    $('#userTable').on('click','.btn-danger',function () {
        //debugger;
        var user = eval('(' + $(this).val() + ')');
        //console.log(user.name);
        // 由于 User 实体配置了 OneToOne，所以要先删 User，成功后再删 Auth
        $.ajax({
            type: 'DELETE',
            url: "users/" + user.id
        }).then(function () {
            $.ajax({
                type: 'DELETE',
                url: "auths/" + user.name
            }).then(function () {
                initFormPage('userForm');
                submitCondition();
            });
        });
    });

    // 修改用户提交更改
    $('#updateBtn').click(function () {
        var url = "users/" + $('#updateUserId').val();
        var user = {};
        user.chineseName=$("#updateChineseName").val();
        user.email=$("#updateEmail").val();
        var district=$('#updateDistrict').val();
        for(var j=0;j<district.length;j++){
            if(district.indexOf("，")>0){
                district=district.replace("，",",");
            }
        }
        user.district = district;
        user.unit = $('#updateUnit').val();
        user.enabled = $('#updateEnabled').val();
        user.updateTime = new Date();

        //处理密码
        var password = $('#updatePassword').val();

        if (user.email != '' && !user.email.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
            showInfoInAndOut("info","邮箱格式不正确，请填写正确格式邮箱，或清空不填邮箱。");
            return false;
        }

        if (user.username == '' || user.chineseName == '' || user.district=='' || user.unit == '') {
            showInfoInAndOut("info","用户名、中文名、负责区域和代维均为必填项，不能为空。");
            return false;
        }


        if (password.trim() != '') {
            if((/[\u4e00-\u9fa5]/).test(password)){
                showInfoInAndOut("info","密码不能为中文！");
                return false;
            }
            if(password.length<6){
                showInfoInAndOut("info","密码不能少于6位！");
                return false;
            }
            user.password = md5(password);
        }

        // 更新用户表
        var jsonData = JSON.stringify(user);
        $.ajax({
            type: 'PATCH',
            url: url,
            data: jsonData,
            contentType: "application/json"
        });

        // 更新角色表
        var auth = {};
        auth.authority = $('#updateRole').val();

        url = 'auths/' + $('#updateUsername').val();
        jsonData = JSON.stringify(auth);
        $.ajax({
            type: 'PATCH',
            url: url,
            data: jsonData,
            contentType: "application/json"
        }).then(function (data) {
            $("#updateUserModal").modal('hide');
            showInfoInAndOut("info","更新用户信息成功！");
            initFormPage("userForm");
            submitCondition();
        });
    });

    // 新增用户提交保存
    $('#newUserBtn').click(function () {
        var data = getFormData($('#newUserForm'));

        // 校验必填字段
        var username = data.username.trim();
        var password = data.password.trim();
        var county=data.district.trim();
        var chineseName= data.chineseName.trim();
        var unit=data.unit.trim();
        if (username == '' || chineseName == '' || password == '' || county=='' || unit == '') {
            showInfoInAndOut("info","用户名、中文名、密码、负责区域和代维均为必填项，不能为空。");
            return false;
        }

        if((/[\u4e00-\u9fa5]/).test(password)){
            showInfoInAndOut("info","密码不能为中文！");
            return false;
        }

        if(password.length<6){
            showInfoInAndOut("info","密码不能少于6位！");
            return false;
        }

        // 校验电子邮箱正确性
        var email = data.email.trim();
        if (email != '' && !email.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
            showInfoInAndOut("info","邮箱格式不正确，请填写正确格式邮箱，或清空不填邮箱。");
            return false;
        }

        // 检查用户是否已存在
        var url = "users/search/findByUsername?username=" + username;
        $.ajax({
            type: 'GET',
            url: url
        }).then(function (data) {
            // 有数据返回，表示用户名已存在
            showInfoInAndOut("info","用户名已存在。");
            return false;
        });

        data.username = username;
        data.password = md5(password);
        for(var i=0;i<county.length;i++){
            if(county.indexOf("，")>0){
                county=county.replace("，",",");
            }
        }

        data.district = county;
        data.unit = unit;
        data.createTime = new Date();
        data.updateTime = new Date();
        data.type = 1; // 普通用户类型

        // 先添加角色到数据库
        var jsonData = JSON.stringify(data);
        $.ajax({
            type: 'POST',
            url: "auths",
            data: jsonData,
            contentType: "application/json",
            dataType: 'json'
        }).then(function (data) {
            // 再添加新用户到数据库
            $.ajax({
                type: 'POST',
                url: "users",
                data: jsonData,
                contentType: "application/json",
                dataType: 'json'
            }).then(function (data) {
                initFormPage('userForm');
                submitCondition();
                $("#newUserModal").modal('hide');
                showInfoInAndOut("info","添加新用户成功！");
            });
        });
    });
    
    $("#newUserModal").on('hide.bs.modal',function () {
        $("#newUserForm")[0].reset();
    })

    // 转换表单数组到JS对象，以便进一步转换为JSON字符串
    function getFormData($form) {
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};

        $.map(unindexed_array, function (n, i) {
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    }

});
function initByPage() {
    initFormPage('userForm');
    submitCondition();
}
function submitCondition() {

    $("#loading").show();
    $("#userForm").ajaxSubmit({
        url: 'userByPage',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showUser(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

function showUser(raw) {
    $("#userTable").children().remove();
    var data = eval("(" + raw + ")");
   // console.log(data['users']);
    //console.log(data['page']);
        if (data['users'].length !== 0) {
            var optHtml ="<thead><th>用户名</th><th>中文名</th><th>邮箱</th><th>负责区域</th>"+
                "<th>所属代维</th><th>是否激活</th><th>创建时间</th><th>更新时间</th><th>权限角色</th>"+
                "<th>操作</th></thead><tbody>";
            for(var i=0;i<data['users'].length;i++){
                var user=data['users'][i];
                var auth=user.auth;
                var create=new Date(user.createTime).Format('yyyy-MM-dd hh:mm');
                var update=new Date(user.updateTime).Format('yyyy-MM-dd hh:mm');
                var authori=auth.authority==='ROLE_ADMIN'?'系统管理员':'普通用户';
                var userId=""+user.id;
                var deleteBtnVal="{id:'"+userId+"',name:'"+user.username+"'}";
                optHtml +="<tr><td id=\"name\">"+user.username+"</td><td id=\"chinese\">"+user.chineseName+"</td><td id=\"ema\">"
                    +user.email+"</td><td id=\"dist\">"+user.district+"</td><td id=\"maintain\">"+user.unit
                    +"</td><td id=\"enable\">"+user.enabled+"</td><td id=\"createDate\">"+create+"</td><td id=\"updateDate\">"
                    +update+"</td><td id=\"autho\">"+authori+"</td><td>"+
                    "<button class=\"btn btn-info btn-sm btn-width\" data-toggle=\"modal\" data-target=\"#updateUserModal\" value="+userId+">修改</button>"+
                    "&nbsp;&nbsp;"+
                    "<button class=\"btn btn-danger btn-sm btn-width\" value="+deleteBtnVal+">删除</button></td></tr>";
            }
            optHtml +="</tbody>";

            $("#loading").css("display", "none");
            $("#userTable").append(optHtml);
            //debugger;

            // 设置隐藏的page信息
            setFormPageInfo("userForm", data['page']);
            // 设置分页面板
            setPageView(data['page'], "userDiv");
        } else {
            $("#loading").css("display", "none");
            // 设置分页面板
            setPageView(data['page'], "userDiv");
            showInfoInAndOut("info", "没有找到对应的用户！");
        }

}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

function replaceSpace(obj) {
    obj.value = obj.value.replace(/\s/gi,'');
}


