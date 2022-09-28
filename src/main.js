import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust, faBriefcase, faEnvelope, faEnvelopeOpen, faHome, faHouse, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faUser, faBriefcase, 
    faNewspaper, faEnvelopeOpen, faHouse, 
    faEnvelope, faAdjust)

const app = createApp(App)

app.component('font-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
