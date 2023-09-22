import { expect } from "chai";
import { Game } from "../../src/models/Game";
import { TestName } from "../utils/TestName";
import { GameMother } from "./GameMother";

describe(`${TestName(__dirname, Game)}`, () => {
  it('should increase iteration on update', () => {
    const game = GameMother.new();
    const initialIteration = game.getIteration();
    game.update();
    expect(game.getIteration()).greaterThan(initialIteration);
  });

  it('should increase level on update', () => {
    const game = GameMother.new(2);
    const initialLevel = game.getLevel();
    for (let i = 0; i < game.getNumberOfIterations(); i++) {
      game.update();
    }
    expect(game.getLevel()).greaterThan(initialLevel);
  });
});
