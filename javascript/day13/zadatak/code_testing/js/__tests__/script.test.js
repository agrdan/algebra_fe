const findMax = require("../script")

const arr = [1, -2, 14, 123, -432, 17];
test("find max value", () => {
    expect(findMax(arr)).toBe(123);
});

test("empty array", () => {
    expect(findMax([])).toBe(-Infinity);
});

const arrWithOnlyNegativeNumbers = [-234, -183, -108, -74];
test("all negative numbers", () => {
    expect(findMax(arrWithOnlyNegativeNumbers)).toBe(-74);
});

const arrWithTwoSameMaxValues = [1, 10, 100, 100]
test("double max value in array", () => {
    expect(findMax(arrWithTwoSameMaxValues)).toBe(100);
});

test("arr is null", () => {
    expect(() => findMax(null)).toThrow("Array cannot be null or undefined");
});

test("arr is undefined", () => {
    expect(() => findMax(undefined)).toThrow("Array cannot be null or undefined");
});

