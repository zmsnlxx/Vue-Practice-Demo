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
		<!--
				多级表头：
				element-ui的 el-table-column 里面嵌套 el-table-column，就可以实现多级表头。
				在表头数据中增加childs来实现多级表头
		-->
		<template v-if="item.childs">
			<recursion-column v-for="(child, index) in item.childs" :key="`${child.prop}_${index}`" :item="child" @drilling="handleDrilling"/>
		</template>
		<!--
				在el-table-column内部设置scoped-slot属性可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据；
				可以使用该方法完成表格的自定义列模板
		-->
		<template slot-scope="{row}">
			<!--<span>{{ row[item.prop] }}</span>-->
			
			<!--
				row接受两种形式的数据：
					 1，row[item.prop]含有type属性时，单元格可以被点击，点击后会重新打开一个页面来显示表格详细内容；栗子：row = {name: '德莱厄斯', location: '战士', gender: '男性英雄', desc: '诺克萨斯之手',class:{type: 'link',value: 3,}},
					 2，当row[item.prop]是对象,并且内部含有drilling对象时，单元格也可以被点击，点击之后会以弹框的形式展示另外一个表格，该表格包含需要查看的详细内容；具体效果查看demo
			-->
			<section v-if="row[item.prop] && row[item.prop].type">
				<!-- 如果row数据的type==='link' 跳转的新的页面 -->
				<!--<router-link v-if="row[item.prop].type === 'link'" target="_blank" :to="{path:'./home'}">-->
					<!--<el-button type="text">{{ row[item.prop].value }}</el-button>-->
				<!--</router-link>-->
				<a v-if="row[item.prop].type === 'link'" target="_blank" :href="'http://lol.qq.com/web201310/info-defail.shtml?id=' + row[item.prop].id">
					<el-button type="text">{{ row[item.prop].value }}</el-button>
				</a>
			</section>
			
			<section v-else>
				<el-button
					v-if="_.isObject(row[item.prop]) && row[item.prop].drilling && row[item.prop].value !== 0"
					@click="handleDrilling(row[item.prop].drilling)"
					type="text"
				>
					{{ row[item.prop].value }}
				</el-button>
				<span v-else>{{ row[item.prop] }}</span>
			</section>
		</template>
	</el-table-column>
</template>

<script>
	import {Vue, Component, Prop} from 'vue-property-decorator'
	
	@Component
	export default class RecursionColumn extends Vue {
		// 从父组件接受值
		@Prop(Object) item
		
		handleDrilling(drilling) {
			// 点击时向父组件传值
			this.$emit('drilling', drilling)
		}
	}
</script>
