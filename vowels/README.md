
# Put some descriptions here 
### Directions
Write a function that returns the number of vowels
used in a string.  Vowels are the characters 'a', 'e'
'i', 'o', and 'u'.
### Examples
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0
# Put your solutions here
### Solution 1: using regular expression
    - Check original length of string
    - Replace all vowels by empty string, check new length
    - result = original length - new length
### Solution 2: iteration, just loop and count
