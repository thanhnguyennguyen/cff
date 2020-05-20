
# Put some descriptions here 
Convert postfix to infix

Example: 
```
# postfix
abc+*
# infix
a*(b+c)
```
# Put your solutions here

```
- Read the Postfix expression from left to right
- If the symbol is an operand, then push it onto the Stack
- If the symbol is an operator, then pop two operands from the Stack
  Create a string by concatenating the two operands and the operator between them.
  string = (operand1 + operator + operand2)
  And push the resultant string back to Stack
- Repeat the above steps until end of Postfix expression.
```


