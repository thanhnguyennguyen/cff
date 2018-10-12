
# Put some descriptions here 
Median of two sorted arrays of same size
There are 2 sorted arrays A and B of size n each. Write an algorithm to find the median of the array obtained after merging the above 2 arrays(i.e. array of length 2n). The complexity should be O(log(n)).
https://www.geeksforgeeks.org/median-of-two-sorted-arrays/
# Put your solutions here

- m1: median of sub array1
- m2: median of sub array2
- if n === 1, return (arr1[0] + arr2[0])/2
- if m1 === m2: return m1
- else if m1 > m2:
    - median is in 2 ranges:
        - first half of sub array 1 (from index 0 to m1)
        - second halft of sub array2 (from m2 to the end of array2)
- else:
    - median is in 2 ranges:
        - first half of sub array 2 (from index 0 to m2)
        - second halft of sub array1 (from m1 to the end of array1)
- Continue find median on 2 smaller arrays