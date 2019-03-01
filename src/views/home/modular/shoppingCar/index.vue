<template>
	<section class="shop_car">
		<h1>购物车</h1>
		<ShoppingCar
			:header="shopHead"
			:data="shopData"
		/>
		<!--<el-row type="flex" class="row-bg" justify="space-around" style="margin: 20px 0">-->
			<!--<el-col :span="2">-->
				<!--<div class="grid-content bg-purple" style="text-align: center">-->
					<!--选择-->
				<!--</div>-->
			<!--</el-col>-->
			<!--<el-col :span="2">-->
				<!--<div class="grid-content bg-purple" style="text-align: center">-->
					<!--序号-->
				<!--</div>-->
			<!--</el-col>-->
			<!--<el-col :span="2">-->
				<!--<div class="grid-content bg-purple" style="text-align: center">-->
					<!--图片-->
				<!--</div>-->
			<!--</el-col>-->
			<!--<el-col :span="4">-->
				<!--<div class="grid-content bg-purple" style="text-align: center">-->
					<!--商品-->
				<!--</div>-->
			<!--</el-col>-->
			<!--<el-col :span="6">-->
				<!--<div class="grid-content bg-purple" style="text-align: center">-->
					<!--说明-->
				<!--</div>-->
			<!--</el-col>-->
			<!--<el-col :span="4">-->
				<!--<div class="grid-content bg-purple" style="text-align: center">-->
					<!--价格-->
				<!--</div>-->
			<!--</el-col>-->
			<!--<el-col :span="4">-->
				<!--<div class="grid-content bg-purple" style="text-align: center">-->
					<!--数量-->
				<!--</div>-->
			<!--</el-col>-->
		<!--</el-row>-->
		
		<!--<div>-->
			<!--<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">-->
				<!--<el-checkbox v-for="(item,index) in shoppingData" :key="index" style="margin-top: 20px">-->
					<!---->
					<!--<el-row type="flex" class="row-bg" justify="space-around" style="margin: 20px 0;height: 50px;">-->
						<!--<el-col :span="2">-->
							<!--<div style="text-align: center;height: 100%">-->
								<!--<span style="line-height: 50px">{{ index + 1 }}</span>-->
							<!--</div>-->
						<!--</el-col>-->
						<!--<el-col :span="2">-->
							<!--<div class="grid-content bg-purple" style="text-align: center;height: 100%">-->
								<!--<img :src="item.imageUrl" alt="" style="width: 50px;height: 100%">-->
							<!--</div>-->
						<!--</el-col>-->
						<!--<el-col :span="4">-->
							<!--<div class="grid-content bg-purple" style="text-align: center;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">-->
								<!--<span style="line-height: 50px;">{{ item.title }}</span>-->
							<!--</div>-->
						<!--</el-col>-->
						<!--<el-col :span="6">-->
							<!--<div class="grid-content bg-purple" style="text-align: center;height: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">-->
								<!--<span style="line-height: 50px">{{ item.salePoint }}</span>-->
							<!--</div>-->
						<!--</el-col>-->
						<!--<el-col :span="4">-->
							<!--<div class="grid-content bg-purple" style="text-align: center;">-->
								<!--<span style="color: red;line-height: 50px">{{ item.priceStr }}</span>-->
							<!--</div>-->
						<!--</el-col>-->
						<!--<el-col :span="4" style=" display: flex;justify-content:center;align-items:Center;">-->
							<!--<div class="grid-content bg-purple" style="text-align: center;">-->
								<!--<el-input-number style="width: 90px;" placeholder="请输入" controls-position="right" value="1" @blur.prevent="changeNum(index,item.value)"/>-->
							<!--</div>-->
						<!--</el-col>-->
					<!--</el-row>-->
				<!--</el-checkbox>-->
			<!--</el-checkbox-group>-->

		<!--</div>-->
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
	import {Getter} from 'vuex-class'
	import {Vue, Component} from 'vue-property-decorator'
	
	@Component
	export default class shopCar extends Vue {
		@Getter shoppingData
		
		shopHead = [
			{label: '序号', width: 2, prop: 'num'},
			{label: '商品', width: 2, prop: 'goods'},
			{label: '图片', width: 2, prop: 'image'},
			{label: '简介', width: 8, prop: 'desc'},
			{label: '数量', width: 6, prop: 'quantity'},
		]
		
		get shopData(){
			return this.$lo.map(this.shoppingData,(item,index) => {
				return {
					num: index + 1,
					goods: item.title,
					image: item.imageUrl,
					desc: item.salePoint,
					quantity: 1,
				}
			})
		}
	}
</script>

<style lang="less" scoped>

</style>
