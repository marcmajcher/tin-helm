import { atom } from 'recoil';

export const character = atom({
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

export const dungeonLevel = atom({
  key: 'DungeonLevel',
  default: '1',
});

export const enemyHP = atom({
  key: 'EnemyHP',
  default: '0',
});