import Vue from 'vue'
import App from './App'
import i18n from './lang' // Internationalization
import mixinLang from './mixin/globalLang'
import store from './store'


Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype._i18n = i18n

Vue.mixin(mixinLang)
const app = new Vue({
  ...App,
  store,
  i18n
})
app.$mount()
