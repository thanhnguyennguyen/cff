
# Put some descriptions here 
Given an expression string exp , write a program to examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.

Example:
```
Input: exp = “[()]{}{[()()]()}”
Output: Balanced



Input: exp = “[(])”
Output: Not Balanced
```
# Put your solutions here
- Scan each character of string from left to right
- If scanned character is an open character '[', '{', '(' push it into stack
- If scanned character is close character ']', '}', ')' . 
	- If the top of stack is the corresponding open character, pop it
	- Else, return "not balanced"
- If all characters are scanned and the stack is empty, return "balanced"

