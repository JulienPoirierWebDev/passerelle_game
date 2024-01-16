# Etapes pour créer un Picross / Nonogram

## Étape 1 : Composants UI et Structure de Base

### Création des Composants :

- PicrossGame: Composant principal du jeu.
  - Il doit contenir la logique du jeu.
- Grid: Composant pour afficher la grille de jeu.
- GridRow : Composant contenur une ligne de cellules de la grille. Doit accepter entre 5 et XX GridCell pour avoir une grille a taille variable. Au départ, partir du principe que ce sont des grilles de 10 / 10 cases.
- GridCell: Composant pour chaque cellule de la grille.
  - Elle doit avoir plusieurs états : vide, colorié, grisé/cochée. Eventuellement, un état "erreur", lorsque l'utilisateur colorie une case qui ne devrait pas l'être.
  - Elle doit être cliquable ou non, lorsque
- Hints: Composants pour afficher les indices de lignes et colonnes.
- ClickMode : Il doit pouvoir prendre deux valeurs : coloriage ou "grisage"/cochage, selon si l'utilisateur souhaite colorier des cases ou bien les griser/cocher.

### Styling : Appliquer des styles pour imiter l'apparence d'un jeu Picross.

## Étape 2 : Configuration de Redux

- Configurer le store Redux.
- Créer un picrossSlice pour gérer l'état du jeu.
  - la grille de jeu
  - l'état de chaque cellule.
  - le mode en cours (coloriage ou cochage)
  - Jeu en cours / terminé
- Définir des actions Redux pour les interactions dans le jeu.
  - Charger une grille.
  - Changer le statut d'une case.
  - Enregistrer une erreur.
  - Changer le status du jeu : en cours / terminé.

## Étape 3 : Logique des Composants

### Grid et GridCell :

- Implémenter la logique pour afficher la grille et permettre aux utilisateurs de remplir ou marquer les cellules.

### Hints :

- Afficher les indices pour chaque ligne et colonne et mettre à jour leur état selon la progression du joueur.

## Étape 4 : Algorithmes et Règles du Jeu

### Génération de la Grille :

- Créer une grille avec une solution prédéfinie. Envisagé la solution aléatoire si a l'aise avec le projet (dans un 2e temps), mais on perd le coté "dessin".

### Validation de la Grille :

- Développer un algorithme pour valider les lignes et les colonnes en fonction des indices :
  - Cela peut être a chaque case "coloriée" (on peut ajouter un compteur de vie, pour avoir un nombre d'erreurs possible avant la fin de la partie)
  - D'autres méthodes peuvent être envisagées : a la validation totale de la grille, pour jouer "sans filet"

### Mécanique de Jeu :

- Permettre aux utilisateurs de remplir ou de marquer des cellules (et de vérifier leur choix contre la solution).

## Étape 5 : Gestion de l'État avec Redux

- Gérer l'état de la grille, des indices, et des choix des utilisateurs via Redux.
- Utiliser les sélecteurs Redux pour récupérer l'état dans les composants React.
- Gérer l'état du jeu (en cours, terminé, bloqué).

## Étape 6 : Finitions et Tests

- Peaufiner l'interface utilisateur pour une expérience agréable.
- Ajouter des fonctionnalités comme des indices supplémentaires ou un système d'aide (résolution aléatoire d'une case ?)
- Tester l'application pour assurer la fiabilité de la logique du jeu.
