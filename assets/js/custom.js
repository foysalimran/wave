/**
 * Table of contents
 * -----------------------------------
 * 1.HEADER STICKY
 * 2.HEADER ACTIVE ADD CLASS
 * 3.HEADER COLLAPSE
 * 4.FIXED HEADER
 * 5.Hero5 SLIDER
 * 6.GLIGHTBOX VIDEO HERO
 * 7.ODOMETER JS
 * 8.TESTIMONIAL SLIDER
 * 9.TESTIMONIAL SLIDER V2
 * 10.PORTFOLIO SLIDER
 * 11.BLOG SLIDER
 * 12.SERVICE SLIDER
 * 13.OVERVIEW SLIDER
 * 14.CONTACT FORM
 * 15.AJAX MAILCHIMP SUBSCRIBE
 * 16.LOCAL SUBSCRIPTION
 * 17.LOCAL SUBSCRIPTION 2
 * 18.SMOOTH SCROLL ON BUTTON CLICK
 * 19.SCREENSHOT SLIDER
 * DARK VERSION
 */

(function ($) {
    "use strict";
    var PATH = {};
  
  
    /******************** 8.TESTIMONIAL SLIDER  ********************/
    PATH.TestimonialSlide = function () {
      new Swiper(".single-company-swiper", {
        spaceBetween: 18,
        loop: true,
  
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }; 
  
    /******************** DOCUMENT READY FUNCTION ********************/
    $(function () {
      PATH.TestimonialSlide();
    });
  
  
  
    /******************** WINDOW ON LOAD FUNCTION ********************/
    $(window).on("load", function () {});
  })(jQuery);

  