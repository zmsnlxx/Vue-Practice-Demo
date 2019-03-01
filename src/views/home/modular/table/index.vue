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
		tableClass = [
			{id: 0, name: "一般表格"},
			{id: 1, name: "多级表头"},
			{id: 2, name: "数据钻取"},
			{id: 3, name: "双重数据钻取"},
		]
		drillingHeader = [
			{label: "英雄", prop: 'name', fixed: true, minWidth: 70, show: true},
			{label: "定位", prop: 'location', fixed: true, minWidth: 90, show: true},
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
		
		changeClass(e) {
			this.index = e.id
		}
		
		// 表头
		get header() {
			this.tableKey += 1
			let header = []
			// 一般表格
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
			// 数据钻取
			if (this.index === 2) {
				header = [
					{label: "英雄", prop: 'name', fixed: true, minWidth: 70, show: true},
					{label: "定位", prop: 'location', fixed: true, minWidth: 90, show: true},
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
			// 双重数据钻取
			if (this.index === 3) {
				header = [
					{label: "英雄", prop: 'name', fixed: true, minWidth: 70, show: true},
					{label: "定位", prop: 'location', fixed: true, minWidth: 90, show: true},
					{label: "介绍", prop: 'desc', fixed: true, minWidth: 70, show: true},
					{label: "同类型英雄", prop: 'class', minWidth: 70, show: true},
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
		
		// 表格内容
		get body() {
			let bodyArr = []
			// 一般表格
			if (this.index === 0) {
				bodyArr = [
					{name: '德莱厄斯', location: '战士', gender: '男性英雄', desc: '诺克萨斯之手'},
					{name: '德莱文', location: '射手', gender: '男性英雄', desc: '荣耀行刑官'},
					{name: '雷克顿', location: '战士', gender: '男性英雄', desc: '荒漠屠夫'},
					{name: '卡蜜尔', location: '战士', gender: '女性英雄', desc: '青钢影'},
				]
			}
			// 多级表头
			if (this.index === 1) {
				bodyArr = [
					{name: '德莱厄斯', location: '战士', desc: '诺克萨斯之手', q: '大杀四方', w: '致残打击', e: '无情铁手', r: '诺克萨斯断头台'},
					{name: '德莱文', location: '射手', desc: '荣耀行刑官', q: '旋转飞斧', w: '血腥冲刺', e: '开道利斧', r: '冷血追命'},
					{name: '雷克顿', location: '战士', desc: '荒漠屠夫', q: '暴君狂击', w: '冷酷捕猎', e: '横冲直撞', r: '终极统治'},
					{name: '卡蜜尔', location: '战士', desc: '青钢影', q: '精准礼仪', w: '战术横扫', e: '钩索', r: '海克斯最后通牒'},
				]
			}
			// 数据钻取
			if (this.index === 2) {
				bodyArr = [
					{name: {type: 'link', value: '德莱厄斯', id: 'Darius'}, location: '战士', desc: '诺克萨斯之手', q: '大杀四方', w: '致残打击', e: '无情铁手', r: '诺克萨斯断头台'},
					{name: {type: 'link', value: '德莱文', id: 'Draven'}, location: '射手', desc: '荣耀行刑官', q: '旋转飞斧', w: '血腥冲刺', e: '开道利斧', r: '冷血追命'},
					{name: {type: 'link', value: '雷克顿', id: 'Renekton'}, location: '战士', desc: '荒漠屠夫', q: '暴君狂击', w: '冷酷捕猎', e: '横冲直撞', r: '终极统治'},
					{name: {type: 'link', value: '卡蜜尔', id: 'Camille'}, location: '战士', desc: '青钢影', q: '精准礼仪', w: '战术横扫', e: '钩索', r: '海克斯最后通牒'},
				]
			}
			// 双重数据钻取
			if (this.index === 3) {
				bodyArr = [
					{name: '德莱厄斯', location: '战士', desc: '诺克萨斯之手',class: this.makeDrilling(4,'warrior','战士'), q: '大杀四方', w: '致残打击', e: '无情铁手', r: '诺克萨斯断头台'},
					{name: '德莱文', location: '射手', desc: '荣耀行刑官',class: this.makeDrilling(4,'shooter','射手'),  q: '旋转飞斧', w: '血腥冲刺', e: '开道利斧', r: '冷血追命'},
					{name: '布兰德', location: '法师', desc: '复仇火焰',class: this.makeDrilling(5,'mage','法师'),  q: '暴君狂击', w: '冷酷捕猎', e: '横冲直撞', r: '终极统治'},
					{name: '蕾欧娜', location: '坦克', desc: '太阳女神',class: this.makeDrilling(6,'tank','坦克'), q: '精准礼仪', w: '战术横扫', e: '钩索', r: '海克斯最后通牒'},
				]
			}
			return bodyArr
		}
		
		makeDrilling(value, query,desc) {
			return {
				value,
				drilling: {
					header: this.drillingHeader,
					description: `${desc}类型的英雄共有${value}个`,
					params: {
						key:query,
						total:value,
					},
				},
			}
		}
		
	}
</script>

<style lang="less" scoped>

</style>
