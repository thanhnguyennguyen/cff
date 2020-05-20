
# Put some descriptions here 
Convert prefix to infix

Example: 
```
# prefix
*a+bc
# infix
a*(b+c)
```
# Put your solutions here

``
Read the Prefix expression in reverse order (from right to left)
If the symbol is an operand, then push it onto the Stack
If the symbol is an operator, then pop two operands from the Stack
Create a string by concatenating the two operands and the operator between them.
string = (operand1 + operator + operand2)
And push the resultant string back to Stack
Repeat the above steps until end of Prefix expression.
```


