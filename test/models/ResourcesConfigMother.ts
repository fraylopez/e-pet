import { ResourcesConfig } from "../../src/models/ResourcesConfig";

export class ResourcesConfigMother {
  static default() {
    return {
      initial: this.initialBatch(),
      renewalRate: this.renewalRate(),
      costs: this.costs(),
    } as ResourcesConfig;
  };

  private static initialBatch(overrides: Partial<ResourcesConfig> = {}) {
    return {
      food: 100,
      treat: 100,
      soap: 100,
      ...overrides,
    };
  }

  private static renewalRate(overrides: Partial<ResourcesConfig> = {}) {
    return {
      food: 1,
      treat: 1,
      soap: 1,
      ...overrides,
    };
  }

  private static costs(overrides: Partial<ResourcesConfig> = {}) {
    return {
      feed: -1,
      train: -1,
      clean: -1,
      ...overrides,
    };
  }
}
