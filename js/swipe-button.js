var initialMouse = 0;
var slideMovementTotal = 0;
var mouseIsDown = false;
var slider = $('.btn-swipe');
var button = $('.btn-start');
var loading = $('#swipe-loading');
var arrows = $('.md-arrow');

slider.on('mousedown touchstart', function(event){
	mouseIsDown = true;
	slideMovementTotal = $('.btn-start').width() - $(this).width() + 8;
	initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
});

$(document.body, '.btn-swipe').on('mouseup touchend', function (event) {
	if (!mouseIsDown)
		return;
	mouseIsDown = false;
	var currentMouse = event.clientX || event.changedTouches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;

	if (relativeMouse < slideMovementTotal) {
		$('.swipe-text').fadeTo(300, 1);
		slider.animate({
			left: "8px"
		}, 300);
		return;
	}
	// slider.addClass('unlocked');
	
	setTimeout(function() {
		button.addClass('bg-converted');
		// loading.show();
		// arrows.hide();
        window.location.href = './wallet.html';

	}, 0);
	
	setTimeout(function(){
		slider.on('click tap', function(event){
			if (!slider.hasClass('unlocked'))
				return;
			slider.removeClass('unlocked');
			button.removeClass('bg-converted');
			// loading.hide();
			// arrows.show();
			slider.off('click tap');

		});
	}, 0);
});

$(document.body).on('mousemove touchmove', function(event){
	if (!mouseIsDown)
		return;
	var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;
	var slidePercent = 1 - (relativeMouse / slideMovementTotal);
	
	$('.swipe-text').fadeTo(0, slidePercent);
    
	if (relativeMouse <= 0) {
		slider.css({'left': '8px'});
		return;
	}
	if (relativeMouse >= slideMovementTotal + 8) {
		slider.css({'left': slideMovementTotal + 'px'});
		return;
        
	}
	slider.css({'left': relativeMouse + 8});
});

