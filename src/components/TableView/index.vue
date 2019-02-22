<template>
	<section class="table-view">
		<!--表格标题插槽-->
		<slot name="title"/>
		
		<!-- 表格描述信息以及操作按钮插槽 -->
		<el-row class="table-description">
			<slot name="tableName"/>
			<el-col v-if="description" class="description-text" :index-name="description" index-level="2" unit>{{ description }}</el-col>
			<section v-else class="description-text">
				<slot name="description"/>
			</section>
			<slot name="input"/>
			<slot name="button"/>
		</el-row>
		<!-- header 插槽 -->
		<slot name="header"/>
		<!-- 表格内容 -->
		<section>
			<!-- 使用element-ui的table组件 -->
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
				<!-- 调用RecursionColumn组件：把item传过去；同时接受drilling数据 -->
				<recursion-column v-for="(item, index) in tableHeader" :key="`${item.prop}_${index}`" :item="item" @drilling="handleDrilling"/>
			</el-table>
			<!-- 表格是否需要折叠-->
			<section v-if="collapse && _.size(data) > 10" @click="isExpanded = !isExpanded" class="collapse">
				<i :class="iconClass"/>
				<span>{{ controlText }}</span>
			</section>
			
			<!-- 分页 -->
			<pagination v-if="needPagination"/>
			
			<!-- 钻取：查看详细内容组件；接受从recursion-column组件拿到的钻取数据 -->
			<getmore-dialog :visible.sync="visible" :drilling="drilling"/>
		</section>
	</section>
</template>

<script>
	// import DownloadButton from './DownloadButton'
	import GetmoreDialog from './GetmoreDialog'
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
	@Component({components: {GetmoreDialog}})
	export default class TableView extends Vue {
		// 表格所需参数数据
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
		// border默认为true
		@Prop({type: Boolean, default: true}) border
		@Prop(Boolean) needPagination
		@Prop({type: Boolean, default: true}) needDownload
		@Prop(Boolean) loading
		
		// 控制弹框是否显示
		visible = false
		// 钻取数据
		drilling = {
			fetch: f => f,
			params: {},
			header: [],
		}
		
		// 控制表格是否折叠；折叠为true
		isExpanded = false
		hovering = false
		
		// 根据isExpanded计算图标
		get iconClass() {
			return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
		}
		
		// 同上
		get controlText() {
			return this.isExpanded ? '收起全部' : '展开全部'
		}
		
		// 处理接受的data表格数据
		get tableData() {
			// compact：lodash方法；接受一个数组来删除数组内false, null, 0, "", undefined, NAN等值
			let data = this.$lo.compact(this.data)
			// 如果data为空则返回空
			if (!data || this.$lo.isEmpty(data)) return []
			// 如果data的长度大于10并且collapse为真并且isExpanded为假时对数组进行截取
			if (this.$lo.size(this.data) > 10 && this.collapse && !this.isExpanded) {
				data = data.slice(0, this.$lo.isBoolean(this.collapse) ? 5 : +this.collapse)
			}
			
			return data
		}
		
		//同上
		get tableHeader() {
			if (this.$lo.size(this.header) === 0) return []
			return this.$lo.compact(this.header)
		}
		
		// 处理下载数据downloadData
		get allData() {
			// 如果downloadData为function对象返回downloadData
			if (this.$lo.isFunction(this.downloadData)) return this.downloadData
			// 如果downloadData为空时返回处理过的data数据作为downloadData
			if (this.$lo.isEmpty(this.downloadData)) return [this.formatData()]
			
			return this.$lo.map(this.downloadData, item => this.formatData(item.data, item))
		}
		
		mounted() {
			if (this.root && this.$refs.downloadBtn && this.name) {
				this.$store.dispatch('setReportDownloads', this.$refs.downloadBtn.makeExcel)
			}
		}
		
		// 从子组件接受钻取数据
		handleDrilling(drilling) {
			this.drilling = drilling
			this.visible = true
		}
		
		// 下载数据进行处理
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
