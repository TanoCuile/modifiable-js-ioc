import { ContainerModificatorInterface } from '../interfaces/container.modificator.interface';
import { AbstractContainerModificator } from './abstract.container.modificator';

export class FactoryContainerModificator extends AbstractContainerModificator
  implements ContainerModificatorInterface {
  /**
   * @inheritdoc
   */
  get(key: string) {
    if (
      this.container.getServices()[key] &&
      this.container.getServices()[key].factory
    ) {
      this.setUpValue(
        key,
        this.container.getServices()[key].factory,
        this.container.getServices()[key].args
      );
      return this.container.getServices()[key].value;
    }
  }

  /**
   * @inheritdoc
   */
  has(key: string): boolean {
    return (
      !!this.container.getServices()[key] &&
      this.container.getServices()[key].factory
    );
  }

  /**
   * @inheritdoc
   */
  set({
    key,
    factory,
    args = [],
    eager = false,
  }: {
    key: string;
    factory: (...args) => any;
    args?: any[];
    eager?: boolean;
  }) {
    if (factory) {
      if (eager) {
        this.setUpValue(key, factory, args);
        return;
      }

      const serviceDescr: {
        factory: (...args) => any;
        loaded: boolean;
        args: any[];
        value: any | undefined;
      } = {
        args,
        factory,
        loaded: eager,
        value: undefined,
      };

      this.container.getServices()[key] = serviceDescr;
    }
  }

  private setUpValue(
    key: string,
    factory: (...args: any[]) => any,
    args: any[]
  ) {
    this.container.getServices()[key] = { value: factory(...args) };
  }
}
