$(() => {
    const section1Btn = $("#sekcija1 button");

    section1Btn.eq(0).click(() => {
        const content = $("#sekcija1 label").text();
        alert(content);
    });

    section1Btn.eq(1).click(() => {
        const content = $("#sekcija1 label").html();
        alert(content);
    });

    section1Btn.eq(2).click(() => {
        const content = $("#sekcija1 textarea").val();
        if (content.trim().length == 0) {
            alert("Field shouldn't be empty!");
        } else {
            alert(`You've entered ${content}`);
        }
    });

    section1Btn.eq(3).click(() => {
        const content = $("#sekcija1 input").attr("type");
        alert(`Attribute value: ${content}`)
    });


    const section2Btn = $("#sekcija2 button");
    section2Btn.eq(0).on("click", () => {
        $("#sekcija2 label").text("Novi text!");
    });

    section2Btn.eq(1).on("click", () => {
        $("#sekcija2 label").html("<i>Novi text</i>");
    });

    section2Btn.eq(2).on("click", () => {
        $("#sekcija2 textarea").val("Nova vrijednost polja...");
    });

    section2Btn.eq(3).on("click", () => {
        $("#sekcija2 textarea").attr({"rows": 10, "cols": 30});
    });

    const section3Btn = $("#sekcija3 button");

    section3Btn.eq(0).on("click", () => {
        $("#sekcija3 label").prepend("<i>Novi sadrzaj na pocetku!</i>");
    });

    section3Btn.eq(1).on("click", () => {
        $("#sekcija3 label").append("<i> - novi sadrzaj na kraju!</i>");
    });

    section3Btn.eq(2).on("click", () => {
        $("#sekcija3 input").before("<button>Test</button>")
    });

    section3Btn.eq(3).on("click", () => {
        $("#sekcija3 input").after("<button>Test after</button>")
    });

    const sekcija4Btn = $("#sekcija4 button");

    sekcija4Btn.eq(0).on("click", () => {
        $("#obrazac1").remove();
    });

    sekcija4Btn.eq(1).on("click", () => {
        $("#obrazac2").empty();
    });

    const sekcija5Btn = $("#sekcija5 button");
    const obrazac5 = $("#sekcija5 form");

    sekcija5Btn.eq(0).on("click", () => {
        obrazac5.addClass("nova-pozadina");
    });

    sekcija5Btn.eq(1).on("click", () => {
        obrazac5.removeClass("nova-pozadina");
    });

    sekcija5Btn.eq(2).on("click", () => {
        obrazac5.toggleClass("nova-pozadina");
    });

    const sekcija6Btn = $("#sekcija6 button");
    const obrazac6 = $("#sekcija6 form");

    sekcija6Btn.eq(0).on("click", () => {
        obrazac6.css("backgroundColor", "red");
    });

    sekcija6Btn.eq(1).on("click", () => {
        obrazac6.css({
            backgroundColor: "green",
            color: "yellow",
            boxShadow: "2px 2px 2px grey",
            padding: "15px"
        });
    });
});