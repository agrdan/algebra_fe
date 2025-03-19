var automobil = {
    brend: {
        tip: "Hyundai",
        model: "i30"
    },
    boja: "siva",
    brzina: 40,
    maxBrzina: 180,
    godinaProizvodnje: 2014,
    ubrzaj: function(brojSekundi) {
        while (brojSekundi > 0 && this.brzina < this.maxBrzina) {
            this.brzina += 5;
            brojSekundi--;
        }
        return this.brzina;
    },
    zakoci: function(brojSekundi) {
        while (brojSekundi > 0 && this.brzina > 0) {
            this.brzina -= 20;
            brojSekundi--;
        }
        return this.brzina;
    },
    promjeniBoju: function(novaBoja) {
        this.boja = novaBoja;
        return this.boja;
    }
}