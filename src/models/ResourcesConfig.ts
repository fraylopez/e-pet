import { ResourceBatch } from "./ResourceBatch";

export interface ResourcesConfig {
  initial: ResourceBatch;
  renewalRate: ResourceBatch;
  costs: {
    feed: number;
    train: number;
    clean: number;
  };
}
