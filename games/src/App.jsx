import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GameSimon from "./components/gameSimon/GameSimon";
import Tictactoe from "./components/TicTacToe/TicTacToe";

const App = () => {
  return (
    <div>
      <Header />
      <GameSimon/>
      <Tictactoe />
      <Footer />
    </div>
  );
};

export default App;
