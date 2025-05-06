const _ = require('lodash');

const print = (value, textType) => {
    console.log(`Type of ${value} is ${textType}`)
}

const getType = (value) => {
    if (_.isNumber(value)) {
        print(value, "number");
    } else if (_.isBoolean(value)) {
        print(value, "boolean");
    } else if (_.isString(value)) {
        print(JSON.stringify(value), "string");
    } else if (_.isArray(value)) {
        print(JSON.stringify(value), "array");
    } else if (_.isObject(value)) {
        print(JSON.stringify(value), "object");
    } else {
        print(value, "unknown");
    }
}

module.exports = getType;