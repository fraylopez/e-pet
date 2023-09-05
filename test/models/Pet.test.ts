import { expect } from "chai";
import { Pet } from "../../src/models/Pet";
import { TestName } from "../utils/TestName";

describe(`${TestName(__dirname, Pet)}`, () => {

  describe('initialization', () => {

    it('should start with value 50 hunger', () => {
      const pet = PetBuilder.new();
      expect(pet.getHunger()).equal(50);
    });

    it('should start with value 50 happyness', () => {
      const pet = PetBuilder.new();
      expect(pet.getHappyness()).equal(50);
    });

    it('should start with value 50 health', () => {
      const pet = PetBuilder.new();
      expect(pet.getHealth()).equal(50);
    });
  });
  describe('tick update', () => {
    it("should increase hunger on tick update", () => {
      const pet = PetBuilder.new();
      pet.update();
      expect(pet.getHunger()).greaterThan(50);
    });

    it("should decrease happyness on tick update", () => {
      const pet = PetBuilder.new();
      pet.update();
      expect(pet.getHappyness()).lessThan(50);
    });

    it("should decrease health on tick update", () => {
      const pet = PetBuilder.new();
      pet.update();
      expect(pet.getHealth()).lessThan(50);
    });
  });

  describe('actions', () => {
    it("should decrease hunger on feed", () => {
      const pet = PetBuilder.new();
      pet.feed();
      expect(pet.getHunger()).lessThan(50);
    });

    it("should increase happyness on feed", () => {
      const pet = PetBuilder.new();
      pet.feed();
      expect(pet.getHappyness()).greaterThan(50);
    });

    it("should increase health on train", () => {
      const pet = PetBuilder.new();
      pet.train();
      expect(pet.getHealth()).greaterThan(50);
    });

    it("should decrease hunger on train", () => {
      const pet = PetBuilder.new();
      pet.train();
      expect(pet.getHunger()).lessThan(50);
    });

    it("should increase happyness on clean", () => {
      const pet = PetBuilder.new();
      pet.clean();
      expect(pet.getHappyness()).greaterThan(50);
    });
  });
});


class PetBuilder {
  static new() {
    return new Pet(PetConfig.new());
  }
}

class PetConfig {
  static new() {
    return {
      initial: {
        hunger: 50,
        happyness: 50,
        health: 50,
      },
      effects: {
        feed: {
          hunger: -30,
          happyness: 5,
          health: 0,
        },
        train: {
          hunger: -10,
          health: 15,
          happyness: 0,
        },
        clean: {
          happyness: 25,
          hunger: 10,
          health: 0,
        },
      },
      consumptions: {
        hunger: 10,
        happyness: -15,
        health: -10,
      },
    };
  }
}

