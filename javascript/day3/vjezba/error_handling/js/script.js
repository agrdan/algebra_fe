var x = 0;
//var y = 1;

try {
    x = y + 1;
    console.log("Kraj try bloka")
} catch (error) {
    console.log(`Greska: ${error.name}, ${error.message}`);
} finally {
    console.log("Uvijek se izvrsim");
}

console.log(`Vrijednost varijable x: ${x}`)