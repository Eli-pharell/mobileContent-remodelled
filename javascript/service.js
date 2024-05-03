const form = document.querySelector('.form1');
const table = document.querySelector('.request-table');
var inputs = document.querySelectorAll('input');


const serv1 = document.getElementById('serv1');
const serv2 = document.getElementById('serv2');
const serv3 = document.getElementById('serv3');
const serv4 = document.getElementById('serv4');
const serv5 = document.getElementById('serv5');
const serv6 = document.getElementById('serv6');

const author = document.getElementById('author');
const authors = document.getElementById('authors');
const ath = document.getElementById('ath-close-btn')
console.log(ath)

author.onclick = ()=>{
    authors.classList.toggle('active');
    setTimeout(function(){
        window.scrollBy(0, 150)
    },
    100)
}

ath.onclick = ()=>{
    authors.classList.remove('active');
}


function scroller(value){
    window.scrollTo(95, value);
};


serv1.onclick = scroller.bind(null, 450);
serv2.onclick = scroller.bind(null, 1000);
serv3.onclick = scroller.bind(null, 1590);
serv4.onclick = scroller.bind(null, 2150);
serv5.onclick = scroller.bind(null, 2150);
serv6.onclick = scroller.bind(null, 2150);



if (window.matchMedia("(max-width: 480px)").matches) {
    serv1.onclick = scroller.bind(null, 545 );
    serv2.onclick = scroller.bind(null, 1260);
    serv3.onclick = scroller.bind(null, 2010);
    serv4.onclick = scroller.bind(null, 2610);
    serv5.onclick = scroller.bind(null, 3120);
    serv6.onclick = scroller.bind(null, 3640);
  }


