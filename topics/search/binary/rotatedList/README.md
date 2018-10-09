
# Put some descriptions here 
Given a ascending sorted list, then we try to rotate this list at a rotated point.
Let search an element in this list , return its index or -1 if it's not in the list


      example:
      5 6 7 8 9 100 1 2 3 4
      find(6) = 1
      find(8) = 3
      find(11) = -1


# Put your solutions here
## Solution
- Split the list into 2 sublists at midpoint.
- If list is a order list, use binary search to search only one sublist
- If it is unorder list, binary search on both sublists
