var swiper = new Swiper(".swiper", {
    

    breakpoints:{
      1200:{
        slidesPerView: 3.9,
    spaceBetween: 19,
    loop: false,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets:true,
      clickable: true,
    },
    
    navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    keyboard:{
      enabled:true,
    },
      },


      992:{
        slidesPerView:2.744,
        spaceBetween: 19,
        loop: false,
    
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets:true,
          clickable: true,
        },
        
        navigation:{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        keyboard:{
          enabled:true,
        },
      },

      768:{
        slidesPerView:2.46,
        spaceBetween: 19,
        loop: false,
    
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets:true,
          clickable: true,
        },
        
        navigation:{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        keyboard:{
          enabled:true,
        },
      },

      576:{
        slidesPerView:2.6,
        spaceBetween: 19,
        loop: false,
    
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets:true,
          clickable: true,
        },
        
        navigation:{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        keyboard:{
          enabled:true,
        },
      },

      480:{
        slidesPerView:1.04,
        spaceBetween: 19,
        loop: false,
    
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets:true,
          clickable: true,
        },
        
        navigation:{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        keyboard:{
          enabled:true,
        },
      },

      0:{
        slidesPerView:1,
        spaceBetween: 15,
        loop: false,
    
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets:true,
          clickable: true,
        },
        
        navigation:{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        keyboard:{
          enabled:true,
        },
      }
    }


  });