
# Put some descriptions here 
### Directions
Write a function that accepts a string.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.
### Examples
    - capitalize('a short sentence') --> 'A Short Sentence'
    - capitalize('a lazy fox') --> 'A Lazy Fox'
    - capitalize('look, it is working!') --> 'Look, It Is Working!'
# Put your solutions here
### Solution 1
    - Split into multiple words
    - Uppercase the first character of each words
    - Join them into one string again

### Solution 2: foreach character and try to capitalize the character after a space
    - Initialize capitalization flag = true
    - Foreach character of string
        - if capitalizarion = true, then capitalize that character and append to result string
        - if current character is a space, assign capitalization = true, else capitalization = false