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

  get foodRenewalRate() {
    return this.currentResources.renewalRate.food;
  }

  get treatsRenewalRate() {
    return this.currentResources.renewalRate.treats;
  }

  get soapRenewalRate() {
    return this.currentResources.renewalRate.soap;
  }

  get initialFood() {
    return this.currentResources.initial.food;
  }

  get initialTreats() {
    return this.currentResources.initial.treats;
  }

  get initialSoap() {
    return this.currentResources.initial.soap;
  }

  get hungerConsumption() {
    return this.pet.consumptions.hunger;
  }

  get healthConsumption() {
    return this.pet.consumptions.health;
  }

  get happynessConsumption() {
    return this.pet.consumptions.happyness;
  }

  get initialHunger() {
    return this.pet.initial.hunger;
  }

  get initialHealth() {
    return this.pet.initial.health;
  }

  get initialHappyness() {
    return this.pet.initial.happyness;
  }

  get feedCost() {
    return this.currentResources.costs.feed;
  }

  get trainCost() {
    return this.currentResources.costs.train;
  }

  get cleanCost() {
    return this.currentResources.costs.clean;
  }

  get feedEffect() {
    return this.pet.effects.feed;
  }

  get trainEffect() {
    return this.pet.effects.train;
  }

  get cleanEffect() {
    return this.pet.effects.clean;
  }

  getCurrentLevel() {
    return this.levelConfig[this.currentLevelIndex - 1];
  }

  private get numOfLevels() {
    return this.levelConfig.length;
  }

  private get currentResources() {
    return this.getCurrentLevel().resources;
  }

  private get pet() {
    return this.getCurrentLevel().pet;
  }
}
