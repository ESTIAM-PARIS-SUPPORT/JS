# Objets et Prototypes

## Table des matières

- [Introduction aux Objets](#introduction-aux-objets)
- [Propriétés et méthodes](#propriétés-et-méthodes)
- [Fonction constructeur](#fonction-constructeur)
- [Effet de bord](#effet-de-bord)
- [Introduction à la notion de prototype](#introduction-à-la-notion-de-prototype)
- [Exercice Prototype Average](#exercice-prototype-average)
- [`Object.create()` & `Object.setPrototypeOf()`](#objectcreate--objectsetprototype)
- [`Function.prototype.call()`](#functionprototypecall)
- [Exercice Classes vs Prototype](#exercice-classes-vs-prototype)
- [Exercice Compte bancaire](#exercice-compte-bancaire)


## Fonction constructeur

Les fonctions constructeurs sont des fonctions spéciales qui servent à créer des objets. Elles sont souvent utilisées pour définir des modèles d'objets avec des propriétés et des méthodes communes. Voici un exemple de fonction constructeur :

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Utilisation de la fonction constructeur pour créer des objets
const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

```

La fonction `Person` agit comme un modèle pour créer des objets `Person`. Les objets créés auront des propriétés `name` et `age` avec les valeurs spécifiées.


## Exercice 

Créez une fonction constructeur `Student` qui possède deux attributs name et age et un attribut interne qui permet de savoir si un objet de type `Student` est adulte.


## Effet de bord

Lorsque vous utilisez une fonction constructeur et que vous affectez des propriétés à `this`, il est important de faire attention à l'effet de bord. Le mot-clé `this` peut être imprévisible dans certaines situations. Considérez l'exemple suivant :

```js
function Counter() {
  this.value = 0;

  setInterval(function() {
    // Attention à l'effet de bord sur this
    this.value++;
    console.log(this.value);
  }, 1000);
}

const counter = new Counter();
```

Ici, le `this` à l'intérieur de la fonction de rappel `setInterval` ne fait pas référence à l'objet `Counter`, entraînant un comportement indésirable. Pour éviter cela, on peut utiliser `bind` ou une fonction fléchée.

## Introduction à la notion de prototype

Les prototypes en JavaScript sont un mécanisme fondamental qui permet d'ajouter des propriétés et des méthodes à des objets. Ils jouent un rôle central dans le système d'héritage de JavaScript, permettant à un objet d'hériter des propriétés et méthodes d'un autre. Cela est possible grâce à la chaîne de prototypes, une série de liens entre les objets qui permet de remonter de proche en proche jusqu'à trouver la propriété ou la méthode recherchée.

### Fonctionnement des prototypes

Chaque objet en JavaScript possède une propriété interne appelée `[[Prototype]]`, accessible via la propriété `__proto__` (bien que l'utilisation de `Object.getPrototypeOf()` soit préférée pour des raisons de standard et de compatibilité). Cet objet `[[Prototype]]` peut avoir ses propres propriétés et méthodes, qui sont alors accessibles à l'objet initial comme s'il s'agissait des siennes.

Lorsque vous tentez d'accéder à une propriété ou à une méthode d'un objet, JavaScript cherche d'abord cette propriété sur l'objet lui-même. S'il ne la trouve pas, il recherche dans le prototype de cet objet, puis dans le prototype du prototype, et ainsi de suite, remontant la chaîne de prototypes jusqu'à ce qu'il trouve la propriété ou atteigne la fin de la chaîne (le prototype de Object, qui est le maillon final, ou `null`).

### Utilisation des prototypes

Les prototypes sont utilisés pour plusieurs raisons en JavaScript:

- **Héritage**: Permettre à un objet d'hériter des propriétés et méthodes d'un autre. Cela est particulièrement utile pour définir des comportements partagés à travers des instances d'objets créées par des constructeurs ou des classes.
- **Économie de mémoire**: Au lieu de définir des méthodes directement dans chaque instance d'un objet (ce qui dupliquerait ces méthodes dans chaque instance), vous pouvez les définir une seule fois dans le prototype, et toutes les instances partageront ces méthodes via la chaîne de prototypes.
- **Extension des types intégrés**: Vous pouvez ajouter de nouvelles méthodes aux objets JavaScript intégrés, comme `Array` ou `String`, en étendant leur prototype. Cela doit être fait avec prudence pour ne pas entrer en conflit avec les futures versions du langage.

### Exemple

```javascript
function Voiture(marque) {
  this.marque = marque;
}

// Ajout d'une méthode au prototype de Voiture
Voiture.prototype.afficherMarque = function() {
  console.log(this.marque);
};

// Création d'une nouvelle instance de Voiture
let maVoiture = new Voiture("Toyota");
maVoiture.afficherMarque(); // Affiche "Toyota" dans la console
```

Dans cet exemple, toutes les instances de `Voiture` hériteront de la méthode `afficherMarque()` via le prototype de `Voiture`. Cela montre comment les prototypes permettent de partager des comportements entre objets en JavaScript.

## Exercice Prototype Average

Créez une fonction constructeur `User` avec les propriétés `name`, `grades`, et une méthode `calculateAverage` pour calculer la moyenne des notes. Utilisez la notion de prototype pour partager la méthode `calculateAverage` entre plusieurs instances de `User`.

Dans cet exercice, la méthode `calculateAverage` est ajoutée au prototype de `User`, permettant à toutes les instances de `User` d'y accéder sans duplication de code.

---

## `Object.create()` & `Object.setPrototypeOf()`

`Object.create()` et `Object.setPrototypeOf()` sont deux approches en JavaScript pour établir une relation d'héritage entre les objets, permettant ainsi à un objet d'hériter des propriétés et méthodes d'un autre. Ces mécanismes fonctionnent en manipulant directement la chaîne de prototypes des objets.

### `Object.create()`

`Object.create()` crée un nouvel objet avec le prototype spécifié et des propriétés supplémentaires optionnelles. C'est une manière puissante et flexible de créer des objets qui héritent de certains autres objets sans avoir besoin de définir une fonction constructeur classique.

```javascript
const parent = {
  saluer: function() {
    console.log("Bonjour !");
  }
};

// Créer un nouvel objet qui hérite de parent
const enfant = Object.create(parent);
enfant.saluer(); // Affiche "Bonjour !"
```

Dans cet exemple, `enfant` hérite directement de `parent` grâce à `Object.create()`, ce qui signifie que `enfant` a accès à la méthode `saluer` définie dans `parent`.

### `Object.setPrototypeOf()`

`Object.setPrototypeOf()` permet de définir le prototype (c'est-à-dire le chaînon de l'héritage) d'un objet existant vers un nouvel objet. C'est une façon de changer l'héritage d'un objet après sa création, bien que son utilisation soit généralement déconseillée pour des raisons de performance.

```javascript
const parent = {
  saluer: function() {
    console.log("Bonjour !");
  }
};

const enfant = {};

// Définir parent comme le prototype de enfant
Object.setPrototypeOf(enfant, parent);

enfant.saluer(); // Affiche "Bonjour !"
```

Dans cet exemple, bien que `enfant` soit initialement créé sans prototype, `Object.setPrototypeOf()` modifie son prototype pour hériter de `parent`, permettant ainsi à `enfant` d'accéder à la méthode `saluer`.

### Comparaison et conseils d'utilisation

- **`Object.create()`** est préféré pour créer de nouveaux objets qui nécessitent un prototype spécifique dès le début. C'est une méthode plus naturelle et directe pour établir l'héritage lors de la création de l'objet.
- **`Object.setPrototypeOf()`** permet de changer le prototype d'un objet existant, mais peut avoir des implications de performance car il modifie la chaîne de prototypes à la volée. Son utilisation devrait être limitée à des cas spécifiques où il n'y a pas d'alternative.

## `Function.prototype.call()`

`Function.prototype.call()` est une méthode en JavaScript qui permet d'appeler une fonction en spécifiant explicitement le contexte `this` pour l'appel de cette fonction. Le premier argument passé à `call()` devient la valeur de `this` à l'intérieur du corps de la fonction appelée, et les arguments suivants sont passés à la fonction comme ses arguments.

### Syntaxe

```javascript
func.call([thisArg[, arg1, arg2, ...]])
```

- **`thisArg`** (optionnel) : La valeur à utiliser comme `this` lors de l'appel de `func`. Si non spécifié ou `null`/`undefined`, `this` sera l'objet global en mode non strict et `undefined` en mode strict.
- **`arg1, arg2, ...`** : Les arguments à passer à la fonction.

### Utilisation de `call()`

`call()` est particulièrement utile pour :

1. **Appeler une fonction avec un contexte `this` spécifique** : Cela permet d'invoquer une méthode appartenant à un objet sur un autre objet.

2. **Emprunter des méthodes d'autres objets** : Si un objet possède une méthode utile, vous pouvez utiliser `call()` pour l'utiliser sur un autre objet qui n'a pas cette méthode.

3. **Appeler une fonction avec des arguments individuels** : Contrairement à `apply()`, qui prend un tableau d'arguments, `call()` permet de passer les arguments un par un.

### Exemple

Supposons que nous ayons un objet `personne` et que nous voulions appeler une fonction `afficherInfos` avec `personne` comme contexte `this`.

```javascript
function afficherInfos(age, profession) {
  console.log(`${this.nom} a ${age} ans et est ${profession}.`);
}

const personne = {
  nom: "Alice"
};

// Utilisation de call() pour définir `this` dans afficherInfos et passer les arguments
afficherInfos.call(personne, 30, "ingénieure");
```

Dans cet exemple, `afficherInfos` est appelée avec `this` défini sur l'objet `personne`, et `"30"` et `"ingénieure"` sont passés comme arguments. Le résultat sera : `"Alice a 30 ans et est ingénieure."`

### Conclusion

`Function.prototype.call()` offre une manière puissante et flexible de manipuler le contexte `this` lors de l'appel de fonctions, ce qui permet de réutiliser des fonctions et des méthodes de manière efficace et expressive en JavaScript.

---

## Exercice Classes vs Prototype

### Partie 1: Classes en JavaScript

**Objectif**: Créer une classe `Voiture` avec un constructeur, des propriétés, et une méthode. Ensuite, étendre cette classe pour créer une sous-classe spécifique `VoitureElectrique`.

1. **Définir la classe `Voiture`**:
   - Le constructeur doit accepter deux paramètres: `marque` et `modele`, et les initialiser comme propriétés de l'instance.
   - Ajouter une méthode `afficherDetails` qui affiche dans la console `"Marque: [marque], Modèle: [modele]"`.

2. **Créer une instance de `Voiture`** et utiliser `afficherDetails` pour afficher ses détails.

3. **Définir une sous-classe `VoitureElectrique`** qui étend `Voiture`:
   - Le constructeur doit accepter trois paramètres: `marque`, `modele`, et `autonomieBatterie`.
   - Utiliser `super()` pour appeler le constructeur de la classe parent.
   - Ajouter une méthode `afficherAutonomie` qui affiche dans la console `"Autonomie de la batterie: [autonomieBatterie] km"`.

4. **Créer une instance de `VoitureElectrique`** et utiliser `afficherDetails` et `afficherAutonomie` pour afficher ses détails et son autonomie.

### Partie 2: Prototypes en JavaScript

**Objectif**: Réaliser la même tâche que dans la Partie 1, mais en utilisant des fonctions constructeur et le système de prototypes de JavaScript.

1. **Définir une fonction constructeur `Voiture`**:
   - Elle doit initialiser les propriétés `marque` et `modele` basées sur les arguments passés.
   - Ajouter la méthode `afficherDetails` au prototype de `Voiture`.

2. **Créer une instance de `Voiture`** et utiliser `afficherDetails` pour afficher ses détails.

3. **Définir une fonction constructeur `VoitureElectrique`** qui étend `Voiture`:
   - Elle doit initialiser `marque`, `modele`, et `autonomieBatterie`.
   - Pour hériter de `Voiture`, vous devez définir le prototype de `VoitureElectrique` et utiliser `Object.create(Voiture.prototype)`.
   - Ajouter la méthode `afficherAutonomie` au prototype de `VoitureElectrique`.

4. **Créer une instance de `VoitureElectrique`** et utiliser `afficherDetails` et `afficherAutonomie` pour afficher ses détails et son autonomie.

## Exercice Compte bancaire

Dans cet exercice, nous allons utiliser les prototypes pour créer un système simple de gestion de comptes bancaires. Nous définirons une fonction constructeur `CompteBancaire` pour créer des comptes avec un solde initial. Ensuite, nous utiliserons le prototype de `CompteBancaire` pour ajouter des méthodes permettant de déposer, retirer de l'argent et afficher le solde du compte.

### Objectifs de l'exercice

1. Créer une fonction constructeur `CompteBancaire` qui initialise un compte avec un `titulaire` (le nom du propriétaire du compte) et un `solde` initial.
2. Ajouter des méthodes au prototype de `CompteBancaire` pour :
   - Déposer de l'argent (`deposer`)
   - Retirer de l'argent (`retirer`)
   - Afficher le solde du compte (`afficherSolde`)
