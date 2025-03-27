function Osoba(imePrezime, adresa, datumRodenja) {
    this.imePrezime = imePrezime;
    this.adreasa = adresa;
    this.datumRodenja = datumRodenja;

    this.ispis = function() {
        return `${this.imePrezime}, ${this.adreasa}, ${this.datumRodenja}<br>`;
    }
}

Osoba.prototype.uciliste = "Algebra";
Osoba.prototype.pozdrav = function() {
    return `Pozdrav, ja sam ${this.imePrezime} iz ucilista ${this.uciliste}!<br>`;
}

function Ucenik(imePrezime, adresa, datumRodenja, ocjene) {
    Osoba.call(this, imePrezime, adresa, datumRodenja);
    this.ocjene = ocjene;

    this.prosjek = function() {
        total = 0;
        ocjene.forEach(element => {
            total += element;
        });
        return total / ocjene.length;
    }
}

function Nastavnik(imePrezime, adresa, datumRodenja, osnovica, koeficijent) {
    Osoba.call(this, imePrezime, adresa, datumRodenja);
    this.osnovica = osnovica;
    this.koeficijent = koeficijent;

    this.placa = function() {
        return this.osnovica * this.koeficijent;
    }
}

Ucenik.prototype = Object.create(Osoba.prototype);
Nastavnik.prototype = Object.create(Osoba.prototype);

const ucenik = new Ucenik("Pero Peric", "Ilica 17", "01.02.2007", [5, 4, 3]);
const nastavnik = new Nastavnik("Ivo Ivic", "Zagrebacka 72", "17.04.1988", 1700, 1.2);

const ispisUcenik = document.getElementById("ucenik");
const ispisNastavnik = document.getElementById("nastavnik");

ispisUcenik.innerHTML = ucenik.ispis();
ispisUcenik.innerHTML += `Prosjecna ocjena: ${ucenik.prosjek()}<br>`;
ispisUcenik.innerHTML += ucenik.pozdrav();

ispisNastavnik.innerHTML = nastavnik.ispis();
ispisNastavnik.innerHTML += `Placa: ${nastavnik.placa()}<br>`;
ispisNastavnik.innerHTML += nastavnik.pozdrav();
