import { LevelsConfig } from "./LevelsConfig";
import { PetConfig } from "./PetConfig";
import { ResourcesConfig } from "./ResourcesConfig";

export interface GameConfig {
  resources: ResourcesConfig;
  pet: PetConfig;
  levels: LevelsConfig;
}
