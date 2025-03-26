document.addEventListener("DOMContentLoaded", function() {

    // animacija 1
    var kvadratClick = false;
    const kvadrat1 = document.getElementById("kvadrat1");
    kvadrat1.addEventListener("click", function() {
        var promjena = 0;

        const idIntervala = setInterval(animacija, 10);
        // var idIntervala;
        // if(!kvadratClick) {
        //     kvadratClick = !kvadratClick;
        //     idIntervala = setInterval(animacija, 10);
        // }

        function animacija() {
            if(promjena == 360) {
                clearInterval(idIntervala);
            } else {
                promjena++;
                kvadrat1.style.left = promjena + "px";
                kvadrat1.style.top = promjena + "px";
                kvadrat1.style.backgroundColor = `hsl(${promjena}, 100%, 50%)`;
                kvadrat1.style.transform = `rotate(${promjena}deg)`;
            }
        }
    });

    const kvadrat2 = document.getElementById("kvadrat2");
    
    
    kvadrat2.addEventListener("click", function() {

        setInterval(animacija, 1000);
        
        function animacija() {
            kvadrat2.style.left = `${Math.floor(Math.random() * 360 + 1)}px`;
            kvadrat2.style.top = `${Math.floor(Math.random() * 360 + 1)}px`;
        }

    });

});