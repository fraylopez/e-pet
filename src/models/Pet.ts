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

  update() {
    this.hunger = Math.min(100, this.hunger + this.levels.getConsumptions().hunger);
    this.happyness = Math.max(0, this.happyness + this.levels.getConsumptions().happyness);
    this.health = Math.max(0, this.health + this.levels.getConsumptions().health);
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
    this.hunger = Math.max(0, this.hunger + modifiers.hunger);
    this.happyness = Math.min(100, this.happyness + modifiers.happyness);
    this.health = Math.min(100, this.health + modifiers.health);
  }
}


