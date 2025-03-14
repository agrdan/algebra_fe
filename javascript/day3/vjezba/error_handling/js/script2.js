var djeljenik = 10, djelitelj = 0, kolicnik;

try {
    if (djelitelj == 0) {
        throw new Error("Djelitelj ne moze biti 0");
    }

    if (djelitelj > 10) {
        throw new Error("Djelitelj ne moze biti veci od 10");
    }

    kolicnik = djeljenik / djelitelj;
    console.log(`Rezultat djeljenja ${kolicnik}`);
} catch (error) {
    console.log(`Greska: ${error.message}`);
}
