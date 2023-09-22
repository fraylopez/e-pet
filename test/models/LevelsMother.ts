import { Levels } from "../../src/models/Levels";
import { PetConfigMother } from "./PetConfigMother";
import { ResourcesConfigMother } from "./ResourcesConfigMother";

export class LevelsMother {
  static new(numberOfLevels: number = 1) {
    return new Levels(this.levelsConfig(numberOfLevels));
  }

  static levelsConfig(numberOfLevels: number = 1) {
    return new Array(numberOfLevels).fill(0).map((_, i) => this.levelConfig());
  }

  private static levelConfig() {
    return {
      pet: PetConfigMother.new(),
      resources: ResourcesConfigMother.default(),
    };
  }
}
