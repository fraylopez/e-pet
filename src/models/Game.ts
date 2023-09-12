import { GameConfig } from "./GameConfig";
import { Levels } from "./Levels";
import { Pet } from "./Pet";
import { Resources } from "./Resources";

export class Game {
  private readonly pet: Pet;
  private readonly resources: Resources;
  private readonly levels: Levels;

  constructor(gameConfig: GameConfig) {
    this.resources = new Resources(gameConfig.resources);
    this.pet = new Pet(gameConfig.pet);
    this.levels = new Levels(gameConfig.levels);
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
    this.resources.feed();
  }
  train(): void {
    this.pet.train();
    this.resources.train();
  }
  clean(): void {
    this.pet.clean();
    this.resources.clean();
  }

  update(): void {
    this.pet.update(this.levels.getConsumptions());
    this.resources.update(this.levels.getResources());
  }
}

