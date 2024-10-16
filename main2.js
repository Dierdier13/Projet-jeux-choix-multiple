const prompt = require('prompt-sync')()

/* exo 1 Td 2

let dossard = 0
let time = 0

while (dossard != -1) {
    dossard = Number(prompt("n° dossart :"))
    while (isNaN(dossar)){
        dossard = Number(prompt("n° dossart :"))
    }
    if(dossard != -1){
        time = Number(prompt("temps d'arrivé : "))
    }
console.log("Le concurent" + dossard + "a terminé sa course en " +time + "seconde");
}

*/


/*  exo 2 Td 

let minute = Number(prompt("Minute :"))
while (isNaN(minute) || minute < 0) {
    minute = Number(prompt("Minute :"))
}

let seconde = Number(prompt("Seconde :"))
while (isNaN(seconde) || seconde < 0) {
    seconde = Number(prompt("Seconde :"))
}

for (let i = minute; i >= 0; i--) {
    for (let j = seconde; j >= 0; j--) {
        console.log(i + " minute " + j + " seconde");
    }
}
*/

/* exo 3


let add = 0
let age = Number(prompt("age de Paul : "))

for (let i = 1; i <= age; i++) {
    somme = 150  + (3 * i) 
    console.log(add += somme);
}
*/
/*  exo 4 

let max = 0;
let position = 0;

for (let i = 0; i < 20; i++) {
    let nmbr = Number(prompt("Entrez un nombre: "))
while (isNaN(nmbr) ||  nmbr < o) {
    nmbr = Number(prompt("J'ai dis Entrez un nombre: "))
}
    if (nmbr > max) {
       max = nmbr
       position = i + 1
    }
}
console.log("le plus grand nombre est " + max +" et il a été saisi à la position : " + position);

*/

/*   Exo 5   

let score = 0

for (let i = 0; i < 6; i++) {
    let taille = Number(prompt("Entrez la taille: "));
    
    if (taille < 2.10) {
        score ++
    }
}
console.log(score);
*/

/*  Exo 6   

let n = Number(prompt( "nombre de votes total: "))
let yes = 0
let no = 0
let white = 0

for (let i = 0; i < n; i++) {
    let vote = prompt("répondre par 0(oui), n(non) ou b(blanc)");

    if (vote === "o") {
        yes++;
    }else if (vote === "n") {
        no++;
    }else if (vote === "b") {
        white++;
    }
    while(vote != "o" && vote != "n" && vote != "b"){
        vote = prompt("répondre par 0(oui), n(non) ou b(blanc)");
    }
}
    console.log(`Résultat: ${(yes / n) * 100} % de Oui, ${(no / n) * 100} % de Non, ${(white / n) * 100} % de blanc.`);
*/

/*  Exo 7 

let nmbr = Number(prompt("Entre un nombre: "))


for (let i = 2; i < nmbr; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (nmbr % i == 0)
            isPrime = false;
        break;
    }
if (isPrime == true){
    console.log(i);
}
}

*/

/*  Exo 8 

let nmbr = Number(prompt("Ecrit un chiffre: "))
let compteur = 1
 do {
    console.log(nmbr + compteur);
    compteur ++
} while (compteur <= +6)

while (compteur <= 6) {
    console.log(nmbr +compteur);
    compteur ++
    
}
*/

/*  Exo  9  

let paris = 50;
let nantes = 200;
let year = 0;

do {
    year++
    paris += 100;
    nantes *= 1.12;  
    
} while (paris <= nantes);

console.log(year);
*/

/*  Exo 10


let n = Number(prompt("Entrez un entier n :"))
let produit = 1

for (let i = 1; i <= n; i++) {
    let pair = 2 * i;
    produit *= pair * pair;

}
console.log("Le produit des carrés des", n, "premiers entiers pairs est :", produit);



/* 
let somme = 0
for (let i = 0; i <= 100; i++) {
    somme = somme + i
   console.log(somme);
}
*/

/*
let nmbr = Number(prompt("entre un nombre"))

for (let index = 0; index <= 10; index++) {
   console.log(nmbr * index);
}
*/

/*
 let pyramide = "";

for (let i = 0; i <= 4 ; i++ ) { 
    console.log(pyramide = pyramide + "1") 
}
*/