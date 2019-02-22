import Vue from 'vue'
import Router from 'vue-router'
import entrance from '@/views/index'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/', component: entrance, redirect: {name: 'home'}, children: [
				{path: 'home', name: 'home', component: () => import('./views/home/index')},
				{path: 'modular', name: 'modular', component: () => import('./views/home/modular/index')},
				{path: 'function', name: 'function', component: () => import('./views/home/function/index')},
				{path: 'object', name: 'object', component: () => import('./views/home/object/index')},
				{path: 'other', name: 'other', component: () => import('./views/home/other/index')},
			]
		},
	]
})
