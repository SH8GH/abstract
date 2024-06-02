import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class DatabaseSeeder extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.seed(await import('#database/seeders/user_seeder'))
  }
}