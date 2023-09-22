import { ResourcesConfig } from "../../src/models/ResourcesConfig";

export class ResourcesConfigMother {
  static default() {
    return {
      initial: this.initialBatch(),
      renewalRate: this.renewalRate(),
      costs: this.costs(),
    } as ResourcesConfig;
  };

  private static initialBatch(overrides: Partial<ResourcesConfig["initial"]> = {}) {
    return {
      food: 100,
      treats: 100,
      soap: 100,
      ...overrides,
    } as ResourcesConfig["initial"];
  }

  private static renewalRate(overrides: Partial<ResourcesConfig['renewalRate']> = {}) {
    return {
      food: 1,
      treats: 1,
      soap: 1,
      ...overrides,
    } as ResourcesConfig["renewalRate"];
  }

  private static costs(overrides: Partial<ResourcesConfig["costs"]> = {}) {
    return {
      feed: -1,
      train: -1,
      clean: -1,
      ...overrides,
    } as ResourcesConfig["costs"];
  }
}
