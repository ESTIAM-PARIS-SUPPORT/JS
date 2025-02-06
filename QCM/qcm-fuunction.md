### QCM : Les Fonctions Nommées en JavaScript  

#### **1. Quelle est la syntaxe correcte pour déclarer une fonction nommée en JavaScript ?**  
- [ ] `const maFonction = () => {}`  
- [ ] `function maFonction() {}`  
- [ ] `let maFonction = function {}`  
- [ ] `maFonction() => {}`  

---

#### **2. Que se passe-t-il si on appelle une fonction nommée avant sa déclaration ?**  
- [ ] Elle fonctionne grâce au hoisting.  
- [ ] Elle génère une erreur de référence.  
- [ ] Elle est ignorée par le moteur JavaScript.  
- [ ] Elle doit être définie avec `const` pour fonctionner.  

---

#### **3. Quel est un des avantages des fonctions nommées par rapport aux fonctions anonymes ?**  
- [ ] Elles apparaissent avec leur nom dans la stack trace lors du débogage.  
- [ ] Elles sont plus rapides à exécuter.  
- [ ] Elles ne peuvent pas être affectées à une variable.  
- [ ] Elles ne peuvent pas être utilisées dans la récursivité.  

---

#### **4. Quelle est la principale différence entre une fonction nommée et une fonction anonyme ?**  
- [ ] Les fonctions nommées sont hoistées, les fonctions anonymes ne le sont pas.  
- [ ] Les fonctions anonymes sont plus performantes.  
- [ ] Les fonctions nommées ne peuvent pas être affectées à une variable.  
- [ ] Les fonctions anonymes ne peuvent pas prendre de paramètres.  

---

#### **5. Quel est le résultat de ce code ?**  

```javascript
console.log(direBonjour());

function direBonjour() {
  return "Bonjour !";
}
```
- [ ] `"Bonjour !"`  
- [ ] `undefined`  
- [ ] Erreur : la fonction n’est pas définie  
- [ ] `null`  

---

#### **6. Quelle est la particularité des fonctions nommées en récursivité ?**  
- [ ] Elles peuvent s’appeler elles-mêmes grâce à leur propre nom.  
- [ ] Elles ne peuvent être utilisées qu’avec `return`.  
- [ ] Elles ne peuvent pas être utilisées en récursivité.  
- [ ] Elles doivent obligatoirement être déclarées dans une variable.  

---

#### **7. Pourquoi utiliser une fonction nommée dans un gestionnaire d'événement au lieu d'une fonction anonyme ?**  
- [ ] Pour pouvoir la réutiliser et la retirer avec `removeEventListener`.  
- [ ] Pour économiser de la mémoire.  
- [ ] Parce que les fonctions anonymes ne fonctionnent pas dans les événements.  
- [ ] Pour éviter les erreurs de syntaxe.  
