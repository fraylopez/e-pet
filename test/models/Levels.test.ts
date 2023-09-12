import { TestName } from "../utils/TestName";
import { Levels } from "../../src/models/Levels";
import { expect } from "chai";
import { LevelsMother } from "./LevelsMother";

describe(`${TestName(__dirname, Levels)}`, () => {
  it('should return the current level', () => {
    const levels = LevelsMother.new();
    expect(levels.current).equal(1);
  });

  [1, 2, 3].forEach(lvl => {
    it(`should increase the level after ${lvl * 10} iterations`, () => {
      const levels = LevelsMother.new(10);
      for (let i = 1; i < lvl * 10; i++) {
        levels.next();
      }
      expect(levels.current).equal(lvl);
    });
  });

  it('should not increase the level after reaching last level', () => {
    const levels = LevelsMother.new(3)
      .startingAt(3);
    for (let i = 0; i < 10; i++) {
      levels.next();
    }
    expect(levels.current).equal(3);
  });

  it('should return the return the resources for the current level', () => {
    const levels = LevelsMother.new();
    expect(levels.getResources()).deep.equal({ food: 10, soap: 10, treat: 10 });
  });

  it('should return the return the consumptions for the current level', () => {
    const levels = LevelsMother.new();
    expect(levels.getConsumptions()).deep.equal({ hunger: 10, health: -10, happyness: -15 });
  });
});
