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


## Exercice 

Vous pouvez créez des objets littéraux également :

```js
const Alan = {
    name : "Alan",
    age : 25,
    getIsAdult(){
        return (this.age >= 18);
    },
   notes : [10, 18, 18, 20 ]
}

const Sophie = {
    name : "Sophie",
    age : 25,
    getIsAdult(){
        return (this.age >= 18);
    }
    notes : [11, 17, 18, 20 ]
}


const Bernard = {
    name : "Bernad",
    age : 20,
    getIsAdult(){
        return (this.age >= 18);
    }
    notes : [11, 10, 18, 20 ]
}

```

1. Utilisez ces objets pour et calculez la moyenne de chaque personne.
2. Recodez cet exercice avec une fonction Constructeur et re-créez les personnes en faisant la moyenne.
