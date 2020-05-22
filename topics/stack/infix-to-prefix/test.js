const InfixToPrefix = require('./index.js');
// put your tests here
test('test InfixToPrefix', () => {
    expect(InfixToPrefix("a*(b+c)+d")).toEqual("+*a+bcd");
    expect(InfixToPrefix("a*(b+c)")).toEqual("*a+bc");
    expect(InfixToPrefix("(a+b)*(c+d)")).toEqual("*+ab+cd");
    expect(InfixToPrefix("a*(b+c)*d")).toEqual("**a+bcd");
    expect(InfixToPrefix("a+b*c")).toEqual("+a*bc");
    expect(InfixToPrefix("a+(b*c)")).toEqual("+a*bc");
    expect(InfixToPrefix("(a*b+c)*d")).toEqual("*+*abcd");
    expect(InfixToPrefix("(a*b+c)+d")).toEqual("++*abcd");
});
