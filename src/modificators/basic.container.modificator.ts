import { ContainerModificatorInterface } from '../interfaces/container.modificator.interface';
import { AbstractContainerModificator } from './abstract.container.modificator';

export class BasicContainerModificator extends AbstractContainerModificator
  implements ContainerModificatorInterface {

  /**
   * @inheritdoc
   */
  get(key: string) {
    return this.container.getServices()[key];
  }

  /**
   * @inheritdoc
   */
  has(key: string): boolean {
    return !!this.container.getServices()[key];
  }

  /**
   * @inheritdoc
   */
  set({ key, value }: { key: string; value: any }) {
    this.container.getServices()[key] = value;
  }
}
