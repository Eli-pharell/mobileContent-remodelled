//CONSTANTS AND VARIABLES USED THROUGH OUT THE CODE.

//varibale and constants for sidebar.
const aside = document.querySelector('aside');
const navBtn = document.querySelector('.lines');
const navText = document.querySelectorAll('.nav-text');
const icon = document.getElementById("icon");
const logo = document.getElementById("logo");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");
const navBubble = document.getElementById('bubble');

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
    navBubble.classList.toggle("active");
    document.querySelector(".line1").classList.toggle('active');
    document.querySelector(".line2").classList.toggle('active');
    document.querySelector(".line3").classList.toggle('active');
}


//mobile navigation bubble
navBubble.onclick = () =>{
    aside.classList.toggle("active")
    navText.forEach(txt=>
        {
            txt.classList.toggle("active");
        });

    icon.classList.toggle("active");
    logo.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("active");
    navBubble.classList.add("active");

    document.querySelector(".line1").classList.toggle('active');
    document.querySelector(".line2").classList.toggle('active');
    document.querySelector(".line3").classList.toggle('active');
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
    navBubble.classList.remove("active");
    document.querySelector(".line1").classList.remove('active');
    document.querySelector(".line2").classList.remove('active');
    document.querySelector(".line3").classList.remove('active');

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





//Code to check if business is open or not
let BusinessTime = new Date();
let activeStatus = document.getElementById('active-status');



if(BusinessTime.getHours() >= 8 && BusinessTime.getHours() < 17){
    activeStatus.innerHTML = "Open";
    activeStatus.style.color = "#04D9FF";
}
else{
    activeStatus.innerHTML = "Closed";
    activeStatus.style.color = "orangered";
}

if((BusinessTime.getMonth() == 0 && BusinessTime.getDate() == 1 || BusinessTime.getDate() == 7) || 
(BusinessTime.getMonth() ==2 && (BusinessTime.getDate()==6 || BusinessTime.getDate()==29)) ||
(BusinessTime.getMonth() == 3 && BusinessTime.getDate() == 1) ||
(BusinessTime.getMonth() == 4 && BusinessTime.getDate() == 1) ||
(BusinessTime.getMonth() == 7 && BusinessTime.getDate() == 4) ||
(BusinessTime.getMonth() == 8 && BusinessTime.getDate() == 21) ||
(BusinessTime.getMonth() ==11 && (BusinessTime.getDate()==6 || BusinessTime.getDate()== 25|| BusinessTime.getDate()==26)) ||
(BusinessTime.getDay() == 6 || BusinessTime.getDay() ==7)
){
    activeStatus.innerHTML = "Closed";
    activeStatus.style.color = "orangered";
}



// let initialX = 0,
//     initialY = 0;
// let moveElement = false;

// //Events Object
// let events = {

//     mouse: {
//         down: 'mousedown',
//         move: 'mousemove',
//         up: 'mouseup',
//     },

//     touch: {
//         down: "touchstart",
//         move: "touchmove",
//         up: "touchend",
//     }
    
// };



// let deviceType = "";

// //Detect touch device

// const isTouchDevice = () =>{
//     try{
//         //try to create touchEvent.

//         document.createEvent("TouchEvent");
//         deviceType = "touch";
//         return true;
//     } catch(e){
//         deviceType = "mouse";
//         return false;
//     }
// }

// isTouchDevice();


// //start touch start
// navBubble.addEventListener(events[deviceType].down,
// (e) => {
//     e.preventDefault();

//     initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
//     initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

//     moveElement = true;
// })


// //move elenment
// navBubble.addEventListener(events[deviceType].move,
// (e) =>{
//     if(moveElement){
//         e.preventDefault();
//         let newX = !isTouchDevice() ?  e.clientX : e.touches[0].clientX;
//         let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

//     navBubble.style.top = navBubble.offsetTop - (initialY - newY)*10 + "px";
//     navBubble.style.left = navBubble.offsetLeft - (initialX - newX)*10 + "px";

//     initialX = newX;
//     initialY = newY;
//     }
// });


// //touch end

// navBubble.addEventListener(events[deviceType].up,
// (stopMovement = (e) => {
//     moveElement = false
// }));

// navBubble.addEventListener("mouseleave", stopMovement);

// navBubble.addEventListener(events[deviceType].up,
// (e) => {
//     moveElement = false;
// })





 document.querySelector(".col3").children[1].lastElementChild.remove();//CLEAR TO DISPLAY TERMS AND CONDITIONS LINK AT THE FOOTER OF THE
document.querySelector('.col3').children[1].children[3].remove();//CLEAR TO DISPLAY PRIVACY POLICY.

const input = document.getElementById("email-entry");
 input.disabled = true; //CLEAR THIS TO ACTIVATE NEWSLETTER SUBSCRIPTION INPUT.