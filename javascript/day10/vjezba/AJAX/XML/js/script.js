document.addEventListener("DOMContentLoaded", () => {

    const sviFilmovi = document.getElementById("sviFilmovi");
    document.getElementById("btnDohvati").addEventListener("click", () => {
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var podaci = "", nazivFilma, godinaIzlaska, nazivZanra;
                const xml = this.responseXML;
                console.log(xml);
                const filmKolekcija = xml.getElementsByTagName("film");
                console.log(filmKolekcija);
                for(let i = 0; i < filmKolekcija.length; i++) {
                    nazivFilma = filmKolekcija[i].getElementsByTagName("nazivFilma")[0].innerHTML;
                    godinaIzlaska = filmKolekcija[i].getElementsByTagName("godinaIzlaska")[0].innerHTML;
                    nazivZanra = filmKolekcija[i].getElementsByTagName("nazivZanra")[0].innerHTML;
                    podaci += `<li>${nazivFilma}, ${godinaIzlaska} - ${nazivZanra}</li>`;
                }

                sviFilmovi.innerHTML = podaci;
            }
        }

        xhttp.onerror = function() {
            sviFilmovi.innerHTML = `<li>Greska kod obrade zahtjeva: ${this.status}, ${this.statusText}</li>`;
        }

        xhttp.open("GET", "https://frodo.ess.hr/api/svi-filmovi.php", true);
        xhttp.send();

    });

    document.getElementById("btnBrisi").addEventListener("click", () => {
        sviFilmovi.innerHTML = "";
    });
});