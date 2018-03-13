// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7({
	template7Pages : true,
	precompileTemplates : true,
    smartSelectOpenIn:'picker',
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

$$('#workOrderProcessForm').on('submit', function(event) {
	event.preventDefault();
	$$("input").blur();
	getWorkOrder();
});

$$('#workOrderProcessSubmit').on('click', function(event) {
	event.preventDefault();
	$$('#start').val(0);
	$$('#workOrderProcessSubmit').hide();
	getWorkOrder();
    $$('#workOrderProcessSubmit').show();
});

$$('#detailSubmit').on('click', function() {
    if($$('#handler').val().length>32){
    	myApp.alert('','处理人过长');
    	return;
    }else if($$('#treatment').val().length>512){
    	myApp.alert('','处理方法过长');
    	return;
    }else if($$('#handleResultDiv').text()===''){
        myApp.alert('','请选择处理结果');
        return;
	}
	submitHandleResult();
});

function submitHandleResult() {
	var formData = myApp.formToJSON('#detailForm');
	var result = returnData('saveResultById', formData);
	// alert(result);return;
	if (result) {
		myApp.alert('', '提交成功！');
		return;
	} else {
		myApp.alert('', '提交失败！');
		return;
	}
}

function adjustSize(id) {
	if (!$$(id).find('.title-flag').hasClass('hiddenClass')) {
		$$(id).find('.title-flag').addClass('hiddenClass');
		$$(id).find('.title-flag').css('display', 'none');
	} else {
		$$(id).find('.title-flag').removeClass('hiddenClass');
		$$(id).find('.title-flag').css('display', 'table');
	}
}

function toDetail(id) {
	var order = $$(id).children().children().children().text();
	$$('#workOrderId').val(order);
	$$('#order').val(order);
    var selectValue='';
	// alert(order);return;
	var formData = myApp.formToJSON('#hiddenForm');
	var result = returnData('getDetailById', formData);
	// alert(result);return;
	if (result == "") {
		myApp.alert('', '没有找到数据！');
		return;
	}

	// alert(result);
	$$("#detail").html('');
    $$("#handleResult").html('');

	var optHtml1='', optHtml2 = '', handler = '', method = '',proResult = '';
	var count = 0;
	$$.each(
					result,
					function(k, v) {
						count++;
						// alert(k+','+count);return true;
						if (count > 12) {
							if (k == '处理人') {
								if(v != ' '){handler = v;}
								return true;
							} else if (k == '处理方法') {
								if(v != ' '){method = v;}
								return true;
							} else if (k == 'app处理人' ) {
								if(v != ' '){handler = v;}
								return true;
							} else if (k == 'app处理方法') {
								if(v != ' '){method = v;}
								return true;
							}else if (k=='处理结果'){
                                if(v != ' '){proResult = v;}
								//console.log(proResult);
							}
                            selectValue=proResult!==''?proResult:'待处理';

							optHtml1 += '<li class="item-content">'
									+ '<div class="item-inner">'
									+ '<div class="item-title" style="font-size: 14px;overflow: initial;display:table">处 理 人&nbsp</div>&nbsp&nbsp'
									+ '<div class="item-input" style="font-size: 14px">' +
								'<input id="handler" type="text" placeholder="请填写处理人" style="font-size: 14px" name="handler" value="'
									 +handler+ '"/>' + '</div>' + '</li>';
							optHtml1 += '<li class="align-top">'
								    + '<div class="item-content">'
									+ '<div class="item-inner">'
									+ '<div class="item-title" style="font-size: 14px;overflow: initial;display:table">处理方法</div>&nbsp&nbsp'
									+ '<div class="item-input" style="font-size: 14px"><textarea id="treatment" placeholder="请填写处理方法" name="treatment" style="font-size: 14px;">'
									+method+ '</textarea>' + '</div></div>' + '</li>';
                            optHtml1 +='<li><a href="#" class="item-link smart-select" data-open-in="picker" data-back-on-select="true"'
                                +'data-picker-close-text="确定"> <select name="handleResult" id="handleResult" ></select>'
								+'<div class="item-content"><div class="item-inner">'
								+'<div class="item-title" style="font-size: 14px;overflow: initial;display:table">处理结果</div>'
								+'<div class="item-after" style="font-size:14px" id="handleResultDiv">'
								+selectValue
								+'</div>'+'</div></div>'+'</a></li>';

						} else {
							if(k=='工单'){
								optHtml2 += '<li class="item-content" onclick="adjustSize(this)">';
							}else{
								optHtml2 += '<li class="item-content">';
							}
							optHtml2 += '<div class="item-inner">'
										+ '<div class="item-title title-flag" style="overflow: initial;font-size: 14px;display:table">'
										+ k.toUpperCase() + '</div>'
										+ '<div class="item-after" style="font-size: 14px">' + v
										+ '</div>'
							            + '</div>' + '</li>';
						}
					});

	// alert(optHtml);return;
	$$('#detail').html(optHtml2);
	$$('#handleInfo').html(optHtml1);
	$$('.preloader').css('display', 'none');

	mainView.router.load({
		pageName : 'workOrderDetail',
		animatePages : false,
	});
	$$('.page-content').scrollTo(0, 0);

    if(selectValue!=='待处理'&&selectValue!==''){
        myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="待处理" >待处理</option>');
        myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="'+selectValue+'" selected>'+selectValue+'</option>');
        if(selectValue!=='已完成'){
            myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="已完成" >已完成</option>');
        }
        if(selectValue !=='正在处理'){
            myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="正在处理" >正在处理</option>');
        }
        if(selectValue !=='延迟处理'){
            myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="延迟处理" >延迟处理</option>');
        }

    }else{
        myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="待处理" selected>待处理</option>');
        myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="已完成" >已完成</option>');
        myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="正在处理" >正在处理</option>');
        myApp.smartSelectAddOption('.smart-select #handleResult', '<option value="延迟处理" >延迟处理</option>');
    }

}

function getWorkOrder() {
	var cell = $$('#cell').val().replace('，',',').trim();
	var chinese = $$('#chinese').val().replace('，',',').trim();
	var beginTime = $$('#beginTime').val();
	var endTime = $$('#endTime').val();
	var reg = /^([A-Za-z0-9])+([ ,A-Za-z0-9])*$/;// /^[0-9a-zA-Z\\s, ]*$/;
	//var reg1 = /^([\u4E00-\u9FA5A-Za-z0-9()#（）])+([ ,\u4E00-\u9FA5A-Za-z0-9()#（）])*$/;
	if (cell != '' && !reg.test(cell)) {
		myApp.alert('', '小区无效！');
		return;
	} /*else if (chinese != '' && !reg1.test(chinese)) {
		myApp.alert('', '中文名无效！');
		return;
	}*/ else if (beginTime == '') {
		myApp.alert('', '开始时间不能为空！');
		return;
	} else if (endTime == '') {
		myApp.alert('', '结束时间不能为空！');
		return;
	}
	var formData = myApp.formToJSON('#workOrderProcessForm');

	var result = returnData('getWorkOrder', formData);
	if (result == "") {
		myApp.alert('', '没有找到数据！');
		return;
	}

	// alert(result);
	$$("#workOrderList").html('');

	var optHtml = '';
	$$.each(result, function(n, one) {
		optHtml += '<li><a href="#" class="item-link item-content" onclick="toDetail(this)">'
				+ '<div class="item-inner">' + '<div class="item-title-row">'
				+ '<div class="item-title" style="font-weight: 600; white-space: normal">' + one['工单'] + '</div>'
				+ '</div>' + '<div class="item-text" style="display: inline; height: 20px">' + one['代维']
				+ '</div>&nbsp&nbsp' + '<div class="item-text" style="display: inline; height: 20px;">' + one['指标']
				+ '</div>'
				+ '<div class="item-text" style="display: inline; float: right; margin-right: 8%; height: 20px">'
				+ one['日期'] + '</div>' + '<div class="item-text" style="height: 20px">' + one['中文名'] + '</div>'
				+ '</div>' + '</a></li>';
	});

	$$('#workOrderList').html(optHtml);
	$$('.preloader').css('display', 'none');

	mainView.router.load({
		pageName : 'workOrder',
		animatePages : false,
	});
	$$('.page-content').scrollTo(0,0);
}

var m;
var beginTime = myApp.calendar({
	input : '#beginTime',
	value : [ new Date() ],
	closeOnSelect : true,
	onDayClick : function(p, dayContainer, year, month, day) {
		//$$('#endTime').val('');
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
			if(day <10 ){
				day="0"+day;
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
		//$$('#beginTime').val('');
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
            if(day <10 ){
                day="0"+day;
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

// Attach 'infinite' event handler
$$('.infinite-scroll').on('infinite',function() {

	// Loading flag
	var loading = false;

	// Last loaded index
	var lastIndex = $$('#workOrderList li').length;
	//alert(lastIndex);return;
	
	// Exit, if loading in progress
	if (loading)
		return;

	// Set loading flag
	loading = true;
	
	$$('#start').val(lastIndex-1);
	
	var formData = myApp.formToJSON('#workOrderProcessForm');

	var result = returnData('getWorkOrder', formData);

	// Generate new items HTML
	var html = '';
	$$.each(result, function(n, one) {
		html += '<li><a href="#" class="item-link item-content" onclick="toDetail(this)">'
				+ '<div class="item-inner">' + '<div class="item-title-row">'
				+ '<div class="item-title" style="font-weight: 600; white-space: normal">' + one['工单'] + '</div>'
				+ '</div>' + '<div class="item-text" style="display: inline; height: 20px">' + one['代维']
				+ '</div>&nbsp&nbsp' + '<div class="item-text" style="display: inline; height: 20px;">' + one['指标']
				+ '</div>'
				+ '<div class="item-text" style="display: inline; float: right; margin-right: 8%; height: 20px">'
				+ one['日期'] + '</div>' + '<div class="item-text" style="height: 20px">' + one['中文名'] + '</div>'
				+ '</div>' + '</a></li>';
	});

	// Append new items
	$$('#workOrderList').append(html);
	
	// Reset loading flag
	loading = false;
});