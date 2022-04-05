import { atom } from 'recoil';
import { gamedata } from './gamedata';

export const a_gameData = atom({
  key: 'GameData',
  default: gamedata,
});

export const a_gameState = atom({
  key: 'GameState',
  default: 'attract',
});

export const a_character = atom({
  key: 'Class',
  default: {
    class: '',
    race: '',
    health: 0,
    energy: 0,
    food: 0,
    favor: 0,
  },
});

export const a_dungeonLevel = atom({
  key: 'DungeonLevel',
  default: '1',
});

export const a_enemyHP = atom({
  key: 'EnemyHP',
  default: '0',
});
