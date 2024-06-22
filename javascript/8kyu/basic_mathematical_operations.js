// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// My Solution

function basicOp(o, n1, n2) {
    return o=='+' ? n1+n2 : 
           o=='-' ? n1-n2 : 
           o=='*' ? n1*n2 : n1/n2;
}