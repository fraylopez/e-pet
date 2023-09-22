import { Levels } from "./Levels";
import { Stats } from "./Stats";

export class Pet {
  private hunger: number;
  private happyness: number;
  private health: number;

  constructor(
    private readonly levels: Levels,
  ) {
    this.hunger = this.levels.initialHunger;
    this.happyness = this.levels.initialHappyness;
    this.health = this.levels.initialHealth;
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

  isDead(): boolean {
    return this.health <= 0 || this.hunger >= 100 || this.happyness <= 0;
  }

  update() {
    this.hunger = Math.min(100, this.hunger + this.levels.hungerConsumption);
    this.happyness = Math.max(0, this.happyness + this.levels.happynessConsumption);
    this.health = Math.max(0, this.health + this.levels.healthConsumption);
  }

  feed() {
    this.applyMods(this.levels.feedEffect);
  }

  train() {
    this.applyMods(this.levels.trainEffect);
  }

  clean() {
    this.applyMods(this.levels.cleanEffect);
  }

  private applyMods(modifiers: Stats) {
    this.hunger = Math.max(0, this.hunger + modifiers.hunger);
    this.happyness = Math.min(100, this.happyness + modifiers.happyness);
    this.health = Math.min(100, this.health + modifiers.health);
  }
}


