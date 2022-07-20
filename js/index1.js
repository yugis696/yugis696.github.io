$(window).on('load', function () {
	$preloader = $('.loaderArea'),
		$loader = $preloader.find('.loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});

$(document).ready(function () {

	var $hamburger = $(".hamburger");
	var $topMenu = $(".top-menu");
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active");
		$topMenu.toggleClass("menu-show"); // Do something else, like open/close menu
	});

	$("input[name='phone']").mask('+7(000) 000-0000');

	//Form JS start


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

	// Accordion JS

	const $uiAccordion = $('.js-ui-accordion');

	$uiAccordion.accordion({
		collapsible: true,
		heightStyle: 'content',

		activate: (event, ui) => {
			const newHeaderId = ui.newHeader.attr('id');

			if (newHeaderId) {
				history.pushState(null, null, `#${newHeaderId}`);
			}
		},

		create: (event, ui) => {
			const $this = $(event.target);
			const $activeAccordion = $(window.location.hash);

			if ($this.find($activeAccordion).length) {
				$this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
			}
		}
	});


	$(window).on('hashchange', event => {
		const $activeAccordion = $(window.location.hash);
		const $parentAccordion = $activeAccordion.parents('.js-ui-accordion');

		if ($activeAccordion.length) {
			$parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
		}
	});

	$('.dolgov-btn').trigger('click');

});
