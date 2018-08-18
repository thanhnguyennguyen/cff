
# Put some descriptions here 

### Directions
Write a function that accepts an integer N
and returns a NxN spiral matrix.
### Examples
  matrix(2)
    [[1, 2],
    [4, 3]]
  matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
 matrix(4)
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]]
# Put your solutions here
Using recursion: spiral(num, val = 1, col = 0, row = 0)
position [col, row]
We start from position [0,0], fill the current position with val, then try to find new position (by increase col and row)
    - Base case: val == square(num)
    - if col >= num or position [col + 1, row] is existed a value, then try to in crease row  
    - if row >= num or position [col, row + 1] is existed a value, then try to in crease col
      