// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// My Solution

function doubleChar(str) {
    return str.split('').map(i => i + i).join('');
}