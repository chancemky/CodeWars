// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// My Solution

function uniTotal(string) {
    return [...string].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}