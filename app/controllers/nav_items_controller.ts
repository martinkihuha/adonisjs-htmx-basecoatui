import NavItem from '#models/nav_item'
import type { HttpContext } from '@adonisjs/core/http'

export default class NavItemsController {
  async index({ response }: HttpContext) {
    const results = await NavItem.query()
      .whereNull('deletedAt')
      .preload('subNavItems', (sni) => sni.whereNull('deletedAt'))
      .orderBy('list_order')
    return response.json(results)
  }

  async all({ view }: HttpContext) {
    const results = await NavItem.query()
      .whereNull('deletedAt')
      .preload('subNavItems', (sni) => sni.whereNull('deletedAt'))
      .orderBy('list_order')

    return view.render('components/sidebar', { results })
  }
}
