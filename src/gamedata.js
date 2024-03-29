export const gamedata = {
  races: {
    human: {
      id: '001',
      name: 'Human',
      health: 9,
      energy: 7,
      food: 0,
      special:
        'Humans may select 1 extra Trappings Card from the remaining cards before beginning their adventure.',
      reverse: 'alchemist',
    },
    gnome: {
      id: '002',
      name: 'Gnome',
      health: 6,
      energy: 9,
      food: 1,
      special:
        'Gnomes perform both actions at the campsite instead of picking one.',
      reverse: 'marauder',
    },
    kroling: {
      id: '003',
      name: 'Kroling',
      health: 8,
      energy: 8,
      food: 0,
      special:
        'Once per dungeon level, while in combat, the Kroling may flip a single die to the reverse side when determining damage',
      reverse: 'footpad',
    },
    merfolk: {
      id: '004',
      name: 'Merfolk',
      health: 7,
      energy: 8,
      food: 1,
      special:
        'Whenever Merfolk resolve a location with a water icon, they may either gain 1 Health or 1 Energy.',
      reverse: 'parson',
    },
  },
  classes: {
    alchemist: {
      id: '011',
      name: 'Alchemist',
      health: 3,
      energy: 4,
      attack1: 2,
      attack2: 4,
      attack3: 6,
      trappings: ['books', 'potion'],
    },
    marauder: {
      id: '012',
      name: 'Marauder',
      health: 5,
      energy: 2,
      attack1: 1,
      attack2: 5,
      attack3: 8,
      trappings: ['axe', 'bedroll'],
    },
    footpad: {
      id: '013',
      name: 'Footpad',
      health: 3,
      energy: 3,
      attack1: 2,
      attack2: 5,
      attack3: 7,
      trappings: ['dagger', 'toolkit'],
    },
    parson: {
      id: '014',
      name: 'Parson',
      health: 4,
      energy: 3,
      attack1: 3,
      attack2: 5,
      attack3: 7,
      trappings: ['mace', 'scroll'],
    },
  },
  trappings: {
    axe: {
      name: 'Axe',
      reverse: 'books',
      description:
        'When you roll doubles during combat, you may reroll. You may discard this card to deal damage equal to the sum of rolling two dice.',
    },
    books: {
      name: 'Books',
      reverse: 'axe',
      description: 'Gain 1 extra energy when you rest at a campsite.',
    },
    dagger: {
      name: 'Dagger',
      reverse: 'mace',
      description:
        'When in combat, and if you are resolving the first dungeon card, you inflict an additional 1 damage on successful hits.',
    },
    mace: {
      name: 'Mace',
      reverse: 'dagger',
      description:
        'When in combat against an undead enemy, you inflict an additional 1 damage on successful hits.',
    },
    potion: {
      name: 'Potion',
      reverse: 'bedroll',
      description: 'You may discard this card to gain 2 health and 2 energy.',
    },
    bedroll: {
      name: 'Bedroll',
      reverse: 'potion',
      description: 'Gain 1 extra health when you rest at a campsite.',
    },
    scroll: {
      name: 'Scroll',
      reverse: 'toolkit',
      description:
        'When encountering an undead enemy, you mnay discard this card to vanquish them. You gain no favor when defeating an enemy in this manner.',
    },
    toolkit: {
      name: 'Toolkit',
      reverse: 'bedroll',
      description:
        'When encountering a trap, you may attempt to disarm it. ⚀: Take double damage ⚁⚂: Take normal damage ⚃⚄⚅: Take no damage.',
    },
  },
  rooms: {
    catacombs: {
      name: 'Catacombs',
      elements: ['enemy', 'random'],
      enemy: 'skelepede',
      trap: '2 Health',
      random: 'labyrinth',
      loot: 'potion',
    },
    chasm: {
      name: 'Chasm',
      elements: ['enemy'],
      enemy: 'wraith',
      trap: '2 energy',
      random: 'skelepede',
      loot: 'empty',
    },
    clearing: {
      name: 'Clearing',
      elements: ['random', 'campsite'],
      enemy: 'skelepede',
      trap: '0',
      random: 'shrine',
      loot: 'symbol',
    },
    corridor: {
      name: 'Corridor',
      elements: ['trap', 'random'],
      enemy: 'speyeder',
      trap: '1 Energy',
      random: 'grove',
      loot: 'turnip',
    },
    kitchen: {
      name: 'Kitchen',
      elements: ['enemy', 'campsite'],
      enemy: 'darkrats',
      trap: '2 Health',
      random: 'labyrinth',
      loot: 'wedge',
    },
    oldwell: {
      name: 'Old Well',
      elements: ['enemy', 'water'],
      enemy: 'watcher',
      trap: '2 Health',
      random: 'darkrats',
      loot: 'empty',
    },
    quarters: {
      name: 'Quarters',
      elements: ['enemy', 'loot'],
      enemy: 'wraith',
      trap: '2 Health',
      random: 'pigman',
      loot: 'shield',
    },
    sanctum: {
      name: 'Sanctum',
      elements: ['trap', 'enemy'],
      enemy: 'possessor',
      trap: '2 Energy',
      random: 'doomskull',
      loot: 'mimic',
    },
    sewers: {
      name: 'Sewers',
      elements: ['trap', 'campsite', 'water'],
      enemy: 'watcher',
      trap: '1 Energy',
      random: 'pigman',
      loot: 'gillnet',
    },
    stash: {
      name: 'Stash',
      elements: ['loot'],
      enemy: 'darkrats',
      trap: '0',
      random: 'altar',
      loot: 'shard',
    },
    statue: {
      name: 'Statue',
      elements: ['trap', 'loot'],
      enemy: 'doomskull',
      trap: '1 Health',
      random: 'grove',
      loot: 'ring',
    },
    waterfall: {
      name: 'Waterfall',
      elements: ['random', 'water'],
      enemy: 'doomskull',
      trap: '1 Health',
      random: 'altar',
      loot: 'sword',
    },
  },
  enemies: {
    darkrats: {
      undead: false,
      name: 'darkrats',
      health: 2,
      attack: 0,
      defense: 0,
      favor: 1,
      special: 'When you defeat a dark rat, you gain 1 food. Yummy!',
    },

    'Doom Skull': {
      undead: true,
      name: 'doomskull',
      health: 4,
      attack: 0,
      defense: 0,
      favor: 1,
      special: 'The doom skull always attacks first.',
    },

    'Mimic ': {
      undead: false,
      name: 'mimic',
      health: 4,
      attack: 1,
      defense: 1,
      favor: 9,
      special:
        'When you defeat a mimic, you gain fate points equal to the dungeon level you are on.',
    },

    'Possessor ': {
      undead: false,
      name: 'possessor',
      health: 6,
      attack: 1,
      defense: 1,
      favor: 2,
      special: 'When you defeat a possessor, you gain 1 shard',
    },

    Skelepede: {
      undead: true,
      name: 'skelepede',
      health: 3,
      attack: 0,
      defense: 1,
      favor: 1,
      special:
        'Skelepedes do not miss when they attack. They always re-roll doubles.',
    },

    Speyeder: {
      undead: false,
      name: 'speyeder',
      health: 3,
      attack: 1,
      defense: 0,
      favor: 1,
      special:
        'You lose 1 energy every time the speyeder successfully hits during combat.',
    },

    Watcher: {
      undead: false,
      name: 'watcher',
      health: 4,
      attack: 1,
      defense: 1,
      favor: 2,
      special:
        'You lose 1 energy before combat begins when fighting a Watcher.',
    },

    Wraith: {
      undead: true,
      name: 'wraith',
      health: 5,
      attack: 1,
      defense: 0,
      favor: 2,
      special:
        'You lose 1 favor every time the wraith successfully hits during combat.',
    },
  },
  loot: {
    gillnet:
      'When fishing, you may roll 3 times instead of 1. Each success gains you 1 food.',
    potion: 'You may discard this card to gain 2 health and 2 energy.',
    ring: 'Once per dungeon level you may spend 1 favor to avoid combat with an enemy.',
    shield:
      'Reduce damage from attacks by 1. Discard this shield if you take 6 or more damage in a single blow.',
    sword:
      'You no longer miss in combat when you roll doubles. When doubles are rolled, you now deal 5 damage.',
    symbol:
      'When at the Altar, you jay gain the reward one level higher than what your favor would otherwise indicate.',
    turnip:
      'When you encounter the pigman, you may discard this card to gain a shard, or you may discard it at any time to gain 3 energy.',
    wedge: 'You may discard this card to avoid combat with an enemy.',
  },
  reference: {
    altar:
      'You may gain a blessing from the altar based on your current level on the favor tracker. 0-3: 1 Health 4-5 2 Health and 1 Energy 6-7: 3 Health and 2 Energy 8-9: 4 Health and 3 Energy 10+: 1 Shard or Full Health',
    campsite:
      'You may rest at the campsite, gaining 2 health and 1 energy. Or, you may search for provisions, gaining 1 food.',
    grove:
      'You may search the grove for mushrooms. Each mushroom found equals 1 food. Roll a die to see how many you find:  ⚀: Get lost and lose 1 energy ⚁: Find nothing edible ⚂⚃: Find 1 mushroom ⚄⚅: Find 2 mushrooms',
    labyrinth:
      'You find yourself lost in a cavernous maze. Spend 1 food to esacpe. If you have no food, spend 2 energy to escape. If you have no food or energy, spend 3 health to escape.',
    pigman:
      'You may allow the pigman to place a blessing on you, gaining 1 favor. Or, you may trade a turnip with the pigman for 1 shard.',
    shrine: 'You gain 1 shard!',
  },
};
