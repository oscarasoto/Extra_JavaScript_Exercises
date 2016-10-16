// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters,
// - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    var fullString = s1 + s2;
    var fullArray = fullString.split("").sort();

    var results = [];
    for (var i = 0; i < fullArray.length; i++) {
        if (fullArray[i + 1] != fullArray[i]) {
            results.push(fullArray[i]);
        }
    }
    return results.join("");

    /*  Another Solution using Filter

    fullArray = fullArray.filter(function (element, index, array) {
        return element !== array[index -1];
    });

    return fullArray.join("");

    One line solution

    return (s1+s2).split('').sort().filter((element,index,array)=>element!==array[index-1]).join('');
    */
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

/*
=== Example ===
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
 */
