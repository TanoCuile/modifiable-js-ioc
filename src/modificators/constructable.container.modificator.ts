import { AbstractContainerModificator } from './abstract.container.modificator';

/**
 * Allows to construct or run settedu'p factories
 */
export class ConstructableContainerModificator extends AbstractContainerModificator {
  set({
    key,
    classConstructor,
    factory,
  }: {
    key: string;
    classConstructor?: { new: () => {} };
    factory?: Function;
  }) {}
}
