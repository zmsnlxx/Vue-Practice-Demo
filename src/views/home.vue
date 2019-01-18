<template>
	<section class="index">
		<h1>home页面</h1>
	</section>
</template>

<script>
	
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
		name = 'liux'
		
		
		get userName() {
			return this.name
		}
		
	}
</script>

<style lang="less" scoped>

</style>
