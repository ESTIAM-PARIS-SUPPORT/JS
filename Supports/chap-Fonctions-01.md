Voici un chapitre sur les **fonctions nommées en JavaScript** :  

# Les Fonctions Nommées en JavaScript  

## 1. Définition  

Une **fonction nommée** en JavaScript est une fonction déclarée avec le mot-clé `function`, suivie d'un nom explicite. Ce nom permet de référencer la fonction dans le code et facilite le débogage.  

### Syntaxe :  

```javascript
function nomDeLaFonction(param1, param2) {
  // Corps de la fonction
  return param1 + param2;
}
```

---

## 2. Exécution d'une Fonction Nommée  

Pour exécuter une fonction, on l'appelle en utilisant son nom suivi de parenthèses :  

```javascript
function direBonjour() {
  console.log("Bonjour !");
}

direBonjour(); // Affiche "Bonjour !"
```

---

## 3. Avantages des Fonctions Nommées  

✅ **Lisibilité et Clarté** : Le nom de la fonction explique son rôle.  

✅ **Réutilisation** : Une fois définie, une fonction peut être utilisée plusieurs fois.  

✅ **Débogage Facilitée** : En cas d'erreur, la stack trace affiche le nom de la fonction, facilitant l'identification du problème.  

✅ **Hoisting** : Les fonctions nommées sont levées (`hoisted`), ce qui signifie qu'on peut les appeler avant leur déclaration.  

Exemple :  

```javascript
direBonjour(); // Fonction appelée avant sa définition

function direBonjour() {
  console.log("Bonjour !");
}
```

---

## 4. Différence avec les Fonctions Anonymes  

Une **fonction anonyme** n’a pas de nom explicite et est souvent affectée à une variable :  

```javascript
const maFonction = function () {
  console.log("Ceci est une fonction anonyme !");
};

maFonction();
```

Contrairement aux fonctions nommées, les fonctions anonymes **ne sont pas hoistées** et doivent être définies avant d’être appelées.

---

## 5. Fonctions Nommées et Récursivité  

Les fonctions nommées permettent d’appeler leur propre nom dans leur corps, ce qui est utile pour la récursivité :  

```javascript
function factorielle(n) {
  if (n === 0) return 1;
  return n * factorielle(n - 1);
}

console.log(factorielle(5)); // 120
```

---

## 6. Cas d’Usage Courants  

📌 **Fonctions utilitaires** :  

```javascript
function addition(a, b) {
  return a + b;
}

console.log(addition(2, 3)); // 5
```

📌 **Gestion d’événements** :  

```javascript
document.getElementById("monBouton").addEventListener("click", function afficherMessage() {
  console.log("Bouton cliqué !");
});
```

📌 **Fonctions de validation** :  

```javascript
function estPair(nombre) {
  return nombre % 2 === 0;
}

console.log(estPair(10)); // true
console.log(estPair(7));  // false
```

---

## 7. Conclusion  

Les **fonctions nommées** sont essentielles en JavaScript. Elles apportent clarté, maintenabilité et permettent le **hoisting**. Elles sont à privilégier pour une meilleure lisibilité du code, notamment lorsqu'on veut les réutiliser ou les déboguer plus facilement.
