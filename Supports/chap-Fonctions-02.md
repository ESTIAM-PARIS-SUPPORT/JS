## Table des matières

- [Fonctions fléchées](#fonctions-fléchées)
  * [Syntaxe](#syntaxe)
  * [Différences principales avec les fonctions traditionnelles](#différences-principales-avec-les-fonctions-traditionnelles)
  * [Avantages](#avantages)
  * [Exemples](#exemples)
    + [En conclusion](#en-conclusion)
- [Fonctions anonymes](#fonctions-anonymes)
    * [Syntaxe](#syntaxe-1)
    * [Utilisation](#utilisation)
    * [Exemples](#exemples-1)
        + [En conclusion](#en-conclusion-1)
- [Exercices](#exercices)
    * [Fonctions fléchées](#fonctions-fléchées-1)
        + [Exercice 1: Conversion en fonction fléchée](#exercice-1--conversion-en-fonction-fléchée)
        + [Exercice 2: Utilisation de `this` avec fonctions fléchées](#exercice-2--utilisation-de--this--avec-fonctions-fléchées)
    * [Fonctions anonymes](#fonctions-anonymes-1)
        + [Exercice 3: Fonction anonyme comme callback](#exercice-3--fonction-anonyme-comme-callback)
        + [Exercice 4: Auto-exécution de fonction anonyme](#exercice-4--auto-exécution-de-fonction-anonyme)
        + [Conseils pour la résolution](#conseils-pour-la-résolution)

# Fonctions fléchées

Les fonctions fléchées, introduites avec ECMAScript 6 (ou ES6), sont une nouvelle manière d'écrire des fonctions en JavaScript. Elles offrent une syntaxe plus concise que les fonctions traditionnelles et comportent quelques différences importantes en matière de portée et de comportement.

## Syntaxe

**Forme basique** :

Une fonction fléchée est déclarée en utilisant une syntaxe de flèche `=>`. Elle est généralement définie comme suit :

```js
const functionName = (param1, param2) => {
  // corps de la fonction
};
```

On précise bien la flèche `=>` entre les paramètres et le corps de la fonction. Si la fonction n'a qu'un seul paramètre, les parenthèses autour du paramètre peuvent être omises :

**Si la fonction n'a qu'un seul paramètre** :

```js
const functionName = param => {
  // corps de la fonction
};
```

**Pour les fonctions renvoyant directement une valeur** :

```js
const add = (a, b) => a + b;
```

Dans cet exemple, la fonction `add` prend deux paramètres `a` et `b` et renvoie leur somme. La syntaxe concise des fonctions fléchées est particulièrement utile pour les fonctions courtes qui renvoient une valeur unique. C'est l'équivalent de la fonction traditionnelle suivante :

```js
function add(a, b) {
  return a + b;
}
```

Ou la fonction fléchée suivante :
    
```js
const add = (a, b) => {
    return a + b;
};
```


## Différences principales avec les fonctions traditionnelles

1. **Pas de `this` propre** :

   Considérons un objet avec une méthode qui utilise une fonction fléchée :

   ```js
   const obj = {
     name: 'John',
     sayHello: () => {
       console.log(`Hello, my name is ${this.name}`);
     }
   };

   obj.sayHello();  // "Hello, my name is undefined"
   ```

   Dans cet exemple, `this.name` est `undefined` car la fonction fléchée `sayHello` capture `this` du contexte englobant (qui est `window` dans un navigateur) plutôt que l'objet `obj`.

    Pour une fonction non fléchée (aussi appelée fonction traditionnelle ou fonction régulière), la valeur de `this` est déterminée par la manière dont la fonction est appelée. Si une méthode régulière est appelée sur un objet, `this` se réfère à l'objet sur lequel la méthode a été appelée.

    Voici un exemple utilisant une fonction régulière dans le contexte de l'objet précédent :

    ```js
    const obj = {
      name: 'John',
      sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };

    obj.sayHello();  // "Hello, my name is John"
    ```

    Dans cet exemple, lorsque vous appelez `obj.sayHello()`, `this` à l'intérieur de la méthode `sayHello` se réfère à `obj`. C'est pourquoi `this.name` renvoie correctement "John".

    En revanche, avec une fonction fléchée, `this` n'est pas lié au moment de l'appel, mais plutôt au moment de la déclaration de la fonction. C'est pourquoi dans l'exemple précédent avec la fonction fléchée, `this.name` était `undefined` : la fonction fléchée a capturé le `this` de son contexte englobant (en l'occurrence `window` dans un navigateur, où `name` n'est pas défini).

2. **Pas d' `arguments` propre** :


    Pour rappel, l'objet `arguments` est un objet semblable à un tableau qui est disponible dans toutes les fonctions et contient les arguments passés à la fonction lors de son appel. Par exemple, si vous appelez une fonction avec `myFunction(1, 2, 3)`, `arguments` contiendra `[1, 2, 3]` :

    ```js
    function myFunction() {
      console.log(arguments);
    }

    myFunction(1, 2, 3);  // [1, 2, 3]
    ```

    Prenons une fonction classique qui contient une fonction fléchée :

   ```js
   function outerFunction() {
     return () => {
       console.log(arguments[0]);
     };
   }

   const arrowFunc = outerFunction('Hello');
   arrowFunc();  // "Hello"
   ```

   Ici, la fonction fléchée affiche `Hello` car elle utilise l'objet `arguments` de la `outerFunction`, son contexte englobant.

    En revanche, si nous remplaçons la fonction fléchée par une fonction classique, nous obtenons une erreur :
  
    ```js
    function outerFunction() {
      return function() {
        console.log(arguments[0]);
      };
    }

    const regularFunc = outerFunction('Hello');
    regularFunc();  // TypeError: arguments is not defined
    ```

    Cela est dû au fait que les fonctions fléchées n'ont pas leur propre objet `arguments`. Si vous essayez d'accéder à `arguments` à l'intérieur d'une fonction fléchée, vous obtiendrez une erreur.

3. **Non constructibles** :

   Si nous essayons d'utiliser une fonction fléchée comme constructeur, cela générera une erreur.

   ```js
   const ArrowFunction = () => {};

   const instance = new ArrowFunction();  // TypeError: ArrowFunction is not a constructor
   ```

    Les fonctions fléchées ne peuvent pas être utilisées avec `new` car elles n'ont pas de `prototype`. Les fonctions fléchées sont toujours anonymes et ne peuvent pas être nommées, ce qui signifie qu'elles ne peuvent pas être utilisées comme constructeurs.

    En revanche, les fonctions traditionnelles peuvent être utilisées comme constructeurs :

    ```js
    function RegularFunction() {}
    
    const instance = new RegularFunction();
    ```

    Cela fonctionne car les fonctions traditionnelles ont un `prototype` et peuvent être nommées.

4. **Pas de `prototype`** :

   Les fonctions fléchées n'ont pas de propriété `prototype` contrairement aux fonctions traditionnelles.

   ```js
   const ArrowFunction = () => {};
   console.log(ArrowFunction.prototype);  // undefined
   ```

   Si vous tentez d'accéder à `prototype` sur une fonction fléchée, vous obtiendrez `undefined`.

    En revanche, les fonctions traditionnelles ont un `prototype` :
  
    ```js
    function RegularFunction() {}

    console.log(RegularFunction.prototype);  // RegularFunction {}
    ```

    Cela est dû au fait que les fonctions fléchées ne peuvent pas être utilisées comme constructeurs, contrairement aux fonctions traditionnelles.
    Nous reparlerons de `prototype` dans un prochain chapitre, mais néanmoins, retenez simplement que les fonctions fléchées n'ont pas de `prototype`.

## Avantages

1. **Syntaxe concise** : Elles permettent une écriture plus succincte, en particulier pour des fonctions courtes.

2. **Gestion simplifiée de `this`** : Elles sont très utiles dans des situations où vous souhaitez conserver le contexte `this` du code englobant, comme avec les fonctions de rappel.

## Exemples

**Fonction traditionnelle vs fonction fléchée** :

```js
// Fonction traditionnelle
function add(a, b) {
  return a + b;
}

// Fonction fléchée
const add = (a, b) => a + b;
```

On voit bien que l'écriture est plus concise avec la fonction fléchée, en particulier pour des fonctions courtes. Ca pourrait paraître plus verbeux pour des fonctions plus longues, ou lors d'une première utilisation. Mais ce sont des choses qui s'apprennent et qui deviennent naturelles avec le temps !

**Gestion de `this` avec les fonctions fléchées** :

```js
const timer = {
  seconds: 5,
  start: function() {
    setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        console.log("Time's up!");
      }
    }, 1000);
  }
};

timer.start();
```

Dans cet exemple, la fonction fléchée à l'intérieur de `setInterval` conserve le `this` de la méthode `start`, ce qui signifie que `this.seconds` fait référence à `timer.seconds`.

Néanmoins, si nous remplaçons la fonction fléchée par une fonction traditionnelle, cela ne fonctionnera pas :

```js
const timer = {
  seconds: 5,
  start: function() {
    setInterval(function() {
      this.seconds--;
      if (this.seconds === 0) {
        console.log("Time's up!");
      }
    }, 1000);
  }
};

timer.start();  // TypeError: Cannot read property 'seconds' of undefined
```

Cela est dû au fait que la fonction traditionnelle à l'intérieur de `setInterval` a son propre `this` qui n'est pas lié à `timer`. C'est pourquoi `this.seconds` est `undefined` et nous obtenons une erreur.

**Nous reparlerons de `setInterval` et `setTimeout` dans un prochain chapitre.**

### En conclusion

Les fonctions fléchées apportent une syntaxe plus moderne et concise à JavaScript. Tout en étant pratiques, il est essentiel de comprendre leurs particularités, en particulier en ce qui concerne le comportement de `this`, afin d'éviter les pièges courants et d'utiliser ces fonctions de manière efficace.

# Fonctions anonymes

En JavaScript, une fonction anonyme est une fonction qui n'a pas de nom. Elle est définie en tant qu'expression de fonction et peut être assignée à une variable ou passée en tant qu'argument à une autre fonction.

## Syntaxe

**Déclaration d'une fonction anonyme** :

```js
const myFunction = function() {
  // corps de la fonction
};
```

Dans cet exemple, `myFunction` est une variable qui contient une fonction anonyme. La fonction est définie en tant qu'expression de fonction et n'a pas de nom. Elle peut être appelée en utilisant la variable `myFunction`. Par exemple :

```js
    myFunction();
```

**Fonction anonyme avec paramètres** :

```js
const add = function(a, b) {
  return a + b;
};

console.log(add(2, 3));  // 5
```

Dans cet exemple, `add` est une fonction anonyme qui prend deux paramètres `a` et `b` et renvoie leur somme. La fonction est assignée à la variable `add` et peut être appelée en utilisant cette variable. 

## Utilisation

Les fonctions anonymes sont couramment utilisées dans les cas suivants :

1. **Fonctions de rappel** : Les fonctions anonymes sont souvent utilisées comme fonctions de rappel dans des méthodes telles que `map`, `filter`, `reduce`, `setTimeout`, `setInterval`, etc.
2. **Fonctions auto-exécutantes** : Les fonctions anonymes peuvent être auto-exécutées immédiatement après leur définition. Cela permet de créer un contexte privé pour les variables et de ne pas polluer l'espace global.

## Exemples

**Fonction anonyme en tant que fonction de rappel** :

```js
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(num) {
  return num * num;
});

console.log(squaredNumbers);  // [1, 4, 9, 16, 25]
```

Dans cet exemple, la fonction anonyme est utilisée comme fonction de rappel pour la méthode `map`. Elle prend un nombre en entrée et renvoie le carré de ce nombre. La méthode `map` applique cette fonction à chaque élément du tableau `numbers`. 

**Fonction anonyme auto-exécutante** :

```js
(function() {
  console.log("This function is self-executing.");
})();
```

Dans cet exemple, la fonction anonyme est définie entre parenthèses `(function() { ... })` et est suivie immédiatement par `()`, ce qui signifie qu'elle est auto-exécutée. Cela permet de créer un contexte privé pour les variables et de ne pas polluer l'espace global.

### En conclusion

Les fonctions anonymes sont des fonctions sans nom qui sont définies en tant qu'expressions de fonction. Elles sont couramment utilisées comme fonctions de rappel ou pour créer des contextes privés pour les variables. Bien qu'elles soient utiles, il est important de les utiliser avec discernement pour éviter la complexité et rendre le code plus lisible. 

# Exercices

## Fonctions fléchées

### Exercice 1: Conversion en fonction fléchée

Convertissez les fonctions traditionnelles suivantes en fonctions fléchées et vérifiez leur fonctionnement en écrivant les appels de test correspondants.

**Fonction à convertir:**
```javascript
function multiply(a, b) {
  return a * b;
}


function greet(name) {
  return `Hello, ${name}!`;
}


function divide(a, b) {
  return a / b;
}


function sayHello() {
  return "Hello World!";
}


console.log(multiply(2, 3));  // 6
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(divide(10, 2));    // 5
console.log(sayHello());      // "Hello World!"

```

### Exercice 2: Utilisation de `this` avec fonctions fléchées

Supposons que vous avez un objet `timer` qui doit décompter à partir de 10. Utilisez une fonction fléchée pour garantir que `this` reste lié à l'objet `timer`. Écrivez le code et testez-le.

**Objet `timer`:**
```js
const timer = {
  count: 10,
  start: // ici, utilisez une fonction fléchée pour décrémenter le compteur
};

timer.start();
```

## Fonctions anonymes

### Exercice 3: Fonction anonyme comme callback

Écrivez une fonction anonyme comme callback pour la méthode `filter` qui filtre et retourne uniquement les nombres pairs d'un tableau.

### Exercice 4: Auto-exécution de fonction anonyme

Créez une fonction anonyme auto-exécutante qui affiche "Hello World" dans la console.

### Conseils pour la résolution

- Pour les fonctions fléchées, assurez-vous de comprendre comment elles manipulent `this` par rapport aux fonctions traditionnelles.
- Pour les fonctions anonymes, réfléchissez aux avantages de leur utilisation comme callbacks ou dans des fonctions auto-exécutantes pour éviter la pollution de l'espace global.
