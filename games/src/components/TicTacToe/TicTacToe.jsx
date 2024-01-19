import React, { useRef, useState } from 'react';
import './TicTacToe.css';

// Import des images pour les icônes de X et O
import circle_icon from '/assets/gif/giphyNaruto.gif';
import cross_icon from '/assets/gif/giphySasuke.gif';

// Tableau pour stocker l'état du jeu
let data = ["", "", "", "", "", "", "", "", ""];

// Composant principal du jeu Tic Tac Toe
export const Tictactoe = () => {
    // State pour suivre le nombre de coups joués et le verrouillage du jeu
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    // Référence pour accéder au titre dynamique du jeu
    let titleRef = useRef(null);

    // Création d'un tableau de références pour chaque boîte du jeu
    let box_array = Array.from({ length: 9 }, () => useRef(null));

    // Fonction pour gérer le clic sur une boîte
    const toggle = (e, num) => {
        // Vérifier si le jeu est verrouillé
        if (lock) {
            return;
        }

        // Mettre à jour l'interface utilisateur et les données du jeu
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${cross_icon} alt="cross" />`;
            data[num] = "x";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src=${circle_icon}>`;
            data[num] = "o";
            setCount(++count);
        }

        // Vérifier s'il y a un gagnant après chaque coup
        checkWin();
    };

    // Fonction pour vérifier s'il y a un gagnant
    const checkWin = () => {
        // Logique pour vérifier toutes les conditions de victoire possibles
        // et appeler la fonction 'won' si une condition est remplie
        // Remarque : la fonction 'won' verrouillera le jeu et affichera le message de victoire
        // en fonction du symbole (X ou O) du gagnant.
        // Vous pouvez ajuster ou étendre cette logique en ajoutant d'autres conditions.
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    };

    // Fonction pour gérer la victoire
    const won = (winner) => {
        // Verrouiller le jeu
        setLock(true);

        // Mettre à jour le titre avec le message de victoire et l'icône correspondante
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> Sasuke win`;
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> Naruto win`;
        }
    };

    // Fonction pour réinitialiser le jeu
    const reset = () => {
        // Réinitialiser les données du jeu
        data = ["", "", "", "", "", "", "", "", ""];

        // Déverrouiller le jeu
        setLock(false);

        // Réinitialiser le titre
        titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";

        // Effacer le contenu de chaque boîte
        box_array.forEach((box) => {
            box.current.innerHTML = "";
        });
    };

    // Rendu JSX du composant Tic Tac Toe
    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
            <div className='board'>
                <div className='row1'>
                    {box_array.slice(0, 3).map((box, index) => (
                        <div className="boxes" key={index} ref={box} onClick={(e) => { toggle(e, index) }}></div>
                    ))}
                </div>
                <div className='row2'>
                    {box_array.slice(3, 6).map((box, index) => (
                        <div className="boxes" key={index + 3} ref={box} onClick={(e) => { toggle(e, index + 3) }}></div>
                    ))}
                </div>
                <div className='row3'>
                    {box_array.slice(6, 9).map((box, index) => (
                        <div className="boxes" key={index + 6} ref={box} onClick={(e) => { toggle(e, index + 6) }}></div>
                    ))}
                </div>
            </div>
            <button className='reset' onClick={() => { reset() }}>Reset</button>
        </div>
    );
};

export default Tictactoe;
