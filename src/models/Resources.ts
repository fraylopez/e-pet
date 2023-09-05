import { ResourceConfig } from "./ResourceConfig";

export class Resources {

  private food: number;
  private soap: number;
  private treat: number;

  constructor(
    private readonly config: ResourceConfig
  ) {
    this.food = this.config.initial.food;
    this.soap = this.config.initial.soap;
    this.treat = this.config.initial.treat;
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

  consumeSoap() {
    this.soap += this.config.consumptions.clean;
  }
  consumeTreat() {
    this.treat += this.config.consumptions.train;
  }
  consumeFood() {
    this.food += this.config.consumptions.feed;
  }

  update() {
    this.food += this.config.renewalRate.food;
    this.soap += this.config.renewalRate.soap;
    this.treat += this.config.renewalRate.treat;
  }
}
