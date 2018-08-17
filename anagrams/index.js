
const buildCharacterMap = (str) => {
    let characterMap = [];
    for (let character of str) {
        characterMap[character] = ++characterMap[character] || 1;
    }
    console.log(characterMap);
    return characterMap;
}

const anagrams = (strA, strB) => {
    // put your code here to address problems

    
    // lowercase and remove special character
    strA = strA.toLowerCase().replace(/[^a-z]/g, "");
    strB = strB.toLowerCase().replace(/[^a-z]/g, "");

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
    let result = true;
    return characterMapA.every(function(value, index, ) {
        return value === characterMapB[index]
    });
}

module.exports = anagrams;
