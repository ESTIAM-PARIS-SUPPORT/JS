# Set

Un objet `Set` est une collection de valeurs où chaque valeur doit être unique. Autrement dit, la même valeur ne peut pas apparaître plus d'une fois dans un Set. Contrairement aux arrays, les `Set` ne sont pas destinés à l'accès par index, mais plutôt à la vérification de la présence d'une valeur.

### Caractéristiques de Set

- Les éléments dans `Set` sont **ordonnés**. L'ordre des éléments est basé sur l'ordre de leur insertion.
- Les **doublons** sont automatiquement **supprimés**.

### Exemples de Set

```js
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Ceci n'ajoute rien car 2 est déjà présent

console.log(mySet.has(1));  // true
console.log(mySet.size);    // 2

// On peut itérer sur un Set avec une boucle for...of
for (const value of mySet) {
    console.log(value); // 1, 2
}

// .. ou alors, on peut utiliser la méthode forEach
mySet.forEach(value => {
    console.log(value); // 1, 2
});
```

Un cas d'usage courant pour les `Set` est de supprimer les doublons d'un tableau :

```js
const arr = [1, 2, 3, 4, 2, 3, 1];
const uniqueValues = new Set(arr);

console.log(uniqueValues);          // Set(4) {1, 2, 3, 4}

// avec un spread operator, on peut convertir un Set en tableau
console.log([...uniqueValues]);     // [1, 2, 3, 4]
```

### Méthodes principales de Set

- **add(value)** : Ajoute une nouvelle valeur au Set.
    - Si la valeur existe déjà, elle n'est pas ajoutée.
    - La méthode retourne le Set lui-même, ce qui permet de chaîner les appels (chaining method).
    - Exemple:
        ```js
            mySet.add(1).add(2); // Correct, car add() retourne une référence au Set
        ```
- **delete(value)** : Supprime la valeur spécifiée.
    - Exemple:
        ```js
            mySet.has(1); // true
            mySet.delete(1);
            mySet.has(1); // false
        ```
- **has(value)** : Retourne `true` si la valeur existe, `false` sinon.
    - Exemple:
        ```js
            mySet.has(1); // true
            mySet.has(3); // false
        ```
- **clear()** : Supprime tous les éléments du Set.
    - Exemple:
        ```js
            mySet.size; // 2
            mySet.clear();
            mySet.size; // 0
        ```
- **size** : Retourne le nombre d'éléments dans le Set. Comme pour Map, ce n'est pas une méthode, mais une propriété, donc toujours sans parenthèses !
    - Exemple:
        ```js
            mySet.size; // 2
        ```

### Exercice Set
Soit la chaine de caractères `mississippi` comptez le nombre de chacune des lettres.
