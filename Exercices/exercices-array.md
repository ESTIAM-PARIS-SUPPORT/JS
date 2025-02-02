# Exercice 1 : **Affectation par référence**

Créez un tableau nommé `originalArray` contenant les éléments `[10, 20, 30]`.  
Affectez ce tableau à une nouvelle variable `referenceArray`.  
Ensuite, modifiez le premier élément de `referenceArray` en le remplaçant par la valeur `99`.  
Affichez les deux tableaux et observez ce qui se passe.

- Que voyez-vous dans la sortie de `originalArray` et `referenceArray` après la modification ?
- Pourquoi les deux tableaux sont-ils affectés ?

---

### Exercice 2 : **Copie superficielle avec spread operator**

Créez un tableau `numbers` avec les éléments `[1, 2, 3, 4, 5]`.  
Utilisez le spread operator pour créer une copie de ce tableau et appelez-le `copyNumbers`.  
Ajoutez un élément supplémentaire à la fin du tableau `copyNumbers` (par exemple, `6`).  
Affichez les deux tableaux (`numbers` et `copyNumbers`) et comparez-les.

- Quelles différences pouvez-vous observer entre les deux tableaux après l'ajout de l'élément ?
- Que se passe-t-il si vous modifiez un élément dans le tableau `copyNumbers` ?

---

### Exercice 3 : **Copie profonde avec JSON**

Créez un tableau `users` contenant un objet avec les propriétés `name` et `age` :  
```js
const users = [{ name: "John", age: 30 }];
```
Utilisez `JSON.parse(JSON.stringify(...))` pour créer une copie profonde de ce tableau et appelez-le `copiedUsers`.  
Modifiez l'objet dans `copiedUsers` pour changer le `name` de "John" à "Jane".  
Affichez les deux tableaux (`users` et `copiedUsers`) et observez si le tableau original est affecté.

- Qu'est-ce qu’une copie profonde et en quoi est-elle différente d’une copie superficielle ?
- Pourquoi le tableau `users` n'est-il pas affecté par la modification de `copiedUsers` ?

---

### Exercice 4 : **Filtrer et transformer un tableau**

Créez un tableau `numbers` contenant les éléments `[5, 10, 15, 20, 25, 30]`.  
1. Utilisez `filter()` pour créer un tableau `filteredNumbers` contenant uniquement les nombres supérieurs à 15.
2. Utilisez ensuite `map()` pour créer un tableau `multipliedNumbers` où chaque nombre du tableau filtré est multiplié par 2.

Affichez les deux tableaux (`filteredNumbers` et `multipliedNumbers`).

- Qu'est-ce que chaque méthode (`filter()` et `map()`) réalise sur le tableau d'origine ?
- Pouvez-vous chaîner ces deux méthodes dans une seule expression ?

---

### Exercice 5 : **Inverser un tableau et joindre des éléments**

Créez un tableau `letters` contenant les lettres de l'alphabet `[ 'a', 'b', 'c', 'd', 'e']`.  
1. Utilisez `reverse()` pour inverser l'ordre des éléments dans le tableau.
2. Utilisez `join()` pour convertir le tableau inversé en une chaîne de caractères où chaque lettre est séparée par un espace.

Affichez la chaîne de caractères résultante.

- Comment la méthode `reverse()` affecte-t-elle l'ordre des éléments dans le tableau ?
- Que produit la méthode `join()` dans ce contexte ?
