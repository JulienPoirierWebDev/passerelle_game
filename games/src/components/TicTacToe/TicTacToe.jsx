import React, { useRef, useState } from 'react';
import './TicTacToe.css';

import circle_icon from '../../../public/assets/gif/giphyCircleLGBT.gif';
import cross_icon from '../../../public/assets/gif/giphycrosslgbt.gif';

let data = ["", "", "", "", "", "", "", "", ""];

export const Tictactoe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box_array = Array.from({ length: 9 }, () => useRef(null));

    const toggle = (e, num) => {
        if (lock) {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src=${cross_icon} alt="cross" />`;
            data[num] = "x";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src=${circle_icon}>`;
            data[num] = "o";
            setCount(++count);
        }
        checkWin();
    };

    const checkWin = () => {
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

    const won = (winner) => {
        setLock(true);
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> you win`;
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> you win`;
        }
    };

    const reset = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setLock(false);
        titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
        box_array.forEach((box) => {
            box.current.innerHTML = "";
        });
    };

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
