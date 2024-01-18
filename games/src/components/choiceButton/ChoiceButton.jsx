function ChoiceButton({children, bgColor, onClick, customStyle}) {
  return (
    <button className={`${bgColor} text-white  font-bold py-2 px-4 rounded`} type="button" onClick={onClick}>{children}</button>
  )
}

export default ChoiceButton