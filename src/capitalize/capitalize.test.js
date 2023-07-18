import capitalize from "./capitalize";


test('abc equal ABC', () => {
  expect(capitalize('abc')).toBe('ABC');
})

test('ABC equal ABC', () => {
  expect(capitalize('ABC')).toBe('ABC');
})

test('Test empty string', () => {
  expect(capitalize('')).toBe('');
})

test('No input', () => {
  expect(capitalize()).toBe("");
})