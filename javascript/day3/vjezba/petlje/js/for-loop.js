function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}

write(`Ispis brojcanih vrijednosti putem ptelje s brojacem`, "h3");

for (let x = 100; x >= 0; x-=10) {
    write(`Vrijednost brojaca: ${x}`);
}

var broj = "";
do {
    var broj = prompt("Unesite prirodni broj: ");
    if (broj != null && !isNaN(broj) && broj > 0 && Number.isInteger(broj)) {
        while(broj > 0) {
            write(`${broj} `);
            broj--;
        }
    } else {
        write("Unesite prirodni broj...");
    }
} while (broj = null && !isNaN(broj) && broj > 0 && Number.isInteger(broj))