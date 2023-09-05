import { GameController } from "./controllers/GameController";
import { Game } from "./models/Game";
import { GameConfig } from "./models/GameConfig";
import { GameView } from "./views/GameView";
import { ConsoleGameView } from "./views/console/ConsoleGameView";

export class EntryPoint {
  private readonly gameView: GameView;
  private readonly controller: GameController;
  constructor(config: GameConfig) {
    this.controller = new GameController(new Game(config));
    this.gameView = new ConsoleGameView(this.controller);
  }

  async start() {
    this.gameView.launch();
    while (!this.controller.isGameOver()) {
      this.gameView.renderState();
      await this.gameView.showOptions();
      this.controller.update();
    }
    this.gameView.showGameOver();
  }

}