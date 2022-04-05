import { useState } from 'react';
import { gamedata } from './gamedata';
import { a_gameState, a_character } from './atoms';
import { useRecoilState } from 'recoil';

export default function ChooseRace() {
  const [, setGameState] = useRecoilState(a_gameState);
  const [character, setCharacter] = useRecoilState(a_character);
  const [race, setRace] = useState(undefined);
  const races = gamedata.races;

  function handleClick() {
    if (race) {
      setCharacter({...character, race});
      setGameState('choose-class');
    }
  }

  return (
    <div>
      <p>Choose a starting race:</p>
      <select value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="">----</option>
        {Object.keys(races).map((r) => (
          <option key={races[r].id} value={r}>
            {races[r].name}
          </option>
        ))}
      </select>
      <button disabled={!race} onClick={handleClick}>
        Select
      </button>
      <div>{race ? gamedata.races[race].special : null}</div>
    </div>
  );
}
