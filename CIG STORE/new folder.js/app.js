prompt('Aimez vous les cigarettes electronique ?');
// je vais maintenant declarer des variables 
// on créer la variable nombre
//let nombre = 3;
//var Nombre = 2;
// console log permet d'afficher dans la console.
//console.log("cigstore");
//let nombre1 = 25;
//let nombre2 = 28;
 //let nombre = nombre1 + nombre2;
//console.log(nombre);
// increment de 1
//nombre++
// decrement de 3
//nombre = nombre - 3;
// decremente de 1
//nombre--;
//nombre /= 4;
// Ecrire dans la console
//console.log(nombre);
// Manipuler les chaines de caractéres
//let text = "j'ai une jolie brouette";
//console.log(text);
let prenom ="sarah";
let nom = "connor";
let phrase = "bonjour" + prenom + "" + nom;
let phrase2 = `Bonjour ${prenom} ${nom}`;
//console.log(phrase2);
console.log(phrase2.length);// lenght va permettre de savoir qu'elle est la longueur de notre chaine de caractére.
console.log(phrase2.indexOf("benoit"));// lenght va permettre de savoir qu'elle est la longueur de notre chaine de caractére.
// -1 signifie j'ai pas trouver
//console.log(phrase2.toLocaleLowerCase());
console.log(phrase2.slice(8, 12));
//les boucles
//for (let compteur = 0; compteur <= 10; compteur+=2){
    //console.log(compteur);
//}
let pass ="chazam";
 
while(pass !="brouette"){
        pass = prompt("Entre le mot de passe");
} 
let clients = ["Robert", "Bruno", "Pascale", "Séverine"];

//for(let ligne = 0; ligne > clients.lenght; ligne++){
     //console.log(clients[ligne]);
//}
// 
function direhello(prenom, nom){
    console.log(`"bonjour  ${prenom} ${nom}`);
}
direhello("Roger","hernie");// a chaque fois que je vais lancer cette fonction , ca va me lancer l'execution du code.

console.log("Brouette");

direhello("benoit");
/**
 * 
 * @param {number} nb1
 * @param {*} nb2
 * 
 *
 */
//function addition(nb1, nb2){
    //let total = nb1 + nb2;
    //return total; // le return permet de faire ressortir une seule information
    //console.log("brouette"); 
//}
//let resultat = addition(5, 12);
//console.log(resultat);
// Aller chercher un élément

// M anipuler le Dom

//console.log(balisesh1);

//Permet de s'assurer que le dom est charger
window.addEventListener("DOMContentLoaded", () => {

let balisesp = document.querySelectorAll("p"); // Cette manipulation permet de saisir une element dans la console.
// Query selector permet d'aller chercer du css par selecteur
    for(let balisep of balisesp){
        balisep.addEventListener("Click",() => {
            balisep.style.color = "green";
     })
    }
  })