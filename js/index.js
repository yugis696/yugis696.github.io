//JS for responsive menu
$('.burger').click(function() {
  $('.resp_ul').toggleClass('activated');
  $('.burger').toggleClass('open');
  $('.responsive_menu').toggleClass('zi_1');
});

// Menu js for Position fixed
$(window).scroll(function(){
	var window_top = $(window).scrollTop() + 1;
	if (window_top > 250 & ($(window).width() > 767)) {
	$('.yg_nav_top_wrapper').addClass('nav_fixed animated fadeInDown');
	} else {
	$('.yg_nav_top_wrapper').removeClass('nav_fixed animated fadeInDown');
		}	
	});


//animate some elements
$('.yg_top_phone_block').hover(function() {
  $('.menu_phone_img').toggleClass('animated tada');  
});

//Slick slider
$(document).ready(function(){
  $('.top_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    centerMode: true,    
    adaptiveHeight: true,
	variableWidth: true,
	centerPadding: 0,
	 responsive: [
    {
      breakpoint: 572,
      settings: {
      adaptiveHeight: false,
	  variableWidth: false,
	  arrows: false,
      }
	
    },
    {
      breakpoint: 767,
      settings: {
      	adaptiveHeight: false,
		variableWidth: false,
		
      }
	
    },    
  ]
  });
	$('.team_slider').slick({
    centerMode: true,
  	centerPadding: '40px',
	slidesToShow: 4,
    slidesToScroll: 3,
	arrows: true,
	infinite:true,
    responsive: [
    {
      breakpoint: 450,
      settings: {      
      slidesToShow: 1,
      centerPadding: '0',
      }
	
    },
    {
      breakpoint: 763,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '100px',
      }
	
    },
    {
      breakpoint: 991,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
		
      }
	
    },    
    {
      breakpoint: 1200,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
		
      }
	
    },    
  ]
		});
});