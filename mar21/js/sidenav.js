var navBtn = document.getElementById("navBtn");
var nav = document.getElementById("nav");
//target element by declared variable
// navBtn.style.color = "red";
// navBtn.style.fontSize = "32px";

//onclick show nav menu

navBtn.addEventListener("click", showNav);

function showNav(){
    nav.classList.toggle("viewNav");
    navBtn.classList.toggle("active");
    
}



