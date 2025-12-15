import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ request, view }: HttpContext) {
    // Check if this is an HTMX request
    const isHtmxRequest = request.header('hx-request') === 'true'

    // If HTMX request, return only the partial content
    // if (isHtmxRequest) {
    //   return view.render('pages/home/_content', { title: 'Dashboard' })
    // }

    return view.render(`pages/home/${isHtmxRequest ? '_content' : 'index'}`, { title: 'Dashboard' })
  }
}
