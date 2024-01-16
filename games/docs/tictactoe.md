## Étape 1 : Composants UI et Structure

### Composants à créer :

- TicTacToeGame: Composant principal qui encapsule le jeu et sa logique.
- GameBoard: Composant pour le plateau de jeu.
  - Composé de BoardCell. Peut être de row aussi, selon le CSS retenu (flex ou grid)
- BoardCell: Composant pour chaque cellule du plateau.
  - Elle doit pouvoir prendre plusieurs états : vide, X ou O.
  - Elle doit être cliquable ou non (en lien avec son contenu ou avec l'état du jeu - en cours ou non)
- GameStatus: Composant pour afficher l'état actuel du jeu:
  - tour du joueur
  - victoire
  - match nul

### Styling : Appliquer des styles pour donner une apparence attrayante au plateau de jeu et aux cellules.

## Étape 2 : Configuration de Redux

- Configurer le store Redux.
- Créer un ticTacToeSlice pour gérer l'état du jeu.
  Qu'est-ce qu'on stocke ?
  - Le plateau de jeu
  - le contenu de chaque case
  - le joueur dont c'est le tour
  - si le jeu est en cours
  - s'il y a un gagnant, etc.
- Définir des actions pour gérer les clics sur les cellules et le suivi du tour:
  - Charger une grille vide (par défaut ?)
  - enregistrer un coup (quel joueur, quel case)
  - dire s'il y a un gagnant
  - changer le joueur en cours.

## Étape 3 : Logique des Composants

### GameBoard et BoardCell :

- Implémenter la grille de jeu 3x3.
- Permettre aux joueurs de cliquer sur une cellule pour placer leur symbole (X ou O).

### GameStatus :

- Afficher le joueur actuel et l'état du jeu (en cours, victoire, match nul).

## Étape 5 : Règles du Jeu et Logique

### Détection de la Victoire :

Écrire un algorithme pour vérifier si un joueur a gagné après chaque coup (il y a 8 cas possibles de victoire : 3 victoires verticales, 3 victoires horizontales, 2 victoires diagonales).

### Gestion des Tours :

- Alterner entre les joueurs après chaque coup valide.

### Conditions de Match Nul :

- Détecter un match nul lorsque toutes les cellules sont remplies sans qu'un joueur n'ait gagné.

## Étape 5 : Gestion de l'État avec Redux

- Utiliser Redux pour suivre l'état du plateau, le tour actuel, et le statut du jeu.
- Utiliser des sélecteurs Redux pour récupérer l'état dans les composants React.

## Étape 6 : Finalisation et Tests

- Tester le jeu pour s'assurer que toutes les règles sont correctement implémentées.
- Ajouter des animations ou des effets visuels pour améliorer l'expérience utilisateur.
- S'assurer que l'interface est réactive et conviviale.

## Etape 7 : Bonus.

- Permettre aux joueux de rentrer leurs noms.
- Permettre de reprendre une partie en cours (état stockée dans localStorage, détecté lorsque l'on charge le composant TicTacToeGame (Attention a ne pas écraser tout le local storage mais a conserver les sauvegardes potentielles des autres jeux)).
- A voir selon vos idées.
