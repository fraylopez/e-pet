import { expect } from "chai";
import { Pet } from "../../src/models/Pet";
import { TestName } from "../utils/TestName";
import { PetMother } from "./PetMother";

describe(`${TestName(__dirname, Pet)}`, () => {

  describe('initialization', () => {

    it('should start with hunger', () => {
      const pet = PetMother.new();
      expect(pet.getHunger()).greaterThan(0);
    });

    it('should start with happyness', () => {
      const pet = PetMother.new();
      expect(pet.getHappyness()).greaterThan(0);
    });

    it('should start with health', () => {
      const pet = PetMother.new();
      expect(pet.getHealth()).greaterThan(0);
    });
  });
  describe('tick update', () => {
    it("should increase hunger on tick update", () => {
      const pet = PetMother.new();
      const initialHunger = pet.getHunger();
      pet.update({ hunger: 1 });
      expect(pet.getHunger()).equal(initialHunger + 1);
    });

    it("should decrease happyness on tick update", () => {
      const pet = PetMother.new();
      const initialHappyness = pet.getHappyness();
      pet.update({ happyness: -1 });
      expect(pet.getHappyness()).equal(initialHappyness - 1);
    });

    it("should decrease health on tick update", () => {
      const pet = PetMother.new();
      const initialHealth = pet.getHealth();
      pet.update({ health: -1 });
      expect(pet.getHealth()).equal(initialHealth - 1);
    });
  });

  describe('actions', () => {
    it("should decrease hunger on feed", () => {
      const pet = PetMother.new();
      const initialHunger = pet.getHunger();
      pet.feed();
      expect(pet.getHunger()).lessThan(initialHunger);
    });

    it("should increase happyness on feed", () => {
      const pet = PetMother.new();
      const initialHappyness = pet.getHappyness();
      pet.feed();
      expect(pet.getHappyness()).greaterThan(initialHappyness);
    });

    it("should increase health on train", () => {
      const pet = PetMother.new();
      const initialHealth = pet.getHealth();
      pet.train();
      expect(pet.getHealth()).greaterThan(initialHealth);
    });

    it("should decrease hunger on train", () => {
      const pet = PetMother.new();
      const initialHunger = pet.getHunger();
      pet.train();
      expect(pet.getHunger()).lessThan(initialHunger);
    });

    it("should increase happyness on clean", () => {
      const pet = PetMother.new();
      const initialHappyness = pet.getHappyness();
      pet.clean();
      expect(pet.getHappyness()).greaterThan(initialHappyness);
    });
  });
});



