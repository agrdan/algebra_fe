document.addEventListener("DOMContentLoaded", function(){

    const naslov = document.getElementById("naslov");
    // console.log(naslov);
    console.log("Naslov stranice: " + naslov.innerHTML);
    console.log("Naslov stranice: " + naslov.textContent);
    console.log("Dio naslova stranice: " + naslov.children[0].textContent);

    const obrazac = document.querySelectorAll("section form")[0];
    // console.log(obrazac);
    const gumbici = document.getElementsByTagName("button");

    gumbici[0].addEventListener("click", function(){
        const noviElement = document.createElement("input");
        noviElement.setAttribute("type", "submit");
        noviElement.setAttribute("value", "U redu");
        obrazac.appendChild(noviElement);
        // obrazac.innerHTML += "<input type='submit' value='U redu' />";
    });

    gumbici[1].addEventListener("click", function(){
        obrazac.removeChild(obrazac.lastElementChild);
    });

    gumbici[2].addEventListener("click", function(){
        const tekstPolje = document.getElementsByName("vase-misljenje")[0];
        tekstPolje.rows = 10;
        tekstPolje.cols = 30;
    });

    gumbici[3].addEventListener("click", function(){
        obrazac.firstElementChild.innerHTML += "<i> najbolji jezik ikad!</i>";
    });

    gumbici[4].addEventListener("click", function(){
        obrazac.style.backgroundColor = "red";
        // obrazac.style.cssText = "color: lightcoral; font-size: 48px; text-shadow: 1px 1px 2px gray;";
    });

    gumbici[5].addEventListener("click", function(){
        obrazac.classList.add("novi-stil");
    });

});
