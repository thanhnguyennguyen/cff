
const maxchar = (str) => {
    // put your code here to address problems
    var characterMap = {},
    mostCommonCharacter = '';
    for (character of str) {
        if (characterMap[character] === undefined) {
            characterMap[character] = 1;
        } else {
            characterMap[character] += 1;
        }

        // if this is first character, assume this is the mostCommonCharacter
        if (mostCommonCharacter === '' ) {
            mostCommonCharacter = character;
            continue;
        }

        // store the mostCommonCharacter
        if (characterMap[character] > characterMap[mostCommonCharacter]) {
            mostCommonCharacter = character;
        }
    }
    return mostCommonCharacter;
}

module.exports = maxchar;
