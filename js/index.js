$(window).on('load', function () {
	$preloader = $('.loaderArea'),
		$loader = $preloader.find('.loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});

$(document).ready(function () {

	//mmenu

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-small.png" alt="Мед Центр САФИР">'
		},
		"pageScroll": true,
	});

	var dataMmenu = $('#my-menu').data("mmenu");

	dataMmenu.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function () {
		$('.hamburger').removeClass('is-active');
	});

	//slow scroll

	$("#my-menu, .bottom-menu").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

	//offer-slider

	$('.offer-slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		dotsClass: 'offer-dots',
		autoplay: true,
		autoplaySpeed: 5000,
	});

	//doc-slider

	$('.doc-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/right-arrow.svg" alt="arrows-right"></img>',
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/left-arrow.svg" alt="arrows-left"></img>',
		adaptiveHeight: true,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
            },
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px',
				}
            },
			{
				breakpoint: 576,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px',
				}
            },
        ]
	});


	$('.testimonial-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/right-arrow.svg" alt="arrows-right"></img>',
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/left-arrow.svg" alt="arrows-left"></img>',
		adaptiveHeight: true,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
            },
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '60px',
				}
            },
			{
				breakpoint: 576,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px',
				}
            },
        ]
	});

	$("input[name='phone']").mask('+7(000) 000-0000');

	//Form JS start

	$('.testimonial_form-btn').click(function () {
		var par = $(this).parents('form'),
			phone = $('input[name="phone"]', par).val(),
			name = $('input[name="name"]', par).val(),
			text = $('textarea[name="text"]', par).val(),
			formdata = $('input[name="formdata"]', par).val();

		$('input[name="phone"]', par).removeClass('error-form');
		$('input[name="name"]', par).removeClass('error-form');
		$('textarea[name="text"]', par).removeClass('error-form');
		$('.checkbox-text', par).removeClass('er-text');

		if (!name || !phone || !text) {
			!phone ? $('input[name="phone"]', par).addClass('error-form') : '';
			!name ? $('input[name="name"]', par).addClass('error-form') : '';
			!text ? $('textarea[name="text"]', par).addClass('error-form') : '';
		} else {
			if ($('input[name="checkbox"]', par).prop('checked')) {
				$.ajax({
					url: '/ajax/mail.php',
					dataType: 'json',
					type: 'POST',
					data: {
						'phone': phone,
						'name': name,
						'text': text,
						'formdata': formdata
					},
					success: function (data) {

						var mesSuc = '<span class="mes-suc">Спасибо, ваша заявка отправлена!</span>';


						$('.message', par).html(mesSuc);
						setTimeout(function () {
							if (data == 'ok') $('input[name="phone"], input[name="name"], textarea[name="text"], input[name="formdata"]',
								par).val('');
							$('.message', par).html('');
							if (!par.hasClass('form1')) $.fancybox.close();
						}, 3000);
					}
				});
			} else {
				var mesEr = '<span class="mes-er">Что-то пошло не так, попробуйте еще раз</span>';


				$('.message', par).html(mesEr);
				$('.checkbox-text', par).addClass('er-text');
			}
		}
	});


	$('.booking_form-btn').click(function () {
		var par = $(this).parents('form'),
			phone = $('input[name="phone"]', par).val(),
			formdata = $('input[name="formdata"]', par).val();

		$('input[name="phone"]', par).removeClass('error-form');
		$('.checkbox-text', par).removeClass('er-text');

		if (!phone) {
			!phone ? $('input[name="phone"]', par).addClass('error-form') : '';

		} else {
			if ($('input[name="checkbox"]', par).prop('checked')) {
				$.ajax({
					url: '/ajax/mail.php',
					dataType: 'json',
					type: 'POST',
					data: {
						'phone': phone,
						'formdata': formdata
					},
					success: function (data) {

						var mesSuc = '<span class="mes-suc">Спасибо, ваша заявка отправлена!</span>';


						$('.message', par).html(mesSuc);
						setTimeout(function () {
							if (data == 'ok') $('input[name="phone"], input[name="formdata"]',
								par).val('');
							$('.message', par).html('');
							if (!par.hasClass('form1')) $.fancybox.close();
						}, 3000);
					}
				});
			} else {
				var mesEr = '<span class="mes-er">Что-то пошло не так, попробуйте еще раз</span>';


				$('.message', par).html(mesEr);
				$('.checkbox-text', par).addClass('er-text');
			}
		}
	});

	//Form JS end

	$('.callBack_btn').hover(function () {
		$('.callBack_btn__ico').toggleClass('animated tada');
	});

});

wow = new WOW({	
	mobile: false,
	
})
wow.init();
