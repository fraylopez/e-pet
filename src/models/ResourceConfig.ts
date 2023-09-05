export interface ResourceConfig {
  initial: {
    food: number;
    soap: number;
    treat: number;
  };
  renewalRate: {
    food: number;
    soap: number;
    treat: number;
  };
  consumptions: {
    feed: number;
    train: number;
    clean: number;
  };
}
