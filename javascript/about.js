const aside = document.querySelector('aside');
const navBtn = document.querySelector('.lines');
const navText = document.querySelectorAll('.nav-text');
const icon = document.getElementById("icon");
const logo = document.getElementById("logo");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");

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
    body.classList.toggle("active");
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
    body.classList.remove("active");

}

const privacy = document.getElementById('privacy');
const privacyPolicy = document.getElementById('privacy-policy');
const closebtn = document.getElementById('close-btn');
const overlay2 = document.getElementById('overlay2');
const terms = document.getElementById('terms');
const termsConds = document.getElementById('terms-and-conditions')


function backpop(){
    closebtn.classList.add('active');
    overlay2.classList.add('active');
    body.classList.add("active");
}

terms.onclick = () =>
{
    termsConds.classList.add('active');
    backpop();
}

privacy.onclick = ()=>
{
    privacyPolicy.classList.add('active');
    backpop();
}

closebtn.onclick = ()=>
{
    privacyPolicy.classList.remove('active');
    termsConds.classList.remove('active');
    closebtn.classList.remove('active');
    overlay2.classList.remove('active');
    body.classList.remove("active");
}

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