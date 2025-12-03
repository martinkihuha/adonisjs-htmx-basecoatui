import { column } from '@adonisjs/lucid/orm'
import AppBaseModel from './app_base_model.js'

export default class Gender extends AppBaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string
}
