// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// My Solution

function min(list) {
    return list.sort((a, b) => a - b)[0];
}

function max(list) {
    return list.sort((a, b) => b - a)[0];
}