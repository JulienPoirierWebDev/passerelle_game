const GameBtn = ({
  border,
  bg,
  type = "button",
  onClick,
  color,
  testid,
  myRef,
}) => {
  return (
    <button
      aria-label={testid}
      data-testid={testid}
      className={` w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2 duration-200 hover:scale-105  ${border} ${bg} simonBtn`}
      onClick={onClick}
      type={type}
      ref={myRef}
      data-color={color}
    ></button>
  );
};

export default GameBtn;
