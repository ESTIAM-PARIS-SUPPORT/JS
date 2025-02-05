const tokens = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.01];
let price = 176.25;
let amount = 350.88;

function change(price, amount) {
    // Tableau pour stocker la monnaie à rendre
    const change = [];
    
    // Résoudre le problème des arrondis en JavaScript en multipliant par 100
    // Puis arrondir la différence en centimes pour éviter les problèmes de flottants
    let res = Math.round((amount - price) * 100); // Conversion en centimes
    
    // Variable d'index pour itérer à travers les tokens (billets/pièces)
    let i = 0;

    // Boucle principale : tant que la somme restante (res) est supérieure à 0
    // et qu'il reste des tokens à utiliser, on continue à calculer la monnaie
    while (res > 0 && i < tokens.length) {
        
        // Boucle interne pour soustraire autant de fois que possible le token actuel de la somme
        // L'idée est de retirer le token le plus grand possible sans dépasser la somme à rendre
        while ((res - tokens[i] * 100) >= 0) {
            // Ajouter le token dans le tableau "change" pour marquer qu'il a été donné comme monnaie
            change.push(tokens[i]);
            
            // Décrémenter la somme à rendre (res) de la valeur du token utilisé
            res = res - tokens[i] * 100;
        }

        // Incrémenter l'index i pour passer au token suivant dans le tableau tokens
        i++;
    }

    // Retourner le tableau des tokens (monnaie rendue)
    return change;
}


console.log(change(price, amount), (amount - price).toFixed(2));

// une autre approche plus optimisée

// function changeOp(price, amount) {
//     const change = [];
//     let res = amount - price;
//     for (let i = 0; i < tokens.length; i++) {
//         if (Math.floor(res / tokens[i]) > 0) {
//             let q = Math.floor(res / tokens[i]);
//             res = res - q * tokens[i];

//             change.push({ q: q, token: tokens[i] });
//         }
//     }

//     return change;
// }



// tests de la fonction change 

const testCases = [
    { price: 176.85, amount: 350.88, expected: [100, 50, 20, 2, 2, 0.01] }, // Exemple
    { price: 99.99, amount: 200, expected: [100, 0.01] }, 
    { price: 45.50, amount: 50, expected: [2, 2, 0.5] }, 
    { price: 10, amount: 20, expected: [10] }, 
    { price: 0.99, amount: 1, expected: [0.01] }
];

console.log("=== Tests de rendu de monnaie ===");
testCases.forEach(({ price, amount, expected }, index) => {
    const result = change(price, amount); // fonction testée
    console.log(`Test ${index + 1}:`);
    console.log(`  Prix : ${price}€`);
    console.log(`  Payé : ${amount}€`);
    console.log(`  Rendu :`, result);
    console.log(`  ✅ Test ${index + 1} ${JSON.stringify(result) === JSON.stringify(expected) ? "réussi" : "échoué"}`);
});