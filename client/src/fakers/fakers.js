import faker from 'faker';
import { Factory } from 'rosie';

const list = [ faker.random.number(), faker.random.number() ];

export const cardFaker = new Factory()
  .attr('products', () => list);

export const shippingFaker = new Factory()
  .attr('address', () => ({
    cep: faker.address.zipCode(),
    number: faker.random.number()
  }));

export const userFaker = new Factory()
  .attr('user', () => ({
    email: faker.internet.email(),
    name: faker.name.findName()
  }));

export const dataFaker = new Factory()
  .attr('list', () => list)
  .attr('total', () => faker.random.number());

export const product = {
  id: '123',
  name: 'product',
  description: 'description',
  image: '',
  price: 100
};

export const success = 'success';
export const err = 'error';
