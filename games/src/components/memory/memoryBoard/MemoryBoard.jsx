import { useState } from "react";
import ReactCardFlip from 'react-card-flip';


function MemoryBoard() {

    const cards = [
        {
            id: 1,
            name: 'banane',
            flip: false,
            find: false,
            img: './assets/img/banane.jpg'
        },
        {
            id: 2,
            name: 'banane',
            flip: false,
            find: false,
            img: './assets/img/banane.jpg'
        },
        {
            id: 3,
            name: 'fraise',
            flip: false,
            find: false,
            img: './assets/img/fraise.png'
        },
        {
            id: 4,
            name: 'fraise',
            flip: false,
            find: false,
            img: './assets/img/fraise.png'
        },
        {
            id: 5,
            name: 'kiwi',
            flip: false,
            find: false,
            img: './assets/img/kiwi.jpg'
        },
        {
            id: 6,
            name: 'kiwi',
            flip: false,
            find: false,
            img: './assets/img/kiwi.jpg'
        },
        {
            id: 7,
            name: 'pomme',
            flip: false,
            find: false,
            img: './assets/img/pomme.png'
        },
        {
            id: 8,
            name: 'pomme',
            flip: false,
            find: false,
            img: './assets/img/pomme.png'
        },
        {
            id: 9,
            name: 'poire',
            flip: false,
            find: false,
            img: './assets/img/poire.jpg'
        },
        {
            id: 10,
            name: 'poire',
            flip: false,
            find: false,
            img: './assets/img/poire.jpg'
        },
    ]
    const [shuffledCards, setShuffledCards] = useState(cards.sort(() => Math.random() - 0.5));
    const [score, setScore] = useState(cards.length/2);
    const [choices, setChoices] = useState([]);
    const [playable, setPlayable] = useState(true);

    function reset() {
        setShuffledCards(shuffledCards.sort(() => Math.random() - 0.5));
        setScore(cards.length/2);
        setChoices([]);
        setPlayable(true);
    }

    function handleClick(card) {
        if(card.flip === true || playable === false) {
            return;
        }
        card.flip = true;
        let localChoices = [...choices, card];
        let localScore = score;
        setChoices(localChoices);
        console.log(shuffledCards);
        localChoices.map((element) => {
            const newTable = [...shuffledCards];
            newTable[shuffledCards.indexOf(element)].flip = true;
            setShuffledCards(() => newTable);
        })
        
            if (localChoices.length === 2) {
                setPlayable(false);
                setTimeout(() => {
                if (localChoices[0].name === localChoices[1].name) {
                    localChoices.map((element) => {
                        const newTable = [...shuffledCards];
                        newTable[shuffledCards.indexOf(element)].find = true;
                        setShuffledCards(newTable);
                    })
                    setChoices([]);
                    localChoices = [];
                    console.log(shuffledCards);
                    if(shuffledCards.every(element => element.find === true)) {
                        alert('Victoire !!');
                    }
                } else {
                    localChoices.map((element) => {
                        console.log('here');
                        const newTable = [...shuffledCards];
                        newTable[shuffledCards.indexOf(element)].flip = false;
                        setShuffledCards(newTable);
                    })
                    setChoices([]);
                    localChoices = [];
                    setScore(localScore - 1);
                    if (localScore === 1) {
                        alert('Game Over');
                    }
                    console.log(shuffledCards);
                }
                setPlayable(true);
            }, 1500)
            }
              
    }
    return (
        <>
            <div>
                <p className="text-center">Vie restantes : {score}</p>
            </div>

            <div className="grid grid-cols-5 mx-auto">{
                shuffledCards.map((card) => {
                    const style = card.flip ? 'cursor-not-allowed' : 'cursor-pointer';
                    return (
                        <>
                        <ReactCardFlip isFlipped={card.flip} flipDirection="vertical">
                            <div className="mx-2 my-2 h-72">
                                <img className={style} onClick={() => handleClick(card)} key={card.id} src="./assets/img/card-flip.png" alt="" />
                            </div>
                            <div className="mx-2 my-2 h-72">
                                <img className={style} key={card.id} src={card.img} alt="fruits" />
                            </div>
                        </ReactCardFlip>
                        </>
                    )
                })
            }

            </div>

            <button onClick={reset}>Rejouer</button>
        </>
    )
}

export default MemoryBoard;