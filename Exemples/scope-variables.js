const globalVar = "Je suis une variable globale";

function afficherGlobal() {
    const localVar = "je suis une variable locale";
    console.log('dans la fonction', globalVar); // Accessible depuis la fonction
    console.log('dans la fonction', localVar); // Accessible depuis la fonction
}

afficherGlobal(); // Affiche "Je suis une variable globale"
console.log('script courant', globalVar); // Accessible directement

// On ne peut pas accèder dans le scriptt courant (variable locale)
// console.log('dans la fonction', localVar);


function creerCompteur() {
    let compteur = 0; // Scope local à la fonction
    return function () {
        compteur++;

        return compteur;
    };
}

console.log( creerCompteur()() )
// 
console.log( creerCompteur()() )

const monCompteur = creerCompteur(); // cette fonction retourne une fonction

console.log(monCompteur())
console.log(monCompteur())
console.log(monCompteur())