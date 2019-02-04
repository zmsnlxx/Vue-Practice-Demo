<template>
	<el-table-column
		:label="item.label"
		:prop="item.prop"
		:width="item.width"
		:min-width="item.minWidth"
		:fixed="item.fixed"
		:sortable="item.sortable"
		:sort-method="item.sortMethod"
		:render-header="item.renderHeader"
		align="center"
	>
		<template v-if="item.childs">
			<recursion-column v-for="(child, index) in item.childs" :key="`${child.prop}_${index}`" :item="child" @drilling="handleDrilling"/>
		</template>
		<template slot-scope="{row}">
			<section v-if="row[item.prop] && row[item.prop].type">
				<arrow v-if="row[item.prop].type === 'arrow'" :score="row[item.prop].value"/>
				<el-button v-if="row[item.prop].type === 'button'" @click="row[item.prop].handleClick()" type="text">{{ row[item.prop].value }}</el-button>
				<router-link v-if="row[item.prop].type === 'link'" target="_blank" :to="{name: row[item.prop].name, query: row[item.prop].query}"/>
			</section>
			<section v-else>
				<el-button
					v-if="_.isObject(row[item.prop]) && row[item.prop].drilling && row[item.prop].value !== 0 && !isPdf"
					@click="handleDrilling(row[item.prop].drilling)"
					type="text"
				>
					{{ getFormatData(row[item.prop].value, item.formatter) }}
				</el-button>
				<div
					v-else-if="_.isObject(row[item.prop])"
					:style="row[item.prop].style && _.pick(row[item.prop].style, ['color', 'background'])"
					class="cell-style"
				>
					{{ getFormatData(row[item.prop].value, item.formatter) }}
				</div>
				<span v-else :style="getCellStyle(row[item.prop])">{{ getFormatData(row[item.prop], item.formatter) }}</span>
			</section>
		</template>
	</el-table-column>
</template>

<script>
	import {Vue, Component, Prop} from 'vue-property-decorator'
	
	@Component
	export default class RecursionColumn extends Vue {
		@Prop(Object) item
		
		get isPdf() {
			return this.$route.query.export
		}
		
		handleDrilling(drilling) {
			this.$emit('drilling', drilling)
		}
		
		getFormatData(value, formatter) {
			let cellValue = value
			if (this.$lo.isObject(value)) cellValue = value.value
			if (formatter) {
				if (this.$lo.isFunction(formatter)) return formatter(cellValue)
				if (this.$lo.isString(formatter)) {
					if (formatter === 'percentage') {
						if (this.$lo.isNumber(cellValue) && cellValue !== 0) return `${cellValue}%`
						return cellValue
					}
				}
			}
			else return cellValue
		}
		
		getCellStyle(value) {
			const style = {}
			if (value === '未考') style.color = '#999'
			return style
		}
	}
</script>
<style lang="less" scoped>
	.ss{
		color: #f6953d;
	}
</style>
