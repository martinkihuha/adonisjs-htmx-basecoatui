import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'genders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 20).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
