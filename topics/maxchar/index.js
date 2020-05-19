const maxchar = (str) => {
    // put your code here to address problems
    var characterMap = {},
        mostCommonCharacter = '';
    for (let character of str) {
        if (characterMap[character]) {
            characterMap[character] += 1;

            // store the mostCommonCharacter
            mostCommonCharacter = (characterMap[character] > characterMap[mostCommonCharacter]) ?
                character :
                mostCommonCharacter;
        } else {
            characterMap[character] = 1;
            // if this is first character, assume this is the mostCommonCharacter
            if (!mostCommonCharacter) {
                mostCommonCharacter = character;
            }
        }
    }
    return mostCommonCharacter;
}

module.exports = maxchar;