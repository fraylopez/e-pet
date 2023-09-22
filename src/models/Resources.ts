import assert from "assert";
import { Levels } from "./Levels";

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
    assert(this.soap >= Math.abs(this.levels.cleanCost), "Not enough soap");
    this.soap = Math.max(0, this.soap + this.levels.cleanCost);
  }

  train() {
    assert(this.treats >= Math.abs(this.levels.trainCost), "Not enough treats");
    this.treats = Math.max(0, this.treats + this.levels.trainCost);
  }

  feed() {
    assert(this.food >= Math.abs(this.levels.feedCost), "Not enough food");
    this.food = Math.max(0, this.food + this.levels.feedCost);
  }

  update() {
    this.food += this.levels.foodRenewalRate;
    this.soap += this.levels.soapRenewalRate;
    this.treats += this.levels.treatsRenewalRate;
  }
}
