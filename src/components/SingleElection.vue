<!-- 单选框组件封装 -->
<template>
	<el-row class="fx-radio-group" style="position: relative">
		<el-col style="width: 80px;line-height: 45px;font-size: 16px;">
			{{ label }}：
		</el-col>
		<el-col style="width: 980px">
			<el-radio-group v-model="radio" border size="medium">
				<el-radio-button :label="group" v-for="(group,key) in limitGroup" :key="key">{{ group.name }}</el-radio-button>
			</el-radio-group>
		</el-col>
		<el-col style="width: 42px;line-height: 45px;position: absolute;right: 0" v-if="$lo.size(radioGroups) > 10">
			<span @click="handleClick" class="collapse">{{ text }}<i :class="[className]"/></span>
		</el-col>
	</el-row>

</template>

<script>
	import {Vue, Component, Prop} from 'vue-property-decorator'
	
	@Component
	export default class fxRadioGroup extends Vue {
		@Prop(Array) radioGroups
		@Prop(String) label
		radio = null
		switch = true
		
		get limitGroup() {
			if (this.switch) {
				return this.$lo.take(this.radioGroups, 10)
			} else {
				return this.radioGroups
			}
		}
		
		get text() {
			return this.switch ? '展开' : '收起'
		}
		
		get className() {
			return this.switch ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
		}
		
		handleClick() {
			this.switch = !this.switch
		}
		
		mounted() {
			if(this.$lo.size(this.radioGroups)){
				this.radio = this.radioGroups[0]
			}
			this.$emit('change', this.radio)
			this.$watch('radio', () => {
				this.$emit('change', this.radio)
			})
		}
		
	}
</script>
<style lang="less">
	.collapse {
		line-height: 30px;
		color: rgb(46, 168, 235);
		cursor: pointer;
	}
</style>
