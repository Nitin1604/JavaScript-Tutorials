/*
 Promise: Types of Promise
 1) resolve
 2) reject
 3) pending
*/
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved') // if the promise was rejected
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved') // if the promises was resolved.
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}
// if callback get resolved 
func1().then(function(){
    console.log("Nitin: Thanks for resolving")
}).catch(function(error){
    console.log("Nitin: Very bad bro. Reason: " + error)
})
