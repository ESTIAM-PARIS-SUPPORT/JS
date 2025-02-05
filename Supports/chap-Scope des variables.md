# Le Scope des variables en JavaScript

Le **scope** ou portée d'une variable désigne les limites dans lesquelles une variable est accessible ou manipulable. C'est un concept fondamental en JavaScript qui impacte directement la manière dont le code est structuré, maintenu et sécurisé. Comprendre le fonctionnement du scope aide à éviter des erreurs courantes, telles que les conflits de noms ou les comportements imprévus dans des environnements complexes.

JavaScript utilise un système de scope basé sur les fonctions, complété par un scope de bloc introduit avec ES6 (`let` et `const`). Cela permet une gestion plus fine des variables et réduit les risques liés à l'utilisation de variables globales.

---

## Types de scope

En JavaScript moderne, il existe principalement trois types de scope :

### 1. Le scope global

Une variable déclarée en dehors de toute fonction ou bloc appartient au scope global. Elle est accessible depuis n'importe quelle partie du code.

**Exemple :**
```js
const globalVar = "Je suis une variable globale";

function afficherGlobal() {
  console.log(globalVar); // Accessible depuis la fonction
}

afficherGlobal(); // Affiche "Je suis une variable globale"
console.log(globalVar); // Accessible directement
```

**Inconvénients des variables globales :**
- Elles sont accessibles partout, ce qui peut provoquer des conflits si plusieurs parties du code tentent de modifier la même variable.
- Leur utilisation excessive rend le code difficile à maintenir et à déboguer.

---

### 2. Le scope de fonction

Une variable déclarée à l'intérieur d'une fonction est limitée au scope de cette fonction. Elle ne peut pas être accédée de l'extérieur.

**Exemple :**
```js
function afficherMessage() {
  const message = "Je suis dans une fonction";
  console.log(message); // Accessible ici
}

afficherMessage();
console.log(message); // Erreur : ReferenceError, car `message` est dans le scope de la fonction
```

#### Les fermetures (Closures)

Les fermetures permettent à une fonction d'accéder aux variables de son scope parent, même après que ce parent ait été exécuté.

**Exemple :**
```js
function creerCompteur() {
  let compteur = 0; // Scope local à la fonction
  return function () {
    compteur++;
    console.log(compteur);
  };
}

const monCompteur = creerCompteur();
monCompteur(); // Affiche 1
monCompteur(); // Affiche 2
```

## Exercice Scope

Créez un compteur basé sur le même principe que la fonction définit ci-dessus, mais cette fois le compteur s'incrémente à chaque appel de 3.

---

### 3. Le scope de bloc (introduit avec `let` et `const`)

Les mots-clés `let` et `const` ont introduit un scope limité aux blocs `{ ... }`, comme ceux utilisés dans les boucles, conditions ou autres structures.

**Exemple :**
```js
if (true) {
  let blockVar = "Je suis une variable de bloc";
  console.log(blockVar); // Accessible ici
}

console.log(blockVar); // Erreur : ReferenceError, car `blockVar` est limitée au bloc if
```

---

## Différences entre `let`, `const` et `var`

### `let` et `const` (modernes)

- **Scope :** Bloc (`{ ... }`).
- **Caractéristiques :**
  - `let` : La variable peut être réassignée.
  - `const` : La variable ne peut pas être réassignée, mais ses propriétés peuvent être modifiées si c'est un objet.

**Exemple :**
```js
if (true) {
  let x = 10;
  const y = 20;

  x = 15; // Valide
  // y = 25; // Erreur : TypeError, car `y` est une constante
}
```

---

### `var` (déconseillé)

- **Scope :** Fonction (pas de scope de bloc).
- **Hoisting :** Les variables déclarées avec `var` sont "levées", ce qui signifie qu'elles peuvent être utilisées avant leur déclaration, mais avec une valeur `undefined`.

**Exemple problématique :**
```js
if (true) {
  var test = "accessible partout";
}
console.log(test); // Fonctionne, mais inattendu pour un débutant
```

---

## Shadowing et portée imbriquée

Une variable dans un scope local peut masquer une variable avec le même nom dans un scope parent. C'est ce qu'on appelle le **shadowing**.

**Exemple :**
```js
const valeur = "globale";

function afficherValeur() {
  const valeur = "locale";
  console.log(valeur); // Affiche "locale"
}

afficherValeur();
console.log(valeur); // Affiche "globale"
```

---

## Bonnes pratiques avec le scope

1. **Utilisez `let` et `const` :** 
   - Préférez `const` pour les variables immuables.
   - Utilisez `let` si une réassignation est nécessaire.
   - Évitez complétement `var` 

2. **Minimisez les variables globales :**
   - Utilisez des fonctions ou structures ou des objets pour encapsuler vos variables.
   - Cela réduit les risques de conflits et facilite la maintenance.

3. **Déclarez les variables le plus proche possible de leur utilisation :**
   - Cela améliore la lisibilité et réduit le risque d’erreurs liées au shadowing.

4. **Exploitez le scope de bloc :**
   - Limitez la portée des variables au strict nécessaire.


##  Challenge (+2pts)

*Vous pouvez faire cet exercice à deux.*

1. Créez, dans un fichier `index.html`, l'algorithme qui rend la monnaie à un client en utilisant les billets et pièces disponibles. L'algorithme doit calculer la monnaie à rendre et afficher le nombre de billets et pièces nécessaires.

2. Créez un formulaire permettant de rendre la monnaie, par exemple si le montant du produit est de `87.35` et que l'on donne `150`, l'algorithme doit vous rendre la monnaie suivante :

La machine possède les jetons : 100, 50, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01

Monnaie à rendre: 62.65 €
```txt
1 x 50 €
1 x 10 €
1 x 2 €
1 x 0.5 €
1 x 0.1 €
1 x 0.05 €
```

Remarque pour l'affichage dans la page 

```txt
montant du produit [87.35]
monnaie [150]
[calculer]
```
