import { ResourceBatch } from "./ResourceBatch";


export interface Level {
  renewalRate: ResourceBatch;
  consumptions: {
    feed: number;
    train: number;
    clean: number;
  };
}
