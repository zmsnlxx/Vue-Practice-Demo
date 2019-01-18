<template>
	<el-header>Header</el-header>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class TopNav extends Vue {
	
	}
</script>

<style lang="less" scoped>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
</style>
