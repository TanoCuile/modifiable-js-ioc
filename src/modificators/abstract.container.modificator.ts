import { ContainerModificatorInterface } from '../interfaces/container.modificator.interface';
import { ModifiableContainerInterface } from '../interfaces/modifiable-container.interface';

export class AbstractContainerModificator
  implements ContainerModificatorInterface {
  protected container!: ModifiableContainerInterface;

  applyModifier(container: ModifiableContainerInterface): void {
    this.container = container;
  }

  get(key: string) {}

  has(key: string): boolean {
    return false;
  }

  set(serviceConfiguration: { key: string; value: any }) {}
}
