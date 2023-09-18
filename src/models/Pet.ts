import { Levels } from "./Levels";
import { Stats } from "./Stats";

export class Pet {
  private hunger: number;
  private happyness: number;
  private health: number;

  constructor(
    private readonly levels: Levels,
  ) {
    this.hunger = this.levels.getPetInitialStats().hunger;
    this.happyness = this.levels.getPetInitialStats().happyness;
    this.health = this.levels.getPetInitialStats().health;
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
    this.applyMods(this.levels.getEffects().feed);
  }

  train() {
    this.applyMods(this.levels.getEffects().train);
  }

  clean() {
    this.applyMods(this.levels.getEffects().clean);
  }

  private applyMods(modifiers: Stats) {
    this.hunger += modifiers.hunger;
    this.happyness += modifiers.happyness;
    this.health += modifiers.health;
  }
}


