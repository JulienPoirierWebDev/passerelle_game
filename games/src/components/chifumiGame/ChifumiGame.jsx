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
    dispatch(setComputerChoice(computerChoice));

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
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 mt-4">Chifoumi Game</h1>
      <div className="flex justify-center space-x-4">
        <div>
          <p className="text-lg">Votre choix: {playerChoice}</p>
          <p className="text-lg">Le choix Ordi: {computerChoice}</p>
          <p className="text-lg">Quel est le résultat: {result}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Choose Your Weapon</h2>
        <div className="flex justify-center space-x-4">
        {choices.map((choice) => (
          <ChoiceButton key={choice} choice={choice} onClick={handlePlayerChoice} />
        ))}
        </div>
      </div>
    </div>
  );
}
export default ChifumiGame;