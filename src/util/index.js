//引入lodash
import _ from 'lodash'
import newUtil from './new'

//导出公共函数
export const sayHello = (name) => {
	return name
}


export const util = {
	//这里可以把公共函数进行分类引入
	...newUtil,
	sayHello,
}

export default {
	install(Vue) {
		Vue.prototype.$lo = _
		Vue.prototype.$util = util
	}
}
