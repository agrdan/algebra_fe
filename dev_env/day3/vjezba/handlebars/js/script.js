document.addEventListener("DOMContentLoaded", () => {

    const xhttp = new XMLHttpRequest();
    
    handleData = () => {
        const data = JSON.parse(xhttp.responseText);
        const template = document.getElementById("pokemon-lista").innerHTML;
        const output = Handlebars.compile(template);
        console.log(data.pokemon_species);
        const entryData = {
            "pokemon": data.pokemon_species.slice(0, 20)
        };
        const html = output(entryData);
        document.getElementById("rezultat").innerHTML = html;
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleData();
        } else {
            console.log("error");
        }
    }

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);
    xhttp.send();
    alert("Test");
});