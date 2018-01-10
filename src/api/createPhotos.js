import times from 'lodash/times';
import faker from 'faker';
import createPhoto from './createPhoto';

export default () => ({
  title: faker.lorem.sentence(),
  link: faker.internet.url(),
  description: faker.lorem.paragraph(),
  items: times(20, createPhoto),
});
