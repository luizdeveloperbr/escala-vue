import Vue from 'vue'
import rout from './route.js'
import App from './App.vue'

new Vue({
        router: rout,
        render: h => h(App)
}).$mount('#app')