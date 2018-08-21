
# Put some descriptions here 
### Directions
Return the 'middle' node of a linked list.
If the list has an even number of elements, return
the node at the end of the first half of the list.
*Do not* use a counter variable, *do not* retrieve
the size of the list, and only iterate
through the list one time.
### Example
  const l = new LinkedList();
  l.insertAtTail('a')
  l.insertAtTail('b')
  l.insertAtTail('c')
  midpoint(l); // returns { data: 'b' }
# Put your solutions here
Using 2 walkers
- The first one goes one by one
- The second one goes with step two
- When The second walker reaches the tail node, the first one should reach the middle one

