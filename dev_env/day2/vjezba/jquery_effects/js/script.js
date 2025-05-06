$(document).ready(() => {

    console.log(".... test")
    const section1Btn = $("#sekcija1 button");
    const section1 = $("#sekcija1 div");

    section1Btn.eq(0).click(() => {
        section1.hide(1000);
    });

    section1Btn.eq(1).click(() => {
        section1.show("slow");
    });

    section1Btn.eq(2).click(() => {
        section1.toggle(2000, () => {
            alert("toggled!");
        });
    });

    section1Btn.eq(3).click(() => {
        section1.hide("fast").show("slow");
    });

    const section2Btn = $("#sekcija2 button");
    const section2 = $("#sekcija2 div");

    section2Btn.eq(0).click(() => {
        section2.fadeOut(1500);
    });

    section2Btn.eq(1).click(() => {
        section2.fadeIn("slow");
    });

    section2Btn.eq(2).click(() => {
        section2.fadeToggle("fast");
    });

    section2Btn.eq(3).click(() => {
        section2.fadeTo(1000, 0.3);
    });

    const section3Btn = $("#sekcija3 button");
    const section3 = $("#sekcija3 div");

    section3Btn.eq(0).click(() => {
        section3.slideUp(1500);
    });

    section3Btn.eq(1).click(() => {
        section3.slideDown(1500);
    });

    section3Btn.eq(2).click(() => {
        section3.slideToggle(1500);
    });

    const section4 = $("#sekcija4 div");

    section4.click(() => {
        const paragraph1 = $("#sekcija4 div p").eq(0);
        const paragraph2 = $("#sekcija4 div p").eq(1);
        // $(this).animate()

        section4
            .animate({left: "50%", marginLeft: "-150px"}, 2000, () => { paragraph1.hide() })
            .animate({width: "300px", fontSize: "24px", color: "white", backgroundColor: "green"}, 2000, () => {paragraph2.show()});

    });

    const section5 = $("#sekcija5 div");

    section5.click(() => {
        const paragraph1 = $("#sekcija5 div p").eq(0);
        const paragraph2 = $("#sekcija5 div p").eq(1);
        section5
            .animate({left: "50%", marginLeft: "-150px"}, 2000, () => { paragraph1.hide() })
            .animate({width: "300px", fontSize: "24px", color: "white", backgroundColor: "green"}, 2000, () => {paragraph2.show()});

    });

    $("#sekcija5 button").click(() => {
        section5.stop(true);
    });
});