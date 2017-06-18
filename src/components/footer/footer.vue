<template>
	<div>
		<ul>
			<li v-for="item in footerNav">
				<router-link :to="'/'+item.route">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				footerNav:[
					{name:'外卖',route:'takeout'},
					{name:'搜索',route:'search'},
					{name:'订单',route:'order'},
					{name:'我的',route:'my'}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>