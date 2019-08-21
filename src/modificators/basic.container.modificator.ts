import { ContainerModificatorInterface } from '../interfaces/container.modificator.interface';
import { AbstractContainerModificator } from './abstract.container.modificator';

export class BasicContainerModificator extends AbstractContainerModificator
  implements ContainerModificatorInterface {
  /**
   * @inheritdoc
   */
  get(key: string) {
    if (this.container.getServices()[key] && this.container.getServices()[key].value) {
      return this.container.getServices()[key].value;
    }
  }

  /**
   * @inheritdoc
   */
  has(key: string): boolean {
    return (
      !!this.container.getServices()[key] &&
      this.container.getServices()[key].value
    );
  }

  /**
   * @inheritdoc
   */
  set({ key, value }: { key: string; value: any }) {
    if (value) {
      this.container.getServices()[key] = { value };
    }
  }
}
