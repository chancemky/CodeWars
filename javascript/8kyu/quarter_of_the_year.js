// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// My Solution

const quarterOf = (m) => {
    return m>=1 && m<=3 ? 1 :
           m>=4 && m<=6 ? 2 :
           m>=7 && m<=9 ? 3 :
           m>=10 && m<=12 ? 4 :
           'Invalid Date'
};