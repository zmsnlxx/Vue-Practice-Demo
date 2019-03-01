const state = {
	data: [
		{
			router: 'modular',
			name: '组件封装',
			index: 1,
			childs: [
				{
					label:'表单组件',
					name: 'table',
					index: '1-1',
				},
				{
					label:'分页组件',
					name: 'pagination',
					index: '1-2',
				},
				{
					label:'多选框组件',
					name: 'MultipleSelection',
					index: '1-3',
				},{
					label:'单选框组件',
					name: 'SingleElection',
					index: '1-4',
				},
				{
					label:'购物车组件',
					name: 'ShoppingCar',
					index: '1-5',
				},
			]
		},
		{
			router: 'function',
			name: '方法总结',
			background: '',
			index: 2,
			childs: [
				{
					label: '条件语句转化为遍历筛选',
					background: '',
					index: '2-1'
				},
				{
					label: '数组累加',
					background: '',
					index: '2-2'
				}, {
					label: '数组值的累加',
					background: '',
					index: '2-3'
				},
			]
		},
		{
			router: 'object',
			name: '全局对象',
			background: '',
			index: 3,
			childs: [
				{
					label: '待定',
					background: '',
					index: '3-1'
				},
				{
					label: '待定',
					background: '',
					index: '3-2'
				}, {
					label: '待定',
					background: '',
					index: '3-3'
				},
			]
		},
		{
			router: 'others',
			name: '其他',
			background: '',
			index: 4,
			childs: [
				{
					label: '待定',
					background: '',
					index: '4-1'
				}
			]
		},
	],
	shoppingData:{
		"data": {
			"pageCount": 2,
			"pageIndex": 1,
			"pvId": "26b64f01-df12-4589-ae67-9d5dbaf48e9a",
			"pageSize": 100,
			"productList": [{
				"priceStr": "79.00",
				"priceCent": 7900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/1A/10/rBACW1mRPxiAdWwUAAC_xY0lIFY914.jpg",
				"suId": "1301085060000100001",
				"supplierBackground": "黛珂原料制造商直供",
				"isNew": "0",
				"title": "小分子玻尿酸高保湿面膜",
				"salePoint": "小分子玻尿酸技术，深层渗透肌肤，补水保湿，水润亮泽，平滑肌肤",
				"evaluate": "6220条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "79.00",
				"priceCent": 7900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/1B/2A/rBACYVmfzGGAah-BAADAN3n6Vgc852.jpg",
				"suId": "1301085065000100001",
				"supplierBackground": "CPB原料制造商直供",
				"isNew": "0",
				"title": "小分子玻尿酸高保湿原液",
				"salePoint": "提高肌肤的保湿性，增加弹性，淡化细纹，使肌肤呈现年轻态",
				"evaluate": "7004条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "259.00",
				"priceCent": 25900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/01/AC/rBACVFkUGmmAF6TWAADyNA_yGUw407.jpg",
				"suId": "1300515009080000001",
				"supplierBackground": "Edgewell制造商直供",
				"isNew": "0",
				"title": "澎湃声波牙刷 Pro",
				"salePoint": "一件能明显提升幸福感的小物件",
				"evaluate": "6384条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "109.00",
				"priceCent": 10900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/63/80/rBACW1vJolmARxQfAAGrbyWcBlI637.jpg",
				"suId": "1301185124010000001",
				"supplierBackground": "海蓝之谜原料制造商直供",
				"isNew": "0",
				"title": "凝时保湿紧致淡纹面霜",
				"salePoint": "保湿淡化细纹，紧致轮廓，轻润好吸收，让肌肤重拾细滑弹润",
				"evaluate": "733条好评",
				"labels": [{
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "98.00",
				"priceCent": 9800,
				"imageUrl": "http://bfs.biyao.com/group1/M00/2A/AF/rBACW1plLbSASJYcAAGDT8lMX-U020.jpg",
				"suId": "1301405055010000001",
				"supplierBackground": "LANEIGE原料制造商直供",
				"isNew": "0",
				"title": "智能震动按摩眼霜",
				"salePoint": "含赋活多肽成份，保护娇嫩眼部肌肤，减淡干纹、细纹，均匀眼周肤色",
				"evaluate": "1738条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "169.00",
				"priceCent": 16900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/01/FD/rBACW1kT4aeAPG5QAAG6-q4jfLw327.jpg",
				"suId": "1300815054020000001",
				"supplierBackground": "Lane Crawford制造商直供",
				"isNew": "0",
				"title": "好评999+  泰国天然乳胶",
				"salePoint": "泰国进口天然乳胶原料 乳胶含量高达90%  透气缓解颈椎压力",
				"evaluate": "5851条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "49.00",
				"priceCent": 4900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/02/04/rBACW1kT4d6AacNgAAG7DNxw8B8786.jpg",
				"suId": "1301185024010100001",
				"supplierBackground": "Biotherm原料制造商直供",
				"isNew": "0",
				"title": "玫瑰洁净清爽保湿洁面乳",
				"salePoint": "滋养润泽，令肌肤洁净清爽、亮采水嫩",
				"evaluate": "4045条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "59.00",
				"priceCent": 5900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/2D/AE/rBACYVp-QqCAendkAAGFbI2S5SY554.jpg",
				"suId": "1301485110000100001",
				"supplierBackground": "希尔顿酒店床品制造商直供",
				"isNew": "0",
				"title": "S.S.抗菌浴室拖鞋2双装",
				"salePoint": "EVA材料，舒爽透气 舒适加厚鞋底  耐磨便清洗  简约素色 简洁大方",
				"evaluate": "2223条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "69.00",
				"priceCent": 6900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/14/72/rBACVFldoGOAGCRfAAE7JHCBWmA828.jpg",
				"suId": "1301085049000100001",
				"supplierBackground": "sisley原料制造商直供",
				"isNew": "0",
				"title": "法国葡萄籽臻亮精华水",
				"salePoint": "给予肌肤多方位的呵护，补水、清润、提亮肤色",
				"evaluate": "2923条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "99.00",
				"priceCent": 9900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/02/04/rBACW1kT4d2AbAaXAAGSoL5O0uQ112.jpg",
				"suId": "1301185017010100001",
				"supplierBackground": "YSL原料制造商直供",
				"isNew": "0",
				"title": "香榭娇宠口红2支装系列",
				"salePoint": "轻易延展，水嫩服帖，浓郁饱满",
				"evaluate": "7105条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "89.00",
				"priceCent": 8900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/2E/D3/rBACW1qWjb2AKygSAADnUThCxoM716.jpg",
				"suId": "1301085113000900001",
				"supplierBackground": "Dior原料制造商直供",
				"isNew": "0",
				"title": "玻尿酸淡纹变色唇膏",
				"salePoint": "采用玻尿酸微球，膨胀后令肌肤紧致丰满性感、抚平皱纹，独特的温感变色效果",
				"evaluate": "1502条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "49.00",
				"priceCent": 4900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/2D/9E/rBACVFqd-fSAL8WWAAFI3KONuSE098.jpg",
				"suId": "1301915004010100001",
				"supplierBackground": "MC Airlaids设备制造商直供",
				"isNew": "0",
				"title": "菲菲羽儿卫生巾组合适量型",
				"salePoint": "女神专享贴近肌肤天然弱酸值PH5.5的羽薄防侧漏卫生巾",
				"evaluate": "1620条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "79.00",
				"priceCent": 7900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/02/04/rBACW1kT4d6AVq2ZAAEzVZ-Si-8623.jpg",
				"suId": "1301185019010100001",
				"supplierBackground": "Biotherm原料制造商直供",
				"isNew": "0",
				"title": "焕彩透亮保湿隔离霜",
				"salePoint": "隔离护肤，妆容持久，光采水润",
				"evaluate": "2562条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "89.00",
				"priceCent": 8900,
				"imageUrl": "http://bfs.biyao.com/group1/M00/22/06/rBACVFocoumAfCucAAFphC5nj0k103.jpg",
				"suId": "1301915001010100001",
				"supplierBackground": "MC Airlaids设备制造商直供",
				"isNew": "0",
				"title": "菲菲羽儿弱酸性纸尿裤L码",
				"salePoint": "接近宝宝皮肤PH 5.5数值的超柔透气弱酸性面层，远离尿布疹 L码",
				"evaluate": "1671条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}, {
				"priceStr": "68.00",
				"priceCent": 6800,
				"imageUrl": "http://bfs.biyao.com/group1/M00/0D/98/rBACVFkZiU-AJF-SAADsT4jW47k027.jpg",
				"suId": "1301085034000900001",
				"supplierBackground": "CHANEL原料制造商直供",
				"isNew": "0",
				"title": "灵动明眸眉笔套装",
				"salePoint": "轻松打造精致眉妆，眉毛=\u201c美貌\u201d",
				"evaluate": "2077条好评",
				"labels": [{
					"color": "#AB7FD1",
					"roundColor": "#AB7FD1",
					"textColor": "#FFFFFF",
					"content": "爆品"
				}, {
					"color": "#FFFFFF",
					"roundColor": "#FB4C81",
					"textColor": "#FB4C81",
					"content": "一起拼"
				}]
			}]
		},
		"success": 1,
		"error": null
	}
}
const mutations = {

}

const actions = {

}

const data = {state, mutations, actions}

export default data
