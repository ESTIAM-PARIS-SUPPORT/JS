# Deep Learning 

Le deep learning est une branche du machine learning qui utilise des réseaux de neurones profonds pour apprendre des représentations hiérarchiques des données. Ces réseaux sont capables de modéliser des relations complexes et sont utilisés dans diverses applications comme la reconnaissance d'images, le traitement du langage naturel, etc.

### Composants Clés du Deep Learning

#### 1. Neurones et Couches

- **Neurone** : L'unité de base d'un réseau de neurones. Il prend des entrées, les pondère, applique une fonction d'activation, et produit une sortie.

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

- **Couche** : Un ensemble de neurones. Les réseaux de neurones profonds ont plusieurs couches empilées les unes sur les autres.

```plaintext
Couche d'entrée → Couches cachées → Couche de sortie
```

#### 2. Types de Couches

- **Couche d'Entrée** : La première couche qui reçoit les données d'entrée.
- **Couches Cachées** : Les couches entre l'entrée et la sortie, où se déroule la majeure partie de l'apprentissage.
- **Couche de Sortie** : La dernière couche qui produit la sortie finale du réseau.

#### 3. Fonctions d'Activation

Les fonctions d'activation introduisent la non-linéarité dans le modèle, permettant au réseau d'apprendre des relations complexes.

- **Sigmoïde** : \( f(x) = \frac{1}{1 + e^{-x}} \)
- **Tanh** : \( f(x) = \tanh(x) \)
- **ReLU** : \( f(x) = \max(0, x) \)

### Exemple : Réseau de Neurones pour la Classification d'Images

Nous allons utiliser un réseau de neurones simple pour classer des images de chiffres manuscrits (MNIST).

#### Étape 1 : Importer les Bibliothèques

```python
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.datasets import mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten
from tensorflow.keras.utils import to_categorical
```

#### Étape 2 : Charger et Préparer les Données

```python
# Charger les données MNIST
(X_train, y_train), (X_test, y_test) = mnist.load_data()

# Normaliser les données
X_train = X_train / 255.0
X_test = X_test / 255.0

# Convertir les étiquettes en one-hot encoding
y_train = to_categorical(y_train)
y_test = to_categorical(y_test)
```

#### Étape 3 : Construire le Modèle

```python
model = Sequential([
    Flatten(input_shape=(28, 28)),  # Aplatir l'image 28x28 en un vecteur de 784 éléments
    Dense(128, activation='relu'),   # Couche cachée avec 128 neurones et activation ReLU
    Dense(10, activation='softmax') # Couche de sortie avec 10 neurones (pour les 10 chiffres) et activation softmax
])
```

#### Étape 4 : Compiler le Modèle

```python
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```

#### Étape 5 : Entraîner le Modèle

```python
model.fit(X_train, y_train, epochs=5, batch_size=32, validation_split=0.2)
```

#### Étape 6 : Évaluer le Modèle

```python
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f'Précision sur les données de test : {test_acc}')
```

### Conclusion

Le deep learning permet de résoudre des problèmes complexes en apprenant des représentations hiérarchiques des données. Les réseaux de neurones profonds sont capables de capturer des motifs complexes et sont utilisés dans une variété d'applications, de la reconnaissance d'images à la traduction automatique.

Ce cours couvre les bases du deep learning et illustre comment construire un réseau de neurones simple pour la classification d'images. Le domaine du deep learning est vaste et en constante évolution, avec de nombreuses architectures et techniques à explorer.