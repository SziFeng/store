<template>
	<view class="card-cell" >
		<view class="img-cell">
			<image class="card-img" :src="require('../../common/image/img5.jpg')" mode="scaleToFill"></image>
			<view class="img-element1 element" @click="xin=!xin">
				<i class="iconfont" :class="[xin?' iconkongxin':' iconhongxin']"></i>
			</view>
			<view class="img-element2 element">
				<text>新</text>
			</view>
		</view>
		<view class="text-cell">
			<view class="txt1"><text>阿迪达斯</text></view>
			<view class="txt2"><text>女士黑色外套</text></view>
			<view class="txt3"><text>￥499.99</text></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				xin:false
			}
		}
	}
</script>

<style>
	.card-cell{
		padding: 20rpx;
		text-align: center;
	}
	.img-cell{
		position: relative;
	}
	.card-img{
		width: 300rpx;
		height: 300rpx;
		border-radius: 30rpx;
	}
	.img-element1{
		top: 20rpx;
		right: 30rpx;
	}
	.img-element2{
		bottom: 20rpx;
		left: 30rpx;
	}
	.element{
		position: absolute;
		width: 75rpx;
		height: 75rpx;
		background-color: rgba(255,255,255,0.85);
		border-radius: 50%;
		line-height: 75rpx;
	}
	.iconhongxin{
		font-size: 40rpx;
		color: #ea4d4f;
	}
	.iconkongxin{
		font-size: 40rpx;
	}
	.text-cell{
		padding-left:20rpx;
		text-align: left;
		color: #666666;
	}
	.txt2{
		font-size: 36rpx;
	}
</style>
