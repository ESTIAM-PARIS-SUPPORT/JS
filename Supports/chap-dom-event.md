# **Événements et gestionnaires d'événements**

Le DOM permet également d'interagir avec les utilisateurs grâce aux événements (comme les clics, les frappes clavier, etc.). Il est essentiel de savoir comment attacher un gestionnaire d'événements à un élément pour réagir à ces interactions.

#### Exemple : Ajouter un gestionnaire d'événement pour un clic

```html
<button id="clickButton">Cliquez ici</button>

<script>
  const button = document.getElementById('clickButton');

  // Ajouter un gestionnaire d'événement pour le clic
  button.addEventListener('click', function() {
    alert('Le bouton a été cliqué !');
  });
</script>
```

### **Création et gestion de nouveaux éléments dans le DOM**

Il est possible de créer de nouveaux éléments et de les ajouter dynamiquement dans la structure de la page. Cela peut être très utile pour des fonctionnalités comme la gestion de listes d'éléments.

#### Exemple : Ajouter des éléments de manière dynamique

```html
<ul id="list"></ul>
<button id="addButton">Ajouter un élément</button>

<script>
  const list = document.getElementById('list');
  const addButton = document.getElementById('addButton');

  addButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.innerText = 'Nouvel élément';
    list.appendChild(newItem); // Ajouter le nouvel élément à la liste
  });
</script>
```

### 01 Exercice 

Créez un bouton `add` dans la page pour ajouter un paragraphe dans le div#root princpal de la page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add paragraphe</title>
</head>
<body>
    <button id="btn">Add paragraphe</button>
    <div id="root"></div>
 <script>
    const root = document.getElementById('root');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        const p = document.createElement('p');
        root.innerHTML = "";
        p.innerText = "Bonjour je suis un paragraphe " + Math.floor( Math.random() * 10 );
        root.appendChild(p)
    });
 </script>
</body>
</html>
```

### 02 Exercice

Bien comprendre avant ce qu'est une fonction.

1. Voici une liste de valeurs dans un tableau, affichez ces éléments dans une liste `ul.li`
   ```js
    let numbers = [1,2,3,4,5];
   ```
2. Créez un bouton `shuffle`  permettant de mélanger ces valeurs.
   Utilisez cette fonction pour mélanger ces valeurs dans votre script.
   ```js
   function shuffle(num){
    num.sort(_ => Math.random() - .5 );

    return num;
   }
   ```
   Pour supprimer des éléments vous pouvez utiliser la méthode suivante

   ```js
   // supprime tous les lis
   const ul = document.querySelector('#root > ul');
   ul.innerHTML = ''
   ```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add paragraphe</title>
</head>
<body>
    <button id="btn">Shuffle</button>
    <div id="root"><ul></ul></div>
 <script>
  const rootUl = document.querySelector('#root > ul');
  const btn = document.getElementById('btn');
  const fragment = document.createDocumentFragment(); // optimisé
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
  // initialisation (voir la fonction plus bas)
  createList(numbers);

   // mélange des valeurs d'un tableau numérique
  function shuffle(num) {
      num.sort(_ => Math.random() - .5);
  
      return num;
  }
  function createList(numbers){
      numbers.forEach(function (number) {
          const li = document.createElement("li");
          li.textContent = number;
          fragment.appendChild(li); // touche pas au DOM
      });
      
      rootUl.appendChild(fragment);
  }
  
  // event
  btn.addEventListener('click', function () {
      rootUl.innerHTML = "";
      shuffle(numbers); // on mélange les nombres
      createList(numbers); // on recrée les éléments
  });
   </script>
  </body>
</html>
```

### **Événements de formulaire**

Vous pouvez aussi interagir avec des formulaires et récupérer ou valider les données saisies par l'utilisateur. Les formulaires HTML sont une partie importante du DOM.

#### Exemple : Soumettre un formulaire avec validation

```html
<form id="myForm">
  <input type="text" id="username" placeholder="Entrez votre nom">
  <input type="submit" value="Soumettre">
</form>

<script>
  const form = document.getElementById('myForm');
  
  form.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    
    if (!username) {
      alert('Le nom est requis');
      event.preventDefault(); // Empêche la soumission du formulaire si le champ est vide
    } else {
      alert('Formulaire soumis avec succès');
    }
  });
</script>
```

### Exercice 

1. Créez un formulaire pour ajouter des noms, puis affichez ces noms dans une liste `ul.li`

### **Le DOM et les performances**

Lorsque vous travaillez avec de nombreux éléments ou effectuez des manipulations fréquentes du DOM, il est important de prendre en compte les performances. Trop de manipulations directes peuvent ralentir l'application.

- **Batching des modifications** : Essayez de regrouper vos manipulations dans un seul "repaint" pour éviter des recalculs multiples du rendu.
- **Utilisation de `documentFragment`** : Lors de l'ajout d'un grand nombre d'éléments, l'utilisation d'un `documentFragment` peut améliorer les performances, car il permet de faire des modifications en dehors du DOM principal avant de les insérer.

#### Exemple : Utiliser `documentFragment` pour ajouter plusieurs éléments

```html
<ul id="list"></ul>
<button id="addButton">Ajouter des éléments</button>

<script>
  const list = document.getElementById('list');
  const addButton = document.getElementById('addButton');

  addButton.addEventListener('click', function() {
    const fragment = document.createDocumentFragment(); // Crée un fragment pour les ajouts

    for (let i = 0; i < 100; i++) {
      const newItem = document.createElement('li');
      newItem.innerText = `Élément ${i + 1}`;
      fragment.appendChild(newItem); // Ajoute au fragment, pas encore au DOM
    }

    list.appendChild(fragment); // Insère tous les éléments en une seule fois
  });
</script>
```

