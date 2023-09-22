import { expect } from "chai";
import { TestName } from "../utils/TestName";
import { Resources } from "../../src/models/Resources";
import { ResourcesMother } from "./ResourcesMother";

describe(`${TestName(__dirname, Resources)}`, () => {
  describe('initialization', () => {
    it('should start with value initial food', () => {
      const resources = ResourcesMother.new();
      expect(resources.getFood()).greaterThan(0);
    });

    it('should start with value initial treats', () => {
      const resources = ResourcesMother.new();
      expect(resources.getTreats()).greaterThan(0);
    });

    it('should start with value initial soap', () => {
      const resources = ResourcesMother.new();
      expect(resources.getSoap()).greaterThan(0);
    });
  });

  describe('tick update', () => {
    it("should increase food on tick update", () => {
      const resources = ResourcesMother.new();
      const initialFood = resources.getFood();
      resources.update();
      expect(resources.getFood()).greaterThan(initialFood);
    });

    it("should increase treats on tick update", () => {
      const resources = ResourcesMother.new();
      const initialTreats = resources.getTreats();
      resources.update();
      expect(resources.getTreats()).greaterThan(initialTreats);
    });

    it("should increase soap on tick update", () => {
      const resources = ResourcesMother.new();
      const initialSoap = resources.getSoap();
      resources.update();
      expect(resources.getSoap()).greaterThan(initialSoap);
    });
  });

  describe('consumptions', () => {
    it("should consume food on feed", () => {
      const resources = ResourcesMother.new();
      const initialFood = resources.getFood();
      resources.feed();
      expect(resources.getFood()).lessThan(initialFood);
    });

    it("should consume treats on train", () => {
      const resources = ResourcesMother.new();
      const initialTreats = resources.getTreats();
      resources.train();
      expect(resources.getTreats()).lessThan(initialTreats);
    });

    it("should consume soap on clean", () => {
      const resources = ResourcesMother.new();
      const initialSoap = resources.getSoap();
      resources.clean();
      expect(resources.getSoap()).lessThan(initialSoap);
    });

    it("should not clean if soap is less than required", () => {
      const resources = ResourcesMother.new();
      while (resources.getSoap() > 0) {
        resources.clean();
      }
      const currentSoap = resources.getSoap();
      expect(() => resources.clean()).to.throw("Not enough soap");
      expect(resources.getSoap()).equal(currentSoap);
    });
  });
});
