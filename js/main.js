
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
  $('.icon-menu').click(function(){
     $(this).toggleClass("active");
  });
    
    /*============================*/
	/* 03 - Swiper */
	/*============================*/
    var mySwiperHomeSlider = $('.swiper-container').swiper({
	  loop: true,
	  pagination: '.pagination',
	  paginationClickable: true,
	  grabCursor: true,
	  speed: 800,
	  slidesPerView: 1
	});
    
      /*============================*/
	/* 04 - SCROll */
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
	/* 05 - Page scroll to id master */
	/*============================*/
    $("a[href*='#']").mPageScroll2id();
    /*============================*/
	/* 06 - WOW */
	/*============================*/
    new WOW().init(); 
  
    /*============================*/
	/* 07 - Animations */
	/*============================*/
    $('.header-text').addClass('fadeInDown');
    $('.slider-image').addClass('fadeInUp');
    $('.swiper-pagination-bullet').click(function(){
        $('.header-text').addClass('fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
            $(this).removeClass('fadeInDown');
        });
    });
});    