import { gamedata } from './gamedata';
import {  a_character } from './atoms';
import { useRecoilValue } from 'recoil';


export default function Character() {
  const character = useRecoilValue(a_character)

  return <div>
    <h2>Your Character:</h2>
    <ul>
      <li>Race: {gamedata.races[character.race].name}</li>
      <li>Class: {gamedata.classes[character.klass].name} </li>
      <li>Health: {character.health}</li>
      <li>Energy: {character.energy}</li>
      <li>Food: {character.food} </li>
      <li>Favor: {character.favor}</li>
      <li>Trappings: {character.trappings.join(', ')}</li>
      <li>{gamedata.races[character.race].special}</li>

    </ul>
    </div>
}