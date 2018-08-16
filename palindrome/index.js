// a string can be called palindrome if reversal of that string is equal to the original one
// example: palindrome("abba") = true
// palindromme("abc") = false

const palindrome = (str) => {
    let reversed = '';
    for (let character of str) reversed = character + reversed; 
    return (reversed === str);
}

module.exports = palindrome;