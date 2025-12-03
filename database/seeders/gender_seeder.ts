import Gender from '#models/gender'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'test', 'production']

  async run() {
    const uniqueKey = 'name'

    await Gender.updateOrCreateMany(uniqueKey, [{ name: 'Female' }, { name: 'Male' }])
  }
}
