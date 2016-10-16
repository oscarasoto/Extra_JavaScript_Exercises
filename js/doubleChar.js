/*Given a string, you have to return a string in which each character
(case-sensitive) is repeated once.*/

function doubleChar(str) {
    var array = str.split("");
    var results = [];

    for (var i = 0; i < array.length; i++) {
            results.push(array[i] + array[i]);
        }

    return results.join("");

    /* Other Solution Using map() Method

    return str.split("").map(function (character) {
        return character + character;
    }).join("");

    One Line Solution
     return str.split("").map(character=>character+character).join("");

    */

}

console.log(doubleChar("String"));