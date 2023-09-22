import { Game } from "../../src/models/Game";
import { LevelsMother } from "./LevelsMother";

export class GameMother {
  static new(numOfLevels: number = 1): Game {
    return new Game(LevelsMother.levelsConfig(numOfLevels));
  }
}
