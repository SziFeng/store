
<template>
	<view>
		<view :class="[show?'menu2':'menu']">
			<view class="card" v-for="item in 10" :key="item">
				<view class="card-item">
					<image class="card-img" :src="require('../../common/image/img4.jpg')" mode="scaleToFill"></image>
				</view>
				<view class="card-text"><text>MEN</text></view>
			</view>
		</view>
		<view class="menu-bot"></view>
	</view>
</template>

<script>
	export default {
		props:{
			show:Boolean
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@keyframes show{
	from{
		height: 590rpx;
	}
	to{
		height: 300rpx;
	}
}
.menu{
	height: 300rpx;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(3,33.33%);
	margin: 20rpx 10rpx;
	animation: show 1s;
}
@keyframes show2{
	from{
		height: 300rpx;
	}
	to{
		height: 590rpx;
	}
}
.menu2{
	height: 590rpx;
	overflow: hidden;
	/* overflow-y: scroll; */
	display: grid;
	grid-template-columns: repeat(3,33.33%);
	margin: 20rpx 10rpx;
	animation: show2 1s;
}
.menu3{
	height: 900rpx;
	overflow: hidden;
	overflow-y: scroll;
	display: grid;
	grid-template-columns: repeat(3,33.33%);
	margin: 20rpx 10rpx;
	animation: show2 1s;
}
.menu-bot{
	position:relative ;
	bottom: 0rpx;
	width: 90rpx;
	height: 15rpx;
	background-color: #CCCCCC;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 30rpx;
}
.card{
	padding: 0 10rpx;
	height: 300rpx;
	border-radius: 30rpx;
}
.card-item{
	height: 224rpx;
	box-sizing: border-box;
	box-sizing: content-box;
	position: relative;
	display: flex;
	justify-content: center;
}
.card-img {
	position: absolute;
	width: 95%;
	height: inherit;
	border-radius: 30rpx;
}
.card-text{
	text-align: center;
	vertical-align: baseline;
	font-size: 32rpx;
	line-height: 1.8;
}
</style>
