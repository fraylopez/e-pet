import { TestName } from "../utils/TestName";
import { Levels } from "../../src/models/Levels";
import { expect } from "chai";
import { LevelsMother } from "./LevelsMother";

describe(`${TestName(__dirname, Levels)}`, () => {
  it('should return the current level', () => {
    const levels = LevelsMother.new();
    expect(levels.currentLevelIndex).equal(1);
  });

  [1, 2, 3].forEach(lvl => {
    it(`should increase the level after ${lvl * 10} iterations`, () => {
      const levels = LevelsMother.new(10);
      for (let i = 1; i < lvl * 10; i++) {
        levels.next();
      }
      expect(levels.currentLevelIndex).equal(lvl);
    });
  });

  it('should not increase the level after reaching last level', () => {
    const levels = LevelsMother.new(3)
      .startingAt(3);
    for (let i = 0; i < 10; i++) {
      levels.next();
    }
    expect(levels.currentLevelIndex).equal(3);
  });

  it('should return the return the renewal rate for the current level', () => {
    const levels = LevelsMother.new();
    expect(levels.foodRenewalRate).greaterThan(0);
    expect(levels.treatsRenewalRate).greaterThan(0);
    expect(levels.soapRenewalRate).greaterThan(0);
  });

  it('should return the return the consumptions for the current level', () => {
    const levels = LevelsMother.new();
    expect(levels.hungerConsumption).greaterThan(0);
    expect(levels.healthConsumption).lessThan(0);
    expect(levels.happynessConsumption).lessThan(0);
  });
});
