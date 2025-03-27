// deklaracija konstruktora
function Ucenik(imePrezime, adresa, datumRodenja, ocjena1, ocjena2, ocjena3) {
    // deklaracija i inicijalizacija svojstva
    this.imePrezime = imePrezime;
    this.adresa = adresa;
    this.datumRodenja = datumRodenja;
    this.ocjena1 = ocjena1;
    this.ocjena2 = ocjena2;
    this.ocjena3 = ocjena3;

    // deklaracija metoda
    this.ispisPodataka = function() {
        return `Opci podaci: ${this.imePrezime}, ${this.adresa}, ${this.datumRodenja}.<br>`;
    }

    this.prosjecnaOcjena = function() {
        return `Prosjecna ocjena: ${(this.ocjena1 + this.ocjena2 + this.ocjena3) / 3}.<br>`;
    }
}

function ispisUcenika(rbText, ucenik) {
    const ispis = document.getElementById("ispis");
    ispis.innerHTML += `<h3>Podaci ${rbText} ucenika:</h3>`;
    ispis.innerHTML += ucenik.ispisPodataka();
    ispis.innerHTML += ucenik.prosjecnaOcjena();
}

// kreiranje objecta
const pero = new Ucenik("Pero Peric", "Adresa 1", "01.02.1993", 5, 5, 1);
const ivo = new Ucenik("Ivo Ivic", "Adresa 2", "02.03.1994", 1, 1, 5);

// dohvacanje vrijednosti i ispis u HTMLu
ispisUcenika("prvog", pero);
ispisUcenika("drugog", ivo);