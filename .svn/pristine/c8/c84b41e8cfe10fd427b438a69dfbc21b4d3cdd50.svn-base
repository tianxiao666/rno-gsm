$(document).ready(function () {

    $("#searchBtn").click(function () {
        getSiteInfo();
    });
    $("#exportBtn").click(function () {
        if ($("#siteInfoTable").children().html() == undefined || $("#siteInfoTable").children().html() == null) {
            showInfoInAndOut("info", "请先查询后再导出");
            return;
        }
        exportSiteInfo();
    });
});

function getSiteInfo() {
    initFormPage("siteInfoForm");
    submitCondition();
}

function submitCondition() {
    $("#loading").show();
    $("#siteInfoForm").ajaxSubmit({
        url: 'byPage',
        dataType: 'text',
        type: 'post',
        success: function (raw) {
            showSiteInfo(raw);
        },
        error: function () {
            $("#loading").css("display", "none");
            showInfoInAndOut("info", "不存在当前表！");
        }
    })
}

function showSiteInfo(raw) {
    var data = eval("(" + raw + ")");
    $("#siteInfoTable").children().remove();
    if (data['data'].length != 0) {
        var optHtml = "<thead><tr><th>CGI</th><th>ObjectID</th><th>BSC</th><th>MSC</th><th>NeType</th><th>BTSType</th>"
            + "<th>频段</th><th>CDU_TYPE</th><th>中文名</th><th>县区</th><th>代维</th><th>分组</th>"
            + "<th>覆盖类型</th><th>小区类型</th><th>载波数</th><th>LAC</th><th>CI</th><th>BCCH</th>"
            + "<th>BSIC</th><th>TCH</th><th>经度</th><th>纬度</th><th>方向角</th><th>机械下倾角</th>"
            + "<th>电调下倾角</th><th>天线高度</th><th>天线增益</th><th>天线类型</th><th>是否带直放站</th>"
            + "</tr></thead><tbody>";
        for (var i = 0; i < data['data'].length; i++) {
            var one = data['data'][i];
            optHtml += "<tr><td>" + one['CGI'] + "</td><td>" + one['ObjectID'] + "</td><td>" + one['BSC'] + "</td><td>" +
                one['MSC'] + "</td><td>" + one['NeType'] + "</td><td>" + one['BTSType']
                + "</td><td>" + one['频段'] + "</td><td>" + one['CDU_TYPE'] + "</td><td>" +
                one['中文名'] + "</td><td>" + one['县区'] + "</td><td>" + one['代维']
                + "</td><td>" + one['分组'] + "</td><td>" + one['覆盖类型'] + "</td><td>" +
                one['小区类型'] + "</td><td>" + one['载波数'] + "</td><td>" + one['LAC']
                + "</td><td>" + one['CI'] + "</td><td>" + one['BCCH'] + "</td><td>" +
                one['BSIC'] + "</td><td>" + one['TCH'] + "</td><td>" + one['经度']
                + "</td><td>" + one['纬度'] + "</td><td>" + one['方向角'] + "</td><td>" +
                one['机械下倾角'] + "</td><td>" + one['电调下倾角'] + "</td><td>" + one['天线高度']
                + "</td><td>" + one['天线增益'] + "</td><td>" + one['天线类型'] + "</td><td>" +
                one['是否带直放站'] + "</td></tr>";
        }
        optHtml += "</tbody>";
        //console.log(optHtml);
        $("#loading").css("display", "none");
        ;
        $("#siteInfoTable").append(optHtml);

        // 设置隐藏的page信息
        setFormPageInfo("siteInfoForm", data['page']);
        // 设置分页面板
        setPageView(data['page'], "siteInfoDiv");
    } else {
        $("#loading").css("display", "none");
        // 设置分页面板
        setPageView(data['page'], "siteInfoDiv");
        showInfoInAndOut("info", "没有找到对应的数据！");
    }
}

function exportSiteInfo() {
    $("#siteInfoForm").submit();

}