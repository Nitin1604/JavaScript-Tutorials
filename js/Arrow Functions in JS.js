console.log('Arrow Functions');

// ARROW FUNCTIONS

// ---- Creating a regular function ----
const nitin = function (){
    console.log("This is the best person ever")
}
nitin();  // calling the function name "nitin"
// ---- Creating a regular function ----

// ---- Converting it to an arrow function ----
const suresh = ()=>{
    console.log("This is the output from arrow function")
}
suresh();  // calling the function name "suresh"
// ---- Converting it to an arrow function ----
    

// ---- function returning something ----
const greet = function(){
    return "Greeting Message";
}
console.log(greet());
// ---- function returning something ----

// ---- One Liner Arrow Function ----
/*
One liners do not require braces/return
one line will automatically return 
*/
const greeting = (name) =>  "Good Morning " + name;
greeting();
console.log(greeting('Nitin'));
// ---- One Liner Arrow Function ----

const greetingMessage = () =>  ({name: "nitin"});
greetingMessage();
console.log(greetingMessage());
// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greetMessage = (Name , ending)  =>  "Good Morning " + Name + ending;

console.log(greetMessage('nitin' ,' sokhal'))
