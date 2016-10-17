
/*
In this exercise you are required to, given a string,
replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
a being 1, b being 2, etc. As an example:

 alphabet_position("The sunset sets at twelve o' clock.")
 "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

 */

function alphabet_position(string) {

    var arrayString = string.trim().toLowerCase().split("");
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabetArray = alphabet.split("");
    var resultArray = [];
    // console.log(arrayString);
    // console.log(alphabetArray);


    arrayString.forEach(function (stringElement, stringIndex) {
        alphabetArray.forEach(function (alphabetElement, alphabetIndex) {
            if (stringElement == alphabetElement) {
                // console.log(stringElement + " " + alphabetElement);
                resultArray.push(alphabetIndex + 1);
            }
        });
    });

    return resultArray.join(" ");

}

var string = "The sunset sets at twelve o' clock.";
console.log(alphabet_position(string));

