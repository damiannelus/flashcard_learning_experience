import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'

import HelloWorld from './components/HelloWorld.vue'
import ListOfWords from './components/ListOfWords.vue'
import NotFound from './components/NotFound.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/low', component: ListOfWords},
    { path: '/home', component: HelloWorld},
    { path: '*', component: NotFound}
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
