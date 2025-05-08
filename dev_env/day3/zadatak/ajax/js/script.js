$(() => {

    const usersElement = $("#users");

    createUser = (user) => {
        return `
            <div class="user-item">
                <h2>${user.imePrezime} (${user.korisnickoIme})</h2>
                <hr>
                <div>
                    <img class="user-img" src="${user.slikaKorisnika}" alt="${user.korisnickoIme} picture">
                </div>
                <hr>
                <p>${user.email}</p>
            </div>
        `;
    }

    onDataFetched = (data, status, jqXHR) => {
        var users = "";
        Array.from(data).forEach(user => {
            users += createUser(user);
        })
        usersElement.html(users);
    }

    onError = (jqXHR, status) => {
        alert(`Error occurred: ${jqXHR.status} - ${status}`);
    }


    $.ajax({
        type: "get",
        url: "https://frodo.ess.hr/api/korisnici-json.php",
        data: "json"
    })
    .done(onDataFetched)
    .fail(onError);


    
});