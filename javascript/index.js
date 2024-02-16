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

  setInterval(async () => {
    document.getElementById('welcome-text').src = "images/icons/welcome"+counter+".png";
    counter++

      if(counter>3){
        await loopDelay(4000);
        counter = 1
      }

  }, 4000);