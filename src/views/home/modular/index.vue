<template>
	<section class="div modular">
		<el-card class="box-card" v-loading="loading" element-loading-text="客观不要急...">
			<el-tabs class="score-header" v-model="firstTab" type="card">
				<el-tab-pane v-for="(item,index) in tabName" :key="`${item.label}_${index}`" :label="item.label" :name="item.name">
					<keep-alive>
						<component v-if="baseFetch" :is="item.content"/>
					</keep-alive>
				</el-tab-pane>
			</el-tabs>
		</el-card>
	</section>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	import {Getter} from 'vuex-class'
	import tableNav from './table/index'
	import pagination from './Pagination/index'
	import MultipleSelection from './MultipleSelection/index'
	import SingleElection from './SingleElection/index'
	
	
	
	
	
	@Component({components: {tableNav, pagination,MultipleSelection,SingleElection}})
	export default class Name extends Vue {
		@Getter modular
		
		loading = true
		firstTab = 'table'
		
		mounted() {
			setTimeout(() => {
				this.loading = false
			},2000)
		}
		
		get tabName() {
			const contentArr = [tableNav, pagination,MultipleSelection,SingleElection]
			const arr = []
			this.$lo.map(this.modular.childs, (item, index) => {
				const result = {name: item.name, index: index, label: item.label, content: contentArr[index]}
				arr.push(result)
			})
			return arr
		}
		
		get baseFetch() {
			return !this.loading
		}
	}
</script>

<style lang="less" scoped>
	.modular {
		width: 80%;
		margin: 60px auto;
		padding: 50px 30px;
		.box-card{
			min-height: 600px;
		}
	}
</style>
