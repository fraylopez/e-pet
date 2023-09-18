import { Pet } from "../../src/models/Pet";
import { LevelsMother } from "./LevelsMother";

export class PetMother {
  static new() {
    return new Pet(LevelsMother.new());
  }
}
