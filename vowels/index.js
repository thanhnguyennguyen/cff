
const vowels = str => {
    // put your code here to address problems
    let noVowelString = str.toLowerCase().replace(/[aeiou]/g, '');
    return str.length - noVowelString.length;
}

const vowels2 = str => {
    // put your code here to address problems
    const vowelCharacterMap = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1};
    let result = 0;
    for (let c of str.toLowerCase()) result += vowelCharacterMap[c] || 0;
    return result;
}

module.exports = {vowels, vowels2};

