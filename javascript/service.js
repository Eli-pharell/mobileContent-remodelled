const form = document.querySelector('.form1');
const table = document.querySelector('.request-table');
var inputs = document.querySelectorAll('input');
console.log(form);


var counter = 1;

function loopDelay(ms){
  
  return new Promise( 
      resolve =>{
          setTimeout(()=>{resolve('')},ms);
      })
}

async function reset(){
 await loopDelay(2800);
 if(counter>3){
  counter = 1;
 }
}

setInterval(() => {
  document.getElementById('welcome-text').src = "images/icons/welcome"+counter+".png";
  counter++

  reset();
}, 2980);



// form.addEventListener('submit',(e)=>{
//     e.reset();
// })

