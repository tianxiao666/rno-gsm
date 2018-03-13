// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
	template7Pages : true,
	precompileTemplates : true,
	animateNavBackIcon : true
});

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
	// Because we want to use dynamic navbar, we need to enable it for this view:
	dynamicNavbar : true,
	domCache : true
});

$$('#indexMonitorForm').on('submit', function(event) {
	event.preventDefault();
	$$("input").blur();
	getData();
});

$$('#indexMonitorSubmit').on('click', function() {
	getData();
});

$$('#indexExtractSubmit').on('submit', function(event) {
    event.preventDefault();
    $$("input").blur();
    extractIndex();
});

$$('#indexExtractSubmit').on('click', function() {
    extractIndex();
});

function extractIndex() {
    var cell = $$('#cell').val().replace('，',',').trim();
    var chinese = $$('#chinese').val().replace('，',',').trim();
    var reg = /^([A-Za-z0-9])+([ ,A-Za-z0-9])*$/;// /^[0-9a-zA-Z\\s, ]*$/;
    //var reg1 = /^([\u4E00-\u9FA5A-Za-z0-9()#（）])+([ ,\u4E00-\u9FA5A-Za-z0-9()、-#（）])*$/;
    if (cell != '' && !reg.test(cell)) {
        myApp.alert('', '小区无效！');
        return;
    }
    var formData = myApp.formToJSON('#indexMonitorForm');
    // alert(JSON.stringify(formData));
    // if (!formData.cell) { myApp.alert('', '请输入小区！'); return; }海田家私城A、B、K、G栋（室内）7

    var result = returnData('indexMonitorResult', formData);
    if (result == "") {
        myApp.alert('', '没有找到数据！');
        return;
    }
    $$('#indexMonitorForm').submit();
}

function getData() {
	var cell = $$('#cell').val().replace('，',',').trim();
	var chinese = $$('#chinese').val().replace('，',',').trim();
	var reg = /^([A-Za-z0-9])+([ ,A-Za-z0-9])*$/;// /^[0-9a-zA-Z\\s, ]*$/;
	//var reg1 = /^([\u4E00-\u9FA5A-Za-z0-9()#（）])+([ ,\u4E00-\u9FA5A-Za-z0-9()、-#（）])*$/;
	if (cell != '' && !reg.test(cell)) {
		myApp.alert('', '小区无效！');
		return;
	} /*else if (chinese != '' && !reg1.test(chinese)) {
		myApp.alert('', '中文名无效！');
		return;
	}*/
	var formData = myApp.formToJSON('#indexMonitorForm');
	// alert(JSON.stringify(formData));
	// if (!formData.cell) { myApp.alert('', '请输入小区！'); return; }海田家私城A、B、K、G栋（室内）7

	var result = returnData('indexMonitorResult', formData);
	if (result == "") {
		myApp.alert('', '没有找到数据！');
		return;
	}
	// alert(result);
	$$("#indexMonitorTab").html('');
	var optHtml = '<thead><tr>';
	$$.each(result, function(n, one) {
		if (n == 0) {
			$$.each(one, function(k, v) {
				optHtml += '<th>' + k + '</th>';
			})
		}
	});

	optHtml += '</tr></thead><tbody>';

	$$.each(result, function(n, one) {
		if ((n + 2) % 2 == 0) {
			optHtml += '<tr class="info">';
		} else {
			optHtml += '<tr class="active">';
		}

		$$.each(one, function(k, v) {
			if (v != 'nulled') {
				optHtml += '<td>' + v + '</td>';
			} else {
				optHtml += '<td>' + '' + '</td>';
			}
		});
		optHtml += '</tr>';
	});

	optHtml += '</tbody>';

	// alert(optHtml);
	$$('#indexMonitorTab').html(optHtml);
	var index = $$('#index').val();
	if(index =='指标'){
        $$('.result').html('综合指标结果');
	}else{
        $$('.result').html(index + '指标结果');
	}

	$$('.preloader').css('display', 'none');

	mainView.router.load({
		pageName : 'result',
		// template: myApp.templates.result,
		// content: optHtml,
		animatePages : false,
	// context: {index: index},
	// reload : true
	});
	$$('.page-content').scrollTo(0, 0);
}

function returnData(data_url, formData) {
	var ajaxData;
	$$.ajax({
		dataType : 'json',
		data : formData,
		/* processData: true, */
		url : data_url,
		async : false,
		type : 'post',
		ifModified : true,
		success : function(data, textStatus, jqXHR) {
			myApp.hidePreloader();
			ajaxData = data;
		}
	});
	return ajaxData;
}