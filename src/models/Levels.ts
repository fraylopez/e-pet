import { LevelsConfig } from "./LevelsConfig";

export class Levels {
  private _current: number;
  private _iteration: number;
  constructor(
    private readonly levelConfig: LevelsConfig,
  ) {
    this._current = 1;
    this._iteration = 1;
  }

  get currentLevelIndex() {
    return this._current;
  }

  get iteration() {
    return this._iteration;
  }

  getNumberOfIterations() {
    return 10;
  }

  startingAt(level: number) {
    this._current = level;
    return this;
  }

  next() {
    if (
      this._iteration >= this.getNumberOfIterations() &&
      this._current < this.numOfLevels
    ) {
      this._current++;
      this._iteration = 1;
    }
    else {
      this._iteration++;
    }
  }

  getResources() {
    return this.getCurrentLevel().resources.renewalRate;
  }

  getInitialResources() {
    return this.getCurrentLevel().resources.initial;
  }

  getPetInitialStats() {
    return this.getCurrentLevel().pet.initial;
  }

  getConsumptions() {
    return this.getCurrentLevel().pet.consumptions;
  }

  getCosts() {
    return this.getCurrentLevel().resources.costs;
  }

  getEffects() {
    return {
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
    };
  }

  getCurrentLevel() {
    return this.levelConfig[this.currentLevelIndex - 1];
  }

  private get numOfLevels() {
    return this.levelConfig.length;
  }
}


