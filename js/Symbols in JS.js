console.log("Symbols in JS")

// Symbols
const sym1 =  Symbol('My identifier');
const sym2 =  Symbol('My identifier');
// console.log('Symbol is ', sym1);
// console.log('Type of Symbol is ', typeof sym1);
console.log(sym1 === sym2);

const a = "this is";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const Key1 = Symbol('identifier for Key1');
const Key2 = Symbol('for Key2');

myObj = {};
myObj[Key1] = "Harry";
myObj[Key2] = "Rohan";
myObj["name"] = "Good boy"
myObj[4] = "Good int"


console.log(myObj);
console.log(myObj[Key1]);
console.log(myObj[Key2]);
console.log(myObj.Key2); // !! ALERT !!: cannot do this to get Rohan because it is same as myObj["Key2"]


// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}

console.log(JSON.stringify(myObj));
