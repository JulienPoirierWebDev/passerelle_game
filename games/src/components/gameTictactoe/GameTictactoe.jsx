import React from 'react'
import TictactoeBtn from '../tictactoeBtn/tictactoeBtn'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';


function GameTictactoe() {
const [squares, setSquares] = useState([
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
],);




const handleClick = (e) => {
    const value  = e.target.dataset.value;
          console.log(e.target);


}

const resetGame = (e) => {
    setSquares([
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ]);


}




  return (
    <div className="container flex flex-col items-center align-center">
            <h1>TicTacToe</h1>
            <div  >
                {squares.map((row, indexRow) => (
                    <div className="row flex" key={indexRow}>
                        {row.map((square, indexSquare) => (
                            <TictactoeBtn bg="bg-red-500" value ={square} key={`${indexRow}-${indexSquare}`} onClick={handleClick}/>
                        ))}
                    </div>
                ))}
                {/* <div className="row1 flex" >
                    <TictactoeBtn bg="bg-red-500" value='X' onClick={handleClick()} />
                    <TictactoeBtn bg="bg-red-500"/>
                    <TictactoeBtn bg="bg-red-500"/>
                </div>
                <div className="row2 flex">
                <TictactoeBtn bg="bg-red-500"/>
                <TictactoeBtn bg="bg-red-500"/>
                <TictactoeBtn bg="bg-red-500"/>
                </div>
                <div className="row3 flex">
                <TictactoeBtn bg="bg-red-500"/>
                <TictactoeBtn bg="bg-red-500"/>
                <TictactoeBtn bg="bg-red-500"/>
                </div> */}
            </div>
            <button className="reset" onClick={resetGame}>Reset</button>
        </div>
  )
}

export default GameTictactoe