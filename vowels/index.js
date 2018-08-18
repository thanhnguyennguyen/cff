
const vowels = str => {
    // put your code here to address problems
    let noVowelString = str.toLowerCase().replace(/[aeiou]/g, '');
    return str.length - noVowelString.length;
}

module.exports = vowels;

