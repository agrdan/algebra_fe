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


// try {
//     if(djelitelj == 0) {
//         const e1 = new Error("Djelitelj ne može biti 0.");
//         e1.name = "Djelitelj 0";
//         throw e1;
//     }
//     if (djelitelj > 10){
//         const e2 = new Error("Djelitelj ne može biti veći od 10.");
//         e2.name = "Djelitelj veći od 10";
//         throw e2;
//     }
//     kolicnik = djeljenik / djelitelj;
//     console.log("Rezultat djeljenja: " + kolicnik);
// }
// catch (error) {
//     console.log("Greška: " + error.name + " - " + error.message);
// }