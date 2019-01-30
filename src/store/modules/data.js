const state = {
	data: [
		{
			router: 'modular',
			name: '组件封装',
			index: 1,
			childs: [
				{
					label:'表单组件',
					name: 'table',
					index: '1-1',
				},
				{
					label:'分页组件',
					name: 'pagination',
					index: '1-2',
				},
				{
					label:'多选框组件',
					name: 'MultipleSelection',
					index: '1-3',
				},{
					label:'单选框组件',
					name: 'SingleElection',
					index: '1-4',
				},
			]
		},
		{
			router: 'function',
			name: '方法总结',
			background: '',
			index: 2,
			childs: [
				{
					name: '条件语句转化为遍历筛选',
					background: '',
					index: '2-1'
				},
				{
					name: '数组累加',
					background: '',
					index: '2-2'
				}, {
					name: '数组值的累加',
					background: '',
					index: '2-3'
				},
			]
		},
		{
			router: 'object',
			name: '全局对象',
			background: '',
			index: 3,
			childs: [
				{
					name: '待定',
					background: '',
					index: '3-1'
				},
				{
					name: '待定',
					background: '',
					index: '3-2'
				}, {
					name: '待定',
					background: '',
					index: '3-3'
				},
			]
		},
		{
			router: 'others',
			name: '其他',
			background: '',
			index: 4,
			childs: [
				{
					name: '待定',
					background: '',
					index: '4-1'
				}
			]
		},
	],
}
const mutations = {

}

const actions = {

}

const data = {state, mutations, actions}

export default data
