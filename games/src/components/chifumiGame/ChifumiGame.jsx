import ChoiceButton from '../choiceButton/ChoiceButton';
import { useSelector, useDispatch } from 'react-redux'
import {setPlayerChoice, setComputerChoice, setResult } from '../../features/chifumi/chifumiGameSlice';

const ChifumiGame = () => {
  const playerChoice = useSelector((state) => state.chifumiGame.playerChoice);
  const computerChoice = useSelector((state) => state.chifumiGame.computerChoice);
  const result = useSelector((state) => state.chifumiGame.result);
  const dispatch = useDispatch();
  const choices = ['pierre', 'feuille', 'ciseaux'];

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const handlePlayerChoice = (choice) => {
    const computerChoice = getRandomChoice();
    dispatch(setPlayerChoice(choice));
    dispatch(setComputerChoice(choice));

    if (choice === computerChoice) {
      dispatch(setResult("Egalité!"));
    } else if (
      (choice === 'pierre' && computerChoice === 'ciseaux') ||
      (choice === 'feuille' && computerChoice === 'pierre') ||
      (choice === 'ciseaux' && computerChoice === 'feuille')
    ){
        dispatch(setResult('Tu gagnes!'))

    } else {
        dispatch(setResult('l\'ordi gagne!'));

    }
  };

  return (
    <div>
      <h1>Chifoumi Game</h1>
      <div>
        <p>Votre choix: {playerChoice}</p>
        <p>Le choix de l'ordi: {computerChoice}</p>
        <p>quel est le resultat: {result}</p>
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