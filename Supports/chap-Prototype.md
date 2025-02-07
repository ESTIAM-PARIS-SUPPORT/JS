# Objets et Prototypes

## Table des matières

- [Introduction aux Objets](#introduction-aux-objets)
- [Propriétés et méthodes](#propriétés-et-méthodes)
- [Fonction constructeur](#fonction-constructeur)
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
