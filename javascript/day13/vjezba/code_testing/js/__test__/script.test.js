const _functions = require("../script");

test("1 + 2 = 3", () => {
    expect(_functions.add(1, 2)).toEqual(3);
});

var a = {};
var b = {};

test("are a and b same reference", () => {
    expect(_functions.sameObject(a, b)).toBe(false);
});

test("are a and b same reference - negative", () => {
    expect(_functions.sameObject(a, b)).not.toBe(true);
});


test("is null", () => {
    expect(_functions.isNull(null)).toBeNull();
});

var c;

test("is null", () => {
    expect(_functions.isUndefined(c)).toBeUndefined();
});

const strArr = "Pero Perić";
const pattern = /[đšćžč]/ig;

test("regex pattern - croatian language special characters", () => {
    expect(strArr).toMatch(pattern);
});

// drugi argument - preciznost (broj decimala koje će se provjeriti) - default value 2: Math.abs(expected - received) < 0.005 (that is, 10 ** -2 / 2) 
test("compare number on similar equality", () => {
    expect(_functions.add(0.2, 0.1)).toBeCloseTo(0.3);
});


const arr = [1, 2, 3, 4, 5];
test("does arr contains element", () => {
    expect(arr).toContain(1);
});