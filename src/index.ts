import { EntryPoint } from "./EntryPoint";
import { GameConfig } from "./models/GameConfig";

const config: GameConfig = {
  pet: {
    initial: {
      health: 50,
      happyness: 50,
      hunger: 50,
    },
    effects: {
      feed: {
        health: 0,
        happyness: 5,
        hunger: -30,
      },
      train: {
        hunger: -10,
        health: 10,
        happyness: 0,
      },
      clean: {
        happyness: 25,
        health: 0,
        hunger: 0,
      },
    },
    consumptions: {
      hunger: 10,
      health: -10,
      happyness: -15,
    },

  },
  resources: {
    initial: {
      food: 10,
      soap: 10,
      treat: 10,
    },
    renewalRate: {
      food: 1,
      soap: 1,
      treat: 1,
    },
    consumptions: {
      feed: -8,
      train: -6,
      clean: -6,
    },
  },
};

new EntryPoint(config).start();