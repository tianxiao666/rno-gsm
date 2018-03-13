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

$$('#workOrderStatisticsForm').on('submit', function(event) {
    event.preventDefault();
    $$("input").blur();
    checkWorkOrder();
});

$$('#workOrderStatisticsSubmitBtn').on('click', function() {
    checkWorkOrder();
});

var chosenCounty;
var chosenSubmaintain;
var chosenBeginTime;
var chosenEndTime;

function checkWorkOrder() {
    var beginTime = $$('#beginTime').val();
    var endTime = $$('#endTime').val();

    if (beginTime == '') {
        myApp.alert('', '开始时间不能为空！');
        return;
    } else if (endTime == '') {
        myApp.alert('', '结束时间不能为空！');
        return;
    }

    var formData = myApp.formToJSON('#workOrderStatisticsForm');

    chosenCounty=formData.county;
    chosenSubmaintain=formData.subMaintain;
    chosenBeginTime=formData.beginTime;
    chosenEndTime=formData.endTime;

    var result = returnData('getWorkOrderStatistics', formData);
    //console.log(result);
     //$$('#workOrderStatisticsForm').submit();
    showResultWithData(result);
}

function showResultWithData(result) {
    $$("#duringTime").html('起止时间：'+chosenBeginTime+'~'+chosenEndTime);
    $$("#workOrderStatisticsTab").html('');
    var optHtml = '<thead><tr>';
    $$.each(result, function(n, one) {
        if (n == 0) {
            $$.each(one, function(k, v) {
                optHtml += '<th style="text-align: center">' + k + '</th>';
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

                if(k=='完成率'){
                    if(v=='0'){
                        v="0.00%";
                    }else{
                        v=parseFloat(v).toFixed(2)+"%";
                    }

                }
                optHtml += '<td style="text-align: center">' + v + '</td>';
        });
        optHtml += '</tr>';
    });

    optHtml += '</tbody>';

    // alert(optHtml);
    $$('#workOrderStatisticsTab').html(optHtml);
    if(chosenCounty=="-1"&&chosenSubmaintain=="-1"){
        $$('.result').html('各个地区总体情况');
    }else if(chosenCounty=="-1"&&chosenSubmaintain!="-1"){
        $$('.result').html('各个地区'+chosenSubmaintain+'的情况');
    }else if(chosenCounty!="-1"&&chosenSubmaintain=="-1"){
        $$('.result').html(chosenCounty+'区全部代维的情况');
    }else if(chosenCounty!="-1"&&chosenSubmaintain!="-1"){
        $$('.result').html(chosenCounty+'区'+chosenSubmaintain+'的情况');
    }

    chosenCounty=null;
    chosenSubmaintain=null;

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
