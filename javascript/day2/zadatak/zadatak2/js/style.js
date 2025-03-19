function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}

var ag = "Andreas Grđan";

write(`Broj znakova imena i prezimena ${ag.length - 1}`);
write(`Prvo slovo imena ${ag.charAt(0)}`);
write(`Prezime ${ag.split(" ")[1]}`);
write(`Ime-Prezime ${ag.split(" ")[0]}-${ag.split(" ")[1]}`);
