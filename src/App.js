import './App.css';
import { useRecoilValue } from 'recoil';
import { a_gameState } from './atoms';
import StartButton from './StartButton';
import ChooseRace from './ChooseRace';
import ChooseClass from './ChooseClass';
import Character from './Character';

function App() {
  const gameState = useRecoilValue(a_gameState);

  const stateMap = {
    attract: <StartButton />,
    'choose-race': <ChooseRace />,
    'choose-class': <ChooseClass />,
    character: <Character />,
  };

  return (
    <div className="container">
      <h1>Tin Helm</h1>
      <section>{stateMap[gameState]}</section>
    </div>
  );
}

export default App;
