import { useState, useEffect, useRef } from "react";
import GameBtn from "../gameBtn/GameBtn";

// Définition des couleurs disponibles pour le jeu
const colors = ["green", "red", "yellow", "blue"];

// Définition du composant principal du jeu Simon
function GameSimon() {
  // États du jeu
  const [sequence, setSequence] = useState([]); // Séquence de couleurs à mémoriser
  const [playing, setPlaying] = useState(false); // Indique si le joueur peut jouer
  const [playingIdx, setPlayingIdx] = useState(0); // Index de la couleur en cours dans la séquence
  const [isFullScreen, setIsFullScreen] = useState(false); // Indique si le jeu est en plein écran
  // Références aux boutons de couleurs
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const blueRef = useRef(null);


  // Créez une fonction pour activer le mode plein écran :
  const enterFullScreen = () => {
    const gameContainer = document.getElementById('game-container');
    
    if (gameContainer) {
      if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen();
      } else if (gameContainer.webkitRequestFullscreen) {
        gameContainer.webkitRequestFullscreen();
      } else if (gameContainer.msRequestFullscreen) {
        gameContainer.msRequestFullscreen();
      }
  
      setIsFullScreen(true);
    }
  };
// permet de quitter le mode plein écran
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  // Fonction pour réinitialiser le jeu
  const resetGame = () => {
    setSequence([]); // Réinitialise la séquence
    setPlaying(false); // Désactive le jeu
    setPlayingIdx(0); // Réinitialise l'index de la séquence en cours
  };

  // Fonction pour ajouter une nouvelle couleur à la séquence
  const addNewColor = () => {
    const color = colors[Math.floor(Math.random() * 4)]; // Choix aléatoire d'une couleur
    const newSequence = [...sequence, color]; // Ajout de la couleur à la séquence existante
    setSequence(newSequence);
    
  };

  // Fonction pour passer au niveau suivant du jeu
  const handleNextLevel = () => {
    if (!playing) {
      setPlaying(true); // Active le jeu
      addNewColor(); // Ajoute une nouvelle couleur à la séquence
      enterFullScreen(); // Active le mode plein écran
    }
  };

  // Gestionnaire de clic sur les boutons de couleur
  const handleColorClick = (e) => {
    if (playing) {
      e.target.classList.add("opacity-50"); // Ajoute une classe pour indiquer le clic
        console.log(e.target.getAttribute("color"));
      setTimeout(() => {
        e.target.classList.remove("opacity-50"); // Retire la classe après un court délai

        const clickColor = e.target.dataset.color;
          console.log(e.target);
        
        // Vérifie si la couleur cliquée est correcte dans la séquence
        if (sequence[playingIdx] === clickColor) {
        
          // Vérifie si c'est la dernière couleur de la séquence
          if (playingIdx === sequence.length - 1) {
            // Passe au niveau suivant après un court délai
            setTimeout(() => {
              setPlayingIdx(0);
              addNewColor();
            }, 250);
          } else {
            // Passe à la couleur suivante dans la séquence
            setPlayingIdx(playingIdx + 1);
          }
        } else {
          // Réinitialise le jeu en cas de clic incorrect
          resetGame();
           alert("You Lost!");
           
        }
      }, 250);
    }
  };

  // Effet de côté pour afficher la séquence
  useEffect(() => {
    if (sequence.length > 0) {
      const showSequence = (idx = 0) => {
        let ref = null;

        // Associe la référence au bouton de couleur approprié dans la séquence
        if (sequence[idx] === "green") ref = greenRef;
        if (sequence[idx] === "red")  {
          ref = redRef;
          console.log('ref'+redRef);
        }
        if (sequence[idx] === "yellow") ref = yellowRef;
        if (sequence[idx] === "blue") ref = blueRef;

        // Met en surbrillance le bouton
        setTimeout(() => {
          ref.current.classList.add("brightness-[2.5]");

          // Retire la surbrillance après un court délai
          setTimeout(() => {
            ref.current.classList.remove("brightness-[2.5]");
            // Continue d'afficher la séquence si ce n'est pas la dernière couleur
            if (idx < sequence.length - 1) showSequence(idx + 1);
          }, 250);
        }, 250);
      };

      // Affiche la séquence au chargement initial du composant
      showSequence();
    }
  }, [sequence]);

  // Rendu du composant
  return (
    // Conteneur principal
    <div  className="flex justify-center items-center bg-neutral-800 text-white w-screen h-screen 
    min-[320px]:text-center ">
      {/* Conteneur du jeu */}
      <div id="game-container" className="relative flex flex-col justify-center items-center">
        {/* Conteneur pour les boutons verts et rouges */}
        <div>
          {/* Bouton vert */}
          <GameBtn
            id="greenBtn"
            color="green"
            border="rounded-tl-full"
            bg="bg-green-500"
            onClick={handleColorClick}
            ref={greenRef}
          />

          {/* Bouton rouge */}
          <GameBtn
          id="redBtn"
            color="red"
            border="rounded-tr-full"
            bg="bg-red-500"
            onClick={handleColorClick}
            ref={redRef}
          />
        </div>

        {/* Conteneur pour les boutons jaunes et bleus */}
        <div>
          {/* Bouton jaune */}
          <GameBtn
            id="yellowBtn"
            color="yellow"
            border="rounded-bl-full"
            bg="bg-yellow-400"
            onClick={handleColorClick}
            ref={yellowRef}
          />

          {/* Bouton bleu */}
          <GameBtn
            id="blueBtn"
            color="blue"
            border="rounded-br-full"
            bg="bg-blue-500"
            onClick={handleColorClick}
            ref={blueRef}
          />
        </div>

        {/* Bouton de jeu */}
        <button
          className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duration-200 hover:scale-105 playBtn"
          onClick={handleNextLevel}
        >
          {sequence.length === 0 ? "Play" : sequence.length}
        </button>
        
      </div>

    </div>
  );
}

// Exporte le composant
export default GameSimon;
