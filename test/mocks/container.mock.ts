import { ModifiableContainerInterface } from '../../src/interfaces/modifiable-container.interface';

export class ContainerMock implements ModifiableContainerInterface {
  services: any = {};
  getServices(): { [key: string]: any } {
    return this.services;
  }
  setServices(services: { [key: string]: any }): void {
    this.services = services;
  }
}
