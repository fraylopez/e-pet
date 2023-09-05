import { GameConfig } from "./GameConfig";
import { Pet } from "./Pet";
import { Resources } from "./Resources";

export class Game {
  private readonly pet: Pet;
  private readonly resources: Resources;

  constructor(gameConfig: GameConfig) {
    this.resources = new Resources(gameConfig.resources);
    this.pet = new Pet(gameConfig.pet, this.resources);
  }

  isGameOver(): boolean {
    return this.pet.getHunger() > 100;
  }

  getHunger(): number {
    return this.pet.getHunger();
  }

  getHappyness(): number {
    return this.pet.getHappyness();
  }

  getHealth(): number {
    return this.pet.getHealth();
  }

  getTreats(): number {
    return this.resources.getTreats();
  }

  getFood(): number {
    return this.resources.getFood();
  }

  getSoap(): number {
    return this.resources.getSoap();
  }

  feed(): void {
    this.pet.feed();
  }
  train(): void {
    this.pet.train();
  }
  clean(): void {
    this.pet.clean();
  }

  update(): void {
    this.pet.update();
    this.resources.update();
  }
}

