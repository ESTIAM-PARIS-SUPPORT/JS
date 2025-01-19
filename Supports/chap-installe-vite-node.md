# **Étape 1 : Installer Node.js LTS**

### Télécharger et installer Node.js
1. Rendez-vous sur [https://nodejs.org/](https://nodejs.org/).
2. Téléchargez la version **LTS** (Long Term Support) adaptée à votre système d'exploitation.
3. Installez Node.js en suivant les instructions.

### Vérifier l'installation
Après l'installation, ouvrez un terminal et tapez les commandes suivantes pour vérifier que Node.js et `npm` (Node Package Manager) sont bien installés :

```bash
node -v
```
Cela affichera la version de Node.js.

```bash
npm -v
```
Cela affichera la version de `npm`.

---

## **Étape 2 : Créer un projet avec Vite.js**

### Commande pour créer un projet
Dans le terminal, utilisez la commande suivante pour créer un projet React avec Vite.js :

```bash
npm create vite@latest my-react-app
```

- **Remplacez `my-react-app`** par le nom de votre projet.
- Vous serez invité à choisir un framework. Sélectionnez :
  - **React**
  - Ensuite, choisissez **JavaScript** ou **TypeScript** selon vos préférences.

### Naviguer dans le dossier du projet
Une fois le projet créé, entrez dans son répertoire :
```bash
cd my-react-app
```

---

## **Étape 3 : Installer les dépendances**

Installez les dépendances nécessaires avec la commande :
```bash
npm install
```

---

## **Étape 4 : Lancer le serveur de développement**

Pour démarrer le serveur de développement, exécutez :
```bash
npm run dev
```

- Le terminal affichera une URL (par exemple, `http://localhost:5173`).
- Ouvrez cette URL dans votre navigateur pour voir votre application React.

## **Tailwind CSS avec React**

Avant d'installer Tailwind CSS, assurez-vous d'avoir suivi ces étapes :  
1. Créé un projet avec Vite.js et React (comme mentionné plus haut).  
2. Les dépendances sont installées (`npm install`).

---

## **Étape 2 : Installer Tailwind CSS**

Exécutez la commande suivante pour installer Tailwind CSS et ses dépendances nécessaires :
```bash
npm install tailwindcss postcss autoprefixer
```

Ensuite, initialisez la configuration de Tailwind CSS avec :
```bash
npx tailwindcss init
```

---

## **Étape 3 : Configurer Tailwind CSS**

1. Un fichier `tailwind.config.cjs` a été généré. Ouvrez-le et configurez le chemin des fichiers pour que Tailwind puisse analyser votre code :

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

2. Créez ou modifiez le fichier `postcss.config.cjs` (il est parfois généré automatiquement lors de l'installation) :

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## **Étape 4 : Ajouter Tailwind CSS à votre projet**

Ajoutez les directives Tailwind CSS dans le fichier `src/index.css` (ou créez ce fichier si nécessaire) :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Assurez-vous que ce fichier `index.css` est importé dans votre application, généralement dans `src/main.jsx` :

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'; // Import du fichier Tailwind CSS

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## **Étape 5 : Démarrer le serveur de développement**

Lancez votre serveur de développement pour voir Tailwind CSS en action :
```bash
npm run dev
```

---

## **Étape 6 : Tester Tailwind CSS**

Pour vérifier si Tailwind fonctionne correctement :  
1. Modifiez le fichier `App.jsx` pour inclure quelques classes Tailwind :
```jsx
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello, Tailwind CSS!
      </h1>
    </div>
  );
}

export default App;
```

2. Rechargez la page dans votre navigateur. Vous devriez voir un texte centré avec les styles appliqués.

