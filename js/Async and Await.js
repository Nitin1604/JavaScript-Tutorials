console.log("Async and Await in JS");

// Async Function
async function nitin(){
    console.log('Inside nitin function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "nitin";
}

console.log("Before calling nitin")
let a = nitin();
console.log("After calling nitin")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")