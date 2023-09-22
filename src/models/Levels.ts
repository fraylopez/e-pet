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

  get current() {
    return this._current;
  }

  get iteration() {
    return this._iteration;
  }


  startingAt(level: number) {
    this._current = level;
    return this;
  }


  next() {
    if (this._iteration >= 10 && this._current < this.lastLevel) {
      this._current++;
      this._iteration = 1;
    }
    else {
      this._iteration++;
    }
  }

  getResources() {
    return {
      food: 10,
      soap: 10,
      treat: 10,
    };
  }

  getInitialResources() {
    return {
      food: 10,
      soap: 10,
      treat: 10,
    };
  }

  getPetInitialStats() {
    return {
      hunger: 10,
      health: 10,
      happyness: 10,
    };
  }

  getConsumptions() {
    return {
      hunger: 10,
      health: -10,
      happyness: -15,
    };
  }

  getCosts() {
    return {
      feed: -8,
      train: -6,
      clean: -6,
    };
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


  private get lastLevel() {
    return this.levelConfig.length;
  }
}


