console.log("Error Handling and Try Catch Statement");

// Pretend this is coming from a server as response
let a = "Nitin";
a = undefined;
if (a !=undefined){
   
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}

// To handle the error use try and catch block : Try will saw the error and error will handle in catch block
try {
    null.console
    console.log("We are inside try block"); // This is not a error , so this will print in the console.
    
    functionNitin(); // Error will generated here because the function name that is functionNitin() is called but it's not declared...
    
} catch(error) {
    console.log(error) // Whetever the error generated print that error in the console output
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);
    
    // Finally block will run in every case whetever the error will generated or not 
} finally {
    console.log("Finally we will run this")
}