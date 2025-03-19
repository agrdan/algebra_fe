function write(text, element="p") {
    if (element != null) {
        document.write(`<${element}>${text}</${element}>`);
    } else {
        document.write(`${text}`);
    }
}

write("Objekt tipa Date: rad s datumom i vremenom", "h3");
var vrijeme = new Date();
write(`Trenutno vrijeme: ${vrijeme}`);
// document.write("<br />Trenutno vrijeme: " + vrijeme.valueOf());
// document.write("<br />Trenutno vrijeme: " + Date.now());

var prosloVrijeme = new Date(2025, 2, 18, 20, 33, 17);
write(`Vrijeme koje je proslo: ${prosloVrijeme}`);
write(`Trenutni datum i vrijeme u lokaliziranom formatu: ${vrijeme.toLocaleString()}`);

var dan = vrijeme.getDate();
var mjesec = vrijeme.getMonth() + 1;
var godina = vrijeme.getFullYear();

if (dan <= 9) {
    dan = `0${dan}`;
}

mjesec = mjesec <= 9 ? `0${mjesec}` : mjesec;
var noviFormat = `${godina}-${mjesec}-${dan}`;
write(`Danasnji datum u drugacijem formatu: ${noviFormat}`);

// Math
write("Objekt Math: matematicke operacije", "h3");
var nekiBroj = 16.44;
write(`Drugi korijen broja ${nekiBroj} prethodno zaokruzenog na cijeli: ${Math.sqrt(Math.round(nekiBroj))}`);

var slucajniBroj = Math.floor(Math.random() * 10 + 1);
write(`Ispis slucajno generiranog broja od 1 do 10: ${slucajniBroj}`);

// Number
write(`Number: rad s numerickim vrijednostima`, "h3");
var nekiNoviBroj = 18.838;
write(`Broj${nekiNoviBroj} zaokruzen na jednu decimalu ${nekiNoviBroj.toFixed(1)}`);

// RegExp
write("Objekt tipa RegExp: uzorci znakovnih nizova", "h3");
var imePrezime = "Andreas Grđan";
var posebniZnakovi = /[đšžćč]/ig;

if (imePrezime.search(posebniZnakovi) != -1) {
    write(`Ime i prezime \"${imePrezime}\" sadrzi posebne znakove`);
} else {
    write(`Ime i prezime \"${imePrezime}\" ne sadrzi posebne znakove`);
}

write(`Posebni znakovi u imenu i prezimenu: ${imePrezime.match(posebniZnakovi)}`);

