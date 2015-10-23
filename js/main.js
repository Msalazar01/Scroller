$(window).on('resize', function(e) {

	var imgW = $('.hills').width();
	var imgH = $('.hills').height();

	console.log(imgW + "*" + imgH)

	$('.hills').css('position','relative');

});