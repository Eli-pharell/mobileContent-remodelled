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

