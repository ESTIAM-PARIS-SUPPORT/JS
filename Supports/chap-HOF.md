## Table des matières

- [Fonctions d'ordre supérieur (HOF)](#fonctions-dordre-supérieur-hof)
    - [1. Qu'est-ce qu'une fonction d'ordre supérieur ?](#1-qu'est-ce-qu'une-fonction-d'ordre-supérieur)
    - [2. Exemples courants de HOF en JavaScript](#2-exemples-courants-de-hof-en-javascript)
    - [3. Pourquoi utiliser des fonctions d'ordre supérieur ?](#3-pourquoi-utiliser-des-fonctions-dordre-supérieur)
    - [4. Les fonctions d'ordre supérieur (HOF) personnalisées](#4-les-fonctions-dordre-supérieur-hof-personnalisées)
    - [5. Limitations et précautions](#5-limitations-et-précautions)
- [Utilisation avec les tableaux : `map`, `filter`, `reduce`](#utilisation-avec-les-tableaux--map-filter-reduce)
    - [1. `map`](#1-map)
    - [2. `filter`](#2-filter)
    - [3. `reduce`](#3-reduce)
- [Exercices](#exercices)
    - [Exercice 1: Création d'une HOF personnalisée](#exercice-1-création-d'une-hof-personnalisée)
    - [Exercice 2: Utilisation de `map` pour transformer des objets](#exercice-2-utilisation-de-map-pour-transformer-des-objets)
    - [Exercice 3: Filtration conditionnelle avec `filter`](#exercice-3-filtration-conditionnelle-avec-filter)
    - [Exercice 4: Cumul des valeurs avec `reduce`](#exercice-4-cumul-des-valeurs-avec-reduce)


# Fonctions d'ordre supérieur (HOF)

Les fonctions d'ordre supérieur (Higher-Order Functions, HOF) sont un concept central de la programmation fonctionnelle. Ces fonctions permettent de créer des codes plus lisibles, modulables et expressifs.

---

## 1. **Qu'est-ce qu'une fonction d'ordre supérieur ?**

Une fonction d'ordre supérieur est une fonction qui :

- Accepte une ou plusieurs fonctions comme arguments.
- Renvoie une fonction comme résultat.

Les HOF sont possibles dans des langages où les fonctions peuvent être affectées à des variables, passées en tant qu'arguments, et renvoyées depuis d'autres fonctions.

---

## 2. **Exemples courants de HOF en JavaScript**

a. Array.prototype.map()

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

b. Array.prototype.filter()

```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

c. Array.prototype.reduce()

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15
```

---

## 3. **Pourquoi utiliser des fonctions d'ordre supérieur ?**

- **Modularité et réutilisabilité** : En isolant des comportements spécifiques dans des fonctions séparées, vous pouvez réutiliser ces fonctions dans de multiples contextes.

- **Lisibilité** : Les HOF, combinées à des fonctions anonymes, peuvent rendre le code plus déclaratif, en montrant clairement ce que vous essayez d'accomplir.

- **Flexibilité** : Les HOF peuvent être utilisées pour créer des fonctions plus complexes à partir de fonctions plus simples.

---

## 4. Les fonctions d'ordre supérieur (HOF) personnalisées

Les fonctions d'ordre supérieur ne se limitent pas à celles intégrées nativement dans un langage de programmation. En comprenant le concept, il est tout à fait possible de définir vos propres HOF pour traiter des besoins spécifiques ou pour améliorer la lisibilité et la modularité de votre code.

---

## Qu'est-ce qu'une HOF personnalisée ?

Une HOF personnalisée est une fonction que vous créez vous-même, et qui respecte les principes de base des HOF : elle accepte une fonction comme argument, renvoie une fonction, ou les deux.

L'avantage de créer des HOF personnalisées est que vous pouvez les concevoir pour traiter des besoins spécifiques de votre application, tout en conservant une logique propre et modulaire.

---

## Examen approfondi de l'exemple `greaterThan`

**Code**:

```js
function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15));  // true
```

**Explication**:

1. La fonction `greaterThan` est une HOF qui accepte un nombre `n` en tant qu'argument.
2. Elle renvoie ensuite une nouvelle fonction qui prend en argument un autre nombre `m`.
3. La fonction renvoyée compare `m` à `n` (de la fonction externe) pour déterminer si `m` est supérieur à `n`.

Quand vous exécutez `greaterThan(10)`, cela vous donne une nouvelle fonction qui compare tout nombre que vous lui donnez à 10.

---

## Pourquoi est-ce utile ?

La beauté des HOF personnalisées comme `greaterThan` réside dans leur capacité à générer dynamiquement des fonctions sur demande. En l'occurrence, avec `greaterThan`, vous pouvez facilement créer des fonctions pour vérifier si un nombre est supérieur à 5, 10, 100, ou n'importe quelle autre valeur, sans avoir à réécrire de la logique.

**Autres utilisations**:

- Vous pourriez créer une HOF qui génère des fonctions de filtrage pour des tableaux basées sur des critères spécifiques.
- Une HOF pour créer des fonctions de tri dynamiques basées sur des propriétés d'objets.

---

## 5. **Limitations et précautions**

Si les HOF peuvent rendre le code plus expressif, elles peuvent également le rendre plus complexe si elles sont mal utilisées. Il est crucial de :

- Veiller à ne pas enchaîner trop de HOF, ce qui pourrait rendre le code difficile à lire.
- S'assurer que chaque fonction a une responsabilité unique pour faciliter la maintenance et le débogage.

---

# Utilisation avec les tableaux : `map`, `filter`, `reduce`

Quand nous travaillons avec des tableaux en JavaScript, les méthodes `map`, `filter` et `reduce` sont essentielles pour manipuler les données de façon fonctionnelle. Voici comment chacune fonctionne avec des exemples simples et étendus.

---

## 1. `map`

La méthode `.map()` crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau d'origine.

**Syntaxe**:

```js
arr.map(callback(element[, index[, array]])[, thisArg])
```

**Paramètres**:

- **callback**: Fonction qui est appelée pour chaque élément du tableau.
  - **element** (obligatoire): L'élément courant en cours de traitement dans le tableau.
  - **index** (optionnel): L'index de l'élément courant en cours de traitement dans le tableau.
  - **array** (optionnel): Le tableau sur lequel la méthode `map` a été appelée.
  
- **thisArg** (optionnel): Objet à utiliser comme `this` lors de l'exécution de `callback`.

**Objectif** : Transforme chaque élément du tableau selon une fonction donnée.

- **Exemple simple** :

  ```js
  const numbers = [1, 2, 3, 4];
  const squared = numbers.map(num => num * num);
  console.log(squared);  // [1, 4, 9, 16]
  ```

- **Exemple étendu avec tous les paramètres** :

  ```js
  const words = ["apple", "banana", "cherry"];
  const detailedMapping = words.map((word, index, array) => `${index + 1}/${array.length}: ${word.toUpperCase()}`);
  console.log(detailedMapping);  // ["1/3: APPLE", "2/3: BANANA", "3/3: CHERRY"]
  ```

---

## 2. `filter`

La méthode `.filter()` crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.

**Syntaxe**:

```js
arr.filter(callback(element[, index[, array]])[, thisArg])
```

**Paramètres**:

- **callback**: Fonction de test pour filtrer chaque élément.
  - **element** (obligatoire): L'élément courant du tableau.
  - **index** (optionnel): L'index de l'élément courant dans le tableau.
  - **array** (optionnel): Le tableau sur lequel la méthode `filter` a été appelée.
  
- **thisArg** (optionnel): Objet à utiliser comme `this` lors de l'exécution de `callback`.

**Objectif** : Crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.

- **Exemple simple** :

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const evens = numbers.filter(num => num % 2 === 0);
  console.log(evens);  // [2, 4]
  ```

- **Exemple étendu avec tous les paramètres** :

  ```js
  const words = ["apple", "banana", "cherry", "date"];
  const longerThanFive = words.filter((word, index, array) => word.length > 5 && index < array.length - 1);
  console.log(longerThanFive);  // ["banana"]
  ```

---

## 3. `reduce`

La méthode `.reduce()` exécute une fonction réductrice sur chaque élément du tableau, aboutissant à une valeur unique.

**Syntaxe**:

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

**Paramètres**:

- **callback**: Fonction pour exécuter sur chaque élément dans le tableau.
  - **accumulator** (obligatoire): Accumule les valeurs de retour du callback. C'est la valeur accumulée précédemment retournée dans le dernier appel du callback, ou `initialValue`, si fourni.
  - **currentValue** (obligatoire): L'élément courant en cours de traitement dans le tableau.
  - **index** (optionnel): L'index de l'élément courant en cours de traitement dans le tableau.
  - **array** (optionnel): Le tableau sur lequel la méthode `reduce` a été appelée.
  
- **initialValue** (optionnel): Valeur à utiliser comme premier argument pour le premier appel du `callback`. Si aucune valeur initiale n'est fournie, le premier élément du tableau sera utilisé comme valeur initiale (et `currentValue` commencera à partir du deuxième).

**Objectif** : Exécute une fonction réductrice sur chaque élément du tableau, résultant en une seule valeur de sortie.

- **Exemple simple** :

  ```js
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, num) => acc + num);
  console.log(sum);  // 10
  ```

- **Exemple étendu avec tous les paramètres** :

  ```js
  const words = ["apple", "banana", "cherry"];
  const longestWord = words.reduce((longest, currentWord, index, array) => {
    if (index === array.length - 1) {
      return longest.length > currentWord.length ? longest : currentWord;
    }
    return longest.length > currentWord.length ? longest : "";
  }, "");
  console.log(longestWord);  // "banana"
  ```

---

### Exercices

#### Exercice 1: Création d'une HOF personnalisée
Définissez une fonction d'ordre supérieur `repeatAction` qui prend un nombre `n` et une fonction `action` comme paramètres. Cette fonction doit exécuter `action` `n` fois. Utilisez cette fonction pour imprimer "Hello!" cinq fois.

#### Exercice 2: Utilisation de `map` pour transformer des objets
Utilisez la méthode `map` pour transformer un tableau d'objets représentant des personnes en un tableau de strings formatées qui contiennent le nom et l'âge de chaque personne. Par exemple, convertir `[{name: "Alice", age: 25}, {name: "Bob", age: 20}]` en `["Alice is 25", "Bob is 20"]`.

#### Exercice 3: Filtration conditionnelle avec `filter`
Écrivez une fonction qui utilise `filter` pour retourner uniquement les nombres pairs d'un tableau donné. Testez cette fonction avec le tableau `[1, 2, 3, 4, 5, 6]`.

#### Exercice 4: Cumul des valeurs avec `reduce`
Utilisez la méthode `reduce` pour calculer la somme totale des nombres dans un tableau. Fournissez un exemple avec le tableau `[1, 2, 3, 4, 5]`.
