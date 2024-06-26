// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers.

// My Solution

function multiply(n) {
    return n * (5 ** Math.abs(n).toString().length);
}