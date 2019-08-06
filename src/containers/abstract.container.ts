import { ModifiableContainerInterface } from '../interfaces/modifiable-container.interface';
import { ContainerModificatorInterface } from '../interfaces/container.modificator.interface';
import { ConfigurableContainerInterface } from '../interfaces/configurable-container.interface copy';
import { ContainerInterface } from '../interfaces/container.interface';

export abstract class AbstractContainer
  implements
    ModifiableContainerInterface,
    ConfigurableContainerInterface,
    ContainerInterface {
  protected services: { [key: string]: any } = {};
  protected modificators: ContainerModificatorInterface[] = [];

  /**
   * @inheritdoc
   */
  addModificator(
    modificator: ContainerModificatorInterface
  ): ModifiableContainerInterface {
    this.modificators.push(modificator);
    return this;
  }

  /**
   * @inheritdoc
   */
  getServices(): { [key: string]: any } {
    return this.services;
  }
  setServices(services: { [key: string]: any }): void {
    this.services = services;
  }

  /**
   * @inheritdoc
   */
  has(key: string): boolean {
    for (const modificator of this.modificators) {
      if (modificator.has(key)) {
        return true;
      }
    }

    return false;
  }

  /**
   * @inheritdoc
   */
  set(setConfiguration: { key: any; value: any }): ContainerInterface {
    for (const modificator of this.modificators) {
      modificator.set(setConfiguration);
    }

    return this;
  }

  /**
   * @inheritdoc
   */
  get(key: string) {
    for (const modificator of this.modificators) {
      const foundValue = modificator.get(key);
      if (foundValue) {
        return foundValue;
      }
    }
  }
}
