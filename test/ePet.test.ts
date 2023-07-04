import { expect } from "chai";

describe('Pet', () => {
  it('should start with value 50 hunger', () => {
    const pet = new Pet();
    expect(pet.getHunger()).equal(50);
  });

  it("should increase hunger", () => {
    const pet = new Pet();
    pet.deltaHunger(10);
    expect(pet.getHunger()).equal(60);
  });

  it("should decrease hunger by 30 on feed", () => {
    const pet = new Pet();
    pet.deltaHunger(-10);
    expect(pet.getHunger()).equal(40);
  });

});


class Pet {

  constructor(
    private hunger: number = 50,
    private happyness: number = 50,
    private health: number = 50,

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

}