import Vue from 'vue'
import Router from 'vue-router'
import Entrance from '@/views/Entrance/index'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Entrance',
			component: Entrance,
			children: [
				{path: 'home', name: 'home', component: () => import(/* webpackChunkName: "home" */'./views/home')},
			]
		}
	]
})
