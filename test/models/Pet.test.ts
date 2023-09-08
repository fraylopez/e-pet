import { expect } from "chai";
import { Pet } from "../../src/models/Pet";
import { TestName } from "../utils/TestName";
import { PetConfigMother } from "./PetConfigMother";
import { ResourcesConfigMother } from "./ResourcesConfigMother";
import { ResourcesConfig } from "../../src/models/ResourcesConfig";
import { Resources } from "../../src/models/Resources";

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
    return new Pet(
      PetConfigMother.new(),
      new Resources(ResourcesConfigMother.default()),
    );
  }
}


