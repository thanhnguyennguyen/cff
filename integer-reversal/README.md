
# Put some descriptions here 
Given an integer, return an integer that is the reverse order of numbers
- reverseInt(0) = 0
- reverseInt(6) = 6
- reverseInt(-6) = -6
- reverseInt(123) = 321
- reverseInt(-912) = -219
- reverseInt(100) = 1
- reverseInt(-800) = -8
# Put your solutions here
- Converting number to string 
- Check first character to see if it a sign character
    - Yes: Sign = -1 and remove this character 
    - No: Sign = 1
- Reverse string
- Parse to integer again
- Multiple with Sign
