import { Levels } from "./Levels";
import { ResourceBatch } from "./ResourceBatch";
import { ResourcesConfig } from "./ResourcesConfig";

export class Resources {
  private food: number;
  private soap: number;
  private treat: number;

  constructor(
    private readonly levels: Levels,
  ) {
    this.food = this.levels.getInitialResources().food;
    this.soap = this.levels.getInitialResources().soap;
    this.treat = this.levels.getInitialResources().treat;
  }

  getFood(): number {
    return this.food;
  }

  getSoap(): number {
    return this.soap;
  }

  getTreats(): number {
    return this.treat;
  }

  clean() {
    this.soap += this.levels.getCosts().clean;
  }
  train() {
    this.treat += this.levels.getCosts().train;
  }
  feed() {
    this.food += this.levels.getCosts().feed;
  }

  update() {
    this.food += this.levels.getResources().food || 0;
    this.soap += this.levels.getResources().soap || 0;
    this.treat += this.levels.getResources().treat || 0;
  }
}
