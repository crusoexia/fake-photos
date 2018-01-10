import faker from 'faker';
import times from 'lodash/times';

export default () => ({
  title: faker.lorem.sentence(),
  link: faker.internet.url(),
  media: {
    m: faker.image.imageUrl(),
  },
  date_taken: faker.date.past(),
  description: `<p>${faker.lorem.paragraph()}</p>`,
  published: faker.date.past(),
  author: `${faker.internet.email()} (${faker.name.findName()})`,
  author_id: faker.random.uuid(),
  tags: times(faker.random.objectElement([0, 1, 2, 3, 4]), faker.lorem.word).join(' '),
});
