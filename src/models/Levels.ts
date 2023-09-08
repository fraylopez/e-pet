import { LevelsConfig } from "./LevelsConfig";

export class Levels {
  private _current: number;
  private iteration: number;
  constructor(
    private readonly levelConfig: LevelsConfig,
  ) {
    this._current = 1;
    this.iteration = 1;
  }

  get current() {
    return this._current;
  }

  startingAt(level: number) {
    this._current = level;
    return this;
  }


  next() {
    if (this.iteration >= 10 && this._current < this.lastLevel) {
      this._current++;
      this.iteration = 1;
    }
    else {
      this.iteration++;
    }
  }

  getResources() {
    return {
      food: 10,
      soap: 10,
      treat: 10,
    };
  }

  getConsumptions() {
    return {
      feed: 1,
      train: 1,
      clean: 1,
    };
  }

  private get lastLevel() {
    return this.levelConfig.levels.length;
  }
}


