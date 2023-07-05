export class Pet {
  constructor(
    private hunger: number = 50,
    private happyness: number = 50,
    private health: number = 50
  ) { }

  update() {
    this.hunger += 10;
    this.happyness -= 15;
    this.health -= 10;
  }

  feed() {
    this.hunger -= 30;
    this.happyness += 5;
  }

  train() {
    this.health += 15;
    this.hunger -= 10;
  }

  clean() {
    this.happyness += 25;
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

}
