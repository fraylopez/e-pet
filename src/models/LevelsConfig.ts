import { Level } from "./Level";
import { ResourceBatch } from "./ResourceBatch";

export type LevelsConfig = {
  initial: ResourceBatch;
  levels: Level[];
};
