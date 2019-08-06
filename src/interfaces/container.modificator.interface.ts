import { ModifiableContainerInterface } from './modifiable-container.interface';

export interface ContainerModificatorInterface {
  applyModifier(container: ModifiableContainerInterface): void;

  /**
   * Get's the element of container by name
   *
   * @param {string} key Name of element in container
   */
  get(key: string): any | void;

  /**
   * Checks the element in container exists by name
   *
   * @param {string} key Name of element in container
   */
  has(key: string): boolean;

  /**
   * Put's element into container with some name
   *
   * @param {string} serviceInfo.key Name of element in container
   * @param {any} serviceInfo.value Value of elements
   */
  set(serviceInfo: { key: string; value: any }): void;
}
