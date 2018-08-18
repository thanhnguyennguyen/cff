const steps = require('./index.js');
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