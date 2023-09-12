import { Levels } from "../../src/models/Levels";
import { ResourcesConfigMother } from "./ResourcesConfigMother";

export class LevelsMother {
  static new(numberOfLevels: number = 1) {
    const initial = ResourcesConfigMother.initialBatch();
    const levels = new Array(numberOfLevels).fill(0).map((_, i) => {
      return {
        renewalRate: ResourcesConfigMother.renewalRate(),
        consumptions: ResourcesConfigMother.consumptions(),
      };
    });

    return new Levels({ initial, levels });
  }
}
