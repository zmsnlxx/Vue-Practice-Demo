<template>
	<section class="table-view">
		<el-table
			ref="table"
			:data="tableData"
			:span-method="spanMethod"
			:header-cell-style="headerCellStyle"
			:border="border"
			:max-height="650"
			:summary-method="summaryColumns"
			:show-summary="showSummary"
			@sort-change="opt => sortOption = opt"
			@header-click="column => $emit('header-click', column)"
			v-loading="loading"
		/>
	</section>
</template>

<script>
	import {Vue, Component,Prop} from 'vue-property-decorator'
	
	@Component
	export default class TableView extends Vue {
		@Prop({type: Boolean, default: true}) root  // 是否为根table组件（影响一键下载功能及pdf导出，内部Prop）
		@Prop(String) description                   // 左上方描述内容
		@Prop(Array) data                           // 表格数据
		@Prop([Array, Function]) downloadData       // 下载数据（若不传递，则下载数据为data）
		@Prop(Array) header                         // 表头
		@Prop(String) name                          // 下载表格文件名
		@Prop(Number) sort                          // 自定义sort方法，依赖exceptSort，即排序时排除多少行
		@Prop([Boolean, Number, String]) collapse   // 是否需要折叠，若为true，超过10行折叠为5行
		@Prop({type: [Object, Function], default: () => ({background: '#f5f7fa'})}) headerCellStyle
		@Prop(Function) spanMethod
		@Prop(Function) summaryColumns
		@Prop(Boolean) showSummary
		@Prop({type: Boolean, default: true}) border
		@Prop(Boolean) needPagination
		@Prop({type: Boolean, default: true}) needDownload
		@Prop(Boolean) loading
	}
</script>

<style lang="less" scoped>

</style>
