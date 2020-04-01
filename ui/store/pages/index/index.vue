<template>
	<view class="content">
		<view class="" @click="test">
			启动页
		</view>
		<view class="bot-bar" >
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			test(){
				console.log('1111')
				this.$push('test',{name:'szf'})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.bot-bar{
		position: fixed;
		width: 100%;
		height:100upx;
		left: 0;
		bottom: 0;
		background-color: rgba(234, 234, 234, 0.7);
	}
</style>
