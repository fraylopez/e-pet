import { expect } from "chai";
import { Pet } from "../src/Pet";

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


