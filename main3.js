const prompt = require('prompt-sync')()


let jet = random(1, 10);
let nmbr = Number(prompt("Écris un nombre de 1 à 10: "));
let tentative = 1;

while (nmbr !== jet && tentative < 5) {
    while (isNaN(nmbr) || nmbr <= 0 || nmbr > 10) {
        nmbr = Number(prompt("Caractère invalide, recommence: "));
    }

    if (nmbr > jet) {
        console.log("C'est -");
        nmbr = Number(prompt("Écris un nombre: "));
    } else if (nmbr < jet) {
        console.log("C'est +");
        nmbr = Number(prompt("Écris un nombre: "));
    }
    tentative++;
}

if (nmbr === jet) {
    console.log("Bravo !");
} else {
    console.log("Dommage");
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
