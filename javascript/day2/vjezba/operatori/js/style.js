function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}

// deklaracija i inicijalizacija varijabla i konstanta
var a = 10, b = 7, c = 3, d = 5, e = 2, z;
var ime = "Pero", prezime = "Peric";
const pi = 3.14;

// ne mozemo mjenjati konstante
// pi = 12.4;

// operacija nad vrijednostima varijabli
var rezultat = 6 / e++ * (6 + 6);
write(`Rezultat aritmeticke operacije ${rezultat}`)

var imePrezime = ime.concat(" ").concat(prezime);
write(`Ime prezime: ${imePrezime}`);

var sud = !(a > b && c == d);
write(`Istinitost suda: ${sud}`);

var uvjetnaVrijednost = a > b ? "Vece": a < b ? "Manje" : "Jednako";
write(`Uvjetna vrijednost ${uvjetnaVrijednost}`);

write(`Undefined: ${z}`);

// dodatni primjeri
var automobil = {
    boja: "crvena",
    brend: {
        tip: "Volvo",
        model: "V40"
    }
};

write(`Opcionalno ulancavanje: ${automobil.brend?.tip}`);

var x = null ?? "default";
write(`Nullish spajanje ${x}`);

var y;
y ??= "default";
write(`Nullish dodjeljivanje vrijednosti ${y}`);
