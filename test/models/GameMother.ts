import { Game } from "../../src/models/Game";
import { LevelsMother } from "./LevelsMother";

export class GameMother {
  static new(iteration: number = 0): Game {
    return new Game(LevelsMother.levelsConfig());
  }
}
