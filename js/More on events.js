console.log('More on JS Events') 
let btn = document.getElementById('heading_id') 
btn.addEventListener('click', func1) 
btn.addEventListener('mousedown', func3) 
btn.addEventListener('dblclick', func2) 

function func1(e) {
    console.log("Simple Events", e) 
    e.preventDefault() 
}

// Double click event
function func2(e) {
    console.log("Its a double click event", e) 
    e.preventDefault() 
}

// Mouse Down Event
function func3(e) {
    console.log("Its a mouse down event", e) 
    e.preventDefault() 
}

// Mouse Enter event
document.querySelector('.no').addEventListener('mouseenter', function(){
    console.log('You entered no')
})

// Mouse Leave event
document.querySelector('.no').addEventListener('mouseleave', function(){
    console.log('You exited no')
})

// When the mouse move event happened the background color will change to another color
/*
document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY) 
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)` 
    console.log('You triggered mouse move event')
})
*/

