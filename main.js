import Vue from 'vue'
import router from './route.js'
import App from './App.vue'

import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)

new Vue({
        router,
        render: h => h(App)
}).$mount('#app')