<template>
	<div>
		<vue-head></vue-head>
		<router-view></router-view>
		<vue-foot></vue-foot>
	</div>
</template>

<script>
	import foot from '../../components/footer/footer'
	import head from '../../components/header/head'

	export default {
		data(){
			return {};
		},
		components: {
			vueFoot: foot,
			vueHead: head
		}
	}
</script>

<style>
	
</style>