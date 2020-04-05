import Vue from 'vue'
import App from './App'
import mytools from './utils/index.js'
import router from './router/router.js'
import swipe from './utils/swiper.js'

Vue.config.productionTip = false

Vue.use(mytools)
Vue.use(swipe)
App.mpType = 'app'
Vue.prototype.$getUrl=router

const app = new Vue({
    ...App
})
app.$mount()
