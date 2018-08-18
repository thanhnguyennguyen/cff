
# Put some descriptions here 

### Directions
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides
### Examples
    - pyramid(1)
        '#'
    - pyramid(2)
        ' # '
        '###'
    - pyramid(3)
        '  #  '
        ' ### '
        '#####'
    - pyramid(4)
        '   #   '
        '  ###  '
        ' ##### '
        '#######'
# Put your solutions here
### Solution
Each string should have length = 2n -1 and including 3 parts
Loop all rows
    - firstPart: (n  - row) spaces
    - secondPart: (2row - 1) #
    - thirdPart = firstPart
Total length = 2n - 2row + 2row - 1 = 2n -1
 
