document.addEventListener("DOMContentLoaded", () => {

    const trazilica = document.getElementById("trazilica");
    const filmoviPoNazivu = document.getElementById("filmovi-po-nazivu");

    trazilica.addEventListener("keyup", () => {
        const vrijednost = trazilica.value;
        if (vrijednost.trim() != "") {
            const baseUrl = "https://frodo.ess.hr/api/filmovi-po-nazivu-json.php?pojam="
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var podaci;

                    const jsonData = JSON.parse(xhttp.responseText);
                    // console.log(jsonData);
                    if (jsonData.length != 0) {
                        podaci = `<table border='1'><tr><th>Naziv filma</th><th>Godina izlaska</th><th>Naziv zanra</th></tr>`;
                        Array.from(jsonData).forEach(element => {
                            const { nazivFilma, godinaIzlaska, nazivZanra } = element;
                            podaci += `<tr><td>${nazivFilma}</td><td>${godinaIzlaska}</td><td>${nazivZanra}</td></tr>`;
                        });
                        podaci += "</table>";
                        
                    } else {
                        podaci = "<h3>Podaci nisu pronadeni!</h3>";
                    }
                    
                    filmoviPoNazivu.innerHTML = podaci;
                }
            };
            xhttp.open("GET", `https://frodo.ess.hr/api/filmovi-po-nazivu-json.php?pojam=${vrijednost}`, true);
            xhttp.send();
        } else {
            filmoviPoNazivu.innerHTML = "";
        }

    });
});