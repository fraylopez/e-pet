import { expect } from "chai";

describe('Pet', () => {
  it('should start with value 50 hunger', () => {
    const pet = new Pet();
    expect(pet.getHunger()).equal(50);
  });
});


class Pet {
  constructor(
    private readonly hunger: number = 50,
  ) { }

  getHunger(): number {
    return this.hunger;
  }

}