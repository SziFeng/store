<template>
	<view class="swiper">
		<view class="myflex" v-for="item in 3" :key="item">
			<view class="check-box">
				<checkbox  :checked="false" color="#EA4D4F"/>
			</view>
			<view class="container myflex">
				<view class="myflex">
					<view class="img-cell">
						<image class="img-cells" :src="require('../../../common/image/img4.jpg')" mode="scaleToFill"></image>
					</view>
					<view class="desc-cell">
						<view class="">女士外套 中性</view>
						<view class="">尺码：M,颜色：白</view>
						<view class=""></view>
					</view>
				</view>
				<view class="price-cell">
					￥<text>39.9</text>
				</view>
			</view>
		</view>
		<view class="car-cell myflex">
			<view class="myflex cells">
				<view class="check-cell"><checkbox  :checked="false" color="#EA4D4F"/>全选</view>
				<view class="total-cell">合计：1900元</view>
				<view class="btn-cell">去结算(0)</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components:{
		},
		data() {
			return {
				
			}
		},
		methods: {
			test(){
				console.log('1111')
				this.$push('/pages/index/index')
			}
		}
	}
</script>

<style scoped>
.swiper{
	padding-bottom: 130rpx;
}
.title-cell{
	padding: 10rpx 20rpx;
	box-shadow: 0 0 20rpx #CCCCCC;
	color: #666666;
}
.name{
	font-size: 44rpx;
	font-weight: 500;
}
.price{
	font-size: 44rpx;
	color: #EA4D4F;
}
.total{
	color: #666666;
}
.check-box{
	flex: 3;
	text-align: right!important;
}
.container{
	margin:20rpx;
	padding: 16rpx;
	border-radius: 30rpx;
	box-shadow: 0 0 10rpx #CCCCCC;
	flex: 20;
}
.img-cell{
	position: relative;
	width: 150rpx;
	height: 150rpx;
	overflow: hidden;
}
.img-cells{
	position: absolute;
	height: 100%;
	width: 100%;
	border-radius: 30rpx;
}
.desc-cell{
	padding-left: 20rpx;
	color: #666666;
}
.price-cell{
	font-size: 44rpx;
	color: #EA4D4F;
}
.car-cell{
	position: fixed;
	bottom: 120rpx;
	left: 3%;
	width: 94%;
	height: 120rpx;
	/* background-color: #007AFF; */
	background-color: rgba(255, 255, 255, 0.85);
	border-radius: 30rpx;
	box-shadow: 0px 0rpx 20rpx #D9D9D9;
}
.cells{
	width: 100%;
	padding: 0 40rpx;
}
.total-cell{
	font-size: 32rpx;
}
.btn-cell{
	background-color: #EA4D4F;
	border-radius: 100rpx;
	padding:6rpx 20rpx;
	color: #FFFFFF;
	font-size: 36rpx;
}
</style>
