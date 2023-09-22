import readline from "readline-sync";
import { GameController } from "../../controllers/GameController";
import { GameView } from "../GameView";

enum GameOption {
  FEED = "1",
  TRAIN = "2",
  CLEAN = "3",
}

export class ConsoleGameView implements GameView {
  constructor(
    private readonly gameController: GameController
  ) { }

  launch(): void {
    console.log("Launching game...");
  }

  renderState(): void {
    console.log("");
    console.log("#######################");
    console.log("######### ePet ########");
    console.log("#######################");
    console.log("");
    console.log(` Level: ${this.gameController.getLevel()} | Iteration: ${this.gameController.getIteration()}/${this.gameController.getNumberOfIterations()}`);
    console.log("");
    console.log(` Hunger: ${this.gameController.getHunger()} | Food: ${this.gameController.getFood()}`);
    console.log(` Happyness: ${this.gameController.getHappyness()} | Treats: ${this.gameController.getTreats()}`);
    console.log(` Health: ${this.gameController.getHealth()} | Soap: ${this.gameController.getSoap()}`);
    console.log("");
    console.log("#######################");
  }

  showOptions() {
    Object.keys(GameOption).map((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

    const option = readline.question("Choose an option: ");
    const action = this.handleOption(option as unknown);
    if (action) {
      action();
    }
    else {
      this.showOptions();
    }
  }

  showGameOver(): void {
    console.log("Game over!");
  }

  private handleOption(option: unknown): (() => void) | undefined {
    if (isNaN(option as number)) {
      console.log("Invalid option");
      return;
    }
    switch (option) {
      case GameOption.FEED:
        return () => this.gameController.feed();
      case GameOption.TRAIN:
        return () => this.gameController.train();
      case GameOption.CLEAN:
        return () => this.gameController.clean();
      default:
        console.log("Invalid option");
        return;
    }
  }
}

