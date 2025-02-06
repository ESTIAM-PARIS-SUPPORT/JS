# QCM : Le Scope des Variables en JavaScript

*Cochez les bonnes réponses pour chaque question.*

---

### 1. Qu'est-ce que le scope d'une variable en JavaScript ?  
- [ ] La manière dont une variable est déclarée  
- [ ] La visibilité et l’accessibilité d’une variable dans le code  
- [ ] Un concept spécifique à ES6  
- [ ] Un moyen de créer des variables globales  

---

### 2. Quels sont les types de scope en JavaScript ?  
- [ ] Global  
- [ ] Fonction  
- [ ] Bloc  
- [ ] Objet  

---

### 3. Quelle variable sera accessible partout dans le code ?  
```js
var x = 10;
let y = 20;
const z = 30;
```
- [ ] `x`  
- [ ] `y`  
- [ ] `z`  
- [ ] Aucune  

---

### 4. Quelle(s) déclaration(s) de variable crée(nt) un scope de bloc `{}` ?  
- [ ] `var`  
- [ ] `let`  
- [ ] `const`  
- [ ] `function`  

---

### 5. Que se passe-t-il lorsqu’une variable est déclarée avec `var` à l’intérieur d’un bloc `{ ... }` ?  
- [ ] Elle est accessible uniquement dans ce bloc  
- [ ] Elle est levée (hoisted) et accessible avant sa déclaration  
- [ ] Elle devient une variable de scope global si déclarée en dehors d'une fonction  
- [ ] Elle provoque une erreur si on y accède en dehors du bloc  

---

### 6. Pourquoi est-il déconseillé d’utiliser `var` en JavaScript moderne ?  
- [ ] Il ne supporte pas le scope de bloc  
- [ ] Il ne permet pas la réassignation  
- [ ] Il entraîne un comportement inattendu dû au hoisting  
- [ ] Il est obsolète et ne fonctionne plus dans ES6  

---

### 7. Quelle est la différence entre `let` et `const` ?  
- [ ] `let` permet la réassignation alors que `const` ne le permet pas  
- [ ] `const` est uniquement utilisé pour les nombres  
- [ ] `let` et `const` ont un scope de fonction  
- [ ] `const` empêche toute modification des objets qu’il contient  

---

### 8. Quel sera le résultat de ce code ?  
```js
function testScope() {
  let x = 5;
  if (true) {
    let x = 10;
    console.log(x);
  }
  console.log(x);
}
testScope();
```
- [ ] `10` puis `5`  
- [ ] `5` puis `10`  
- [ ] `10` puis `10`  
- [ ] Une erreur sera levée  

---

### 9. Qu'est-ce qu'une fermeture (closure) en JavaScript ?  
- [ ] Une fonction qui retourne une autre fonction et conserve l'accès aux variables de son scope parent  
- [ ] Une fonction qui ne peut être appelée qu'une seule fois  
- [ ] Une manière d’empêcher l’accès aux variables globales  
- [ ] Une propriété de JavaScript qui permet aux variables de se déplacer entre les scopes  

---

### 10. Quel sera le résultat de ce code ?  
```js
function creerCompteur() {
  let compteur = 0;
  return function () {
    compteur += 3;
    console.log(compteur);
  };
}

const monCompteur = creerCompteur();
monCompteur();
monCompteur();
```
- [ ] `1` puis `2`  
- [ ] `3` puis `6`  
- [ ] `0` puis `3`  
- [ ] Une erreur sera levée  

---

### 11. Que permet le shadowing en JavaScript ?  
- [ ] Accéder aux variables globales depuis n’importe quel scope  
- [ ] Éviter la redéclaration de variables dans un même bloc  
- [ ] Déclarer une variable avec le même nom qu’une variable d’un scope parent en la masquant localement  
- [ ] Bloquer l’accès aux variables de fonction  

---

### 12. Parmi ces bonnes pratiques, lesquelles sont recommandées pour bien gérer le scope des variables ?  
- [ ] Utiliser `let` et `const` plutôt que `var`  
- [ ] Minimiser l'utilisation des variables globales  
- [ ] Déclarer les variables au début du fichier  
- [ ] Encapsuler les variables dans des fonctions ou objets  