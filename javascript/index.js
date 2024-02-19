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



  var counter = 2;

  function loopDelay(ms){
    
    return new Promise( 
        resolve =>{
            setTimeout(()=>{resolve('')},ms);
        })
}

async function reset(){
   await loopDelay(3000);
   if(counter>3){
    counter = 1;
   }
}

  setInterval(() => {
    document.getElementById('welcome-text-image').src = "images/icons/welcome"+counter+".png";
    counter++

    reset();
  },3000);
