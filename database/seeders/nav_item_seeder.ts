import NavItem from '#models/nav_item'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'test', 'production']

  async run() {
    const uniqueKey = 'title'

    await NavItem.updateOrCreateMany(uniqueKey, [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: 'heroicons:home',
        iconSolid: 'heroicons:home-solid',
        listOrder: 1,
      },
      {
        title: 'Contacts',
        url: '/contacts',
        icon: 'heroicons:users',
        iconSolid: 'heroicons:users-solid',
        listOrder: 2,
      },
    ])
  }
}
