// Your code goes here

// Mouse Over
const funBus = document.querySelector("h1")
const header = document.querySelector(".inverse-content h2")

function mouseOver (event){
    funBus.style.color = "Yellow"
    funBus.textContent = "Double Click"
    
   
}

funBus.addEventListener("mouseover", mouseOver)

//


// Double Click

function doubleClick(event){
    funBus.style.color = "red"
    funBus.textContent = "Where are the Stars?" 
}

funBus.addEventListener("dblclick", doubleClick)
//

// Key Down !!!!!!!!

function key(event){
    funBus.textContent = `${event.code}`
    header.textContent = "Zoom in or out"
    header.style.color = "Orange"
   

}

document.addEventListener("keydown", key)

//


// Wheel 

function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    
    image.style.transform = `scale(${scale})`

}
let scale = 1;
const image = document.querySelector(".img-fluid")
image.onwheel = zoom

