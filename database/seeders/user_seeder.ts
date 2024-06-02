import UserFactory from '#database/factories/user_factory'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'john@doe.com',
      password: 'secret',
      fullName: 'john deo',
    })

    await UserFactory.createMany(5)
  }
}
