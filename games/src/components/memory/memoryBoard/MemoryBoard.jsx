import { useState } from "react";
import ReactCardFlip from 'react-card-flip';


function MemoryBoard() {

    const cards = [
        {
            id: 1,
            name: 'banane',
            flip: false,
            find: false
        },
        {
            id: 2,
            name: 'banane',
            flip: false,
            find: false
        },
        {
            id: 3,
            name: 'fraise',
            flip: false,
            find: false
        },
        {
            id: 4,
            name: 'fraise',
            flip: false,
            find: false
        },
        {
            id: 5,
            name: 'kiwi',
            flip: false,
            find: false
        },
        {
            id: 6,
            name: 'kiwi',
            flip: false,
            find: false
        },
        {
            id: 7,
            name: 'pomme',
            flip: false,
            find: false
        },
        {
            id: 8,
            name: 'pomme',
            flip: false,
            find: false
        },
        {
            id: 9,
            name: 'poire',
            flip: false,
            find: false
        },
        {
            id: 10,
            name: 'poire',
            flip: false,
            find: false
        },
    ]
    const [shuffledCards, setShuffledCards] = useState(cards.sort(() => Math.random() - 0.5));
    const [score, setScore] = useState(cards.length/2);
    const [isFliped, setIsFliped] = useState(false);
    let choices = [];

    function handleClick(card) {
        if(card.flip === true) {
            return;
        }
        choices.push(card);
        card.flip = true;
        setIsFliped(true);

        if (choices.length === 2) {
            if (choices[0].name === choices[1].name) {
                choices.map((element) => {
                    const newTable = [...shuffledCards];
                    newTable[shuffledCards.indexOf(element)].find = true;
                    setShuffledCards(newTable);
                })
                choices = [];
                console.log(shuffledCards);
            } else {
                choices.map((element) => {
                    const newTable = [...shuffledCards];
                    newTable[shuffledCards.indexOf(element)].flip = false;
                    setShuffledCards(newTable);
                })
                choices = [];
                setScore(score - 1);
                if (score === 1) {
                    alert('Game Over');
                }
                console.log(shuffledCards);
            }
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
                        <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
                            <div className="mx-2 my-2">
                                <img className={style} onClick={() => handleClick(card)} key={card.id} src="./assets/img/card-flip.png" alt="" />
                                <p className="text-center">{card.name}</p>
                            </div>
                            <div className="mx-2 my-2">
                                <img className={style} onClick={() => handleClick(card)} key={card.id} src="./assets/img/poire.jpg" alt="" />
                                <p className="text-center">{card.name}</p>
                            </div>
                        </ReactCardFlip>
                        </>
                    )
                })
            }

            </div>
        </>
    )
}

export default MemoryBoard;