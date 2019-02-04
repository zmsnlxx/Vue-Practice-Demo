<template>
	<section class="MultipleSelection">
		<h1 style="font-size: 20px">用法：</h1>
		<p style="font-size: 16px">
			该组件接受两个参数:1，需要展示的数据对象；2，函数方法，该函数用来接收所选择的数据
		</p>
		<h1 style="font-size: 20px">效果：</h1>
		<MultipleSelection
			label="书籍"
			:checked-group="Books"
			@change="changeBooks"
		/>
		<div>
			<el-row>
				<el-col :span="2" style="line-height: 45px;font-size: 20px">
					结论：
				</el-col>
				<el-col :span="22" style="line-height: 45px;font-size: 20px">
					{{ currentBook }}
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script>
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class Name extends Vue {
		currentBook = null
		
		get Books(){
			return {
				3728: "西游记",
				11894: "红楼梦",
				11895: "水浒传",
				12204: "三国演义",
				12206: "你不知道的Javascript上",
				12207: "你不知道的Javascript中",
				12236: "你不知道的Javascript下",
			}
		}
		
		changeBooks(book){
			this.currentBook = book
		}
	}
</script>

<style lang="less" scoped>

</style>
