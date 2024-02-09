//CONSTANTS AND VARIABLES USED THROUGH OUT THE CODE.

//varibale and constants for sidebar.
const aside = document.querySelector('aside');
const navBtn = document.querySelector('.lines');
const navText = document.querySelectorAll('.nav-text');
const icon = document.getElementById("icon");
const logo = document.getElementById("logo");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");

//variables and contants for policy and terms popup.
const privacy = document.getElementById('privacy');
const privacyPolicy = document.getElementById('privacy-policy');
const closebtn = document.getElementById('close-btn');
const overlay2 = document.getElementById('overlay2');
const terms = document.getElementById('terms');
const termsConds = document.getElementById('terms-and-conditions');



//code to toggle sidebar open and close.
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


//code closes the sidebar when any where on the dark transparent overlay is clicked.
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






function backpop(){
    closebtn.classList.add('active');
    overlay2.classList.add('active');
    body.classList.add("active");
}//this function displays the hidden policy or terms popup when click event is passed.

terms.onclick = () =>
{
    termsConds.classList.add('active');
    backpop();
}//click event for terms and conditions popup.

privacy.onclick = ()=>
{
    privacyPolicy.classList.add('active');
    backpop();
}//clickn event for privact policy popup.

closebtn.onclick = ()=>
{
    privacyPolicy.classList.remove('active');
    termsConds.classList.remove('active');
    closebtn.classList.remove('active');
    overlay2.classList.remove('active');
    body.classList.remove("active");
}//universal close btn.


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });