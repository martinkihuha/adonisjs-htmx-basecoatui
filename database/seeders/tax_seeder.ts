import Tax from '#models/tax'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'test', 'production']

  async run() {
    const uniqueKey = 'name'

    await Tax.updateOrCreateMany(uniqueKey, [
      { name: 'VAT_0', description: 'VAT @ 0%', percentage: 0 },
      { name: 'VAT_16', description: 'VAT @ 16%', percentage: 16 },
    ])
  }
}
