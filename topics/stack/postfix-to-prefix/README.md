
# Put some descriptions here 
Convert postfix to prefix

Example: 
```
# postfix
abc+*

# prefix
*a+bc
```
# Put your solutions here

```
- Read the Postfix expression from left to right
- If the symbol is an operand, then push it onto the Stack
- If the symbol is an operator, then pop two operands from the Stack
  Create a string by concatenating the two operands and the operator between them.
  string = operator + operand1 + operand2
  And push the resultant string back to Stack
- Repeat the above steps until end of Postfix expression.
```


