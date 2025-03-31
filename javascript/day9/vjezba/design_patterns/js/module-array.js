// definicija namespacea
const OP = {};

// definicija modula
OP.moduleArray = (
    function() {
        // private attributes
        const tip = "[object Array]";
        const toString = Object.prototype.toString;

        // private methods
        // ...

        // public interface
        return {
            isArray: function(n) {
                return toString.call(n) === tip;
            },
            elementExists: function(arr, element) {
                for(let i = 0; i < arr.length; i++) {
                    if (arr[i] === element) {
                        return i;
                    }
                }
                return null;
            }
        }
    }
)();

console.log(OP.moduleArray.isArray([1, 2, 3]));
console.log(OP.moduleArray.isArray( {a: 1} ));
console.log(OP.moduleArray.elementExists([1, 2, 3], 3));

