function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}

var polaznici = ["Pero", "Ana", "Ivo"];
// var polaznici = new Array("Pero", "Ana", "Ivo");

write(`Duljina niza: ${polaznici.length}`);
write(`Vrijednost prvog elementa: ${polaznici[0]}`);

write(`Svi elementi niza: `, "span");
for (let i = 0; i < polaznici.length; i++) {
    write(`${polaznici[i]} `, "span");
}

// omogucuje iteracije nad iterabilnim objektima: arrays, nodeList, ...
// for (let x of polaznici) {
//     console.log(x);
// }

// iteracija -> vraca index
// for (let x in polaznici) {
//     console.log(x);
// }

function ispisiNiz() {
    write(`<br>Svi elementi niza: `, "span");
    for (let i = 0; i < polaznici.length; i++) {
        write(`${polaznici[i]} `, "span");
    }
}



var izabaceniElement = polaznici.pop();
write(`Izbacen element: ${izabaceniElement}`);
write(`Novi length niza: ${polaznici.length}`);

polaznici.push("Tomo", "Dario");
ispisiNiz();

polaznici.splice(1, 1, "Martina", "Maja");
ispisiNiz();

polaznici = polaznici.filter(function(el) {
    return el !== "Maja";
});
ispisiNiz();

polaznici.sort();
ispisiNiz();

var brojevi = [9, 16, 25, 36];

var korijenBrojeva = brojevi.map(function(el) {
    return Math.sqrt(el);
});

function ispisiCustomNiz(customArray) {
    write(`<br>Svi elementi niza: `, "span");
    customArray.forEach(function(el) {
        write(`${el} `, "span");
    });
}

ispisiCustomNiz(korijenBrojeva);



