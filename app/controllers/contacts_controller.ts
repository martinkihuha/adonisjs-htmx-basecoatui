import Contact from '#models/contact'
import { createContactValidator, updateContactValidator } from '#validators/contact'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class ContactsController {
  /**
   * Display a list of resource
   */
  async index({ request, view }: HttpContext) {
    const search = request.input('q', null)
    const page = search ? 1 : request.input('page', 1)
    const limit = request.input('limit', 20)

    const contacts = await Contact.query()
      .whereNull('deletedAt')
      .if(search, (searchQuery) =>
        searchQuery
          .whereILike('firstName', `%${search}%`)
          .orWhereILike('lastName', `%${search}%`)
          .orWhereILike('phone', `%${search}%`)
          .orWhereILike('email', `%${search}%`)
          .orWhereILike('address', `%${search}%`)
      )
      .paginate(page, limit)

    return view.render('pages/contacts/index', { contacts: contacts.toJSON(), title: 'Contacts' })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/contacts/create', { title: 'New Contact' })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(createContactValidator)

    const contact = new Contact()

    await contact.fill(data).save()

    return response.redirect().toRoute('contacts.index')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const contact = await Contact.findOrFail(params.id)

    return view.render('pages/contacts/show', {
      contact,
      title: `${contact.firstName} ${contact.lastName}`,
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const contact = await Contact.findOrFail(params.id)

    return view.render('pages/contacts/edit', {
      contact,
      title: 'Edit Contact',
    })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const contact = await Contact.findOrFail(params.id)

    const data = await request.validateUsing(updateContactValidator)

    await contact.merge(data).save()

    return response.redirect().toRoute('contacts.index')
  }

  /**
   * Delete record
   */
  async destroy({ params, request, response }: HttpContext) {
    const contact = await Contact.findOrFail(params.id)

    contact.deletedAt = DateTime.now()

    await contact.save()

    if (request.header('x-delete-type') === 'row') {
      return response.ok('')
    }

    return response.redirect().toRoute('contacts.index')
  }
}
