# **Cours sur le DOM en JavaScript**

## **1. Introduction au DOM**
Le **DOM** (*Document Object Model*) est une interface de programmation qui permet aux scripts, comme JavaScript, d'interagir avec les pages web. Il représente la structure du document sous forme d'un arbre hiérarchique, où chaque élément HTML est un **nœud**.

### **Définition du DOM**
Le DOM est une représentation **objet** d'un document HTML ou XML. Il permet à JavaScript de manipuler dynamiquement le contenu, la structure et le style d'une page web.

### **L'arborescence du DOM**
Lorsqu'un navigateur charge une page web, il transforme le code HTML en une **arborescence** de nœuds, où :
- **L'élément racine** est `document` (qui représente la page entière).
- **Les éléments HTML** sont organisés en une structure imbriquée.
- **Les attributs** et **les textes** sont aussi des nœuds.

Exemple d'un document HTML :
```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemple DOM</title>
</head>
<body>
    <h1 id="titre">Bienvenue</h1>
    <p class="description">Ceci est un paragraphe.</p>
</body>
</html>
```
L'arborescence DOM correspondante :
```
document
 └── html
     ├── head
     │   ├── title
     │   │   └── "Exemple DOM"
     ├── body
         ├── h1 (id="titre")
         │   └── "Bienvenue"
         ├── p (class="description")
             └── "Ceci est un paragraphe."
```

## **2. L'objet `document`**
L'objet `document` est le point d'entrée principal pour manipuler le DOM. Il permet d'accéder aux éléments, de modifier leur contenu et d'écouter des événements.

### **Quelques propriétés utiles de `document`**
- `document.title` → Modifie ou récupère le titre de la page.
- `document.body` → Accède au corps (`<body>`) de la page.
- `document.documentElement` → Représente l'élément racine (`<html>`).
- `document.URL` → Récupère l'URL actuelle.

Exemple :
```js
console.log(document.title);  // Affiche "Exemple DOM"
document.title = "Nouveau Titre"; // Modifie le titre
```

## **3. Sélection d'éléments dans le DOM**
### **Méthodes de sélection**
JavaScript permet de récupérer des éléments HTML avec différentes méthodes :

| Méthode                        | Description |
|---------------------------------|------------|
| `document.getElementById(id)`   | Sélectionne un élément par son `id`. |
| `document.getElementsByClassName(class)` | Sélectionne plusieurs éléments avec une classe. |
| `document.getElementsByTagName(tag)` | Sélectionne plusieurs éléments par leur balise (`h1`, `p`, etc.). |
| `document.querySelector(cssSelector)` | Sélectionne **le premier** élément correspondant au sélecteur CSS. |
| `document.querySelectorAll(cssSelector)` | Sélectionne **tous** les éléments correspondant au sélecteur CSS. |

Exemple :
```js
let titre = document.getElementById("titre");
console.log(titre.innerText); // "Bienvenue"

let paragraphe = document.querySelector(".description");
console.log(paragraphe.innerText); // "Ceci est un paragraphe."
```

## **4. Modification du DOM**
### **Modifier le contenu d'un élément**
- `element.innerText` → Modifie le texte d'un élément.
- `element.innerHTML` → Modifie le contenu HTML.

Exemple :
```js
let titre = document.getElementById("titre");
titre.innerText = "Bienvenue sur mon site"; // Change le texte du h1

let paragraphe = document.querySelector(".description");
paragraphe.innerHTML = "<strong>Texte en gras</strong>"; // Ajoute du HTML
```

### **Modifier les styles CSS**
- `element.style.property` → Modifie une propriété CSS.

Exemple :
```js
titre.style.color = "blue"; // Change la couleur du titre
titre.style.fontSize = "24px"; // Modifie la taille du texte
```

## **5. Création et suppression d'éléments**
### **Créer un élément et l'ajouter au DOM**
- `document.createElement(tagName)` → Crée un nouvel élément HTML.
- `parent.appendChild(child)` → Ajoute un élément enfant.

Exemple :
```js
let nouveauParagraphe = document.createElement("p");
nouveauParagraphe.innerText = "Paragraphe ajouté dynamiquement";
document.body.appendChild(nouveauParagraphe);
```

### **Supprimer un élément**
- `element.remove()` → Supprime un élément du DOM.

Exemple :
```js
nouveauParagraphe.remove(); // Supprime le paragraphe ajouté
```

## **6. Gestion des événements**
### **Ajouter un événement à un élément**
- `element.addEventListener(event, function)` → Attache un événement.

Exemple :
```js
let bouton = document.createElement("button");
bouton.innerText = "Cliquez-moi";
document.body.appendChild(bouton);

bouton.addEventListener("click", function() {
    alert("Bouton cliqué !");
});
```

### **Quelques événements courants**
| Événement     | Description |
|--------------|------------|
| `click`      | Clic sur un élément. |
| `mouseover`  | Passage de la souris sur un élément. |
| `mouseout`   | Sortie de la souris d'un élément. |
| `keydown`    | Appui sur une touche du clavier. |
| `submit`     | Soumission d'un formulaire. |

## **7. Exemple d'interaction dynamique**
Voici un petit script qui change le texte d'un paragraphe lorsqu'on clique sur un bouton :

### **HTML :**
```html
<button id="changeText">Changer le texte</button>
<p id="text">Texte d'origine</p>
```

### **JavaScript :**
```js
let bouton = document.getElementById("changeText");
let texte = document.getElementById("text");

bouton.addEventListener("click", function() {
    texte.innerText = "Texte modifié !";
});
```

## **8. Conclusion**
Le DOM est une interface essentielle pour manipuler les pages web en JavaScript. Grâce à lui, on peut :
- Accéder aux éléments HTML.
- Modifier leur contenu et leurs styles.
- Ajouter ou supprimer des éléments.
- Gérer des événements utilisateurs.
