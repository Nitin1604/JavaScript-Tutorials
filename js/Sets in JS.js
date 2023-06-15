console.log('Set in JavaScript');

// Set stores unique values
const decalaredSet = new Set();  // Initialize an empty set
console.log('The set looks like :',decalaredSet);

// Adding values to this set
decalaredSet.add('Set');  // Set will add in an empty set
decalaredSet.add('add in an empty set');
decalaredSet.add('to understand you clearly');
decalaredSet.add('set'); // set will also add in an empty set because Set in JS will treat 'Set' and 'set' two different variables
decalaredSet.add('Set')
decalaredSet.add(34);
decalaredSet.add(true);
decalaredSet.add(false);
decalaredSet.add('that2');
console.log('The set looks like this now:',decalaredSet);

// Use a constructor to initialize the set
let decalaredSet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
console.log('New set:',decalaredSet2);


console.log("The size of the set is :" ,decalaredSet.size); // Get the size of the set

console.log(decalaredSet.has(346)); // Check whether set has 346 or not

console.log('Before removal', decalaredSet.has('that2'));
decalaredSet.delete('that2'); // Remove an element from the set
console.log('After removal', decalaredSet.has('that2'));


// Iterating a set
// for(let item of decalaredSet){
//     console.log('Item is  :', item );
// }

decalaredSet.forEach((item)=>{
    console.log('Item is  :', item );
})

// Quiz: Can you use Array.from(decalaredSet) to convert set into an array?