/*
Instructions:
    You are going to be given a word. Your job is to return the
    middle character of the word. If the word's length is odd,
    return the middle character. If the word's length is even,
    return the middle 2 characters.
*/

// Best Solution

function getMiddle(s)
{
    // Substrings extract characters in a string between start and end, not including "end" itself.
    return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)

}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));

/* Brute Force

function getMiddle(s) {
    var array = s.split("");
    var center = 0;
    var newArray = [];

    // Even string
    if (array.length % 2 == 0){
        center = array.length / 2;
        newArray.push(array[center-1]);
        newArray.push(array[center]);
    // Odd string
    } else {
        center = Math.floor(array.length / 2);
        newArray.push(array[center]);
    }
    return newArray.join("");
}

Examples:

getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"*/

