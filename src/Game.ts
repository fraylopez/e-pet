import { Pet } from "./Pet";

export class Game {
  private readonly pet: Pet;
  constructor() {
    this.pet = new Pet();
  }

  getHunger(): number {
    return this.pet.getHunger();
  }

  feed(): void { }
  train(): void { }
  clean(): void { }

  update(): void { }

}