import {  } from "react";

const TictactoeBtn = (({ bg,  onClick, color, value} ) => (
  <button
    className={` w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2 duration-200 hover:scale-105   ${bg} `}
    onClick={onClick}
    data-value={value}
  >{value}</button>
));

export default TictactoeBtn;