const sum = require("./calc.js");

test('adds 1 + 1 equals 2', () => {
    expect(sum.add(1, 1)).toBe(2);
});

test('subtract 1 - 1 equals 0', () => {
    expect(sum.minus(1, 1)).toBe(0);
});

test('divide 20 / 4 equals 5', () => {
    expect(sum.divide(20, 4)).toBe(5);
});

test('multiply 3 x 4 equals 12', () => {
    expect(sum.times(3, 4)).toBe(12);
});
