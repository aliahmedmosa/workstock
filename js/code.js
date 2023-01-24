$(function () {
    'use strict';
    $('html,.jobs-scrolled').niceScroll({
		cursorborder:"none",
		cursorcolor:"#11b719",
		cursorwidth:"5px"
	});
    
    //header hiegth
    $('header').height($(window).height());
    
    //make saerch in center
     $('header ').css('paddingTop', ($('header').height() - $('.banner').height()) / 2);
    
    
    $(".register-form .casual-user-form , .register-form .company-form").slideUp();
   $("section.register-form .company").click(function(){
       $(".register-form .company-form").slideDown();
       $(".register-form .casual-user-form").slideUp();
   });
    $("section.register-form .casual-user").click(function(){
       $(".register-form .casual-user-form").slideDown();
       $(".register-form .company-form").slideUp();
   });
    
    
    /*//when resize
     $(window).resize(function () {
     //header hiegth
     $('header').height($(window).height());
     //make saerch in center
     $('header ').css('top', ($('header').height() - $('.banner').height()) / 2);
         $('.jobs-scrolled').height($(window).height()-70);
         
    });*/
    var scrollElement = $('#scroll');
     var prevScroll=$(window).scrollTop();

    $(window).scroll(function(){
       var currentscroll=$(window).scrollTop();
        if(prevScroll>currentscroll){
          $('nav.navbar , .other').css('top','0px'); 
            
          
        } else{
            $('nav.navbar , .other').css('top','-73px');
            
        }
        $('nav.nav-jobs').css('top','0px');
        var navheight=$('nav').height();
        if(currentscroll>=navheight){
            $('nav').addClass('scrolled');
        }else{
            $('nav').removeClass('scrolled');
        }
        prevScroll=currentscroll;
        //to fadein and out scroll
        if($(window).scrollTop() >= 750 ){
			scrollElement.fadeIn();	
		} else {
			scrollElement.fadeOut();
		}
    });
	//click to scroll to top
	scrollElement.click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:0
		},1000);
	});
    $('section .map iframe').height($(window).height());
    $('.filter-container').height($(window).height()-95);
    $('section.filter .icon').click(function(){
        $('section.filter').toggleClass("clicked");
    });
    $('.jobs-scrolled').height($(window).height()-70);
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        }
    }
});
    $('.star.rating').click(function(){
  console.log( $(this).parent().data('stars') + ", " + $(this).data('rating'));
  $(this).parent().attr('data-stars', $(this).data('rating'));
});
});