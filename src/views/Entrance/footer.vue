<template>
	<el-footer>Footer</el-footer>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
	
	}
</script>

<style lang="less" scoped>
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
</style>
