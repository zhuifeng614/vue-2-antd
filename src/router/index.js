import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
export default new Router({
	routes:[
			{
				path: '/',
				redirect:"/login"
			},
			{
				path: '/login',
				name: 'login',
				meta: {
					title: '登录',
				},
				component: () => import('@/pages/login/login.vue'),
			},
			{
				path: '/home',
				name: 'home',
				redirect:"/home/purchasetype",
				// meta: { title: '主页'},
				component: () => import('@/pages/home/home.vue'),
				children:[
					{
						path: 'purchasetype',
						name: 'purchasetype',
						meta: {
							title: '采购类型',
						},
						component: () => import('@/pages/purchasetype/purchasetype.vue'),
					},
					{
						path: 'replenish',
						name: 'replenish',
						meta: {
							title: '采购进货单',
						},
						component: () => import('@/pages/replenish/replenish.vue')
					},
					{
						path: 'purchaseaffirm',
						name: 'purchaseaffirm',
						meta: {
							title: '采购确认单',
						},
						component: () => import('@/pages/purchaseaffirm/purchaseaffirm.vue')
					},
					{
						path: 'purchasephysical',
						name: 'purchasephysical',
						meta: {
							title: '采购单物流',
						},
						component: () => import('@/pages/purchasephysical/purchasephysical.vue')
					},
					{
						path: 'purchasetake',
						name: 'purchasetake',
						meta: {
							title: '采购收货单',
						},
						component: () => import('@/pages/purchasetake/purchasetake.vue')
					},
					{
						path: 'purchasesales',
						name: 'purchasesales',
						meta: {
							title: '采购退货单',
						},
						component: () => import('@/pages/purchasesales/purchasesales.vue')
					},
					{
						path: 'purchaseinform',
						name: 'purchaseinform',
						meta: {
							title: '采购通知',
						},
						component: () => import('@/pages/purchaseinform/purchaseinform.vue')
					}
				]
			},
	]
})