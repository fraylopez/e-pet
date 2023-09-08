export class PetConfigMother {
  static new() {
    return {
      initial: {
        hunger: 50,
        happyness: 50,
        health: 50,
      },
      effects: {
        feed: {
          hunger: -30,
          happyness: 5,
          health: 0,
        },
        train: {
          hunger: -10,
          health: 15,
          happyness: 0,
        },
        clean: {
          happyness: 25,
          hunger: 10,
          health: 0,
        },
      },
      consumptions: {
        hunger: 10,
        happyness: -15,
        health: -10,
      },
    };
  }
}
