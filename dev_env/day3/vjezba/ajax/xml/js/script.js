$(() => {
    const filmovi = $("#filmovi");

    handleData = (data, textStatus, jqXHR) => {
        console.log(data);
        var naziv, godina, zanr, ispis = "";
        console.log($(data).find("film"));
        $(data).find("film").each((index, element) => {

            naziv = $(element).find("nazivFilma").text();
            godina = $(element).find("godinaIzlaska").text();
            zanr = $(element).find("nazivZanra").text();

            ispis += `<li>${naziv}, ${godina}, ${zanr}</li>`;
        });

        filmovi.html(ispis);
    }

    onError = (jqXHR, textStatus, errorThrown) => {
        const errorMsg = `${jqXHR.status} : ${jqXHR.statusText}`;
        console.log(errorMsg);
    }

    executeAlways = (jqXHR, textStatus) => {
        console.log(textStatus);
    };

    $("#btn-dohvati").on("click", () => {
        
        $.ajax({
            type: "get",
            url: "https://frodo.ess.hr/api/svi-filmovi.php",
            data: "xml"
        })
        .done(handleData)
        .fail(onError)
        .always(executeAlways);
    });

    $("#btn-brisi").on("click", () => {
        filmovi.empty();
    });

});