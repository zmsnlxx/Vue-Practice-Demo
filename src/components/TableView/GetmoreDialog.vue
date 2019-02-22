<template>
	<section class="getmore-dialog">
		<el-dialog :visible.sync="innerVisible" width="65%" title="英雄名单详情">
			<table-view :data="drilling.once ? newTableData : tableData" :download-data="makeDownloadData" :header="tableHeader" :loading="tableLoading" :name="name" :sort="0">
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
		
		
		get newTableData(){
			return this.tableData.slice((this.no - 1) * this.pageSize , this.no * this.pageSize)
		}
		
		created() {
			// 监听visible
			this.$watch('visible', val => {
				// 因为子组件不可以更改接收到的参数，所以在子组件内部声明变量来记录visible，用来控制弹框显示与隐藏
				this.innerVisible = val
				if (val) {
					this.tableHeader = this.drilling.header
					this.changePage()
				}
				if (!val && this.$refs.pagination) setTimeout(() => {
					this.$refs.pagination.pageNo = 1
					this.$refs.pagination.pageSize = 10
					this.tableLoading = true
					if(this.drilling.once === true){
						this.tableData = []
						this.no = 1
						this.pageSize = 10
					}
				}, 300)
			}, {immediate: true})
			this.$watch('innerVisible', val => !val && this.$emit('update:visible', val))
		}
		
		async fetchData(pageParams = {page: this.no, pageSize: this.pageSize}, target) {
			this.tableLoading = true
			const {params, fetch, formatData, description, name} = this.drilling
			this.name = name
			this.description = description
			this.total = params.total
			params.data = this.$lo.assign(params.data, pageParams)
			
			const data = await fetch.post(params.data, {params: params.query})
			if (this.$lo.isEmpty(data) && this.visible) setTimeout(() => this.fetchData(), 300)
			
			const tableData = formatData ? formatData(data) : this.formatData(data)
			
			if (target !== 'download') {
				this.tableData = tableData
				if (!this.$lo.isEmpty(this.tableData)) this.tableLoading = false
			} else {
				this.tableLoading = false
				return tableData
			}
		}
		
		changePage(pageParams = {page: 1, pageSize: 10}){
			if(!this.drilling.once) return this.fetchData(pageParams)
			if(this.$lo.isEmpty(this.tableData)) return this.fetchData()
			this.no = pageParams.page
			this.pageSize = pageParams.pageSize
		}
		
		formatData(data) {
			if (Array.isArray(data)) return data
			
			return this.$lo.toArray(data)
		}
		
		async makeDownloadData() {
			const downloadData = await this.fetchData({page: null, pageSize: null}, 'download')
			return [{name: this.drilling.name, data: downloadData, header: this.drilling.header}]
		}
	}
</script>
