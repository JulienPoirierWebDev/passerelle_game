## Étape 1 : Composants UI et Structure de Base

### Composants à créer :

- MemoryGame: Composant principal du jeu.
- GameBoard: Composant pour le plateau de jeu.
- Card: Composant pour chaque carte du jeu.
- GameStatus: Composant pour afficher l'état actuel du jeu (score, tours).

### Styling : Appliquer des styles CSS pour donner une apparence attrayante aux cartes et au plateau de jeu.

## Étape 2 : Configuration de Redux

- Configurer le store Redux.
- Créer un memorySlice pour gérer l'état du jeu.
- Définir des actions Redux pour les interactions dans le jeu (retourner une carte, vérifier une paire, etc.).

## Étape 3 : Logique des Composants

### GameBoard et Card :

- Implémenter la logique pour afficher les cartes et gérer les actions de retournement.

### GameStatus :

- Afficher le nombre de paires trouvées et le nombre de tours.

## Étape 4 : Algorithmes et Règles du Jeu

### Génération du Plateau :

- Créer un ensemble de paires de cartes mélangées aléatoirement sur le plateau.

### Logique de Retournement de Cartes :

- Permettre aux utilisateurs de retourner deux cartes à la fois pour trouver des paires.

### Vérification des Paires :

- Comparer les cartes retournées pour voir si elles forment une paire.

### Gestion des Tours et des Scores :

- Suivre le nombre de tentatives et augmenter le score lorsque l'utilisateur trouve une paire.

## Étape 5 : Gestion de l'État avec Redux

- Gérer l'état des cartes, des paires trouvées, et des tours via Redux.
- Utiliser des sélecteurs Redux pour récupérer l'état dans les composants React.

## Étape 6 : Finitions et Tests

- Peaufiner l'interface utilisateur pour une expérience de jeu agréable.
- Tester l'application pour s'assurer que la logique du jeu fonctionne correctement et que les paires sont correctement gérées.
