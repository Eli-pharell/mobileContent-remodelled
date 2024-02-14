const form = document.querySelector('.form1');
const table = document.querySelector('.request-table');
var inputs = document.querySelectorAll('input');
console.log(form);

var counter = 1;
setInterval(function(){
    document.getElementById('text').src = "images/icons/Text"+counter+".png";
    counter++
    if(counter>3){
        counter=1;
    }
},2000)


// form.addEventListener('submit',(e)=>{
//     e.reset();
// })

