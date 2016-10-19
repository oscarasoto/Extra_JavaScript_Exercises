/*
You are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out.
Note: The function accepts an integer and returns an integer
*/


function squareDigits(num){
    var digits = num.toString().split("");

    digits = digits.map(function (digit) {
        return digit * digit;
    });

    /*digits.forEach(function (digit, index) {
        digits[index] = digit * digit;
    });*/

    return parseInt(digits.join(""));
}
console.log(squareDigits(9119));


/* One line solution

 return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

 return Number(                                     -- Convert everything back to a number before the return.
    ('' + num)                                      -- Make a string
    .split('')                                       -- Make an array
    .map(function (digit) { return digit * digit;}) -- Square every element on the array
    .join('')                                       -- Change array to string
);

 */

