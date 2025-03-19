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

console.log(`Trenutna brzina automobila: ${automobil.brzina}`);
console.log(`Brzina automobila nakon kocenja: ${automobil.zakoci(2)}`);
console.log(`Brzina automobila nakon ubrzanja: ${automobil.ubrzaj(10)}`);

for (let a in automobil) {
    if (automobil.propertyIsEnumerable(a)) {
        console.log(`${a}: ${automobil[a]}`);
    }
}

automobil.promjeniBoju("crna");
console.log(`Boja mog ${automobil.brend?.tip} automobila je ${automobil.boja}`);
console.log(`Automobil: ${JSON.stringify(automobil)}`);