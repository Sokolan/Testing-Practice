import analyzeArray from "./analyzeArray";

test("test: [1,2,3] -> average: 2, min: 1, max: 8, length: 3", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("test: [] -> average: undefined\nmin: undefined\nmax: undefined\nlength: 0", () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("test: [] -> average: undefined\nmin: undefined\nmax: undefined\nlength: 0", () => {
  expect(analyzeArray([5, -4, 2])).toEqual({
    average: 1,
    min: -4,
    max: 5,
    length: 3,
  });
});