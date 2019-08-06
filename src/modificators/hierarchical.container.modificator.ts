import { ContainerModificatorInterface } from '../interfaces/container.modificator.interface';
import { AbstractContainerModificator } from './abstract.container.modificator';
import { ContainerInterface } from '../interfaces/container.interface';
import { ScopedContainer } from '../containers/scoped.container';

/**
 * Container modifier which allows you to have container hierarchy
 */
export class HierarchicalContainerModificator
  extends AbstractContainerModificator
  implements ContainerModificatorInterface {
  protected containers: ContainerInterface[] = [];
  protected scopedContainers: ScopedContainer[] = [];

  /**
   * @inheritdoc
   */
  get(serviceName) {
    for (const container of this.containers) {
      const foundValue = container.get(serviceName);
      if (foundValue) {
        return foundValue;
      }
    }

    for (const container of this.scopedContainers) {
      const foundValue = container.getPublic(serviceName);
      if (foundValue) {
        return foundValue;
      }
    }
  }

  /**
   * @inheritdoc
   */
  has(serviceName) {
    for (const container of this.containers) {
      if (container.has(serviceName)) {
        return true;
      }
    }

    for (const container of this.scopedContainers) {
      if (container.hastPublic(serviceName)) {
        return true;
      }
    }

    return false;
  }
}
