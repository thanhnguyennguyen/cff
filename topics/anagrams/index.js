
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

    // check length first to avoid wasting time
    if (strA.length !== strB.length) {
        return false;
    }
    let characterMapA = {},
        characterMapB = {};
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
    if (strA.length !== strB.length) {
        return false;
    }
    let appearanceMap = {};
    for (let char of strA) {
        appearanceMap[char] = ++appearanceMap[char] || 1;
    }
    for (let char of strB) {
        if (!appearanceMap[char]) {
            return false;
        }
        appearanceMap[char]--;
        if (appearanceMap[char] === 0) {
            delete appearanceMap[char];
        }
    }
    return true;
}

module.exports = {anagrams, anagrams2};
