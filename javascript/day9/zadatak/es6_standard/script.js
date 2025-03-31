"use strict";

// 1.
const a = { test: 78 };
var b = 0o34;
delete a.test;
// Reflect.deleteProperty(window, 'b');
// console.log(window.b);
const myObject = {property1:1, property2:2, property3:1};

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

var newUsers = [...users, user];
console.log(newUsers);


// 3.
for (var i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

console.log(i);


