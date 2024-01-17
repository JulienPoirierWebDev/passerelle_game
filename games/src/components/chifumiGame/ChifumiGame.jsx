import { useState } from 'react';
import ChoiceButton from '../choiceButton/ChoiceButton';

const ChifumiGame = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['pierre', 'feuille', 'ciseaux'];

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const handlePlayerChoice = (choice) => {
    const computerChoice = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult("Egalité!");
    } else if (
      (choice === 'pierre' && computerChoice === 'ciseaux') ||
      (choice === 'feuille' && computerChoice === 'pierre') ||
      (choice === 'ciseaux' && computerChoice === 'feuille')
    ) {
      setResult('Tu gagnes!');
    } else {
      setResult('l\'ordi gagne!');
    }
  };

  return (
    <div>
      <h1>Chifoumi Game</h1>
      <div>
        <p>Your Choice: {playerChoice}</p>
        <p>Computer's Choice: {computerChoice}</p>
        <p>Result: {result}</p>
      </div>
      <div>
        <h2>Choose Your Weapon</h2>
        {choices.map((choice) => (
        //   <button key={choice} onClick={() => handlePlayerChoice(choice)}>
        //     {choice}
        //   </button>
          <ChoiceButton key={choice} bgColor="bg-blue-500" onClick={() => handlePlayerChoice(choice)}>{choice}</ChoiceButton>
        ))}
      </div>
    </div>
  );
};

export default ChifumiGame;
