import React from "react";
import GameBtn from "../gameBtn/GameBtn";

function GameSimon() {
  return (
    <>
      <div>
        <div>
          <GameBtn
            bg="bg-blue-500"
            border="border-solid border-2 border-indigo-600"

            /> 
         
           <GameBtn
            bg="bg-green-500"
            border="border-solid border-2 border-indigo-600"
            />

            <GameBtn
            bg="bg-yellow-500"
            border="border-solid border-2 border-indigo-600"
            />
             <GameBtn
            bg="bg-red-500"
            border="border-solid border-2 border-indigo-600"
            />
        </div>
      </div>
      
    </>
  );
}

export default GameSimon;