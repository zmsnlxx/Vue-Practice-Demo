<template>
	<section class="function" style="margin-top: 100px;height: 80%;background-color: white">
		<h1>lxx</h1>
	</section>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	import {Getter} from 'vuex-class'
	
	
	
	
	@Component
	export default class Name extends Vue {
		@Getter function
		
		loading = true
		
		mounted() {
			setTimeout(() => {
				this.loading = false
			}, 2000)
		}
		
		get list(){
			return this.$lo.map(this.function.childs, (item,index) => {
				console.log(item)
				const result = {}
				result['name'] = item.name
				result['index'] = index
				
				return result
			})
		}
		
		onModuleChange(index){
		}
		
	}
</script>

<style lang="less" scoped>
	.function{
		width: 90%;
		margin: auto;
	}
</style>
