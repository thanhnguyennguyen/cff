const isBalanced = require('./index.js');
// put your tests here
test('test balanced parentheses', () => {
    expect(isBalanced("[()]{}{[()()]()}")).toEqual(true);
    expect(isBalanced("[(])")).toEqual(false);
    expect(isBalanced("([)]")).toEqual(false);
    expect(isBalanced("(}")).toEqual(false);
    expect(isBalanced("(()")).toEqual(false);
});