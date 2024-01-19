function ChoiceButton({ children, bgColor, onClick, choice }) {
  const imgSrc = `/images/${choice}.png`; 
  return (
    <div className="flex flex-col items-center">
      <img src={imgSrc} alt={choice} className="cursor-pointer m-2" onClick={() => onClick(choice)} />
      <button className={`${bgColor} text-white font-bold py-2 px-4 rounded`} type="button" onClick={() => onClick(choice)}>
        {children}
      </button>
    </div>
  );
}

export default ChoiceButton;
