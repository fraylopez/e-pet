import { ResourceBatch } from "./ResourceBatch";

export interface ResourcesConfig {
  initial: ResourceBatch;
  renewalRate: ResourceBatch;
  consumptions: {
    feed: number;
    train: number;
    clean: number;
  };
}
