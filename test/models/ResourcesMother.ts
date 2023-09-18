import { Resources } from "../../src/models/Resources";
import { LevelsMother } from "./LevelsMother";

export class ResourcesMother {
  static new() {
    return new Resources(LevelsMother.new());
  }
}
