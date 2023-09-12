import { Stats } from "./Stats";

export interface PetConfig {
  initial: Stats;
  effects: {
    feed: Stats;
    train: Stats;
    clean: Stats;
  };
  consumptions: {
    hunger: number;
    happyness: number;
    health: number;
  };
}
