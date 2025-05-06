document.addEventListener("DOMContentLoaded", () => {

    const users = document.getElementById("users");

    const createItem = (user) => {
        return `
        <div class="user-item">
            <h3 class="align-center">
                ${user.imePrezime} (${user.korisnickoIme})
            </h3>
            <div class="align-center">
                <img class="user-img" src="${user.slikaKorisnika}" alt="${user.korisnickoIme} picture">
                <hr>
                <p>
                    ${user.email}
                </p>
            </div>
        </div>
        `
    };

    const handleResponse = (data) => {
        console.log(data);
        Array.from(data).forEach(user => {
            users.innerHTML += createItem(user);
        })
    }

    const handleError = (error) => {
        alert(error.toString());
    }

    fetch("https://frodo.ess.hr/api/korisnici-json.php")
            .then(r => r.json())
            .then(handleResponse)
            .catch(handleError);

});