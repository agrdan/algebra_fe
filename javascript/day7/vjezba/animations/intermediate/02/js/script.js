document.addEventListener("DOMContentLoaded", function() {
    var brojac = 0;

    // dohvati sekciju sa slikama
    const slike = document.querySelectorAll(".slike");
    // dohvati gumbice ispod slidera
    const gumbici = document.querySelectorAll(".gumbici");

    // definicija funkcije koja na sucelje postavlja trazenu sliku te oznaci aktivni gumbic
    function changePicture() {
        brojac++;

        // nakon 3. postavi prvu
        if (brojac > slike.length) {
            brojac = 1;
        }

        // prije 1. postavi 3.
        if (brojac < 1) {
            brojac = slike.length;
        }

        // sakrij sve slike prije nego sto prikazes sljedecu
        for (let i = 0; i < slike.length; i++) {
            slike[i].style.display = "none";
        }

        // svim gumbicima navigacije ukloni klasu aktivni
        for (let i = 0; i < gumbici.length; i++) {
            gumbici[i].classList.remove("aktivni");
        }

        // postavi sliku i pripadajuci gumbic kao aktivni
        slike[brojac - 1].style.display = "block";
        gumbici[brojac - 1].classList.add("aktivni");

        setTimeout(changePicture, 3000);
    }


    changePicture();
});