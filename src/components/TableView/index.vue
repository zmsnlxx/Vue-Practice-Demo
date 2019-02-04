<template>
	<section class="table-view">
		<!--插槽-->
		<slot name="title"/>
		<el-row class="table-description">
			<slot name="tableName"/>
			<el-col v-if="description" class="description-text" :index-name="description" index-level="2" unit>{{ description }}</el-col>
			<section v-else class="description-text">
				<slot name="description"/>
			</section>
			<slot name="input"/>
			<slot name="button"/>
		</el-row>
		<slot name="header"/>
		<section>
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
			>
				<recursion-column v-for="(item, index) in tableHeader" :key="`${item.prop}_${index}`" :item="item" @drilling="handleDrilling"/>
			</el-table>
			<section v-if="collapse && _.size(data) > 10" @click="isExpanded = !isExpanded" class="collapse">
				<i :class="iconClass"/>
				<span>{{ controlText }}</span>
			</section>
			
			<!--<wrapper-pagination v-if="needPagination"/>-->
			
			<!--<student-dialog :visible.sync="visible" :drilling="drilling"/>-->
		</section>
	</section>
</template>

<script>
	// import DownloadButton from './DownloadButton'
	// import StudentDialog from './StudentDialog'
	import RecursionColumn from './RecursionColumn.vue'
	import {Vue, Component, Prop} from 'vue-property-decorator'
	
	Vue.component('RecursionColumn', RecursionColumn)
	/**
	 * data: TableData
	 * type: [RowData]
	 * RowData: {
	 *     [key]: string | number | cellObject
	 * }
	 * key: prop
	 * cellObject: {
	 *     value: value,
	 *     drilling: {
	 *       fetch: InterfaceMethod,
	 *       params: PostParams,
	 *       header: TableHeader
	 *     },
	 *     style: {
	 *         color: 'hex',
	 *         background: 'hex',
	 *         size: number,
	 *     }
	 * }
	 *
	 * header: TableHeader
	 * type: [Column]
	 * Column: {
	 *   prop: string,
	 *   label: string,
	 *   fixed: boolean,
	 * }
	 */
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
		
		splitRow = 0
		innerRoot = false
		
		visible = false
		drilling = {
			fetch: f => f,
			params: {},
			header: [],
		}
		
		isExpanded = false
		hovering = false
		sortOption = {}
		
		get iconClass() {
			return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
		}
		
		get controlText() {
			return this.isExpanded ? '收起全部' : '展开全部'
		}
		
		get tableData() {
			let data = this.$lo.compact(this.data)
			if (!data || this.$lo.isEmpty(data)) return []
			if (this.$lo.size(this.data) > 10 && this.collapse && !this.isExpanded) {
				data = data.slice(0, this.$lo.isBoolean(this.collapse) ? 5 : +this.collapse)
			}
			
			return data
		}
		
		get tableHeader() {
			if (this.$lo.size(this.header) === 0) return []
			return this.$lo.compact(this.header)
		}
		
		get allData() {
			if (this.$lo.isFunction(this.downloadData)) return this.downloadData
			if (this.$lo.isEmpty(this.downloadData)) return [this.formatData()]
			return this.$lo.map(this.downloadData, item => this.formatData(item.data, item))
		}
		
		get pdfHeaderColor() {
			const exam = this.$store.getters.examInfo
			if (exam.isXiaoneiLiankao) return '#ade2a4'
			if (exam.isLiankao) return '#ffc796'
			return '#d3e9fe'
		}
		
		created() {
			this.innerRoot = this.root
		}
		
		mounted() {
			if (this.root && this.$refs.downloadBtn && this.name) {
				this.$store.dispatch('setReportDownloads', this.$refs.downloadBtn.makeExcel)
			}
		}
		
		handleDrilling(drilling) {
			this.drilling = drilling
			this.visible = true
		}
		
		formatData(data = this.data, item) {
			const header = item ? item.header : this.header
			const result = {
				name: item ? item.name : this.name,
				data: this.$lo.compact(data),
				header: header
			}
			if (item && item.chartData) result.chartData = item.chartData
			return result
		}
		
		async setSplit(splitRow) {
			this.splitRow = splitRow
			this.innerRoot = true
			await this.$nextTick()
			return this.$refs.splitTable
		}
	}
	
	function splitData(data, row) {
		return [data.slice(0, row || 1), data.slice(row || 1)]
	}
</script>

<style lang="less" scoped>
	.table-view {
		position: relative;
		
		.table-description {
			display: flex;
			align-items: center;
			
			.description-text {
				flex: 1;
				font-size: 14px;
				line-height: 40px;
				section {
					span {
						color: #999;
					}
				}
			}
		}
		
		.collapse {
			border: 1px solid #eaeefb;
			height: 44px;
			box-sizing: border-box;
			background-color: #fff;
			border-bottom-left-radius: 4px;
			border-bottom-right-radius: 4px;
			text-align: center;
			margin-top: -1px;
			color: #999;
			cursor: pointer;
			position: relative;
			
			i {
				font-size: 16px;
				line-height: 44px;
				transition: .3s;
			}
			
			> span {
				font-size: 14px;
				line-height: 44px;
				transition: .3s;
				display: inline-block;
				margin-left: 5px;
			}
			
			&:hover {
				color: #409EFF;
				background-color: #f9fafc;
			}
			
			& .text-slide-enter,
			& .text-slide-leave-active {
				opacity: 0;
				transform: translateX(10px);
			}
		}
	}
</style>
