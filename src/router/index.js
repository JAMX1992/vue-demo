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
console.log(home)

export default [{
	path: '/',
	component: App,
	children: [{
			    path: '',
			    redirect: '/home',
			},{
				path: '/home',
				component: home				
			}]
}]
