import { Pet } from "./Pet";

interface IPlayerConfig {
  initialResources: {
    food: number,
    soap: number,
    treat: number,
  },
  renewalRate: {
    food: number,
    soap: number,
    treat: number,
  },
  consumptions: {
    feed: number,
    train: number,
    clean: number,
  };
}

export class Player {
  private food: number = 10;
  private soap: number = 10;
  private treat: number = 10;
  constructor(
    private readonly config: IPlayerConfig
  ) { }

  update(renewals: { food: number, soap: number, treat: number; }) {
    this.food += renewals.food;
    this.soap += renewals.soap;
    this.treat += renewals.treat;
  }

  feed() {
    this.food -= this.config.consumptions.feed;
  }

  train() {
    this.treat -= this.config.consumptions.train;
  }

  clean() {
    this.soap -= this.config.consumptions.clean;
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
}
