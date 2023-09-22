export interface GameView {
  launch(): void;
  showOptions(): void;
  renderState(): unknown;
  showGameOver(): void;
}