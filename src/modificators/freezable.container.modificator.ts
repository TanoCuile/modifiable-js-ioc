import { AbstractContainerModificator } from './abstract.container.modificator';
import { ContainerModificatorInterface } from '../interfaces/container.modificator.interface';
import { ModifiableContainerInterface } from '../interfaces/modifiable-container.interface';

const IS_FREEZED_SERVICE_NAME = 'is_freesed';
const FREEZ_SERVICE_NAME = 'freez';

/**
 * Allows to freez container
 */
export class FreezableContainerModificator extends AbstractContainerModificator
  implements ContainerModificatorInterface {
  applyModifier(container: ModifiableContainerInterface) {
    super.applyModifier(container);
    container.getServices()[IS_FREEZED_SERVICE_NAME] = false;
    container.getServices()[FREEZ_SERVICE_NAME] = () => this.freez();
  }

  freez() {
    this.container.getServices()[IS_FREEZED_SERVICE_NAME] = true;
  }

  set(serviceConfiguration) {
    if (this.container.getServices()[IS_FREEZED_SERVICE_NAME]) {
      throw new Error(
        JSON.stringify({
          message:
            "Service already freezed. It's impossible to set or change service.",
          type: 'service_freezed_error',
          data: {
            serviceConfiguration,
          },
        })
      );
    }
  }
}
