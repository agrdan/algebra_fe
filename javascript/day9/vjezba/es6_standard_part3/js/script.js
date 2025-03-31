class Osoba {
    constructor(imePrezime, adresa, datumRodenja) {
        this.imePrezime = imePrezime;
        this.adresa = adresa;
        this.datumRodenja = datumRodenja;
    }

    ispisOpcihPodataka() {
        return `Opci podaci: ${this.imePrezime}, ${this.adresa}, ${this.datumRodenja}.<br>`;
    }
}


class Ucenik extends Osoba {
    constructor(imePrezime, adresa, datumRodenja, ...ocjene) {
        super(imePrezime, adresa, datumRodenja);
        this.ocjene = Array.from(ocjene);
    }

    izracunProsjeka() {
        var sum = 0;
        this.ocjene.forEach(it => {
            sum += it;
        });
        return (sum / this.ocjene.length).toFixed(2);
    }
}

class Nastavnik extends Osoba {
    constructor(imePrezime, adresa, datumRodenja, koeficijent, osnovica) {
        super(imePrezime, adresa, datumRodenja);
        this.koeficijent = koeficijent;
        this.osnovica = osnovica;
    }

    izracunPlace() {
        return this.osnovica * this.koeficijent;
    }
}

const ucenik = new Ucenik("pero peric", "ilica 111", "12.02.1996", 1, 2, 3, 4, 5);
console.log(ucenik.ispisOpcihPodataka());
console.log(ucenik.izracunProsjeka());