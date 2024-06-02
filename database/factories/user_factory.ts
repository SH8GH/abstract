import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      email: faker.internet.email(),
      password: 'password',
      fullName: faker.person.fullName(),
    }
  })
  .build()

export default UserFactory
