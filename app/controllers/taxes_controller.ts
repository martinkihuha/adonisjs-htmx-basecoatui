import Tax from '#models/tax'
import type { HttpContext } from '@adonisjs/core/http'

export default class TaxesController {
  async index({ response }: HttpContext) {
    const results = await Tax.query().orderBy('id')
    return response.json(results)
  }
}
