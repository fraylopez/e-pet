import { PetConfig } from "./PetConfig";
import { ResourceConfig } from "./ResourceConfig";

export interface GameConfig {
  resources: ResourceConfig;
  pet: PetConfig;
}
