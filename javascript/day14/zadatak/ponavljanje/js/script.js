document.addEventListener("DOMContentLoaded", () => {

    const yearFromInput = document.getElementById("start-year");
    const yearToInput = document.getElementById("end-year");
    const moviesContainer = document.getElementById("movies");
    document.getElementById("btn-search").addEventListener("click", () => {
        getData();
    });

    const createItem = (movie) => {
        return `
        <div class="item">
            <h3 class="align">${movie.nazivFilma}</h3>
            <hr>
            <p>Movie year: ${movie.godinaIzlaska}</p>
            <p>Movie genre: ${movie.nazivZanra}</p>
        </div>
        `
    }

    const getData = () => {
        
        const yearFrom = yearFromInput.value;
        const yearTo = yearToInput.value;

        console.log(`from: ${yearFrom}`);
        console.log(`to: ${yearTo}`);

        if (yearFrom.trim().length > 0 && yearTo.trim().length > 0) {
            fetch(`https://frodo.ess.hr/api/ponavljanje/filmovi-json.php?godinamin=${yearFrom}&godinamax=${yearTo}`)
            .then(r => r.json())
            .then(handleResponse)
            .catch(handleError);
        } else {
            alert("From and To should be filled!");
        }
    }

    const handleResponse = (data) => {
        console.log(data);
        if (data.length == 0) {
            moviesContainer.innerHTML = "There is no movies between specified years!";
        } else {
            Array.from(data).forEach(user => {
                moviesContainer.innerHTML += createItem(user);
            })
        }
        yearFromInput.value = "";
        yearToInput.value = "";
    }

    const handleError = (error) => {
        alert(error.toString());
    }


})