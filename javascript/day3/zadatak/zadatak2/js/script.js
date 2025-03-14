function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}

write("Osnove programiranja", "h2");

firstName = "John";
lastName = "Doe";
fullName = `${firstName} ${lastName}`;

write(`Prvi zadatak: ${fullName}`);

var y = 13;
var z = 22;

var x = null;

if (z === 2) {
    x = y;
} else {
    x = 5;
}


write(`Drugi zadatak: ${x}`);

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Broj ${i} je paran`);
    } else {
        console.log(`Broj ${i} je neparan`);
    }
}