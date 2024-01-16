## Étape 1 : Composants UI et Structure

### Composants à créer :

- ShifumiGame: Composant principal qui englobe le jeu.
- ChoiceButton: Composant pour les boutons de choix (pierre, papier, ciseaux).
- GameStatus: Composant pour afficher les résultats et les scores.

### Styling : Appliquer des styles CSS pour donner une apparence attrayante aux boutons de choix et à l'interface utilisateur.

## Étape 2 : Configuration de Redux

- Configurer le store Redux.
- Créer un shifumiSlice pour gérer l'état du jeu.
- Définir des actions Redux pour les interactions du jeu (choix du joueur, choix de l'ordinateur, mise à jour des scores).

## Étape 3 : Logique des Composants

### ChoiceButton :

- Implémenter les boutons permettant aux joueurs de choisir entre pierre, papier, et ciseaux.

### GameStatus :

- Afficher le choix du joueur, le choix de l'ordinateur, le résultat du tour, et les scores actuels.

## Étape 4 : Règles du Jeu et Logique

### Choix de l'Ordinateur :

- Générer un choix aléatoire pour l'ordinateur à chaque tour.
- Détermination du Gagnant :
- Appliquer les règles de Shifumi pour déterminer le gagnant de chaque tour.

### Gestion des Scores :

- Mettre à jour le score en fonction des résultats des tours.

## Étape 5 : Gestion de l'État avec Redux

- Utiliser Redux pour gérer les choix du joueur et de l'ordinateur, le résultat de chaque tour, et les scores.
- Utiliser des sélecteurs Redux pour récupérer l'état dans les composants React.

## Étape 6 : Finalisation et Tests

- Tester le jeu pour s'assurer que la logique est correctement implémentée.
- Ajouter des animations ou des effets visuels pour améliorer l'expérience utilisateur.
- S'assurer que l'interface est intuitive et réactive.
