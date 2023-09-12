import { ResourcesConfigMother } from "./ResourcesConfigMother";
import { Resources } from "../../src/models/Resources";

export class ResourcesMother {
  static new() {
    return new Resources(ResourcesConfigMother.default());
  }
}
