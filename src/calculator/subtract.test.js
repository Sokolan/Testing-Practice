import calculator from "./calculator";

test('test subtract: 5 - 10 = -5', () => {
  expect(calculator.subtract(5, 10)).toBe(-5);
});

test('test subtract: 2 - (-1) = 3', () => {
  expect(calculator.subtract(2, -1)).toBe(3);
});

test('test subtract: 0 - 0 = 0', () => {
  expect(calculator.subtract(0,0)).toBe(0);
})

test('test add: 0.1 - 0.2 = -0.1', () => {
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
})
