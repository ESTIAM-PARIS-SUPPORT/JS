function rendreLaMonnaie(montantPaye, montantCommande) {
    // Liste des billets et pièces disponibles
    const denominations = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
    
    // Calcul du montant de la monnaie à rendre
    let monnaie = montantPaye - montantCommande;
    
    // Dictionnaire pour stocker le nombre de chaque billet/pièce
    const rendu = {};

    // Parcours des différentes dénominations, de la plus grande à la plus petite
    for (let denom of denominations) {
        if (monnaie >= denom) {
            let count = Math.floor(monnaie / denom);  // Nombre d'unités de cette dénomination
            rendu[denom] = count;  // Enregistrement du nombre de billets/pièces
            monnaie -= count * denom;  // Réduction du montant restant
            monnaie = monnaie.toFixed(2);  // Arrondi pour éviter les erreurs de flottants
        }
    }
    
    // Affichage du rendu de monnaie
    console.log(`Monnaie à rendre: ${parseFloat(montantPaye - montantCommande).toFixed(2)} €`);
    for (let denom in rendu) {
        console.log(`${rendu[denom]} x ${denom} €`);
    }
}

// Exemple d'utilisation
rendreLaMonnaie(150, 87.35);
