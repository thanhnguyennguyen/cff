// a string can be called palindrome if reversal of that string is equal to the original one
// example: palindrome("abba") = true
// palindromme("abc") = false

const palindrome = (str) => {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }  
    return (reversed === str);
}

// solution2 
const palindrome2 = (str) => {
    return str.split('').every((char, index) => {
        return char === str[str.length - 1 -index];
    });
}


module.exports = {palindrome, palindrome2};