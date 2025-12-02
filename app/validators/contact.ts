import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Invalid {{ field }}',
}

const fields = {
  firstName: 'First name',
  lastName: 'Last name',
  phone: 'Phone',
  email: 'Email',
  address: 'Address',
}

vine.messagesProvider = new SimpleMessagesProvider(messages, fields)

/**
 * Validator to validate the payload when creating
 * a new contact.
 */
export const createContactValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    phone: vine.string().trim().regex(new RegExp('^[0-9]+$')),
    email: vine.string().trim().email(),
    address: vine.string().trim(),
  })
)

/**
 * Validator to validate the payload when updating
 * an existing contact.
 */
export const updateContactValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    phone: vine.string().trim().regex(new RegExp('^[0-9]+$')),
    email: vine.string().trim().email(),
    address: vine.string().trim(),
  })
)
