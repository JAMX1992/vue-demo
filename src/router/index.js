// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })

import App from '../App';

import home from '../page/home/home'
import takeout from '../page/takeout/takeout'
import search from '../page/search/search'
import order from '../page/order/order'
import my from '../page/my/my'

export default [{
	path: '/',
	component: App,
	children: [{
			    path: '',
			    redirect: '/home',
			},{
				path: '/home',
				component: home,
				children: [
					{
						path: 'takeout',
						component: takeout
					},{
						path: 'search',
						component: search
					},{
						path: 'order',
						component: order
					},{
						path: 'my',
						component: my
					}
				]
			}]
}]
