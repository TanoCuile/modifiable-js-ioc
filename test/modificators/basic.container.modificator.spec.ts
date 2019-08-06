import { expect } from '../index';
import { BasicContainerModificator } from '../../src/modificators/basic.container.modificator';
import { ContainerMock } from '../mocks/container.mock';

describe('BaseContainerModificator', function () {
  let modificator: BasicContainerModificator;
  let mockContainer: ContainerMock;

  before(function () {
    modificator = new BasicContainerModificator();
    mockContainer = new ContainerMock();

    modificator.applyModifier(mockContainer);
  });

  it('Check set', function () {
    const service1 = { key: 'item', value: 1 };
    const service2 = { key: 'item2', value: 2 };
    const serviceReset = { key: 'item', value: 'Reset' };
    modificator.set(service1);

    expect(mockContainer.services[service1.key]).to.be.eq(service1.value);
    expect(mockContainer.services[service2.key]).to.be.undefined;

    modificator.set(service2);
    expect(mockContainer.services[service2.key]).to.be.eq(service2.value);

    modificator.set(serviceReset);
    expect(mockContainer.services[service1.key]).to.be.eq(serviceReset.value);
  });

  it('Check get', function () {
    const service1 = { key: 'item_get', value: 1 };
    const service2 = { key: 'item_get2', value: 2 };
    const serviceReset = { key: 'item_get', value: 'Reset' };
    modificator.set(service1);

    expect(modificator.get(service1.key)).to.be.eq(service1.value);
    expect(modificator.get(service2.key)).to.be.undefined;

    modificator.set(service2);
    expect(modificator.get(service2.key)).to.be.eq(service2.value);

    modificator.set(serviceReset);
    expect(modificator.get(service1.key)).to.be.eq(serviceReset.value);
  });
});
