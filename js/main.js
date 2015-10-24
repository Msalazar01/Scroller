var imgW = $('.hills').width() - $(window).width()
var imgH = $(window).height() + imgW

$('body').css('height', imgH);

$(window).on('scroll', function(e) {

	var scr = $(window).scrollTop ();
	$('.hills').css('left', - scr);

	console.log(scr);

});