export class Pet {
  constructor(
    private hunger: number = 50,
    private happyness: number = 50,
    private health: number = 50

  ) { }

  getHunger(): number {
    return this.hunger;
  }

  getHappyness(): number {
    return this.happyness;
  }

  getHealth(): number {
    return this.health;
  }


  deltaHunger(delta: number) {
    this.hunger += delta;
  }

  deltaHappyness(delta: number) {
    this.happyness += delta;
  }

  deltaHealth(delta: number) {
    this.health += delta;
  }
}
