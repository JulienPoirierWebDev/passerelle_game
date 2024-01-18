import { useState } from "react";


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
    let choices = [];
    let score = cards.length;

    function handleClick(card) {
        if(card.flip === true) {
            return;
        }
        choices.push(card);
        card.flip = true;

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
                score--;
                console.log(score);
                console.log(shuffledCards);
            }
        }
    }
    return (
        <>
            <div>{
                shuffledCards.map((card) => {
                    const style = card.flip ? 'cursor-not-allowed' : 'cursor-pointer';
                    return (
                        <p className={style} onClick={() => handleClick(card)} key={card.id}>{card.name}</p>
                    )
                })
            }

            </div>
        </>
    )
}

export default MemoryBoard;