const {steps, steps2, steps3, steps4} = require('./index.js');
// put your tests here
test('test steps: test some invalid inputs ', () => {
    expect(steps(-1)).toEqual([]);
    expect(steps(0)).toEqual([]);
});

test('test steps: some valid inputs ', () => {
    expect(steps(1)).toEqual(['#']);
    expect(steps(2)).toEqual(['# ', '##']);
    expect(steps(3)).toEqual(['#  ', '## ', '###']);
    expect(steps(4)).toEqual(['#   ', '##  ', '### ', '####']);
});

test('test steps2 (recursion): test some invalid inputs ', () => {
    expect(steps2(-1)).toEqual([]);
    expect(steps2(0)).toEqual([]);
});

test('test steps2 (recursion): some valid inputs ', () => {
    expect(steps2(1)).toEqual(['#']);
    expect(steps2(2)).toEqual(['# ', '##']);
    expect(steps2(3)).toEqual(['#  ', '## ', '###']);
    expect(steps2(4)).toEqual(['#   ', '##  ', '### ', '####']);
});

test('test steps3 (matrix): test some invalid inputs ', () => {
    expect(steps3(-1)).toEqual([]);
    expect(steps3(0)).toEqual([]);
});

test('test steps3 (matrix): some valid inputs ', () => {
    expect(steps3(1)).toEqual(['#']);
    expect(steps3(2)).toEqual(['# ', '##']);
    expect(steps3(3)).toEqual(['#  ', '## ', '###']);
    expect(steps3(4)).toEqual(['#   ', '##  ', '### ', '####']);
});

test('test steps4: test some invalid inputs ', () => {
    expect(steps4(-1)).toEqual([]);
    expect(steps4(0)).toEqual([]);
});

test('test steps4: some valid inputs ', () => {
    expect(steps4(1)).toEqual(['#']);
    expect(steps4(2)).toEqual(['# ', '##']);
    expect(steps4(3)).toEqual(['#  ', '## ', '###']);
    expect(steps4(4)).toEqual(['#   ', '##  ', '### ', '####']);
});

