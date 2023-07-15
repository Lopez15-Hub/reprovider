import Provider from "./provider";

export class ProviderContext {
  static get(provider: Provider): Provider {
    return provider;
  }
}
