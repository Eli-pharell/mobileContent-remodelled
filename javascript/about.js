var swiper = new Swiper(".swiper", {
    

    breakpoints:{
      1200:{
        slidesPerView: 3.43,
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
        slidesPerView:2.82,
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


  var lock = document.querySelectorAll('.fa-lock-open');
  var text =document.querySelectorAll('.profile-text');
  var profile = document.querySelectorAll(".profile");


  lock.forEach(lck => {

    lck.onclick = () =>{
      lck.classList.toggle("fa-lock-open");
      lck.classList.toggle("fa-lock");
      lck.previousSibling.classList.toggle('active');
      lck.parentNode.firstChild.classList.toggle('active');

      if(lck.classList.contains('fa-lock')){
        lck.style.opacity = "1";
      }
      else if(lck.classList.contains('fa-lock-open')){
        lck.style.opacity = "0";
      }
    }
  
  });






  