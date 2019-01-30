<template>
	<section class="content">
		<el-row :gutter="20" style="margin-top: 60px">
			<el-col :span="20" :offset="2" style="margin-top: 20px">
				<el-row :gutter="20">
					<el-col v-for="item in data" :key="item.name" :span="8" class="report-wrapper" :style="{marginTop:'10px'}">
						<router-link :to="{path: `${item.router}`}" :style="{textDecoration: 'none'}">
							<el-card shadow="hover" class="block-card" :body-style="{height: '200px',padding: '20px',overflow :'auto'}">
								<section slot="header" class="card-header">
									<span>{{ item.name }}</span>
								</section>
								<el-table
									:data="item.childs"
									style="width: 100%">
									<el-table-column
										prop="index"
										label="序号"
										width="180"
									/>
									<el-table-column
										prop="name"
										label="列表"
										width="180"
									/>
								</el-table>
							</el-card>
						</router-link>
					</el-col>
				</el-row>
			
			</el-col>
		</el-row>
	</section>
</template>

<script>
	import {Getter,Action} from 'vuex-class'
	import {Vue, Component} from 'vue-property-decorator'
	
	
	@Component
	export default class Entrance extends Vue {
		@Getter data
		@Action setUserInfo
		
	}
</script>
<style lang="less" scoped>
	.content {
		.report-wrapper {
			margin-bottom: 20px;
			.card-header {
				display: flex;
				align-items: center;
				font-size: 16px;
				.header-desc {
					font-size: 12px;
				}
				span {
					flex-grow: 1;
				}
			}
		}
	}
	
	.block-card {
		&:hover {
			transform: translateY(-3px) scale(1.01);
		}
		.el-card__header {
			padding: 10px 20px;
		}
	}
</style>
