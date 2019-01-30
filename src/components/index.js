import TableView from './TableView/index'
import Pagination from './Pagination'
import MultipleSelection from './MultipleSelection'
import SingleElection from './SingleElection'

export default {
	install(Vue) {
		Vue.component('TableView', TableView)
		Vue.component('Pagination', Pagination)
		Vue.component('MultipleSelection', MultipleSelection)
		Vue.component('SingleElection', SingleElection)
	}
}
