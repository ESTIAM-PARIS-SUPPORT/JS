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

```js
// fonction constructeur 
function Student(name, age){
    this.name = name; // this c'est l'objet que l'on va créer plus tard 
    this.age = age;
    // une méthode dans fonction Constructeur 
    this.isAdult = function(){
        if(this.age >= 18) {
            return true;
        }else{
            return false;
        }
    }
}

const s1 = new Student("Alan", 20);
console.log(s1.isAdult() ? "Yes" : "No" );
const s2 = new Student("Sophie", 17);
console.log(s2.isAdult() ? "Yes" : "No" );
```

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

1. Utilisez ces objets et calculez la moyenne de chaque personne.
2. Recodez cet exercice avec une fonction Constructeur et re-créez les personnes en re-calculant leur moyenne. 

```js
// 1
function sumNumbers(numbers){
    // Attention, on doit vérifier, avant, qu'il y a bien des valeurs dans le tableau.
    if(numbers.length <= 0) {
        return "Error";
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // sum =  sum + numbers[i];
        sum +=numbers[i];
    }
     // on multiplie par 10 et on divise par 10 pour avoir un chiffre significatif après la virgule.
    return Math.round( (sum / numbers.length ) * 10) / 10 ;
}

// pour calculer la moyenne
console.log( sumNumbers(Alan.notes) );

// 2

function Student_V2(name, age, notes) {
        this.name = name; // this c'est l'objet que l'on va créer plus tard 
        this.age = age;
        this.notes = notes;
        // une méthode dans fonction Constructeur 
        this.isAdult = function () {
            if (this.age >= 18) {
                return true;
            } else {
                return false;
            }
        }
        this.average = function () {
            if (this.notes.length <= 0) {
                return "Error";
            }
            let sum = 0;
            for (let i = 0; i < this.notes.length; i++) {
                // sum =  sum + this.notes[i];
                sum += this.notes[i];
            }
            // on multiplie par 10 et on divise par 10 pour avoir un chiffre significatif après la virgule.
            return Math.round((sum / this.notes.length) * 10) / 10;
        }

    }

    const Alan = new Student_V2('Alan', 20, [10, 19, 12, 17]);

    // affichera sa moyenne
    console.log(Alan.average());
```

