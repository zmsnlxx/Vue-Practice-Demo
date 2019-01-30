<template>
	<section class="SingleElection">
		<h1 style="font-size: 20px">用法：</h1>
		<p style="font-size: 16px">
			该组件接受两个参数:1，需要展示的数据数组；2，函数方法，该函数用来接收所选择的数据
		</p>
		<h1 style="font-size: 20px">效果：</h1>
		<SingleElection
			label="英雄"
			:radio-groups="Heros"
			@change="changeHeros"
		/>
		<div v-if="$lo.size(currentData) !== 0">
			<el-row>
				<el-col :span="2" style="line-height: 45px;font-size: 20px">
					结论：
				</el-col>
				<el-col :span="22" style="line-height: 45px;font-size: 20px">
					{{ currentData.name }}
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
		currentData = null
		
		get Heros() {
			return [
				{
					id: "master",
					name: "法师"
				},{
					id: "warrior",
					name: "战士"
				},{
					id: "Shooter",
					name: "射手"
				},{
					id: "auxiliary",
					name: "辅助"
				},{
					id: "assassin",
					name: "刺客"
				}
			]
		}
		
		changeHeros(hero) {
			this.currentData = hero
		}
	}
</script>

<style lang="less" scoped>

</style>
