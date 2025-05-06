const add = (a, b) => {
    return a + b;
}

const sameObject = (a, b) => {
    return Object.is(a, b);
}

const isNull = (a) => {
    return a;
}

const isUndefined = (a) => {
    return a;
}

module.exports = {
    add,
    sameObject,
    isNull,
    isUndefined
};

