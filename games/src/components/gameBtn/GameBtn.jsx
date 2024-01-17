import { forwardRef } from "react";

const GameBtn = forwardRef(({ border, bg, type = "button", onClick }, ref) => (
  <button
    className={` w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2 duration-200 hover:scale-105  ${border} ${bg} `}
    onClick={onClick}
    type={type}
    ref={ref}
  ></button>
));

export default GameBtn;
