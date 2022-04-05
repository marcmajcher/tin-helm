import { useRecoilState } from 'recoil';
import { a_gameState } from './atoms';

export default function StartButton() {
  const [, setGameState] = useRecoilState(a_gameState);

  return <button onClick={() => setGameState('choose-race')}>Start Game</button>
}