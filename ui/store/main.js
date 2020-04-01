import Vue from 'vue'
import App from './App'
import mytools from './utils/index.js'
import router from './router/router.js'

Vue.config.productionTip = false

Vue.use(mytools)
App.mpType = 'app'
Vue.prototype.$getUrl=router

const app = new Vue({
    ...App
})
app.$mount()
