/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const ContactsController = () => import('#controllers/contacts_controller')

router.on('/').redirect('/contacts')
router.resource('contacts', ContactsController)
