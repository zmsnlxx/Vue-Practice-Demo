<template>
	<section class="entrance">
		<top-nav/>
		<el-row class="content">
			<el-col :span="4">
				<aside-nav class="el-aside" />
			</el-col>
			<el-col :span="20" class="content">
				<content-nav/>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	import AsideNav from './aside'
	import TopNav from './header'
	import ContentNav from './main'
	import FooterNav from './footer'
	
	
	@Component({components: {AsideNav, TopNav,ContentNav,FooterNav}})
	export default class Entrance extends Vue {
	
	}
</script>
<style lang="less" scoped>
	.entrance{
		height: 100%;
		.content{
			height: 90%;
		}
	}
</style>
