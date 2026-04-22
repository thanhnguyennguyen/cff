
const longest_substring_without_repeating_char = (str) => {
    // put your code here to address problems
    let left = 0, right = 0, maxLength = 0;
    let charSet = new Set();
    while (right < str.length) {
        while (charSet.has(str[right])) {
            charSet.delete(str[left]);
            left++;
        }
        charSet.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
    return maxLength;
}

module.exports = longest_substring_without_repeating_char;
