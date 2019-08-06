export interface ModifiableContainerInterface {
  /**
   * Get all services
   */
  getServices(): { [key: string]: any };

  /**
   * Reset all services of container
   *
   * @param services New services object
   */
  setServices(services: { [key: string]: any }): void;
}
