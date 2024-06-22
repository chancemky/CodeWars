// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// My Solution

function abbrevName(name) {
    return name.split(' ').map(word => word.charAt(0).toUpperCase()).join('.');
}