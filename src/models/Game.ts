import { Levels } from "./Levels";
import { LevelsConfig } from "./LevelsConfig";
import { Pet } from "./Pet";
import { Resources } from "./Resources";

export class Game {

  private readonly pet: Pet;
  private readonly resources: Resources;
  private readonly levels: Levels;

  constructor(levels: LevelsConfig) {
    this.levels = new Levels(levels);
    this.resources = new Resources(this.levels);
    this.pet = new Pet(this.levels);
  }

  isGameOver(): boolean {
    return this.pet.isDead();
  }

  getLevel() {
    return this.levels.current;
  }
  getIteration() {
    return this.levels.iteration;
  }

  getNumberOfIterations() {
    return this.levels.getNumberOfIterations();
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
    this.pet.update();
    this.resources.update();
    this.levels.next();
  }
}
