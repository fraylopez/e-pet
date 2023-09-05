import { GameController } from "../../controllers/GameController";
import { GameView } from "../GameView";

import readline from "readline";
export class ConsoleGameView implements GameView {
  private readline;
  constructor(
    private readonly gameController: GameController
  ) {
    this.readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  launch(): void {
    console.log("Launching game...");
  }

  renderState(): void {
    console.log(`Hunger: ${this.gameController.getHunger()} | Food: ${this.gameController.getFood()}`);
    console.log(`Happyness: ${this.gameController.getHappyness()} | Treats: ${this.gameController.getTreats()}`);
    console.log(`Health: ${this.gameController.getHealth()} | Soap: ${this.gameController.getSoap()}`);
  }

  showOptions(): Promise<void> {
    Object.keys(GameOption).map((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

    return new Promise((resolve) => {
      this.readline.question("Choose an option: ", (option) => {
        this.handleOption(option as GameOption, parseInt(option));
        resolve();
      });

    });
  }

  showGameOver(): void {
    console.log("Game over!");
  }

  private handleOption(option: GameOption, index: number): void {
    if (isNaN(index)) {
      console.log("Invalid option");
      return;
    }
    switch (option) {
      case GameOption.FEED:
        this.gameController.feed();
        break;
      case GameOption.TRAIN:
        this.gameController.train();
        break;
      case GameOption.CLEAN:
        this.gameController.clean();
        break;
      default:
        console.log("Invalid option");
        break;
    }
  }
}

enum GameOption {
  FEED = "1",
  TRAIN = "2",
  CLEAN = "3",
}