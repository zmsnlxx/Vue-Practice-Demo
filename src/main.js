import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './index'
import store from './store/index'
import Lib from './lib'

// 引入全局组件
import Components from './components'

Vue.config.productionTip = false
Vue.use(Lib)
//注册全局组件
Vue.use(Components)
Vue.use(Element, { size: 'small'})


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
