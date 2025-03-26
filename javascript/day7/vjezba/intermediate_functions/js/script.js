function print(text) {
    console.log(text);
}

// function dodaj() {
//     var brojac = 0;
//     brojac += 1;
//     return brojac;
// }

// closure: omogucuje funkciji da ima privatne varijable koje postoje i nakon sto ona zavrsi s radom
const dodaj = (function() {
    var brojac = 0;
    return function() {
        brojac++;
        return brojac;
    }
})()

print(`Vrijednost brojaca ${dodaj()}`);
print(`Vrijednost brojaca ${dodaj()}`);
print(`Vrijednost brojaca ${dodaj()}`);

