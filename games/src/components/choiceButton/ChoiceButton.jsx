function ChoiceButton({children, bgColor, onClick, customStyle, customStyle2}) {
  return (
    <button className={`${bgColor} text-white  font-bold py-2 px-4 rounded`} type="button" onClick={onClick}>{children}</button>
  )
}

export default ChoiceButton