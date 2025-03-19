function write(text, element="p") {
    if (element != null) {
        document.write(`<${element}>${text}</${element}>`);
    } else {
        document.write(`${text}`);
    }
}

var date = new Date();
write(`Trenutni datum i vrijeme: ${date}`);
write(`Trenutni datum: ${date.toLocaleDateString()}`);
write(`Vrijednost godine: ${date.getFullYear()}`);
date.setFullYear(2000);
write(`Datum i vrijeme s novom vrijednoscu godine: ${date}`);

write("Math - matematicke operacije", "h3");
var r = 6;
write(`Povrsina kruga polumjera 6 iznosi: ${(Math.pow(r, 2) * Math.PI).toFixed(2)}`);

write("RegExp - uzorci znakovnih nizova", "h3");
var korisnickoIme = "pero123";
var pattern = /\d/g;

if (korisnickoIme.search(pattern) != -1) {
    write(`Korisnicko ime ${korisnickoIme} sadrzi numericke vrijednosti`);
    korisnickoIme = korisnickoIme.replaceAll(pattern, '%');
    write(`Korisnicko ime bez numerickih vrijednosti: ${korisnickoIme}`);
} else {
    write(`Korisnicko ime ${korisnickoIme} ne sadrzi numericke vrijednosti`);
}


