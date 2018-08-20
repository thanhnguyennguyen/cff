
# Put some descriptions here 
Implementing Queue using 2 stacks
# Put your solutions here
There are 2 solutions: push works on Enqueue or push works on Dequeue
### Solution 1: push works on Enqueue 
    - Enqueue:
        - Pop out all elements from Stack1, push to Stack2
        - Push new record to Stack1
        - Pop out all elements from Stack2, push back to Stack1
    - Dequeue: just call Stack1.pop()

### Solution 2: push works on Dequeue 
    - Enqueue:just call Stack1.push(newRecord)
    - Dequeue:
        - Pop out all elements from Stack1, push to Stack2
        - Pop from Stack2
        - Pop out all remaining elements from Stack2, push back to Stack1
    