document.addEventListener("DOMContentLoaded", () => {

    const booksContainer = document.getElementById("books");
    const errorContainer = document.getElementById("error");
    const dropDownMenu = document.getElementById("dropdown-menu");
    const totalPrice = document.getElementById("total-price");
    const mainWindow = document.getElementById("main-screen");

    showLoader();

    function showLoader() {
        document.getElementById('loader').style.display = 'block';
        setTimeout(hideLoader, 1000);
    }

    function hideLoader() {
        document.getElementById('loader').style.display = 'none';
        mainWindow.classList.remove("hide");
        mainWindow.classList.add("show");
    }

    dropDownMenu.addEventListener('change', () => {
        getData(dropDownMenu.value);
    });

    const getData = (value) => {
        fetch(`https://frodo.ess.hr/api/knjige-json.php?autor=${value}`)
            .then(r => r.json())
            .then(handleResponse)
            .catch(handleError);
    }

    const handleResponse = (data) => {
        console.log(data);
        if (data.length == 0) {
            errorContainer.innerHTML = "<div class=\"error\">Books not found!<div>";
            clearBookContainer();
            clearPriceContainer();
        } else {
            clearBookContainer();
            clearErrorContainer();
            var totalPrice = 0;
            var author = null;
            Array.from(data).forEach(it => {
                booksContainer.innerHTML += createItem(it);
                totalPrice += parseFloat(it.cijena);
                if (author == null) {
                    author = it.autor;
                }
            })
            showTotalPrice(totalPrice, author)
        }
    }

    const handleError = (error) => {
        errorContainer.innerHTML = `<div class=\"error\">${error.toString()}<div>`;
        clearPriceContainer();
    }
    
    const createItem = (book) => {
        return `
        <div class="item">
            <h3 class="align">${book.naslovKnjige}</h3>
            <hr>
            <p>Book year: ${book.godinaIzdanja}</p>
            <p>Book price: ${book.cijena}</p>
            <p>Author: ${book.autor}</p>
        </div>
        `
    }

    clearBookContainer = () => {
        booksContainer.innerHTML = "";
    }

    clearErrorContainer = () => {
        errorContainer.innerHTML = "";
    }

    showTotalPrice = (price, author) => {
        totalPrice.innerHTML = "";
        totalPrice.classList.remove("hide");
        totalPrice.classList.add("show");
        totalPrice.innerHTML = `<div>Total price for ${author} collection is: ${price}<div>`;
    }

    clearPriceContainer = () => {
        totalPrice.classList.remove("show");
        totalPrice.classList.add("hide");
    }
});
