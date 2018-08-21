
const preProcess = (str) => {
    return str.toLowerCase().replace(/[^\w]/g, "");
}

const buildCharacterMap = (str) => {
    let characterMap = {};
    for (let character of str) {
        characterMap[character] = ++characterMap[character] || 1;
    }
    return characterMap;
}

const anagrams = (strA, strB) => {
    // put your code here to address problems

    
    // lowercase and remove special character
    strA = preProcess(strA)
    strB = preProcess(strB);

    // check length first to avoid wasting time
    if (strA.length !== strB.length) {
        return false;
    }
    let characterMapA = characterMapB = {};
    // init character map for strA
    characterMapA = buildCharacterMap(strA);
    // init character map for strB
    characterMapB = buildCharacterMap(strB);
    
    // compare 2 objects
    for (let char in characterMapA) {
        if (characterMapA[char] !== characterMapB[char]) {
            return false;
        }
    }
    return (characterMapA.length === characterMapB.length);
}

const anagrams2 = (strA, strB) => {
    return (preProcess(strA).split('').sort().join('') === preProcess(strB).split('').sort().join(''))
}

module.exports = {anagrams, anagrams2};
