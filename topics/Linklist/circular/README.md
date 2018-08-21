
# Put some descriptions here 
### Directions
Given a linked list, return true if the list
is circular, false if it is not.
### Examples
  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  circular(l) // true
# Put your solutions here
### Solution 1
  - tail = GetElementAt(this.getSize() - 1)
  - Then checking tail.next
    - If tail.next is NULL: not circular
    - Else: circular
    

