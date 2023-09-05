export interface GameView {
  launch(): void;
  showOptions(): Promise<void>;
  renderState(): unknown;
  showGameOver(): void;
}