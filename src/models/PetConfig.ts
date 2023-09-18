import { Stats } from "./Stats";

export interface PetConfig {
  initial: Stats;
  effects: Effects;
  consumptions: Consumptions;
}

interface Effects {
  feed: Stats;
  train: Stats;
  clean: Stats;
};

interface Consumptions {
  hunger: number;
  happyness: number;
  health: number;
};
