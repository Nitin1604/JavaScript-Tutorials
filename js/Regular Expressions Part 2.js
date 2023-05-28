console.log('This is tutorial 47');

let regex = /nitisdfgn/;
// Lets look into some metacharacter symbols
regex = /^nitidcn/; // ^ means expression will match if string starts with
regex = /nitin$/; // $ at the end of the string means "string ends with"
regex = /n.tin/; //matches any one character
regex = /n*tin/; //matches any 0 or more characters
regex = /ni?tini?t/; //? after character means that character is optional
regex = /n\*tin/

let str = "n*tin means codewith"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
