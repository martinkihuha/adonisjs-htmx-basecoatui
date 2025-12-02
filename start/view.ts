import edge from 'edge.js'
import env from '#start/env'
import { edgeIconify, addCollection } from 'edge-iconify'
import { icons as heroIcons } from '@iconify-json/heroicons'
import { icons as mdiIcons } from '@iconify-json/mdi'

edge.global('env', env)

/**
 * Add icons collection
 */
addCollection(heroIcons)
addCollection(mdiIcons)

/**
 * Register the plugin
 */
edge.use(edgeIconify)
