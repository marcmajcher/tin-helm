import { useState } from 'react';
import { gamedata } from './gamedata';
import { a_gameState, a_character } from './atoms';
import { useRecoilState } from 'recoil';

export default function ChooseRace() {
  const [, setGameState] = useRecoilState(a_gameState);
  const [character, setCharacter] = useRecoilState(a_character);
  const [klass, setKlass] = useState(undefined);
  const klasses = gamedata.classes;

  function handleClick() {
    if (klass) {
      const myKlass = gamedata.classes[klass];
      const myRace = gamedata.races[character.race];

      const startCharacter = { ...character, klass };
      startCharacter.health = myKlass.health + myRace.health;
      startCharacter.energy = myKlass.energy + myRace.energy;
      startCharacter.food = myRace.food;
      startCharacter.trappings = myKlass.trappings;
      setCharacter(startCharacter);
      setGameState('character');
    }
  }

  return (
    <div>
      <p>Choose a starting class:</p>
      <select value={klass} onChange={(e) => setKlass(e.target.value)}>
        <option value="">----</option>
        {Object.keys(klasses)
          .filter((k) => k !== gamedata.races[character.race].reverse)
          .map((k) => (
            <option key={klasses[k].id} value={k}>
              {klasses[k].name}
            </option>
          ))}
      </select>
      <button disabled={!klass} onClick={handleClick}>
        Select
      </button>
      <div>{klass ? klasses[klass].trappings.join(' | ') : null}</div>
    </div>
  );
}
