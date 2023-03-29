/**
 * Table of contents
 * -----------------------------------
 * 1.HEADER MENU
 * 2.SCHEDULE FORM
 * 3.SINGLE COMPANY SLIDER
 * 4.PORTFOLIO SLIDER

 */

(function ($) {
    "use strict";
    var PATH = {};

 /******************** 1.HEADER MENU  ********************/
    PATH.HeaderMenu = function () {
      const menuToggle = document.querySelector(".menu-toggle");
      const mainMenu = document.querySelector(".main-menu");
      menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("menu-active");
        mainMenu.classList.toggle("menu-show");
      });
    }


   /******************** 2.SCHEDULE FORM  ********************/
    PATH.ScheduleForm = function () {
      let tr = document.querySelectorAll(".table-row");
      const scheduleForm = document.querySelectorAll(".scheduleForm");
      tr.forEach((availableDate, idx) => {
        const available = availableDate.querySelectorAll(".available");
        available.forEach((item) => {
          item.addEventListener("click", function () {
            hideAllSelectedDates(); 
            hideAllScheduleForm(); 
            item.classList.add("selected-date");
            scheduleForm[idx].classList.add("show");
          });
        });
      });
      function hideAllScheduleForm() {
        scheduleForm.forEach((content) => content.classList.remove("show"));
      }
      function hideAllSelectedDates() {
        const selectedDates = document.querySelectorAll(".selected-date");
        selectedDates.forEach((date) => {
          date.classList.remove("selected-date");
        });
      }
    }

  
    /******************** 3.SINGLE COMPANY SLIDER  ********************/
    PATH.SingleCompanySlider = function () {
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
  

   /******************** 3.PORTFOLIO SLIDER  ********************/
  PATH.PortfolioSlide = function () {
    new Swiper(".portfolio-swiper", {
      loop: true,
      breakpoints: {
        
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween:20
        } 
      },

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
      PATH.HeaderMenu();
      PATH.ScheduleForm();
      PATH.SingleCompanySlider();
      PATH.PortfolioSlide()
    });
  
  
  
    /******************** WINDOW ON LOAD FUNCTION ********************/
    $(window).on("load", function () {});
  })(jQuery);

  