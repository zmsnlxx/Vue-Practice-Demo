<template>
	<section class="getmore-dialog">
		<el-dialog :visible.sync="innerVisible" width="65%" title="英雄名单详情">
			<table-view :data="tableData" :download-data="makeDownloadData" :header="tableHeader" :loading="tableLoading" :name="name" :sort="0">
				<section v-if="description" slot="description">
					<span>{{ description }}</span>
				</section>
			</table-view>
			<pagination slot="footer" ref="pagination" :total="total" :fetch-data="changePage"/>
		</el-dialog>
	</section>
</template>

<script>
	import {Vue, Component, Prop} from 'vue-property-decorator'
	@Component
	export default class GetmoreDialog extends Vue {
		@Prop(Boolean) visible
		@Prop(Object) drilling
		innerVisible = false
		description = ''
		tableData = []
		tableHeader = []
		tableLoading = true
		name = '学生钻取'
		total = 1
		no = 1
		pageSize = 10
		
		
		created() {
			// 监听visible
			this.$watch('visible', val => {
				// 因为子组件不可以更改接收到的参数，所以在子组件内部声明变量来记录visible，用来控制弹框显示与隐藏
				this.innerVisible = val
				if (val) {
					console.log(this.drilling)
					this.tableHeader = this.drilling.header
					this.fetchData()
				}
			}, {immediate: true})
			this.$watch('innerVisible', val => !val && this.$emit('update:visible', val))
		}
		
		async fetchData() {
			this.tableLoading = true
			const {params, description} = this.drilling
			this.description = description
			this.total = params.total
			this.tableData = this.getData(params.key)
			setTimeout(() => {
				this.tableLoading = false
			},1000)
		}
		
		changePage(pageParams = {page: 1, pageSize: 10}){
		
		}
		
		// 模拟请求接口操作
		getData(id){
			if(id === 'warrior'){
				return [
					{name: {type: 'link', value: '雷克顿', id: 'Renekton'}, location: '战士', desc: '荒漠屠夫', q: '暴君狂击', w: '冷酷捕猎', e: '横冲直撞', r: '终极统治'},
					{name:  {type: 'link', value: '卡蜜尔', id: 'Camille'},location: '战士', desc: '青钢影', q: '精准礼仪', w: '战术横扫', e: '钩索', r: '海克斯最后通牒'},
					{name:  {type: 'link', value: '盖伦', id: 'Garen'}, location: '战士', desc: '德玛西亚治理', q: '致命打击', w: '勇气', e: '审判', r: '德玛西亚正义'},
					{name: {type: 'link', value: '科加斯', id: 'Chogath'}, location: '战士', desc: '虚空恐惧', q: '破裂', w: '野性尖叫', e: '恐惧之刺', r: '盛宴'},
				]
			}else if(id === 'shooter'){
				return [
					{name: {type: 'link', value: '卡莉斯塔', id: 'Kalista'}, location: '射手', desc: '复仇之矛', q: '穿刺', w: '哨兵', e: '撕裂', r: '命运的召唤'},
					{name:  {type: 'link', value: '图奇', id: 'Twitch'},location: '射手', desc: '瘟疫之源', q: '埋伏', w: '剧毒之桶', e: '毒性爆发', r: '火力全开'},
					{name:  {type: 'link', value: '卡莎', id: 'Kaisa'}, location: '射手', desc: '虚空之女', q: '艾卡西亚暴雨', w: '虚空索敌', e: '极限超载', r: '猎手本能'},
					{name: {type: 'link', value: '微恩', id: 'Vayne'}, location: '射手', desc: '暗夜猎手', q: '闪避突袭', w: '圣银弩箭', e: '恶魔审判', r: '终极时刻'},
				]
			}else if(id === 'mage'){
				return [
					{name: {type: 'link', value: '卡莉斯塔', id: 'Kalista'}, location: '射手', desc: '复仇之矛', q: '穿刺', w: '哨兵', e: '撕裂', r: '命运的召唤'},
					{name:  {type: 'link', value: '图奇', id: 'Twitch'},location: '射手', desc: '瘟疫之源', q: '埋伏', w: '剧毒之桶', e: '毒性爆发', r: '火力全开'},
					{name:  {type: 'link', value: '卡莎', id: 'Kaisa'}, location: '射手', desc: '虚空之女', q: '艾卡西亚暴雨', w: '虚空索敌', e: '极限超载', r: '猎手本能'},
					{name: {type: 'link', value: '微恩', id: 'Vayne'}, location: '射手', desc: '暗夜猎手', q: '闪避突袭', w: '圣银弩箭', e: '恶魔审判', r: '终极时刻'},
					{name: {type: 'link', value: '微恩', id: 'Vayne'}, location: '射手', desc: '暗夜猎手', q: '闪避突袭', w: '圣银弩箭', e: '恶魔审判', r: '终极时刻'},
				]
			}else if(id === 'tank'){
				return [
					{name: {type: 'link', value: '卡莉斯塔', id: 'Kalista'}, location: '射手', desc: '复仇之矛', q: '穿刺', w: '哨兵', e: '撕裂', r: '命运的召唤'},
					{name:  {type: 'link', value: '图奇', id: 'Twitch'},location: '射手', desc: '瘟疫之源', q: '埋伏', w: '剧毒之桶', e: '毒性爆发', r: '火力全开'},
					{name:  {type: 'link', value: '卡莎', id: 'Kaisa'}, location: '射手', desc: '虚空之女', q: '艾卡西亚暴雨', w: '虚空索敌', e: '极限超载', r: '猎手本能'},
					{name: {type: 'link', value: '微恩', id: 'Vayne'}, location: '射手', desc: '暗夜猎手', q: '闪避突袭', w: '圣银弩箭', e: '恶魔审判', r: '终极时刻'},
					{name: {type: 'link', value: '微恩', id: 'Vayne'}, location: '射手', desc: '暗夜猎手', q: '闪避突袭', w: '圣银弩箭', e: '恶魔审判', r: '终极时刻'},
					{name: {type: 'link', value: '微恩', id: 'Vayne'}, location: '射手', desc: '暗夜猎手', q: '闪避突袭', w: '圣银弩箭', e: '恶魔审判', r: '终极时刻'},
				]
			}
		}
		
		async makeDownloadData() {
			const downloadData = await this.fetchData({page: null, pageSize: null}, 'download')
			return [{name: this.drilling.name, data: downloadData, header: this.drilling.header}]
		}
	}
</script>
