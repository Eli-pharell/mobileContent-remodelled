const form = document.querySelector('.form1');
const table = document.querySelector('.request-table');
var inputs = document.querySelectorAll('input');
console.log(form);

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
      await loopDelay(3700);
      counter = 1
    }

}, 3990);


// form.addEventListener('submit',(e)=>{
//     e.reset();
// })

