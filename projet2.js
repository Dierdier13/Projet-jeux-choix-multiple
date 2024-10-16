const prompt = require('prompt-sync')()


let score = 0

let array = [
    ["Question 1: Couleur du cheval blanc d'Henri IV", "A: Marron", "B: Noir", "C: Gris", "D: Blanc"],
    ["Question 2: Couleur de la mer rouge", "A: Vert", "B: Rouge", "C: Bleu", "D: Noir"],
    ["Question 3: Couleur du soleil", "A: Blanc", "B: Jaune", "C: Vert", "D: Bleu"],
    ["Question 4: Couleur d'une ferrari rouge", "A: Rouge", "B: Blanc", "C: Jaune", "D: Gris"],
    ["Question 5: Couleur de l'herbe", "A: Rouge", "B: Noir", "C: Vert", "D: Bleu"]
]


for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5 ; j++) {
       
    }
} 

console.log(array[0]);

array[0] = prompt("Réponse :")
while (array != A && array != B && array != C && array != D) {
    array[0] = prompt("Répondre par A, B, C ou D:")
}
if (array[0] == "D") {
    console.log("Bonne réponse");
    score++
} else {
    console.log("Mauvaise réponse");
}