
# Put some descriptions here 
    - expect(chunk([1, 2, 3, 4, 5], 0)).toEqual([[1, 2, 3, 4, 5]]);
    - expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4] [5]]);
    - expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    - expect(chunk([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
# Put your solutions here
    - chunk(arr, size)
    - using arr.slice() to split array into 2 parts
        - arr.slice(0, size)
        - loop untile arr is empty
