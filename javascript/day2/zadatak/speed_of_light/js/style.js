function speedOfLight() {
    var c = 3e8;
    var ts = 1;

    return c * ts;
}

function speedOfSound() {
    var v = 340;

    return speedOfLight() / v;
}

document.write("<p>Svjetlost udaljenost od " + speedOfLight() + "m prevali za 1s, dok je zvuku potrebno " + speedOfSound() + " s</p>")