$(function(){

    $('.product__slider').slick({
         infinite: true,
         fade:true,
         arrows: true,
         dots:true,
       
        //dots: true,
        //autoplay: true,
       // fade: true,
        prevArrow:' <i class="fa fa-chevron-left"></i>',
        nextArrow:' <i class="fa fa-chevron-right"></i>',
        asNavFor: '.slider-dotshead',
     });
     $('.slider-dotshead').slick({
        fade:true,
        arrows: false,
       
         asNavFor: '.product__slider',
    });
  
     });