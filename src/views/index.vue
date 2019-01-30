<template>
	<section class="entrance">
		<top-nav/>
		<!--mode="out-in"当前元素先进行过渡，完成之后新元素过渡进入。-->
		<transition
			mode="out-in"
			name="custom-classes-transition"
			enter-active-class="animated fadeInLeft"
			leave-active-class="animated bounceOutRight"
		>
			<keep-alive v-if="show">
				<router-view class="main-content"/>
			</keep-alive>
		</transition>
	</section>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	import TopNav from './TopNav'
	
	@Component({components: { TopNav}})
	export default class Entrance extends Vue {
		show = false
		mounted() {
			setTimeout(() => {
				this.show = true
			}, 500)
		}
		
	}
</script>
<style lang="less">
	.div{
		margin-top: 60px;
	}
</style>
