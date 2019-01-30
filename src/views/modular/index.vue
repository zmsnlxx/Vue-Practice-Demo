<template>
	<div class="div">
		<h1>lxxsssssssssssssss</h1>
	</div>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	import {Getter} from 'vuex-class'
	
	
	@Component
	export default class Name extends Vue {
		@Getter user
		
		mounted(){
			console.log(this.user)
		}
	}
</script>

<style lang="less" scoped>

</style>
