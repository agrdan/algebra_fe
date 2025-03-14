function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}

write("Zadatak 1:");

var counter = 0;
while(counter <= 20) {
    if (counter >= 3 && counter <= 20 && counter % 9 != 0) {
        write(counter, "span");
    }
    counter++;
}

var one = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        one++;
    }
}



