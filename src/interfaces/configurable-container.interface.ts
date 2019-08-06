import { ModifiableContainerInterface } from './modifiable-container.interface';
import { ContainerModificatorInterface } from './container.modificator.interface';

export interface ConfigurableContainerInterface {
  /**
   * Add modifier for container.
   *
   * @param modificator Modifier like freezee or inherit
   */
  addModificator(
    modificator: ContainerModificatorInterface
  ): ModifiableContainerInterface;
}
