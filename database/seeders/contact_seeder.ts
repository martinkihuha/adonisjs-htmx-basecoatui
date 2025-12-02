import Contact from '#models/contact'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment = ['development', 'test', 'production']

  async run() {
    const uniqueKey = 'email'

    await Contact.updateOrCreateMany(uniqueKey, [
      {
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'john.doe@example.com',
        address: '123 Main St, New York, NY 10001',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        phone: '2345678901',
        email: 'jane.doe@example.com',
        address: '456 Elm St, New York, NY 10002',
      },
      {
        firstName: 'Peter',
        lastName: 'Parker',
        phone: '3456789012',
        email: 'peter.parker@example.com',
        address: '789 Oak St, New York, NY 10003',
      },
      {
        firstName: 'Dana',
        lastName: 'Crandith',
        phone: '4567890123',
        email: 'dana.crandith@example.com',
        address: '101 Pine St, New York, NY 10004',
      },
      {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '5678901234',
        email: 'bruce.wayne@example.com',
        address: '202 Maple St, New York, NY 10005',
      },
      {
        firstName: 'Lara',
        lastName: 'Croft',
        phone: '6789012345',
        email: 'lara.croft@example.com',
        address: '303 Birch St, New York, NY 10006',
      },
    ])
  }
}
