// deklaracija i poziv funkcije te povratna vrijednost
function nazivFunkcije1() {
    var value = 1;
    return value;
}

var povratnaVrijednost = nazivFunkcije1();
console.log(povratnaVrijednost);
console.log(nazivFunkcije1());

// parametri i argumenti
function zbroj(a, b) {
    return a + b;
}

console.log(zbroj(10, 5));
console.log(zbroj(10, 11));

function myFunc1(a, b) {
    if (b == undefined) {
        b = 1;
    }
    return a + b;
}

console.log(myFunc1(10, 5));
console.log(myFunc1(10));

function myFunc2(a, b = 1) {
    return a + b;
}
console.log(myFunc2(7));

// funkcija kao vrijednost
var addOne = function(value) {
    return ++value;
}

var myVar = addOne(3);
console.log(myVar);