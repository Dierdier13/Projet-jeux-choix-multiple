const prompt = require('prompt-sync')()


/* Exo 1
let nmbr = prompt("enter un nombre")

if (nmbr > 0) {
    console.log("positif");
}else if(nmbr < 0){
    console.log("négatif");   
}else{
    console.log("egal a 0");    
}
*/


/*  Exo 2
let password = prompt("entrez un mot de passe :")

if(password == "12345") {
    console.log("Accès autorisé");
}else{
    console.log("Accès refusé");
}
*/

/*  Exo 3
let nmbrOne = prompt("rentre le 1er chiffre :")
let nmbrTwo = prompt("rentre le 2èmè chiffre :")
let nmbrThree = prompt("rentre le 3ème chiffre :")

if(nmbrOne > nmbrTwo && nmbrOne > nmbrThree){
    console.log("Le 1er hiffre est le plus grand"); 
}else if(nmbrTwo > nmbrOne && nmbrTwo > nmbrThree){
    console.log("Le 2ème chiffre est le plus grand");
}else{
    console.log("Le 3ème chiffre est le plus grand");   
}
*/

/* Exo 4
let nmbr = Number(prompt("nobre entre 1 et 7")) 

switch (nmbr) {
    case 1:
        console.log("lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
    default:
        console.log("Nombre invalide");
        break;
}

if(nmbr == 1){
    console.log("Lundi");
}else if(nmbr == 2){
    console.log("Mardi");
}else if(nmbr == 3){
    console.log("Mercredi");
}else if(nmbr == 4){
    console.log("Jeudi");
}else if(nmbr == 5){
    console.log("Vendredi");
}else if(nmbr == 6){
    console.log("Samedi");
}else if(nmbr == 7){
    console.log("Dimanche");  
}else{
    console.log("Nombre invalide");
}
*/
/* TD2 Exo 1 et 2  ******
let nmbrOne = prompt("rentre le 1er chiffre :")
let nmbrTwo = prompt("rentre le 2èmè chiffre :")

if(nmbrOne < nmbrTwo){
    console.log("Le 1er hiffre est le plus petit"); 
}else{
    console.log("Le 2ème chiffre est le plus petit");  
}

if(nmbrOne * nmbrTwo >= 0){
    console.log("Positif");
}else{
    console.log("Négatif");
    
}
*/

/* TD2 Exo  3*****

let thermo = prompt("Température de l'eau en °C")

if(thermo < 0){
    console.log("Glace");
}else if(thermo >= 0 && thermo < 100){
    console.log("Liquide");
}else{
    console.log("Gazeux");
}
*/
/* TD2 Exo ****

let nmbr =prompt("Nombre Cadres commandés :")

if(nmbr <= 10){
    console.log(nmbr * 20);
}else if(nmbr > 10 && nmbr <= 30){
    console.log((10*20) + ((nmbr - 10) * 15) ); 
}else{
    console.log(500 + ((nmbr - 30) * 5));   
}
4 */

/*  TD2 Exo ****

let sexe = prompt("Sexe :")
let age = prompt("age :")

if(sexe == "homme" && age > 20){
    console.log("Imposable");
}else if(sexe == "femme" && age > 18 && age < 35){
    console.log("Imposable");
}
else{
    console.log("Non Imposable");
}

5*/


/*** Exo pile face   ***

let jet = random(1,100)

if(jet%2 == 0){
    console.log("Pile gagne et face perd");
}else{
    console.log("face gagne et pile perd"); 
}

function random(min, max ){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

*/

/**************

let color = prompt("couleur des vetements :")

switch (color) {
    case "rouge":
        console.log("En colère");
        break;
    case "bleu":
        console.log("Calme");
        break;
    case "gris":
        console.log("l'algo ca fait chier");
        break;
    case "vert":
        console.log("pas d'internet c'est relou");
        break;
    default:
        console.log("Pas d'humeur");
        break;
}

*/ 

/********

let temp = prompt("quelle température fait dehors :")
let condition = prompt("quelle condition fait t-il :")

if(temp < 20 && temp > 0){
    console.log("Prend une veste");
}else if(temp > 20 && temp < 35){
    console.log("pas besoin d'une veste");
}else if(temp < 0){
    console.log("prend une doudoune");
}else{
console.log("bon chance");
}

if(condition == "soleil"){
    console.log("prend des lunettes");
}else if( condition == "pluie"){
    console.log("prend un parapluie");
}else if(condition == "vent"){
    console.log("prend un parka");
}else{
    console.log("démerde toi"); 
}

*/ 
/*
let score = 0
console.log("1ère question : Qui est le plus fort?\n" + "A : Luffy\n" + "B : Naruto\n" + "C : Sangoku\n" + "D : Ichigo");
let question = prompt("Réponse : ")

if (question == "C" || question == "c") {
    console.log("Bonne réponse\n"); 
    score ++;
}else{
    console.log("tu comprends rien\n");
}

console.log("2ème question : Qui a les plus gros boobs?\n" + "A : Nami\n" + "B : Nico Robin\n" + "C : Boa Hankok\n" + "D : Chopper\n");
question = prompt("Réponse : ")

if (question == "B" || question == "b") {
    console.log("Toi meme tu sais\n");
    score ++;
}else{
    console.log("cherche pas t'as tord\n");
}

console.log("3ème question :QUi est le mechant absolu?\n" + "A : Aizen\n" + "B : Marshall D Teach\n" + "C : Madara\n" + "D : Freezer\n");
question = prompt("Réponse : ")

if (question == "D" || question == "d") {
    console.log("Correct\n");
    score ++;
}else{
    console.log("Faux\n");
}
console.log(score + "/3");
*/