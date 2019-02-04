<!-- 多选框组件封装 -->
<template>
	<el-row class="checkbox-group" style="padding: 0 0;position: relative">
		<el-col :span="2" style="line-height: 45px;font-size: 20px">
			{{ label }}：
		</el-col>
		<el-col :span="21">
			<el-row>
				<el-checkbox-group v-model="options" @change="handleCheckOption">
					<el-checkbox style="margin-right: 30px" class="text-overflow" label="all" @change="handleCheckAll">全部</el-checkbox>
					<template v-for="(group,index) in sortGroups">
						<el-tooltip v-show="collapse(index)" :disabled="tooltip($refs[`test-${index}`])" :content="group.name" placement="top" :key="group.key">
							<el-checkbox class="text-overflow" style="margin-left: 0;margin-right: 30px" :label="group.key">{{ group.name }}</el-checkbox>
						</el-tooltip>
					</template>
				</el-checkbox-group>
			</el-row>
		</el-col>
		<el-col :span="1" style="line-height: 45px;position: absolute;right: 0" v-if="$lo.size(checkedGroup) > 5">
			<span @click="handleClick" class="collapse">{{ text }}<i :class="[className]"/></span>
		</el-col>
	</el-row>
</template>

<script>
	import {Vue, Component, Prop} from 'vue-property-decorator'
	
	@Component
	export default class fxCheckboxGroup extends Vue {
		@Prop(String) label
		@Prop(Object) checkedGroup
		switch = true
		options = []
		checkAll = false
		
		get sortGroups() {
			return this.$lo.chain(this.checkedGroup).map((val, key) => {
				return {name: val, key}
			}).sortBy(({name}) => {
				return name.replace(/[^0-9]/ig, "")
			}).value()
		}
		
		get text() {
			return this.switch ? '展开' : '收起'
		}
		
		get className() {
			return this.switch ? 'el-icon-arrow-down' : 'el-icon-arrow-up'
		}
		
		collapse(index) {
			return index < 5 || !this.switch
		}
		
		tooltip(el, val = true) {
			if (val) return true
			if (this.$lo.isEmpty(el)) return true
			return el[0].content.length < 11
		}
		
		handleCheckOption() {
			this.options = this.options.filter(option => option !== 'all')
			if (this.options.length === this.$lo.size(this.checkedGroup)) {
				this.options.push('all')
			}
		}
		
		handleCheckAll(value) {
			this.options = value ? [...this.$lo.map(this.checkedGroup, (value, key) => key), 'all'] : []
		}
		
		handleClick() {
			this.switch = !this.switch
		}
		
		mounted() {
			this.options = [...this.$lo.map(this.checkedGroup, (value, key) => key), 'all']
			this.$watch('checkedGroup', () => {
				this.options = [...this.$lo.map(this.checkedGroup, (value, key) => key), 'all']
			})
			this.$emit('change', this.options)
			this.$watch('options', () => {
				this.$emit('change', this.options)
			})
		}
	}
</script>
<style lang="less">
	.text-overflow {
		min-width: 30px;
		width: 120px;
		line-height: 45px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
