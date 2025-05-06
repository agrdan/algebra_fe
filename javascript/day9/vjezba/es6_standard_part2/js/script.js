// arrow functions

// const bark = function() {
//     return "Wuf wuf";
// }

// const bark = () => "wuf wuf";

const bark = () => {
    return "Wuf wuf";
};

console.log(bark());

const myArray = [1, 2, 3, 4, 5];

myArray.forEach(it => {
    console.log(it);
});

// Promise
const getX = () => Math.random() >= 0.5;

const wait = new Promise((resolve, reject) => {
    const x = getX();

    if (x) {
        return setTimeout(() => resolve("Yes"), 1000);
    }

    return setTimeout(() => reject("oh no!"), 1000);
});

wait
    .then(data => console.log(data))
    .catch(error => console.log(error));


async function handleResponse() {
    console.log("Fetch")
    
}