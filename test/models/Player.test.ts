import { expect } from "chai";
import { Player } from "../../src/models/Player";
import { TestName } from "../utils/TestName";

describe(`${TestName(__dirname, Player)}`, () => {
  describe('initialization', () => {

    it('should start with value 10 food', () => {
      const player = PlayerBuilder.new();
      expect(player.getFood()).equal(10);
    });

    it('should start with value 10 treats', () => {
      const player = PlayerBuilder.new();
      expect(player.getTreats()).equal(10);
    });

    it('should start with value 10 soap', () => {
      const player = PlayerBuilder.new();
      expect(player.getSoap()).equal(10);
    });
  });

  describe('tick update', () => {
    it("should increase food on tick update", () => {
      const player = PlayerBuilder.new();
      player.update({ food: 10, soap: 10, treat: 10 });
      expect(player.getFood()).greaterThan(10);
    });

    it("should increase treats on tick update", () => {
      const player = PlayerBuilder.new();
      player.update({ food: 10, soap: 10, treat: 10 });
      expect(player.getTreats()).greaterThan(10);
    });

    it("should increase soap on tick update", () => {
      const player = PlayerBuilder.new();
      player.update({ food: 10, soap: 10, treat: 10 });
      expect(player.getSoap()).greaterThan(10);
    });
  });

  describe('actions', () => {
    it("should decrease food on feed", () => {
      const player = PlayerBuilder.new();
      player.feed();
      expect(player.getFood()).lessThan(10);
    });

    it("should decrease treats on train", () => {
      const player = PlayerBuilder.new();
      player.train();
      expect(player.getTreats()).lessThan(10);
    });

    it("should decrease soap on clean", () => {
      const player = PlayerBuilder.new();
      player.clean();
      expect(player.getSoap()).lessThan(10);
    });
  });
});


class PlayerBuilder {
  static new() {
    return new Player({
      initialResources: {
        food: 100,
        treat: 100,
        soap: 100,
      },
      renewalRate: {
        food: 1,
        treat: 1,
        soap: 1,
      },
      consumptions: {
        feed: 1,
        train: 1,
        clean: 1,
      }
    });
  }
}

