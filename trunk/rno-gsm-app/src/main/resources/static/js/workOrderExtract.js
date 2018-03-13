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

$$('#workOrderExtractForm').on('submit', function(event) {
	event.preventDefault();
	$$("input").blur();
	extractWorkOrder();
});

$$('#workOrderExtractSubmit').on('click', function() {
	extractWorkOrder();
});

function extractWorkOrder() {
	var cell = $$('#cell').val().replace('，',',').trim();
	var beginTime = $$('#beginTime').val();
	var endTime = $$('#endTime').val();
	var reg = /^([A-Za-z0-9])+([ ,A-Za-z0-9])*$/;
	
	if (cell != '' && !reg.test(cell)) {
		myApp.alert('', '小区无效！');
		return;
	} else if (beginTime == '') {
		myApp.alert('', '开始时间不能为空！');
		return;
	} else if (endTime == '') {
		myApp.alert('', '结束时间不能为空！');
		return;
	}
	
	var formData = myApp.formToJSON('#workOrderExtractForm');
	var result = returnData('countWorkOrder', formData);
	if(result){
		$$('#workOrderExtractForm').submit();
	}else{
		myApp.alert('', '没有找到数据！');
		return;
	}	
}

var m;
var beginTime = myApp.calendar({
	input : '#beginTime',
	value : [ new Date() ],
	closeOnSelect : true,
	onDayClick : function(p, dayContainer, year, month, day) {
		myApp.calendar({
			input : '#endTime',
			minDate : [ new Date(year, month, day) ],
			closeOnSelect : true,
		});
		if(new Date().getDate() <= day){
		    m = Number(month) + 1;
			if(m < 10) {
				m = "0" + m;
			}
			//$$('#endTime').val(year+"-"+m+"-"+day);
		}
	}
});

var endTime = myApp.calendar({
	input : '#endTime',
	value : [ new Date() ],
	closeOnSelect : true,
	onDayClick : function(p, dayContainer, year, month, day) {
		myApp.calendar({
			input : '#beginTime',
			maxDate : [ new Date(year, month, day) ],
			closeOnSelect : true,
		});
		if(new Date().getDate() >= day){
		    m = Number(month) + 1;
			if(m < 10) {
				m = "0" + m;
			}
			$$('#beginTime').val(year+"-"+m+"-"+day);
		}
	}
});

function returnData(data_url, formData) {
	var ajaxData;
	$$.ajax({
		dataType : 'json',
		data : formData,
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