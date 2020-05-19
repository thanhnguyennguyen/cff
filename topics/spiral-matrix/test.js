const {
    spiral,
    spiral2
} = require('./index.js');
// put your tests here

test('spiral -1', () => {
    expect(spiral(-1)).toEqual([
        []
    ]);
});

test('spiral 1', () => {
    expect(spiral(1)).toEqual([
        [1]
    ]);
});

test('spiral 2', () => {
    expect(spiral(2)).toEqual(
        [
            [1, 2],
            [4, 3]
        ]
    );
});

test('spiral 3', () => {
    expect(spiral(3)).toEqual(
        [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]
        ]
    );
});

test('spiral 4', () => {
    expect(spiral(4)).toEqual(
        [
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7]
        ]
    );
});


// iteration solution

test('spiral2 -1', () => {
    expect(spiral2(-1)).toEqual([
        []
    ]);
});

test('spiral2 1', () => {
    expect(spiral2(1)).toEqual([
        [1]
    ]);
});

test('spiral2 2', () => {
    expect(spiral2(2)).toEqual(
        [
            [1, 2],
            [4, 3]
        ]
    );
});

test('spiral2 3', () => {
    expect(spiral2(3)).toEqual(
        [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]
        ]
    );
});

test('spiral2 4', () => {
    expect(spiral2(4)).toEqual(
        [
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7]
        ]
    );
});