console.log('HTML Elemement Selector')
/*
element selectors:
1. Single element selector
2. Multi element selector

*/

// 1. Single element selector
let element = document.getElementById('myfirst')
// element = element.className
// element = element.childNodes
// element = element.parentNode
element.style.color = 'red'
element.innerText = 'I am a coder'
element.innerHTML = '<b>I am a coder</b>'
console.log(element.innerText)


let sel = document.querySelector('#myfirst')
sel = document.querySelector('.child')
sel = document.querySelector('div')
sel.style.color = 'green'
console.log(sel)

// 2. Multi element selector
let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container')
elems = document.getElementsByTagName('div')
console.log(elems)

// Simple for loop 
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element)
   element.style.color = 'red' 
}

// Using for each loop
// Array.from(elems).forEach(element => {
//     console.log(element)
//    element.style.color = 'blue' 
// })
// console.log(elems[0].getElementsByClassName('child'))
