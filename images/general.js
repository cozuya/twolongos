var coz = {};

coz.init = function () {
	if ($(window).width() > 400) {
		setTimeout(function () {
			$('#main').addClass('flip');
		}, 4000);
	}

	setTimeout(function () {
		$('header').addClass('header-position');
		$('canvas').addClass('canvas-position');
	}, 3500);
	
	setTimeout(function () {
		$('.footer-icons').each(function(index, el) {
			setTimeout(function () {
				$(el).addClass('flip-footer-icons');
			}, index * 500);
		});
	}, 6500);

	if (Modernizr.canvas) {		
		var ctx = document.getElementById('header-canvas').getContext('2d');
		ctx.fillStyle = "#899dc3";
		var c = 0,
		id = setInterval(function () {
			ctx.fillRect(c,0,7,7);
			if (c === 25) {
				c = 69;
			} else {
				c++;
			}

			if (c === 100) {
				clearInterval(id);
			}
		}, 30);
	}

	$(window).on('resize', function () {
		window.location.reload();		
	});

	this.setMiddle();
	this.fancyName();
	this.addEventHandlers();
};

coz.setMiddle = function () {
	var height = $(window).height();
	$('header').css('top', (height / 3) + 'px').show().addClass('top-transitions');
	$('canvas').css({top: (height / 3) + 10 + 'px', display: 'block'}).addClass('top-transitions');
};

coz.fancyName = function () {
	var effects = ['grow', 'fade', 'jumble', 'dropdown'];
	var effect = Math.floor(Math.random() * effects.length);
	$('header p').textEffect(effects[effect]);
};

coz.addEventHandlers = function () {
	$('a.footer-icons').hover(function () {
		$(this).children().show().animate({bottom: '120%', opacity: 1}, 500);
	}, function () {
		$(this).children().hide().css({bottom: '200%', opacity: 0});
	});

	$('#header-canvas').delay(3000).animate({opacity: 0.2}, 3000);
};

$(document).ready(function () {
	coz.init();
});