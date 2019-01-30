<template>
	<section class="pagination">
		<Pagination
			:total="total"
			:fetch-data="changPage"
		>
			<div slot="prepend">
				分页页面
			</div>
		</Pagination>
	</section>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
		total = 40
		
		
		
		//切换分页
		changPage({page, pageSize}) {
			console.log(page)
			console.log(pageSize)
		}
	}
</script>

<style lang="less" scoped>

</style>
