# **La boucle d'événements (Event Loop)**

JavaScript est un langage à **thread unique**, ce qui signifie qu'il peut exécuter une seule tâche à la fois. Cependant, grâce à la **boucle d'événements** (Event Loop), JavaScript est capable de gérer des opérations asynchrones, comme les requêtes API, les temporisateurs (setTimeout), ou les clics d'utilisateur, de manière non-bloquante.

La boucle d'événements fonctionne ainsi :

1. **Pile d'exécution** (Call Stack) : C'est là où les fonctions sont exécutées. Lorsque JavaScript rencontre une instruction, elle est ajoutée à la pile d'exécution.
2. **File d'attente (Callback Queue)** : Lorsque des événements asynchrones, comme les événements DOM ou des requêtes réseau, se produisent, leur gestionnaire est placé dans cette file d'attente.
3. **Boucle d'événements** : JavaScript vérifie la pile d'exécution et la file d'attente. Si la pile est vide, il déplace une fonction de la file d'attente vers la pile d'exécution pour la traiter.

[event loop](./images/event-loop.png)

#### Exemple simple de la boucle d'événements

```js
console.log('Début');

setTimeout(() => {
  console.log('Délai 1');
}, 2000);

setTimeout(() => {
  console.log('Délai 2');
}, 1000);

console.log('Fin');
```

**Sortie** :
```
Début
Fin
Délai 2
Délai 1
```

**Explication** :
- "Début" est loggé immédiatement.
- Ensuite, `setTimeout` programme deux fonctions pour être exécutées après 2 et 1 seconde respectivement.
- Cependant, la boucle d'événements permet à "Fin" de s'afficher avant que les `setTimeout` ne soient exécutés, car ceux-ci sont placés dans la file d'attente après les 2000 et 1000 millisecondes.
- Une fois la pile vide, la boucle d'événements déplace les fonctions de la file d'attente vers la pile d'exécution, ce qui explique l'ordre d'exécution des `setTimeout`.

### **Gestion de l'asynchrone avec les Promesses et `async/await`**

Les **Promesses** sont un autre mécanisme essentiel pour gérer l'asynchronisme en JavaScript. Une promesse représente la valeur d'une opération qui n'a pas encore été résolue, mais qui le sera dans le futur.

#### Exemple avec une Promesse

```js
console.log('Début');

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Délai de la promesse');
  }, 1500);
});

promise.then((result) => {
  console.log(result); // Affiche 'Délai de la promesse' après 1,5 seconde
});

console.log('Fin');
```

**Sortie** :
```
Début
Fin
Délai de la promesse
```

**Explication** :
- La promesse est définie pour être résolue après 1,5 seconde.
- "Début" et "Fin" sont loggés immédiatement car la promesse est asynchrone.
- Une fois que la promesse est résolue, la fonction `then` est exécutée, affichant "Délai de la promesse".

#### Exemple avec `async/await`

La syntaxe `async/await` permet de rendre l'asynchronous plus lisible et proche du comportement synchrone.

```js
console.log('Début');

async function fetchData() {
  let result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Données récupérées');
    }, 2000);
  });
  console.log(result);
}

fetchData();

console.log('Fin');
```

**Sortie** :
```
Début
Fin
Données récupérées
```

**Explication** :
- `await` suspend l'exécution de la fonction `fetchData` jusqu'à ce que la promesse soit résolue.
- Comme la promesse prend 2 secondes pour être résolue, "Fin" est loggé avant "Données récupérées", même si l'appel à `fetchData` a lieu avant.

### **Événements et boucles asynchrones**

La boucle d'événements est un concept clé dans la gestion des événements en JavaScript. Voici un exemple d'interaction entre des événements DOM et des mécanismes asynchrones.

#### Exemple : Interaction utilisateur et gestion asynchrone

```html
<button id="clickButton">Cliquez ici</button>
<p id="message"></p>

<script>
  const button = document.getElementById('clickButton');
  const message = document.getElementById('message');

  button.addEventListener('click', async () => {
    message.innerText = 'Attente des données...';

    // Simule une opération asynchrone (comme une requête réseau)
    await new Promise(resolve => setTimeout(resolve, 2000));

    message.innerText = 'Données chargées !';
  });
</script>
```

**Explication** :
- Lorsque l'utilisateur clique sur le bouton, un message est affiché.
- Ensuite, une opération asynchrone est simulée avec `setTimeout` et `await`. Pendant ce délai de 2 secondes, JavaScript continue d'exécuter d'autres tâches dans la boucle d'événements.
- Une fois l'attente terminée, le message est mis à jour pour informer l'utilisateur.

### **Optimisation et bonnes pratiques**

#### **Debouncing et Throttling**
Les événements peuvent se déclencher fréquemment, comme dans le cas du défilement de page ou des saisies dans un champ de texte. Pour éviter des appels répétitifs coûteux, il est possible d'utiliser des techniques de **debouncing** ou de **throttling**.

- **Debouncing** : Attendre qu'une période d'inactivité soit atteinte avant de traiter un événement (par exemple, ne pas envoyer une requête de recherche à chaque frappe mais après une période sans frappe).
- **Throttling** : Limiter le nombre d'événements qui sont traités, même si ces événements sont déclenchés fréquemment.

#### Exemple de debouncing :

```js
let timeout;

document.getElementById('searchInput').addEventListener('input', function(event) {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log('Recherche:', event.target.value);
  }, 300); // Attente de 300ms avant d'exécuter la recherche
});
```

---

### **Conclusion sur la boucle d'événements et l'asynchrone**

La gestion des événements et de l'asynchronisme via la boucle d'événements est cruciale pour rendre vos applications interactives et réactives. Le JavaScript moderne, avec des outils comme les Promesses et `async/await`, facilite la gestion des opérations longues tout en permettant une expérience utilisateur fluide.
