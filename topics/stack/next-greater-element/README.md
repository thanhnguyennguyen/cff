#
Put some descriptions here
Given an array, print the Next Greater Element(NGE) for every element.The Next greater Element
for an element x is the first greater element on the right side of x in array.Elements
for which no greater element exist, consider next greater element as - 1.

Examples:

    For any array, rightmost element always has next greater element as - 1.

For an array which is sorted in decreasing order, all elements have next greater element as - 1.

For the input array[4, 5, 2, 25
}, the next greater elements
for each element are as follows.
``
`
Element       NGE
   4      -->   5
   5      -->   25
   2      -->   25
   25     -->   -1
`
``

For the input array[13, 7, 6, 12
}, the next greater elements
for each element are as follows.

``
`

  Element        NGE
   13      -->    -1
   7       -->     12
   6       -->     12
   12      -->     -1
`
``#
Put your solutions here
    - Scan each number from left to right
    - If the stack is empty or the scanned number is less than the top, push it to stack
    - while the scanned number is greater than top of stack
	- Pop from stack, assign the scanned number is NGE of the number which has just popped from the stack,
    - If the stack is empty or the scanned number is less than the top, push it to stack
    - Pop all remaining numbers from the stack, assign its NGE - 1
