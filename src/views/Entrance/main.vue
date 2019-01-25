<template>
	<el-main>
		<el-card class="box-card">
			<div>
				lxx
			</div>
		</el-card>
	</el-main>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
	
	}
</script>

<style lang="less" scoped>
	.el-main {
		text-align: center;
		line-height: 600px;
		.box-card{
			background-color: aliceblue;
		}
	}
</style>
