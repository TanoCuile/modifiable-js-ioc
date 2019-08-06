import { ContainerInterface } from '../interfaces/container.interface';
import { AbstractContainer } from './abstract.container';
import { ConfigurableContainerInterface } from '../interfaces/configurable-container.interface';
import { ModifiableContainerInterface } from '../interfaces/modifiable-container.interface';
import { FreezableContainerModificator } from '../modificators/freezable.container.modificator';

export class FreezableContainer extends AbstractContainer
  implements
    ModifiableContainerInterface,
    ConfigurableContainerInterface,
    ContainerInterface {
  private readonly freezModifier = new FreezableContainerModificator();

  constructor() {
    super();
    this.addModificator(this.freezModifier);
  }

  freez() {
    this.freezModifier.freez();
  }
}
