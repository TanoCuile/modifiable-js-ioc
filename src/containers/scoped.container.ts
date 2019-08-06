import { Container } from './container';
import { ContainerInterface } from '../interfaces/container.interface';

export class ScopedContainer extends Container implements ContainerInterface {
  getPublic(serviceName: string): void | any {}
  hastPublic(serviceName: string): boolean {
    return false;
  }
}
