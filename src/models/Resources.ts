import { Levels } from "./Levels";
import { ResourceBatch } from "./ResourceBatch";
import { ResourcesConfig } from "./ResourcesConfig";

export class Resources {
  private food: number;
  private soap: number;
  private treats: number;

  constructor(
    private readonly levels: Levels,
  ) {
    this.food = this.levels.initialFood;
    this.soap = this.levels.initialSoap;
    this.treats = this.levels.initialTreats;
  }

  getFood(): number {
    return this.food;
  }

  getSoap(): number {
    return this.soap;
  }

  getTreats(): number {
    return this.treats;
  }

  clean() {
    if (this.soap >= Math.abs(this.levels.cleanCost)) {
      this.soap = Math.max(0, this.soap + this.levels.cleanCost);
    }
  }
  train() {
    if (this.treats >= Math.abs(this.levels.trainCost)) {
      this.treats = Math.max(0, this.treats + this.levels.trainCost);
    }
  }
  feed() {
    if (this.food >= Math.abs(this.levels.feedCost)) {
      this.food = Math.max(0, this.food + this.levels.feedCost);
    }
  }

  update() {
    this.food += this.levels.foodRenewalRate;
    this.soap += this.levels.soapRenewalRate;
    this.treats += this.levels.treatsRenewalRate;
  }
}
