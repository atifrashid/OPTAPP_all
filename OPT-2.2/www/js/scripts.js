var BAlert = $('<div class="modal fade" tabindex="-1" role="dialog"  aria-hidden="true">'+
  '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<h5 class="modal-title"></h5>'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
          '<span aria-hidden="true">&times;</span>'+
        '</button>'+
      '</div>'+
      '<div class="modal-body"><p></p></div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>');


var waitingDialog=waitingDialog||function(d){"use strict";var a=d('<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;"><div class="modal-dialog modal-m"><div class="modal-content"><div class="modal-header"><h3 style="margin:0;"></h3></div><div class="modal-body"><div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div></div></div></div></div>');return{show:function(i,o){"undefined"==typeof o&&(o={}),"undefined"==typeof i&&(i=cLan.Loading);var s=d.extend({dialogSize:"m",progressType:"",onHide:null},o);a.find(".modal-dialog").attr("class","modal-dialog").addClass("modal-"+s.dialogSize),a.find(".progress-bar").attr("class","progress-bar"),s.progressType&&a.find(".progress-bar").addClass("progress-bar-"+s.progressType),a.find("h3").text(i),"function"==typeof s.onHide&&a.off("hidden.bs.modal").on("hidden.bs.modal",function(){s.onHide.call(a)}),a.modal()},hide:function(){a.modal("hide")}}}(jQuery);

function alert_error(message, title = "" ){
	if(empty(title)){ 
		title = 'Validation Error'; 
	}
	BAlert.find('.modal-title').html(title);
	BAlert.find('.modal-body').html('<p class="text-danger">'+message+'</p>');
	BAlert.modal();	
}

(function($) {
    "use strict";

	$('#btnLogOut').on('click', function(){
		localStorage.clear();
		document.location = 'login.html';
	});
	
})(jQuery);

function empty(mixed_var) {
	"use strict";
	var undef, key, i, len;
	var emptyValues = ['undefined', undef, null, false, 0, '', '0'];
	for (i = 0, len = emptyValues.length; i < len; i++) {
		if (mixed_var === emptyValues[i]) {
			return true;
		}
	}
	if (typeof mixed_var === 'object') {
		for ( key in mixed_var) {
			return false;
		}
		return true;
	}
	return false;
}	

function ajaxError(  jqXHR, textStatus, errorThrown ){
	
	var M = '';
	if (jqXHR.status === 0) {
		M = 'Unable to connect to the server';
	} else if (jqXHR.status == 404) {
		M = 'Requested page not found. [404]';
	} else if (jqXHR.status == 500) {
		M = 'Internal Server Error [500].';
	} else if (textStatus === 'parsererror') {
		M = 'Requested JSON parse failed:<br />'+jqXHR.responseText;
	} else if (textStatus === 'timeout') {
		M = 'Request Time out.';
	} else if (textStatus === 'abort') {
		M = 'Ajax request aborted.';
	} else {
		M = 'Uncaught Error ' + jqXHR.textStatus;
	}
	
	BAlert.find('.modal-title').html('Communication Error');
	BAlert.find('.modal-body').html('<p class="text-danger">'+M+'</p>');
	BAlert.modal();	
	
}