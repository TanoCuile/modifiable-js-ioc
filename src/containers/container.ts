import { ContainerInterface } from '../interfaces/container.interface';
import { AbstractContainer } from './abstract.container';
import { ConfigurableContainerInterface } from '../interfaces/configurable-container.interface';
import { ModifiableContainerInterface } from '../interfaces/modifiable-container.interface';

export class Container extends AbstractContainer
  implements
    ModifiableContainerInterface,
    ConfigurableContainerInterface,
    ContainerInterface {
  setBatchDependencies(dependencies: { [key: string]: any }) {
    Object.keys(dependencies).forEach((dependencyName) =>
      this.set({ key: dependencyName, value: dependencies[dependencyName] })
    );
  }
}
