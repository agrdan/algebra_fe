document.addEventListener("DOMContentLoaded", () => {

    var counter = 0;
    var timerId = null;
    const rightAnswer = 42;
    const test = "";
    
    function setTime(id) {
        counter++;
        document.getElementById(id).innerHTML = `${counter} s`;
    }
    
    function timer() {
        setTime("vrijeme");
    }
    
    function startTimer() {
        if (timerId == null) {
            clearEverything();
            timerId = setInterval(timer, 1000);
        }
    }

    document.getElementById("btn-kreni").addEventListener("click", () => {
        startTimer();
        setQuestion("pitanje", "Znate li koji je odgovor na Veliko Pitanje života i svega ostalog?");
    });

    const setQuestion = (questionId, q) => {
        const question = document.getElementById(questionId);
        question.innerHTML = q;
    }

    const clearEverything = () => {
        resetTimer();
        counter = 0;
        document.getElementById("vrijeme").innerHTML = `0 s`;
        document.getElementById("odgovor").innerHTML = "";
        document.getElementById("unos").value = "";
        setQuestion("pitanje", "");
    }

    const resetTimer = () => {
        clearInterval(timerId);
        timerId = null;
    }

    document.getElementById("btn-odgovori").addEventListener("click", () => {
        const input = document.getElementById("unos");
        if (input.value.trim() == "") {
            alert("Niste unijeli odgovor");
        } else if (timerId == null) {
            alert("Niste pokrenuli pitanje?!");
        } else {
            resetTimer()
            if (input.value == rightAnswer) {
                document.getElementById("odgovor").innerHTML = `Odgovor ${input.value} je točan!<br>Vaše vrijeme: ${counter}s`
            } else {
                document.getElementById("odgovor").innerHTML = `Odgovor ${input.value} je netočan, više sreće drugi put!<br>Vaše vrijeme: ${counter}s`
            }
        }
    })

    document.getElementById("btn-odustani").addEventListener("click", () => {
        if (timerId != null) {
            clearEverything();
        } else {
            alert("Niste pokrenuli pitanje?!");
        }
    })
});
