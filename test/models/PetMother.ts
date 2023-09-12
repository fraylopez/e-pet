import { Pet } from "../../src/models/Pet";
import { PetConfigMother } from "./PetConfigMother";

export class PetMother {
  static new() {
    return new Pet(
      PetConfigMother.new(),
    );
  }
}
