
# Put some descriptions here 
### Directions
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
### Examples
    - steps(2)
      '# '
      '##'
    - steps(3)
      '#  '
      '## '
      '###'
    - steps(4)
      '#   '
      '##  '
      '### '
      '####'
# Put your solutions here
### Solution 1: steps(num) { return array}
    - if num < 1, return empty array
    - for (i = 0, i < num; i++>)
        - print out each step
            - Initialize a string (contain spaced only) with length = num
            - at step i, we replace first i characters with #
### Solution 2: recursive version
    - Base cases:
        - num < 1, return [] 
        - steps(1) return ['#']
    - Recursive cases:
        - result = step(num - 1)
        - append with string contain n character #
    Now, we miss some spaces at the end, so let's append some spaces

### Solution 3: using a matrix
    Take a glance at a matrix (_ indicate a space)
    <code>
    #   _   _   _
    #   #   _   _
    #   #   #   _
    #   #   #   #
    </code>
    - all elements matrix[row][column] with column <= row are #
    - all elements matrix[row][column] with column > row are spaces (_)
    