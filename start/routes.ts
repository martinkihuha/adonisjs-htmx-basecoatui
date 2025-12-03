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
const CountriesController = () => import('#controllers/countries_controller')
const CountiesController = () => import('#controllers/counties_controller')
const GendersController = () => import('#controllers/genders_controller')
const NavItemsController = () => import('#controllers/nav_items_controller')
const TaxesController = () => import('#controllers/taxes_controller')

router.on('/').redirect('/contacts')
router.resource('contacts', ContactsController)

router
  .group(() => {
    router.resource('countries', CountriesController).only(['index'])
    router.resource('counties', CountiesController).only(['index'])
    router.resource('genders', GendersController).only(['index'])
    router.resource('nav-items', NavItemsController).only(['index'])
    router.get('nav-items/all', [NavItemsController, 'all'])
    router.resource('taxes', TaxesController).only(['index'])
  })
  .prefix('api')
