<template>
	<section>
		<h1>table页面</h1>
		<SingleElection
			label="表格样式"
			:radio-groups="tableClass"
			@change="changeClass"
		/>
		<table-view
			:header="header"
			:key="tableKey"
			:data="body"
			collapse
		/>
	</section>
</template>


<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
		index = null
		// 用来解决数据变化时element-ui的table组件表头为空问题
		tableKey = 0
		
		get tableClass() {
			return [
				{
					id: 0,
					name: "一般表格"
				}, {
					id: 1,
					name: "多级表头"
				}, {
					id: 2,
					name: "数据钻取"
				}
			]
		}
		
		changeClass(e) {
			this.index = e.id
			console.log(this.header)
			console.log(this.body)
		}
		
		
		get header() {
			this.tableKey += 1
			// 一般表格
			let header = []
			
			if (this.index === 0) {
				header = [
					{label: "英雄", prop: 'name', fixed: true, minWidth: 70, show: true},
					{label: "定位", prop: 'location', fixed: true, minWidth: 90, show: true},
					{label: "性别", prop: 'gender', fixed: true, minWidth: 90, show: true},
					{label: "介绍", prop: 'desc', fixed: true, minWidth: 70, show: true},
				]
			}
			// 多级表头
			if (this.index === 1) {
				header = [
					{label: "英雄", prop: 'name', fixed: true, minWidth: 70, show: true},
					{label: "定位", prop: 'location', fixed: true, minWidth: 90, show: true},
					{label: "性别", prop: 'gender', fixed: true, minWidth: 90, show: true},
					{label: "介绍", prop: 'desc', fixed: true, minWidth: 70, show: true},
					{
						label: '技能', childs: [
							{label: 'q技能', prop: 'q'},
							{label: 'w技能', prop: 'w'},
							{label: 'e技能', prop: 'e'},
							{label: 'r技能', prop: 'r'},
						]
					}
				]
			}
			return header
		}
		
		get body() {
			let bodyArr = []
			if (this.index === 0) {
				bodyArr = [
					{name: '德莱厄斯', location: '战士', gender: '男性英雄', desc: '诺克萨斯之手'},
					{name: '德莱文', location: '射手', gender: '男性英雄', desc: '荣耀行刑官'},
					{name: '雷克顿', location: '战士', gender: '男性英雄', desc: '荒漠屠夫'},
					{name: '卡蜜尔', location: '战士', gender: '女性英雄', desc: '青钢影'},
				]
			}
			if (this.index === 1) {
				bodyArr = [
					{name: '德莱厄斯', location: '战士', gender: '男性英雄', desc: '诺克萨斯之手', q: '大杀四方', w: '致残打击', e: '无情铁手', r: '诺克萨斯断头台'},
					{name: '德莱文', location: '射手', gender: '男性英雄', desc: '荣耀行刑官', q: '旋转飞斧', w: '血腥冲刺', e: '开道利斧', r: '冷血追命'},
					{name: '雷克顿', location: '战士', gender: '男性英雄', desc: '荒漠屠夫', q: '暴君狂击', w: '冷酷捕猎', e: '横冲直撞', r: '终极统治'},
					{name: '卡蜜尔', location: '战士', gender: '女性英雄', desc: '青钢影', q: '精准礼仪', w: '战术横扫', e: '钩索', r: '海克斯最后通牒'},
				]
			}
			return bodyArr
		}
	}
</script>

<style lang="less" scoped>

</style>
