#  Machine Learning

Le machine learning est une branche de l'intelligence artificielle qui permet aux ordinateurs d'apprendre à partir de données sans être explicitement programmés. Les algorithmes de machine learning construisent des modèles à partir de données pour faire des prédictions ou prendre des décisions. Ils s'améliorent avec l'expérience, c'est-à-dire avec l'accumulation de données, en ajustant leurs paramètres pour minimiser les erreurs de prédiction. Le machine learning est utilisé dans divers domaines, tels que la reconnaissance d'images, le traitement du langage naturel, et les systèmes de recommandation.

#### Apprentissage Supervisé vs Non Supervisé

- **Apprentissage Supervisé** : L'algorithme apprend à partir de données étiquetées.
  - Exemple : Classification d'emails en spam ou non spam.

- **Apprentissage Non Supervisé** : L'algorithme trouve des structures cachées dans des données non étiquetées.
  - Exemple : Regroupement de clients selon leurs comportements d'achat.

```plaintext
+---------------------+       +---------------------+
| Apprentissage       |       | Apprentissage       |
| Supervisé           |       | Non Supervisé       |
| (Données étiquetées)|       | (Données non        |
|                     |       | étiquetées)         |
+---------------------+       +---------------------+
| Ex: Classification |       | Ex: Clustering      |
| d'emails           |       | de clients          |
+---------------------+       +---------------------+
```

### 2. Étapes d'un Projet de Machine Learning

Les étapes typiques d'un projet de machine learning peuvent être représentées comme suit :

```plaintext
Collecte de Données → Préparation des Données → Choix du Modèle → Entraînement → Évaluation → Optimisation → Déploiement
```

### 3. Exemple : Régression Linéaire

#### Visualisation des Données

Imaginons un graphique où nous avons la taille des maisons sur l'axe X et le prix des maisons sur l'axe Y.

```plaintext
Prix de la maison
  ^
  |                           o
  |                     o
  |          o                         o
  |                     o
  | o                                      o
  +-------------------------------------------------->
                      Taille de la maison
```

#### Régression Linéaire

L'objectif est de trouver une ligne qui représente au mieux la relation entre la taille et le prix des maisons.

```plaintext
Prix de la maison
  ^
  |                           o
  |                     o
  |          o                         o
  |                     o
  | o                                      o
  +-------------------------------------------------->
                      Taille de la maison

  Ligne de régression : y = mx + b
```

### 4. Évaluation du Modèle

L'erreur quadratique moyenne (MSE) est une mesure courante pour évaluer la performance d'un modèle de régression.

```plaintext
MSE = (1/n) * Σ(y_i - ŷ_i)^2
```

- **y_i** : Valeur réelle
- **ŷ_i** : Valeur prédite
- **n** : Nombre de points de données

### Conclusion

Ces schémas illustrent les concepts de base du machine learning et montrent comment un modèle simple comme la régression linéaire peut être utilisé pour faire des prédictions. Le machine learning est un domaine riche et varié, et ces concepts constituent une base solide pour explorer des techniques plus avancées.