import { DateTime } from 'luxon'
import { column } from '@adonisjs/lucid/orm'
import AppBaseModel from './app_base_model.js'

export default class Contact extends AppBaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare phone: string

  @column()
  declare email: string

  @column()
  declare address: string

  @column.dateTime({ serializeAs: null })
  declare deletedAt: DateTime | null

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime
}
