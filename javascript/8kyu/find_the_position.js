// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// My Solution

function position(letter) {
    return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`;
}