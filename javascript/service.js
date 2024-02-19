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
}, 3000);




