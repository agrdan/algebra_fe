document.addEventListener("DOMContentLoaded", () => {

    const filmoviPoZanru = document.getElementById("filmovi-po-zanru");
    const zanrovi = document.getElementById("zanrovi");
    
    const rukujPodacima = (podaci) => {
        Array.from(podaci).forEach(element => {
            console.log(element);
            const { nazivFilma, godinaIzlaska, nazivZanra } = element;

            filmoviPoZanru.innerHTML += `Naziv: ${nazivFilma}, Godina: ${godinaIzlaska}, Zanr: ${nazivZanra}`;
        });
        
    }

    const rukujGreskom = (greska) => {
        filmoviPoZanru.innerHTML = "<p></p>"
    }

    zanrovi.addEventListener("change", () => {
        const BASE_URL = "https://frodo.ess.hr/api/filmovi-po-zanru-json.php?zanr=";
        
        fetch(BASE_URL + zanrovi.value)
            .then(r => r.json())
            .then(rukujPodacima)
            .catch(rukujGreskom);
    });
    
});