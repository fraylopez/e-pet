import { expect } from "chai";
import { TestName } from "../utils/TestName";
import { ResourcesConfigMother } from "./ResourcesConfigMother";
import { Resources } from "../../src/models/Resources";

describe(`${TestName(__dirname, Resources)}`, () => {
  const initial = ResourcesConfigMother.initialBatch();
  describe('initialization', () => {

    it('should start with value initial food', () => {
      const player = PlayerBuilder.new();
      expect(player.getFood()).equal(initial.food);
    });

    it('should start with value initial treats', () => {
      const player = PlayerBuilder.new();
      expect(player.getTreats()).equal(initial.treat);
    });

    it('should start with value initial soap', () => {
      const player = PlayerBuilder.new();
      expect(player.getSoap()).equal(initial.soap);
    });
  });

  describe('tick update', () => {
    it("should increase food on tick update", () => {
      const player = PlayerBuilder.new();
      player.update();
      expect(player.getFood()).greaterThan(initial.food);
    });

    it("should increase treats on tick update", () => {
      const player = PlayerBuilder.new();
      player.update();
      expect(player.getTreats()).greaterThan(initial.treat);
    });

    it("should increase soap on tick update", () => {
      const player = PlayerBuilder.new();
      player.update();
      expect(player.getSoap()).greaterThan(initial.soap);
    });
  });

  describe('actions', () => {
    it("should consume food on feed", () => {
      const player = PlayerBuilder.new();
      player.feed();
      expect(player.getFood()).lessThan(initial.food);
    });

    it("should consume treats on train", () => {
      const player = PlayerBuilder.new();
      player.train();
      expect(player.getTreats()).lessThan(initial.treat);
    });

    it("should consume soap on clean", () => {
      const player = PlayerBuilder.new();
      player.clean();
      expect(player.getSoap()).lessThan(initial.soap);
    });
  });
});


class PlayerBuilder {
  static new() {
    return new Resources(ResourcesConfigMother.default());
  }
}
