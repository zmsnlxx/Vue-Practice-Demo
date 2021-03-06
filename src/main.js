import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store/index'
import util from './util'

// 引入全局组件
import Components from './components'

Vue.config.productionTip = false
Vue.use(util)
Vue.use(Components)
Vue.use(Element, { size: 'small'})


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
