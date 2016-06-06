
$(function(){
    /*============================*/
	/* 01 - function on page load */
	/*============================*/
    $(window).load(function(){
		$('body').addClass('loaded');
		$('#loader-wrapper').fadeOut(500);
	});
    
    /*============================*/
	/* 02 - Click Menu */
	/*============================*/
  
    $(window).resize(function(){
       var wid = $(window).width();
        if( wid > 769 && $('.navi').is(':hidden')){
            $('.navi').removeAttr('style');
        }
    });
    $('.icon-menu').click(function(){
       $('.navi').slideToggle(700); 
    });
  
    
    /*============================*/
	/* 03 - Swiper */
	/*============================*/
    Svar mySwiperHomeSlider = $('.swiper-container').swiper({
	  loop: true,
	  pagination: '.pagination',
	  paginationClickable: true,
	  grabCursor: true,
	  speed: 800,
	  slidesPerView: 1
	});
    
      /*============================*/
	/* 05 - Show and hide text */
	/*============================*/
    $('input[type="email"]').focus(function(){
       $('.hide_text').show(1000) 
    });
    $('input[type="email"]').mouseout(function(){
       $('.hide_text').hide(1000) 
    });
    
      /*============================*/
	/* 07 - SCROll */
	/*============================*/
     var $menu = $("header");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 50 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 50 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });
  
    /*============================*/
	/* 07 - Page scroll to id master */
	/*============================*/
    $("a[href*='#']").mPageScroll2id();
    /*============================*/
	/* 08 - WOW */
	/*============================*/
    new WOW().init(); 
  
    /*============================*/
	/* 09 - Animations */
	/*============================*/
    $('.header-text').addClass('fadeInDown');
    $('.slider-image').addClass('fadeInUp');
    $('.swiper-pagination-bullet').click(function(){
        $('.header-text').addClass('fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
            $(this).removeClass('fadeInDown');
        });
    });
});    