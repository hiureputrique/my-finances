require('./bootstrap');

import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
import vuetify from './plugins/vuetify'
import Layout from './layouts/Layout'

InertiaProgress.init()

createInertiaApp({
    // resolve: name => require(`./Pages/${name}`),
    resolve: name => {
        const page = require(`./Pages/${name}`).default
        page.layout = page.layout || Layout
        return page
    },
    setup({ el, App, props, plugin }) {
        Vue.use(plugin)

        new Vue({
            render: h => h(App, props),
            vuetify,
        }).$mount(el)
    },
})
