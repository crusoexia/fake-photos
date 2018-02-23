import faker from 'faker';
import uniqueId from 'lodash/uniqueId';
import times from 'lodash/times';

function isException() {
  return Math.random() < 0.1;
}

export default () => ({
  id: [uniqueId(), faker.random.number()].join('-'),
  title: faker.lorem.sentence(),
  link: faker.internet.url(),
  media: isException() ? undefined : {
    m: isException() ? undefined : `${faker.image.imageUrl()}?_=${uniqueId()}`,
  },
  date_taken: faker.date.past(),
  description: `<p>${faker.lorem.paragraph()}</p>`,
  published: faker.date.past(),
  author: `${faker.internet.email()} (${faker.name.findName()})`,
  author_id: faker.random.uuid(),
  tags: times(faker.random.objectElement([0, 1, 2, 3, 4]), faker.lorem.word).join(' '),
});
