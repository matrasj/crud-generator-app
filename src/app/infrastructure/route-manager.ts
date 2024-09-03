export class RouteManager {
  public static getHome(): string[] {
    return [''];
  }

  public static getEntities(): string[] {
    return ['entities'];
  }

  public static getConfiguration(): string[] {
    return ['configuration'];
  }

  public static getConfigurationEntitiesTable(): string[] {
    return ['', 'configuration', 'entities'];
  }

  public static getConfigurationEntityCreateForm(): string[] {
    return ['', 'configuration', 'entities', 'create'];
  }
}
