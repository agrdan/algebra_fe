var tekst = " Lorem ipsum dolor sit amet";

var duljina = tekst.length;
var rijecSit = tekst.substring(19, 22);
var noviTekst = tekst.concat(" novi tekst ", " jos malo teksta");

function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}

write(`Duljina stringa: ${duljina}`);
write(`Dio stringa: ${rijecSit}`);
write(`Novi string: ${noviTekst}`);
write(`Zamjena dijela string: ${tekst.replace("amet", "elit")}`);
write(`Sva slova velika: ${tekst.toUpperCase()}`);
write(`Znak na poziciji indexa 13: ${tekst.charAt(13)}`);
write(`Duljina trimmanog string: ${tekst.trim().length}`);
