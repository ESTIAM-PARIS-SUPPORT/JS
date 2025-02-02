# Exercices

Utilisez Go Live - si besoin de configurer le port voyez les screens suivants : [screems](../Supports/images/conf-live-server-vscod/)

---

## Exercice 01 : Liste de nombres

Récupérez le dossier **list_numbers.html** : [list_numbers](./list_numbers.html).

1. Utilisez la méthode **querySelectorAll**, qui est une méthode de l'interface **Document** permettant de cibler des éléments du DOM à l'aide d'une règle CSS. 

Ensuite, dans la partie script de la page `index.html`, faites un `console.log` pour afficher ces éléments. Vous devriez voir vos éléments `<ul><li>` :

```js
let els = document.querySelectorAll('Votre_regles_css');
console.log(els);
```

**Remarque** : un `console.log` permet d'afficher un résultat dans l'inspecteur de votre navigateur. Faites un clic droit sur votre navigateur, puis cliquez sur "Inspecter" et sélectionnez "Console" dans l'onglet de l'inspecteur.

1. Maintenant, utilisez **querySelector**, qui permet de cibler un élément dans le DOM, et **innerHTML**, qui permet de modifier le contenu d'un élément HTML. Permutez les valeurs A, B et C. Attention, chaque valeur se trouve dans un sous-élément `<span>`. N'utilisez pas de boucle pour cette étape.

```txt
A = 3
B = 1
C = 2
```

**Remarque :**

- Aidez-vous du code suivant pour modifier la valeur du `<span>` :

```js
element.querySelector('span').innerHTML = 2;
```

- Pour accéder à une valeur d'un tableau en JS, vous utiliserez la syntaxe suivante :

```js
let myArray = [1, 2, 3];

myArray[0]; // 1
myArray[1]; // 2
myArray[2]; // 3
```

3. Utilisez maintenant une boucle JavaScript pour faire la même chose, permuter les valeurs A, B et C, mais cette fois-ci de manière automatisée. Utilisez également la méthode **length** pour obtenir la longueur du tableau.

```js
// Boucle JavaScript
for(let i = 0; i < 3; i++){
    console.log(i);
}

// Calculer la longueur d'un tableau
myArray.length;
```

---

## Exercice 02 : Créer des éléments

Récupérez le dossier **create_elem** récupérez : [create_elem.html](./create_elem.html).

Nous allons maintenant créer des éléments dans le DOM. La méthode **createElement** permet de créer un élément dans le DOM :

```js
let li = document.createElement('li');
```

Pour sélectionner un élément du DOM, vous pouvez utiliser **getElementById**, qui cible un identifiant d'une balise :

```js
let container = document.getElementById('numbers');
```

Puis, avec la fonction **appendChild**, vous ajoutez l'élément à ce nœud. L'élément créé se placera à la suite des autres éléments `<li>` :

```js
container.appendChild(li);
```

Créez 5 autres éléments à la suite des trois premiers (voir le fichier source pour commencer) en respectant l'ordre alphabétique et en incrémentant de +1 chacune des valeurs :

```txt
A = 1
B = 2
C = 3
D = 4
E = 5
F = 6
G = 7
H = 8
```

---

## Exercice 03 : Nombre de caractères (écouter un événement)

Récupérez le dossier **number_char_start** dans les [sources](./number_char_start.html).

Nous allons créer un formulaire pour saisir une phrase, puis, une fois que l'on cliquera sur le bouton "Calculer", nous afficherons le nombre de particules saisies.

Écoutez un événement… Utilisez le code suivant pour écouter les changements sur l'élément `input` du formulaire :

```js
let elInput = document.querySelector('.phrase');

// Fonction de callback que l'on passe à addEventListener
function eventInput(event){
    let value = event.target.value;
    console.log(value);
}

// On écoute les changements des inputs dans l'élément input
elInput.addEventListener('input', eventInput);
```

1. Affichez en temps réel le nombre de caractères dans la balise `result`.

2. Lorsqu'on clique sur "Calculer", affichez maintenant le nombre de particules que l'on a saisies dans le champ `input`. Utilisez le code source de l'exercice.

**Les questions suivantes sont facultatives.**

3. Gérez le cas où l'utilisateur saisit une chaîne de caractères vide et clique sur "Calculer". Affichez un message d'erreur dans ce cas.

4. L'utilisateur peut saisir des particules et introduire des espaces, ce qui fausse le calcul du nombre de particules. Trouvez une solution pour nettoyer la chaîne saisie afin de compter correctement le nombre de particules.

**Remarques pour cette dernière question** : On peut envisager un nettoyage plus approfondi, mais cela reste une question ouverte. Il nous manque certaines notions. Vous pourriez par exemple vérifier que chaque caractère de chaque particule est bien un caractère alphabétique…

