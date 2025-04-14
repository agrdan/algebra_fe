const mapCustom = require("../script");

const mockCallback = jest.fn(x => x * 100);

const mockArr = [1, 2, 3];
const arr = mapCustom(mockArr, mockCallback);

console.log(arr);

test("arr contains element", () => {
    expect(arr).toContain(100);
});

test("not Nan", () => {
    expect(arr[0]).not.toBeNaN();
});

test("how many times function is called", () => {
    expect(mockCallback.mock.calls.length).toBe(mockArr.length);
});

test("arg value on 2nd function call", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(2);
});

test("return value", () => {
    expect(mockCallback.mock.results[0].value).toBe(100);
});