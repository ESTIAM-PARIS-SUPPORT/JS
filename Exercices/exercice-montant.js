const tokens = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.01];
let price = 176.25;
let amount = 350.88;

function change(price, amount) {
    const change = [];
    let res = Math.round((amount - price) * 100) ;
    let i = 0;

    while (res > 0 && i < tokens.length) {
        while ((res - tokens[i] * 100) >= 0) {
            change.push(tokens[i]);
            res = res - tokens[i] * 100;
        }
        i++;
    }

    return change;
}

console.log(change(price, amount), (amount - price).toFixed(2));

// une autre approche 

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

// console.log(changeOp(price, amount));


const testCases = [
    { price: 176.85, amount: 350.88, expected: [100, 50, 20, 2, 2, 0.01] }, // Exemple
    { price: 99.99, amount: 200, expected: [100, 0.01] }, 
    { price: 45.50, amount: 50, expected: [2, 2, 0.5] }, 
    { price: 10, amount: 20, expected: [10] }, 
    { price: 0.99, amount: 1, expected: [0.01] }
];

console.log("=== Tests de rendu de monnaie ===");
testCases.forEach(({ price, amount, expected }, index) => {
    const result = change(price, amount);
    console.log(`Test ${index + 1}:`);
    console.log(`  Prix : ${price}€`);
    console.log(`  Payé : ${amount}€`);
    console.log(`  Rendu :`, result);
    console.log(`  ✅ Test ${index + 1} ${JSON.stringify(result) === JSON.stringify(expected) ? "réussi" : "échoué"}`);
});