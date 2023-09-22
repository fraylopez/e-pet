import { Game } from "../models/Game";

export class GameController {

  constructor(
    private readonly game: Game
  ) { }

  isGameOver(): boolean {
    return this.game.isGameOver();
  }

  getIteration() {
    return this.game.getIteration();
  }

  getNumberOfIterations() {
    return this.game.getNumberOfIterations();
  }

  getLevel() {
    return this.game.getLevel();
  }

  getHunger(): number {
    return this.game.getHunger();
  }

  getHappyness(): number {
    return this.game.getHappyness();
  }

  getHealth(): number {
    return this.game.getHealth();
  }

  getFood(): number {
    return this.game.getFood();
  }

  getSoap(): number {
    return this.game.getSoap();
  }

  getTreats(): number {
    return this.game.getTreats();
  }

  update(): void {
    this.game.update();
  }

  feed(): void {
    this.game.feed();
  }

  train(): void {
    this.game.train();
  }

  clean(): void {
    this.game.clean();
  }
}