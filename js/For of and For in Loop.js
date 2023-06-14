console.log("For of and For in Loop in JavaScript")

let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];


// **********For in loop*******
console.log(" ")
console.log("*********For in Loop Begins Here**********")
// Traditional for loop:
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);   
}


// 1. ITERATING AN OBJECT
let obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}
// console.log(obj);
// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);   
// }

// 1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
myString = "JavaScript Code in Visual Studio";
for (let char in myString){
    console.log(myString[char]);
}
console.log("*********For in Loop ends Here**********")
// Quiz: Use traditional for loop to iterate through the same string


// **********For of loop***********
console.log('')
console.log("**********For of loop starts here***********")
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}
console.log("**********For of loop ends here***********")
