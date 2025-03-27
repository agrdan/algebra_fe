function Zaposlenik(ime, prezime, jmbg, brojBodova, vrijednostBoda) {
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.brojBodova = brojBodova;
    this.vrijednostBoda = vrijednostBoda;

    this.neto = function() {
        return this.brojBodova * this.vrijednostBoda;
    }

    this.porez = function() {
        const placa = this.neto();
        if (placa < 1000) {
            return placa * 0.06; 
        } else if (placa >= 1000 && placa < 2500) {
            return placa * 0.12;
        } else {
            return placa * 0.2;
        }
    }

    this.bruto = function() {
        return this.neto() + this.porez();
    }
}

function ispis(zaposlenik) {
    const ispis = document.getElementById("zaposlenici");
    ispis.innerHTML += `<p>Ispis neto place zaposlenika ${zaposlenik.ime} ${zaposlenik.prezime} iznosi ${zaposlenik.neto()} eur, dok bruta placa iznosi ${zaposlenik.bruto()} eur</p>`;
}

ispis(new Zaposlenik("Pero", "Peric", 123456, 100, 8));
ispis(new Zaposlenik("Ana", "Anic", 654321, 180, 12));
ispis(new Zaposlenik("Ivo", "Ivic", 321543, 160, 18));