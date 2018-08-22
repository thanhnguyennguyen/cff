
# Put some descriptions here 
### Directions
Given the root node of a tree, return
an array where each element is the width
of the tree at each level.
### Example
Given:
    0
  / |  \
1   2   3
|       |
4       5
Answer: [1, 3, 2]
# Put your solutions here
Using BFS
-   At the beginning, we put 2 elements to initial array: root and null
-   Loop until arr.length > 1
    - Initiate counter = 0
    - Pop out each element from arr then push its childrent into arr, increase counter++
    - if we see null, then push counter to result array, reset counter = 0 and push null to the end of arr
    
