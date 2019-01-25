<template>
	<el-header>
		<span class="title">个人总结</span>
		<span>{{ time }}</span>
	</el-header>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class TopNav extends Vue {
		time = ''
		date = new Date()
		
		mounted(){
			const that = this
			this.timer = setInterval(function () {
				that.date = new Date()
				const year = that.date.getFullYear();
				let month = that.date.getMonth() + 1;
				let strDate = that.date.getDate();
				const hour = that.date.getHours();
				const minutes = that.date.getMinutes();
				const seconds = that.date.getSeconds();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				that.time = `${year}-${month}-${strDate} ${hour}:${minutes}:${seconds}`;
			},1000)
		}
		
		beforeDestroy () {
			if(this.timer) {
				clearInterval(this.timer);//在vue实例销毁钱，清除定时器
			}
		}
	}
</script>

<style lang="less" scoped>
	.el-header {
		background-color: #9dd3fa;
		text-align: center;
		line-height: 60px;
		.title{
			color: blue;
			font-family: 'Bradley Hand';
		}
	}
</style>
