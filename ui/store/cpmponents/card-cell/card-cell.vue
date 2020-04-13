<template>
	<view class="card-cell" >
		<view class="img-cell">
			<image class="card-img" :src="require('../../common/image/img5.jpg')" mode="aspectFill"></image>
			<view class="img-element1 element" @click="xin=!xin" v-if="point1">
				<i class="iconfont" :class="[xin?' iconhongxin':' iconkongxin']"></i>
			</view>
			<view class="img-element2 element" v-if="point2">
				<text>新</text>
			</view>
		</view>
		<view class="text-cell" v-if="details">
			<view class="txt1"><text>阿迪达斯</text></view>
			<view class="txt2"><text>女士黑色外套</text></view>
			<view class="txt3"><text>￥499.99</text></view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			point1:{
				type:Boolean,
				default:false
			},
			point2:{
				type:Boolean,
				default:false
			},
			details:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return{
				xin:false
			}
		}
	}
</script>

<style scoped>
	.card-cell{
		margin: 20rpx;
		text-align: center;
		border-radius: 30rpx;
		box-shadow: 4rpx 4rpx 10rpx #CCCCCC;
	}
	.img-cell{
		position: relative;
	}
	.card-img{
		width: 100%;
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
