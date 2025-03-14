function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}
var pozdrav = "";

var sat = new Date().getHours();

if (sat < 10) {
    pozdrav = "Dobro jutro!";
} else if (sat < 18) {
    pozdrav = "Dobar dan!"
} else {
    pozdrav = "Dobra vecer!"
}

write(`${pozdrav}`);