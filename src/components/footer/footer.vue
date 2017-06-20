<template>
	<div id="foot">
		<ul>
			<li v-for="item in footerNav">
				<router-link :to="'/home/'+item.route">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				watch1:'',
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
	#foot {
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
		ul {
			border-top: 1px solid #ddd;
			height: 50px;
			box-sizing: border-box;
			line-height: 50px;
			margin: 0px;
			padding: 0px;
			li {
				width: 25%;
				text-align: center;
				display: inline-block;
				list-style: none;
				font-size: 0.75em;
				float: left;
				a {
					display: inline-block;
					width: 100%;
					height: 100%;
					text-decoration: none;
					color: #333;
				}
				a.router-link-active {
					background: #f4f4f4;
				}
			}
		}
	}
</style>