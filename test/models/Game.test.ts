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
});
