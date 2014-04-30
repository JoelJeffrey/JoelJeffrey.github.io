$(document).ready(function() {
	skrollr.init();
});

$('.panel').on('click', function() {
	console.log('working?');
	var $this = $(this);
	var msg = $this.find('p').html();
	var newMsg = $('<p>' + msg + '</p>');

	if($this.hasClass('is-active')) {
		return false;
	}
    	$('.panel').removeClass('is-active');
    	$this.addClass('is-active');
    	$('.center').empty().append(newMsg);
});
