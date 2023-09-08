import assert from "assert";
import { ResourceBatch } from "./ResourceBatch";
import { LevelsConfig } from "./LevelsConfig";
import { Level } from "./Level";

class LevelBuilder {
  private initial!: ResourceBatch;
  private levels: Level[];

  constructor() {
    this.levels = [];
  }

  addInitialResources(config: ResourceBatch) {
    this.initial = config;
    return this;
  }
  addLevel(level: Level) {
    this.levels.push(level);
    return this;
  }

  build(): LevelsConfig {
    assert(this.initial, "Initial resources not set");
    assert(this.levels.length > 0, "No levels added");
    return {
      initial: this.initial,
      levels: this.levels,
    };
  }
}
