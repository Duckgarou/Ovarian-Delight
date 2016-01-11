jQuery(function($){
	/* We initialize the countdown*/
	$('#countdown').countdown('2016/01/15 10:00:00', function(event) {
		$(this).html(event.strftime('%D days %H:%M:%S'));
	});
});