const Stack = require('./index.js');
// put your tests here
test('test stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top()).toEqual(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.top()).toEqual(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
    expect(stack.isEmpty()).toEqual(true);
});
