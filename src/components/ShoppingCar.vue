<template>
	<section class="shop_car">
		<el-row type="flex" class="row-bg" justify="space-around" style="margin: 20px 0">
			<el-col v-for="(item,index) in headerData" :key="index" :span="item.width">
				<div class="grid-content bg-purple" style="text-align: center">
					{{ item.label }}
				</div>
			</el-col>
		</el-row>
		
		<el-checkbox-group v-model="checkedCities" style="margin: 20px 0;">
			<template v-for="(item,index) in contentData">
				<el-checkbox style="margin-top: 20px;display: block;margin-left: 30px">
					<el-row type="flex" class="row-bg" justify="space-around" style="width: 100%">
						<el-col v-for="prop in propArr" :span="prop.width">
							<div style="text-align: center;height: 100%">
								<img style="width: 100%;height: 100%;" v-if="prop.prop === 'image'" :src="item.image" alt="">
								<span v-else style="line-height: 50px">{{ item[`${prop.prop}`] }}</span>
							</div>
							<el-button type="success">操作</el-button>
						</el-col>
					</el-row>
				</el-checkbox>
			</template>
		</el-checkbox-group>
		<!---->
		<!--<div>-->
		<!--<el-row type="flex" class="row-bg" justify="space-around" style="margin: 20px 0;height: 50px;">-->
		<!--<el-col :span="2">-->
		<!--<div style="text-align: center;height: 100%;display: flex;justify-content:center;align-items:Center;">-->
		<!--<label>-->
		<!--<input style="width: 20px;height: 20px" type="checkbox"-->
		<!--name="checkboxinput"-->
		<!--@click="checkedAll"-->
		<!--class="input-checkbox">-->
		<!--</label>-->
		<!--</div>-->
		<!--</el-col>-->
		<!--<el-col :span="2">-->
		<!--<div style="text-align: center;height: 100%">-->
		<!--<span style="line-height: 50px">全选</span>-->
		<!--</div>-->
		<!--</el-col>-->
		<!--<el-col :span="2">-->
		<!--<div class="grid-content bg-purple" style="text-align: center;height: 100%">-->
		<!--</div>-->
		<!--</el-col>-->
		<!--<el-col :span="4">-->
		<!--<div class="grid-content bg-purple" style="text-align: center;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">-->
		<!--</div>-->
		<!--</el-col>-->
		<!--<el-col :span="6">-->
		<!--<div class="grid-content bg-purple" style="text-align: center;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">-->
		<!--</div>-->
		<!--</el-col>-->
		<!--<el-col :span="4">-->
		<!--<div class="grid-content bg-purple" style="text-align: center;">-->
		<!--<span style="line-height: 50px">总计111元</span>-->
		<!--</div>-->
		<!--</el-col>-->
		<!--<el-col :span="4" style=" display: flex;justify-content:center;align-items:Center;">-->
		<!--<div class="grid-content bg-purple" style="text-align: center;">-->
		<!--<span style="line-height: 50px">总数15件</span>-->
		<!--</div>-->
		<!--</el-col>-->
		<!--</el-row>-->
		<!--</div>-->
	</section>
</template>

<script>
	import {Vue, Component, Prop} from 'vue-property-decorator'
	
	@Component
	export default class shoppingCar extends Vue {
		@Prop(Array) header
		@Prop(Array) data
		
		
		checkedCities = []
		
		
		get headerData() {
			let head = []
			if (this.$lo.size(this.header) === 0) {
				head = [
					{label: '序号', width: 2, prop: 'num'},
					{label: '商品', width: 2, prop: 'goods'},
					{label: '图片', width: 2, prop: 'image'},
					{label: '简介', width: 8, prop: 'desc'},
				]
			} else {
				this.header.unshift({label: '选择', width: 1,prop: 'select'})
				this.header.push({label: '操作', width: 1, prop: 'operating'},)
				head = this.header
			}
			
			return head
		}
		
		get contentData() {
			// console.log(this.propArr)
			return this.$lo.map(this.data, item => {
				this.$lo.map(this.headerData, head => {
					item.prop = head.prop
				})
				return item
			})
		}
		
		get propArr(){
			return this.$lo.map(this.headerData, head => {
				console.log(head)
				// if(head.prop !== 'select' || head.prop !== 'operating'){
				// 	return {
				// 		prop:head.prop,
				// 		width:head.width
				// 	}
				// }else{
				// 	return {}
				// }
			})
		}
		
	}
</script>

<style lang="less" scoped>

</style>
