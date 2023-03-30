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


   /******************** 3.PORTFOLIO SLIDER  ********************/
  PATH.RangeInput = function () {
    const dragEl1 = document.querySelector('.range-slider-drag1');
    const dragEl2 = document.querySelector('.range-slider-drag2');
    const innerTrack = document.querySelector('.range-slider-track-inner');
    const inputEl1 = document.querySelector('.input-input1');
    const inputEl2 = document.querySelector('.input-input2');

    console.log(dragEl1)
    console.log(dragEl2)
    console.log(innerTrack)
    
    let sliderWidth = 180;
    let isDragging1 = false;
    let isDragging2 = false;
    let currentPosition1 = 0;
    let currentPosition2 = 180;
    let initialClickPosition1 = 0;
    let initialClickPosition2 = 180;
    let clickX;
    
    dragEl1.addEventListener('mousedown', function(e) {
      isDragging1 = true;
      clickX = e.pageX;
      initialClickPosition1 = currentPosition1; // 11
    });
    
    window.addEventListener('mousemove', function(e) {
      if (!isDragging1) {
        return;
      }
    
      const mouseDiff = e.pageX - clickX; // 5
      const newPosition = initialClickPosition1 + mouseDiff;
    
      if (newPosition < 0 || newPosition > sliderWidth) {
        return;
      }
    
      currentPosition1 = newPosition;
      dragEl1.style.left = `${newPosition}px`;
      innerTrack.style.left = `${newPosition + 5}px`;
      inputEl1.value = Math.round(100 * currentPosition1 / sliderWidth);
    });
    
    dragEl1.addEventListener('mouseup', function() {
      isDragging1 = false;
    });
    
    
    // 2
    dragEl2.addEventListener('mousedown', function(e) {
      isDragging2 = true;
      clickX = e.pageX;
      initialClickPosition2 = currentPosition2; // 11
    });
    
    window.addEventListener('mousemove', function(e) {
      if (!isDragging2) {
        return;
      }
    
      const mouseDiff = e.pageX - clickX; // 5
      const newPosition = initialClickPosition2 + mouseDiff;
    
      if (newPosition < 0 || newPosition > sliderWidth) {
        return;
      }
    
      currentPosition2 = newPosition;
      dragEl2.style.left = `${newPosition}px`;
      innerTrack.style.right = `${sliderWidth - newPosition + 5}px`;
      inputEl2.value = Math.round(100 * currentPosition2 / sliderWidth);
    });
    
    dragEl2.addEventListener('mouseup', function() {
      isDragging2 = false;
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
    $(window).on("load", function () {
      PATH.RangeInput()
    });
  })(jQuery);

  