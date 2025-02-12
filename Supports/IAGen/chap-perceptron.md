# Perceptron 

Le perceptron est un algorithme simple d'apprentissage supervisé utilisé pour la classification binaire, c'est-à-dire pour décider si une entrée appartient à une classe ou à une autre. Il a été inventé par Frank Rosenblatt en 1957 et est considéré comme l'unité de base des réseaux de neurones artificiels.

### Comment Fonctionne un Perceptron ?

1. **Entrées et Poids** : Le perceptron prend plusieurs entrées (caractéristiques) et les multiplie par des poids.
2. **Somme Pondérée** : Il calcule la somme pondérée des entrées.
3. **Fonction d'Activation** : La somme pondérée passe par une fonction d'activation (souvent une fonction de seuil) pour produire la sortie.
4. **Mise à Jour des Poids** : Les poids sont ajustés en fonction de l'erreur entre la sortie prédite et la sortie réelle.

### Schéma d'un Perceptron

```plaintext
Entrées : x1, x2, ..., xn
   |       |       |       |
   v       v       v       v
Poids : w1, w2, ..., wn   Biais : b
   |       |       |       |
   +-----------------------+
           Somme pondérée
               |
               v
     Fonction d'activation
               |
               v
          Sortie : y
```

### Exemple : Classification Binaire avec un Perceptron

Imaginons que nous voulons classifier des points dans un plan 2D en deux catégories.

#### Étape 1 : Importer les Bibliothèques

```python
import numpy as np
import matplotlib.pyplot as plt
```

#### Étape 2 : Générer des Données

Créons des données synthétiques pour deux classes.

```python
# Générer des données synthétiques
np.random.seed(0)
X = np.array([[0.2, 0.4], [0.4, 0.7], [0.6, 0.5], [0.8, 0.9], [0.3, 0.6], [0.5, 0.8]])
y = np.array([0, 0, 0, 1, 1, 1])

# Visualiser les données
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='bwr')
plt.xlabel('Caractéristique 1')
plt.ylabel('Caractéristique 2')
plt.title('Données de Classification')
plt.show()
```

#### Étape 3 : Implémenter le Perceptron

Implémentons un perceptron simple.

```python
class Perceptron:
    def __init__(self, learning_rate=0.1, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.activation_function = self.unit_step_func
        self.weights = None
        self.bias = None

    def unit_step_func(self, x):
        return np.where(x >= 0, 1, 0)

    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0

        for _ in range(self.n_iterations):
            for idx, x_i in enumerate(X):
                linear_output = np.dot(x_i, self.weights) + self.bias
                y_predicted = self.activation_function(linear_output)

                update = self.learning_rate * (y[idx] - y_predicted)
                self.weights += update * x_i
                self.bias += update

    def predict(self, X):
        linear_output = np.dot(X, self.weights) + self.bias
        y_predicted = self.activation_function(linear_output)
        return y_predicted
```

#### Étape 4 : Entraîner le Perceptron

Entraînons le perceptron avec nos données.

```python
perceptron = Perceptron(learning_rate=0.1, n_iterations=1000)
perceptron.fit(X, y)
```

#### Étape 5 : Faire des Prédictions

Utilisons le perceptron pour faire des prédictions.

```python
y_pred = perceptron.predict(X)
print("Prédictions :", y_pred)
```

#### Étape 6 : Visualiser les Résultats

Visualisons les résultats et la frontière de décision.

```python
# Tracer la frontière de décision
x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1
xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.01),
                     np.arange(y_min, y_max, 0.01))
Z = perceptron.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)

plt.contourf(xx, yy, Z, alpha=0.3, cmap='bwr')
plt.scatter(X[:, 0], X[:, 1], c=y, edgecolors='k', cmap='bwr')
plt.xlabel('Caractéristique 1')
plt.ylabel('Caractéristique 2')
plt.title('Frontière de Décision du Perceptron')
plt.show()
```

### Conclusion

Le perceptron est un modèle simple mais fondamental dans le domaine des réseaux de neurones. Il illustre comment les neurones artificiels peuvent être utilisés pour la classification binaire. Bien que simple, le perceptron pose les bases pour des modèles plus complexes comme les réseaux de neurones multicouches.