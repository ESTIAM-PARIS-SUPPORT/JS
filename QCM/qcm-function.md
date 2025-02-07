### QCM : Les Fonctions Nommées en JavaScript  

#### **1. Quelle est la syntaxe correcte pour déclarer une fonction nommée en JavaScript ?**  
- [ ] `const maFonction = () => {}`  
- [x] `function maFonction() {}`  
- [ ] `let maFonction = function {}`  
- [ ] `maFonction() => {}`  

---

#### **2. Que se passe-t-il si on appelle une fonction nommée avant sa déclaration ?**  
- [x] Elle fonctionne grâce au hoisting.  
- [ ] Elle génère une erreur de référence.  
- [ ] Elle est ignorée par le moteur JavaScript.  
- [ ] Elle doit être définie avec `const` pour fonctionner.  

---

#### **3. Quelle est la principale différence entre une fonction nommée et une fonction anonyme ?**  
- [x] Les fonctions nommées sont hoistées, les fonctions anonymes ne le sont pas.  
- [ ] Les fonctions anonymes sont plus performantes.  
- [ ] Les fonctions nommées ne peuvent pas être affectées à une variable.  
- [ ] Les fonctions anonymes ne peuvent pas prendre de paramètres.  

---

#### **4. Quel est le résultat de ce code ?**  

```javascript
console.log(direBonjour());

function direBonjour() {
  return "Bonjour !";
}
```
- [x] `"Bonjour !"`  
- [ ] `undefined`  
- [ ] Erreur : la fonction n’est pas définie  
- [ ] `null`  

