const aside = document.querySelector('aside');
const navBtn = document.querySelector('.lines');
const navText = document.querySelectorAll('.nav-text');
const icon = document.getElementById("icon");
const logo = document.getElementById("logo");
const overlay = document.getElementById("overlay");

console.log(navBtn)

navBtn.onclick = ()=>{
    aside.classList.toggle("active")
    navText.forEach(txt=>
        {
            txt.classList.toggle("active");
        });

    icon.classList.toggle("active");
    logo.classList.toggle("active");
    overlay.classList.toggle("active");
}

overlay.onclick = ()=>{
    aside.classList.remove("active")
    navText.forEach(txt=>
        {
            txt.classList.remove("active");
        });

    icon.classList.remove("active");
    logo.classList.remove("active");
    overlay.classList.remove("active");

}

var swiper = new Swiper(".swiper", {
    

    breakpoints:{
      1200:{
        slidesPerView: 3.96,
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

      1150:{
        slidesPerView:3.8,
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
      900:{
        slidesPerView:3.37,
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

      700:{
        slidesPerView:3,
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

      550:{
        slidesPerView:2.39,
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
        slidesPerView:2,
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