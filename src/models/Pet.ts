import { PetConfig } from "./PetConfig";
import { Resources } from "./Resources";
import { Stats } from "./Stats";

export class Pet {
  private hunger: number;
  private happyness: number;
  private health: number;

  constructor(
    private readonly config: PetConfig,
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

  update(deltas: Partial<Stats>) {
    this.hunger += deltas.hunger || 0;
    this.happyness += deltas.happyness || 0;
    this.health += deltas.health || 0;
  }

  feed() {
    this.applyMods(this.config.effects.feed);
  }

  train() {
    this.applyMods(this.config.effects.train);
  }

  clean() {
    this.applyMods(this.config.effects.clean);
  }

  private applyMods(modifiers: Stats) {
    this.hunger += modifiers.hunger;
    this.happyness += modifiers.happyness;
    this.health += modifiers.health;
  }
}


