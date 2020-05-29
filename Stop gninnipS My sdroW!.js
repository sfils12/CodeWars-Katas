//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


//USING MAP & TERNARY OPERATOR 
function spinWords(string){
    return string.split(" ").map(word => )
}



//USING FOR LOOP
function spinWords(string){
  // first split the string into an array of separate substrings using split()
let reverseWords = string.split(" ");

//if the word is more than 5 characters, reverse the word
for (let i = 0; i < reverseWords.length; i++) {
    if (reverseWords[i].length >= 5) {
        reverseWords[i] = reverseWords[i].split("").reverse().join("");
    }
}

let newString = reverseWords.join(" ");

return newString;
}
spinWords("Stanley is the absolute bestest");