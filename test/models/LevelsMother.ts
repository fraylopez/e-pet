import { Levels } from "../../src/models/Levels";
import { PetConfigMother } from "./PetConfigMother";
import { ResourcesConfigMother } from "./ResourcesConfigMother";

export class LevelsMother {
  static new(numberOfLevels: number = 1) {
    const levels = new Array(numberOfLevels).fill(0).map((_, i) => {
      return {
        pet: PetConfigMother.new(),
        resources: ResourcesConfigMother.default(),
      };
    });

    return new Levels(levels);
  }
}
