<!--element-pagination组件的简单二次封装-->
<template>
	<section class="pagination">
		<slot name="prepend"/>
		<el-pagination
			background
			layout="total, sizes, prev, pager, next, jumper"
			@size-change="handleSizeChange"
			@current-change="handlePageChange"
			:page-sizes="[5,10,20,50]"
			:current-page="pageNo"
			:page-size="pageSize"
			:total="total"
		/>
	</section>
</template>
<script>
	import {Vue, Component, Prop} from 'vue-property-decorator'
	
	@Component
	export default class WrapperPagination extends Vue {
		//该组件接受一个fetchData，用来获取当前页码
		@Prop(Function) fetchData
		// 数据总数
		@Prop({type: Number, default: 1}) total
		//每页数量
		@Prop({type: Number, default: 10}) size
		@Prop({Array: Number, default: () => ['page', 'pageSize']}) paramsName
		pageNo = 1
		pageSize = 10
		
		mounted() {
			this.pageSize = this.size
		}
		
		handleSizeChange(pageSize) {
			this.pageSize = pageSize
			this.pageNo = 1
			this.fetchPage()
		}
		
		handlePageChange(pageNo) {
			this.pageNo = pageNo
			this.fetchPage()
		}
		
		fetchPage() {
			const params = {}
			params[this.paramsName[0]] = this.pageNo
			params[this.paramsName[1]] = this.pageSize
			this.fetchData(params)
		}
	}
</script>
