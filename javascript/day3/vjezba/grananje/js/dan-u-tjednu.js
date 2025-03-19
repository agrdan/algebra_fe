function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}

var poruka = "";

var dan = new Date().getDay();


switch(dan) {
    case 0:
        poruka = "Danas je nedjelja.";
        break;
    case 1:
        poruka = "Danas je ponedjeljak.";
        break;
    case 2:
        poruka = "Danas je utorak.";
        break;
    case 3:
        poruka = "Danas je srijeda.";
        break;
    case 4:
        poruka = "Danas je cetvrtak.";
        break;
    case 5:
        poruka = "Danas je petak.";
        break;
    case 6:
        poruka = "Danas je subota.";
        break;
    default:
        poruka = "Nije dan u tjednu"
        break;
}

write(`${poruka}`);