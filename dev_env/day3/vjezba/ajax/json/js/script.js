$(() => {

    const trazilica = $("#trazilica");
    const filmovi = $("#filmovi");

    handleData = (data, textStatus, jqXHR) => {
        console.log(data);
        var ispis = "";
        console.log(data.length)
        if (data.length > 0) {
            var naziv, godina, zanr;
            ispis = "<table border='1'><tr><th>Naziv</th><th>Godina</th><th>Zanr</th></tr>";
            for(let i = 0; i < data.length; i++) {
                naziv = data[i].nazivFilma;
                godina = data[i].godinaIzlaska;
                zanr = data[i].nazivZanra;
                ispis += `<tr><td>${naziv}</td><td>${godina}</td><td>${zanr}</td></tr>`
            }
            ispis += "</table>";
        } else {
            ispis = "<h3>Nije pronaden niti jedan film!</h3>";
        }
        filmovi.html(ispis);
    }

    onError = (jqXHR, textStatus, errorThrown) => {
        const errorMsg = `${jqXHR.status} : ${jqXHR.statusText}`;
        console.log(errorMsg);
    }

    executeAlways = (jqXHR, textStatus) => {
        console.log(textStatus);
    };

    trazilica.on("keyup", () => {

        const vrijednost = trazilica.val().trim();

        console.log(vrijednost);
        if (vrijednost != "") {
            $.ajax({
                type: "get",
                url: `https://frodo.ess.hr/api/filmovi-po-nazivu-json.php?pojam=${vrijednost}`,
                data: "json"
            })
            .done(handleData)
            .fail(onError)
            .always(executeAlways)
        } else {
            filmovi.empty();
        }

    });
});