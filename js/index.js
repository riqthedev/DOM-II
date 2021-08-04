// Your code goes here
const funBus = document.querySelector("h1")
const header = document.querySelector(".inverse-content h2")
const aboutLink = document.querySelector(".nav-link:nth-of-type(2)")
const homeLink = document.querySelector(".nav-link:nth-of-type(1)")
const header2 = document.querySelector("h2")
const button = document.querySelector(".btn")

// Mouse Over √

function mouseOver (event){
    funBus.style.color = "Yellow"
    funBus.textContent = "Double Click"
    
}
funBus.addEventListener("mouseover", mouseOver)
//


// Double Click √

function doubleClick(event){
    funBus.style.color = "red"
    funBus.textContent = "Where are the Stars?" 
}
funBus.addEventListener("dblclick", doubleClick)
//

// Key Down √

function key(event){
    funBus.textContent = `${event.code}`
    header.textContent = "Zoom in or out"
    header.style.color = "Orange"
    aboutLink.textContent = "Click"

    
}
document.addEventListener("keydown", key)

//


// Wheel √

function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    image.style.transform = `scale(${scale})`
}
let scale = 1;
const image = document.querySelector(".img-fluid")
image.onwheel = zoom
//


// Load √

function load(event){
    document.body.style.color = "gray"
    
}
window.addEventListener("load",load)
//



// Focus √
function focus(event){
    document.querySelector(".nav-link:nth-of-type(2)").focus();
    homeLink.textContent = "focused"
    homeLink.style.backgroundColor = "black"
    homeLink.style.color = "white"
   }
   aboutLink.addEventListener('focus', focus)
//

// Resize √
function reportWindowSize(event) {
    homeLink.textContent = window.innerHeight;
    aboutLink.textContent = window.innerWidth;
    homeLink.style.color = "green"
    aboutLink.style.color = "blue"
  }
window.onresize = reportWindowSize; 
window.addEventListener('resize', reportWindowSize);
//



//  Click √

function click(event){
    header2.style.color = "teal"
    
}

header2.addEventListener("click",click)

//


// Scroll √
function onScroll(event){
    
    button.style.color = "black"
    button.style.backgroundColor = "Pink"
    button.textContent = " Stop!!!"
}
document.addEventListener("scroll",onScroll)
//


//

function mouseOut(event){
    header2.style.color = "red";
    
}
header2.addEventListener('mouseout',mouseOut)