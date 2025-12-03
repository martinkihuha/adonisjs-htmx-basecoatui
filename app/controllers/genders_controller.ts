import Gender from '#models/gender'
import type { HttpContext } from '@adonisjs/core/http'

export default class GendersController {
  async index({ response }: HttpContext) {
    const results = await Gender.query().orderBy('id')
    return response.json(results)
  }
}
