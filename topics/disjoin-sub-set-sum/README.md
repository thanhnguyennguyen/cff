# Problem
![https://i.imgur.com/OdSnUA0.png](https://i.imgur.com/OdSnUA0.png)

# Idea
helper function: getSumK (startPosition, K, array)
            if (startPosition + K) > array.length 
                return -1;
            loop to get sum and return 

if K + L > A.length
    return -1;
if K + L = A.length
    return sum of A 

// find maxSumK first, then find maxSumL: SUM1
(*) loop from 0 to A.length - K
    call getSumK() , save the max value maxSumK and startPosition
    loop from 0 to startPosition and startPosition + K to to end of array
        call getSumL() , save the max value maxSumL and startPosition
 
 // find maxSumK first, then find maxSumL: SUM2
    // do the same (*) 

compare and return max(SUM1, SUM2)

![https://i.imgur.com/taIcjhk.jpg](https://i.imgur.com/taIcjhk.jpg)