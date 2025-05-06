const ime = "Ivan";
const pozdrav = `Moje ime je ${ime}!`;

console.log(pozdrav);

// Spread operator
function ispisImena(prvo, drugo, trece) {
    console.log(drugo);
}

const imena = ["Ivan", "Marija", "David"];
ispisImena(...imena);

var korisnik = {
    imePrezime: "Pero Peric",
    adresa: "Ilica 11",
    godinaRodenja: 1989
};

const { imePrezime, adresa, godinaRodenja } = korisnik
console.log(imePrezime);

korisnik = {...korisnik, grad: "Zagreb"};
console.log(korisnik);
korisnik = {...korisnik, adresa: "Nova adresa"};
console.log(korisnik);

const brojevi = [10, 20, 30, 40, 50];
const [a, b, ...rest] = brojevi;
console.log(a);
console.log(rest);

// Rest operator
function vratiZbroj(...args) {
    let suma = 0;
    /*
        for(let arg of args) {
            ...
        }
    */
    args.forEach(it => {
        suma += it;
    })
    return suma;
}

console.log(vratiZbroj(1, 2, 3, 4, 5));
console.log(vratiZbroj(1, 2, 3));