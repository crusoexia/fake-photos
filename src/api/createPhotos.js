import times from 'lodash/times'
import faker from 'faker'
import { photo } from './photo'

export const recentPhotos = () => ({
  title: faker.name.title(),
  link: faker.internet.url(),
  description: faker.lorem.sentence(),
  items: times(20, photo)
})
