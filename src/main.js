import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'

import HelloWorld from './components/TheHelloWorld.vue'
import ListOfWords from './components/ListOfWords/TheListOfWords.vue'
import NotFound from './components/TheNotFound.vue'
import store from './store'


Vue.config.productionTip = false

import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics';

const router = new VueRouter({
  routes: [
    // { path: '/', component: App },
    { path: '/low', component: ListOfWords},
    { path: '/', component: HelloWorld},
    { path: '*', component: NotFound}
  ],
  mode: 'history'
})

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAnalytics, {
  id: 'UA-164607425-1',
  router
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
