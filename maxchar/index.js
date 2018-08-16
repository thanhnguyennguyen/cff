
const maxchar = (str) => {
    // put your code here to address problems
    var characterMap = {},
    mostCommonCharacter = '';
    for (character of str) {
        characterMap[character] = characterMap[character] + 1 || 1;

        // if this is first character, assume this is the mostCommonCharacter
        if (!mostCommonCharacter) {
            mostCommonCharacter = character;
            continue;
        }

        // store the mostCommonCharacter
        mostCommonCharacter = (characterMap[character] > characterMap[mostCommonCharacter])
            ? character
            : mostCommonCharacter;
    }
    return mostCommonCharacter;
}

module.exports = maxchar;
