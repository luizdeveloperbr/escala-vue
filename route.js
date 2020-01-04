import Vue from 'vue'
import VueRouter from 'vue-router'
//bloco de importação de components .vue
import principal from './pages/principal.vue'
//inicialização do plugin
Vue.use(VueRouter)
//dados export/import
export default new VueRouter({
    routes:[
    {path: '/principal',
    name: 'principal',
    component: principal
}]})

