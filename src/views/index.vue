<template>
	<section class="index">
		<table-view
			:name="userName"
		/>
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
