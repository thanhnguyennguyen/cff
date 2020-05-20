
# Put some descriptions here 
Convert infix to prefix

Example: 
```
# infix
a *(b+c) + d
# prefix
+*a+bcd
```
# Put your solutions here

```
- Read the Infix expression in reverse order (from right to left)
- If the symbol is an operand, append to result string
- Else
   - If scanned operator is '(', pop from stack , append to result string until seeing ')' 
   - If the precedence of the scanned operator is greater than the precedence of the operator in the stack(or the stack is empty or top of stack is ')'), push it.
   - Else, Pop all the operators from the stack which are greater than or equal to in precedence than that of the scanned operator.  Append the pop item to result string (except '(', ')' )
- Repeat the above steps until end of Infix expression.
- Pop all things from stack, append into result string
- Reverse result string
```


