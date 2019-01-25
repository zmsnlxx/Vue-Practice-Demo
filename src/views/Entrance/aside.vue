<template>
	<section class="aside">
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
		>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"/>
					<span>组件封装</span>
				</template>
				<el-menu-item-group>
					<template slot="title">表格组件</template>
					<el-menu-item index="1-1">Element-table组件的二次封装</el-menu-item>
					<el-menu-item index="1-2">分页组件</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="选择框组件">
					<el-menu-item index="1-3">多选与全选</el-menu-item>
					<el-menu-item index="1-4">单个选项切换</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-5">
					<template slot="title">选项4</template>
					<el-menu-item index="1-5-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu"/>
					<span>方法总结</span>
				</template>
				<el-menu-item-group>
					<template slot="title">常用函数</template>
					<el-menu-item index="2-1">条件语句转化为遍历筛选</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="2-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>
				<i class="el-icon-document"/>
				<span slot="title">导航三</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="el-icon-setting"/>
				<span slot="title">导航四</span>
			</el-menu-item>
		</el-menu>
	</section>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
		
		handleOpen(key, keyPath) {
			// console.log(key, keyPath)
		}
		
		handleClose(key, keyPath) {
			// console.log(key, keyPath)
		}
	}
</script>

<style lang="less" scoped>

</style>
