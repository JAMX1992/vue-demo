<template>
	<div id="head">
		<div id="head-turn" @click="turnHome()"></div>
		<div id="head-title">{{title}}</div>
		<div id="head-more"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title: '主页'
			}
		},
		methods: {
			turnHome() {
				window.location.hash = 'home';
			}
		}
	}
</script>

<style lang="scss" scoped>
	#head {
		position: fixed;
		width: 100%;
		background: #18c9e8;
		top: 0px;
		left: 0px;
		display: table;
		#head-turn, #head-title, #head-more {
			height: 30px;
			background: #18c9e8;
			text-align: center;
			display: table-cell;
			line-height: 30px;
			color: #fff;
		}
		#head-turn, #head-more {
			width: 50px;
		}
		#head-title {
			font-weight: bold;
		}
		#head-turn:after {
			content: '';
			display: inline-block;
			width: 10px;
			height: 10px;
			border-top: 2px solid #fff;
			border-left: 2px solid #fff;
			transform: rotate(-45deg);
		}
	}
</style>