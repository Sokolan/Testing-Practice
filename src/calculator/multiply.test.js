import calculator from "./calculator";

test('test: 3 * 5 = 15', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test('test: 0.1 * 3 = 0.3', () => {
  expect(calculator.multiply(0.1, 3)).toBeCloseTo(0.3);
})

test('test: 4 * (-1) = -4', () => {
  expect(calculator.multiply(4, -1)).toBe(-4);
})