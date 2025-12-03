import Country from '#models/country'
import type { HttpContext } from '@adonisjs/core/http'

export default class CountriesController {
  async index({ response }: HttpContext) {
    const results = await Country.query().orderBy('id')
    return response.json(results)
  }
}
