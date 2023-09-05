import { PetConfig } from "./PetConfig";
import { Resources } from "./Resources";

export class Pet {
  private hunger: number;
  private happyness: number;
  private health: number;

  constructor(
    private readonly config: PetConfig,
    private readonly resources: Resources
  ) {
    this.hunger = this.config.initial.hunger;
    this.happyness = this.config.initial.happyness;
    this.health = this.config.initial.health;
  }

  getHunger(): number {
    return this.hunger;
  }

  getHappyness(): number {
    return this.happyness;
  }

  getHealth(): number {
    return this.health;
  }

  update() {
    this.hunger += this.config.consumptions.hunger;
    this.happyness += this.config.consumptions.happyness;
    this.health += this.config.consumptions.health;
  }

  feed() {
    this.applyMods(this.config.effects.feed);
    this.resources.consumeFood();
  }

  train() {
    this.applyMods(this.config.effects.train);
    this.resources.consumeTreat();
  }

  clean() {
    this.applyMods(this.config.effects.clean);
    this.resources.consumeSoap();
  }

  private applyMods(modifiers: Stats) {
    this.hunger += modifiers.hunger;
    this.happyness += modifiers.happyness;
    this.health += modifiers.health;
  }
}

export interface Stats {
  hunger: number,
  happyness: number,
  health: number,
}
