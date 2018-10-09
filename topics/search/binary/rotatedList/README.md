
# Put some descriptions here 
Given a ascending sorted list, then we try to rotate this list at a rotated point.
Let search an element in this list , return its index or -1 if it's not in the list
example:
5 6 7 8 9 100 1 2 3 4
find(6) = 1
find(8) = 3
find(11) = -1
# Put your solutions here
## Solution 1
- Find the rotated point: in a sorted list, list[start] < list[mid] < list[end]
    - Split the list into 2 sub lists
    - if any sub list violate this condition:  list[start] < list[mid] < list[end] . That sublist contains rotated point.
- Binary search on those 2 sorted lists
## Solution 2
- Split the list into 2 sublist at midpoint.
- If list is a order list, use binary search to search only one sublist
- If it is unorder list, binary search on both sublist