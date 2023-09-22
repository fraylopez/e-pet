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

  it('should increase hunger on update', () => {
    const game = GameMother.new();
    const initialHunger = game.getHunger();
    game.update();
    expect(game.getHunger()).greaterThan(initialHunger);
  });

  it('should decrease happyness on update', () => {
    const game = GameMother.new();
    const initialHappyness = game.getHappyness();
    game.update();
    expect(game.getHappyness()).lessThan(initialHappyness);
  });

  it('should decrease health on update', () => {
    const game = GameMother.new();
    const initialHealth = game.getHealth();
    game.update();
    expect(game.getHealth()).lessThan(initialHealth);
  });

  it('should consume food on feed', () => {
    const game = GameMother.new();
    const initialFood = game.getFood();
    game.feed();
    expect(game.getFood()).lessThan(initialFood);
  });

  it('should consume treats on train', () => {
    const game = GameMother.new();
    const initialTreats = game.getTreats();
    game.train();
    expect(game.getTreats()).lessThan(initialTreats);
  });

  it('should consume soap on clean', () => {
    const game = GameMother.new();
    const initialSoap = game.getSoap();
    game.clean();
    expect(game.getSoap()).lessThan(initialSoap);
  });

  it('should start with value initial food', () => {
    const game = GameMother.new();
    expect(game.getFood()).greaterThan(0);
  });

  it('should start with value initial treats', () => {
    const game = GameMother.new();
    expect(game.getTreats()).greaterThan(0);
  });

  it('should start with value initial soap', () => {
    const game = GameMother.new();
    expect(game.getSoap()).greaterThan(0);
  });

  it('should start with health', () => {
    const game = GameMother.new();
    expect(game.getHealth()).greaterThan(0);
  });

  it('should start with happyness', () => {
    const game = GameMother.new();
    expect(game.getHappyness()).greaterThan(0);
  });

  it('should start with hunger', () => {
    const game = GameMother.new();
    expect(game.getHunger()).greaterThan(0);
  });

  it('should start with iteration 1', () => {
    const game = GameMother.new();
    expect(game.getIteration()).equal(1);
  });

  it('should start with level 1', () => {
    const game = GameMother.new();
    expect(game.getLevel()).equal(1);
  });

  it("should game over when hunger is greater than 100", () => {
    const game = GameMother.new();
    for (let i = 0; i < 100; i++) {
      game.update();
    }
    expect(game.isGameOver()).equal(true);
  });

  it("should game over when happyness is less than 0", () => {
    const game = GameMother.new();
    for (let i = 0; i < 100; i++) {
      game.update();
    }
    expect(game.isGameOver()).equal(true);
  });

  it("should game over when health is less than 0", () => {
    const game = GameMother.new();
    for (let i = 0; i < 100; i++) {
      game.update();
    }
    expect(game.isGameOver()).equal(true);
  });

  it("should not game over on new game", () => {
    const game = GameMother.new();
    expect(game.isGameOver()).equal(false);
  });
});
