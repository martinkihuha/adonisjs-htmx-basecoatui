import NavItem from '#models/nav_item'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'test', 'production']

  async run() {
    const uniqueKey = 'title'

    await NavItem.updateOrCreateMany(uniqueKey, [
      {
        title: 'Legal',
        url: '/legal',
        icon: 'ph:gavel-light',
        iconSolid: 'ph:gavel-fill',
        listOrder: 1,
      },
      {
        title: 'Finance',
        url: '/finance',
        icon: 'heroicons:banknotes',
        iconSolid: 'heroicons:banknotes-solid',
        listOrder: 2,
      },
      {
        title: 'Staff',
        url: '/staff',
        icon: 'heroicons:users',
        iconSolid: 'heroicons:users-solid',
        listOrder: 3,
      },
      {
        title: 'General',
        url: '/general',
        icon: 'heroicons:globe-alt',
        iconSolid: 'heroicons:globe-alt-solid',
        listOrder: 4,
      },
      {
        title: 'Settings',
        url: '/settings',
        icon: 'heroicons:cog',
        iconSolid: 'heroicons:cog-solid',
        listOrder: 5,
      },
    ])
  }
}
