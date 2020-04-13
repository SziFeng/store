<template>
	<view>
		<swiper
			class="swiper" 
			next-margin="170rpx" 
			circular  
			autoplay
			:indicator-dots="indicatorDots" 
			:interval="interval" 
			:duration="duration">
			<block v-for="(item,index) in imgList" :key="index">
				<swiper-item class="swiper-item">
					<image class="item-img" :src="item.img" lazy-load mode="scaleToFill"></image>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			imgList:{
				type:Array,
				default:function(){
					return []
				}
			}
			
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.swiper{
	/* padding: 30rpx; */
	height: 400rpx;
	width: 100%;
}
.swiper-item {
	/* height: 500rpx; */
	height: 255upx;
	padding: 0upx 20upx;
	box-sizing: border-box;
	position: relative;
}
.item-img {
	position: absolute;
	width: 95%;
	height: 380rpx;
	/* height: 255upx; */
	border-radius: 30rpx;
	z-index: 5;
	opacity: 0.7;
	top: 5%;
}
</style>
