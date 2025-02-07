if (true) {
    const blockVar = "Je suis une variable de bloc";
    console.log(blockVar); // Accessible ici
  }
  
//   const blockVar = 1 ;
 // console.log(blockVar); // Erreur : ReferenceError, car `blockVar` est limitée au bloc if

  if (true) {
    let x = 10;
    const y = 20;
  
    x = 15; // Valide
    //y = 25; // Erreur : TypeError, car `y` est une constante

    console.log(x, y);
  }

  const numbers = [1,2,3];
 

  function foo(){
    // impossible avec let et const
    // console.log(a);

    let a = 1 ;
  }

  foo();

const valeur = "globale";

function afficherValeur() {
  const valeur = "locale";
  console.log(valeur); // Affiche "locale"
}

afficherValeur();
console.log(valeur); // Affiche "globale"