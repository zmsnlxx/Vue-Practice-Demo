<template>
	<section class="index"/>
</template>

<script>
	
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
		name = 'lxx'
		
		
		get userName() {
			return this.name
		}
		
		getName() {
			alert(this.userName)
		}
		
		mounted() {
			this.getName()
		}
		
		
	}
</script>

<style lang="less" scoped>

</style>
