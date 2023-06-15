console.log('Set in JavaScript');

// Set stores unique values
const decalaredSet = new Set();  // Initialize an empty set
console.log('The set looks like :',decalaredSet);

// Adding values to this set
decalaredSet.add('Set');  // Set will add in an empty set
decalaredSet.add('add in an empty set');
decalaredSet.add('to understand you clearly');
decalaredSet.add('set'); // set will also add in an empty set because Set in JS will treat 'Set' and 'set' two different variables
decalaredSet.add('Set') // This will not be added in the set as set will accept only unique value and set is decalred twice.
decalaredSet.add(34); // Set can accept interger value also.
decalaredSet.add(true); // Set can accept boolean value also : True and False will be accepted
decalaredSet.add(false); 
decalaredSet.add('Unique set');
console.log('The set looks like this now:',decalaredSet);

// Use a constructor to initialize the set
let decalaredSet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
console.log('New set:',decalaredSet2);


console.log("The size of the set is :" ,decalaredSet.size); // Get the size of the set

console.log(decalaredSet.has(346)); // Check whether set has 346 or not

console.log('Before when set element was not removed: ', decalaredSet.has('Unique set'));
decalaredSet.delete('Unique set'); // Remove an element from the set
console.log('After when set element was removed: ', decalaredSet.has('Unique set'));


// Iterating a set
console.log(" ")
console.log("******Using for of loop******")
for(let item of decalaredSet){
    console.log('Item is  :', item );
}
console.log("******Using for of loop******")
console.log(" ")

console.log("******Using for each loop******")
decalaredSet.forEach((item)=>{
    console.log('Item is  :', item );
})
console.log("******Using for each loop******")

