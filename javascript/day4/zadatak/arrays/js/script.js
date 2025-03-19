function write(text, element="p") {
    document.write(`<${element}>${text}</${element}>`);
}
var names = ['John', 'Jane', 'Bob',, 'Mike'];

names.push("Andreas");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (names[i] === "Jane") {
        break;
    }
}

names = names.filter(function(el) {
    return el !== undefined;
});

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

b = 4 || 1;
console.log(b);
