<template>
	<el-main>Main</el-main>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
	
	}
</script>

<style lang="less" scoped>
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 500px;
	}
</style>
