
# Put some descriptions here 
Given an array.
For every element of array, compare it to all lower index element and return the difference
If a number is greater than the current element, return -1
else return the difference =  the current element - that number

Return the max difference

Example: l = [1, 5, 2, 8, 10, 3]
5: distance[1] = [4]
2: distance[1, 5] = [1, -1]
8: distance[1, 5, 2] = [7, 3, 6]
10: distance[1, 5, 2, 8] = [9, 5, 8, 2]
3: distance[1, 5, 2, 8, 10] = [2, -1, 1, -1, -1]

maxDistance = 9
# Put your solutions here
maxDistance = -1
the minimum = the first element
- Visist each element of array
    - Keep the value of the minimum element
    - Keep the maxDistance value
    - Compare the current element and the minimum, if  the current element <=  the minimum
        - Reassign the minimum and continue next iteration
    - If distance(current element, the minimum) >  maxDistance
        - Reassign maxDistance
return maxDistance
